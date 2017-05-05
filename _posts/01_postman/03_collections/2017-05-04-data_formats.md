---
category: 
  - "docs"
  - "postman"
  - "collections"
title: "Data formats"
page_id: "data_formats"
warning: false
---


Postman can export and import collections, environments, globals and header presets as files and links.

### Exporting and Importing Postman data

Postman can export and import the following formats as a file or generated URL. When you export a collection from the Postman app, the exported file is a JSON file. The file contains all data (and metadata) that is required by Postman to recreate the collection when imported back into Postman, or that is utilized by Newman to run the collection from the command line interface (CLI).

##### Collections

![](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59163827.png)

Postman can export collections in two formats - v1 and v2\. Both Collection v1 and v2 download as JSON files; v2 is more versatile and the most-used choice. Learn more about the v1 and v2 formats [here](http://blog.getpostman.com/2015/06/05/travelogue-of-postman-collection-format-v2/). 

![](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59163839.png)

##### Environments

Environments can be exported from the **MANAGE ENVIRONMENTS** modal, and imported here as well.

![](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59163851.png)

##### Data dumps

![](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59163867.png)

From the **Data** tab of the **SETTINGS** modal, Postman allows you to export all collections, environments, globals and header presets into one JSON file. Postman does not export your history. You can import this data back into Postman.

##### Importing Postman data

Postman data can be imported from the **Data** tab of the **SETTINGS** modal, or using the **Import** button in the header toolbar. Import a collection, environment, data dump, curl command, or a RAML / WADL / Swagger (v1/v2) / Runscope file using the **IMPORT** modal.

![](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59163883.png)

### Importing cURL

Most valid cURL (HTTP-only) commands can be imported into Postman. Postman's importer supports the following cURL options:

<div>

<table>

<thead>

<tr>

<th>

Option

</th>

<th>

Description

</th>

</tr>

</thead>

<tbody>

<tr>

<td>

<pre>-A, --user-agent <string></pre>

</td>

<td>

<pre>An optional user-agent string</pre>

</td>

</tr>

<tr>

<td>

<pre>-d, --data <string></pre>

</td>

<td>

<pre>Sends the specified data to the server with type application/x-www-form-urlencoded</pre>

</td>

</tr>

<tr>

<td>

<pre>--data-ascii <string></pre>

</td>

<td>

<pre>Sends the specified data to the server with type application/x-www-form-urlencoded</pre>

</td>

</tr>

<tr>

<td>

<pre>--data-urlencode <string></pre>

</td>

<td>

<pre>Sends the specified data to the server with type application/x-www-form-urlencoded</pre>

</td>

</tr>

<tr>

<td>

<pre>--data-binary <string></pre>

</td>

<td>

<pre>Data sent as-is</pre>

</td>

</tr>

<tr>

<td>

<pre>-F, --form <name=content></pre>

</td>

<td>

<pre>A single form-data field (can be used multiple times)</pre>

</td>

</tr>

<tr>

<td>

<pre>-G, --get</pre>

</td>

<td>

<pre>Forces the request to be sent as GET, with the --data parameters appended to the query string</pre>

</td>

</tr>

<tr>

<td>

<pre>-H, --header <string></pre>

</td>

<td>

<pre>Add a header (can be used multiple times)</pre>

</td>

</tr>

<tr>

<td>

<pre>-X, --request <string></pre>

</td>

<td>

<pre>Specify a custom request method to be used</pre>

</td>

</tr>

<tr>

<td>

<pre>--url <string></pre>

</td>

<td>

<pre>An alternate way to specify the URL</pre>

</td>

</tr>

</tbody>

</table>

</div>

A few commands which can be imported include:

<div>

<table>

<thead>

<tr>

<th>

cURL

</th>

<th>

Effect

</th>

</tr>

</thead>

<tbody>

<tr>

<td>curl [http://postman-echo.com/get](http://postman-echo.com/get)</td>

<td>Creates a GET request in Postman with the URL prefilled</td>

</tr>

<tr>

<td>curl --request POST --url [http://postman-echo.com/post](http://postman-echo.com/post) --form color=red --form color=green</td>

<td>Creates a POST request with a multivalue form data row</td>

</tr>

<tr>

<td>curl -X PUT --data-binary hello [http://postman-echo.com/put](http://postman-echo.com/put)</td>

<td>Creates a POST request with raw data</td>

</tr>

<tr>

<td>curl -X PUT --data-ascii 'a=b&c=d' [http://postman-echo.com/put](http://postman-echo.com/put) -H 'AccessToken:1234'</td>

<td>Creates a PUT request with urlencoded form data, and a custom header</td>

</tr>

</tbody>

</table>

</div>

### Importing RAML

##### Saving a RAML folder as a collection

1\. Clone the repository containing the RAML definition to your local machine, or save it locally as a folder.

2. Click on the Import button, and choose the Import Folder tab.

[![](https://www.getpostman.com/img/v1/docs/importing_folders/importing_folders_1.pn)](https://www.getpostman.com/img/v1/docs/importing_folders/importing_folders_1.png)

3\. Click on **Choose Folders** and upload the RAML folder.

[![](https://www.getpostman.com/img/v1/docs/importing_folders/importing_folders_2.pn)](https://www.getpostman.com/img/v1/docs/importing_folders/importing_folders_2.png)

You’re done! Postman will detect all the RAML definitions and convert them internally to Postman and then show you an import success message.

[![](https://www.getpostman.com/img/v1/docs/importing_folders/importing_folders_3.pn)](https://www.getpostman.com/img/v1/docs/importing_folders/importing_folders_3.png)

##### Examples

Example RAML file: [github-api-v3.raml](https://postmanlabs.atlassian.net/wiki/download/attachments/58461880/github-api-v3.raml?version=1&modificationDate=1490779044966&cacheVersion=1&api=v2)

### Importing Swagger

A Swagger API definition usually lives as a single file, so we only support imports of single swagger files. If you have a lot of unrelated Swagger files in a folder, you can import those through the folder importer.

##### Saving a Swagger file as a collection

1.  1.  Clone the repository containing the Swagger definition to your local machine. If you have it saved locally as file already, that’s fine of course.  

    2.  Click on the Import button, and choose the Import File tab. If you have a lot of unrelated Swagger files in a folder, you can import those through the folder importer. 

        [![](https://www.getpostman.com/img/v1/docs/importing_folders/importing_folders_1.pn)](https://www.getpostman.com/img/v1/docs/importing_folders/importing_folders_1.png)

    3.  Click on file and upload the Swagger file.

You’re done! Postman will detect all the Swagger definitions and convert them internally to Postman and then show you an import success message.

[![](https://www.getpostman.com/img/v1/docs/importing_folders/importing_folders_3.pn)](https://www.getpostman.com/img/v1/docs/importing_folders/importing_folders_3.png)

##### Examples

Swagger 2.0: [https://github.com/OAI/OpenAPI-Specification/tree/master/examples/v2.0](https://github.com/OAI/OpenAPI-Specification/tree/master/examples/v2.0)

Swagger 1.2: [https://github.com/OAI/OpenAPI-Specification/wiki/Hello-World-Sample](https://github.com/OAI/OpenAPI-Specification/wiki/Hello-World-Sample)

### Importing WADL

Postman lets you import WADL specs too. While all aspects are not supported yet, you can expect the various parameters that Postman uses (collections, folder, requests, headers, request payloads) to be correctly generated. We're currently working on extending this feature.

##### **Example WADL file**

<div>

<table>

<tbody>

<tr>

<td>

1  
2  
3  
4  
5  
6  
7  
8  
9  
10  
11  
12  
13  
14  
15  
16  
17  
18  
19  
20  
21  
22  
23

</td>

<td>

`<``application` `xmlns``=``"[http://wadl.dev.java.net/2009/02"](http://wadl.dev.java.net/2009/02)``>`  
`<``resources` `base``=``"[http://example.com/api"](http://example.com/api)``>`  
`<``resource` `path``=``"books"``>`  
`<``method` `name``=``"GET"``/>`  
`<``resource` `path``=``"{bookId}"``>`  
`<``param` `required``=``"true"` `style``=``"template"` `name``=``"bookId"``/>`  
`<``method` `name``=``"GET"``/>`  
`<``method` `name``=``"DELETE"``/>`  
`<``resource` `path``=``"reviews"``>`  
`<``method` `name``=``"GET"``>`  
`<``request``>`  
`<``param` `name``=``"page"` `required``=``"false"` `default``=``"1"` `style``=``"query"``/>`  
`<``param` `name``=``"size"` `required``=``"false"` `default``=``"20"` `style``=``"query"``/>`  
`</``request``>`  
`</``method``>`  
`</``resource``>`  
`</``resource``>`  
`</``resource``>`  
`<``resource` `path``=``"readers"``>`  
`<``method` `name``=``"GET"``/>`  
`</``resource``>`  
`</``resources``>`  
`</``application``>`

</td>

</tr>

</tbody>

</table>

</div>

Taken from [http://www.nurkiewicz.com/2012/01/gentle-introduction-to-wadl-in-java.html](http://www.nurkiewicz.com/2012/01/gentle-introduction-to-wadl-in-java.html)

### Validating Collection JSON files

To validate if a JSON file is in the correct collections format, you can use our schema files for collections.

The schema file is located at [https://schema.getpostman.com/json/collection/v1/](https://schema.getpostman.com/json/collection/v1/).

The associated documentation can be found at [https://schema.getpostman.com/json/collection/v1/docs/](https://schema.getpostman.com/json/collection/v1/docs/).

Everything is neatly stored on GitHub [https://github.com/postmanlabs/schemas](https://github.com/postmanlabs/schemas).

To see an example of data validation using our schema and [is-my-json-valid](https://github.com/mafintosh/is-my-json-valid) (a validator), check out [this blog post](http://blog.getpostman.com/2015/07/02/introducing-postman-collection-format-schema/).

</div>