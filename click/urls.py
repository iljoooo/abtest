from django.urls import path
from . import views

urlpatterns = [
    path('', views.ResultsView.as_view(), name='results'),
    path('click', views.click, name='click'),
]
