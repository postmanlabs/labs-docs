---
category: 
  - "docs"
  - "postman"
  - "scripts"
title: "Intro to scripts"
page_id: "intro_to_scripts"
warning: false
---

### **Scripts in Postman**

Postman contains a powerful runtime based on Node.js that allows you to add dynamic behavior to requests and collections. This allows you to write test suites, build requests that can contain dynamic parameters, pass data between requests, and a lot more. You can add JavaScript code to execute during 2 events in the flow:

1.  1.  Before a request is sent to the server, as a [pre-request script](https://www.getpostman.com/docs/Pre-request+scripts) under the **Pre-request Script** tab
    2.  After a response is received, as a [test script](https://www.getpostman.com/docs/Test+scripts) under the **Tests** tab

![](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59187643.png)

The request execution flow for a single request in Postman looks like this:

![](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59184189.png)

### **How does this work**

Is this magic? No, it's the [Postman Sandbox](https://www.getpostman.com/docs/Postman+Sandbox). The Postman Sandbox is a JavaScript execution environment that is available to you while writing pre-request and test scripts for requests (both in Postman and Newman). Whatever code you write in these sections is executed in this sandbox.  

### **Debugging scripts**

Debugging scripts can be written under either the **Pre-request Script** tab or the **Tests** tab, with helpful messages logged in the [Postman Console](https://www.getpostman.com/docs/Debugging+and+logs).
