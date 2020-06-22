---
title: "Bitbucket"
order: 286
page_id: "bitbucket"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Intro to collections"
    url: "/docs/postman/collections/intro-to-collections"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Custom Webhooks"
    url: "/docs/integrations/webhooks/"
  - type: link
    name: "Slack Integration"
    url: "/docs/integrations/slack/"
---

> __[Integrations are available on Postman Team, Business, and Enterprise plans.](https://www.getpostman.com/pricing)__

You can back up your team's Postman Collections with Postman's Bitbucket integration.

## Contents

* [Backing up collections on Bitbucket](#backing-up-collections-on-bitbucket)

    * [Configuring a Bitbucket integration](#configuring-a-bitbucket-integration)

* [Next steps](#next-steps)

## Backing up collections on Bitbucket

You can back up your Postman Collections to your Bitbucket repository. Once the integration is configured, any new changes to your collection in Postman will also appear in Bitbucket.

### Configuring a Bitbucket integration

To add a Bitbucket integration, navigate to your [Postman Dashboard](https://go.postman.co/). Select your desired workspace > **Integrations**. Click **Browse Integrations**, locate **Bitbucket**, and select **View Details**. Click **+ Add integration**.

![Bitbucket page](https://assets.postman.com/postman-docs/bitbucket-postman-page.jpg)

Enter your Bitbucket username and app password.

> App passwords are different from account passwords. Learn [how to create an app password in Bitbucket](https://confluence.atlassian.com/bitbucket/app-passwords-828781300.html).

<img src="https://assets.postman.com/postman-docs/enter-username-and-password.jpg" width="350px" alt="User Menu"/>

Select your collection to back up, the repository you'd like to back it up to, and designate the directory, filename, and branch. Click **Add Integration**.

<img src="https://assets.postman.com/postman-docs/bitbucket-configuration.jpg" width="350px" alt="User Menu"/>

Your newly created integration will now appear under **Configured Integrations**.

![Configured integrations](https://assets.postman.com/postman-docs/configured-integrations.jpg)

To confirm this integration, navigate to your [Bitbucket dashboard](https://bitbucket.org/dashboard/overview) > **Repositories**. Select your repository > **Commits**.

![Configured integrations](https://assets.postman.com/postman-docs/bitbucket-commits.jpg)

You can select a commit to view your stored collection in JSON format.

![Bitbucket collection](https://assets.postman.com/postman-docs/bitbucket-collection.jpg)

## Next steps

Learn more about other Postman integrations, including [custom webhooks](/docs/integrations/webhooks/) and [Slack](/docs/integrations/slack/).
