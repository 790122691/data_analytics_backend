from django.db import models
from stock.models import Ticker
# Create your models here.

class User(models.Model):
    #id = models.AutoField(primary_key=True)
    name = models.CharField(primary_key=True, max_length=32)
    pwd = models.CharField(max_length=32)

class Portfolio(models.Model):
    #Username = models.ForeignKey('User', on_delete=models.CASCADE)
    #Tickercode = models.ForeignKey('stock.Ticker', default=0, on_delete=models.CASCADE)
    Username = models.CharField(max_length=32)
    Tickercode = models.CharField(max_length=200)
