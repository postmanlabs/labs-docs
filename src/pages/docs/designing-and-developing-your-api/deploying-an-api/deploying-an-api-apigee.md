---
title: 'Deploying to an Apigee API gateway'
page_id: 'deploying_an_api_apigee'
updated: 2022-01-31
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

[Apigee X](https://cloud.google.com/apigee) enables developers to manage access to their APIs by abstracting their services behind a secure proxy layer. Once connected to Apigee X, you can view your API deployment status and history from within Postman. This integration supports OpenAPI 3.0 schemas.

## Contents

* [Connecting to Apigee X](#connecting-to-apigee-x)
* [Viewing Apigee X deployments](#viewing-apigee-x-deployments)

## Connecting to Apigee X

To connect to Apigee X in Postman, select **APIs** in the left sidebar, and then select the API and version you want to connect. Select the **Deployments** tab, and then select **Apigee X**.

<img alt="Connecting to AWS API Gateway" src="https://assets.postman.com/postman-docs/deployments-aws-api-gateway-v9-5.jpg" width="915px"/>

You will be asked to authenticate Apigee using your Google account. Next, enter information about the connection to Apigee X:

1. Select the **Organization** that contains the proxy you want to connect to Postman.
1. Enter a **Nickname** for this integration.
1. Select the **API Proxy** that you want to connect to your API in Postman.
1. Select one or more environments where you deploy your API in Apigee X.
1. Select **Connect**.

SCREENSHOT

## Viewing Apigee X deployments

After connecting to Apigee X, you can view the export and deployment history for your API schemas in Postman. Select **APIs** in the left sidebar, select an API and version, and then select the **Deployments** tab.

* For each stage you can view the active deployment, the creation date, and the date last updated. Select a stage to view additional details, including the invoke URL and stage description (from AWS).
* For each export from Postman, you can view the source of the export and the time when exported.
* For each deployment you can view the ID, description, and creation date.

<img alt="Viewing API deployments" src="https://assets.postman.com/postman-docs/api-gateway-view-deployments-v9-8.jpg" width="946px"/>

From the **Deployments** tab, you can take the following actions:

* To view your API Gateway in AWS, select the **AWS Gateway ID**.
* To export or deploy your schema, select **Deploy API** (for HTTP API schemas only). Learn more about [deploying your API](#exporting-and-deploying-your-api).
* To view metrics for your API Gateway in AWS, select **View Dashboard**.
* To see the latest deployment status, select the refresh icon <img alt="Refresh icon" src="https://assets.postman.com/postman-docs/icon-refresh-v9-5.jpg" width="14px" style="vertical-align:middle;margin-bottom:5px">.
* To edit or delete the connection to Amazon API Gateway, select the three dots <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px">.

