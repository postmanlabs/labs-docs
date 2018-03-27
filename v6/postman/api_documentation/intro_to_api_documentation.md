---
title: "Intro to API documentation"
page_id: "intro_to_api_documentation"
warning: false

---

Postman's API Documentation feature lets you share public or private API documentation in a beautifully formated web page. 

Postman generates and hosts browser-based API documentation for your Collections automatically in real-time. Each collection has a private and public documentation view that Postman generates from synced data in the servers. 

### Private documentation view

**Postman app**

To [access the private view](/docs/v6/postman/api_documentation/viewing_documentation){:target="_blank"} of your team documentation, go to the sidebar and click the **<** icon of a collection. Then click "View in web" to generate the documentation for the collection.

[![view doc sidebar](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/view-web-documentation.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/view-web-documentation.png)

**Postman web**

To access the private view of your team documenation, go to your [workspaces dashboard](https://app.getpostman.com/dashboard){:target="_blank"}. Click the "View all collections" link. Then click the collection you want (/docs/v6/postman/workspaces/using_workspaces#publishing-collections){:target="_blank"}" to generate the documentation.

[![click the collection](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/click-collection-private-view.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/click-collection-private-view.png)

### Public documentation view

When you [publish your documentation](/docs/v6/postman/api_documentation/publishing_public_docs){:target="_blank"}, you can use the public link to view the documentation. The public link displays after you publish your documentation. The documentation is also accessible in the "Published" dropdown in the private documentation view.

### Creating documentation

You can create documentation from the:
* **New** button 
* Launch screen

<br>

#### New button

In the header toolbar, click the **New** button.

[![new button](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-HeaderToolBar-new+button1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-HeaderToolBar-new+button1.png)

The **Create New** tab appears.
[![create screen](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-documentation-createnewTab-p2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-documentation-createnewTab-p2.png)

**Note**: At the bottom, you can select "Show this window at launch" to indicate whether you want the **Create New** tab to display each time you open Postman.

Click "API Documentation".
 
Select if you want to create documentation for a new API or an existing or team collection. If you create a new API to document, you must select a request method and enter the request URL, description, and status code. If you use an existing or team collection to document, you must select a collection from a list of existing or team collections.


[![configure docs](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-documentation-configure-p2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-documentation-configure-p2.png)

After you select or create the request you want to document, click the **Next** button.
 
In the **Configure documentation** tab, you must:

* Enter the name of the documentation.
* Add a description of the documentation. You can use markdown to add headings, lists, code snippets, and so on in your description.

[![configureTab docs](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-documentation-configureTab-p2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-documentation-configureTab-p2.png)

Click the **Create** button.
      
In the **Next steps** tab, see a list of suggested next steps to maximize the effectiveness of your documentation.

[![nextSteps docs](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-documentation-nextsteps-p2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-documentation-nextsteps-p2.png)
     
#### Launch screen

The **Create New** tab appears by default when you launch Postman. 

Open the Postman app.

In the **Create New** tab, click "Documentation".

Follow the steps outlined in the previous **New** button section. 
   
**Note**: At the bottom, you can select "Show this window at launch" to indicate whether you want the **Create New** tab to display each time you open Postman.


### What gets automatically generated?

Documentation for your API includes:

   *   Sample requests, headers, and other metadata
   *   Descriptions associated with requests, folders, and collections
   *   Generated code snippets in some of the most popular programming languages

Postman uses ordered requests and folders to organize documentation in sections to reflect the structure of your collection.

You can customize descriptions using [Markdown](/docs/v6/postman/api_documentation/how_to_document_using_markdown){:target="_blank"} styling with embedded graphics to complement your documentation. 

We support GitHub flavored markdown so you can include tables. When including block elements, make sure you leave an empty line before and after to avoid any rendering issues.

[![example of published documentation](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-doc-markdown.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-doc-markdown.png)

### Free documentation views with your Postman account
 
Public and private documentation each receive 1000 free views per month. You can check your usage limits through the [Postman API](https://docs.api.getpostman.com){:target="_blank"} or the [account usage page](https://go.pstmn.io/postman-account-limits){:target="_blank"}.
