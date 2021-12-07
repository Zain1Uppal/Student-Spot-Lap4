from django.db import models
from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.db.models.fields.related import ManyToManyField
from categories.models import Category
from rest_framework.authtoken.models import Token

# Create your models here.
class User(AbstractUser):
    followed_users = models.ManyToManyField("self", blank=True)
    followed_categories = models.ManyToManyField(Category, blank=True)
    bio = models.CharField(max_length=500, null=True)
    university = models.CharField(max_length=50, null=True)
    course = models.CharField(max_length=50, null=True)
    image_file = models.CharField(max_length=20, null=True)

    def __str__(self):
        return self.username

class AuthToken(Token):
    key = models.CharField("Key", max_length=40, db_index=True, unique=True)
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        related_name="auth_token",
        on_delete=models.CASCADE,
        verbose_name="User",
    )