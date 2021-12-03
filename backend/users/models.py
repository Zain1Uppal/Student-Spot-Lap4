from django.db import models
from django.contrib.auth.models import AbstractUser
from categories.models import Category

# Create your models here.
class User(AbstractUser):
    followed_users = models.ManyToManyField("self")
    followed_categories = models.ManyToManyField(Category)
    # Pre-defined images
    # profile_pic = 

    def __str__(self):
        return self.username