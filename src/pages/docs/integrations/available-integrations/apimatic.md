---
title: "APIMatic"
order: 163
page_id: "apimatic"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Grouping requests in collections"
    url: "/docs/sending-requests/intro-to-collections/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Why we became big believers in APIMatic's API transformer"
    url: "https://blog.postman.com/new-postman-pro-integration-apimatics-api-transformer/"
---

You can use Postman's APIMatic integration to back up your Postman collections in Swagger, RAML, API Blueprint, and other API description formats.

This integration allows APIMatic to convert your Postman collections into any major API description format, and save the resulting file into your designated GitHub repository.

If you don't already have a [GitHub account](https://github.com/), you'll need to create one.

## Configuring APIMatic Integration

From the **[Home](https://go.postman.co/home)** page select **[Integrations](https://go.postman.co/integrations)**.

![home page and integrations](https://assets.postman.com/postman-docs/apimatic-home.jpg)

Search and select **APIMatic**.

![browse and select APIMatic](https://assets.postman.com/postman-docs/apimatic-browse-all.jpg)

Select **Add Integration** to authorize a periodic backup of your collection to your GitHub repository.

![auth APIMatic](https://assets.postman.com/postman-docs/apimatic-github-auth.jpg)

> If you are not signed in to GitHub, you will be prompted to log in.

[![github apimatic](https://assets.postman.com/postman-docs/apimatic-save-config.jpg)](https://assets.postman.com/postman-docs/apimatic-save-config.jpg)

To back up a collection periodically to a GitHub repository:

* Enter your [API key from APIMatic](https://docs.apimatic.io/manage-apis/create-or-import-api#view-api-integration-keys).
* Select a collection.
* Select a repository.
* Specify a directory in the repository where you want to add the collection.
* Enter a filename for the directory in the repository.
* Select the format in which you want to save the collection, such as Postman 2.0 or APIMatic format.
* Specify the branch where you want to add the collection. _Note that the branch you want to back up your collection to must already exist._

Click **Add Integration**.

APIMatic converts your collection to the format of your choice and pushes it to your GitHub repository. This integration runs once a day at 1200UTC. Any changes you make to your collection will be picked up by the converter in its subsequent run. If no updates have been made to your collection, no updates will be pushed to GitHub.
