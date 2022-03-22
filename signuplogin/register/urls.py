from django.urls import path
from .views import RegisterView, LogoutAPIView, LoginAPIView,relativeRegisterView ,relativedata
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)
urlpatterns = [
    path('register/', RegisterView.as_view(), name="register"),
    path('login/', LoginAPIView.as_view(), name="login"),
    path('logout/', LogoutAPIView.as_view(), name="logout"),
    path('relative/',relativeRegisterView.as_view(),name="relative"),
    path('relativedata/',relativedata.as_view(),name="relativedata"),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]