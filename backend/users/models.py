from django.db import models
from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.db.models.signals import post_save
from django.dispatch import receiver
from categories.models import Category
from rest_framework.authtoken.models import Token

# Create your models here.
class User(AbstractUser):
    followed_users = models.ManyToManyField("self", related_name='followers', symmetrical=False)
    followed_categories = models.ManyToManyField(Category, blank=True)
    bio = models.CharField(max_length=1000, null=True)
    university = models.CharField(max_length=50, null=True)
    course = models.CharField(max_length=50, null=True)
    image_file = models.CharField(max_length=200, null=True)
    location = models.CharField(max_length=50, null=True)

    def __str__(self):
        return self.username

@receiver(post_save, sender=User)
def follow_self(sender, instance, **kwargs):
    instance.followed_users.add(instance.id)

class AuthToken(Token):
    key = models.CharField("Key", max_length=40, db_index=True, unique=True)
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        related_name="auth_token",
        on_delete=models.CASCADE,
        verbose_name="User",
    )