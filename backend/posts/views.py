from django.shortcuts import get_object_or_404
from django.db.models import Q
from rest_framework.views import APIView
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes


from .serializers import PostSerializer, CommentSerializer
from .models import Comment, Post

from users.permissions import IsPosterOrReadOnly, IsCommenterOrReadOnly
from users.models import User
from users.serializers import UserSerializer

# Create your views here.

# Post views
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def post_index(req):
    # Get all posts in database
    data = Post.objects.all()
    serialized = PostSerializer(data, many=True)
    return Response({"data": serialized.data})

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def post_create(req):
    # Create new post
    serialized = PostSerializer(data=req.data)
    if serialized.is_valid():
        serialized.save()
        return Response(serialized.data, status=201)
    return Response(serialized.errors, status=400)

class PostDetail(APIView):
    # Retrieve, update, or delete a post
    permission_classes = [IsPosterOrReadOnly]

    def get_object(self, pk):
        return get_object_or_404(Post, pk=pk)
    
    def get(self, req, post_id):
        post = self.get_object(post_id)
        self.check_object_permissions(req, post)
        serialized = PostSerializer(post)
        return Response({"data": serialized.data})

    def put(self, req, post_id):
        post = self.get_object(post_id)
        self.check_object_permissions(req, post)
        # Check if new tags added

        data = req.data
        if "body" not in data:
            data["body"] = post.body

        serialized = PostSerializer(post, data=data)
        if serialized.is_valid():
            serialized.save()
            return Response({"data": serialized.data})
        return Response(serialized.errors, status=400)

    def patch(self, req, post_id):
        return self.put(req, post_id)

    def delete(self, req, post_id):
        post = self.get_object(post_id)
        self.check_object_permissions(req, post)
        post.delete()
        return Response(status=204)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def show_by_user(req, user_id):
    # Retrieve all posts made by user of id user_id
    user_posts = Post.objects.filter(poster=user_id)
    serialized = PostSerializer(user_posts, many=True)
    return Response({ "data": serialized.data })

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def show_by_category(req, category_id):
    # Retrieve all posts tagged with category of id category_id
    category_posts = Post.objects.filter(tags=category_id)
    serialized = PostSerializer(category_posts, many=True)
    return Response({ "data": serialized.data })

# Comment views
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def comment_index(req):
    # Retrieve all comments in database
    data = Comment.objects.all()
    serialized = CommentSerializer(data, many=True)
    return Response({"data": serialized.data})

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def comment_create(req):
    # Create new comment
    serialized = CommentSerializer(data=req.data)
    if serialized.is_valid():
        serialized.save()
        return Response(serialized.data, status=201)
    return Response(serialized.errors, status=400)

class CommentDetail(APIView):
    # Retrieve, update, or delete a comment
    permission_classes = [IsCommenterOrReadOnly]

    def get_object(self, pk):
        return get_object_or_404(Comment, pk=pk)
    
    def get(self, req, comment_id):
        comment = self.get_object(comment_id)
        self.check_object_permissions(req, comment)
        serialized = CommentSerializer(comment)
        return Response({"data": serialized.data})

    def put(self, req, comment_id):
        comment = self.get_object(comment_id)
        self.check_object_permissions(req, comment)
        serialized = CommentSerializer(comment, data=req.data)
        if serialized.is_valid():
            serialized.save()
            return Response({"data": serialized.data})
        return Response(serialized.errors, status=400)

    def patch(self, req, comment_id):
        return self.put(req, comment_id)

    def delete(self, req, comment_id):
        comment = self.get_object(comment_id)
        self.check_object_permissions(req, comment)
        comment.delete()
        return Response(status=204)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def show_by_post(req, post_id):
    # Get all comments for post of id post_id
    posts = Comment.objects.filter(post=post_id)
    serialized = CommentSerializer(posts, many=True)
    return Response({ "data": serialized.data })

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def show_following_posts(req, user_id):
    # Get user's following users/categories
    user_data = get_object_or_404(User, pk=user_id)
    user = UserSerializer(user_data).data
    followed_users = user["followed_users"]
    followed_categories = user["followed_categories"]
    # Retrieve all posts from followed users/categories
    posts =  Post.objects.filter(Q(poster__in=followed_users) | Q(tags__in=followed_categories)).distinct()
    serialized = PostSerializer(posts, many=True)
    return Response({ "data": serialized.data })