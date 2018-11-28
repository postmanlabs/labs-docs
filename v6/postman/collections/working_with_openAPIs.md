---
title: "Working with Open APIs"
page_id: "working_with_openAPIs"
warning: false
---

You can import your existing OpenAPI Specification 3.0 (OAS 3.0) definitions into Postman. Postman supports both YAML and JSON formats. You can choose to upload a file, enter a URL, or directly copy your JSON/YAML. In the Postman app, click 'Import' to bring up the following screen:  

[![import sample](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/import+modal.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/import+modal.png)

When importing your OpenAPI files, Postman takes advantage of all of its features and neatly organizes your file in multi-level folders (if your open API has multiple levels of hierarchy) to make it an organized collection. 

Postman is also equipped to inference the schemas. And when importing your OpenAPI definitions file, Postman reads the schema of your API specification, effectively takes all the data provided there, populates the request body and generates examples out of the responses from the definitions file. 

The following GIF file clearly illustrates importing of OpenAPI definitions file into Postman: 

[![import swagger 3 file](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ImportingSwagger3File.gif)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ImportingSwagger3File.gif)
