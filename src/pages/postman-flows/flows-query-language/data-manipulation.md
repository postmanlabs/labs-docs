How to modify data to get the values you need

Imagine you have the following JSON data returned by an endpoint:

``` json 
    {
        "customer_info": {
            "customer field": "customer data",
            "total_value": "281.01"
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
| `'$' & $sum(payments.amount)` | `"$281.01"` | First, use the `$sum` function to add the amount values, and then add the character literal `$` to the front with the `&` operator to write it as a dollar sign |
| `payments.{description & ' annual cost' : amount*12}` | `[{"recurring subscription annual cost": 1325.76},{"one time purchase annual cost": 293.88},{"recurring subscription annual cost": 1325.76},{"recurring subscription deluxe annual cost": 426.72}]` | You can multiply the amounts and use the custom structure found in returning-structured-results to generate the total annual costs and append the annual cost to the description |
| `$number(customer_info.total_value)` | `281.01` | You can use the `$number` operator to cast the string to a number that you can then use a mathematical expressions | 
| 




