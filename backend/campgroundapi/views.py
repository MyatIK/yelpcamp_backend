from rest_framework import generics
from .serializers import CampgroundSerialzer,CommentSerializer
from .models import EachCampground, Comment
from rest_framework.permissions import IsAuthenticated, AllowAny

# Create your views here.

class CreateCampView(generics.ListCreateAPIView):
    queryset=EachCampground.objects.all()
    serializer_class=CampgroundSerialzer
    permission_classes=[IsAuthenticated]

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.reques.user)
        else:
            print(serializer.errors)

