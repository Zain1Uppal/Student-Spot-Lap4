from django.urls import path
from . import views

urlpatterns = [
    path('', views.post_index, name='posts-index'),
    path('new/', views.post_create, name='posts-create'),
    path('<int:post_id>/', views.PostDetail.as_view(), name="individual-post"),
    path('users/<int:user_id>/', views.show_by_user, name='user-posts'),
    path('users/<int:user_id>/following', views.show_following_posts, name="user-feed"),
    path('categories/<int:category_id>/', views.show_by_category, name='category-posts'),
    path('comments/', views.comment_index, name='comments-index'),
    path('comments/new/', views.comment_create, name='comments-create'),
    path('<int:post_id>/comments/', views.show_by_post, name='comments-show-by-posts'),
]