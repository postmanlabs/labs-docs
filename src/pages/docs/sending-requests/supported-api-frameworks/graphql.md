---
title: "Querying with GraphQL"
order: 37
page_id: "graphql"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Installing and updating"
    url: "/docs/getting-started/installation-and-updates/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Postman v7.2 Supports GraphQL"
    url: "https://blog.postman.com/postman-v7-2-supports-graphql/"
  - type: link
    name: "Working with GraphQL collection"
    url: "https://www.postman.com/postman/workspace/postman-team-collections/collection/1559645-c0dd3eb3-5258-4ddd-a6e4-2780c5212e33?ctx=documentation"
  - type: subtitle
    name: "Video"
  - type: link
    name: "GraphQL in Postman Demo"
    url: "https://youtu.be/7pUbezVADQs"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Grouping requests in collections"
    url: "/docs/sending-requests/intro-to-collections/"

warning: false

---

Postman can handle any calls sent over HTTP. This means that Postman can make HTTP calls using GraphQL, an open-source data query and manipulation language for APIs, in addition to REST, [SOAP](/docs/sending-requests/supported-api-frameworks/making-soap-requests/), and [WebSocket](/docs/sending-requests/supported-api-frameworks/websocket/) requests.

There are a few ways for you to author and send a GraphQL query using Postman:

* [Using Postman's built-in support for GraphQL](#built-in-support-for-graphql)
* [Using JSON in the request body](#using-json-in-the-request-body)
* [Using a GraphQL query](#using-a-graphql-query)
* [Importing the query as a cURL request](#importing-the-query-as-a-curl-request)

## Built-in support for GraphQL

If you're using Postman v7.2 or later, the app has built-in support for sending GraphQL queries in the request body, using GraphQL variables, and GraphQL query autocompletion.

1. Open a new request tab in Postman and enter your GraphQL endpoint URL in the address field.
1. Select POST from the request method dropdown list.
1. Under the **Body** tab, select the **GraphQL** body type.
1. Enter your GraphQL query in the **Query** editor. This editor enables you to author and edit both queries and variables separately.

  <!-- TODO: screenshot -->

1. Enter your GraphQL varibles in the **GraphQL variables** editor.

> You can also [use Postman variables](/docs/sending-requests/variables/) as data inputs for GraphQL variables using `{{variable}}` syntax.

<!-- TODO: screenshot -->

### Importing GraphQL schemas

To enable autocompletion, you need to add a GraphQL schema under the APIs tab, and then select the schema while typing your query. To [create or import a GraphQL schema](/docs/designing-and-developing-your-api/the-api-workflow/) into Postman, complete the following steps.

1. Under the **APIs** tab, click **+ New API**.
1. Enter a name and version for your API.
1. Choose **GraphQL** from the **Schema type** dropdown list.
1. Choose either **JSON** or **GraphQL SDL** from the **Schema Format** dropdown list.
1. You can optionally select the **Import** tab to import an API specification directly from either a local file or a GitHub or Bitbucket repo. If you don't import a schema, Postman will populate your API with a sample specification you can edit at any time.
1. Click **Create API**.
1. Open the new API's version page, and navigate to the **Definition** tab to edit your schema.

<!-- TODO: screenshot -->

### Autocomplete for GraphQL

Once you create or import a GraphQL schema as described above, you can enable autocompletion within the **GraphQL** query editor.

1. Under the **Collections** tab, return to your **GraphQL** body. Select your schema from the dropdown list. You may need to refresh by clicking on the adjacent icon.
  [![schema selection](https://i.imgur.com/bhesWgs.png)](https://i.imgur.com/bhesWgs.png)
1. Begin editing your query, and now Postman will suggest autocomplete options from the data within your GraphQL schema.
  [![autocomplete](https://i.imgur.com/Ai5cW4q.png)](https://i.imgur.com/Ai5cW4q.png)

<!-- TODO: screenshots -->

## Using JSON in the request body

1. Open a new request tab in Postman and enter your GraphQL endpoint URL in the address field.
1. Select POST from the request method dropdown list.
1. Under the **Body** tab, select the **raw** body type with JSON format. <!-- TODO: reword -->
1. Construct your query in the request body using proper JSON formatting.
1. In the **Headers** tab, add the `Content-type` of `application/json`.

<!-- TODO: screenshot -->

## Using a GraphQL query

1. Open a new request tab in Postman and enter your GraphQL endpoint URL in the address field.
1. Select POST from the request method dropdown list.
1. In the **Headers** tab, add the `Content-type` of `application/graphql`.
1. Under the **Body** tab, select the **raw** body type with text format. <!-- TODO: reword -->
1. Construct your query in the request body using standard GraphQL formatting.

<!-- TODO: screenshot -->

## Importing the query as a cURL request

POST

1. Select **Import** in the upper left.
1. Select **Raw text**.
1. Paste your cURL command in the text field, then **Continue**.
1. Select **Import**. The request will open in a new tab with the GraphQL endpoint URL and the request method you specified.

<!-- TODO: screenshot -->
