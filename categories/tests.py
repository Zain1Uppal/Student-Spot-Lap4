from django.test import TestCase
from rest_framework.test import APIRequestFactory

from users.models import User
from .models import Category

# Create your tests here.
class BaseTestCase(TestCase):

    @classmethod
    def setupTestData(cls):
        cls.category = Category.objects.create(name="Test Category")
        cls.user = User.objects.create_user("Pingu", "pingu@nootnoot.com", "nootnoot")

class TestBasicViews(BaseTestCase):
    f = APIRequestFactory()
