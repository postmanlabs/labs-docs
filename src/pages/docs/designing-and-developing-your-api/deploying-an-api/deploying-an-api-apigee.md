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

When setting up the connection to Apigee, you will need to enter a service account email address and a private key. Follow the steps below to [create a service account](https://cloud.google.com/iam/docs/creating-managing-service-accounts) and [generate a private key](https://cloud.google.com/iam/docs/creating-managing-service-account-keys) from your Google Cloud project.

To create a service account:

1. Log on to the [Google Cloud Platform console](https://console.cloud.google.com/home/dashboard) and navigate to your project settings.
1. Select **Service Accounts** in the left navigation pane.
1. Select **+ Create Service Account**.
1. Enter the required details for the service account and select **Create and Continue**.
1. Grant the following two roles to this service account:

    * `Apigee API Reader`
    * `Apigee Environment Admin`

1. Select **Done** to finish creating the service account.

To generate a private key:

1. Open the new service account and select the **Keys** tab.
1. Select **Add key** and add a JSON type key.

Your browser will automatically download a JSON file. The file contains a `client_email` and a `private_key`. You will use this information when connecting Postman to Apigee X.

## Connecting to Apigee X

To connect to Apigee X in Postman, select **APIs** in the left sidebar, and then select the API and version you want to connect. Select the **Deployments** tab, and then select **Apigee X**.

<img alt="Connecting to an API Gateway" src="https://assets.postman.com/postman-docs/deployments-api-gateway-v9-11.jpg" width="916px"/>

Next, enter information about the connection to Apigee X:

1. Select the **Organization** that contains the proxy you want to connect to Postman.
1. Enter a **Nickname** for this integration.
1. Select the **API Proxy** that you want to connect to your API version in Postman.
1. Select one or more environments where you deploy your API in Apigee X.
1. Select **Connect**.

<img alt="Connecting to Apigee X" src="https://assets.postman.com/postman-docs/apigee-connect-gateway-v9-11.jpg" width="470px"/>

## Viewing Apigee X deployments

After connecting to Apigee X, you can view the deployment status and history for your API schemas in Postman. Select **APIs** in the left sidebar, select an API and version, and then select the **Deployments** tab.

* For your API proxy, you can view the latest revision, source, creation date, and date last updated.
* For each proxy endpoint, you can view the name and base paths.
* For each Apigee environment, you can view the description, date last updated, status, deployed revision, and deployment date.

<img alt="Viewing API deployments" src="https://assets.postman.com/postman-docs/apigee-viewing-deployments-v9-12.jpg" width="943px"/>

From the **Deployments** tab, you can take the following actions:

* To view your API proxy in Apigee X, select the **Latest Revision** or a **Deployed Revision.**
* To view performance metrics for your API proxy in Apigee X, select **API Metrics**.
* To see the latest deployment status, select the refresh icon <img alt="Refresh icon" src="https://assets.postman.com/postman-docs/icon-refresh-v9-5.jpg" width="14px" style="vertical-align:middle;margin-bottom:5px">.
* To edit or delete the connection to Apigee X, select the three dots <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px">.
