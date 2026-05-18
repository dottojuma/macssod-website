from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CourseViewSet, ApplicationViewSet

router = DefaultRouter()
router.register(r'courses', CourseViewSet)
router.register(r'applications', ApplicationViewSet)

urlpatterns = [
    path('', include(router.urls)),
]