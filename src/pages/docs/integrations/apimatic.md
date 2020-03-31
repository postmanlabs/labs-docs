---
title: "APIMatic"
order: 283
page_id: "apimatic"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Intro to collections"
    url: "https://learning.postman.com/docs/postman/collections/intro-to-collections"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Why we became big believers in APIMatic’s API transformer"
    url: "https://blog.postman.com/2017/02/15/new-postman-pro-integration-apimatics-api-transformer/"

---

> __[Integrations are available on Postman Team, Business, and Enterprise plans.](https://www.getpostman.com/pricing)__

You can use Postman's APIMatic integration to back up your Postman collections in Swagger, RAML, API Blueprint, and other API description formats.

This integration allows APIMatic to convert your Postman collections into any major API description format, and save the resulting file into your designated GitHub repository.

If you don't already have a [GitHub account](https://github.com/), you'll need to create one.

## Configuring APIMatic Integration

1. In the [Integrations](https://go.postman.co/workspaces) tab for your workspace, select APIMatic from the list of third party integrations.

    [![select apimatic](https://assets.postman.com/postman-docs/integrations_APImatic.png)](https://assets.postman.com/postman-docs/integrations_APImatic.png)

2. Click **View Details** to see information about APIMatic and how the Postman to APIMatic integration converts, formats, and saves your Postman collections to Github.

   You can also click **Configured Integrations** to set up other integrations, view available integrations for APIMatic, or view all integrations.

    [![configured integrations](https://assets.postman.com/postman-docs/WS-integrations-apimatic-conf-integr.png)](https://assets.postman.com/postman-docs/WS-integrations-apimatic-conf-integr.png)

3. Click the **Add Integration** button to authorize a periodic backup of your collection to your Github repository.

    [![backup_github](https://assets.postman.com/postman-docs/WS-integrations_APImatic_backup_Github2.png)](https://assets.postman.com/postman-docs/WS-integrations_APImatic_backup_Github2.png)

    > If you are not signed in to Github, a Github login box appears. Enter your Github username and password, and click **Sign in**.

4. Click **Authorize** to summon the authorization page, which lets you configure the backup to Github.

    [![github apimatic](https://assets.postman.com/postman-docs/WS-integrations-github-authorized1-a.png)](https://assets.postman.com/postman-docs/WS-integrations-github-authorized1-a.png)

5. To back up a collection periodically to a Github repository:

   * Select a collection.
   * Select a repository.
   * Specify a directory in the repository where you want to add the collection.
   * Enter a filename for the directory in the repository.
   * Select the format in which you want to save the collection, such as Postman 2.0 or APIMatic format.
   * Specify the branch where you want to add the collection. _Note that the branch you want to back up your collection to must already exist._

6. Click the **Add Integration** button.

   APIMatic converts the collection’s documentation to your format of choice and pushes to your GitHub repository.  Now your Postman collection automatically saves to your GitHub repo every day, in whatever API description format you selected.  API format compatibility is moments away.
