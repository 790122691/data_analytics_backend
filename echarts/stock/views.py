from django.http import HttpResponse, Http404,HttpResponseNotFound
from .models import Ticker
import pandas as pd


def get_stock_history(request):
    symbol = request.GET['stock_symbol']
    symbol = str(symbol).upper()
    try:
        ticker = Ticker.objects.get(pk=symbol)
    except Ticker.DoesNotExist:
        return HttpResponseNotFound('Symbol not found')

    data_str = ticker.stock_history
    if not data_str:
        return HttpResponseNotFound("Data not found")

    data = pd.read_json(data_str)
    data = data[['Open', 'High', 'Low', 'Close', 'Volume']]
    data_str = data.to_json()

    response = data_str
    return HttpResponse(str(response))


def get_stock_info(request):
    symbol = request.GET['stock_symbol']
    try:
        ticker = Ticker.objects.get(pk=symbol)
    except Ticker.DoesNotExist:
        return HttpResponseNotFound('Symbol not found')

    info_str = ticker.stock_info
    if not info_str:
        return HttpResponseNotFound('Data not found')

    return HttpResponse(info_str)