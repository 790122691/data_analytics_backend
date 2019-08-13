import yfinance as yf
import pandas as pd
import json
from datetime import datetime


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
        try:
            self.stock_history = self.stock_data.history(period='max')
            return self.stock_history.to_json()
        except ValueError:
            print('1d data')
            return ''


    def stock_actions_to_json(self):
        try:
            self.stock_actions = self.stock_data.actions
            return self.stock_actions.to_json()
        except ValueError:
            print('1d data')
            return ''

    def stock_financials_to_json(self):
        try:
            self.stock_financials = self.stock_data.financials
            temp = self.stock_financials
            temp['time'] = None
            for index, row in temp.iterrows():
                row['time'] = str(datetime.now())
            temp = temp.reset_index()
            temp = temp.set_index('time')
            return temp.to_json()
        except IndexError:
            print('index error')
            return ''

    def stock_cashflow_to_json(self):
        try:
            self.stock_cashflow = self.stock_data.cashflow
            temp = self.stock_cashflow
            temp['time'] = None
            for index, row in temp.iterrows():
                row['time'] = str(datetime.now())
            temp = temp.reset_index()
            temp = temp.set_index('time')
            return temp.to_json()
        except IndexError:
            print('index error')
            return ''

    def stock_options_to_json(self):
        try:
            self.stock_options = self.stock_data.options
            return json.dumps(self.stock_options)
        except IndexError:
            print('index error')
            return ''


    def stock_balance_sheet_to_json(self):
        try:
            self.stock_balance_sheet = self.stock_data.balance_sheet
            temp = self.stock_balance_sheet
            temp['time'] = None
            for index, row in temp.iterrows():
                row['time'] = str(datetime.now())
            temp = temp.reset_index()
            temp = temp.set_index('time')
            return temp.to_json()
        except IndexError:
            print('index error')
            return ''

    def get_range_list_to_json(self):
        if self.stock_history.empty:
            data = self.stock_history
        else:
            return ''
        data = data.sort_index()
        start = data.head(1)
        end = data.tail(1)
        start = list(start.index)
        end = list(end.index)
        start = start[0]
        end = end[0]
        range_list = [str(start), str(end)]
        range_list_json = json.dumps(range_list)
        return range_list_json

