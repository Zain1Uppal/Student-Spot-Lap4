from django.db import models
from django.db.models.deletion import SET_NULL
from django.db.models.fields import CharField, DateField
from django.db.models.fields.json import JSONField
from django.db.models.fields.related import ForeignKey, ManyToManyField
from django.contrib.auth import get_user_model
from categories.models import Category
from users.models import User

def get_deleted_user():
    return get_user_model().objects.get_or_create(username="deleted")[0]

class Comment(models.Model):
    message = CharField(max_length=140)
    commenter = ForeignKey(User, on_delete=models.SET(get_deleted_user))
    date = DateField(auto_now_add= True)

    def __str__(self):
        return f"{self.message} - {self.commenter} ({self.date})"

# Create your models here.
class Post(models.Model):
    tags = ManyToManyField(Category, null=True)
    poster = ForeignKey(User, on_delete=models.SET(get_deleted_user))
    body = CharField(max_length=500)
    comments = ManyToManyField(Comment, null=True)
    reactions = JSONField(null=True)
    date = DateField(auto_now_add= True)

    def __str__(self):
        return f"{self.body} - {self.poster} ({self.date})"

