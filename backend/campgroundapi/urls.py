from django.urls import path,include
from .views import CreateCampView,CreateCommentView,CreateUserView,DeleteCampView,DeleteCommentView

urlpatterns = [
    path('campground/create', CreateCampView.as_view(), name='campground-list'),
    path('user/register', CreateUserView.as_view(), name='register'),
    path('campground/delete/<int:pk>', DeleteCampView.as_view(), name='delete-campground'),
    path('comments', CreateCommentView.as_view(), name='comments'),
    path('comment/delete/<int:pk>', DeleteCommentView.as_view(), name='delete-comment'),

]