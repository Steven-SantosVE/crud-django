from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import AuthorSerializer
from catalog.models import Author

@api_view(['GET'])
def getData(request):
    Authors = Author.objects.all()
    serializer = AuthorSerializer(Authors, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def addAuthor(request):
    serializer = AuthorSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)