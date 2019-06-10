from django.db import models


# Create your models here.

class Django_test(models.Model):
      title = models.CharField(max_length=200)
      description = models.TextField(null=True)
      author = models.CharField(max_length=200)
      tags = models.CharField(max_length=200,null=True)
      created_at = models.DateTimeField(auto_now_add=True)
      updated_at = models.DateTimeField(auto_now_add=True)

      def _str_(self):
        return self.title
