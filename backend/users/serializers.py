from rest_framework.serializers import ModelSerializer

from .models import User

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'followed_users', 'last_login')