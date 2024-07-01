from django.contrib import admin
from django.urls import path, include

admin.site.site_header = 'CodeZilla'                   
admin.site.index_title = 'Codezilla'                 
admin.site.site_title = 'codezilla'

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/',include('api.urls'))
]
