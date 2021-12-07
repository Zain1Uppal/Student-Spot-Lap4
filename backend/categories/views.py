from rest_framework import viewsets
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes

from .serializers import CategorySerializer
from .models import Category

# Create your views here.
# class CategoryViewSet(viewsets.ModelViewSet):
#     queryset = Category.objects.all()
#     serializer_class = CategorySerializer
#     permission_classes = [permissions.IsAuthenticated]
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def index(req):
    data = Category.objects.all()
    serialized = CategorySerializer(data, many=True)
    return Response({"data": serialized.data})

@api_view(['POST'])
@permission_classes([IsAdminUser])
def create(req):
    serialized = CategorySerializer(data=req.data)
    if serialized.is_valid():
        serialized.save()
        return Response(serialized.data, status=201)
    return Response(serialized.errors, status=400)