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
* [Exporting your API to Azure API Management](#exporting-your-api-to-azure-api-management)

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
    * **Azure API Version:** The Azure API version that corresponds to your API version in Postman.

1. To connect additional Azure API Management services, select **+ Add Service**. To remove a service, select **Remove**.
1. When you are finished adding services, select **Connect**.

    <img alt="Azure API Management setup" src="https://assets.postman.com/postman-docs/azure-apim-setup-v9-15.jpg" width="531px"/>

## Viewing Azure API deployments

After connecting to Azure API Management, you can view the deployment status and history for your API schemas in Postman. Select **APIs** in the sidebar, select an API and version, and then select the **Deployments** tab.

For each connected API Management service instance, you can view the resource group, location, subscription, and virtual IP address (VIP).

SCREENSHOT - DEPLOYMENTS TAB

Select a service to view more details about the connected Azure API version.

* **Revisions:** [Revisions](https://docs.microsoft.com/en-us/azure/api-management/api-management-revisions) enable you make and test changes to your API without affecting consumers. For each revision, you can view the revision ID, date created, description, URL, and Postman source.

    * Use the **Online** toggle to set a revision to be online or offline.
    * Use the **Current** toggle to set a revision to be the current revision for your API. Enter an optional description and select **Confirm**.

* **Changelog:**

* **Export History:**

<img alt="Viewing API deployments" src="https://assets.postman.com/postman-docs/api-gateway-deployments-tab-v9-15.jpg"/>

From the **Deployments** tab, you can take the following actions:

* To view your API Gateway in AWS, select the **AWS Gateway ID**.
* To export or deploy an HTTP schema, select **Deploy API**. Learn more about [deploying your API](#exporting-and-deploying-your-api).
* To view metrics for your API Gateway in AWS, select **View Dashboard**.
* To see the latest deployment status, select the refresh icon <img alt="Refresh icon" src="https://assets.postman.com/postman-docs/icon-refresh-v9-5.jpg#icon" width="14px">.
* To edit or delete the connection to Amazon API Gateway, select the three dots <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg#icon" width="18px">.

## Exporting your API to Azure API Management


> If you encounter an error when exporting, it may be because your schema uses some properties (such as `name` or `description`) that can only be updated on the current revision. For more information, see the Microsoft help article [API import restrictions and known issues](https://docs.microsoft.com/en-us/azure/api-management/api-management-api-import-restrictions). After you validate your schema against the restrictions, export it again.
