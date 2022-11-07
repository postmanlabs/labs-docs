# Traversing the JSON document

*Imagine you have the following JSON data returned by an endpoint:* 

``` json
{
    "name": "John Smith",
    "address": {
        "street": "123 Park Avenue",
        "city": "Atlanta",
        "state": "GA",
        "zip": "12345"
    },
    "phones": [
        {
            "type": "Home",
            "number": "123-456-7890"
        },
        {
            "type": "Cell",
            "number": "098-765-4321"
        }
    ], 
    "display name": "myuser123"
}
```

| Syntax  | Result | Notes |
| ------------- | ------------- | ------------- |
| `name` | `"John Smith"`  | |
| `address.city`  | `"Atlanta"` | |
| `address` | `{"street": "123 Park Avenue","city": "Atlanta","state": "GA","zip": "12345"}` | *Returns whole obect* |
| `phones[0].number` | `"123-456-7890"` | *Use index to select which value you want* |
| `phones` | `[{"type": "Home","number": "123-456-7890"},{"type": "Cell","number": "098-765-4321"}]` | *Returns array of phone numbers* |
| `phones.number` | `["123-456-7890","098-765-4321"]` | *Returns just an array with the selected field* |
| ``` `display name` ``` | `"myuser123"` | *For fields that contain special characters, wrap the field name in backticks* |