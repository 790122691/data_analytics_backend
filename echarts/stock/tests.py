from django.test import TestCase
from django.test.client import RequestFactory,Client
from .models import Ticker
# Create your tests here.

class TestStockDataAPI(TestCase):
    def setUp(self):
        self.factory = RequestFactory()
        self.client = Client()
        code = 'AAPL'
        tic = Ticker.objects.create(stock_ticker=code,
                                    stock_history='{"Open":{"1565136000000":194.67,"1565222400000":199.44,"1565308800000":201.3},"High":{"1565136000000":198.8,"1565222400000":202.76,"1565308800000":202.76},"Low":{"1565136000000":193.09,"1565222400000":198.64,"1565308800000":199.29},"Close":{"1565136000000":198.29,"1565222400000":202.66,"1565308800000":200.99},"Volume":{"1565136000000":33364400,"1565222400000":27009500,"1565308800000":24423000},"Dividends":{"1565136000000":0.0,"1565222400000":0.0,"1565308800000":0.77},"Stock Splits":{"1565136000000":0,"1565222400000":0,"1565308800000":0}}')
        tic.save()

    def TestGetStockHistory(self):
        response = self.client.get('/stock/GetStockInfo?stock_symbol=' + 'AAPL')
        self.assertEqual(response.status_code,200)


    def TestGetStockHistory2(self):
        code = 'A'
        response = self.client.get('/stock/GetStockInfo?stock_symbol=' + code)
        self.assertEqual(response.status_code,404)