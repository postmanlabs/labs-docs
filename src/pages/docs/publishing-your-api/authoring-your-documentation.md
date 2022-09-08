---
title: "Authoring your docs"
updated: 2022-07-19
search_keyword: "images, upload image, uploading images"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Grouping requests in collections"
    url: "/docs/sending-requests/intro-to-collections/"
  - type: link
    name: "Documenting your API"
    url: "/docs/publishing-your-api/documenting-your-api/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "Introducing Postman’s WYSIWYG Editing Experience"
    url: "https://blog.postman.com/introducing-postmans-wysiwyg-editing-experience/"
  - type: link
    name: "Postman Editor Now Supports Uploading Images"
    url: "https://blog.postman.com/postman-editor-now-supports-uploading-images/"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Imgur"
    url: "https://www.postman.com/case-studies/imgur/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Publishing your docs"
    url: "/docs/publishing-your-api/publishing-your-docs/"
---

Postman [automatically generates documentation](/docs/publishing-your-api/documenting-your-api/) for every collection you create. The documentation includes all of the requests in your collection, along with examples, authorization details, and example code.

To help your teammates ([or the world](/docs/publishing-your-api/publishing-your-docs/)) better understand what you're building, add detailed descriptions to your collection and the items in it. Use the Postman editor to view how your content will look as you author it. Or use the classic Markdown editor to structure and format your descriptions using [Markdown syntax](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet). All of your descriptions are included in the documentation for your collection.

> You can also add a description when [creating a new request](/docs/sending-requests/requests/#creating-requests).

## Contents

* [Adding descriptions to your documentation](#adding-descriptions-to-your-documentation)
    * [Authoring descriptions in the Postman editor](#authoring-descriptions-in-the-postman-editor)
    * [Authoring descriptions in Markdown](#authoring-descriptions-in-markdown)
    * [Selecting a default documentation editor](#selecting-a-default-documentation-editor)
    * [Adding descriptions to parameters and headers](#adding-descriptions-to-parameters-and-headers)
* [Including authorization details](#including-authorization-details)
* [Including examples](#including-examples)
* [Adding links](#adding-links)
* [Adding images](#adding-images)
* [Finding help and inspiration](#finding-help-and-inspiration)

## Adding descriptions to your documentation

Use descriptions to tell people who use your collection more about what your collection does and the purpose of each of request. Structure your descriptions with headings and add content such as text, tables, images, and links.

To add or edit the description for an existing collection, folder, or request:

1. Select **Collections** in the sidebar, and then select a collection, folder, or request.
1. Select the documentation icon <img alt="Documentation icon" src="https://assets.postman.com/postman-docs/documentation-icon-v8-10.jpg#icon" width="16px"> in the context bar.
1. Select the edit icon <img alt="Edit icon" src="https://assets.postman.com/postman-docs/documentation-edit-icon-v8-10.jpg#icon" width="18px"> next to the description.
1. Author your description using the visual [Postman editor](#authoring-descriptions-in-the-postman-editor) or the classic [Markdown editor](#authoring-descriptions-in-markdown). Both are compatible, so feel free to switch between the two editors as you work.

    <img alt="Switching editors" src="https://assets.postman.com/postman-docs/documentation-editor-menu-v9-1.jpg" width="560px">

1. When you're finished, select **Save** to save your documentation. If you ever need to make changes, you can edit the description again.

> To give users even more details about requests in your collection, add descriptions to the request [parameters and headers](#adding-descriptions-to-parameters-and-headers).

### Authoring descriptions in the Postman editor

To author a description using rich text editing tools, select the **Postman editor** option. The Postman editor enables you to author a description without having to write any Markdown code. Use the tools on the toolbar to work with text and other content, as you would in a typical word processor. Or use common keyboard shortcuts to format text, like **⌘+B** or **Ctrl+B** to make text bold.

<img alt="Postman editor" src="https://assets.postman.com/postman-docs/documentation-use-postman-editor-v9-1.jpg" width="560px">

**View the tooltips to get help as you work.** Hold your cursor over an item on the toolbar to see a description of the tool and the associated keyboard shortcut. If all of the tools aren't visible on the toolbar, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px">.

<img alt="Postman editor toolbar" src="https://assets.postman.com/postman-docs/documentation-wysiwyg-toolbar-v9-1.jpg" width="560px">

**Create tables without Markdown.** No need to fuss with Markdown code to get your tables to work. To add a table, select the **Table** tool. To add or remove columns or rows, or to delete the table, select a cell and then select the shortcut menu.

<img alt="Postman editor table shortcuts" src="https://assets.postman.com/postman-docs/documentation-wysiwyg-table-tool-v9-1.jpg" width="560px">

**The Postman editor understands Markdown syntax.** If you're comfortable using Markdown, enter any standard [Markdown code](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) to format text. For example, enter `#` followed by a space to start a new heading, or enter `---` to add a horizontal line. To reuse documentation that's already written in Markdown, copy the existing Markdown code and paste it into the editor to instantly format it.

> If you copy content from the Postman editor, the content will retain its formatting when you paste it into another application like a word processor or an email.

<img alt="Using Markdown shortcuts" src="https://assets.postman.com/postman-docs/documentation-trigger-markdown-v9-1.gif" width="558px" style="border: 1px solid #4a4a4a">

### Authoring descriptions in Markdown

To author a description using Markdown, select the **Classic Markdown editor** option. Use standard [Markdown syntax](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) to create your content:

* Structure content with headings, lists, and tables
* Format text with bold, emphasis, and blockquotes
* Add images, links, and code blocks

As you work, select the **Preview** tab to review how your documentation will appear and to make sure the formatting is correct. To continue editing, select the **Markdown** tab.

> Leave a blank line before and after [block elements](https://daringfireball.net/projects/markdown/syntax#block) (such as headings, paragraphs, and lists) to avoid any formatting issues.

<img alt="Markdown editor" src="https://assets.postman.com/postman-docs/documentation-use-markdown-editor-v9-1.jpg" width="560px">

### Selecting a default documentation editor

You can choose the default editor you want to use for editing documentation descriptions in Postman. When you edit a description, Postman will switch to your preferred editor. (You can still switch between the Postman and Markdown editors while editing a description.)

1. Select the settings icon <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px"> in the header and then select **Settings**.
1. Under **User Interface**, select a **Default documentation editor** (Postman editor or Markdown editor).

### Adding descriptions to parameters and headers

Add descriptions to parameters and headers to help others understand and use the requests in your collection. Open a request and enter the description in the box next to the key-value pair.

![Parameter descriptions](https://assets.postman.com/postman-docs/documentation-parameter-descriptions.jpg)

The parameter and header descriptions are visible to people who have access to your collection or anyone viewing your [published documentation](/docs/publishing-your-api/publishing-your-docs/). The descriptions appear in the documentation along with the request, next to the parameter or header name.

> All key-value pairs are included in your documentation even if their check boxes aren't selected. Use the description to note which parameters and headers are required and which are optional. Anyone using your collection can choose which key-value pairs to include when sending requests or [generating code snippets](/docs/sending-requests/generate-code-snippets/).

## Including authorization details

Your documentation automatically includes the type of authorization required to access your endpoints. The authorization details appear below the collection description and also below each request in your documentation.

If you [specify authorization details](/docs/sending-requests/authorization/#specifying-authorization-details) for the collection, those authorization requirements are inherited by every request in the collection. If one of your endpoints requires a different authorization type, open the request and [change the authorization details](/docs/sending-requests/authorization/#inheriting-authorization). The changes are reflected in your documentation.

<img alt="Authorization type in documentation" src="https://assets.postman.com/postman-docs/documentation-authorization-v8-10.jpg" width="569px">

## Including examples

Examples are paired requests and responses that show your endpoints in action. Any [examples you add to a collection](/docs/sending-requests/examples/#adding-an-example) are automatically included in the documentation. For each request, your documentation shows the example code snippets as well the example response body and headers.

> Examples are displayed when you [view the complete documentation](/docs/publishing-your-api/viewing-documentation/#viewing-documentation-for-a-collection) for a collection or when you [view published documentation](/docs/publishing-your-api/viewing-documentation/#viewing-public-documentation).

<img alt="Examples in documentation" src="https://assets.postman.com/postman-docs/documentation-including-examples-v9.jpg" width="663px">

## Adding links

Use links to direct users to your repository, web site, or other online resources.

* To add a link using the Postman editor, select the **Link** tool. Paste or enter the URL and the link text, and then select **Add**. (If you need to change the link later, select it and then select the edit icon <img alt="Edit icon" src="https://assets.postman.com/postman-docs/documentation-edit-icon-v8-10.jpg#icon" width="18px">.)

    <img alt="Adding a link" src="https://assets.postman.com/postman-docs/documentation-link-tool-v9-1.jpg" width="560px">

* To add a link using the Markdown editor, use the following syntax:

    ```md
    [link text to display](https://your-link-url.com)
    ```

## Adding images

Images liven up your documentation and help your ideas come across with more clarity. You can upload an image file from your computer or embed an image that's hosted online.

### Uploading an image

To upload an image using the Postman editor, select the **Image** tool and select **Browse**. Select the image you want to upload and select **Open**. The Postman editor supports GIF, JPG, PNG, and SVG formats. The maximum supported image size is 5 MB.

> You can also upload an image by copying and pasting an image into the Postman editor, or by dragging an image file into the Postman editor.

<img alt="Uploading an image" src="https://assets.postman.com/postman-docs/documentation-upload-image-v9-23.jpg" width="542px">

### Embedding an image

Your image must be hosted online (for example, on a website) before you can embed it in your documentation.

* To embed an image using the Postman editor, select the **Image** tool and select **Embed URL**. Paste or enter the URL of the image, and then select **Embed**.

    <img alt="Embedding an image" src="https://assets.postman.com/postman-docs/documentation-embed-image-v9-23.jpg" width="542px">

* To embed an image using the Markdown editor, use the following syntax:

    ```md
    ![image alt text](https://your-image-location.com)
    ```

### Editing images

You can change an image after uploading or embedding it:

* To change an uploaded image in the Postman editor, first select it and select the delete icon <img alt="Delete icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px">. Then [upload a new image](#uploading-an-image).

* To change an embedded image in the Postman editor, select it and select the edit icon <img alt="Edit icon" src="https://assets.postman.com/postman-docs/documentation-edit-icon-v8-10.jpg#icon" width="18px">. Enter the new image URL and select **Edit**.

* To change an image in the Markdown editor, edit the Markdown code as needed.

* To resize an image, select the image in the Postman editor and drag the resize handles. You can also specify a new value for `width` in the Markdown editor.

* To add a caption, select the image in the Postman editor and enter a caption below the image. To remove the caption, select the image and select the delete icon <img alt="Delete icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px"> above the caption.

### Image storage limits

If you are on a [Postman Free plan](https://www.postman.com/pricing/) and aren't part of a team, the total size of your uploaded images is limited to 20 MB. If you are part of a team ([free or paid plans](https://www.postman.com/pricing/)), the total size of your team's uploaded images is limited to 100 MB.

To check how much storage you're using, go to your [billing dashboard](http://go.postman.co/billing) and select **Resource Usage**. The amount of space used by uploaded images and files appears under **Storage Usage**. To upgrade your available storage, contact [Postman support](https://www.postman.com/support/).

> When you reach 90% of your storage limit and above, you will get a warning each time you try to add an image.

## Finding help and inspiration

**Need some help using Markdown?** Check out the Postman [Markdown demo collection](https://documenter.postman.com/view/4630964/S1LsXVJy) to learn how Markdown is formatted in published documentation. Select the **Run in Postman** button to add the demo collection to your workspace and view the Markdown code.

![Markdown demo collection](https://assets.postman.com/postman-docs/documentation-markdown-demo-v8-10.jpg)

**Looking for some documentation inspiration?** Browse through the Public API Network to find examples of great documentation created in Postman.

1. Open the [Public API Network](https://www.postman.com/explore) page or select **Explore** in the Postman header.
1. Select **Teams**, **Workspaces**, **APIs**, or **Collections** in the left pane.

    ![Public API Network page](https://assets.postman.com/postman-docs/documentation-explore-docs-v8-10.jpg)

1. Select a team, workspace, API, or collection to access documentation authored by others who are part of the Public API Network.

    ![Documentation example](https://assets.postman.com/postman-docs/documentation-docs-example-v8-10.jpg)
