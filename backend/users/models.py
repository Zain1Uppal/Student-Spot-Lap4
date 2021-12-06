from django.db import models
from django.conf import settings
from django.contrib.auth.models import AbstractUser
from categories.models import Category
from rest_framework.authtoken.models import Token

# Create your models here.
class User(AbstractUser):
    followed_users = models.ManyToManyField("self", null=True)
    followed_categories = models.ManyToManyField(Category, null=True)
    # Pre-defined images
    # profile_pic = 
    # Number of users following this user

    def __str__(self):
        return self.username

class AuthToken(Token):
    key = models.CharField("Key", max_length=40, db_index=True, unique=True)
    user = models.ForeignKey(
        User,
        related_name="auth_token",
        on_delete=models.CASCADE,
        verbose_name="User",
    )