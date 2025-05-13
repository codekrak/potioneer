# potioneer_backend/urls.py
from django.contrib import admin
from django.urls import path, include
from django.contrib import admin
from django.urls import path, include
from products import views  # Import the new view function
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/products/", include("products.urls")),
    path("", views.home, name="home"),  # Add this line for the root URL
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

