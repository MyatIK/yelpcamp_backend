from rest_framework import generics
from .serializers import CampgroundSerialzer,CommentSerializer,UserSerializer
from .models import EachCampground, Comment
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.contrib.auth.models import User

# Create your views here.

class CreateCampView(generics.ListCreateAPIView):
    queryset=EachCampground.objects.all()
    serializer_class=CampgroundSerialzer
    permission_classes=[IsAuthenticated]

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            print(serializer.errors)

class DeleteCampView(generics.DestroyAPIView):
    serializer_class=CampgroundSerialzer
    permission_classes=[IsAuthenticated]

    def get_queryset(self):
        user=self.request.user
        return EachCampground.objects.filter(author=user)


class CreateCommentView(generics.ListCreateAPIView):
    queryset=Comment.objects.all()
    serializer_class=CommentSerializer
    permission_class=[IsAuthenticated]

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            print(serializer.errors)

class DeleteCommentView(generics.DestroyAPIView):
    serializer_class=CommentSerializer
    permission_classes=[IsAuthenticated]

    def get_queryset(self):
        user=self.request.user
        return Comment.objects.filter(author=user)



class CreateUserView(generics.CreateAPIView):
    queryset=User.objects.all()
    serializer_class=UserSerializer
    permission_classes=[AllowAny]

    


