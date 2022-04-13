---
title: 'Deploying an API overview'
page_id: 'deploying_an_api_overview'
updated: 2022-04-22
search_keyword: "deploy, aws, api gateway, azure, api management"
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

Stay on top of your API deployments in Postman by connecting to an API gateway. Postman integrates with popular API gateways, including [Amazon API Gateway](https://aws.amazon.com/api-gateway/) and [Azure API Management](https://azure.microsoft.com/en-us/services/api-management/). Once connected to an API gateway, you can view your API deployment status and history from within Postman.

## Contents

* [Connecting to an API Gateway](#connecting-to-an-api-gateway)
* [Viewing API deployments in Postman](#viewing-api-deployments-in-postman)

## Connecting to an API gateway

To connect to an API gateway in Postman, select **APIs** in the sidebar, and then select the API and version you want to connect. Select the **Deployments** tab, and then select **AWS API Gateway** or **Azure API Management**.

Enter the required information to configure the API gateway integration. For more information, see the detailed steps for your API gateway:

* [Deploying to an Amazon API Gateway](/docs/designing-and-developing-your-api/deploying-an-api/deploying-an-api-aws/)
* [Deploying to Azure API Management](/docs/designing-and-developing-your-api/deploying-an-api/deploying-an-api-azure/)

<img alt="Connecting to an API Gateway" src="https://assets.postman.com/postman-docs/deployments-aws-api-gateway-v9-15.jpg"/>

## Viewing API deployments in Postman

After connecting to an API gateway, you can view the deployment history for your API schemas in Postman. Select **APIs** in the sidebar, select an API and version, and then select the **Deployments** tab.

The **Deployments** tab displays details about recent deployments and your API gateway:

* **Amazon API Gateway:** View the active deployment for each stage, recent exports from Postman, and details about each deployment. You can also export or deploy your HTTP API schema from Postman to your gateway. Learn more about [Viewing Amazon API gateway deployments](/docs/designing-and-developing-your-api/deploying-an-api/deploying-an-api-aws/#viewing-amazon-api-gateway-deployments).

* **Azure API Management:** View deployments for each of your Azure API Management services. You can view the revision history, changelog, and export history. You can also export your API schema from Postman to Azure API Management. Learn more about [Viewing Azure API deployments](/docs/designing-and-developing-your-api/deploying-an-api/deploying-an-api-azure/#viewing-azure-api-deployments).

## Next steps

Start managing API deployments in Postman by [deploying to an Amazon API Gateway](/docs/designing-and-developing-your-api/deploying-an-api/deploying-an-api-aws/) or [deploying to Azure API Management](/docs/designing-and-developing-your-api/deploying-an-api/deploying-an-api-azure/).
