from app.models import *
from app.serializers import *
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework import status
from app import calculation, scraper

class TagsView(APIView):
    parser_classes = (JSONParser,)
    def post(self, request, format=None):
        text = request.data.get("text", False)
        if not text:
            return Response("Write something, DUMBASS!", status.HTTP_400_BAD_REQUEST)
        tags_json = None
        tweet = None
        url = None
        try:
            tags_json = calculation.get_tags(text)
            tags_capital = [x[:1].upper()+x[1:] for x in list(tags_json["0"].keys())]
            tweet = scraper.get_tweet(tags_capital)
            url = scraper.scrape_google_photo_url(" ".join(list(tags_json["0"].keys())))
        except:
            return Response("You write nonsense, DISRESPECT!", status.HTTP_400_BAD_REQUEST)

        tags_mapped = {}
        tags_mapped["text"] = text
        tags_mapped["tweet"] = tweet
        tags_mapped["url"] = url
        tags_mapped["tags"] = []

        for key in tags_json["0"]:
            tag = {}
            tag["text"] = key
            tag["value"] = tags_json["0"][key]
            #tag["url"] = scraper.scrape_google_photo_url(key)
            tags_mapped["tags"].append(tag)

        return Response(
            tags_mapped
        )


class ImageUrlView(APIView):
    parser_classes = (JSONParser,)
    def post(self, request, format=None):
        query = request.data.get("query", False)
        if not query:
            return Response("Sorry, I don't understand you", status.HTTP_400_BAD_REQUEST)
        url = scraper.scrape_google_photo_url(query)
        return Response(
            {
                'quary': query,
                'url': url
            }
        )
