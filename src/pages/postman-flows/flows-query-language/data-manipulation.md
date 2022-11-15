---
title: "Data manipulation"
page_id: "data-manipulation"
updated: 2022-11-08
order: 4
warning: false
---

### Topics in this section:

- [Sum numerical values](#sum-numerical-values)
- [Modify strings and group and sum by description](#modify-strings-and-group-and-sum-by-description)
- [Cast a string into a number](#cast-a-string-into-a-number)
- [Convert a number into a string](#convert-a-number-into-a-string)
- [Return the length of a string](#return-the-length-of-a-string)
- [Return part of a string using substring](#return-part-of-a-string-using-substring)
- [Get the string before the first occurance of a pattern](#get-the-string-before-the-first-occurance-of-a-pattern)
- [Get the string after the first occurance of a pattern](#get-the-string-after-the-first-occurance-of-a-pattern)
- [Transform a string to all uppercase](#transform-a-string-to-all-uppercase)
- [Transform a string to all lowercase](#transform-a-string-to-all-lowercase)
- [Trim a string](#trim-a-string)
- [Pad a string](#pad-a-string)
- [Split a string into an array of components](#split-a-string-into-an-array-of-components)
- [Join an array of strings into a single string](#join-an-array-of-strings-into-a-single-string)
- [Replace string with another](#replace-string-with-another)
- [Base64 encode a string](#base64-encode-a-string)
- [Base64 decode a string](#base64-decode-a-string)
- [Encode a url component](#encode-a-url-component)
- [Decode a url component](#decode-a-url-component)
- [Encode an entire url](#encode-an-entire-url)
- [Decode entire url](#decode-entire-url)
- [Append to an array](#append-to-an-array)
- [Time and Date parsing](#time-and-date-parsing)
- [Time and Date formatting](#time-and-date-formatting)

*Imagine you have the following JSON data returned by an endpoint:*

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

### Sum numerical values

#### FQL

``` javascript
$sum(payments.amount)
```

<br>

#### Result

``` json
"$281.01"
```

---

### Modify strings and group and sum by description

#### FQL

``` javascript
payments.{description & ' annual cost' : amount*12}
```

<br>

#### Result

``` json
[
    {"recurring subscription annual cost": 1325.76},
    {"one time purchase annual cost": 293.88},
    {"recurring subscription annual cost": 1325.76},
    {"recurring subscription deluxe annual cost": 426.72}
]
```

---

### Cast a string into a number

#### FQL

``` javascript
$number(customer_info.total_value)
```

<br>

#### Result

``` json
281.01
```

---

### Convert a number into a string

#### FQL

``` javascript
$string(payments[0].amount)
```

<br>

#### Result

``` json
"110.48"
```

---

### Return the length of a string

#### FQL

``` javascript
$length(payments[0].description)
```

<br>

#### Result

``` json
22
```

---

### Return part of a string using substring

The first number is optional and specifies the offset, the second is the number of characters you are selecting, negative numbers can also be used for the offest

#### FQL

``` javascript
$substring(payments[0].description, 3, 6)
```

<br>

#### Result

``` json
"urring"
```

---

### Get the string before the first occurance of a pattern

Returns the substring before the specified occurance of `subscription` . If `subscription` was not found it would return the whole string

#### FQL

``` javascript
$substringBefore(payments[0].description, 'subscription')
```

<br>

#### Result

``` json
"recurring "
```

---

### Get the string after the first occurance of a pattern

#### FQL

``` javascript
$substringAfter(payments[0].description, 'recurring')
```

<br>

#### Result

``` json
" subscription"
```

---

### Transform a string to all uppercase

#### FQL

``` javascript
$uppercase(payments[0].description)
```

<br>

#### Result

``` json
"RECURRING SUBSCRIPTION"
```

---

### Transform a string to all lowercase

#### FQL

``` javascript
$lowercase(customer_info.'customer field')
```

<br>

#### Result

``` json
"customer data"
```

---

### Trim a string

Removes excess leading and trailing spaces, converts newline, carriage return, line feeds, and tabs into a single space character, and reduces consecutive spaces into a single space character

#### FQL

``` javascript
$trim(customer_info.unformated_customer_field)
```

<br>

#### Result

``` json
"customer stuff"
```

---

### Pad a string

If the second parameter is a positive number it pads the string with the third parameter, if the second parameter is negative it pads the front of the string with the character(s) optionally specified (third parameter character(s) will default to space if left blank)

#### FQL

``` javascript
$pad(customer_info.'customer field', 15, '#')
```

<br>

#### Result

``` json
"Customer data##"
```

---

### Split a string into an array of components

Returns the string split on the seporater specified in the second parameter and optionally limited by the third parameter. A regex can also be used instead of a string

#### FQL

``` javascript
$split(payments[1].description, " ", 2)
```

<br>

#### Result

``` json
["one","time"]
```

---

### Join an array of strings into a single string

#### FQL

``` javascript
$join(customer_info.associated_usernames)
```

<br>

#### Result

``` json
"user1, myuser, online_user"
```

---

### Replace string with another

Replaces the instances of `recurring` in the first parameter string and replaces it with renewing and limited to the first instance found (optionally specified with the `1`). Using a regex instead of `renewing` is also supported

#### FQL

``` javascript
$replace(payments[0].description,"recurring", "renewing", 1)
```

<br>

#### Result

``` json
"renewing subscription"
```

---

### Base64 encode a string

#### FQL

``` javascript
$base64encode('some data here')
```

<br>

#### Result

``` json
"c29tZSBkYXRhIGhlcmU="
```

---

### Base64 decode a string

#### FQL

``` javascript
$base64decode("c29tZSBkYXRhIGhlcmU=")
```

<br>

#### Result

``` json
"some data here"
```

---

### Encode a url component

#### FQL

``` javascript
$encodeUrlComponent("?city=melbourne")
```

<br>

#### Result

``` json
"%3Fcity%3Dmelbourne
```

---

### Decode a url component

#### FQL

``` javascript
$decodeUrlComponent("%3Fcity%3Dmelbourne")
```

<br>

#### Result

``` json
"?city=melbourne"
```

---

### Encode an entire url

#### FQL

``` javascript
$encodeUrl('https://faketranslatewebsite.com/?phrase=こんにちは')
```

<br>

#### Result

``` json
"https://faketranslatewebsite.com/?phrase=%E3%81%93%E3%82%93%E3%81%AB%E3%81%A1%E3%81%AF"
```

---

### Decode entire url

#### FQL

``` javascript
$decodeUrl("https://faketranslatewebsite.com/?phrase=%E3%81%93%E3%82%93%E3%81%AB%E3%81%A1%E3%81%AF")
```

<br>

#### Result

``` json
"https://faketranslatewebsite.com/?phrase=こんにちは"
```

---

### Append to an array

Can combine two arrays, an array and a single value, or two strings into an array

#### FQL

``` javascript
$append([1,2,3], [4,5,6])
```

<br>

#### Result

``` json
[1,2,3,4,5,6]
```

---

## Time and Date parsing

### Get the current time in ISO 8601 format

#### FQL

``` javascript
$now()
```

<br>

#### Result

``` json
"2022-11-04T22:36:57.094Z"
```

---

### Get the current time in Unix milliseconds since the epoch

#### FQL

``` javascript
$millis()
```

<br>

#### Result

``` json
1667601477254
```

---

### Convert from a specific date format into Unix epoch time

See the formatting section below for details on date formatting

#### FQL

``` javascript
$toMillis('10/12/2018 11:39 PM', '[M]/[D]/[Y] [h]:[m] [P]')
```

<br>

#### Result

``` json
1539387540000
```

---

### Convert from Unix epoch time into a specific date format

See the formatting section below for details on date formatting

#### FQL

``` javascript
$fromMillis(1539387540000, '[Y]-[M]-[D] [H]:[m]:[s] [z]')
```

<br>

#### Result

``` json
"2018-10-12 23:39:00 GMT+00:00"
```

---

### Time and Date formatting

| Character  | Meaning |
| ------------- | ------------- |
| Y	| year |
| M	| month as a numerical value |
| D	| day in month |
| d	| day in year |
| F	| day of week |
| W	| week in year |
| w	| week in month	|
| H	| hour (24 hours) |
| h	| hour (12 hours) |
| P	| am/pm marker |
| m	| minute |
| s	| second |
| f	| fractional seconds |
| Z	| timezone |
| z	| timezone but modified where to include a prefix as a time offset using GMT |
| C	| calendar: the name or abbreviation of a calendar name |
| E	| era: the name of a baseline for the numbering of years, for example the reign of a monarch |
