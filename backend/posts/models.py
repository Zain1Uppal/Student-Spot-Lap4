from django.db import models
from django.db.models.fields import CharField, DateField
from django.db.models.fields.json import JSONField
from django.db.models.fields.related import ForeignKey, ManyToManyField
from django.contrib.auth import get_user_model
from categories.models import Category
from users.models import User

def get_deleted_user():
    return get_user_model().objects.get_or_create(username="deleted")[0]

def reactions_default_value():
    return {"thumbs_up":0, "thumbs_down":0}

# Create your models here.
class Post(models.Model):
    tags = ManyToManyField(Category, blank=True)
    poster = ForeignKey(User, on_delete=models.SET(get_deleted_user), editable=False)
    body = CharField(max_length=500)
    reactions = JSONField(default=reactions_default_value)
    date = DateField(auto_now_add= True, editable=False)

    def __str__(self):
        return f"{self.body} - {self.poster} ({self.date})"

class Comment(models.Model):
    message = CharField(max_length=140)
    post = ForeignKey(Post, on_delete=models.CASCADE, editable=False)
    commenter = ForeignKey(User, on_delete=models.SET(get_deleted_user), editable=False)
    date = DateField(auto_now_add= True, editable=False)

    def __str__(self):
        return f"{self.message} - {self.commenter} ({self.date})"
