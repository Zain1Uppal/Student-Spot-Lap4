from django.test import TestCase
from django.urls import reverse
from rest_framework.test import APIClient
from datetime import date

from users.models import User
from categories.models import Category
from .models import Post, Comment

# Create your tests here.
class BaseTestCase(TestCase):

    @classmethod
    def setUpTestData(cls):
        cls.today = date.today()
        cls.user = User.objects.create_user("Pingu", "pingu@nootnoot.com", "nootnoot")
        cls.superuser = User.objects.create_superuser("Bob", "example@example.com", "example123")
        cls.post_1 = Post.objects.create(body="Test Post", poster=cls.superuser)
        cls.post_2 = Post.objects.create(body="Test Post", poster=cls.user)
        cls.comment = Comment.objects.create(message="Test Comment", commenter=cls.superuser, post=cls.post_1)
        cls.category = Category.objects.create(name="Test Category")

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
        self.post_1 = reverse('individual-post', kwargs={"post_id": 1})
        self.post_2 = reverse('individual-post', kwargs={"post_id": 2})

    def test_auth_index(self):
        # Logged in user can see all posts
        response = self.c.get(reverse('posts-index'))
        self.assertEqual(response.status_code, 200)
        resp_data = response.data["data"]
        self.assertEqual(len(resp_data), 2)

    def test_auth_create(self):
        # Can create a post
        test_data = {"body": "New Test Post", "poster": self.user.username, "tags": []}
        response = self.c.post(reverse('posts-create'), test_data, format='json')
        self.assertEqual(response.status_code, 201)
        self.assertEqual(Post.objects.count(), 3)
        self.assertEqual(response.data["id"], 3)

    def test_auth_post_show(self):
        # Can find an individual post
        response = self.c.get(self.post_1)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data["data"]["body"], "Test Post")

    def test_auth_post_patch(self):
        # Can't edit another's post
        test_data = {"tags": [1]}
        response = self.c.patch(self.post_1, test_data, format='json')
        self.assertEqual(response.status_code, 403)
    
    def test_auth_post_patch(self):
        # Can edit their own post
        test_data = {"tags": [1]}
        response = self.c.patch(self.post_2, test_data, format='json')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data["data"]["tags"], [1])

    def test_auth_post_delete(self):
        # Can delete their own post
        test_data = {"tags": [1]}
        response = self.c.delete(self.post_2)
        self.assertEqual(response.status_code, 204)

class TestAdminViews(BaseTestCase):
    """
    Testing views for a logged-in/authenticated admin user
    """
    
    def setUp(self):
        self.c = APIClient()
        self.c.login(username="Bob", password="example123")

    

class TestModels(BaseTestCase):
    """
    Testing the database models
    """

    def test_post_str(self):
        self.assertEqual(str(Post.objects.get(pk=1)), f"{self.post_1.body} - {self.post_1.poster} ({self.today})")

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
