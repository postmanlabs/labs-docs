---
title: "Intro to API documentation"
page_id: "intro_to_api_documentation"
warning: false

---

Postman's API Documentation feature lets you view private API documentation or share public API documentation in a beautifully formatted web page. 

Postman generates and hosts browser-based API documentation for your collections automatically in real-time. Each collection has a private and public documentation view that Postman generates from synced data in the servers. 

### Private documentation view

**Postman app**

To [access the private view](/docs/v6/postman/api_documentation/viewing_documentation) of your team documentation, go to the sidebar in the Postman app and click the **>** icon in the collection you want to view. Then click "View in web" to view the documentation for the collection.

[![view doc sidebar](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/view-web-documentation.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/view-web-documentation.png)

**Postman web**

To access the private view of your team documentation, go to your [workspaces dashboard](https://app.getpostman.com/dashboard). 

Click the "View all collections" link. 

[![view all collections](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/view-all-collections.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/view-all-collections.png)

Click a collection name to view the documentation.

[![click the collection](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/click-collection-private-view.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/click-collection-private-view.png)

### Public documentation view

After you [publish your documentation](/docs/v6/postman/api_documentation/publishing_public_docs), you can use the public link to view the documentation. 

The public link displays after you publish your documentation. A link to this published documentation is also accessible in the "Published" dropdown from the private documentation view.

### Creating documentation

You can create documentation in a few different ways:
* From the [**New** button](/docs/v6/postman/launching_postman/newbutton#create-documentation)
* From the Postman app launch screen following similar steps as the **New** button
* From an existing collection by [viewing the private version of the docs](/docs/v6/postman/api_documentation/viewing_documentation) or [publishing public docs](/docs/v6/postman/api_documentation/publishing_public_docs)

### What gets automatically generated?

Documentation for your API includes:

   *   Sample requests, headers, and other metadata
   *   Descriptions associated with requests, folders, and collections
   *   Generated code snippets in some of the most popular programming languages

Postman uses ordered requests and folders to organize documentation in sections to reflect the structure of your collection.

You can customize descriptions using [Markdown](/docs/v6/postman/api_documentation/how_to_document_using_markdown) styling with embedded graphics to complement your documentation. 

We support GitHub flavored markdown so you can include tables. When including block elements, make sure you leave an empty line before and after to avoid any rendering issues.

[![example of published documentation](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-doc-markdown.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-doc-markdown.png)

### Link to sections within documentation

To include helpful cross-references for your readers, you can hyperlink to these parts within the generated documentation:

  * Introduction headers
  * Requests
  * Folders
  * Responses

The links are generated using IDs for the requests, folders and responses. If you click on any of these, the URL in your browser should update to a link which points to this specific part of the documentation. You can hyperlink to these parts using this link.

[![anchor tag id](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/anchor-id.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/anchor-id.png)

**Note:** you cannot link to arbitrary parts of the documentation by manually creating an ID.

### Commenting on API Documentation 

Commenting is a new function that will help you to collaborate more effectively by posting your comments. You can post comments on your API documentation to share valuable information with your colleagues. You can save interactions with your teammates, add information that does not fit anywhere else, and can have discussions and more.

You can post comments on your documentation by navigating to the comments section:

1. From the Build View
2. From the Browse View
3. From the Dashboard View

#### The Build View

In the Build view, point your cursor to the collection name and click the small arrow and then click 'View in web' as illustrated in the below screen:

[![Comments BuildView](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Comments_Main_Proc.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Comments_Main_Proc.png)

The comments section appears, as shown below:

[![Comments New](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Comments_New1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Comments_New1.png)

Click Comments to bring up the 'Add comment' dialog, as illustrated above. Write your comment and click 'Add comment'. Your comment is now posted. 

#### The Browse View

In the Browse view, point your cursor to the collection name and click any collection name to go to the comments section. Follow the same procedure as described above to post your comments:

[![Comments BrowseView](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Comments-Browse-View.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Comments-Browse-View.png)


#### The Dashboard View

Point your cursor to any workspace view and click a collection name available there to go to the comments section. Follow the same procedure as described above to post your comments:

[![Comments BuildView](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Comments_Dashboard_View1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Comments_Dashboard_View1.png)


### Free documentation views with your Postman account
 
Public and private documentation each receive 1000 free views per month. You can check your usage limits through the [Postman API](https://docs.api.getpostman.com){:target="_blank"} or the [account usage page](https://go.pstmn.io/postman-account-limits).
