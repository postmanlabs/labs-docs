---
title: 'Importing an API'
updated: 2022-04-15
search_keyword: "import, aws, api gateway"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Developing an API"
    url: "/docs/designing-and-developing-your-api/developing-an-api/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "Stay on Top of Your API Deployments: AWS API Gateway Integration"
    url: "https://blog.postman.com/deployments-aws-api-gateway-integration/"

---

You can import an existing API schema into your API. API schemas can be imported from a local file or directory, a URL, raw text, a code repository, or an API gateway.

## Contents

* [Importing API schemas](#importing-api-schemas)
* [Importing API schemas from GitHub](#importing-api-schemas-from-github)
* [Importing API schemas from Bitbucket](#importing-api-schemas-from-bitbucket)
* [Importing API schemas from Amazon API Gateway](#importing-api-schemas-from-amazon-api-gateway)
* [Importing API schemas from Azure API Management](#importing-api-schemas-from-azure-api-management)
* [Supported API schema formats](#supported-api-schema-formats)

## Importing API schemas

To import your API specifications into Postman:

1. From the sidebar, select __APIs__, then select **Import**.
1. Select a file or folder, enter a link to the API, or paste your raw text.

    > You can also import from a code repository or API gateway. See below for details.

1. Confirm the name, format, and what you would like your data to import as.
1. Select **Import** to bring your data into Postman.

> You can configure your **Import Settings**, which will differ depending on your API specification.

You can import several API specification files at once. Select the workspace you'd like to import the APIs into, choose whether you want to generate collections from the APIs, configure the details, and select **Import**.

When importing into a team workspace, you can also choose to add the APIs to the [Private API Network](/docs/collaborating-in-postman/adding-private-network/).

[![Import several APIs](https://assets.postman.com/postman-docs/import-export-publish-to-private-api-network-22.jpg)](https://assets.postman.com/postman-docs/import-export-publish-to-private-api-network-22.jpg)

## Importing API schemas from GitHub

> You must sign in to a [Postman account](/docs/getting-started/postman-account/#signing-up-for-a-postman-account) to use this feature.

You can import API schemas from a GitHub repository.

1. From the sidebar, select __APIs__, then select **Import**.

1. Select **Code repository**, then select **GitHub**.

1. Confirm your GitHub account and **Authorize postmanlabs** to access your repositories.

1. In Postman, select your GitHub organization, repository, and branch, then select **Continue**.

1. Confirm the API schemas you would like to import into Postman. You can also select **Generate collection from imported APIs** and select what you would like to link this collection as. Select **Show advanced settings** to control how Postman will generate collections based on your file types, then select **Import**.

   ![Confirm import from GitHub](https://assets.postman.com/postman-docs/import-export-github-files-confirm.jpg)

You will receive a confirmation once the import has completed. You can now view your newly imported API schemas and generated collections in Postman.

## Importing API schemas from Bitbucket

> You must sign in to a [Postman account](/docs/getting-started/postman-account/#signing-up-for-a-postman-account) to use this feature.

You can import API schemas from a Bitbucket repository.

1. From the sidebar, select __APIs__, then select **Import**.

1. Select **Code repository**, then select **Bitbucket**.

1. Confirm your Bitbucket account and **Authorize Postman** to access your repositories.

1. In Postman, select your Bitbucket workspace, repository, and branch, then select **Continue**.

1. Postman shows a preview of the API schemas to import into your workspace. Select **Import** to confirm and complete the import.

You will receive a confirmation once the import has completed. You can now view your newly imported API schemas and generated collections in Postman.

## Importing API schemas from Amazon API Gateway

[Amazon API Gateway](https://aws.amazon.com/api-gateway/) enables developers to publish and manage APIs that access AWS as well as other web services and data sources. You can import APIs directly from AWS Gateway to Postman. This creates an integration with API Gateway. Once connected, you can view your API deployment status and history from within Postman. You can also view [Amazon CloudWatch](https://aws.amazon.com/cloudwatch/) metrics for each stage to get operational insight into your API.

This integration supports importing OpenAPI 3.0 schemas for both HTTP and REST APIs. Importing will create a new API in Postman, with the API name set as the name of the API Gateway, and the default API version set as the name of the stage or environment. The new API will also have the AWS API Gateway integration added to it.

To import an API from AWS API Gateway:

1. From the sidebar, select __APIs__, then select **Import**.
1. Select **API Gateway**, then select **AWS API Gateway**.
1. Connect to the AWS API Gateway as follows.

When importing an API from AWS API Gateway, you can choose to authenticate by [creating an AWS IAM role](#authenticating-with-an-aws-iam-role) or by [using an AWS access key](#authenticating-with-an-aws-access-key). Follow the steps for your chosen method below.

### Authenticating with an AWS IAM role

To set up a connection to Amazon API Gateway using an AWS IAM role:

1. Select **IAM** under **AWS Authentication Mechanism**.

    <img alt="Connecting with AWS IAM role" src="https://assets.postman.com/postman-docs/import-from-api-gateway-with-iam-role-v9.jpg" />

1. Select the **AWS API Type** (HTTP or REST).

Next, create an IAM role for Postman in AWS:

1. Open the [AWS IAM console](https://console.aws.amazon.com/iam/home#/roles) and select **Create role**.
1. Under **Select type of trusted entity**, select **Another AWS account**.
1. Enter Postman's **AWS Account ID**: `258201882842`
1. Under options, select the check box to **Require external ID** and enter the **External ID** from Postman. You can find the external ID under **Step 1: Create an IAM role**.

    > For more information, refer to the [AWS IAM guide on using external IDs](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user_externalid.html).

1. Select **Next: Permissions**.
1. Select an existing IAM policy or select **Create policy**. If you are creating a policy, use the following JSON:

    ```json
    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Sid": "Stmt909923626743",
                "Effect": "Allow",
                "Action": [
                    "apigateway:GET",
                    "cloudwatch:GetMetricData"
                ],
                "Resource": [
                    "*"
                ]
            }
        ]
    }
    ```

1. Select **Next: Tags**.
1. Select **Next: Review**.
1. Add a **Role name** and **Role description**, then select **Create role**.

Copy the **Role ARN** from AWS and paste it in Postman under **Step 2: Enter role ARN and region**. Next, enter the **AWS Region** where the API Gateway is located and select the **API Gateway**. Then, enter an **API Name** for the imported API. When you're ready, select **Connect**.

### Authenticating with an AWS access key

To set up a connection to Amazon API Gateway using an AWS access key, select **Access Key** under **AWS Authentication Mechanism**.

<img alt="Connecting with AWS access key" src="https://assets.postman.com/postman-docs/import-from-api-gateway-with-access-key.jpg" />

Next, enter information about the connection:

* Select the **AWS API Type** (HTTP or REST).
* Enter the **Access Key ID** and **Secret Access Key** for your AWS account. (Learn how to [find your credentials in AWS](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/getting-your-credentials.html).)
* Enter the **AWS Region** where the API Gateway is located and select the **API Gateway**.
* Enter an **API Name** for the imported API.

When you're ready, select **Import**.

## Importing API schemas from Azure API Management

You can import a schema from a connected Azure API Management service to an API in Postman. Importing a schema will create a new API in Postman and will also configure an integration with Azure API Management. Learn more about [integrating with Azure API Management](/docs/designing-and-developing-your-api/deploying-an-api/deploying-an-api-azure/).

To import an API schema from Azure API Management:

1. From the sidebar, select **APIs**, then select **Import**.
1. Select **API Gateway**, then select **Azure APIM**.
1. You'll be prompted to authorize Postman to access your Microsoft Azure account. After you grant access, you can close the browser tab and return to Postman.
1. Enter information about the Azure API Management service you want to import a schema from:

    * **Subscription** - The [subscription](https://docs.microsoft.com/en-us/azure/api-management/api-management-subscriptions) where the service was created.
    * **Resource Group** - The [resource group](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal) that contains the service.
    * **Service** - The Azure API Management [service instance](https://docs.microsoft.com/en-us/azure/api-management/api-management-key-concepts) used for deploying your API.
    * **Azure API Version** - The Azure API [version](https://docs.microsoft.com/en-us/azure/api-management/api-management-versions) you want to import.
    * **Schema type** - Select the specification for the schema you want to import (OpenAPI 2.0 or OpenAPI 3.0).
    * **API name** - The name to use for the new API that will be created in Postman using the imported schema.

1. Select **Import**.

    <img alt="Importing an API schema from Azure APIM" src="https://assets.postman.com/postman-docs/import-schema-from-azure-apim-v9-19.jpg" width="523px"/>

## Supported API schema formats

Postman directly supports importing the following formats:

* [OpenAPI 3.0 and 3.1](https://github.com/postmanlabs/openapi-to-postman)
* Swagger [1.2](https://github.com/postmanlabs/swagger1-to-postman) and [2.0](https://github.com/postmanlabs/swagger2-postman2-lambda)
* [GraphQL](https://github.com/postmanlabs/graphql-to-postman)
* [cURL](https://github.com/postmanlabs/curl-to-postman)
* RAML [0.8](https://github.com/postmanlabs/raml-to-postman) and [1.0](https://github.com/postmanlabs/raml1-to-postman)
* [WSDL 1.1 and 2.0](https://github.com/postmanlabs/wsdl-to-postman)
* [HTTP Archive (HAR)](https://github.com/postmanlabs/har-to-postman)
* Web Application Description Language (WADL)

There are also tools on GitHub to convert different API specifications into a Postman collection that can be imported:

* [`runscope-to-postman`](https://github.com/postmanlabs/runscope-to-postman)

* [`DHC-to-postman`](https://github.com/postmanlabs/dhc-to-postman)
