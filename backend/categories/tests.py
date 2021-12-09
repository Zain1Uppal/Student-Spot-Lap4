from logging import log
from django.test import TestCase
from django.urls import reverse
from rest_framework.test import APIClient

from users.models import User
from .models import Category

# Create your tests here.
class BaseTestCase(TestCase):

    @classmethod
    def setupTestData(cls):
        cls.category = Category.objects.create(name="Test Category")
        cls.user = User.objects.create_user("Pingu", "pingu@nootnoot.com", "nootnoot")
        cls.user.is_superuser = True
        cls.user.save()

class TestUnauthorisedViews(BaseTestCase):
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

    def setUp(self):
        self.c = APIClient()
        self.c.login(username="Pingu", password="nootnoot")

    def test_index(self):
        response = self.c.get(reverse('categories-index'))
        self.assertEqual(response.status_code, 200)
        resp_data = response.data
        self.assertEqual(resp_data.count(), 1)

    # def test_show(self):
    #     response = self.c.get(reverse('category-by-id', kwargs={"cateId": 1}))
    #     self.assertEqual(response.status_code, 401)
    #     assert "Authentication credentials were not provided."
    
    # def test_create(self):
    #     test_data = {"name": "New Test Category"}
    #     response = self.c.post(reverse('categories-create'), test_data, format="json")
    #     self.assertEqual(response.status_code, 401)
    #     assert "Authentication credentials were not provided."
