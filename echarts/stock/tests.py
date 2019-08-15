from django.test import TestCase
from django.test.client import RequestFactory,Client
from .models import Ticker
import json
# Create your tests here.

class TestStockDataAPI(TestCase):
    def setUp(self):
        self.factory = RequestFactory()
        self.client = Client()
        self.code = 'AAPL'
        tic = Ticker.objects.create(stock_ticker=self.code, stock_info='{"language": "en-US", "region": "US", "quoteType": "EQUITY", "quoteSourceName": "Nasdaq Real Time Price", "currency": "USD", "sharesOutstanding": 29293000, "marketCap": 720921024, "forwardPE": -4.7687078, "priceToBook": 4.4974337, "epsTrailingTwelveMonths": -5.145, "epsForward": -4.41, "fiftyDayAverage": 23.63647, "fiftyDayAverageChange": -2.60647, "fiftyDayAverageChangePercent": -0.110273235, "twoHundredDayAverage": 30.945328, "twoHundredDayAverageChange": -9.915327, "twoHundredDayAverageChangePercent": -0.32041436, "esgPopulated": false, "tradeable": true, "longName": "Wave Life Sciences Ltd.", "regularMarketPrice": 21.03, "regularMarketTime": 1565795737, "regularMarketChange": -0.34000015, "regularMarketOpen": 20.95, "regularMarketDayHigh": 21.45, "regularMarketDayLow": 20.76, "regularMarketVolume": 33492, "triggerable": true, "bookValue": 4.676, "fiftyTwoWeekRange": "18.16 - 56.0", "fiftyTwoWeekHighChange": -34.97, "fiftyTwoWeekHighChangePercent": -0.62446433, "fiftyTwoWeekLow": 18.16, "fiftyTwoWeekHigh": 56.0, "averageDailyVolume3Month": 278185, "financialCurrency": "USD", "messageBoardId": "finmb_256557334", "fiftyTwoWeekLowChange": 2.8700008, "fiftyTwoWeekLowChangePercent": 0.15803969, "regularMarketDayRange": "20.76 - 21.45", "averageDailyVolume10Day": 261416, "fullExchangeName": "NasdaqGM", "bidSize": 9, "ask": 21.21, "bid": 21.11, "askSize": 9, "exchangeDataDelayedBy": 0, "priceHint": 2, "exchange": "NGM", "market": "us_market", "sourceInterval": 15, "exchangeTimezoneName": "America/New_York", "exchangeTimezoneShortName": "EDT", "gmtOffSetMilliseconds": -14400000, "regularMarketChangePercent": -1.591016, "regularMarketPreviousClose": 21.37, "shortName": "Wave Life Sciences Ltd.", "earningsTimestamp": 1489661940, "earningsTimestampStart": 1502708340, "earningsTimestampEnd": 1503057600, "marketState": "REGULAR", "symbol": "WVE"}',
                                    stock_history='{"Open":{"1565136000000":194.67,"1565222400000":199.44,"1565308800000":201.3},"High":{"1565136000000":198.8,"1565222400000":202.76,"1565308800000":202.76},"Low":{"1565136000000":193.09,"1565222400000":198.64,"1565308800000":199.29},"Close":{"1565136000000":198.29,"1565222400000":202.66,"1565308800000":200.99},"Volume":{"1565136000000":33364400,"1565222400000":27009500,"1565308800000":24423000},"Dividends":{"1565136000000":0.0,"1565222400000":0.0,"1565308800000":0.77},"Stock Splits":{"1565136000000":0,"1565222400000":0,"1565308800000":0}}')
        tic.save()
        self.code2 = 'BABA'
        tic = Ticker.objects.create(stock_ticker=self.code2)


    def TestGetStockHistory(self):
        response = self.client.get('/stock/GetStockInfo?stock_symbol=' + self.code)
        self.assertEqual(response.status_code,200)


    def TestGetStockHistory2(self):
        code = 'A'
        response = self.client.get('/stock/GetStockHistory?stock_symbol=' + code)
        self.assertEqual(response.status_code, 404)

    def TestGetStockHistory3(self):
        response = self.client.get('/stock/GetStockHistory?stock_symbol=' + self.code2)
        self.assertEqual(response.status_code, 404)

    def TestGetStockInfo(self):
        response = self.client.get('/stock/GetStockInfo?stock_symbol=' + self.code)
        self.assertEqual(response.status_code, 200)

    def TestGetStockInfo2(self):
      code = 'B'
      response = self.client.get('/stock/GetStockInfo?stock_symbol=' + code)
      self.assertEqual(response.status_code, 404)


    def TestGetStockInfo3(self):
      response = self.client.get('/stock/GetStockInfo?stock_symbol=' + self.code2)
      self.assertEqual(response.status_code, 404)
