curl -X GET \
     -H "X-Algolia-API-Key: ${API_KEY}" \
     -H "X-Algolia-Application-Id: ${APPLICATION_ID}" \
    "https://analytics.algolia.com/2/searches?index=docs"