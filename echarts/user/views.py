from django.shortcuts import render
from django.http import HttpResponseNotFound
from django.http import HttpResponse
from .models import User
from .models import Portfolio
from django.db import models
from django.shortcuts import redirect
#from django.shortcuts import HttpResponse
import json
from stock.models import Ticker

# Create your views here.


def login(request):
    # request这是前端请求发来的请求，携带的所有数据，django给我们做了一些列的处理，封装成一个对象传过来
    # 解析数据获得用户名和密码
    # 若数值为空，不会报错，而是返回一个none
    name = request.POST['username']
    pwd = request.POST['password']
    try:
        user_obj = User.objects.get(name=name, pwd=pwd)
    except User.DoesNotExist:
        return HttpResponseNotFound('user information not match')
    data = {'username': name}
    result = json.dumps(data)
    print(result)
    return HttpResponse(result)


def register(request):
    name = request.POST['username']
    pwd = request.POST['password']
    re_pwd = request.GET['re_password']
    #传递的参数非空
    if not (name and pwd and re_pwd):
        print('blank data')
        return HttpResponseNotFound('blank data')
    if pwd != re_pwd:
        return HttpResponseNotFound('password not match')
    try:
        user_obj = User.objects.get(name=name)
        return HttpResponseNotFound('user already exist')
    except User.DoesNotExist:
        #新建用户
        User.objects.create(name=name, pwd=pwd).save()
        print('create')
        data = {'username': name}
        result = json.dumps(data)
        return HttpResponse(result)



def UpdatePortfolio(request):
    username = request.POST['username']
    ticker = request.GET['ticker']
    if not(username and ticker):
        print('blank data')
        return HttpResponseNotFound('blank data')
    try:
        is_user = User.objects.get(name=username)
    except User.DoesNotExist:
        print('user not exist')
        return HttpResponseNotFound('user not exist')
    try:
        is_ticker = Ticker.objects.get(stock_ticker=ticker)
    except Ticker.DoesNotExist:
        print('ticker not found')
        return HttpResponseNotFound('ticker not found')
    try:
        obj = Portfolio.objects.get(Username=username,Tickercode=ticker)
        print('ticker already exist')
        return HttpResponseNotFound('ticker already exist')
    except Portfolio.DoesNotExist:
        Portfolio.objects.create(Username=username, Tickercode=ticker).save()
        data = {
            'ticker': ticker,
        }
        result = json.dumps(data)
        print(result)
        return HttpResponse(result)


def GetPortfolio(request):
    username = request.POST['username']
    if not username:
        print('blank data')
        return HttpResponseNotFound('blank data')
    try:
        is_user = User.objects.get(name=username)
        # 查找这个用户的所有stock，port是一个queryset
        port = Portfolio.objects.filter(Username=username)
        # 这个用户共有count个stock
        count = port.count()
        # list用于存储这个用户所有的tickercode
        ticker_list = []
        for i in range(count):
            # 取出对应的 Tickercode,存入list
            ticker_list.append(port[i].Tickercode)
        # 构造json
        data_list = []
        for i in range(count):
            ticker = Ticker.objects.get(stock_ticker=ticker_list[i])
            # print(ticker.stock_info)
            stock_info = json.loads(ticker.stock_info)
            data_list.append(stock_info)
        result = json.dumps(data_list)
        return HttpResponse(result)
    except User.DoesNotExist:
        print('user not exist')
        return HttpResponseNotFound('user not exist')