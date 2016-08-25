from django.shortcuts import render

# Create your views here.


def foo_view(request):
    template_name = 'hello.html'
    return render(request, template_name, {})
