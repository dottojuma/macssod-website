from django.contrib import admin
from .models import Course, Student, Application

# --- KUBADILISHA JINA LA DASHBOARD ---
admin.site.site_header = "MACSSOD COLLEGE - MANAGEMENT PORTAL"
admin.site.site_title = "MACSSOD Admin"
admin.site.index_title = "Dashboard ya Utawala"

# 1. Kusajili Applications (Hapa ndipo wanafunzi wapya wanapoonekana)
@admin.register(Application)
class ApplicationAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'form_four_index', 'get_course_name', 'phone_number', 'status', 'applied_at')
    list_filter = ('status', 'course_requested')
    search_fields = ('full_name', 'form_four_index', 'email')
    list_editable = ('status',)

    def get_course_name(self, obj):
        return obj.course_requested.course_name
    get_course_name.short_description = 'Kozi Aliyoomba'

class Media:
        css = {
            'all': ('admin/css/base.css',)
        }
# 2. Kusajili Courses (Sehemu ya kuongeza kozi mpya)
@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ('course_code', 'course_name')
    search_fields = ('course_name', 'course_code')

# 3. Kusajili Student kwa njia rahisi na salama ili kuzuia kosa la SystemCheckError
admin.site.register(Student)