---
title: "GraphQL overview"
updated: 2022-01-05
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Installing and updating"
    url: "/docs/getting-started/installation-and-updates/"
  - type: section
    name: "Additional resources"
  - type: link
    name: "Deep dive into GraphQL concepts"
    url: "https://learning.postman.com/open-technologies/specifications/graphql/graphql-hub/"
---

APIs made with GraphQL allow clients to ask the server for exactly the data they need. This is enabled by a powerful query interface and a runtime to execute those queries making it easier for developers to quickly explore and experiment with the client’s functionalities. Contrary to REST, which makes your chunks of data available on multiple endpoints, GraphQL makes working with data simpler and faster with a single endpoint. Plus, GraphQL is schema driven, which means more transparency in terms of API functionality and lower dependency between teams building the client and the server. So, a client can introspect the schema from the server to get an idea about the available data fields, send queries specifying fields to retrieve or manipulate the stored data. The server does exactly what was asked from it and returns only the data requested in the query. Combining these features, GraphQL provides users with a flexible, fast and predictable API experience, making it one of the most popular API technology.

Get a deep dive into the [various concepts of GraphQL](https://learning.postman.com/open-technologies/specifications/graphql/graphql-concepts/).

## Work with GraphQL APIs using Postman

Postman gives you a client interface to debug and document your API using a GraphQL request. Requests in Postman let you make API calls and view the response from the server. Using a GraphQL request, you can load a GraphQL schema to browse the documentation of what’s available from the server, create your queries, execute them, and view the response from the server. Additionally, the request interface has a visual query builder to help you create the queries faster- once the schema is loaded, you can select the fields you want to query, and Postman builds your query automatically based on your selection. You can save your GraphQL request into a collection to reuse later, document it and share it with your teammates, or publish it to the community on [Postman's public API network](https://learning.postman.com/docs/getting-started/exploring-public-api-network/).

![GraphQL Client Interface](https://blog.postman.com/wp-content/uploads/2023/02/graphql-schema-explorer.gif)

## Next steps

Get started with GraphQL with the following topics:

- [Using GraphQL Request interface](/postman-api-client/graphql-client/graphql-request-interface/)
- [Making your first GraphQL query](/postman-api-client/graphql-client/first-graphql-request/)
