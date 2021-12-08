from django import forms
from django.contrib.auth.forms import UserChangeForm, UserCreationForm

from .models import User

class NewUserForm(UserCreationForm):
    email = forms.EmailField()
    
    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2']

class ChangeUserForm(UserChangeForm):
    class Meta:
        model = User
        fields = UserChangeForm.Meta.fields
