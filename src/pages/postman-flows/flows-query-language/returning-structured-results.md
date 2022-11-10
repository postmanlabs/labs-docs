---
title: "Structuring how your data is returned"
page_id: "structuring-how-your-data-is-returned"
updated: 2022-11-08
order: 3
warning: false
---

### Topics in this section:

- [Returning multiple objects as an array](#returning-multiple-objects-as-an-array)
- [Return an array of a single field from multiple objects](#return-an-array-of-a-single-field-from-multiple-objects)
- [Collapse multiple objects into a single key:value pair](#collapse-multiple-objects-into-a-single-keyvalue-pair)
- [Collapse and group results by a shared field value](#collapse-and-group-results-by-a-shared-field-value)

*Imagine you have the following JSON data returned by an endpoint:*

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

### Returning multiple objects as an array

#### FQL

``` javascript
[physical_address, work_address, mailing_address]
```

<br>

#### Result

``` json
[
    {"street": "123 Park Avenue","city": "Atlanta","state": "GA","zip": "12345"},
    {"street": "583 W. Island Drive","city": "Maimi","state": "FL","zip": "44456" },
    {"street": "232 Ravensburg Road","city": "Durham","state": "NC","zip": "03948"}
]
```

---

### Return an array of a single field from multiple objects

#### FQL

``` javascript
[physical_address, work_address, mailing_address].city
```

<br>

#### Result

``` json
["Atlanta","Maimi","Durham"]
```

---

### Collapse multiple objects into a single key:value pair

#### FQL

``` javascript
phones.{type: number}
```

<br>

#### Result

``` json
[
    {"Home": "123-456-7890"},
    {"Cell": "098-765-4321"},
    {"Cell": "888-777-5555"},
    {"work": "314-265-9078"}
]
```

---

### Collapse and group results by a shared field value

#### FQL

``` javascript
phones{type: number[]}
```

<br>

#### Result

``` json
{
    "Home": ["123-456-7890"],
    "Cell": ["098-765-4321","888-777-5555"],
    "work": ["314-265-9078"]
}
```

---
