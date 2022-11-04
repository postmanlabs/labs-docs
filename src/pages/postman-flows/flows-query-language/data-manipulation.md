How to modify data to get the values you need

Imagine you have the following JSON data returned by an endpoint:

``` json 
    {
        "customer_info": {
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
| `'$' & $sum(payments.amount)` | `"$281.01"` | First, use the `$sum` function to add the amount values, and then add the character literal `$` to the front with the `&` operator to write it as a dollar sign |
| `payments.{description & ' annual cost' : amount*12}` | `[{"recurring subscription annual cost": 1325.76},{"one time purchase annual cost": 293.88},{"recurring subscription annual cost": 1325.76},{"recurring subscription deluxe annual cost": 426.72}]` | You can multiply the amounts and use the custom structure found in returning-structured-results to generate the total annual costs and append the annual cost to the description |
| `$number(customer_info.total_value)` | `281.01` | You can use the `$number` operator to cast the string to a number that you can then use a mathematical expressions | 
| `$string(payments[0].amount)` | `"110.48"` | |
| `$length(payments[0].description)` | `22` | |
| `$substring(payments[0].description, 3, 6)` | `"urring"` | The first number is optional and specifies the offset, the second is the number of characters you are selecting, negative numbers can also be used for the offest |
| `$substringBefore(payments[0].description, 'subscription')` | `"recurring "` | Returns the substring before the specified occurance of `subscription` . If `subscription` were not found it would return the whole string |
| `$substringAfter(payments[0].description, 'recurring')` | `" subscription"` | Same as above but returns the string after the occurance |
| `$uppercase(payments[0].description)` | `"RECURRING SUBSCRIPTION"` | | 
| `$lowercase(customer_info.'customer field')` | `"customer data"` | 
| `$trim(customer_info.unformated_customer_field)` | `"customer stuff"` | Removes excess leading and trailing spaces, converts newline, carriage return, line feeds, and tabs into a single space character, and reduces consecutive spaces into a single space cahracter |
| `$pad(customer_info.'customer field', 15, '#')` | `"Customer data##"` | If the second parameter is a positive number it pads the string with the third parameter, if the second parameter is negative it pads the front of the string with the character(s) optionally specified (third parameter character(s) will default to space if left blank) | 
| `$split(payments[1].description, " ", 2)` | `["one","time"]` | Returns the string split on the seporater specified in the second parameter and optionally limited by the third parameter. A regex can also be used instead of a string. | 
| `$join(customer_info.associated_usernames)` | `"user1, myuser, online_user"` | Joins an array of strings together into a single string. |
| `$match(payments[0].description,/r(e+)/,1)` | `{"match": "re","index": 0,"groups": ["e"]}` | `match` returns the string found, `index` it's position and `groups` and array of captured groups (what's inside the paratheses). The final parameter is the limit, in this case limiting it to just one match. |
| `$replace(payments[0].description,"recurring", "renewing", 1)` | `"renewing subscription"` | Replaces the instances of `recurring` in the first parameter string and replaces it with renewing and limited to the first instance found (optionally specified with the `1`). Using a regex instead of `renewing` is also supported. |
| `payments.description.$replace("recurring", "renewing")` | `["renewing subscription","one time purchase","renewing subscription","renewing subscription deluxe"]` | `$replace()` can also be used like this to change multiple string values in an array. | 
| `$eval('$string(2)')` | "2" | Evaluates the expression passed in using JSON and/or FQL syntax | 




