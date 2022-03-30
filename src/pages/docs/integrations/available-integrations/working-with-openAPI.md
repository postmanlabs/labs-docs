---
title: "OpenAPI"
order: 175
updated: 2022-02-16
page_id: "working_with_openAPI"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Grouping requests in collections"
    url: "/docs/sending-requests/intro-to-collections/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Related blog posts"
  - type: link
    name: "Postman Now Generates Docs from OpenAPI 3.0 Definitions"
    url: "https://blog.postman.com/open-api-3-0-documentation/"
  - type: link
    name: "Syncing Your OpenAPI, RAML, and GraphQL Schema to GitHub with Postman"
    url: "https://blog.postman.com/syncing-your-openapi-raml-and-graphql-schema-to-github-with-postman/"
warning: false
---

You can import your existing OpenAPI 3.0 and 3.1 definitions (OpenAPI Specification) into Postman. Postman supports both YAML and JSON formats. You can choose to upload a file, enter a URL, or directly copy your JSON/YAML. In Postman, select **Import** to bring up the following screen:

[![import sample](https://assets.postman.com/postman-docs/open-api-import-b.jpg)](https://assets.postman.com/postman-docs/open-api-import-b.jpg)

When importing your OpenAPI specification, Postman follows the endpoint hierarchy defined in the specification to create a collection organized into folders (if your OpenAPI has multiple levels of hierarchy). Postman uses the schemas defined in the OpenAPI to generate request and response bodies.
