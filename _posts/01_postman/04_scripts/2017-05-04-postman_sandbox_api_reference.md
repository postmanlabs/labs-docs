---
category: 
  - "docs"
  - "postman"
  - "scripts"
title: "Postman Sandbox API reference"
page_id: "postman_sandbox_api_reference"
warning: false
---

### Postman Sandbox API Reference (pm.*)

| Global | Type | Description | Notes |
| `require` | Function | **`require(moduleName:String) → *`** | The require function allows you to use the sandbox built-in library modules. The list of available libraries are listed below. The list links to their corresponding documentation.

  1.  [atob](https://www.npmjs.com/package/atob)→ v2.0.3
  2.  [btoa](https://www.npmjs.com/package/btoa)→ v1.1.2
  3.  [chai](http://chaijs.com/)→ v3.5.0
  4.  [cheerio](https://cheerio.js.org/)→ v0.22.0
  5.  [crypto-js](https://www.npmjs.com/package/crypto-js)→ v3.1.9-1
  6.  [lodash](https://lodash.com/)→ v4.17.2
  7.  [postman-collection](http://www.postmanlabs.com/postman-collection/)→ v1.2.0
  8.  [tv4](https://github.com/geraintluff/tv4)→ v1.2.7
  9.  [uuid](https://www.npmjs.com/package/uuid)→ (the module loaded is a shim for original module)
  10.  [xml2js](https://www.npmjs.com/package/xml2js)→ 0.4.17

A number of NodeJS modules are also available:

  1.  path
  2.  assert
  3.  buffer
  4.  util
  
 | 

<div class="content-wrapper" style="margin-left: 60.0px;">

In order to use a library, you would need to simply call the require function and pass the module name as a parameter and assign the return of the function to a variable.

<div class="table-wrap">

| 

`var atob = require(``'atob'``),`
`_ = require(``'lodash'``),`

`arrayOfStrings,`
`base64Strings;`

`arrayOfStrings =  = [``'string1'``, ``'string2'``];`

`base64Strings = _.map(arrayOfStrings, atob);`

`console.log(base64Strings);`

 |

</div>

</div>

 |
| `pm` | Object | 

**`pm:Object`**

The **`pm`** object encloses all information pertaining to the script being executed and allows one to access a copy of the request being sent or the response received. It also allows one to get and set environment and global variables.

 |
| `[pm.info](http://pm.info)` | Object | 

**`[pm.info](http://pm.info):Object`**

The `[pm.info](http://pm.info)` object contains information pertaining to the script being executed. Useful information such as the request name, request Id, iteration count, etc are stored inside of this.

*   *   `[pm.info](http://pm.info).eventName:String
        `contains information whether the script being executed is a "prerequest" or a "test" script.

    *   `[pm.info](http://pm.info).iteration:Number
        `is the value of the current iteration being run.

    *   `[pm.info](http://pm.info).iterationCount:Number`
        is the total number of iterations that are scheduled to run.
    *   `[pm.info](http://pm.info).requestName:String`
    *   `[pm.info](http://pm.info).requestId :String`

 |
| `pm.globals` | [VariableScope](http://www.postmanlabs.com/postman-collection/VariableScope.html) | 

**`pm.globals:VariableScope`**

 |
| `pm.globals.has` | [Function](http://www.postmanlabs.com/postman-collection/VariableScope.html#has) | 

**`pm.globals.has(variableName:String) → Boolean`**

 |
| `pm.globals.get` | [Function](http://www.postmanlabs.com/postman-collection/VariableScope.html#get) | 

**`pm.globals.get(variableName:String) → *`**

 |
| `pm.globals.set` | [Function](http://www.postmanlabs.com/postman-collection/VariableScope.html#set) | 

**`pm.globals.set(variableName:String, variableValue:String)`**

 |
| `pm.globals.unset` | [Function](http://www.postmanlabs.com/postman-collection/VariableScope.html#unset) | 

**`pm.globals.unset(variableName:String)`**

 |
| `pm.globals.clear` | [Function](http://www.postmanlabs.com/postman-collection/VariableScope.html#clear) | 

**`pm.globals.clear()`**

 |
| `pm.globals.variables` | [Function](http://www.postmanlabs.com/postman-collection/VariableScope.html#variables) | 

**`pm.globals.variables() → Object`**

 |
| `pm.environment` | [VariableScope](http://www.postmanlabs.com/postman-collection/VariableScope.html) | 

**`pm.environment:VariableScope`**

 |
| `pm.environment.has` | [Function](http://www.postmanlabs.com/postman-collection/VariableScope.html#has) | 

**`pm.environment.has(variableName:String) → Boolean`**

 |
| `pm.environment.get` | [Function](http://www.postmanlabs.com/postman-collection/VariableScope.html#get) | 

**`pm.environment.get(variableName:String) → *`**

 |
| `pm.environment.set` | [Function](http://www.postmanlabs.com/postman-collection/VariableScope.html#set) | 

**`pm.environment.set(variableName:String, variableValue:String)`**

 |
| `pm.environment.unset` | [Function](http://www.postmanlabs.com/postman-collection/VariableScope.html#unset) | 

**`pm.environment.unset(variableName:String)`**

 |
| `pm.environment.clear` | [Function](http://www.postmanlabs.com/postman-collection/VariableScope.html#clear) | 

**`pm.environment.clear()`**

 |
| `pm.environment.variables` | [Function](http://www.postmanlabs.com/postman-collection/VariableScope.html#variables) | 

**`pm.environment.variables() → Object`**

 |
| `pm.request` | [Request](http://www.postmanlabs.com/postman-collection/Request.html) | 

**`pm.request:Request`**

The request object inside pm is a representation of the request for which this script is being run. For a pre-request script, this is the request that is about to be sent and when in test script, this is the representation of the request that was sent.

Request contains information stored in the following structure:

*   *   `pm.request.url:Url`
    *   `pm.request.headers:HeaderList`

 |
| 

<div class="content-wrapper" style="margin-left: 30.0px;">

**`<span class="status-macro aui-lozenge aui-lozenge-current conf-macro output-inline">TESTONLY</span>`**

</div>

 |
| `pm.data` | Object | 

**`pm.data`:Object**

The data object would contain data from the data file provided during a collection run

 |
| 

<div class="content-wrapper" style="margin-left: 30.0px;">

`pm.response`

</div>

 | [Response](http://www.postmanlabs.com/postman-collection/Response.html) | 

<div class="content-wrapper" style="margin-left: 30.0px;">

**`pm.response:Response`**

Inside the test scripts, the `pm.response` object contains all information pertaining to the response that was received.

The response details are stored in the following format

*   *   `pm.response.code:Number`
    *   `pm.response.reason:Function → String`
    *   `pm.response.headers:HeaderList`
    *   `pm.response.responseTime:Number`
    *   `pm.response.text:Function → String`
    *   `pm.response.json:Function → Object`

</div>

 |
| 

<div class="content-wrapper" style="margin-left: 30.0px;">

`pm.cookies`

</div>

 | [CookieList](http://www.postmanlabs.com/postman-collection/CookieList.html) | 

<div class="content-wrapper" style="margin-left: 30.0px;">

**`pm.cookies:CookieList`**

The cookies object contain a list of cookies that are associated with the domain to which the request was made.

</div>

 |
| `pm.cookies.has` | [Function](http://www.postmanlabs.com/postman-collection/PropertyList.html#has) | 

**`pm.cookies.has(cookieName:String):Function → Boolean`**

Check whether a particular cookie (addressed by it's name,) exists for the requested domain or not.

 |
| `pm.cookies.get` | [Function](http://www.postmanlabs.com/postman-collection/PropertyList.html#get) | 

**`pm.cookies.get(cookieName:String):Function → String`**

Get the value of a particular cookie.

 |
| `pm.cookies.toObject` | [Function](http://www.postmanlabs.com/postman-collection/PropertyList.html#toObject) | 

**`pm.cookies.toObject:Function → Object`**

Get a copy of all cookies and their values in form of an object. The cookies returned are the ones defined for the requested domain and path.

 |
| 

<div class="content-wrapper" style="margin-left: 30.0px;">

`pm.test`

</div>

 | Function | 

<div class="content-wrapper" style="margin-left: 30.0px;">

**`pm.test(testName:String, specFunction:Function)`**

This function is used to write test specifications inside the sandbox. Writing tests inside this function allows one to name the test accurately as well as ensure that in case of any error inside this function, the rest of the script is not blocked.

</div>

 | 

<div class="content-wrapper" style="margin-left: 30.0px;">

The following code block is a sample test where we are checking to ensure that everything about a fictitious response is valid for us to proceed next.

<div class="table-wrap">

| 

`pm.test(``"response should be okay to process"``, function () {`
`[pm.response.to.not.be](http://pm.response.to.not.be).error;`
`[pm.response.to](http://pm.response.to).have.jsonBody(``''``);`
`[pm.response.to](http://pm.response.to).not.have.jsonBody(``'error'``);`
`});`

 |

</div>

</div>

 |
| 

<div class="content-wrapper" style="margin-left: 30.0px;">

`pm.expect`

</div>

 | Function | 

<div class="content-wrapper" style="margin-left: 30.0px;">

**`pm.expect(assertion:*) → Assertion`**

`pm.expect` is a generic assertion function. Underlying this is the [ChaiJS expect bdd library](http://chaijs.com/api/bdd/). Using this, it is easy to write tests where the syntax becomes readable and verbose.

Read more on the usage of `pm.expect` at [http://chaijs.com/api/bdd/](http://chaijs.com/api/bdd/)

</div>

 | 

<div class="content-wrapper" style="margin-left: 30.0px;">

This function is useful to deal with assertions of data from response or variables.

<div class="table-wrap">

| 

`pm.test(``'environment to be production'``, function () {`
`pm.expect(pm.environment.get(``'env'``)).to.equal(``'production'``);`
`});`

 |

</div>

</div>

 |
 
 

|   Global  |   Type    |   Description | Notes |
|   ---  |   ---    |   --- | --- |
|   `require`  |   Function    |   **`require(moduleName:String) → *`** 
The require function allows you to use the sandbox built-in library modules. The list of available libraries are listed below. The list links to their corresponding documentation.

  1.  [atob](https://www.npmjs.com/package/atob)→ v2.0.3
  2.  [btoa](https://www.npmjs.com/package/btoa)→ v1.1.2
  3.  [chai](http://chaijs.com/)→ v3.5.0
  4.  [cheerio](https://cheerio.js.org/)→ v0.22.0
  5.  [crypto-js](https://www.npmjs.com/package/crypto-js)→ v3.1.9-1
  6.  [lodash](https://lodash.com/)→ v4.17.2
  7.  [postman-collection](http://www.postmanlabs.com/postman-collection/)→ v1.2.0
  8.  [tv4](https://github.com/geraintluff/tv4)→ v1.2.7
  9.  [uuid](https://www.npmjs.com/package/uuid)→ (the module loaded is a shim for original module)
  10.  [xml2js](https://www.npmjs.com/package/xml2js)→ 0.4.17

A number of NodeJS modules are also available:

  1.  path
  2.  assert
  3.  buffer
  4.  util
| In order to use a library, you would need to simply call the require function and pass the module name as a parameter and assign the return of the function to a variable.
```
`var atob = require(``'atob'``),`  
`_ = require(``'lodash'``),`  

`arrayOfStrings,`  
`base64Strings;`  

`arrayOfStrings =  = [``'string1'``, ``'string2'``];`  

`base64Strings = _.map(arrayOfStrings, atob);`  

`console.log(base64Strings);`
```

In order to use a library, you would need to simply call the require function and pass the module name as a parameter and assign the return of the function to a variable.

<div>

<table>

<tbody>

<tr>

<td>



</td>

</tr>

</tbody>

</table>

</div>

</div>

</td>

</tr>

<tr>

<th>  
</th>

</tr>

<tr>

<th>`pm`</th>

<th>Object</th>

<td>

**`pm:Object`**

The **`pm`** object encloses all information pertaining to the script being executed and allows one to access a copy of the request being sent or the response received. It also allows one to get and set environment and global variables.

</td>

<td>  
</td>

</tr>

<tr>

<th>`[pm.info](http://pm.info)`</th>

<th>Object</th>

<td>

**`[pm.info](http://pm.info):Object`**

The `[pm.info](http://pm.info)` object contains information pertaining to the script being executed. Useful information such as the request name, request Id, iteration count, etc are stored inside of this.

*   *   `[pm.info](http://pm.info).eventName:String` contains information whether the script being executed is a "prerequest" or a "test" script.  

    *   `[pm.info](http://pm.info).iteration:Number` is the value of the current iteration being run.  

    *   `[pm.info](http://pm.info).iterationCount:Number`  
        is the total number of iterations that are scheduled to run.
    *   `[pm.info](http://pm.info).requestName:String`
    *   `[pm.info](http://pm.info).requestId :String`

</td>

<td>  
</td>

</tr>

<tr>

<th>  
</th>

</tr>

<tr>

<th>`pm.globals`</th>

<th>[VariableScope](http://www.postmanlabs.com/postman-collection/VariableScope.html)</th>

<td>

**`pm.globals:VariableScope`**

</td>

<td>  
</td>

</tr>

<tr>

<th>`pm.globals.has`</th>

<th>[Function](http://www.postmanlabs.com/postman-collection/VariableScope.html#has)</th>

<td>

**`pm.globals.has(variableName:String) → Boolean`**

</td>

<td>  
</td>

</tr>

<tr>

<th>`pm.globals.get`</th>

<th>[Function](http://www.postmanlabs.com/postman-collection/VariableScope.html#get)</th>

<td>

**`pm.globals.get(variableName:String) → *`**

</td>

<td>  
</td>

</tr>

<tr>

<th>`pm.globals.set`</th>

<th>[Function](http://www.postmanlabs.com/postman-collection/VariableScope.html#set)</th>

<td>

**`pm.globals.set(variableName:String, variableValue:String)`**

</td>

<td>  
</td>

</tr>

<tr>

<th>`pm.globals.unset`</th>

<th>[Function](http://www.postmanlabs.com/postman-collection/VariableScope.html#unset)</th>

<td>

**`pm.globals.unset(variableName:String)`**

</td>

<td>  
</td>

</tr>

<tr>

<th>`pm.globals.clear`</th>

<th>[Function](http://www.postmanlabs.com/postman-collection/VariableScope.html#clear)</th>

<td>

**`pm.globals.clear()`**

</td>

<td>  
</td>

</tr>

<tr>

<th>`pm.globals.variables`</th>

<th>[Function](http://www.postmanlabs.com/postman-collection/VariableScope.html#variables)</th>

<td>

**`pm.globals.variables() → Object`**

</td>

<td>  
</td>

</tr>

<tr>

<th>  
</th>

</tr>

<tr>

<th>`pm.environment`</th>

<th>[VariableScope](http://www.postmanlabs.com/postman-collection/VariableScope.html)</th>

<td>

**`pm.environment:VariableScope`**

</td>

<td>  
</td>

</tr>

<tr>

<th>`pm.environment.has`</th>

<th>[Function](http://www.postmanlabs.com/postman-collection/VariableScope.html#has)</th>

<td>

**`pm.environment.has(variableName:String) → Boolean`**

</td>

<td>  
</td>

</tr>

<tr>

<th>`pm.environment.get`</th>

<th>[Function](http://www.postmanlabs.com/postman-collection/VariableScope.html#get)</th>

<td>

**`pm.environment.get(variableName:String) → *`**

</td>

<td>  
</td>

</tr>

<tr>

<th>`pm.environment.set`</th>

<th>[Function](http://www.postmanlabs.com/postman-collection/VariableScope.html#set)</th>

<td>

**`pm.environment.set(variableName:String, variableValue:String)`**

</td>

<td>  
</td>

</tr>

<tr>

<th>`pm.environment.unset`</th>

<th>[Function](http://www.postmanlabs.com/postman-collection/VariableScope.html#unset)</th>

<td>

**`pm.environment.unset(variableName:String)`**

</td>

<td>  
</td>

</tr>

<tr>

<th>`pm.environment.clear`</th>

<th>[Function](http://www.postmanlabs.com/postman-collection/VariableScope.html#clear)</th>

<td>

**`pm.environment.clear()`**

</td>

<td>  
</td>

</tr>

<tr>

<th>`pm.environment.variables`</th>

<th>[Function](http://www.postmanlabs.com/postman-collection/VariableScope.html#variables)</th>

<td>

**`pm.environment.variables() → Object`**

</td>

<td>  
</td>

</tr>

<tr>

<th>  
</th>

</tr>

<tr>

<th>`pm.request`</th>

<th>[Request](http://www.postmanlabs.com/postman-collection/Request.html)</th>

<td>

**`pm.request:Request`**

The request object inside pm is a representation of the request for which this script is being run. For a pre-request script, this is the request that is about to be sent and when in test script, this is the representation of the request that was sent.

Request contains information stored in the following structure:

*   *   `pm.request.url:Url`
    *   `pm.request.headers:HeaderList`

</td>

<td>  
</td>

</tr>

<tr>

<th>

<div>

**`TESTONLY`**

</div>

</th>

</tr>

<tr>

<th>`pm.data`</th>

<th>Object</th>

<td>

**`pm.data`:Object**

The data object would contain data from the data file provided during a collection run

</td>

<td>  
</td>

</tr>

<tr>

<th>

<div>

`pm.response`

</div>

</th>

<th>[Response](http://www.postmanlabs.com/postman-collection/Response.html)</th>

<td>

<div>

**`pm.response:Response`**

Inside the test scripts, the `pm.response` object contains all information pertaining to the response that was received.

The response details are stored in the following format

*   *   `pm.response.code:Number`
    *   `pm.response.reason:Function → String`
    *   `pm.response.headers:HeaderList`
    *   `pm.response.responseTime:Number`
    *   `pm.response.text:Function → String`
    *   `pm.response.json:Function → Object`

</div>

</td>

<td>  
</td>

</tr>

<tr>

<th>  
</th>

</tr>

<tr>

<th>

<div>

`pm.cookies`

</div>

</th>

<th>[CookieList](http://www.postmanlabs.com/postman-collection/CookieList.html)</th>

<td>

<div>

**`pm.cookies:CookieList`**

The cookies object contain a list of cookies that are associated with the domain to which the request was made.

</div>

</td>

<td>  
</td>

</tr>

<tr>

<th>`pm.cookies.has`</th>

<th>[Function](http://www.postmanlabs.com/postman-collection/PropertyList.html#has)</th>

<td>

**`pm.cookies.has(cookieName:String):Function → Boolean`**

Check whether a particular cookie (addressed by it's name,) exists for the requested domain or not.

</td>

<td>  
</td>

</tr>

<tr>

<th>`pm.cookies.get`</th>

<th>[Function](http://www.postmanlabs.com/postman-collection/PropertyList.html#get)</th>

<td>

**`pm.cookies.get(cookieName:String):Function → String`**

Get the value of a particular cookie.

</td>

<td>  
</td>

</tr>

<tr>

<th>`pm.cookies.toObject`</th>

<th>[Function](http://www.postmanlabs.com/postman-collection/PropertyList.html#toObject)</th>

<td>

**`pm.cookies.toObject:Function → Object`**

Get a copy of all cookies and their values in form of an object. The cookies returned are the ones defined for the requested domain and path.

</td>

<td>  
</td>

</tr>

<tr>

<th>  
</th>

</tr>

<tr>

<th>

<div>

`pm.test`

</div>

</th>

<th>Function</th>

<td>

<div>

**`pm.test(testName:String, specFunction:Function)`**

This function is used to write test specifications inside the sandbox. Writing tests inside this function allows one to name the test accurately as well as ensure that in case of any error inside this function, the rest of the script is not blocked.

</div>

</td>

<td>

<div>

The following code block is a sample test where we are checking to ensure that everything about a fictitious response is valid for us to proceed next.

<div>

<table>

<tbody>

<tr>

<td>

`pm.test(``"response should be okay to process"``, function () {`  
`[pm.response.to.not.be](http://pm.response.to.not.be).error;`  
`[pm.response.to](http://pm.response.to).have.jsonBody(``''``);`  
`[pm.response.to](http://pm.response.to).not.have.jsonBody(``'error'``);`  
`});`

</td>

</tr>

</tbody>

</table>

</div>

</div>

</td>

</tr>

<tr>

<th>

<div>

`pm.expect`

</div>

</th>

<th>Function</th>

<td>

<div>

**`pm.expect(assertion:*) → Assertion`**

`pm.expect` is a generic assertion function. Underlying this is the [ChaiJS expect bdd library](http://chaijs.com/api/bdd/). Using this, it is easy to write tests where the syntax becomes readable and verbose.

Read more on the usage of `pm.expect` at [http://chaijs.com/api/bdd/](http://chaijs.com/api/bdd/)

</div>

</td>

<td>

<div>

This function is useful to deal with assertions of data from response or variables.

<div>

<table>

<tbody>

<tr>

<td>

`pm.test(``'environment to be production'``, function () {`  
`pm.expect(pm.environment.get(``'env'``)).to.equal(``'production'``);`  
`});`

</td>

</tr>

</tbody>

</table>

</div>

</div>

</td>

</tr>

</tbody>

</table>

</div>

### Response Assertions API

<div>

<table>

<thead>

<tr>

<th>

Assertion

</th>

<th>

Type

</th>

<th>

Description

</th>

<th>

Notes

</th>

</tr>

</thead>

<tbody>

<tr>

<th>`[pm.response.to](http://pm.response.to).have.status`</th>

<th>Function</th>

<td>

`**[pm.response.to](http://pm.response.to).have.status(code:Number)  
[pm.response.to](http://pm.response.to).have.status(reason:String)**`

</td>

<td>  
</td>

</tr>

<tr>

<th>`[pm.response.to](http://pm.response.to).have.header`</th>

<th>Function</th>

<td>

`**[pm.response.to](http://pm.response.to).have.header(key:String, optionalValue:String)**`

</td>

<td>  
</td>

</tr>

<tr>

<th>`[pm.response.to](http://pm.response.to).have.body`</th>

<th>Function</th>

<td>

`**[pm.response.to](http://pm.response.to).have.body()  
**[pm.response.to](http://pm.response.to).have.body(optionalValue:String)  
**[pm.response.to](http://pm.response.to).have.body(optionalValue:RegExp)******`

</td>

<td>  
</td>

</tr>

<tr>

<th>`[pm.response.to](http://pm.response.to).have.jsonBody`</th>

<th>Function</th>

<td>

`**[pm.response.to](http://pm.response.to).have.jsonBody()  
**[pm.response.to](http://pm.response.to).have.jsonBody(optionalExpectEqual:Object)  
****[pm.response.to](http://pm.response.to).have.jsonBody(optionalExpectPath:String)******   
********[pm.response.to](http://pm.response.to).have.jsonBody(optionalExpectPath:String, optionalValue:*)****** ** **`

</td>

<td>  
</td>

</tr>

<tr>

<th>`[pm.response.to.be](http://pm.response.to.be).*`</th>

<th>Object</th>

<td>

The properties inside `[pm.response.to.be](http://pm.response.to.be)` object allows you to easily assert a set of pre-defined rules

*   `[pm.response.to.be.info](http://pm.response.to.be.info)` Checks 1XX status code  

*   `[pm.response.to.be](http://pm.response.to.be).success` Checks 2XX status code  

*   `[pm.response.to.be](http://pm.response.to.be).redirection` Checks 3XX status code  

*   `[pm.response.to.be](http://pm.response.to.be).clientError` Checks 4XX status code  

*   `[pm.response.to.be](http://pm.response.to.be).serverError`   
    Checks 5XX  

*   `[pm.response.to.be](http://pm.response.to.be).error` Checks 4XX or 5XX  

*   `[pm.response.to.be](http://pm.response.to.be).ok` Status code must be 200  

*   `[pm.response.to.be](http://pm.response.to.be).accepted` Status code must be 202  

*   `[pm.response.to.be](http://pm.response.to.be).badRequest` Status code must be 400  

*   `[pm.response.to.be](http://pm.response.to.be).unauthorised` Status code must be 401  

*   `[pm.response.to.be](http://pm.response.to.be).forbidden` Status code 403  

*   `[pm.response.to.be](http://pm.response.to.be).notFound` Status code of response is checked to be 404  

*   `[pm.response.to.be](http://pm.response.to.be).rateLimited`  
    Checks whether response status code is 429

</td>

<td>  
</td>

</tr>

</tbody>

</table>

</div>

</div>