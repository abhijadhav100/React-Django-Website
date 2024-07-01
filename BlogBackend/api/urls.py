from django.contrib import admin
from django.urls import path, include
# from api import views
from rest_framework import routers
from api.views import StudentList

router = routers.DefaultRouter()
router.register(r'students',StudentList)
urlpatterns = [
    path('', include(router.urls)),
]
