---
title: "Querying with GraphQL"
order: 37
page_id: "graphql"
updated: 2021-12-16
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

Postman can make HTTP calls using GraphQL, an open-source data query and manipulation language for APIs, in addition to REST.

There are a few ways for you to author and send a GraphQL query using Postman:

* [Using Postman's built-in support for GraphQL](#using-postmans-built-in-support-for-graphql)
* [Using JSON in the request body](#using-json-in-the-request-body)
* [Using a GraphQL content type header](#using-a-graphql-content-type-header)
* [Importing the query as a cURL request](#importing-the-query-as-a-curl-request)

## Using Postman's built-in support for GraphQL

Postman has built-in support for [sending GraphQL queries in the request body](#sending-graphql-queries-in-the-request-body), [using GraphQL variables](#using-graphql-variables), [importing GraphQL schemas](#importing-graphql-schemas), and [enabling GraphQL query autocompletion](#enabling-graphql-query-autocompletion).

### Sending GraphQL queries in the request body

1. Open a new request tab in Postman and enter your GraphQL endpoint URL in the address field.
1. Select `POST` from the request method dropdown list.
1. Under the **Body** tab, select the **GraphQL** body type.
1. Enter your GraphQL query in the **Query** editor. This editor enables you to author and edit both queries and variables separately.

![Select the GraphQL body type](https://assets.postman.com/postman-docs/graphql-query.jpg)

### Using GraphQL variables

1. Enter your GraphQL variables in the **GraphQL variables** editor.
1. In the **Query** editor, declare your GraphQL variable in your GraphQL query. For more information on how to use GraphQL variables, see the [GraphQL variables documentation](https://graphql.org/learn/queries/#variables).

![Using GraphQL variables](https://assets.postman.com/postman-docs/graphql-variables.jpg)

> You can also [use Postman variables](/docs/sending-requests/variables/) as data inputs for GraphQL variables using `{{variable}}` syntax.

### Importing GraphQL schemas

To enable autocompletion, you need to add a GraphQL schema. To [create or import a GraphQL schema](/docs/designing-and-developing-your-api/creating-an-api/) into Postman:

1. Select **APIs** in the left sidebar, then select **+** to create a new API.
1. Enter a name and version for your API.
1. Choose **GraphQL** from the **Schema type** dropdown list.
1. Choose either **JSON** or **GraphQL SDL** from the **Schema Format** dropdown list.
    > You can optionally select the **Import** tab to import an API specification directly from either a local file or a GitHub or Bitbucket repo. If you don't import a schema, Postman will populate your API with a sample specification you can edit at any time.
1. Select **Create API**.
    <img src="https://assets.postman.com/postman-docs/graphql-create-schema.jpg" alt="Create a new API" width="500px"/>
1. Open the new API's version page and navigate to the **Definition** tab. Type or paste your GraphQL schema in the editor.

![Edit the API schema](https://assets.postman.com/postman-docs/graphql-schema-definition.jpg)

### Enabling GraphQL query autocompletion

Once you create or import a GraphQL schema as described above, you can enable autocompletion within the **GraphQL** query editor.

1. Return to your **GraphQL** body. Select your schema from the dropdown list. You may need to refresh by selecting the <img alt="Refresh icon" src="https://assets.postman.com/postman-docs/icon-refresh-v9-5.jpg" width="14px" style="vertical-align:middle;margin-bottom:5px"> refresh icon.
1. Begin editing your query. Postman will now suggest autocomplete options from the data within your new GraphQL schema.

![GraphQL autocomplete](https://assets.postman.com/postman-docs/graphql-autocomplete.jpg)

## Using JSON in the request body

1. Open a new request tab in Postman and enter your GraphQL endpoint URL in the address field.
1. Select `POST` from the request method dropdown list.
1. In the **Headers** tab, add the `Content-type` of `application/json`.
1. Under the **Body** tab, select the **raw** body type. Choose **JSON** from the format dropdown list.
1. Construct your query in the request body using proper JSON formatting.

![GraphQL JSON request body](https://assets.postman.com/postman-docs/graphql-json-body.jpg)

## Using a GraphQL content type header

1. Open a new request tab in Postman and enter your GraphQL endpoint URL in the address field.
1. Select `POST` from the request method dropdown list.
1. In the **Headers** tab, add the `Content-type` of `application/graphql`.
    ![Set the content-type header](https://assets.postman.com/postman-docs/graphql-content-type.jpg)
1. Under the **Body** tab, select the **raw** body type. Choose **Text** from the format dropdown list.
1. Construct your query in the request body using standard GraphQL formatting.

![GraphQL query request body](https://assets.postman.com/postman-docs/graphql-content-type-body.jpg)

## Importing the query as a cURL request

1. Select **Import** in the upper left.
1. Select **Raw text**.
1. Paste your cURL command in the text field, then **Continue**. Your cURL command must contain a GraphQL endpoint URL and must specify the `POST` request method.
    <img src="https://assets.postman.com/postman-docs/graphql-curl-import.jpg" alt="Import GraphQL request via cURL" width="500px"/>
1. Select **Import**.
1. The request will open in a new tab with the GraphQL endpoint URL you specified and the `POST` request method.

![GraphQL response](https://assets.postman.com/postman-docs/graphql-curl-import-response.jpg)
