---
categories:
  - "postman"
  - "api_documentation"
title: "Intro to API documentation"
page_id: "intro_to_api_documentation"
warning: false

---

Postman's API documentation feature lets you share public or private API documentation in a beautifully formated web page. 

Postman generates and hosts browser-based API documentation for your collections automatically in real-time. Each collection has a private and public documentation view that Postman generates from synced data in the servers. 

To [access the private view](/docs/postman/api_documentation/viewing_documentation){:target="_blank"}, click "View in web" in the Postman app or in the "Team Library". 

When you [publish your documentation](/docs/postman/api_documentation/publishing_public_docs){:target="_blank"}, you can use the public link to view the documentation. The public link displays after you publish your documentation. The documentation is also accessible in the "Published" dropdown in the private documentation view.

### Creating a documentation

You can create documentation from the:
* **New** button 
* Launch modal

<br>

#### New button

1. In the header toolbar, click the **New** button.

[![new button](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/HeaderToolBar.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/HeaderToolBar.png)

The "Create New" modal appears.
[![create screen](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/create_new_screen.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/create_new_screen.png)

**Note**: At the bottom of the modal you can select "Show this window at launch" to indicate whether you want the "Create New" screen to display each time you open Postman.

<ol start="2">
  <li>Click "Documentation".</li>
 </ol>

[![create docs](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/create_doc.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/create_doc.png)


3. In the "Create API Documentation" modal, you can create documentation for a "New API", "My Collections", and "Team Library". 

   * New API
     
     * Select the method, enter a request URL, and click the **Next** button.
     * Enter the name and description and click the **Create** button.
     
     The "Next Steps" modal appears with information about the documentation and provides suggestions about next steps.
     
   * My Collections
   
     * Select a collection, add or edit the description, and click the **Create** button. 
     
     The "Next Steps" screen appears with information about the documentation and provides suggestions about next steps.
     
   * Team Library
   
     * Select a shared collection.
     * Add or edit a description, and click the **Create** button.
     
     The "Next Steps" screen appears with information about the documentation and provides suggestions about next steps.
     
#### Launch screen

The "Create New" modal appears by default when you launch Postman. At the bottom of the modal you can select ‘Show this window at launch’ to indicate whether you want the 'Create New' modal to display each time you open Postman.

1. Open Postman.
2. In the "Create New" screen, click "Documentation".
3. Follow step 3 in previous **New** button section. 
   

### What gets automatically generated?

Documentation for your API includes the following:

   *   Sample requests, headers, and other metadata
   *   Descriptions associated with requests, folders, and collections
   *   Generated code snippets in some of the most popular programming languages

Postman uses ordered requests and folders to organize documentation in sections to reflect the structure of your collection.

You can customize descriptions using [Markdown](/docs/postman/api_documentation/how_to_document_using_markdown){:target="_blank"} styling with embedded graphics to complement your documentation. 

We support GitHub flavored markdown so you can include tables. When including block elements, make sure you leave an empty line before and after to avoid any rendering issues.

[![example of published documentation](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59167235.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59167235.png)

### Free documentation views with your Postman account

Your Postman account gives you a limited number of free documentation views per month. You can check your usage limits through the [Postman Pro API](https://docs.api.getpostman.com){:target="_blank"} or the [account usage page](https://go.pstmn.io/postman-account-limits){:target="_blank"}.
