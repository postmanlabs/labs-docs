---
categories:
  - "postman"
  - "api_documentation"
title: "Viewing documentation"
page_id: "viewing_documentation"
warning: false

---
Postman users can use two different web views while authoring documentation for their Postman Collections: private and public. 

All Collections are initialized with the private view. However, users must explicitly opt to publish their documentation for it to be available publicly. 

Private, unpublished Collections are only available to the author, while Collections shared in the Team Library can be accessed by the entire team. Published Collections can be viewed by anyone who has the URL.

### Viewing Private Documentation

Private documentation can only be viewed by its author unless the collection is shared within their Postman Pro or Postman Enterprise Team Library. 

Teammates with “Can View” permissions will be able to oversee progress, while teammates with “Can Edit” permissions will be able to collaborate in writing, revising, and updating documentation. 

You must be logged in to your Postman Account to view private documentation.

In the Postman app, hover your cursor over your Collection on the left-hand side, click “>”, then click “View in web”. 

IMAGE

To view documentation for a shared collection, navigate to your Team Library in your Postman app, locate the collection you’d like to view, then click the “View in web” button next to it.  

IMAGE

In this private web view, you’ll be able to see each request in the collection, their descriptions, and code snippets generated from the environment and language you’ve selected.

IMAGE

Note that this private URL is only accessible to Postman users logged in with the appropriate credentials — anyone without access to the collection itself will receive an error message upon attempting to view it.
To make this documentation available to others, you will need to publish it.

### Viewing Public Documentation

Public documentation is viewable via the URL that Postman generates when you publish it. This link will be displayed immediately and can be located later on in your Postman Dashboard. If you’ve added and verified a custom domain, then selected it while publishing, your documentation will be displayed there.

IMAGE








OLD
Each collection has a private and public documentation view, generated in real-time using the data synced to our servers. 

### Viewing Private Documentation

Private documentation is only accessible to you and your Postman Pro or Enterprise teammates. 

To view private documentation for a collection, you must be signed in to the Postman app. When signed in, your username displays in the top-right corner.

In the Postman app, expand the right angle bracket (**>**) next to any collection name to open the collections details view, and then click the **View in web** button.

[![collection details view](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/docs-private-view.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/docs-private-view.png)

To view documentation for your team’s collections in the Postman app, click the **View in Web** button in your [Team Library](/docs/postman/team_library/sharing). Then select the "Team Collections" view. You’ll be able to browse all folders and requests in the collection, and see how the requests and code snippets look with different environments selected.

[![view docs from team library](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/docs-teamlib-view.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/docs-teamlib-view.png)

[![view documentation](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/docs-viewing.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/docs-viewing.png)

This link will not work for anyone who does not have access to the collection itself. If it's a private collection, viewership will be restricted to you alone. If it's a shared collection, your Pro or Enterprise teammates will be able to view it as well.

To make this documentation available to other users, perhaps as a link on your website, you’ll need to [publish the documentation](https://app.getpostman.com/dashboard/collections/team){:target="_blank"}.

### Viewing Public Documentation

The public view is accessible through the public link that is generated when you publish your documentation. This public link will display after your documentation is published, and is also accessible through the **Published** dropdown in the private documentation view.

Public documentation can be viewed through the link that is generated when you publish your documentation. This public URL will appear after you click Publish Collection, but it is also accessible in your private documentation view by selecting Published in the dropdown menu.


[![public documentation link](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/docs-public-view.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/docs-public-view.png)

If you choose a verified custom domain, then your public documentation will also be available from your custom domain. For more information about using a custom domain, read about [adding and verifying custom domains](/docs/postman/api_documentation/adding_and_verifying_custom_domains).
