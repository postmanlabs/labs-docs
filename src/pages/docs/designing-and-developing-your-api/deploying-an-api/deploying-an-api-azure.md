---
title: 'Deploying to Azure API Management'
page_id: 'deploying_an_api_azure'
updated: 2022-09-15
search_keyword: "deploy, azure, api management"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Developing an API"
    url: "/docs/designing-and-developing-your-api/developing-an-api/"

---

[Azure API Management](https://azure.microsoft.com/en-us/services/api-management/) enables developers to deploy API gateways for APIs hosted in Microsoft Azure, other cloud platforms, or on-premises. Once connected to Azure API Management, you can view your API deployment status and history from within Postman. You can also export your OpenAPI definition from Postman to Azure API Management, or import a definition from Azure to use it in Postman.

## Contents

* [Connecting to Azure API Management](#connecting-to-azure-api-management)
* [Viewing Azure API deployments](#viewing-azure-api-deployments)
* [Importing a definition from Azure](#importing-a-definition-from-azure)
* [Exporting your API to Azure API Management](#exporting-your-api-to-azure-api-management)

## Connecting to Azure API Management

To connect to Azure API Management in Postman:

1. Select **APIs** in the sidebar and select an API.
1. Select **Deployments**, and then select **Microsoft Azure**.
1. You'll be prompted to authorize Postman to access your Microsoft Azure account. After you grant access, you can close the browser tab and return to Postman.
1. Enter information about the Azure API Management service you want to connect to your API:

    * **Subscription** - The [subscription](https://docs.microsoft.com/en-us/azure/api-management/api-management-subscriptions) where the service was created.
    * **Resource Group** - The [resource group](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal) that contains the service.
    * **Service** - The Azure API Management [service instance](https://docs.microsoft.com/en-us/azure/api-management/api-management-key-concepts) used for deploying your API.
    * **API Version** - The Azure API [version](https://docs.microsoft.com/en-us/azure/api-management/api-management-versions) that corresponds to your API in Postman.

1. To connect more Azure API Management services, select **+ Add Service**. To remove a service, select **Remove**.
1. When you're finished adding services, select **Connect**.

    <img alt="Azure API Management setup" src="https://assets.postman.com/postman-docs/v10/azure-apim-setup-v10-0-25.jpg" width="513px"/>

1. If you want, you can choose to import a definition from Azure API Management:

    * To import a definition, select the **Definition type** (OpenAPI 2.0 or OpenAPI 3.0). Then select the **Azure service** to import the definition from and select **Import**. _Importing a definition will replace your current API definition or add a new definition if one doesn't exist._
    * If you don't want to import a definition, select **Maybe later**. You can [import a definition](#importing-a-definition-from-azure) at any time after connecting to Azure API Management.

    <img alt="Azure API Management import definition during setup" src="https://assets.postman.com/postman-docs/v10/azure-apim-setup-import-v10-0-25.jpg" width="513px"/>

## Viewing Azure API deployments

After connecting to Azure API Management, you can view the deployment status and history for your API definition in Postman. Select **APIs** in the sidebar and select an API, then select **Deployments**.

For each connected API Management service instance, you can view the resource group, location, subscription, and virtual IP address (VIP).

<img alt="Viewing Azure API Management services" src="https://assets.postman.com/postman-docs/v10/azure-apim-deployments-v10-0-25.jpg"/>

Select a service to view more details about the connected Azure API version.

* **Revisions** - [Revisions](https://docs.microsoft.com/en-us/azure/api-management/api-management-revisions) enable you make and test changes to your API without affecting consumers. For each revision, you can view the revision ID, date created, description, URL, and Postman source.

    * Use the **Online** toggle to set a revision to offline or online. Consumers can't access an offline revision.
    * Use the **Current** toggle to make a revision the current revision for your API. Enter an optional description and select **Confirm**. Consumers access the current revision when calling the API.

* **Changelog** - The changelog shows the deployment history for your API. Each time you make a revision current, Postman adds an entry to the changelog, including the date created, the date last updated, and a description of the change.

* **Export History** - The export history lists all exports from Postman for this API. For each export, you can view the date created, the Azure revision, and the Postman source.

<img alt="Viewing a service instance" src="https://assets.postman.com/postman-docs/v10/azure-apim-view-a-service-v10.jpg"/>

From the service details view, you can take the following actions:

* Use the dropdown list to view a different Azure API Management service instance.
* To export your definition to Azure, select **Export API**. Learn more about [exporting your API](#exporting-your-api-to-azure-api-management).
* To import a definition from Azure, select **Import Definition**. Learn more about [importing a definition](#importing-a-definition-from-azure).
* To see the latest deployment status, select the refresh icon <img alt="Refresh icon" src="https://assets.postman.com/postman-docs/icon-refresh-v9-5.jpg#icon" width="14px">.
* To edit or delete the connection to Azure API management, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px">.
* To open the gateway URL of the API management service, select the **Gateway URL** link.
* To open the developer portal for the API management service, select **View Developer Portal**.

## Importing a definition from Azure

You can import a definition from a connected Azure API Management service to your API in Postman. _Importing a definition will replace your current API definition or add a new definition if one doesn't exist._

1. Select **APIs** in the sidebar and select an API.
1. Select **Deployments**, and then select **Import Definition**.
1. Select the **Definition type** (OpenAPI 2.0 or OpenAPI 3.0).
1. Select the **Azure service** to import the definition from.
1. Select **Import**.

<img alt="Importing a definition" src="https://assets.postman.com/postman-docs/v10/azure-apim-import-schema-v10.jpg" width="651px"/>

## Exporting your API to Azure API Management

Exporting an OpenAPI definition makes it available in the connected Azure API Management service. OpenAPI 2.0 and 3.0 definitions are supported. You can export the definition to an existing revision or to a new revision.

1. Select **APIs** in the sidebar and select an API.
1. Select **Deployments**.
1. Select the service you want to export to, and then select **Export API**.
1. Select the source of the definition you want to export. You can select the current definition or any [published version](/docs/designing-and-developing-your-api/versioning-an-api/api-versions/) of the definition.
1. Enter a brief description for the export.
1. (Optional) If you want to export the definition to an existing revision, select the check box. Select the **Revision ID** of the revision you want to update.

    > If you don't select the checkbox, Postman exports the API to a new revision.

1. Select **Export**.

<img alt="Exporting an API" src="https://assets.postman.com/postman-docs/v10/azure-apim-export-v10.jpg" width="526px"/>

After exporting, you can use the **Current** toggle to make the new or updated revision the current revision.

### Troubleshooting export issues

If you have problems exporting your definition, check the following:

* Some definition fields (such as name, description, and protocols) must be updated on the current revision and can't be updated on other revisions. To update these fields on revisions that aren't the current revision, perform a manual merge instead.

* Some properties of the OpenAPI specification aren't supported by Azure API Management. For more information, see the Microsoft help article [API import restrictions and known issues](https://docs.microsoft.com/en-us/azure/api-management/api-management-api-import-restrictions).
