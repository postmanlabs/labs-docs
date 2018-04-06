---
title: "Intro to environments and globals"
page_id: "intro_to_environments_and_globals"
warning: false

---

### What are environments and globals?

To understand environments and globals, you must first understand how variables work in Postman.

**Variables**

Developers know that variables are symbolic names that represent the information you store in them. The information the variable represents can change, but the operations on the variable remain the same. Variables in Postman work the same way. 

You can reuse the value of a variable in multiple places. If you want to change the value, you can change the variable once  and the change is reflected through out the rest of your code.

Let’s say you have 3 API endpoints that use the same domain - your-domain.com. You can save this domain as a variable and instead of repeating the value, you can use {{domain}}/endpoint1 and {{domain}}/endpoint2 in the request builder. Now, if your domain changes to another-domain.com, you just have to change this value once. 

With Postman’s scripting engine you can set variable values, copy data from one request and use it in another request.

* Reuse values so you can keep your code DRY (Don’t Repeat Yourself)
* Configure your setup to accommodate different users or environments
* Extract data from responses and chain together requests in a collection

Now that we know how varibles work in Postman, let's discuss environments and globals.

**Environments**
