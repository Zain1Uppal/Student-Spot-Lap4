from rest_framework import serializers
from rest_framework.serializers import ModelSerializer

from .models import User
from categories.models import Category

class UserSerializer(ModelSerializer):
    followed_users = serializers.SlugRelatedField(queryset=User.objects.all(), slug_field='username', many=True)
    followed_categories = serializers.SlugRelatedField(queryset=Category.objects.all(), slug_field='id', many=True)
    followers = serializers.SlugRelatedField(queryset=User.objects.all(), slug_field="username", many=True)
    class Meta:
        model = User
        fields = ["id", "username", "email", "first_name", "last_name", "followed_users", "followed_categories", "followers", "bio", "university", "course", "image_file"]