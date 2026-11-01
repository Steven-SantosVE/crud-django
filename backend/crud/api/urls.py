from django.urls import path
from . import views

urlpatterns = [
    path('author', views.getData, name="read_author"),
    path('addAuthor', views.addAuthor, name="add_author"),
    path('updateAuthor/<int:pk>/', views.updateAuthor),
    path('deleteAuthor/<int:pk>/', views.deleteAuthor)
]
