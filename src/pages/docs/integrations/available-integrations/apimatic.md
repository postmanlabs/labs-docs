---
title: "APIMatic"
order: 163
page_id: "apimatic"
updated: 2021-07-14
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

Postman's APIMatic integration converts your Postman collections to any major API description format, including Swagger, RAML, and API Blueprint, and save the resulting file on GitHub.

## Prerequisites

To set up an APIMatic integration with Postman, you will need:

* An [APIMatic account](https://www.apimatic.io/account/register)
* An [APIMatic integration key](https://docs.apimatic.io/manage-apis/get-api-keys/)
* A [GitHub account](https://github.com/)
* A GitHub repository in which to save your collection

## Configuring an APIMatic integration

To back up a collection periodically to a GitHub repository:

1. On your Postman **[Home](https://go.postman.co/home)** page, select **[Integrations](https://go.postman.co/integrations)**.
1. Type **APIMatic** into the search bar and select the result.

    ![browse and select APIMatic](https://assets.postman.com/postman-docs/apimatic-browse-all.jpg)

1. Select **Add Integration**.
1. Your browser will open a new Authorize Postman page that gives Postman access to your GitHub repositories. Select Authorize postmanlabs. Once the authorization process is complete, the page will tell you to close the tab and continue in Postman.

    > If you are not signed in to GitHub, you will be prompted to log in.

1. In Postman, you will be prompted to enter the following information to create an integration:
    *  [APIMatic integration key](https://docs.apimatic.io/manage-apis/get-api-keys/)
    *  A nickname for the integration
    *  The Postman workspace that the collection you want to back up belongs to
    *  The Postman collection you want to back up
    *  The GitHub repository your backed up collection will be saved in
    *  The directory in the GitHub repository. If a directory with the name you enter does not exist, one will be created when you add the integration.
    *  The filename for the backup file
    *  The format in which you want to save the collection
    *  The name of the GitHub branch to save the collection to. This branch must already exist, and the integration process will fail if you specify an invalid branch name.
1. Select **Add Integration**.

    [![github apimatic](https://assets.postman.com/postman-docs/apimatic-save-config.jpg)](https://assets.postman.com/postman-docs/apimatic-save-config.jpg)

APIMatic converts your collection to the format of your choice and pushes it to the GitHub repository you specified. This integration runs once a day at 1200UTC. If you make any changes to your collection, they will be picked up by the converter in its subsequent run. If no updates are made to your collection, no updates will be pushed to GitHub.
