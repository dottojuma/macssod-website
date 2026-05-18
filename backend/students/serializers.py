from rest_framework import serializers
from .models import Course, Application

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'  # Hii itachukua nguzo zote (id, code, name, description, credits)

class ApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = '__all__'