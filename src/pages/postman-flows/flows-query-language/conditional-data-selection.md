---
title: "Conditional data selection"
page_id: "conditional-data-selection"
updated: 2022-11-08
order: 2
warning: false
---

*Imagine you have the following JSON data returned by an endpoint:*

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

---

### Filter for just a customer's recurring subscription payments

#### FQL

``` javascript
payments[description='recurring subscription']
```

<br>

#### Result

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

---

### Filter for just the invoice numbers of recurring payments

#### FQL

 ``` javascript
 payments[description='recurring subscription'].invoice_number
 ```  

<br>

#### Result

 ```json
 ["101301","101303"]
 ```

---

### When your filter matches only one record, it returns just a quoted result not an array

#### FQL

 ``` javascript
 payments[description='recurring subscription deluxe'].invoice_number
 ```  

<br>

#### Result

``` json
"101304"
```

---

### Filtering an array based on a regex

#### FQL

 ``` javascript
 payments[description ~> /recurring subscription/i].invoice_number
 ```

<br>

#### Result

``` json
["101301","101303","101304"]
```

---

### Date filtering (see data manipulation for more formats)

#### FQL

 ``` javascript
 payments[$toMillis(date) > $toMillis('10/01/2022', '[M]/[D]/[Y]')]
 ```

<br>

#### Result

``` json
[
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
```

---

### Checking if a field contains a value

#### FQL

``` javascript
$contains(payments[0].description, 'recurring')
```

<br>

#### Result

``` json
true
```
