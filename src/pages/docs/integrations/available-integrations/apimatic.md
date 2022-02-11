---
title: "APIMatic"
order: 163
page_id: "apimatic"
updated: 2022-02-11
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

Postman's APIMatic integration converts your Postman collections to any major API description format, including Swagger, RAML, and API Blueprint, and saves the resulting file on GitHub.

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
1. Your browser will open a new **Authorize Postman** page that gives Postman access to your GitHub repositories. Select **Authorize postmanlabs**. Once the authorization process is complete, the page will tell you to close the tab and continue in Postman.

    > If you are not signed in to GitHub, you will be prompted to log in.

1. In Postman, you will be prompted to enter the following information to create an integration:
    * Your [APIMatic integration key](https://docs.apimatic.io/manage-apis/get-api-keys/).
    * A nickname for the integration.
    * The Postman workspace that the collection you want to back up belongs to.
    * The Postman collection you want to back up.
    * The GitHub repository your collection will be saved to.
    * The directory in the GitHub repository in which to save your collection. If a directory with that name does not exist, it will be created when you add the integration.
    * A filename for the backup file.
    * The format in which you want to save the collection.
    * The name of the GitHub branch to save the collection to. This branch must already exist, and the integration process will fail if you specify an invalid branch name.
1. Select **Add Integration**.

    <img alt="APIMatic integration form" src="https://assets.postman.com/postman-docs/apimatic-save-config-v9.jpg" width="400px"/>

Once the integration has been created, select it to view details about the integration including its run log.

<img alt="APIMatic integration run log" src="https://assets.postman.com/postman-docs/apimatic-run-log-v9.jpg" width="500px"/>

This integration runs once a day at 12:00 UTC. If you make changes to your collection, they are picked up by the converter in its next run. If no updates are made to your collection, no updates are pushed to GitHub.
