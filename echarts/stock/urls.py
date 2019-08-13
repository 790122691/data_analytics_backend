from django.urls import re_path
from . import views

urlpatterns = [
    re_path(r'GetStockHistory', views.get_stock_history, name ='history'),
    re_path(r'GetStockInfo', views.get_stock_info, name ='info'),
]
