# Generated by Django 3.2.9 on 2021-12-03 15:57

from django.conf import settings
from django.db import migrations, models
import posts.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('categories', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('message', models.CharField(max_length=140)),
                ('date', models.DateField(auto_now_add=True)),
                ('commenter', models.ForeignKey(on_delete=models.SET(posts.models.get_deleted_user), to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('body', models.CharField(max_length=500)),
                ('reactions', models.JSONField(null=True)),
                ('date', models.DateField(auto_now_add=True)),
                ('comments', models.ManyToManyField(null=True, to='posts.Comment')),
                ('poster', models.ForeignKey(on_delete=models.SET(posts.models.get_deleted_user), to=settings.AUTH_USER_MODEL)),
                ('tags', models.ManyToManyField(null=True, to='categories.Category')),
            ],
        ),
    ]
