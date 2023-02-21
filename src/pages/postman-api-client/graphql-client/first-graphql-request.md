---
title: "Making your first GraphQL query"
updated: 2022-09-15
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Download and Install"
    url: "https://www.postman.com/downloads/"
  - type: section
    name: "Additional resources"
  - type: link
    name: "Postman GraphQL echo collection"
    url: "https://www.postman.com/postman/workspace/published-postman-templates/collection/63c7d7701bfb72333ca216d4"
---

Get started with GraphQL by creating a query and executing it using Postman’s echo endpoint.

## Contents

- [About GraphQL request](#about-graphql-request)
- [Making a GraphQL query with Postman](#making-a-graphql-query-with-postman)
- [Next steps](#next-steps)

## About GraphQL Request

To create a GraphQL request, you need at least two things- URL and query. The URL is the endpoint where the data is hosted, and the query defines what exactly needs to be retrieved from this data source. A GraphQL request can also have a schema configured to make you aware of the data fields available from the server that can be included in the query. Plus, the request can also contain additional information such as Auth, Headers, and Settings based on the requirements specified by the API. 

Using a GraphQL request, you can execute three different types of Queries:

**Queries**- Queries retrieve data from the server by specifying data fields and passing required arguments.

**Mutation**- Mutation type queries allow you to manipulate the data available on the server. You can create, update and delete data records by selecting the fields and passing the values as arguments.

**Subscription**- For a live data source that has the data changing frequently, you can subscribe to the data available on different fields. This lets the server send the data requested over a persistent connection.

# Making a GraphQL query with Postman

This example creates and executes a GraphQL query using the interactive query builder.

> If you are using the Postman web app, Postman recommends using the Postman Desktop Agent for the best experience. See [About the Postman Agent](https://learning.postman.com/docs/getting-started/about-postman-agent/) for more information.

1. In Postman, select **New > GraphQL Request** to open a request in a new tab. (In the Postman desktop app, you can also select **⌘+N** or **Ctrl+N**, then select **GraphQL Request**.)

*{GIF showing how to create a GraphQL request}*

2. Click on the URL bar and enter `https://graphql.postman-echo.com/graphql`. This would also load the schema using introspection.
3. In the schema explorer on the left, select the `hello` field and select `person` and `name` as arguments.
4. Enter your name in the input box next to `name`. You should also see a fully formed query based on your selections on the right.
5. Hit **Query**.

*{Image showing query building and Query}*

## Next step

Try making a mutation and a subscription type query using the same endpoint and observe the difference in behavior.
