from app.models import *
from app.serializers import *
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework import status


class APIRequestView(APIView):
    """
    A view that can accept POST requests with JSON content.
    """
    parser_classes = (JSONParser,)

    def post(self, request, format=None):

        return Response(
            {
                'received data': request.data,
            }
        )
