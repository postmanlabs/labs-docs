---
title: "Querying with GraphQL"
order: 37
page_id: "graphql"
updated: 2022-02-22
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Installing and updating"
    url: "/docs/getting-started/installation-and-updates/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "GraphQL in Postman Demo"
    url: "https://youtu.be/7pUbezVADQs"
  - type: link
    name: "GraphQL introspection | Postman Level Up"
    url: "https://youtu.be/k-j3FwTjJkE"
  - type: subtitle
    name: "Public Workspaces"
  - type: link
    name: "Public GraphQL APIs"
    url: "https://www.postman.com/cs-demo/workspace/9e8c8a19-bb76-46af-9e8d-5747bf8fcce5"
  - type: link
    name: "GraphQL Examples"
    url:  "https://www.postman.com/devrel/workspace/f12c0652-9c9d-4813-968b-c8ed0b3f0022"
  - type: link
    name: "Working with GraphQL collection"
    url: "https://www.postman.com/postman/workspace/postman-team-collections/collection/1559645-c0dd3eb3-5258-4ddd-a6e4-2780c5212e33?ctx=documentation"
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

Postman has built-in support for [sending GraphQL queries in the request body](#sending-graphql-queries-in-the-request-body), [using GraphQL variables](#using-graphql-variables), and [introspection and importing GraphQL schemas](#introspection-and-importing-graphql-schemas).

### Sending GraphQL queries in the request body

1. Open a new request tab in Postman and enter your GraphQL endpoint URL in the address field.
1. Select `POST` from the request method dropdown list.
1. Under the **Body** tab, select the **GraphQL** body type.
1. Enter your GraphQL query in the **Query** editor. This editor enables you to author and edit both queries and variables separately.

![Select the GraphQL body type](https://assets.postman.com/postman-docs/graphql-query-v9-14.jpg)

### Using GraphQL variables

1. Enter your GraphQL variables in the **GraphQL variables** editor.
1. In the **Query** editor, declare your GraphQL variable in your GraphQL query. For more information on how to use GraphQL variables, see the [GraphQL variables documentation](https://graphql.org/learn/queries/#variables).

![Using GraphQL variables](https://assets.postman.com/postman-docs/graphql-variables-v9-14.jpg)

> You can also [use Postman variables](/docs/sending-requests/variables/) as data inputs for GraphQL variables using `{{variable}}` syntax.

### Introspection and importing GraphQL schemas

To enable autocompletion, your request needs a GraphQL schema. Postman will automatically fetch a schema based on the request URL, using GraphQL introspection. A message is displayed next to the schema selection list when Postman is able to auto-fetch a schema. If your schema has changed, select the refresh icon <img alt="Refresh icon" src="https://assets.postman.com/postman-docs/icon-refresh-v9-5.jpg#icon" width="14px"> to pull in the changes.

<img src="https://assets.postman.com/postman-docs/graphql-autofetch-schema.jpg" width="300px" alt="GraphQL auto-fetch schema"/>

You can also import a schema manually. When you [create or import a GraphQL schema](/docs/designing-and-developing-your-api/creating-an-api/) into Postman, you can then select it instead of the auto-fetched schema.

To import a GraphQL schema manually, do the following:

1. Select **APIs** in the sidebar, then select **+** to create a new API.
1. Enter a name and version for your API.
1. Choose **GraphQL** from the **Schema type** dropdown list.
1. Choose either **JSON** or **GraphQL SDL** from the **Schema Format** dropdown list.
    > You can optionally select the **Import** tab to import an API specification directly from either a local file or a GitHub or Bitbucket repo. If you don't import a schema, Postman will populate your API with a sample specification you can edit at any time.
1. Select **Create API**.

    <img src="https://assets.postman.com/postman-docs/graphql-create-schema.jpg" alt="Create a new API" width="500px"/>

1. Open the new API's version page and select the **Definition** tab. Enter your GraphQL schema in the editor and save it.

    ![Edit the API schema](https://assets.postman.com/postman-docs/graphql-schema-definition.jpg)

1. Return to your **GraphQL** body. Select your schema from the dropdown list. You may need to refresh by selecting the refresh icon <img alt="Refresh icon" src="https://assets.postman.com/postman-docs/icon-refresh-v9-5.jpg#icon" width="14px">.
1. Begin editing your query. Postman will suggest autocomplete options from the data within your new GraphQL schema.

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
    <img src="https://assets.postman.com/postman-docs/graphql-curl-import.jpg" alt="Import a GraphQL request with cURL" width="500px"/>
1. Select **Import**.
1. The request will open in a new tab with the GraphQL endpoint URL you specified and the `POST` request method.

![GraphQL response](https://assets.postman.com/postman-docs/graphql-curl-import-response.jpg)
