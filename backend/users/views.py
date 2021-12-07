from django.contrib.auth import get_user
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework.response import Response

from .serializers import UserSerializer

from .models import User
from .permissions import IsUserOrAdminOrReadOnly

@api_view(['GET'])
@permission_classes([IsAdminUser])
def index(req):
    # Show all users (admin only)
    data = User.objects.all()
    serialized = UserSerializer(data, many=True)
    return Response({"data": serialized.data})

class UserDetail(APIView):
    # Retrieve, update, or delete a user
    permission_classes = [IsUserOrAdminOrReadOnly]

    def get_user(self, pk):
        return get_object_or_404(User, pk=pk)

    def get(self, req, user_id):
        user = self.get_user(user_id)
        self.check_object_permissions(req, user)
        serialized = UserSerializer(user)
        return Response({"data": serialized.data})

    def put(self, req, user_id):
        user = self.get_user(user_id)
        self.check_object_permissions(req, user)
        serialized = UserSerializer(user, data=req.data, partial=True)
        if serialized.is_valid():
            serialized.save()
            return Response({"data": serialized.data})
        return Response(serialized.errors, status=400)

    def patch(self, req, user_id):
        return self.put(req, user_id)

    def delete(self, req, user_id):
        user = self.get_object(user_id)
        self.check_object_permissions(req, user)
        user.delete()
        return Response(status=204)
