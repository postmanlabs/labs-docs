---
title: "AWS API Gateway"
order: 284
page_id: "aws-api-gateway"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Intro to collections"
    url: "/docs/postman/collections/intro-to-collections"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Custom Webhooks"
    url: "/docs/integrations/webhooks/"
  - type: link
    name: "Slack Integration"
    url: "/docs/integrations/slack/"
---

> __[Integrations are available on Postman Team, Business, and Enterprise plans.](https://www.getpostman.com/pricing)__

You can upload your API schemas directly to AWS API Gateway from Postman with this integration.

> This integration uses version 2 of the AWS API and only supports HTTP APIs with OpenAPI 3.0 schemas.

## Contents

* [Uploading API schemas to AWS API Gateway](#uploading-api-schemas-to-aws-api-gateway)

    * [Configuring an AWS API Gateway integration](#configuring-an-aws-api-gateway-integration)

* [Next steps](#next-steps)

## Uploading API schemas to AWS API Gateway

You can directly upload your API schemas from Postman to AWS API Gateway. Once the integration is configured, any new changes to your schema in Postman will also appear in your AWS API Gateway.

### Configuring an AWS API Gateway integration

To add an AWS API Gateway integration, navigate to your [Postman Dashboard](https://go.postman.co/). Select your desired workspace > **Integrations**. Click **Browse Integrations**, locate **AWS API Gateway**, and select **View Details**. Click **+ Add integration**.

![AWS API Gateway page](https://assets.postman.com/postman-docs/aws-api-gateway-integration-page.jpg)

Enter your AWS access key ID, secret access key, and region, then click **Continue**.

> Learn [how to get your AWS credentials](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/getting-your-credentials.html).

<img src="https://assets.postman.com/postman-docs/enter-aws-credentials.jpg" width="350px" alt="Enter access credentials"/>

Select your API, API version, and the API Gateway you'd like to deploy to from the dropdown menus. You can use an existing API Gateway, or create a new one by selecting **Create New API Gateway** from the dropdown.

> If you are creating a new API Gateway, auto-deployment will automatically be set to false in AWS.

<img src="https://assets.postman.com/postman-docs/select-api-version-gateway.jpg" width="350px" alt="Enter API info and Gateway"/>

Your newly created integration will now appear under **Configured Integrations**.

> You can have one AWS API Gateway integration configured for each API version.

![Configured integrations](https://assets.postman.com/postman-docs/config-integrations-aws.jpg)

To confirm this integration, navigate to your AWS Gateway dashboard, select your API Gateway, then select **Integrations** to view your newly uploaded endpoints.

<img src="https://assets.postman.com/postman-docs/configured-in-aws-2.jpg" width="500px" alt="Configured integration in AWS"/>

This integration will be triggered whenever the configured Postman schema is updated. Any configured AWS integrations will be preserved.

> Note that if the API or specific API version is deleted, its configured integration will also be deleted.

## Next steps

Learn more about other Postman integrations, including [custom webhooks](/docs/integrations/webhooks/) and [Slack](/docs/integrations/slack/).
