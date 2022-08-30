---
title: 'Deploying to an Apigee API gateway'
updated: 2022-09-15
search_keyword: "deploy, apigee, api gateway"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "API development overview"
    url: "/docs/designing-and-developing-your-api/the-api-workflow/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Introducing Powerful Integrations"
    url: "https://blog.postman.com/the-new-postman-api-platform/"
---

[Apigee X](https://cloud.google.com/apigee) enables developers to manage access to their APIs by abstracting services behind a secure proxy layer. Once connected to Apigee X, you can view your API deployment status and history from within Postman.

> Postman supports connecting to organizations and proxies hosted in Apigee X. Postman doesn't support connecting to Apigee Edge.

## Contents

* [Creating a service account and private key](#creating-a-service-account-and-private-key)
* [Connecting to Apigee X](#connecting-to-apigee-x)
* [Viewing Apigee X deployments](#viewing-apigee-x-deployments)

## Creating a service account and private key

When setting up the connection to Apigee, you need to enter a service account email and a private key. You can create the required items in your Google Cloud project. Follow the steps below to [add a custom role](https://cloud.google.com/iam/docs/creating-custom-roles), [create a service account](https://cloud.google.com/iam/docs/creating-managing-service-accounts), and [generate a private key](https://cloud.google.com/iam/docs/creating-managing-service-account-keys).

To create a custom role:

1. Log on to the [Google Cloud Platform console](https://console.cloud.google.com/home/dashboard) and go to your project settings.
1. Select **Roles** in the left navigation pane, and then select **+ Create Role**.
1. Enter the required details for the role, and then select **+ Add permissions**.
1. Select the check box next to the following permission properties (enter a property name to locate it in the list):

    * `apigee.deployments.list`
    * `apigee.environments.list`
    * `apigee.environments.get`
    * `apigee.organizations.list`
    * `apigee.organizations.get`
    * `apigee.proxies.list`
    * `apigee.proxies.get`
    * `apigee.proxyrevisions.get`

1. Select **Add** and verify that you added the correct permissions to the role.
1. Select **Create** to finish creating the custom role.

<img alt="Adding a custom role" src="https://assets.postman.com/postman-docs/apigee-custom-role-v9-13.jpg" width="564px"/>

To create a service account:

1. Select **Service Accounts** in the left navigation pane.
1. Select **+ Create Service Account**.
1. Enter the required details for the service account and select **Create and Continue**.
1. In the **Role** drop-down list, select the custom role you created (enter the custom role name to locate it in the list).

    > Postman recommends adding a custom role to the service account. If you can't add a custom role, you can instead add the `Apigee API Reader` role and the `Apigee Environment Admin` role to the service account.

1. Select **Done** to finish creating the service account.

<img alt="Creating a service account" src="https://assets.postman.com/postman-docs/apigee-service-account-v9-13.jpg" width="564px"/>

To generate a private key:

1. Select the new service account to open it and select the **Keys** tab.
1. Select **Add key** and select **Create new key**.
1. Select the **JSON** key type and select **Create**.

<img alt="Generating a private key" src="https://assets.postman.com/postman-docs/apigee-create-key-v9-13.jpg" width="564px"/>

Your browser will automatically download a JSON file that has values for `client_email` and a `private_key`. You will use these values when connecting Postman to Apigee X.

## Connecting to Apigee X

To connect to Apigee X in Postman, select **APIs** in the sidebar and select an API. Under **Power up your API**, select **Deployments**, and then select **Apigee X**.

First, authenticate with Apigee X:

1. Enter the **Service Account Email** and **Private Key**. You can find the values in the JSON file you downloaded.

    > Instead of manually entering the keys, you can upload the JSON file that has your service account email and private key. The values will be automatically populated.

1. Select **Connect**.

<img alt="Apigee X authentication" src="https://assets.postman.com/postman-docs/apigee-authenticate-v9-13.jpg" width="575px"/>

Next, set up the connection to Apigee X:

1. Select the **Organization** that has the proxy you want to connect to Postman.
1. Enter a **Nickname** for this integration.
1. Select the **API Proxy** that you want to connect to your API in Postman.
1. Select one or more **Environments** where you deploy your API in Apigee X.
1. Select **Complete Setup**.

<img alt="Apigee X setup" src="https://assets.postman.com/postman-docs/apigee-setup-v9-13.jpg" width="575px"/>

## Viewing Apigee X deployments

After connecting to Apigee X, you can view the deployment status and history for your API schemas in Postman. Select **APIs** in the sidebar and select an API. Under **Power up your API**, select **Deployments**.

* For your API proxy, you can view the latest revision, source, creation date, and date last updated.
* For each proxy endpoint, you can view the name and base paths.
* For each Apigee environment, you can view the description, date last updated, status, deployed revision, and deployment date.

<img alt="Viewing API deployments" src="https://assets.postman.com/postman-docs/v10/apigee-viewing-deployments-v10.jpg" width="956px"/>

From the **Deployments** view, you can take the following actions:

* To view your API proxy in Apigee X, select the **Latest Revision** or a **Deployed Revision.**
* To view performance metrics for your API proxy in Apigee X, select **API Metrics**.
* To see the latest deployment status, select the refresh icon <img alt="Refresh icon" src="https://assets.postman.com/postman-docs/icon-refresh-v9-5.jpg#icon" width="14px">.
* To edit or delete the connection to Apigee X, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px">.
