# Generated by Django 3.2.9 on 2021-12-06 15:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0002_auto_20211203_1626'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='post',
            name='reactions',
        ),
    ]
