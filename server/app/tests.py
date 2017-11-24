from django.test import TestCase, LiveServerTestCase, Client, RequestFactory
from django.utils import timezone
from django.contrib.auth.models import User
from app.models import *
from app.forms import *
from app import views


### TEST MODELS ###

TEST_USERNAME="testuser"
TEST_PASSWORD="testcasepassword1"

class ModelAbcTest(TestCase): # rename based on your model name
    def setUp(self):
        # Create a User
        self.user = User.objects.create_user(
            username=TEST_USERNAME, password=TEST_PASSWORD)
        # Create the object

    def test_create(self):
        # Find it

        # Check attributes
        pass
