---
title: "Conditional data selection"
updated: 2022-11-16
---

You can use [Flows' Query Language](/docs/postman-flows/flows-query-language/introduction-to-fql/) (FQL) to filter for specific data in your responses. Sample data and FQL examples are below.

## Contents

- [Example JSON](#example-json)
- [Filter for just a customer's recurring subscription payments](#filter-for-just-a-customers-recurring-subscription-payments)
- [Filter for just the invoice numbers of recurring payments](#filter-for-just-the-invoice-numbers-of-recurring-payments)
- [When your filter matches only one record](#when-your-filter-matches-only-one-record)
- [Checking if a field contains a value](#checking-if-a-field-contains-a-value)

## Example JSON

The following examples use the following JSON data returned by an endpoint:

``` json
    {
        "customer info": {
            "customer field": "Customer data",
            "unformated_customer_field": " customer \n stuff ",
            "total_value": "281.01",
            "associated_usernames": ["user1, myuser, online_user"]
        },
        "payments": [
            {
                "invoice_number": "101301",
                "date": "2022-09-11T16:12:34.494Z",
                "description": "recurring subscription",
                "amount": 110.48
            },
            {
                "invoice_number": "101302",
                "date": "2022-09-29T14:45:13.148Z",
                "description": "one time purchase",
                "amount": 24.49
            },
            {
                "invoice_number": "101303",
                "date": "2022-10-11T16:12:34.683Z",
                "description": "recurring subscription",
                "amount": 110.48
            },
            {
                "invoice_number": "101304",
                "date": "2022-10-12T11:45:22.182Z",
                "description": "recurring subscription deluxe",
                "amount": 35.56
            }
        ]
    }
```

## Filter for just a customer's recurring subscription payments

### FQL

``` javascript
payments[description='recurring subscription']
```

### Result

 ``` json
 [
    {
        "invoice_number": "101301",
        "date": "2022-09-11T16:12:34.494Z",
        "description": "recurring subscription",
        "amount": 110.48
    },
    {
        "invoice_number": "101303",
        "date": "2022-10-11T16:12:34.683Z",
        "description": "recurring subscription",
        "amount": 110.48
    }
]
```

## Filter for just the invoice numbers of recurring payments

### FQL

 ``` javascript
 payments[description='recurring subscription'].invoice_number
 ```

### Result

 ```json
 ["101301","101303"]
 ```

## When your filter matches only one record

It returns just a single record, not an array.

### FQL

 ``` javascript
 payments[description='recurring subscription deluxe'].invoice_number
 ```

### Result

``` json
"101304"
```

## Checking if a field contains a value

### FQL

``` javascript
$contains(payments[0].description, 'recurring')
```

### Result

``` json
true
```
