Structuring how your data is returned

Imagine you have the following JSON data returned by an endpoint: 

``` json
{
    "name": "John Smith",
    "physical_address": {
        "street": "123 Park Avenue",
        "city": "Atlanta",
        "state": "GA",
        "zip": "12345"
    },
    "work_address": {
        "street": "583 W. Island Drive",
        "city": "Maimi",
        "state": "FL",
        "zip": "44456"
    },
    "mailing_address": {
        "street": "232 Ravensburg Road",
        "city": "Durham",
        "state": "NC",
        "zip": "03948"
    },
    "phones": [
        {
            "type": "Home",
            "number": "123-456-7890"
        },
        {
            "type": "Cell",
            "number": "098-765-4321"
        },
        {
            "type": "Cell",
            "number": "888-777-5555" 
        },
        {
            "type": "work",
            "number": "314-265-9078"
        }
    ]
}
```

| Syntax  | Result | Notes |
| ------------- | ------------- | ------------- |
| `[physical_address, work_address, mailing_address]` | `[{"street": "123 Park Avenue","city": "Atlanta","state": "GA","zip": "12345"},{"street": "583 W. Island Drive","city": "Maimi","state": "FL","zip": "44456" },{"street": "232 Ravensburg Road","city": "Durham","state": "NC","zip": "03948"}]` | You can list the elements you want and put them into an array | 
| `[physical_address, work_address, mailing_address].city` | `["Atlanta","Maimi","Durham"]` | If the field name is the same you can put only a single shared field name into an array to group the data | 
| `phones.{type: number}` | `[{"Home": "123-456-7890"},{"Cell": "098-765-4321"},{"Cell": "888-777-5555"},{"work": "314-265-9078"}]` | You can collapse the structure into a single key:value pair | 
| `phones{type: number[]}` | `{"Home": ["123-456-7890"],"Cell": ["098-765-4321","888-777-5555"],"work": ["314-265-9078"]}` | You can also group the numbers by a type into an array | 
