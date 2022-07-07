---
title: "Using connected accounts in integrations"
updated: 2022-07-08
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Integrating with Postman"
    url: "/docs/integrations/intro-integrations/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "The New Postman API Platform: Introducing Powerful Integrations"
    url: "https://blog.postman.com/the-new-postman-api-platform/"
  - type: link
    name: "Integrations: how Postman plays with some of your favorite tools"
    url: "https://blog.postman.com/integrations-how-postman-plays-with-some-of-your-favorite-tools/"
---

Each time you add a new integration, you need to authenticate with the third-party app or service you want to connect to Postman. _Connected accounts_ streamline this process by enabling all members of a team to use the same stored authorization details when adding an integration.

The Team Admin role is required to set up and manage connected accounts. The Team Admin authenticates with the third-party service, and Postman securely stores the authorization details as a connected account. Any team member can set up a new integration using the connected account, without needing to know or enter the authorization details.

## Contents

* [Supported integrations](#supported-integrations)
* [Adding a connected account](#adding-a-connected-account)
* [Managing connected accounts](#managing-connected-accounts)
* [Adding integrations using connected accounts](#adding-integrations-using-connected-accounts)
* [Re-authenticating an integration](#re-authenticating-an-integration)

## Supported integrations

Team Admins can set up connected accounts for the following Postman integrations:

* [Slack](/docs/integrations/available-integrations/slack/) - Post monitoring results

## Adding a connected account

You must be a [Team Admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) to add a connected account. You can add an account from Team Settings or when adding a new integration. After you add a connected account, any member of your team can use it add a supported integration.

### Adding a connected account from Team Settings

You can add a new connected account from [Team Settings](https://app.getpostman.com/dashboard/teams/edit).

1. In Postman, select **Team** > **Team Settings**.
1. Select **Connected accounts**.
1. Select the third-party app or service you want to add (for example, **Add Slack**).
1. A browser tab opens asking you to log in to the third-party app or service. Follow the onscreen instructions. When you're finished, close the browser tab and return to Postman.

The integration is added, and the new connected account appears on the Connected Accounts page in [Team Settings](https://app.getpostman.com/dashboard/teams/edit).

### Adding a connected account when adding an integration

You can add a new connected account when adding a supported integration.

1. From the Postman **[Home](https://go.postman.co/home)** page, select **[Integrations](https://go.postman.co/integrations)**.
1. Select **Browse All Integrations**.
1. Search for and select the app or service you want to connect to (for example, **[Slack](https://go.postman.co/integrations/service/slack)**).
1. Select **Add Integration** next to the integration you want to add.
1. A browser tab opens asking you to log in to the third-party app or service. Follow the onscreen instructions. When you're finished, close the browser tab and return to Postman.
1. Select the checkbox to **Authorize your Postman team** with the app you're connecting to.
1. Enter any other required information and select **Add Integration**.

The integration is added, and the new connected account appears on the Connected Accounts page in [Team Settings](https://app.getpostman.com/dashboard/teams/edit).

> For help adding an integration, go to [Available integrations](/docs/integrations/available-integrations/apimatic/) in the Postman Learning Center and select the app you want to integrate with.

## Managing connected accounts

You can view all connected account in [Team Settings](https://app.getpostman.com/dashboard/teams/edit).  In Postman, select **Team** > **Team Settings**, and then select **Connected accounts**. You can view the app name, what it's connected to, and who set up the connection.

To delete a connected account, select <img alt="Delete icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px"> **Delete Account** next to the connected account. You must be a [Team Admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) to delete a connected account.

> **Use caution when deleting a connected account.** If you delete a connected account, any integrations created with that connected account will stop working. You must [re-authenticate the affected integrations](#re-authenticating-an-integration) for them to continue working.

## Adding integrations using connected accounts

Any team member can use a connected account when adding a supported integration.

1. From the Postman **[Home](https://go.postman.co/home)** page, select **[Integrations](https://go.postman.co/integrations)**.
1. Select **Browse All Integrations**.
1. Search for and select the app or service you want to connect to (for example, **[Slack](https://go.postman.co/integrations/service/slack)**).
1. Select **Add Integration** next to the integration you want to add.
1. A message and green checkmark let you know you're authenticated with the app or service by your Team Admin. If you want to authenticate using different credentials, select the link.
1. Enter any other required information and select **Add Integration**.

> For help adding an integration, go to [Available integrations](/docs/integrations/available-integrations/apimatic/) in the Postman Learning Center and select the app you want to integrate with.

## Re-authenticating an integration

If your Team Admin deleted a connected account, any integrations you created with that connected account will stop work. You must re-authenticate the affected integrations for them to continue working.
