---
title: "Introduction to FQL"
page_id: "introduction-to-fql"
updated: 2022-11-16
order: 0
warning: false
---

_Flows Query Language_ (FQL) can be used to parse and transform JSON data to get the fields and structure you want.

## Passing data to the Evaluate block

![](https://assets.postman.com/postman-labs-docs/flows-query-language/evaluate-block-example.png)

A Data block holds JSON-formatted key-value pairs. In the above example, the Evaluate block's variable `data_field` has a value of `input` (this can be selected as a value when creating the variable), which enables the Data block's JSON to be passed into the Evaluate block and queried. In this case, `customer_field` is a value in the Data block. FQL can be executed in the Evaluate block in order to print the value of `customer_field`.

## Things you can do with FQL

The following sections show examples of things you can do with FQL:

- [Getting basic values](/postman-flows/flows-query-language/get-basic-values/)
- [Conditional data selection](/postman-flows/flows-query-language/conditional-data-selection/)
- [Returning structured data](/postman-flows/flows-query-language/returning-structured-results/)
- [Data manipulation](/postman-flows/flows-query-language/data-manipulation/)
