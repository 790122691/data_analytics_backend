import yfinance as yf
import pandas as pd
from .IntradayTrading import IntradayTrading
import json


class Stock:

    def __init__(self, stock_code):
        self.stock_data = pd.DataFrame()
        self.stock_info = dict()
        self.stock_history = pd.DataFrame()
        self.stock_actions = pd.DataFrame()
        self.stock_financials = pd.DataFrame()
        self.stock_cashflow = pd.DataFrame()
        self.stock_options = pd.DataFrame()
        self.stock_balance_sheet = pd.DataFrame()

        if not self.getStockData(stock_code):
            raise ValueError

    def getStockData(self, stock_code):
        self.stock_data = yf.Ticker(stock_code)
        self.stock_info = self.stock_data.info

        if not self.stock_info:
            return False
        else:
            return True

    def stock_info_to_json(self):
        return json.dumps(self.stock_info)

    def stock_history_to_json(self):
        self.stock_history = self.stock_data.history(period='max')
        return self.stock_history.to_json()

    def stock_actions_to_json(self):
        self.stock_actions = self.stock_data.actions
        return self.stock_actions.to_json()

    def stock_financials_to_json(self):
        self.stock_financials = self.stock_data.financials.T
        return self.stock_financials.to_json()

    def stock_cashflow_to_json(self):
        self.stock_cashflow = self.stock_data.cashflow.T
        return self.stock_cashflow.to_json()

    def stock_options_to_json(self):
        self.stock_options = self.stock_data.options
        return json.dumps(self.stock_options)

    def stock_balance_sheet_to_json(self):
        self.stock_balance_sheet = self.stock_data.balance_sheet.T
        return self.stock_balance_sheet.to_json()


