---
title: "Documenting your API"
order: 65
page_id: "documenting-your-api"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Intro to collections"
    url: "/docs/postman/collections/intro-to-collections/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "HarperDB"
    url: "https://www.getpostman.com/case-studies/harperDB.pdf?_ga=2.170214630.754547870.1571851340-1454169035.1570491567"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "API documentation with Postman"
    url: "https://www.youtube.com/watch?v=Ayo_KdLLcTA"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Simplifying API documentation for a great first user experience"
    url: "https://blog.getpostman.com/2016/04/25/simplifying-api-documentation-for-a-great-first-user-experience/?_ga=2.202640215.754547870.1571851340-1454169035.1570491567"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Publishing your docs"
    url: "/docs/postman/api-documentation/publishing-your-docs/"

warning: false

---

You can automatically generate documentation for your Postman APIs. You can share your documentation privately or publish it on the Web. Postman generates and hosts documentation based on collections, synced in realtime and accessible via the browser. You can use documentation to collaborate with team members and partners, or to support developer adoption for your public APIs.

![Public Documentation](https://assets.postman.com/postman-docs/documentation-published.jpg)

## Contents

* [Generating your documentation](#generating-your-documentation)
    * [Documenting an existing collection](#documenting-an-existing-collection[)
    * [Creating documentation for a new collection](#creating-documentation-for-a-new-collection)
    * [Including detail in your docs](#including-detail-in-your-docs)
* [Accessing doc views](#accessing-doc-views)
* [Documentation environments](#documentation-environments)
* [Versioning your docs](#versioning-your-docs)

## Generating your documentation

Documentation is based on a Postman collection, so you can [generate it from an existing collection](#documenting-an-existing-collection[) or [create it in conjunction with a new collection](#creating-documentation-for-a-new-collection).

### Documenting an existing collection

To generate and view documentation for an existing collection from the Postman app, use the __Collections__ tab on the left to select the collection. Use the &#9654; button to open the collection detail, and select __View in web__ to open the documentation in the browser.

![View Docs](https://assets.postman.com/postman-docs/view-docs.jpg)

Alternatively, use the __New__ button, and select __API Documentation__. Choose __Select an existing collection__ and click the collection you want to view docs for.

![Document Collection](https://assets.postman.com/postman-docs/document-collection.jpg)

Enter or edit the markdown description of your collection and click __Save__.

![Collection Description](https://assets.postman.com/postman-docs/collection-description.jpg)

You will see a confirmation that your documentation is published, and a link you can visit to view it in the browser.

![Docs Link](https://assets.postman.com/postman-docs/docs-link.jpg)

You can also view documentation from the [web dashboard](https://web.postman.co/)—select __View all collections__, then select a collection to view its docs in the browser.

![Collections in Web](https://assets.postman.com/postman-docs/collections-web.jpg)

> By default your documentation is private, so only people you share the collection with will be able to see it. You can [publish your documentation](/docs/postman/api-documentation/publishing-your-docs/) for public viewing.

Some detail [is included in your documentation by default](#including-detail-in-your-docs), and you can optionally add further detail.

### Creating documentation for a new collection

You can create documentation from the Postman launch screen or using the __New__ button and choosing __API Documentation__. __Create a new collection__ will be selected by default. Add any initial requests you want to document within your new collection and click __Next__.

![Document Request](https://assets.postman.com/postman-docs/document-new-request.jpg)

Name the collection, enter a markdown description to display in your docs, and click __Save__.

![Collection Description](https://assets.postman.com/postman-docs/collection-description.jpg)

You will see a confirmation that your documentation is published, and a link you can visit to view it in the browser.

![Docs Link](https://assets.postman.com/postman-docs/docs-link.jpg)

> By default your documentation is private, so only people you share the collection with will be able to see it. You can [publish your documentation](/docs/postman/api-documentation/publishing-your-docs/) for public viewing.

### Including detail in your docs

Your docs will automatically include detail on your requests, with sample code in various client languages. Each collection / request listing indicates the method, URL, description, headers, request and response structures, and examples. Your docs will also include a [Run in Postman button](/docs/postman-for-publishers/run-button/using-run-button), allowing viewers to import the collection directly into the Postman app to try your requests out. Your documentation page will be structured to reflect the folders and requests in your collection.

You can add detail to your descriptions using [Markdown](/docs/postman/api-documentation/authoring-documentation/). Postman supports [GitHub-flavored Markdown](https://github.github.com/gfm/), so you can include various types of content, such as lists, tables, images, and links.

![Docs Folders](https://assets.postman.com/postman-docs/docs-folders.jpg)

For more on adding detail to your docs, see [Authoring documentation](/docs/postman/api-documentation/authoring-documentation/).

## Accessing doc views

By default your documentation is private, and viewable only to people you have [shared a collection](/docs/postman/collections/sharing-collections/) with. If you [publish your documentation](/docs/postman/api-documentation/publishing-your-docs/), anyone with the link can view it in a browser.

For more on accessing private and public docs, see [Viewing documentation](/docs/postman/api-documentation/viewing-documentation/).

> Public and private documentation pages receive 1000 free views per month. You can check your usage limits through the [Postman API](https://docs.api.getpostman.com) or the [account usage page](https://go.pstmn.io/postman-account-limits).

## Documentation environments

Use can use environments to set variables in your documentation.

## Versioning your docs
