from django.http import HttpResponse, Http404,HttpResponseNotFound
from .models import Ticker
import pandas as pd
import json

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
    return HttpResponse(response)


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


def get_range_list(request):
    symbol = request.GET['stock_symbol']
    symbol = str(symbol).upper()
    try:
        ticker = Ticker.objects.get(pk=symbol)
    except Ticker.DoesNotExist:
        return HttpResponseNotFound('Symbol not found')

    data_str = ticker.stock_range_list
    if not data_str:
        return HttpResponseNotFound("Data not found")
    response = data_str
    return HttpResponse(response)


def get_all_stock(request):
    tick_list = Ticker.objects.all()
    tick_list_str = []
    for tic in tick_list:
        if tic.stock_ticker:
            tick_list_str.append(tic.stock_info)

    if tick_list_str:
        tick_list_str = json.dumps(tick_list_str)
        return HttpResponse(tick_list_str)
    else:
        return HttpResponseNotFound('No stock data in database')


def get_stock_history_by_date(request):
    symbol = request.GET['stock_symbol']
    days = request.GET['days']
    try:
        tic = Ticker.objects.get(pk=symbol)
    except Ticker.DoesNotExist:
        return HttpResponseNotFound('Symbol not found')

    jsonstr= tic.stock_history
    if not jsonstr:
        return HttpResponseNotFound('No stock data in database')
    else:
        tic = pd.read_json(jsonstr)

    tic = tic.tail(int(days))
    return HttpResponse(request,tic.to_json())
