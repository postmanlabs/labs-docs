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

---

Postman's APIMatic integration converts a Postman collection into an API description format such as Swagger, RAML, or API Blueprint, and then periodically backs up the resulting file on GitHub.

## Prerequisites

To set up an APIMatic integration with Postman, you will need:

* An [APIMatic account](https://www.apimatic.io/account/register)
* An [APIMatic integration key](https://docs.apimatic.io/manage-apis/get-api-keys/)
* A [GitHub account](https://github.com/)
* A GitHub repository in which to back up your collection

## Configuring an APIMatic integration

To back up a collection periodically to a GitHub repository:

1. On the Postman **[Home](https://go.postman.co/home)** page, select **[Integrations](https://go.postman.co/integrations)**.
1. Type **APIMatic** into the search bar and select the result.

    ![browse and select APIMatic](https://assets.postman.com/postman-docs/apimatic-browse-all.jpg)

1. Select **Add Integration**.
1. Your browser will open a new **Authorize Postman** page that gives Postman access to your GitHub repositories. Select **Authorize postmanlabs**. Once the authorization process is complete, the page will tell you to close the tab and continue in Postman.

    > If you aren't signed in to GitHub, you will be prompted to sign in.

1. In Postman, enter information about the integration:
    * **APIMatic API Key** - Your [APIMatic integration key](https://docs.apimatic.io/manage-apis/get-api-keys/).
    * **Nickname** - Create a nickname for the integration.
    * **Choose Workspace** - Select the Postman workspace that the collection you want to back up belongs to.
    * **Choose Collection** - Select the Postman collection you want to back up.
    * **Choose Repository** - Select the GitHub repository your collection will be backed up to.
    * **Enter Directory** - Add the directory in the GitHub repository in which to back up your collection. If a directory with that name doesn't exist, it will be created when you add the integration.
    * **Enter filename** - Create a filename for the backup file.
    * **Choose format** - Select the format in which you want to back up the collection.
    * **Enter Branch** - Add the name of the GitHub branch in which to back up the collection. This branch must already exist, and the integration process will fail if you specify an invalid branch name.
1. Select **Add Integration**.

    <img alt="APIMatic integration form" src="https://assets.postman.com/postman-docs/apimatic-save-config-v9.jpg" width="400px"/>

Once the integration has been created, select it to view details about the integration including its run log.

<img alt="APIMatic integration run log" src="https://assets.postman.com/postman-docs/apimatic-run-log-v9.jpg" width="500px"/>

This integration runs once a day at 12:00 UTC. If you make changes to your collection, they're picked up by the converter in its next run. If no updates are made to your collection, no updates are pushed to GitHub.
