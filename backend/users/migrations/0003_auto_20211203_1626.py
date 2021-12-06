# Generated by Django 3.2.9 on 2021-12-03 16:26

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('categories', '0001_initial'),
        ('users', '0002_user_followed_categories'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='followed_categories',
            field=models.ManyToManyField(null=True, to='categories.Category'),
        ),
        migrations.AlterField(
            model_name='user',
            name='followed_users',
            field=models.ManyToManyField(null=True, related_name='_users_user_followed_users_+', to=settings.AUTH_USER_MODEL),
        ),
    ]
