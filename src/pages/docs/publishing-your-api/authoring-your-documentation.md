---
title: "Authoring your docs"
order: 102
page_id: "authoring_your_documentation"
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
    name: "Case Studies"
  - type: link
    name: "Imgur"
    url: "https://www.postman.com/case-studies/imgur/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Publishing your docs"
    url: "/docs/publishing-your-api/publishing-your-docs/"

warning: false
---

Postman [automatically generates documentation](/docs/publishing-your-api/documenting-your-api/) for every collection you create. The documentation includes all of the requests in your collection, along with examples, authorization details, and sample code.

To help your teammates ([or the world](/docs/publishing-your-api/publishing-your-docs/)) better understand what you're building, add detailed descriptions to your collection and the items in it. Use standard [Markdown syntax](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) to structure and format your descriptions. All of your descriptions are included in the documentation for your collection.

> You can also add a description when [creating a new request](/docs/sending-requests/requests/#creating-requests).

## Contents

* [Adding descriptions to your documentation](#adding-descriptions-to-your-documentation)
    * [Authoring descriptions in Markdown](#authoring-descriptions-in-markdown)
    * [Adding descriptions to parameters and headers](#adding-descriptions-to-parameters-and-headers)
* [Including authorization details](#including-authorization-details)
* [Including examples](#including-examples)
* [Adding links](#adding-links)
* [Adding images](#adding-images)
* [Finding help and inspiration](#finding-help-and-inspiration)
* [Next steps](#next-steps)

## Adding descriptions to your documentation

Use descriptions to tell people who use your collection more about what your collection does and the purpose of each of request. Structure your descriptions with headings and add content such as text, tables, images, and links.

To add or edit the description for an existing collection, folder, or request:

1. Select **Collections** in the sidebar, and then select a collection, folder, or request.
1. Select **Documentation** <img alt="Documentation icon" src="https://assets.postman.com/postman-docs/documentation-icon-v8-10.jpg" width="16px" style="vertical-align:middle;margin-bottom:5px"> in the context bar.
1. Select the edit button <img alt="Edit icon" src="https://assets.postman.com/postman-docs/documentation-edit-icon-v8-10.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> next to the description.
1. Author your description using [Markdown](#authoring-descriptions-in-markdown).
1. When you're finished, select **Save** to save your documentation. If you ever need to make changes, just edit the description again.

> To give users even more details about requests in your collection, add descriptions to the request [parameters and headers](#adding-descriptions-to-parameters-and-headers).

### Authoring descriptions in Markdown

To author a description using the Markdown editor, select the **Markdown** option. Use standard [Markdown syntax](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) to create your content:

* Structure content with headings, lists, and tables
* Format text with bold, emphasis, and blockquotes
* Add images, links, and code blocks

As you work, select the **Preview** tab to see how your documentation will appear and to make sure it's formatted correctly. To continue editing, select the **Markdown** tab.

> Leave a blank line before and after [block elements](https://daringfireball.net/projects/markdown/syntax#block) (such as headings, paragraphs, and lists) to avoid any formatting issues.

<img alt="Markdown editor" src="https://assets.postman.com/postman-docs/documentation-markdown-editor-no-wysiwyg.jpg" width="567px">

### Adding descriptions to parameters and headers

Add descriptions to parameters and headers to help others understand and use the requests in your collection. Open a request and type the description in the box next to the key-value pair.

![Parameter descriptions](https://assets.postman.com/postman-docs/documentation-parameter-descriptions.jpg)

The parameter and header descriptions are visible to people who have access to your collection or anyone viewing your [published documentation](/docs/publishing-your-api/publishing-your-docs/). The descriptions appear in the documentation along with the request, next to the parameter or header name.

> All key-value pairs are included in your documentation even if their check boxes are not selected. Use the description to note which parameters and headers are required and which are optional. Anyone using your collection can choose which key-value pairs to include when sending requests or [generating code snippets](/docs/sending-requests/generate-code-snippets/).

## Including authorization details

Your documentation automatically includes the type of authorization required to access your endpoints. The authorization details appear below the collection description and also below each request in your documentation.

If you [specify authorization details](/docs/sending-requests/authorization/#specifying-authorization-details) for the collection, those authorization requirements are inherited by every request in the collection. If one of your endpoints requires a different authorization type, open the request and [change the authorization details](/docs/sending-requests/authorization/#inheriting-auth). The changes are reflected in your documentation.

<img alt="Authorization type in documentation" src="https://assets.postman.com/postman-docs/documentation-authorization-v8-10.jpg" width="569px">

## Including examples

Examples are paired requests and responses that demonstrate your endpoints in action. Any [examples you add to a collection](/docs/sending-requests/examples/#adding-an-example) are automatically included in the documentation. For each request, your documentation shows the example code snippets as well the example response body and headers.

> Examples are displayed only when you [view the complete documentation](/docs/publishing-your-api/viewing-documentation/#viewing-private-documentation) for a collection or when you [view published documentation](/docs/publishing-your-api/viewing-documentation/#viewing-public-documentation).

<img alt="Examples in documentation" src="https://assets.postman.com/postman-docs/documentation-including-examples-v8-10.jpg" width="663px">

## Adding links

Use links to direct users to your repository, web site, or other online resources.

To add a link using Markdown, use the the following syntax:

```md

[link text to display](https://your-link-url.com)

```

## Adding images

Images liven up your documentation and help your ideas come across more clearly. Your image must be hosted online before you can add it to your documentation.

To add an image using Markdown, use the following syntax:

```md
![image alt text](https://your-image-location.com)
```

## Finding help and inspiration

**Need some help using Markdown?** Check out the Postman [Markdown demo collection](https://documenter.postman.com/view/4630964/S1LsXVJy) to see how Markdown is formatted in published documentation. Select the **Run in Postman** button to add the demo collection to your workspace and view the Markdown code.

![Markdown demo collection](https://assets.postman.com/postman-docs/documentation-markdown-demo-v8-10.jpg)

**Looking for some documentation inspiration?** Browse through the Public API Network to find examples of great documentation created in Postman.

1. Navigate to the [Public API Network](https://www.postman.com/explore) page or select **Explore** in the Postman header.
1. Select **Teams**, **Workspaces**, **APIs**, or **Collections** in the left pane.

    ![Public API Network page](https://assets.postman.com/postman-docs/documentation-explore-docs-v8-10.jpg)

1. Select a team, workspace, API, or collection to see documentation authored by others who are part of the Public API Network.

    ![Documentation example](https://assets.postman.com/postman-docs/documentation-docs-example-v8-10.jpg)

## Next steps

To make your documentation publicly available, see [Publishing your docs](/docs/publishing-your-api/publishing-your-docs/).
