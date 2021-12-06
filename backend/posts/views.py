from django.shortcuts import get_object_or_404
from django.db.models import Q
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes


from .serializers import PostSerializer, CommentSerializer
from .models import Comment, Post

from users.models import User
from users.serializers import UserSerializer

# Create your views here.

# Post views
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def post_index(req):
    data = Post.objects.all()
    serialized = PostSerializer(data, many=True)
    return Response({"data": serialized.data})

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def post_create(req):
    serialized = PostSerializer(data=req.data)
    if serialized.is_valid():
        serialized.save()
        return Response(serialized.data, status=201)
    return Response(serialized.errors, status=400)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def show_by_user(req, user_id):
    user_posts = Post.objects.filter(poster=user_id)
    serialized = PostSerializer(user_posts, many=True)
    return Response({ "data": serialized.data })

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def show_by_category(req, category_id):
    category_posts = Post.objects.filter(tags=category_id)
    serialized = PostSerializer(category_posts, many=True)
    return Response({ "data": serialized.data })

# Comment views
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def comment_index(req):
    data = Comment.objects.all()
    serialized = CommentSerializer(data, many=True)
    return Response({"data": serialized.data})

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def comment_create(req):
    serialized = CommentSerializer(data=req.data)
    if serialized.is_valid():
        serialized.save()
        return Response(serialized.data, status=201)
    return Response(serialized.errors, status=400)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def show_by_post(req, post_id):
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
    # Iterate through and retrieve all posts from following
    all_posts = []
    for uid, cid in zip(followed_users, followed_categories):
        posts = Post.objects.filter(Q(poster=uid) | Q(tags=cid)).distinct()
        serialized = PostSerializer(posts, many=True)
        all_posts.append(serialized.data)
    return Response(all_posts[0])