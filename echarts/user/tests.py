from django.test import TestCase
from django.test.client import RequestFactory,Client
from .models import User
from .models import Portfolio
from stock.models import Ticker
import json
# Create your tests here.

class TestUserAPI(TestCase):
    def setUp(self):
        self.factory = RequestFactory()
        self.client = Client()
        User.objects.create(name = '123', pwd = '123')
        User.objects.create(name='1234', pwd='123')
        User.objects.create(name='12345', pwd='123')
        Portfolio.objects.create(Username='123', Tickercode='AAPL')
        Portfolio.objects.create(Username='123', Tickercode='AMZN')
        Portfolio.objects.create(Username='1234', Tickercode='BABA')
        Ticker.objects.create(stock_ticker = 'AAPL', stock_info = 'AAPL Inc.')
        Ticker.objects.create(stock_ticker='AMZN', stock_info='AMZN Inc.')
        Ticker.objects.create(stock_ticker='BABA', stock_info='BABA Inc.')

    def TestLogin(self):
        # password = json.dumps(password)
        response = self.client.post('/User/login/', {'username': '123', 'password': '123'})
        print(response.status_code)
        print("---------TestLogin")
        print(response)

    def TestLoginUserNotExist(self):
        # password = json.dumps(password)
        response = self.client.post('/User/login/', {'username': '123', 'password': '321'})
        print(response.status_code)
        print("---------TestLogin")
        print(response)

    def TestRegister(self):
        # password = json.dumps(password)
        response = self.client.post('/User/register/', {'username': '12345', 'password': '123', 're_password': '123'})
        print(response.status_code)
        print("---------TestRegister")
        print(response)

    def TestRegisterAlreadyExist(self):
        # password = json.dumps(password)
        response = self.client.post('/User/register/', {'username': '123', 'password': '123', 're_password': '123'})
        print(response.status_code)
        print("---------TestRegisterAlreadyExist")
        print(response)

    def TestRegisterPasswordNotMatch(self):
        # password = json.dumps(password)
        response = self.client.post('/User/register/', {'username': '123456', 'password': '1234', 're_password': '123'})
        print(response.status_code)
        print("---------TestRegisterPasswordNotMatch")
        print(response)

    def TestAddPortfolio(self):
        response = self.client.get('/User/AddPortfolio/?name=123&ticker=BABA')
        print(response.status_code)
        print("---------TestAddPortfolio")
        print(response)

    def TestAddPortfolioAlreadyExist(self):
        response = self.client.get('/User/AddPortfolio/?name=123&ticker=AAPL')
        print(response.status_code)
        print("---------TestAddPortfolioAlreadyExist")
        print(response)

    def TestAddPortfolioUserNotExist(self):
        response = self.client.get('/User/AddPortfolio/?name=1230987&ticker=AAPL')
        print(response.status_code)
        print("---------TestAddPortfolioUserNotExist")
        print(response)

    def TestAddPortfolioTickerNotExist(self):
        response = self.client.get('/User/AddPortfolio/?name=123&ticker=AAPLasdgsdgn')
        print(response.status_code)
        print("---------TestAddPortfolioTickerNotExist")
        print(response)

    def TestGetPortfolio(self):
        response = self.client.get('/User/GetPortfolio/?name=123')
        print(response.status_code)
        print("---------TestGetPortfolio")
        print(response)

    def TestGetPortfolioUserNotExist(self):
        response = self.client.get('/User/GetPortfolio/?name=123arh')
        print(response.status_code)
        print("---------TestGetPortfolioUserNotExist")
        print(response)

    def TestDeletePortfolio(self):
        response = self.client.get('/User/DeletePortfolio/?name=123&ticker=AAPL')
        print(response.status_code)
        print("---------TestDeletePortfolio")
        print(response)

    def TestDeletePortfolioNotExist(self):
        response = self.client.get('/User/DeletePortfolio/?name=1234&ticker=AAPL')
        print(response.status_code)
        print("---------TestDeletePortfolioNotExist")
        print(response)



