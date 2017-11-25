from app.models import *
from app.serializers import *
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework import status
from app import calculation

class APIRequestView(APIView):
    """
    A view that can accept POST requests with JSON content.
    """
    parser_classes = (JSONParser,)
    def post(self, request, format=None):
        text = request.data.get("text", False)
        if not text:
            return Response("Sorry, I don't understand you", status.HTTP_400_BAD_REQUEST)
        tags_json = calculation.get_tags(text)
        return Response(
            {
                'tags': tags_json,
                'text': text
            }
        )
