---
title: 'Deploying to Azure API Management'
page_id: 'deploying_an_api_azure'
updated: 2022-04-22
search_keyword: "deploy, azure, api management"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Developing an API"
    url: "/docs/designing-and-developing-your-api/developing-an-api/"

---

[Azure API Management](https://azure.microsoft.com/en-us/services/api-management/) enables developers to deploy API gateways for APIs hosted in Microsoft Azure, other cloud platforms, or on-premises. Once connected to Azure API Management, you can view your API deployment status and history from within Postman. You can also export your API schema from Postman to Azure API Management.

## Contents

* [Connecting to Azure API Management](#connecting-to-azure-api-management)
* [Viewing Azure API deployments](#viewing-azure-api-deployments)
* [Exporting and deploying your API](#exporting-and-deploying-your-api)

## Connecting to Azure API Management

To connect to Azure API Management in Postman:

1. Select **APIs** in the sidebar, and then select the API and version you want to connect.
1. Select the **Deployments** tab, and then select **Azure API Management**.

    <img alt="Connecting to Azure API Management" src="https://assets.postman.com/postman-docs/deployments-aws-api-gateway-v9-15.jpg"/>

1. You'll be prompted to authorize Postman to access your Microsoft Azure account. After you grant access, you can close the browser tab and return to Postman.
1. Enter information about the Azure API Management service you want to connect to your API:

    * **Subscription:** The subscription where the service was created.
    * **Resource Group:** The resource group that contains the service.
    * **Service:** The Azure API Management service instance used for deploying your API.
    * **Azure API Version:** The Azure API version set that corresponds to your API version in Postman.

1. To connect additional Azure API Management services, select **+ Add Service**. To remove a service, select **Remove**.
1. When you are finished adding services, select **Connect**.

    <img alt="Azure API Management setup" src="https://assets.postman.com/postman-docs/azure-apim-setup-v9-15.jpg" width="531px"/>

## Viewing Azure API deployments

## Exporting and deploying your API
