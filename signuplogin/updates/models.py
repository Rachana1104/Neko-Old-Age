from django.db import models

# Create your models here.
class Patient(models.Model):
    id=models.AutoField(primary_key=True)
    name=models.CharField(max_length=250,default='')
    food=models.CharField(max_length=1255,default='')
    medicine=models.CharField(max_length=1255,default='')
    appointment=models.CharField(max_length=1255,default='')
    relatives=models.CharField(max_length=1255,default='')
    healthstatus=models.CharField(max_length=255,default='')
    dob=models.DateField()
    allergies=models.CharField(max_length=1255,default='')
    roomno=models.CharField(max_length=1255,default='')