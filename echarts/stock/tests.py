from django.test import TestCase
from django.test.client import RequestFactory,Client
# Create your tests here.

class TestStockDataAPI(TestCase):
    def SetUp(self):
        self.factory = RequestFactory()
        self.client = Client()


    def TestGetStockHistory(self):
        code = 'AAPL'
        request = self.factory.get('/stock/GetStockInfo?stock_symbol=' + code)
