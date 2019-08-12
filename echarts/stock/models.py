from django.db import models


# Create your models here.
class Ticker(models.Model):
    stock_ticker = models.CharField(primary_key=True, blank=False, unique=True, max_length=200)
    stock_info = models.TextField(default='')
    stock_history = models.TextField(default='')
    stock_actions = models.TextField(default='')
    stock_financials = models.TextField(default='')
    stock_cashflow = models.TextField(default='')
    stock_options = models.TextField(default='')
    stock_balance_sheet = models.TextField(default='')