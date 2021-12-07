from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework.response import Response

from .serializers import UserSerializer

from .models import User

@api_view(['GET'])
@permission_classes([IsAdminUser])
def index(req):
    data = User.objects.all()
    serialized = UserSerializer(data, many=True)
    return Response({"data": serialized.data})


# Create your views here.
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def show(req, user_id):
    data = get_object_or_404(User, pk=user_id)
    serialized = UserSerializer(data)
    return Response({
        "data": serialized.data, 
        "user is superuser?": data.is_superuser,
        "user is authenticated?": data.is_authenticated,
        "user is staff?": data.is_staff
    })