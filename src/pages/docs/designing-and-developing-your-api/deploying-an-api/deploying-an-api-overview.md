---
title: 'Deploying an API overview'
page_id: 'deploying_an_api_overview'
updated: 2022-01-31
search_keyword: "deploy, aws, apigee, api gateway"
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

Stay on top of your API deployments in Postman by connecting to an API gateway. Postman integrates with popular API gateways, including [Amazon API Gateway](https://aws.amazon.com/api-gateway/) and [Apigee X](https://cloud.google.com/apigee). Once connected to an API gateway, you can view your API deployment status and history from within Postman.

## Contents

* [Connecting to an API Gateway](#connecting-to-an-api-gateway)
* [Viewing API deployments in Postman](#viewing-api-deployments-in-postman)

## Connecting to an API Gateway

To connect to an API gateway in Postman, select **APIs** in the left sidebar, and then select the API and version you want to connect. Select the **Deployments** tab, and then select **AWS API Gateway** or **Apigee X**.

Enter the required information to configure the API gateway integration. For detailed steps, see [Deploying to an Amazon API Gateway](/docs/designing-and-developing-your-api/deploying-an-api/deploying-an-api-aws/) or [Deploying to an Apigee API gateway](/docs/designing-and-developing-your-api/deploying-an-api/deploying-an-api-apigee/).

<img alt="Connecting to AWS API Gateway" src="https://assets.postman.com/postman-docs/deployments-api-gateway-v9-11.jpg" width="916px"/>

## Viewing API deployments in Postman

After connecting to an API gateway, you can view the deployment history for your API schemas in Postman. Select **APIs** in the left sidebar, select an API and version, and then select the **Deployments** tab.

The **Deployments** tab displays details about recent deployments as well as information about your API gateway:

* **Amazon API Gateway:** View the active deployment for each stage, recent exports from Postman, and details about each deployment. You can also export or deploy your HTTP API schema from Postman to your gateway. Learn more about [Viewing Amazon API gateway deployments](/docs/designing-and-developing-your-api/deploying-an-api/deploying-an-api-aws/#viewing-amazon-api-gateway-deployments).
* **Apigee X:** View details about your Apigee API proxy and proxy endpoints. You can also view details about your Apigee environments. Learn more about [Viewing Apigee X deployments](/docs/designing-and-developing-your-api/deploying-an-api/deploying-an-api-apigee/#viewing-apigee-x-deployments).

> Use the shortcut links on the **Deployments** tab to quickly open Amazon API Gateway or Apigee X and view API metrics.

## Next steps

Start managing API deployments in Postman by [deploying to an Amazon API Gateway](/docs/designing-and-developing-your-api/deploying-an-api/deploying-an-api-aws/) or [deploying to an Apigee API gateway](/docs/designing-and-developing-your-api/deploying-an-api/deploying-an-api-apigee/).
