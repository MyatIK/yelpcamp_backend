from django.db import models

# Create your models here.
class EachCampground(models.Model):
    Name=models.CharField(max_length=30)
    Description=models.TextField
    Price=models.DecimalField(max_digits=5, decimal_places=2)
