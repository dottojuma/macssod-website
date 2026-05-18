from rest_framework import viewsets
from .models import Course, Application
from  .serializers import CourseSerializer, ApplicationSerializer

# View ya Kozi - Itaruhusu React kusoma kozi zilizopo
class CourseViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

# View ya Maombi - Itaruhusu watu kujaza fomu kutoka React na kutuma huku
class ApplicationViewSet(viewsets.ModelViewSet):
    queryset = Application.objects.all()
    serializer_class = ApplicationSerializer