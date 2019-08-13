from django.test import TestCase
from django.test.client import RequestFactory,Client
from .models import User
# Create your tests here.

class TestUserAPI(TestCase):
    def setUp(self):
        self.factory = RequestFactory()
        self.client = Client()
        User.objects.create(name = '123', pwd = '123')

    def TestLogin(self):
        name = '123'
        # name = json.dumps(name)
        password = '123'
        # password = json.dumps(password)
        response = self.client.get('/User/login?username='  + name + '&password=' + password )
        # self.assertEqual(response.status_code,200)
        print("---------")
        print(response)
