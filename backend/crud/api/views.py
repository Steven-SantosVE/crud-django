from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import AuthorSerializer
from catalog.models import Author
from rest_framework import status

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

@api_view(['PUT'])
def updateAuthor(request, pk):
    author_obj = Author.objects.get(pk=pk)
    serializer = AuthorSerializer(author_obj, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['DELETE'])
def deleteAuthor(pk):
    author_obj = Author.objects.get(pk=pk)
    author_obj.delete()
    return Response({'msg': 'Person deleted successfully'}, status=status.HTTP_204_NO_CONTENT)