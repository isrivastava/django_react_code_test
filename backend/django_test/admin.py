from django.contrib import admin

from .models import Django_test 

class Django_testAdmin(admin.ModelAdmin):  
    list_display = ('id','title', 'description', 'author','tags','created_at','updated_at') 

# Register your models here.
admin.site.register(Django_test, Django_testAdmin) 
