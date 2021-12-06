from django.urls import include, path
from . import views

urlpatterns = [
    path('', views.index, name="user-index"),
    path('<int:user_id>/', views.show, name="user-show"),
    path('auth/', include('rest_auth.urls')),
    path('auth/register/', include('rest_auth.registration.urls'))
]