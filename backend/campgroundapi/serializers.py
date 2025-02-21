from rest_framework import serializers
from .models import EachCampground,Comment

class CampgroundSerialzer(serializers.ModelSerializer):
    class Meta:
        model=EachCampground
        field=['id','name','description','price']


class CommentSerializer(serializers.ModelSerializer):
    author = serializers.CharField(source='author.username', read_only=True)
    class Meta:
        model=Comment
        field=['id','author','time','detailComment']
        extra_kwargs = {'author':{'read_only':True}}