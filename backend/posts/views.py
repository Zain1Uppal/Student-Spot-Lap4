from django.shortcuts import get_object_or_404
from django.db.models import Q
from django.utils.functional import partition
from rest_framework.views import APIView
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes


from .serializers import PostSerializer, CommentSerializer
from .models import Comment, Post

from users.permissions import IsPosterOrReadOnly, IsCommenterOrReadOnly
from users.models import User
from users.serializers import UserSerializer

"""
Post views
"""
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

    def get_post(self, pk):
        return get_object_or_404(Post, pk=pk)
    
    def get(self, req, post_id):
        post = self.get_post(post_id)
        self.check_object_permissions(req, post)
        serialized = PostSerializer(post)
        return Response({"data": serialized.data})

    def put(self, req, post_id):
        post = self.get_post(post_id)
        self.check_object_permissions(req, post)
        serialized = PostSerializer(post, data=req.data, partial=True)
        if serialized.is_valid():
            serialized.save()
            return Response({"data": serialized.data})
        return Response(serialized.errors, status=400)

    def patch(self, req, post_id):
        return self.put(req, post_id)

    def delete(self, req, post_id):
        post = self.get_post(post_id)
        self.check_object_permissions(req, post)
        post.delete()
        return Response(status=204)

class PostReactions(APIView):
    # Retrieve and add/remove reactions from posts
    permission_classes = [IsAuthenticated]

    def get_post(self, pk):
        return get_object_or_404(Post, pk=pk)

    def get(self, req, post_id):
        post = self.get_post(post_id)
        self.check_object_permissions(req, post)
        serialized = PostSerializer(post)
        response = serialized.data["reactions"]
        return Response({"data": response})

    def patch(self, req, post_id):
        post = self.get_post(post_id)
        self.check_object_permissions(req, post)

        reactions = ["thumbs_up", "thumbs_down"]

        if "reaction" not in req.data:
            return Response(status=400)
        
        reaction_to_update = req.data["reaction"]
        if all(reaction not in reaction_to_update for reaction in reactions):
            # Don't allow if not updating any reactions at all
            return Response(status=400)
        
        # Get the current post reactions
        serialized = PostSerializer(post)
        post_reactions = serialized.data["reactions"]

        current_value = post_reactions[reaction_to_update]

        actions = ["add", "remove"]
        if "action" not in req.data:
            return Response(status=400)
        
        requested_action = req.data["action"]
        if all(action not in requested_action for action in actions):
            return Response(status=400)

        if requested_action == "add":
            post_reactions[reaction_to_update] = current_value + 1
        if requested_action == "remove":
            if current_value > 0:
                post_reactions[reaction_to_update] = current_value - 1
        
        updated = PostSerializer(post, data=post_reactions, partial=True)
        if updated.is_valid():
            updated.save()
            return self.get(req, post_id)
        return Response(updated.errors, status=400)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def show_by_category(req, category_id):
    # Retrieve all posts tagged with category of id category_id
    category_posts = Post.objects.filter(tags=category_id)
    serialized = PostSerializer(category_posts, many=True)
    return Response({ "data": serialized.data })

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def show_by_user(req, username):
    # Retrieve all posts made by user of id user_id
    user = get_object_or_404(User, username__iexact=username)
    user_posts = Post.objects.filter(poster=user)
    serialized = PostSerializer(user_posts, many=True)
    return Response({ "data": serialized.data })

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def show_following_posts(req, username):
    # Get user's following users/categories
    user_data = get_object_or_404(User, username__iexact=username)
    user = UserSerializer(user_data).data
    followed_users = [get_object_or_404(User, username=u) for u in user["followed_users"]]
    followed_categories = user["followed_categories"]
    # Retrieve all posts from followed users/categories
    posts =  Post.objects.filter(Q(poster__in=followed_users) | Q(tags__in=followed_categories)).distinct()
    serialized = PostSerializer(posts, many=True)
    return Response({ "data": serialized.data })

"""
Comment views
"""
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

    def get_comment(self, pk):
        return get_object_or_404(Comment, pk=pk)
    
    def get(self, req, comment_id):
        comment = self.get_comment(comment_id)
        self.check_object_permissions(req, comment)
        serialized = CommentSerializer(comment)
        return Response({"data": serialized.data})

    def put(self, req, comment_id):
        comment = self.get_comment(comment_id)
        self.check_object_permissions(req, comment)
        serialized = CommentSerializer(comment, data=req.data, partial=True)
        if serialized.is_valid():
            serialized.save()
            return Response({"data": serialized.data})
        return Response(serialized.errors, status=400)

    def patch(self, req, comment_id):
        return self.put(req, comment_id)

    def delete(self, req, comment_id):
        comment = self.get_comment(comment_id)
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
