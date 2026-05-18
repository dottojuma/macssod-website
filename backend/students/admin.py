from django.contrib import admin
from .models import Course, Student, Application

# Kusajili models zetu ili zionekane kule admin dashboard
admin.site.register(Course)
admin.site.register(Student)
admin.site.register(Application)