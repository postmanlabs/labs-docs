---
title: "Bitbucket"
order: 164.1
page_id: "bitbucket"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Grouping requests in collections"
    url: "/docs/sending-requests/intro-to-collections/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Custom Webhooks"
    url: "/docs/integrations/webhooks/"
  - type: link
    name: "Slack Integration"
    url: "/docs/integrations/available-integrations/slack/"
---

You can back up your team's Postman Collections with Postman's Bitbucket integration.

## Contents

* [API sync with Bitbucket](#api-sync-with-bitbucket)
* [Backing up collections on Bitbucket](#backing-up-collections-on-bitbucket)

    * [Configuring a Bitbucket integration](#configuring-a-bitbucket-integration)

* [Next steps](#next-steps)

## API sync with Bitbucket

Postman 9.0 introduced the ability to connect a git repository to an API. Instead of using an integration, you can directly connect a Bitbucket repo to an API in the API Builder. This provides two-way sync of schemas and associated collections, plus adds powerful new features for syncing branches and release tags between Postman and your repo. For more information on the new repo sync feature, see [Versioning APIs](/docs/designing-and-developing-your-api/versioning-an-api/).

## Backing up collections on Bitbucket

You can back up your Postman Collections to your Bitbucket repository. Once the integration is configured, any new changes to your collection in Postman will also appear in Bitbucket.

### Configuring a Bitbucket integration

From the **[Home](https://go.postman.co/home)** page select **[Integrations](https://go.postman.co/integrations)**.

![home page and integrations](https://assets.postman.com/postman-docs/home-integrations.jpg)

Search and select **Bitbucket**.

![Bitbucket search page](https://assets.postman.com/postman-docs/bitbucket-search-bb.jpg)

Select **Add Integration**.

![Bitbucket details page](https://assets.postman.com/postman-docs/bitbucket-add-integration-bb.jpg)

Enter your Bitbucket authentication and select **Authenticate and Proceed**.

> App passwords are different from account passwords. Learn [how to create an app password in Bitbucket](https://support.atlassian.com/bitbucket-cloud/docs/app-passwords/).

![Bitbucket creation](https://assets.postman.com/postman-docs/bitbucket-create-bb.jpg)

Select your collection to back up, the repository you'd like to back it up to, and designate the directory, filename, and branch. Click **Add Integration**.

![Bitbucket configuration](https://assets.postman.com/postman-docs/bitbucket-configure-bb.jpg)

Your new integration will now appear in a list along with previously created integrations.

![Configured integrations](https://assets.postman.com/postman-docs/bitbucket-add-integration-bb.jpg)

To confirm this integration, navigate to your [Bitbucket dashboard](https://bitbucket.org/dashboard/overview) > **Repositories**. Select your repository > **Commits**.

![Bitbucket commits list](https://assets.postman.com/postman-docs/bitbucket-commits.jpg)

You can select a commit to view your stored collection in JSON format.

![Bitbucket collection](https://assets.postman.com/postman-docs/bitbucket-collection.jpg)

## Next steps

Learn more about other Postman integrations, including [custom webhooks](/docs/integrations/webhooks/) and [Slack](/docs/integrations/available-integrations/slack/).
