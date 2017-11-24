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
        text = request.data.get("text", False)
        if not text:
            return Response("Sorry, I don't understand you", status.HTTP_400_BAD_REQUEST)
        headline="What happened in Russia?"
        return Response(
            {
                'headline': headline,
                'text': text
            }
        )
