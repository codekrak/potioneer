# products/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.product_list, name='product_list'),  # For listing and creating products
    path('<int:pk>/', views.product_detail, name='product_detail'),  # For retrieving, updating, and deleting a product
]

