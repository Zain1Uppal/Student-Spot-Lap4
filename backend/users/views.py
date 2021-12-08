from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework.response import Response

from .serializers import UserSerializer

from categories.models import Category
from .models import User
from .permissions import IsUserOrAdminOrReadOnly

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def index(req):
    # Show all users (admin only)
    data = User.objects.all()
    serialized = UserSerializer(data, many=True)
    if req.user.is_superuser:
        # Admins see ALL (eyes emoji)
        return Response({"data": serialized.data})
    else:
        resp_data = serialized.data
        resp = [{
            "username": d["username"],
            "followed_users": d["followed_users"],
            "followed_categories": d["followed_categories"],
            "bio": d["bio"],
            "university": d["university"],
            "course": d["course"],
            "image_file": d["image_file"]
        } for d in resp_data]
        return Response({"data": resp})
        

class UserDetail(APIView):
    # Retrieve, update, or delete a user
    permission_classes = [IsUserOrAdminOrReadOnly]

    def get_user(self, username):
        return get_object_or_404(User, username__iexact=username)

    def get(self, req, username):
        user = self.get_user(username)
        self.check_object_permissions(req, user)
        serialized = UserSerializer(user)
        return Response({"data": serialized.data})

    def put(self, req, username):
        user = self.get_user(username)
        self.check_object_permissions(req, user)
        serialized = UserSerializer(user, data=req.data, partial=True)
        if serialized.is_valid():
            serialized.save()
            return Response({"data": serialized.data})
        return Response(serialized.errors, status=400)

    def patch(self, req, username):
        return self.put(req, username)

    def delete(self, req, username):
        user = self.get_object(username)
        self.check_object_permissions(req, user)
        user.delete()
        return Response(status=204)

class UserFollowing(APIView):
    # Retrieve, update, and remove users/categories from a user's following lists
    permission_classes = [IsUserOrAdminOrReadOnly]

    def get_user(self, username):
        return get_object_or_404(User, username__iexact=username)

    def get(self, req, username):
        user = self.get_user(username)
        self.check_object_permissions(req, user)
        serialized = UserSerializer(user)
        response = {
            "followed_users": serialized.data["followed_users"],
            "followed_categories": serialized.data["followed_categories"]
        }
        return Response({"data": response})

    def patch(self, req, username):
        user = self.get_user(username)
        self.check_object_permissions(req, user)

        actions = ["follow_user", "follow_category", "unfollow_user", "unfollow_category"]

        if all(action not in req.data for action in actions):
            # Don't allow if not updating either follow list
            return Response(status=400)
        
        # Add follow 
        if actions[0] in req.data:
            # Add user to follow list
            name_to_add = req.data[actions[0]]
            user_to_add = get_object_or_404(User, username__iexact=name_to_add)
            user.followed_users.add(user_to_add)
        if actions[1] in req.data:
            # Add category to follow list
            name_to_add = req.data[actions[1]]
            category_to_add = get_object_or_404(Category, username__iexact=name_to_add)
            user.followed_categories.add(category_to_add)

        # Remove follow
        if actions[2] in req.data:
            # Remove user from follow list
            name_to_remove = req.data[actions[2]]
            user_to_remove = get_object_or_404(User, username__iexact=name_to_remove)
            user.followed_users.remove(user_to_remove)
        if actions[3] in req.data:
            # Remove category from follow list
            name_to_remove = req.data[actions[3]]
            category_to_remove = get_object_or_404(Category, username__iexact=name_to_remove)
            user.followed_categories.remove(category_to_remove)

        # Return updated user data
        return self.get(req, username)