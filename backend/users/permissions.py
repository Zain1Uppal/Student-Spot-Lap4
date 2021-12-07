from rest_framework import permissions

class IsPosterOrReadOnly(permissions.BasePermission):
    """
    Custom permission to only allow owners of a post or admins to edit it
    """
    edit_methods = ("PUT", "PATCH")
    message = "You do not have permission to edit this post!"

    def has_permission(self, request, view):
        # Needs to be authenticated for basic access
        if request.user.is_authenticated:
            return True

    def has_object_permission(self, request, view, obj):
        # Admin users have full access
        if request.user.is_superuser:
            return True

        # Anyone can access GET, OPTIONS, HEAD methods
        if request.method in permissions.SAFE_METHODS:
            return True

        # Posters can edit/delete their posts
        if obj.poster == request.user:
            return True

        # Staff users can delete posts
        if request.user.is_staff and request.method not in self.edit_methods:
            return True
        
        # Otherwise deny access
        return False