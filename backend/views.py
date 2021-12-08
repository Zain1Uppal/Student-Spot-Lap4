from django.http import HttpResponse

def index(req):
    return HttpResponse("<h1>Welcome to the StudentHub API!</h1>")