---
title: "Getting basic values"
page_id: "getting-basic-values"
order: 1
updated: 2022-11-16
warning: false
---

The following examples describe how to use FQL to get basic values from JSON data.

## Contents

* [Example JSON](#example-json)
* [Get a top-level field](#get-a-top-level-field)
* [Get a nested field](#get-a-nested-field)
* [Get an entire object](#get-an-entire-object)
* [Select a specific index in an array](#select-a-specific-index-in-an-array)
* [Select an entire array](#select-an-entire-array)
* [Return one field of every object in an array](#return-one-field-of-every-object-in-an-array)
* [Return fields that contain special characters in the key name](#return-fields-that-contain-special-characters-in-the-key-name)

## Example JSON

The following examples use the following JSON data returned by an endpoint:

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

## Get a top-level field

### FQL

``` javascript
name
```

<br/>

### Result

``` json
"John Smith"
```

## Getting a nested field

## Get a nested field

### FQL

``` javascript
address.city
```

<br/>

### Result

``` json
"Atlanta"
```

## Getting an entire object

## Get an entire object

### FQL

``` javascript
address
```

<br/>

### Result

``` json
{
    "street": "123 Park Avenue",
    "city": "Atlanta",
    "state": "GA",
    "zip": "12345"
}
```

## Selecting a specific index in an array

## Select a specific index in an array

### FQL

``` javascript
phones[0].number
```

<br/>

### Result

``` json
"123-456-7890"
```

## Selecting a whole array

## Select an entire array

### FQL

``` javascript
phones
```

<br/>

### Result

``` json
[
    {
        "type": "Home",
        "number": "123-456-7890"
    },
    {
        "type": "Cell",
        "number": "098-765-4321"
    }
]
```

## Return just one field of every object in an array

## Return one field of every object in an array

### FQL

``` javascript
phones.number
```

<br/>

### Result

``` json
["123-456-7890","098-765-4321"]
```

## Returning fields that contain special characters in the key name

## Return fields that contain special characters in the key name

### FQL

``` javascript
`display name`
```

<br/>

### Result

``` json
"myuser123"
```
