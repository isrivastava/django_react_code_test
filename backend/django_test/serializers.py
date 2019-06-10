
from rest_framework import serializers
from .models import Django_test

class Django_testSerializer(serializers.ModelSerializer):
  class Meta:
    model = Django_test
    fields = ('id','title', 'description', 'author','tags','created_at','updated_at')
