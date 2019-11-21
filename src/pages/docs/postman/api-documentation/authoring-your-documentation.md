---
title: "Authoring your documentation"
order: 68
page_id: "authoring-your-documentation"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Intro to collections"
    url: "/docs/postman/collections/intro-to-collections/"
  - type: link
    name: "Documenting your API"
    url: "/docs/postman/api-documentation/documenting-your-api/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Imgur"
    url: "https://www.getpostman.com/case-studies/Imgur.pdf?_ga=2.207421525.754547870.1571851340-1454169035.1570491567"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Public API documentation"
    url: "/docs/postman-for-publishers/public-api-docs/"

warning: false
---

You can include information in your API documentation using [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet). Postman will [populate various parts of your documentation](/docs/postman/api-documentation/documenting-your-api#including-detail-in-your-docs) from the information associated with the relevant collection. Your Markdown content can include standard structures and formatting such as headings, lists, images, links, bold / emphasis, code samples, blockquotes, and tables.

## Contents

* [Descriptions](#descriptions)
* [Request detail](#request-detail)
* [Examples](#examples)
* [Links](#links)
* [Images](#images)
* [Markdown demo collection](#markdown-demo-collection)
* [Next steps](#next-steps)

## Collection descriptions

You can include Markdown descriptions in your documentation, for collections and the requests within them.

You can add a description when you create a collection, or by selecting the collection and using the arrow button (&#9654;).

![Add Description](https://assets.postman.com/postman-docs/add-description.jpg)

## Request detail

## Examples

## Links

To include helpful cross-references for your readers, you can hyperlink to these parts within the generated documentation:

* Introduction headers
* Requests
* Folders
* Responses

The links are generated using IDs for the requests, folders and responses. If you click on any of these, the URL in your browser should update to a link which points to this specific part of the documentation. You can hyperlink to these parts using this link.

[![anchor tag id](https://assets.postman.com/postman-docs/anchor-id.png)](https://assets.postman.com/postman-docs/anchor-id.png)

**Note:** You cannot link to arbitrary parts of the documentation by manually creating an ID.

## Images

## Markdown demo collection

Postman contains a collection to test [Markdown styling](https://documenter.getpostman.com/view/4630964/S1LsXVJy) inside Postman or in other services that render Markdown. The descriptions in the collection contain Markdown syntax and some of them have links to HTML pages of their rendered version.

[![markdown reference](https://assets.postman.com/postman-docs/59188697.png)](https://assets.postman.com/postman-docs/59188697.png)

Postman supports Markdown as a way to style text descriptions for requests, collections, and folders in collections. You can even embed screenshots and other images for more descriptive flair. Learn more about [where Postman renders Markdown](/docs/postman/collections/using-markdown-for-descriptions/).

[![example of markdown in collection description](https://assets.postman.com/postman-docs/WS-docs-markdown-p2.png)](https://assets.postman.com/postman-docs/WS-docs-markdown-p2.png)

When including block elements, make sure you leave an empty line before and after to avoid any rendering issues.

## Next steps
