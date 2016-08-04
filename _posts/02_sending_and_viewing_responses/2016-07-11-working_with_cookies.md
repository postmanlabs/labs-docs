---
category: "docs"
title: "Working with cookies"
page_id: "working_with_cookies"
tags:
  - "native"
  - "mac"
  - "windows"
warning: false
---

Postman's [native apps](http://www.getpostman.com/apps) provide a Cookie Manager that lets you edit cookies that are associated with each domain. To open the Cookie Manager, click the 'Manage Cookies' link under the 'Send' button.

![](https://cloud.githubusercontent.com/assets/681190/16948881/e45d4816-4dd4-11e6-96e6-daadd28929a8.png)

This will open up the Cookie Manager window. The section on the left will show a list of domains which you have cookies defined. The section on the right will show you cookies associated with each domain.

![](https://cloud.githubusercontent.com/assets/681190/16949440/74107796-4dd8-11e6-8b6e-4c7d52407fba.png)

### Create a cookie

To add a new cookie, select the domain from the left pane, and enter the cookie string (according to https://tools.ietf.org/html/rfc6265#section-4.1) in the input box in the bottom-right corner of the screen.

![](https://cloud.githubusercontent.com/assets/681190/16949369/09af2460-4dd8-11e6-83db-1845afe54104.png)

Clicking the '+' button will add it to the app's cookie store under the relevant domain.

![](https://cloud.githubusercontent.com/assets/681190/16949373/0a169faa-4dd8-11e6-8c53-272ef7537733.png)

You can also add a cookie by setting a `Cookie` header, and sending a request to an appropriate URL in the main Postman window.

### Adding a domain

If you want to add a cookie for a domain that isn't present in the left pane, you can add one by entering the hostname (without the port, or the `http://`) in the input box on the left. Clicking the '+' button will add it to the domain listing. You can then add cookies for this domain by selecting it, and entering a new cookie value as described above.

![](https://cloud.githubusercontent.com/assets/681190/16949371/09ec4b4c-4dd8-11e6-8fc6-2dba4ad1ac07.png)

### Updating a cookie

To update an existing cookie, select the domain from the left pane, and the cookie you want to edit from the right pane. You can edit any property except the cookie name, and hit '+' to update. Changing the name will add a new cookie.

![](https://cloud.githubusercontent.com/assets/681190/16949370/09cb5e96-4dd8-11e6-9d28-ee21e501f875.png)
