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
from django.http import HttpResponseRedirect

# Create your views here.


def login(request):
    name = request.POST.get['username']
    pwd = request.POST.get['password']
    try:
        user_obj = User.objects.get(name=name, pwd=pwd)
    except User.DoesNotExist:
        return HttpResponseNotFound('user information not match')
    data = {'username': name}
    result = json.dumps(data)
    print(result)
    # 一旦用户名和密码输入正确，就往session字典内写入用户数据
    request.session.set_expiry(0)
    #request.session['is_login'] = True
    request.session['username'] = name
    return HttpResponse(result)


def register(request):
    name = request.GET['username']
    pwd = request.GET['password']
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


def logout(request):
    print('request.session_name--------------------------------------------')
    print(request.session['username'])
    del request.session['username']        # 删除session
    #return HttpResponse('logout ok!')
    return HttpResponseRedirect('/User/login')


def UpdatePortfolio(request):
    username = request.GET['username']
    ticker = request.GET['ticker']
    # del request.session['user_name']
    # print('request.session_is_login----------------------------------------')
    # print(request.session['is_login'])
    # print('request.session_name--------------------------------------------')
    # print(request.session['username'])
    # 检查登录状态
    # try:
    # if not(request.session['is_login']):
    # print('please login')
    # except KeyError:
    #    return HttpResponseNotFound('please login')
    #    print('未登录')
    # 检查是否用户本人
    try:
        if not(request.session['username'] == username):
            print('please login')
    except KeyError:
        print('please login')
        return HttpResponseNotFound('please login')
    # 是否空数据
    if not(username and ticker):
        print('blank data')
        return HttpResponseNotFound('blank data')
    # 用户是否存在
    try:
        is_user = User.objects.get(name=username)
    except User.DoesNotExist:
        print('user not exist')
        return HttpResponseNotFound('user not exist')
    # ticker是否存在
    try:
        is_ticker = Ticker.objects.get(stock_ticker=ticker)
    except Ticker.DoesNotExist:
        print('ticker not found')
        return HttpResponseNotFound('ticker not found')
    # 该portfolio是否已经存在
    try:
        obj = Portfolio.objects.get(Username=username,Tickercode=ticker)
        print('portfolio already exist')
        return HttpResponseNotFound('portfolio already exist')
    except Portfolio.DoesNotExist:
        Portfolio.objects.create(Username=username, Tickercode=ticker).save()
        data = {
            'ticker': ticker,
        }
        result = json.dumps(data)
        print(result)
        return HttpResponse(result)


def GetPortfolio(request):
    username = request.GET['username']
    # 是否用户本人
    try:
        if not(request.session['username'] == username):
            print('please login')
    except KeyError:
        print('please login')
        return HttpResponseNotFound('please login')
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