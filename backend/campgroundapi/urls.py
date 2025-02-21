from django.urls import path,include
from .views import CreateCampView

urlpatterns = [
    path('campground', CreateCampView.as_view(), name='campground_list')

]