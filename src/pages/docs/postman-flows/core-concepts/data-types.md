---
title: "About data types"
updated: 2022-11-17
---

Postman Flows is a dataflow language, which means Flows understands all kinds of values and associates types with data. Flows is a hybrid typed language, so it performs static type checking to provide features like auto-complete and early warning. Flows also performs some dynamic type checking during execution.

Since most Flow programmers have a JavaScript or TypeScript background, or are programming in an API-First language for the first time, the vocabulary of the types closely resembles JavaScript and TypeScript.

## Contents

* [Primitive values](#primitive-values)
* [Abstract types](#abstract-types)

## Primitive values

| Type                 | What it accepts                                           | Example                   |
| -------------------- | --------------------------------------------------------- | ------------------------- |
| bool                 | `true` or `false`                                     | `true`                    |
| string               | utf-8 encoded characters                                  | `hello world 😎`              |
| number               | double precision 64-bit values or 64-bit unsigned integers | `3.14` <br> `4294967295`  |
| timestamp            | string containing RFC3339 timestamp                       | `1985-04-12T23:20:50.52Z` |
| regex                | A regular expression                                      | `/ab+c/`                  |
| symbol               | Symbol of various types                                    | `now` <br> `null`      |

### Boolean

The boolean value can contain two symbols `true` or `false`. The boolean type is represented by the symbol `bool`.

The _boolean_ value gets automatically converted to a _number_ or a _string_ if required.

| value   | number | string    |
| ------- | ------ | --------- |
| `true`  | `1`    | `'true'`  |
| `false` | `0`    | `'false'` |

### String

The string type is used to represent textual data. It's a UTF-8 encoded list of characters. Like JavaScript, strings in Flows are also immutable. For example, once a string is created, it can't be modified. But you can create new strings out of existing strings using operators like _concat_ or _substring_.

A _string_ value can't be converted automatically to any other type.

> JSON values are of type string. The **Send Request** block automatically parses the data if the `content-type` header indicates a JSON body. In cases where automatic parsing doesn't happen, you'll need to parse the string using the `JSON Parse` block.

### Number

The number type can represent all kinds of numerical values, like integers and decimals for example. Numbers are stored internally as JavaScript numbers, but this will change in the future to account for 64-bit integers and to provide a unified number type.

A _number_ value gets automatically converted to a _string_ or _boolean_ if required.

| value  | boolean | string   |
| ------ | ------- | -------- |
| `0`    | false   | `'0'`    |
| `3.14` | true    | `'3.14'` |

### Timestamp

Unlike JavaScript, Flows views dates as a first-class type and provides a data type for storing dates. Dates are stored in accordance with [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339).

A _timestamp_ value is automatically converted to a _string_ or _number_ if required.

| value                     | string                      | number         |
| ------------------------- | --------------------------- | -------------- |
| `1985-04-12T23:20:50.52Z` | `'1985-04-12T23:20:50.52Z'` | `482196050520` |

### Regex

Regular expressions are patterns which can be used to match character combinations in strings. Flows borrows JavaScript regular expression implementation. [Read More on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions).

A _regex_ value is automatically converted to a _string_ if required.

| value  | string   |
| ------ | -------- |
| `/$^/` | `'/$^/'` |

## Abstract types

> All complex and abstract data types in Flows are built on the concept of [Streams](<https://en.wikipedia.org/wiki/Stream_(computing)>) internally.

### List

The list data type represents a stream of ordered values, where values of the same type may occur more than once. Lists are like arrays in JavaScript but all elements present in the list must be of the same type.

This is a TypeScript equivalent of a list:

```ts
const list: number[] = [1, 2, 3, 4, 5]
```

### Tuple

The tuple data type represent an ordered sequence of finite elements. The values for each element of the tuple can be of different types. Unlike Lists, tuples can't be an infinite stream. Tuples have a fixed size and their size must be known beforehand.

This is a typescript equivalent of a tuple.

```ts
const list: [string, number, boolean] = ["flows", 20, true]
```

### Record

A record is a collection of fields (key-value pairs) where the key is of string type and the values can be of different types. These fields are fixed in number and follow a particular sequence. If you have some knowledge of C, records are like `struct`.

This is a TypeScript equivalent of a record:

```ts
interface Box {
  name: string
  length: number
  width: number
  height: number
  empty: boolean
}
```

### Map

A map is a collection of fields where the key can be a value of a primitive type and
corresponding value can be of any data type. All map fields must have keys and values of same type.

This is a TypeScript equivalent of a map:

```ts
type map: {[key: string]: number} = {'a': 1, 'b': 2, 'c': 3};
```
