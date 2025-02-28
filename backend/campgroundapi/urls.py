from django.urls import path,include
from .views import CreateCampView,CreateCommentView,CreateUserView,DeleteCampView,DeleteCommentView
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView

urlpatterns = [
    path('campground/create/', CreateCampView.as_view(), name='campground-list'),
    path('user/register/', CreateUserView.as_view(), name='register'),
    path('campground/delete/<int:pk>/', DeleteCampView.as_view(), name='delete-campground'),
    path('comments/', CreateCommentView.as_view(), name='comments'),
    path('comment/delete/<int:pk>/', DeleteCommentView.as_view(), name='delete-comment'),
    path('token/',TokenObtainPairView.as_view(),name='get_token'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('campgroundapi-auth', include("rest_framework.urls")),

]