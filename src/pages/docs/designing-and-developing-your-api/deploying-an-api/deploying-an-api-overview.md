---
title: 'Deploying an API overview'
updated: 2022-09-15
search_keyword: "deploy, aws, apigee, api gateway"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Developing an API"
    url: "/docs/designing-and-developing-your-api/developing-an-api/"
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

Stay on top of your API deployments in Postman by connecting to an API gateway. Postman integrates with popular API gateways, including [Amazon API Gateway](https://aws.amazon.com/api-gateway/) and [Apigee X](https://cloud.google.com/apigee). Once connected to an API gateway, you can view your API deployment status and history from within Postman.

## Contents

* [Connecting to an API Gateway](#connecting-to-an-api-gateway)
* [Viewing API deployments in Postman](#viewing-api-deployments-in-postman)

## Connecting to an API gateway

To connect to an API gateway in Postman, select **APIs** in the sidebar and select an API. Under **Power up your API**, select **Deployments**, and then select **AWS API Gateway** or **Apigee X**.

Enter the required information to configure the API gateway integration. For detailed steps, see [Deploying to an Amazon API Gateway](/docs/designing-and-developing-your-api/deploying-an-api/deploying-an-api-aws/) or [Deploying to an Apigee API gateway](/docs/designing-and-developing-your-api/deploying-an-api/deploying-an-api-apigee/).

<!-- TO DO: UPDATE SCREENSHOT -->

<img alt="Connecting to an API Gateway" src="https://assets.postman.com/postman-docs/deployments-api-gateway-v9-11.jpg" width="916px"/>

## Viewing API deployments in Postman

After connecting to an API gateway, you can view the deployment history for your API schemas in Postman. Select **APIs** in the sidebar and select an API. Under **Power up your API**, select **Deployments**.

* **Amazon API Gateway** - View the active deployment for each stage, recent exports from Postman, and details about each deployment. You can also export or deploy your HTTP API schema from Postman to your gateway. Learn more about [Viewing Amazon API gateway deployments](/docs/designing-and-developing-your-api/deploying-an-api/deploying-an-api-aws/#viewing-amazon-api-gateway-deployments).
* **Apigee X** - View details about your Apigee API proxy and proxy endpoints. You can also view details about your Apigee environments. Learn more about [Viewing Apigee X deployments](/docs/designing-and-developing-your-api/deploying-an-api/deploying-an-api-apigee/#viewing-apigee-x-deployments).
