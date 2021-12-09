from django.test import TestCase
from django.urls import reverse
from rest_framework.test import APIClient
from datetime import date

from users.models import User
from .models import Post, Comment

# Create your tests here.
class BaseTestCase(TestCase):

    @classmethod
    def setUpTestData(cls):
        cls.today = date.today()
        cls.user = User.objects.create_user("Pingu", "pingu@nootnoot.com", "nootnoot")
        cls.superuser = User.objects.create_superuser("Bob", "example@example.com", "example123")
        cls.post = Post.objects.create(body="Test Post", poster=cls.superuser)
        cls.comment = Comment.objects.create(message="Test Comment", commenter=cls.superuser, post=cls.post)

class TestUnauthorisedViews(BaseTestCase):
    """
    Testing views for a non-authenticated user (not logged in)
    """
    
    c = APIClient()

    def test_unauth_index(self):
        response = self.c.get(reverse('posts-index'))
        self.assertEqual(response.status_code, 401)
        self.assertDictContainsSubset(response.data, {"detail": "Authentication credentials were not provided."})

class TestAuthorisedViews(BaseTestCase):
    """
    Testing views for a logged-in/authenticated regular user
    """

    def setUp(self):
        self.c = APIClient()
        self.c.login(username="Pingu", password="nootnoot")


class TestAdminViews(BaseTestCase):
    """
    Testing views for a logged-in/authenticated admin user
    """
    
    def setUp(self):
        self.c = APIClient()
        self.c.login(username="Bob", password="example123")

    def test_auth_index(self):
        response = self.c.get(reverse('posts-index'))
        self.assertEqual(response.status_code, 200)
        resp_data = response.data["data"]
        self.assertEqual(len(resp_data), 1)

class TestModels(BaseTestCase):
    """
    Testing the database models
    """

    def test_post_str(self):
        self.assertEqual(str(Post.objects.get()), f"{self.post.body} - {self.post.poster} ({self.today})")

    def test_comment_str(self):
        self.assertEqual(str(Comment.objects.get()),  f"{self.comment.message} - {self.comment.commenter} ({self.today})")

    def test_set_deleted_user(self):
        # Create user and a post by that user
        test_user = User.objects.create_user("Jim", "jim@example.com", "example456")
        test_post = Post.objects.create(body="Deleted User's Post", poster=test_user)
        # Check user exists, delete, then check user no longer exists
        self.assertEqual(len(User.objects.filter(username="Jim")), 1)
        test_user.delete()
        self.assertEqual(len(User.objects.filter(username="Jim")), 0)
        # Retrieve the test post and test the poster has been updated
        updated_test_post = Post.objects.get(pk=test_post.id)
        self.assertEqual(updated_test_post.poster, User.objects.get(username="deleted"))
