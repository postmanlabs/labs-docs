---
title: "Using GraphQL request interface"
updated: 2022-10-04
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Navigating Postman"
    url: "https://learning.postman.com/docs/getting-started/navigating-postman/"
---

GraphQL requests in Postman include a variety of tools, views and controls to help you debug and document your GraphQL API effectively and efficiently. This topic highlights the parts of the request interface and explains how to use them.

*{Image showing parts of the request interface}*

## Contents

- [Creating a new request](#creating-a-new-request)
- [Loading a GraphQL schema](#loading-a-graphql-schema)
- [Understanding parts of the request interface](#understanding-parts-of-the-request-interface)
- [Understanding the response](#understanding-the-response)
- [Creating and executing multiple queries](#creating-and-executing-multiple-queries)
- [Using the right sidebar](#using-the-right-sidebar)
- [Next step](#next-step)

## Creating a new request

Create a new GraphQL request by selecting the **New** button in the sidebar, which brings up the **Create new** dialog. Select **GraphQL request** from the list to open a blank gRPC request in a new tab.

*{GIF showing creation of GraphQL request}*

## Loading a GraphQL schema

You can use a GraphQL schema in your request to browse the available data fields. This makes your task of creating a query easier. Postman allows you to load a GraphQL schema using GraphQL introspection. This is the easiest way to fetch the schema directly from the server. You just need to enter the URL, and Postman loads the schema automatically.

*{GIF showing introspection}*

You can also choose to load a GraphQL API from Postman or import a schema from your local system to use in the request.

## Understanding parts of the request interface

The request interface allows you to add configurations to connect to the server and execute the query. You can define the URL, load the schema, build your query and hit Query to execute it. Based on the API requirements, you may also need to pass authorization details, additional metadata and settings along with the query.

*{Image annotating different parts of the request and the query builder}*

- **URL**- Defines the endpoint where the service is hosted. While creating a new request, you can also browse through URLs you've used by selecting the URL field. This helps you create the request faster if you’re going to execute different queries with the same point.
- **Query builder**- The place to explore the schema and build your query. It’s divided into three parts:
    - **Schema explorer**- One the schema is loaded, the available data fields, arguments needed to be passed, and their respective descriptions appear in this section. The schema explorer also doubles up as an interactive visual query builder allowing you to select individual fields and arguments to build your query.
    - **Schema explorer**- One the schema is loaded, the available data fields, arguments needed to be passed, and their respective descriptions appear in this section. The schema explorer also doubles up as an interactive visual query builder allowing you to select individual fields and arguments to build your query.
    - **Variables**- GraphQL allows you to pass variables as arguments for values that are defined dynamically in the client. You can use those variables in the query and define their values separately using the variables section.

*{Image showing variables usage}*

- **Authorization**- Pass credentials that the server would use to authorize the connection here. You can choose from a list of auth types including API Key, Basic auth, and Bearer token etc. Learn more about [authorizing requests](https://learning.postman.com/docs/sending-requests/authorization/).
- **Headers**- Pass additional headers with the request in the form of key-value pairs. The client uses these headers to provide more information about the call to the server.
**Schema**- The schema tab lets you configure a GraphQL schema to make the client aware of the data fields available from the server. A GraphQL schema can be loaded directly using the URL through introspection. You can also choose to use a GraphQL API from the same workspace or import a GraphQL schema from your local system.
- **Scripts**- Postman has a powerful scripting environment that allows you to add JavaScript code (scripts) in your GraphQL requests. You can use scripts to write API tests, debug your requests by logging to [Postman Console](https://learning.postman.com/docs/sending-requests/troubleshooting-api-requests/), or dynamically read or update the values of [variables](https://learning.postman.com/docs/sending-requests/variables/). Learn more about [scripting in GraphQL requests](/postman-api-client/graphql-client/scripting-in-graphql-request/).
- **Query button**- Once you have defined the URL and built the query, you can hit **Query** to execute it. Once the query is executed, the server sends back a response with the requested data.
- **Save button**- Saves the request into a collection so that you can reuse it later or document and share it with others.

## Understanding the response

When you execute a query, the server gives back the appropriate response that appears in the response area.

*{Image annotating different parts of the response}*

The response section has the following items:

- **Response body**- This section shows the data returned by the server for the fields mentioned in the query.
- **Headers**- Headers returned by the server typically consists of additional information about the execution.
- **Wrap text button**- Selecting this button adjusts the width of the response body according to the width of the response area, making it easier to read wider responses without scrolling horizontally.
- **Search**- Look for specific elements within the response using the **Search** button.

### Multiple responses

While executing a subscription type query that returns multiple responses over a persistent connection, the response area shows these responses as a stream.

*{image annotating parts of the response stream}*

- **Connection status**- The connection status shows if the connection with the server is active and if messages are being streamed.
- **Response stream**- The response stream has the request and the responses arranged in reverse chronological order (latest appears on the top).
- **Expand/collapse response**- You can take an in-depth look at the response content by expanding it within the response stream.
- **Search for response**- You can use the high-level search input to search for particular responses.
- **Filter**- Adjust the view based on the type of messages using the message filter. Instead of all messages, you can choose to view the ones Sent from the client or Received from the server.
- **Clear**- The **Clear** button hides all the messages exchanged from the view, cleaning up the response area so that you can focus on the new messages. You can restore the messages using the **Restore** button in the hidden view.
- **Test results**- The results for assertions you write in the Scripts section appear here. Based on the test script, the results can be one of three types: Passed, Failed, and Skipped. Learn more about [scripting in GraphQL requests](/postman-api-client/graphql-client/scripting-in-graphql-request/).

## Creating and executing multiple queries

The GraphQL request interface allows you to create multiple queries in the query builder and execute them one at a time. You can select a query from the query editor and hit **Query**. This would execute only the selected query and return the appropriate response.

*{GIF of selecting a query from the editor and hitting Query}*

You can also use the send button dropdown to browse through the queries and select one to execute.

*{Image of send button dropdown}*

## Using the right sidebar

The right sidebar gives you access to more tools and information like documentation, commenting, and request details. Open a GraphQL request, and then select an option in the right sidebar:

*{Image showing the right sidebar}*

- **Request documentation**- Select the documentation icon  to view description of a request. You can add description by selecting the edit icon next to the description, then writing your content using [Postman's built-in editing tools](https://learning.postman.com/docs/publishing-your-api/authoring-your-documentation/).
- **Comments**- Select the comments icon  to collaborate with your teammates as you work on an API. You can use `@` to tag others to ask a question, give feedback, and discuss your API.
- **Request information** - Select the information icon to view more details about a request, like the request ID and creation date.

## Next step

After you understand all the basic interface elements, try [making your first GraphQL query](/postman-api-client/graphql-client/first-graphql-request/).
