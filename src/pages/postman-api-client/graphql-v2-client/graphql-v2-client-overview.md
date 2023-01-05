---
title: "Using the new GraphQL v2 Client"
order: 38
updated: 2022-01-05
page_id: "graphql"
search_keyword: "graphql"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Installing and updating"
    url: "/docs/getting-started/installation-and-updates/"
  - type: section

warning: false
---

The new GraphQL v2 Client celebrates the power of exploring data and is purpose-built for the GraphQL protocol.

## Features

### Schema Explorer / Query Builder

Build queries, mutations, and subscriptions from schema

### Subscriptions Support

- Supported transports: graphql-transport-ws, subscriptions-transport-ws
- Future transports: graphql-transport-sse

### Schema

- Load schema from introspection
- Import schema as API
- Import schema as temporary
- Create API from introspection

### GraphQL Spec

- October 2021 supported
- Future: @defer and @stream (working draft)
