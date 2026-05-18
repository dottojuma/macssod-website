from django.db import models
from django.contrib.auth.models import User

# 1. Table la Kozi (Courses)
class Course(models.Model):
    course_code = models.CharField(max_length=10, unique=True)
    course_name = models.CharField(max_length=100)
    description = models.TextField()
    credits = models.IntegerField(default=3)

    def __str__(self):
        return f"{self.course_code} - {self.course_name}"

# 2. Table la Wanafunzi (Students)
class Student(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    reg_number = models.CharField(max_length=20, unique=True)
    phone_number = models.CharField(max_length=15)
    enrolled_courses = models.ManyToManyField(Course, blank=True)
    admission_date = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"{self.reg_number} - {self.user.get_full_name()}"

# 3. Table la Maombi ya Kujiunga (Applications)
class Application(models.Model):
    STATUS_CHOICES = [
        ('PENDING', 'Inasubiri'),
        ('APPROVED', 'Imekubaliwa'),
        ('REJECTED', 'Imekataliwa'),
    ]
    full_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone_number = models.CharField(max_length=15)
    course_requested = models.ForeignKey(Course, on_delete=models.CASCADE)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='PENDING')
    applied_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.full_name} - {self.course_requested.course_name} ({self.status})"