from django.urls import re_path
from . import views

urlpatterns = [
    re_path(r'GetStockHistory', views.get_stock_history, name ='history'),
    re_path(r'GetStockInfo', views.get_stock_info, name ='info'),
    re_path(r'GetStockList', views.get_all_stock, name = 'stock_list'),
    re_path(r'get_stock_history_by_date', views.get_stock_history_by_date, name = 'days his'),
]
