---
title: 'Deploying an API overview'
updated: 2022-09-15
search_keyword: "deploy, aws, apigee, api gateway, azure, api management"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "API development overview"
    url: "/docs/designing-and-developing-your-api/the-api-workflow/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "API Lifecycle, Part 2: Monitor and Deploy an API | Postman Space Camp"
    url: "https://youtu.be/voAUfBx8fnE"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "Introducing Powerful Integrations"
    url: "https://blog.postman.com/the-new-postman-api-platform/"
---

Stay on top of your API deployments in Postman by connecting to an API gateway. Postman integrates with popular API gateways, including [Amazon API Gateway](https://aws.amazon.com/api-gateway/), [Apigee X](https://cloud.google.com/apigee), and [Azure API Management](https://azure.microsoft.com/en-us/services/api-management/). Once connected to an API gateway, you can view your API deployment status and history from within Postman.

## Contents

* [Connecting to an API Gateway](#connecting-to-an-api-gateway)
* [Viewing API deployments in Postman](#viewing-api-deployments-in-postman)

## Connecting to an API gateway

To connect to an API gateway in Postman, select **APIs** in the sidebar and select an API. Select **Deployments**, and then select **AWS API Gateway**, **Apigee X**, or **Microsoft Azure**.

Enter the required information to configure the API gateway integration. For more information, see the detailed steps for your API gateway:

* [Deploying to an Amazon API Gateway](/docs/designing-and-developing-your-api/deploying-an-api/deploying-an-api-aws/)
* [Deploying to an Apigee API gateway](/docs/designing-and-developing-your-api/deploying-an-api/deploying-an-api-apigee/)
* [Deploying to Azure API Management](/docs/designing-and-developing-your-api/deploying-an-api/deploying-an-api-azure/)

<img alt="Connecting to an API Gateway" src="https://assets.postman.com/postman-docs/v10/api-builder-connect-deployments-v10-0-13.jpg" />

## Viewing API deployments in Postman

After connecting to an API gateway, you can view the deployment history for your API definitions in Postman. Select **APIs** in the sidebar and select an API, then select **Deployments**.

* **Amazon API Gateway** - View the active deployment for each stage, recent exports from Postman, and details about each deployment. You can also export or deploy your HTTP API definition from Postman to your gateway. Learn more about [Viewing Amazon API gateway deployments](/docs/designing-and-developing-your-api/deploying-an-api/deploying-an-api-aws/#viewing-amazon-api-gateway-deployments).
* **Apigee X** - View details about your Apigee API proxy and proxy endpoints. You can also view details about your Apigee environments. Learn more about [Viewing Apigee X deployments](/docs/designing-and-developing-your-api/deploying-an-api/deploying-an-api-apigee/#viewing-apigee-x-deployments).
* **Azure API Management** View deployments for each of your Azure API Management services. You can view the revision history, changelog, and export history. You can also export your API definition from Postman to Azure API Management. Learn more about [Viewing Azure API deployments](/docs/designing-and-developing-your-api/deploying-an-api/deploying-an-api-azure/#viewing-azure-api-deployments).
