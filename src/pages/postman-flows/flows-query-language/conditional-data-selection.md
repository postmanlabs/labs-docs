Selecting specific data from the JSON that meets certain criteria: 

query for data that meets specific criteria including date parsing 

Imagine you have the following JSON data returned by an endpoint:

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

| Syntax  | Result | Notes |
| ------------- | ------------- | ------------- |
| `payments[description='recurring subscription']` | `[{"invoice_number": "101301","date": "2022-09-11T16:12:34.494Z","description": "recurring subscription","amount": 110.48},{"invoice_number": "101303","date": "2022-10-11T16:12:34.683Z","description": "recurring subscription","amount": 110.48}]` | Filter for just a customer's recurring subscription payments |
| `payments[description='recurring subscription'].invoice_number` | `["101301","101303"]` | Filter for just the invoice numbers of recurring payments | 
| `payments[description='recurring subscription deluxe'].invoice_number` | `"101304"` | When your filter matches only one record, it returns just a quoted result not an array| 
| `payments[description ~> /recurring subscription/i].invoice_number` | `["101301","101303","101304"]` | You can filter for any value using a regex expression to sort and it will return either a matching single value or an array of matching value |
| `payments[$toMillis(date) > $toMillis('10/01/2022', '[M]/[D]/[Y]')]` | `[{"invoice_number": "101303","date": "2022-10-11T16:12:34.683Z","description": "recurring subscription","amount": 110.48},{"invoice_number": "101304","date": "2022-10-12T11:45:22.182Z","description": "recurring subscription deluxe","amount": 35.56}]` | Date filtering can be done by converting a ISO 8601 date into unix miliseconds for comparison. Other date formats are also accepted, see the data manipulation section |
| `$contains(payments[0].description, 'recurring')` | `true` | Returns a boolean if the string is found | 
