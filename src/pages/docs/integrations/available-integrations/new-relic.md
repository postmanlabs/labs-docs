---
title: "New Relic"
order: 174
page_id: "new_relic"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Grouping requests in collections"
    url: "/docs/sending-requests/intro-to-collections/"
  - type: section
---

> **[Integrations are available on Postman Team, Business, and Enterprise plans.](https://www.postman.com/pricing/)**

You can use Postman's New Relic integration to view all your operational data in one place. This integration allows you to configure your Postman monitors to send metrics to New Relic.

If you don't already have a [New Relic account](https://newrelic.com/), you'll need to create one.

## Configuring New Relic Integration

From the [Integrations page](https://postman.postman.co/integrations/browse?category=all), search and select the New Relic integration.

<img alt="select apimatic" src="https://assets.postman.com/postman-docs/integrations_APImatic.png" width="200px"/>


[![APIMatic Integration](https://assets.postman.com/postman-docs/apimatic-integration-overview.jpg)](https://assets.postman.com/postman-docs/apimatic-integration-overview.jpg)

> You can alternatively click **Configured Integrations** to access any existing integrations.

Click the **Add Integration** button to authorize a periodic backup of your collection to your GitHub repository.

[![Authorize APIMatic](https://assets.postman.com/postman-docs/authorize-apimatic-integration.jpg)](https://assets.postman.com/postman-docs/authorize-apimatic-integration.jpg)

Click **Authorize** to allow the backup to GitHub.

> If you are not signed in to GitHub, you will be prompted to log in.

[![github apimatic](https://assets.postman.com/postman-docs/apimatic-integration-config.jpg)](https://assets.postman.com/postman-docs/WS-integrations-github-authorized1-a.png)

To back up a collection periodically to a GitHub repository:

* Enter your [API key from APIMatic](https://docs.apimatic.io/getting-started/manage-apis/#view-api-integration-keys).
* Select a collection.
* Select a repository.
* Specify a directory in the repository where you want to add the collection.
* Enter a filename for the directory in the repository.
* Select the format in which you want to save the collection, such as Postman 2.0 or APIMatic format.
* Specify the branch where you want to add the collection. _Note that the branch you want to back up your collection to must already exist._

Click **Add Integration**.

APIMatic converts your collection to the format of your choice and pushes it to your GitHub repository. This integration runs once a day at 1200UTC. Any changes you make to your collection will be picked up by the converter in its subsequent run. If no updates have been made to your collection, no updates will be pushed to GitHub.
