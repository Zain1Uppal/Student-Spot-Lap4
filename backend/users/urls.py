from django.urls import include, path
from . import views

urlpatterns = [
    path('', views.index, name="user-index"),
    path('<str:username>/', views.UserDetail.as_view(), name="individual-user"),
    path('<str:username>/following/', views.UserFollowing.as_view(), name="user-following"),
    path('auth/register/', include('rest_auth.registration.urls')),
    path('auth/', include('rest_auth.urls')),
]