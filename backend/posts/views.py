from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes

from .serializers import PostSerializer
from .models import Post

# Create your views here.

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def index(req):
    data = Post.objects.all()
    serialized = PostSerializer(data, many=True, context = { "request": req })
    return Response({"data": serialized.data})
