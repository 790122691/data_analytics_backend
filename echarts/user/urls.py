from django.urls import path, re_path
from . import views

urlpatterns = [
    path('', views.login_page, name='login_page'),
    path('register_page/', views.register_page, name='register_page'),
    path('login/', views.login, name='login'),
    re_path(r'register', views.register, name='register'),
    re_path(r'AddPortfolio/', views.AddPortfolio, name='AddPortfolio'),
    re_path(r'GetPortfolio/', views.GetPortfolio, name='GetPortfolio'),
    re_path(r'logout/', views.logout, name='logout'),
    re_path(r'DeletePortfolio/', views.DeletePortfolio, name='DeletePortfolio'),
    path('isLogin/', views.isLogin, name='isLogin'),
    re_path(r'isinPortfolio/', views.isinPortfolio, name='isinPortfolio'),

]