from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.views.generic import TemplateView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.utils.decorators import method_decorator

from app.models import *
from app.forms import *


class IndexView(TemplateView):
    template_name = 'index.html'