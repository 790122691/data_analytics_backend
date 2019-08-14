from django.urls import path, re_path
from . import views

urlpatterns = [
    #re_path(r'stock_history/', views.stock_history, name='stock_history'),
    path('', views.login_page, name='login_page'),
    re_path(r'login/', views.login, name='login'),
    re_path(r'register/', views.register, name='register'),
    re_path(r'UpdatePortfolio/', views.UpdatePortfolio, name='UpdatePortfolio'),
    re_path(r'GetPortfolio/', views.GetPortfolio, name='GetPortfolio'),
    re_path(r'logout/', views.logout, name='logout'),
]