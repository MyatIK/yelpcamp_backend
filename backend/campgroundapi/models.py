from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class EachCampground(models.Model):
    name=models.CharField(max_length=30)
    description=models.TextField()
    price=models.DecimalField(max_digits=5, decimal_places=2)
    author=models.ForeignKey(User, on_delete=models.CASCADE, related_name="campground")

    def __str__(self):
        return self.title

class Comment(models.Model):
    author=models.ForeignKey(User, on_delete=models.CASCADE, related_name="comment")
    Time=models.DateTimeField(auto_now_add=True)
    DetailComment=models.TextField()

    def __str__(self):
        return self.title