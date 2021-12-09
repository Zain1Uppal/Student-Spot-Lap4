from django.test import TestCase
from django.urls import reverse
from rest_framework.test import APIClient

from users.models import User
from .models import Category

# Create your tests here.
class BaseTestCase(TestCase):

    @classmethod
    def setUpTestData(cls):
        cls.category = Category.objects.create(name="Test Category")
        cls.user = User.objects.create_user("Pingu", "pingu@nootnoot.com", "nootnoot")
        cls.superuser = User.objects.create_superuser("Bob", "example@example.com", "example123")

class TestUnauthorisedViews(BaseTestCase):
    """
    Testing views for a non-authenticated user (not logged in)
    """
    c = APIClient()

    def test_unauth_index(self):
        response = self.c.get(reverse('categories-index'))
        self.assertEqual(response.status_code, 401)
        self.assertDictContainsSubset(response.data, {"detail": "Authentication credentials were not provided."})

    def test_unauth_show(self):
        response = self.c.get(reverse('category-by-id', kwargs={"cateId": 1}))
        self.assertEqual(response.status_code, 401)
        self.assertDictContainsSubset(response.data, {"detail": "Authentication credentials were not provided."})
    
    def test_unauth_create(self):
        test_data = {"name": "New Test Category"}
        response = self.c.post(reverse('categories-create'), test_data, format="json")
        self.assertEqual(response.status_code, 401)
        self.assertDictContainsSubset(response.data, {"detail": "Authentication credentials were not provided."})

class TestAuthorisedViews(BaseTestCase):
    """
    Testing views for a logged-in/authenticated regular user
    """

    def setUp(self):
        self.c = APIClient()
        self.c.login(username="Pingu", password="nootnoot")

    def test_auth_index(self):
        response = self.c.get(reverse('categories-index'))
        self.assertEqual(response.status_code, 200)
        resp_data = response.data["data"]
        self.assertEqual(len(resp_data), 1)

    def test_auth_show(self):
        response = self.c.get(reverse('category-by-id', kwargs={"cateId": 1}))
        self.assertEqual(response.status_code, 200)
        resp_data = response.data["data"]
        self.assertEqual(resp_data, [{"id": self.category.id, "name": self.category.name}])
    
    def test_auth_create(self):
        test_data = {"name": "New Test Category"}
        response = self.c.post(reverse('categories-create'), test_data, format="json")
        self.assertEqual(response.status_code, 403)

class TestAdminViews(BaseTestCase):
    """
    Testing views for a logged-in/authenticated admin user
    """

    def setUp(self):
        self.c = APIClient()
        self.c.login(username="Bob", password="example123")

    def test_admin_create(self):
        test_data = {"name": "New Test Category"}
        response = self.c.post(reverse('categories-create'), test_data, format="json")
        self.assertEqual(response.status_code, 201)
        self.assertEqual(Category.objects.count(), 2)
        self.assertEqual(response.data, {"id": 2, "name": test_data["name"]})

    def test_failed_create(self):
        test_data = {"body": "oops"}
        response = self.c.post(reverse('categories-create'), test_data, format="json")
        self.assertEqual(response.status_code, 400)

class TestModel(BaseTestCase):
    """
    Testing the database model
    """
    
    def test_category_str(self):
        self.assertEqual(str(Category.objects.get()), self.category.name)