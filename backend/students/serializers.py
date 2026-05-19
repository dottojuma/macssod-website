from rest_framework import serializers
from .models import Course, Student, Application

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'

# Hapa ndipo panaposababisha kosa kama hukuziandika hizi fields zote tatu mpya!
class ApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = ['id', 'full_name', 'email', 'phone_number', 'form_four_index', 'course_requested', 'status', 'applied_at']