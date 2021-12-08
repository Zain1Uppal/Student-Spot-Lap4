# Generated by Django 3.2.9 on 2021-12-07 14:59

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('categories', '0002_alter_category_name'),
        ('users', '0004_authtoken'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='bio',
            field=models.CharField(max_length=500, null=True),
        ),
        migrations.AddField(
            model_name='user',
            name='course',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='user',
            name='image_file',
            field=models.CharField(max_length=20, null=True),
        ),
        migrations.AddField(
            model_name='user',
            name='university',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='followed_categories',
            field=models.ManyToManyField(to='categories.Category'),
        ),
        migrations.AlterField(
            model_name='user',
            name='followed_users',
            field=models.ManyToManyField(related_name='_users_user_followed_users_+', to=settings.AUTH_USER_MODEL),
        ),
    ]
