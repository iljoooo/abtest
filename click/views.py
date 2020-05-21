from django.shortcuts import get_object_or_404, render
from django.http import HttpResponseRedirect
from django.urls import reverse
from django.views import generic
from django.views.decorators.csrf import csrf_exempt

from .models import Target

class ResultsView(generic.ListView):
    template_name = 'click/results.html'
    context_object_name = 'clicks'

    def get_queryset(self):
        options = Target.objects.get(pk=1).option_set.all()
        return [x.click for x in options]

@csrf_exempt
def click(request):
    c = request.POST['option']
    option = Target.objects.get(pk=1).option_set.all()
    if c == 'A':
        option = option[0]
    else:
        option = option[1]

    option.click += 1
    option.save()

    return HttpResponseRedirect('http://147.46.67.251:37080')

