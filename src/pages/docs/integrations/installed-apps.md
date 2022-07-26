---
title: "Using installed apps in integrations"
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

Each time you add a new integration, you need to authenticate with the third-party app or service you want to connect to Postman. _Installed apps_ streamline this process by enabling all members of a team to use the same stored authorization details when adding an integration.

When you authenticate with a third-party service, you can choose to have Postman securely store the authorization details as an installed app. Any team member can add a new integration using the installed app, without needing to know or enter the authorization details.

## Contents

* [Supported integrations](#supported-integrations)
* [Adding an installed app](#adding-an-installed-app)
* [Managing installed apps](#managing-installed-apps)
* [Adding integrations using installed apps](#adding-integrations-using-installed-apps)
* [Re-authenticating an integration](#re-authenticating-an-integration)

## Supported integrations

You can add installed apps for the following Postman integrations:

* [Slack](/docs/integrations/available-integrations/slack/) - Post monitoring results

## Adding an installed app

You can add an installed app from Team Settings or when adding a new integration. After you add an installed app, any member of your team can use it add a [supported integration](#supported-integrations).

### Adding an installed app from Team Settings

You can add a new installed app from [Team Settings](https://go.postman.co/settings/team/general).

1. In Postman, select **Team** > **Team Settings**.
1. Select **Installed apps**.
1. Select the third-party app or service you want to add (for example, **Add Slack**).
1. A browser tab opens asking you to log in to the third-party app or service. Follow the onscreen instructions. When you're finished, close the browser tab and return to Postman.

The new installed app appears on the Installed Apps page in [Team Settings](https://go.postman.co/settings/team/general).

<img alt="Adding an installed app from Team Settings" src="https://assets.postman.com/postman-docs/installed-apps-add-from-settings-v9-24.jpg">

### Adding an installed app when adding an integration

You can add a new installed app when adding a [supported integration](#supported-integrations).

1. From the Postman **[Home](https://go.postman.co/home)** page, select **[Integrations](https://go.postman.co/integrations)**.
1. Select **Browse All Integrations**.
1. Search for and select the app or service you want to connect to (for example, **[Slack](https://go.postman.co/integrations/service/slack)**).
1. Select **Add Integration** next to the integration you want to add.
1. A browser tab opens asking you to log in to the third-party app or service. Follow the onscreen instructions. When you're finished, close the browser tab and return to Postman.
1. Select the checkbox to add the app for your team.
1. Enter any other required information and select **Add Integration**.

The integration is added, and the new installed app appears on the Installed Apps page in [Team Settings](https://go.postman.co/settings/team/general).

> For help adding an integration, go to [Available integrations](/docs/integrations/available-integrations/apimatic/) in the Postman Learning Center and select the app you want to integrate with.

<img alt="Adding an installed app when adding an integration" src="https://assets.postman.com/postman-docs/installed-apps-add-from-integration-v9-24.jpg" width="530px">

## Managing installed apps

You can view all installed apps in [Team Settings](https://go.postman.co/settings/team/general).  In Postman, select **Team** > **Team Settings**, and then select **Installed apps**. You can view the app name, what it's connected to, and who set up the connection.

To delete an installed app, select <img alt="Delete icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px"> **Delete Account** next to the installed app. You must be a [Team Admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) to delete an installed app.

> **Use caution when deleting an installed app.** If you delete an installed app, any integrations created using the installed app will stop working. You must [re-authenticate the affected integrations](#re-authenticating-an-integration) for them to continue working.

<img alt="Managing installed apps" src="https://assets.postman.com/postman-docs/installed-apps-manage-v9-24.jpg">

## Adding integrations using installed apps

Any team member can use an installed app when adding a [supported integration](#supported-integrations).

1. From the Postman **[Home](https://go.postman.co/home)** page, select **[Integrations](https://go.postman.co/integrations)**.
1. Select **Browse All Integrations**.
1. Search for and select the app or service you want to connect to (for example, **[Slack](https://go.postman.co/integrations/service/slack)**).
1. Select **Add Integration** next to the integration you want to add.
1. A message and green checkmark let you know you're connected to the app or service. If you want to authenticate using different credentials, select the link.
1. Enter any other required information and select **Add Integration**.

> For help adding an integration, go to [Available integrations](/docs/integrations/available-integrations/apimatic/) in the Postman Learning Center and select the app you want to integrate with.

<img alt="Adding an integration using an installed app" src="https://assets.postman.com/postman-docs/installed-apps-using-v9-25.jpg" width="520px">

## Re-authenticating an integration

If an installed app is deleted, any integrations you added using the installed app will stop working. You must re-authenticate the affected integrations for them to continue working.

1. From the Postman **[Home](https://go.postman.co/home)** page, select **[Integrations](https://go.postman.co/integrations)**.
1. Search for and select the type of integration you want to edit. (For example, search for **Slack** and select **Post monitoring results**.)
1. Select the integration, and then select **Edit Integration**.
1. A message and red warning icon let you know you're no longer authenticated with the app or service. Select **Reauthenticate**.
1. A browser tab opens asking you to log in to the third-party app or service. Follow the onscreen instructions. When you're finished, close the browser tab and return to Postman.
1. Select **Save Changes**.

<img alt="Re-authenticating an integration" src="https://assets.postman.com/postman-docs/installed-apps-reauthorize-v9-24.jpg" width="530px">
