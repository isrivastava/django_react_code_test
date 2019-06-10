from django.shortcuts import render

from rest_framework import viewsets          
from .serializers import Django_testSerializer  
from .models import Django_test                     

class Django_testView(viewsets.ModelViewSet):       
    serializer_class = Django_testSerializer          
    queryset = Django_test.objects.all()
