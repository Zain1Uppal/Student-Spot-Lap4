# Generated by Django 3.2.9 on 2021-12-08 11:40

from django.db import migrations, models
import posts.models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0007_auto_20211208_1126'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='reactions',
            field=models.JSONField(default=posts.models.reactions_default_value),
        ),
    ]
