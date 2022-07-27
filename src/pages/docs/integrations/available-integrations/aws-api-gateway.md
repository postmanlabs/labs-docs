---
title: "AWS API Gateway"
updated: 2022-04-15
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Intro to collections"
    url: "/docs/sending-requests/intro-to-collections/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "Introducing Postman’s AWS API Gateway Integration"
    url: "https://blog.postman.com/aws-api-gateway-integration-postman/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Custom Webhooks"
    url: "/docs/integrations/webhooks/"
  - type: link
    name: "Slack Integration"
    url: "/docs/integrations/available-integrations/slack/"
---

> **You can now connect to Amazon API Gateway from the Postman API Builder.** After you connect your API to API Gateway, you can view stage information and deployment history on the **Deployments** tab in the API Builder.<br/><br/>OpenAPI 3.0 schemas for both HTTP and REST APIs are supported. In addition, for HTTP APIs, you can import your schema from API Gateway to Postman, export your schema from Postman to API Gateway for later deployment, or even deploy your HTTP API schema directly from Postman to a stage in API Gateway.<br/><br/>To learn more about connecting your API in Postman to Amazon API Gateway, see [Importing an API](/docs/designing-and-developing-your-api/importing-an-api/) and [Deploying to an Amazon API Gateway](/docs/designing-and-developing-your-api/deploying-an-api/deploying-an-api-aws/).

## Contents

* [Uploading API schemas to AWS API Gateway](#uploading-api-schemas-to-aws-api-gateway)

    * [Configuring an AWS API Gateway integration](#configuring-an-aws-api-gateway-integration)

* [Tracking API deployments with AWS API Gateway](#tracking-api-deployments-with-aws-api-gateway)

* [Next steps](#next-steps)

## Uploading API schemas to AWS API Gateway

> **The legacy Deploy HTTP APIs to AWS API Gateway (v2) integration has been deprecated.** You can no longer create new integrations using this legacy integration. Existing legacy integrations will continue to function, but you should start using the new AWS API Gateway integration as soon as possible. You can use the new integration to [view your AWS API Gateway deployments](/docs/designing-and-developing-your-api/deploying-an-api/deploying-an-api-aws/) in the Postman API Builder. You can also [import an API](/docs/designing-and-developing-your-api/importing-an-api/) from AWS API Gateway.

You can upload your API schemas directly to AWS API Gateway from Postman with this integration. This integration uses version 2 of the AWS API and only supports HTTP APIs with OpenAPI 3.0 schemas. Once the integration is configured, any new changes to your schema in Postman will also appear in your AWS API Gateway.

### Configuring an AWS API Gateway integration

1. Select [**Home**](https://go.postman.co/home).

    ![postman home](https://assets.postman.com/postman-docs/awsgateway-home.jpg)

1. Select [**Integrations**](https://go.postman.co/integrations/browse?category=all).

    ![postman integrations](https://assets.postman.com/postman-docs/awsgateway-integrations.jpg)

1. Search and select **AWS API Gateway**.
1. Select **Add Integration**.

    ![aws gateway add integration](https://assets.postman.com/postman-docs/aws-gateway-add-integration.jpg)

1. Enter your AWS access key ID, secret access key, and region, select **Continue**.

    > Learn [how to get your AWS credentials](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/getting-your-credentials.html).

    ![aws gateway auth and proceed](https://assets.postman.com/postman-docs/aws-gateway-auth-proceed.jpg)

1. Select your API, API version, and the API Gateway you'd like to deploy to. You can use an existing API Gateway, or create a new one by selecting **Create New API Gateway** from the dropdown.

    > If you are creating a new API Gateway, auto-deployment will automatically be set to false in AWS.

    ![aws gateway create](https://assets.postman.com/postman-docs/select-api-version-gateway-7.jpg)

    > You can have one AWS API Gateway integration configured for each API version.

To confirm this integration, go to your AWS Gateway dashboard, select your API Gateway, then select **Integrations** to view your newly uploaded endpoints.

![Configured integration in AWS](https://assets.postman.com/postman-docs/configured-in-aws-2.jpg)

This integration will be triggered whenever the configured Postman schema is updated. Any configured AWS integrations will be preserved.

> Note that if the API or specific API version is deleted, its configured integration will also be deleted.

## Tracking API deployments with AWS API Gateway

You can also use the **Deployments** tab to track your AWS API Gateway deployments. See [Deploying an API](/docs/designing-and-developing-your-api/deploying-an-api/) for details.

## Next steps

Learn more about other Postman integrations, including [custom webhooks](/docs/integrations/webhooks/) and [Slack](/docs/integrations/available-integrations/slack/).
