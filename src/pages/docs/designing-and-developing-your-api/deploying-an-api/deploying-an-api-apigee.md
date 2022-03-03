---
title: 'Deploying to an Apigee API gateway'
page_id: 'deploying_an_api_apigee'
updated: 2022-02-07
search_keyword: "deploy, apigee, api gateway"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Developing an API"
    url: "/docs/designing-and-developing-your-api/developing-an-api/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Introducing Powerful Integrations"
    url: "https://blog.postman.com/the-new-postman-api-platform/"

---

[Apigee X](https://cloud.google.com/apigee) enables developers to manage access to their APIs by abstracting services behind a secure proxy layer. Once connected to Apigee X, you can view your API deployment status and history from within Postman.

> Postman supports connecting to organizations and proxies hosted in Apigee X. Connecting to Apigee Edge from Postman isn't supported.

## Contents

* [Creating a service account and private key](#creating-a-service-account-and-private-key)
* [Connecting to Apigee X](#connecting-to-apigee-x)
* [Viewing Apigee X deployments](#viewing-apigee-x-deployments)

## Creating a service account and private key

When setting up the connection to Apigee, you will need to enter a service account email and a private key. You can create the required items in your Google Cloud project. Follow the steps below to [add a custom role](https://cloud.google.com/iam/docs/creating-custom-roles), [create a service account](https://cloud.google.com/iam/docs/creating-managing-service-accounts), and [generate a private key](https://cloud.google.com/iam/docs/creating-managing-service-account-keys).

To create a custom role:

1. Log on to the [Google Cloud Platform console](https://console.cloud.google.com/home/dashboard) and go to your project settings.
1. Select **Roles** in the left navigation pane, and then select **+ Create Role**.
1. Enter the required details for the role, and then select **+ Add permissions**.
1. Select the check box next to the following permission properties (enter a property name to quickly locate it in the list):

    * `apigee.deployments.list`
    * `apigee.environments.list`
    * `apigee.environments.get`
    * `apigee.organizations.list`
    * `apigee.organizations.get`
    * `apigee.proxies.list`
    * `apigee.proxies.get`
    * `apigee.proxyrevisions.get`

1. Select **Add** and verify that the correct permissions were added to the role.
1. Select **Create** to finish creating the custom role.

<img alt="Adding a custom role" src="https://assets.postman.com/postman-docs/apigee-custom-role-v9-13.jpg" width="564px"/>

To create a service account:

1. Select **Service Accounts** in the left navigation pane.
1. Select **+ Create Service Account**.
1. Enter the required details for the service account and select **Create and Continue**.
1. In the **Role** drop-down list, select the custom role you created (enter the custom role name to quickly locate it in the list).
1. Select **Done** to finish creating the service account.

<img alt="Creating a service account" src="https://assets.postman.com/postman-docs/apigee-service-account-v9-13.jpg" width="564px"/>

> Postman recommends adding a custom role to the service account as described above. If adding a custom role doesn't work, you can instead add the `Apigee API Reader` role and the `Apigee Environment Admin` role to the service account.

To generate a private key:

1. Select the new service account to open it and select the **Keys** tab.
1. Select **Add key** and select **Create new key**.
1. Select the **JSON** key type and select **Create**.

<img alt="Generating a private key" src="https://assets.postman.com/postman-docs/apigee-create-key-v9-13.jpg" width="564px"/>

Your browser will automatically download a JSON file that contains values for `client_email` and a `private_key`. You will use these values when connecting Postman to Apigee X.

## Connecting to Apigee X

To connect to Apigee X in Postman, select **APIs** in the left sidebar, and then select the API and version you want to connect. Select the **Deployments** tab, and then select **Apigee X**.

<img alt="Connecting to an API Gateway" src="https://assets.postman.com/postman-docs/deployments-api-gateway-v9-11.jpg" width="916px"/>

Authenticate with Apigee X using one of the following methods:

* Upload the JSON file containing your service account email and private key. Select **Select File**, locate the JSON file you downloaded, and select **Open**.
* Manually enter the **Service Account Email** and **Private Key**. You can find the values in the JSON file you downloaded.

<img alt="Apigee X authentication" src="https://assets.postman.com/postman-docs/apigee-authenticate-v9-13.jpg" width="575px"/>

Select **Connect**, and then set up the connection to Apigee X:

1. Select the **Organization** that contains the proxy you want to connect to Postman.
1. Enter a **Nickname** for this integration.
1. Select the **API Proxy** that you want to connect to your API version in Postman.
1. Select one or more environments where you deploy your API in Apigee X.
1. Select **Complete Setup**.

<img alt="Apigee X setup" src="https://assets.postman.com/postman-docs/apigee-setup-v9-13.jpg" width="575px"/>

## Viewing Apigee X deployments

After connecting to Apigee X, you can view the deployment status and history for your API schemas in Postman. Select **APIs** in the left sidebar, select an API and version, and then select the **Deployments** tab.

* For your API proxy, you can view the latest revision, source, creation date, and date last updated.
* For each proxy endpoint, you can view the name and base paths.
* For each Apigee environment, you can view the description, date last updated, status, deployed revision, and deployment date.

<img alt="Viewing API deployments" src="https://assets.postman.com/postman-docs/apigee-viewing-deployments-v9-13.jpg" width="956px"/>

From the **Deployments** tab, you can take the following actions:

* To view your API proxy in Apigee X, select the **Latest Revision** or a **Deployed Revision.**
* To view performance metrics for your API proxy in Apigee X, select **API Metrics**.
* To see the latest deployment status, select the refresh icon <img alt="Refresh icon" src="https://assets.postman.com/postman-docs/icon-refresh-v9-5.jpg" width="14px" style="vertical-align:middle;margin-bottom:5px">.
* To edit or delete the connection to Apigee X, select the three dots <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px">.
