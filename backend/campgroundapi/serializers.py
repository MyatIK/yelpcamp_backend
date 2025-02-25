from rest_framework import serializers
from .models import EachCampground,Comment
from django.contrib.auth.models import User

class CampgroundSerialzer(serializers.ModelSerializer):
    class Meta:
        model=EachCampground
        field=['id','name','description','price','author']


class CommentSerializer(serializers.ModelSerializer):
    author = serializers.CharField(source='author.username', read_only=True)
    class Meta:
        model=Comment
        field=['id','author','time','detailComment']
        extra_kwargs = {'author':{'read_only':True}}

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        field=['id', 'username', 'password']
        extra_kwags = {'password':{'write_only':True}}

    def create(self,validated_data):
        user=User.objects.create_user(**validated_data)
        return user