---
title: "Introduction to FQL"
page_id: "introduction-to-fql"
updated: 2022-11-08
order: 0
warning: false
---

Flows' Query Language (FQL) can be used to easily parse and transform JSON data to get the fields and structure you want.

## The evaluate block:

![](https://assets.postman.com/postman-labs-docs/flows-query-language/evaluate-block-example.png)

The body response of the send block can be passed into the evaluate block and individual fields passed in as a key-value pair. In this case, title is a field returned by the response body. FQL can then be executed in the top half of the evaluate block in order to invoke the function to transform the string into uppercase before it's printed out.

## All the things you can do with FQL:

- [Getting basic values](./getting-basic-values.md)
- [Conditional data selection](./conditional-data-selection.md)
- [Returning structured data](./returning-structured-results.md)
- [Data manipulation](./data-manipulation.md)
