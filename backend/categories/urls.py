from django.urls import include, path
from rest_framework import routers
from . import views

# router = routers.DefaultRouter()
# router.register('', views.CategoryViewSet)

urlpatterns = [
    # path('', include(router.urls))
    path('', views.index, name='categories-index'),
    path('new', views.create, name='categories-create'),
    path('<int:cateId>', views.show_by_id, name='category-by-id')
]