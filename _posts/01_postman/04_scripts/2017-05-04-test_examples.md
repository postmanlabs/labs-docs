---
category: 
  - "docs"
  - "postman"
  - "scripts"
title: "Test examples"
page_id: "test_examples"
warning: false
---


Test scripts are run after a request is sent and a response has been received from the server.

Let’s look at some examples of Postman tests. Most of these are available as snippets inside Postman. Most tests are as simple as one-line JavaScript statements. You can have as many tests as you want for a request.

**Setting an environment variable**

<div>

<div>

<pre>postman.setEnvironmentVariable("key", "value");</pre>

</div>

</div>

**Setting a nested object as an environment variable**

<div>

<div>

<pre>var array = [1, 2, 3, 4];
postman.setEnvironmentVariable("array", JSON.stringify(array, null, 2));

var obj = { a: [1, 2, 3, 4], b: { c: 'val' } };
postman.setEnvironmentVariable("obj", JSON.stringify(obj));</pre>

</div>

</div>

**Getting an environment variable**

<div>

<div>

<pre>postman.getEnvironmentVariable("key");</pre>

</div>

</div>

**Getting an environment variable (whose value is a stringified object)**

<div>

<div>

<pre>// These statements should be wrapped in a try-catch block if the data is coming from an unknown source.

var array = JSON.parse(postman.getEnvironmentVariable("array"));
var obj = JSON.parse(postman.getEnvironmentVariable("obj"));</pre>

</div>

</div>

**Clear an environment variable**

<div>

<div>

<pre>postman.clearEnvironmentVariable("key");</pre>

</div>

</div>

**Set a global variable**

<div>

<div>

<pre>postman.setGlobalVariable("key", "value");</pre>

</div>

</div>

**Get a global variable**

<div>

<div>

<pre>postman.getGlobalVariable("key"); </pre>

</div>

</div>

**Clear a global variable**

<div>

<div>

<pre>postman.clearGlobalVariable("key");</pre>

</div>

</div>

**Check if response body contains a string**

<div>

<div>

<pre>tests["Body matches string"] = responseBody.has("string_you_want_to_search");</pre>

</div>

</div>

**Convert XML body to a JSON object**

<div>

<div>

<pre>var jsonObject = xml2Json(responseBody);</pre>

</div>

</div>

**Check if response body is equal to a string**

<div>

<div>

<pre>tests["Body is correct"] = responseBody === "response_body_string";</pre>

</div>

</div>

**Check for a JSON value**

<div>

<div>

<pre>var data = JSON.parse(responseBody);
tests["Your test name"] = data.value === 100;</pre>

</div>

</div>

**Content-Type is present (Case-insensitive checking)**

<div>

<div>

<pre>tests["Content-Type is present"] = postman.getResponseHeader("Content-Type"); //Note: the getResponseHeader() method returns the header value, if it exists.</pre>

</div>

</div>

**Content-Type is present (Case-sensitive)**

<div>

<div>

<pre>tests["Content-Type is present"] = responseHeaders.hasOwnProperty("Content-Type");</pre>

</div>

</div>

**Response time is less than 200ms**

<div>

<div>

<pre>tests["Response time is less than 200ms"] = responseTime < 200;</pre>

</div>

</div>

**Response time is within a specific range (lower bound inclusive, upper bound exclusive)**

<div>

<div>

<pre>tests["Response time is acceptable"] = _.inRange(responseTime, 100, 1001); // _ is the inbuilt Lodash v3.10.1 object, documented at https://lodash.com/docs/3.10.1</pre>

</div>

</div>

**Status code is 200**

<div>

<div>

<pre>tests["Status code is 200"] = responseCode.code === 200;</pre>

</div>

</div>

**Code name contains a string**

<div>

<div>

<pre>tests["Status code name has string"] = responseCode.name.has("Created");</pre>

</div>

</div>

**Successful POST request status code**

<div>

<div>

<pre>tests["Successful POST request"] = responseCode.code === 201 || responseCode.code === 202;</pre>

</div>

</div>

**Use TinyValidator for JSON data**

<div>

<div>

<pre>var schema = {
 "items": {
 "type": "boolean"
 }
};
var data1 = [true, false];
var data2 = [true, 123];

tests["Valid Data1"] = tv4.validate(data1, schema);
tests["Valid Data2"] = tv4.validate(data2, schema);
console.log("Validation failed: ", tv4.error);</pre>

</div>

</div>

**Decode base64 encoded data**

<div>

<div>

<pre>var intermediate,
	base64Content, // assume this has a base64 encoded value
	rawContent = base64Content.slice('data:application/octet-stream;base64,'.length);

intermediate = CryptoJS.enc.Base64.parse(base64content); // CryptoJS is an inbuilt object, documented here: https://www.npmjs.com/package/crypto-js
tests["Contents are valid"] = CryptoJS.enc.Utf8.stringify(intermediate); // a check for non-emptiness</pre>

</div>

</div>

### Sample data files

JSON files are composed of key/value pairs.

[Download JSON file](http://www.getpostman.com/samples/test_data_file.json)

For CSV files, the top row needs to contain variable names.  

[Download CSV file](http://www.getpostman.com/samples/test_data_file.csv)

</div>