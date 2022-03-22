from django.urls import path
from django.urls.resolvers import URLPattern
from . import views
urlpatterns=[
    path('list',views.list,name='list'),
    path('create',views.create,name='create'),
    path('retrieve/<str:pk>',views.retrieve,name='retrieve'),
    path('update/<str:pk>',views.update,name='update'), 
    path('delete/<str:pk>',views.delete,name='delete'),  
]