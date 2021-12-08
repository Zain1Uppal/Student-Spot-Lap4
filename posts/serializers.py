from rest_framework import serializers
from .models import Post, Comment
from categories.models import Category
from users.models import User

class PostSerializer(serializers.ModelSerializer):
    tags = serializers.SlugRelatedField(queryset=Category.objects.all(), slug_field='id', many=True)
    poster = serializers.SlugRelatedField(queryset=User.objects.all(), slug_field='username')
    class Meta:
        model = Post
        fields = "__all__"

class CommentSerializer(serializers.ModelSerializer):
    post = serializers.SlugRelatedField(queryset=Post.objects.all(), slug_field="id")
    commenter = serializers.SlugRelatedField(queryset=User.objects.all(), slug_field='username')
    class Meta:
        model = Comment
        fields = "__all__"