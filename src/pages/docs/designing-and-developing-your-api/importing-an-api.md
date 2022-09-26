---
title: 'Importing an API'
updated: 2022-09-15
search_keyword: "import, aws, api gateway"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "API development overview"
    url: "/docs/designing-and-developing-your-api/the-api-workflow/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "Stay on Top of Your API Deployments: AWS API Gateway Integration"
    url: "https://blog.postman.com/deployments-aws-api-gateway-integration/"
---

You can import an existing API definition into your API. API definitions can be imported from a local file or directory, a URL, raw text, a code repository, or an API gateway.

## Contents

* [Importing API definitions](#importing-api-definitions)
* [Importing multi-file API definitions](#importing-multi-file-api-definitions)
* [Importing API definitions from Amazon API Gateway](#importing-api-definitions-from-amazon-api-gateway)
* [Supported API definitions formats](#supported-api-definitions-formats)

## Importing API definitions

To import your API definitions into Postman:

1. Select **APIs** in the sidebar, then select **Import**.
1. Select one or more files, select a folder, enter a link to the API, or paste your raw text.

    > You can also import an API definition from a code repository. Learn more about [importing and exporting](/docs/getting-started/importing-and-exporting-data/).

1. Confirm the name, format, and what you would like your data to import as.
1. Select **Generate collection from this API** if you want to automatically generate a collection from an API definition and add it to the API.
1. Select **Import** to bring your data into Postman.

    > Select **Show advanced settings** for more configuration options. These options will differ depending on your API specification.

When importing into a team workspace, you can also choose to add the APIs to the [Private API Network](/docs/collaborating-in-postman/adding-private-network/).

<img alt="Importing an API confirmation" src="https://assets.postman.com/postman-docs/v10/api-builder-import-and-publish-v10.jpg"/>

## Importing multi-file API definitions

If your API definition consists of multiple files:

1. Select **APIs** in the sidebar, then select **Import**.
1. Select **Folder**, then select a local folder with your API files.
1. In the **Import Entities** tab, select the files you want to import for the API definition.
1. Under each file, select **Generate collection from this API** or specify advanced options, if needed.
1. Select **Import** to bring your API definition into Postman.

To learn more about working with multi-file API definitions, see [Editing an API definition](/docs/designing-and-developing-your-api/developing-an-api/defining-an-api/#working-with-multi-file-api-definitions).

## Importing API definitions from Amazon API Gateway

[Amazon API Gateway](https://aws.amazon.com/api-gateway/) enables developers to publish and manage APIs that access AWS as well as other web services and data sources. You can import APIs directly from AWS Gateway to Postman. This creates an integration with API Gateway. Once connected, you can view your API deployment status and history from within Postman. You can also view [Amazon CloudWatch](https://aws.amazon.com/cloudwatch/) metrics for each stage to get operational insight into your API.

This integration supports importing OpenAPI 3.0 definitions for both HTTP and REST APIs. Importing will create a new API in Postman, with the API name set as the name of the API Gateway, and the default API version set as the name of the stage or environment. The new API will also have the AWS API Gateway integration added to it.

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
1. Select an existing IAM policy or select **Create policy**. If you are creating a policy, use the following JSON code:

    ```json
    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Sid": "Stmt909923626743",
                "Effect": "Allow",
                "Action": [
                    "apigateway:GET",
                    "apigateway:PUT",
                    "apigateway:POST",
                    "cloudwatch:GetMetricData"
                ],
                "Resource": [
                    "*"
                ]
            }
        ]
    }
    ```

    This policy will enable exporting and deploying for HTTP API definitions. (Exporting and deploying aren't supported for REST API definitions.) You can customize the `Action` section in the IAM policy based on your needs:

    * `"apigateway:GET"` - (Required) Enables viewing API Gateway deployments for HTTP and REST APIs in Postman.
    * `"apigateway:PUT"` - Enables [exporting](/docs/designing-and-developing-your-api/deploying-an-api/deploying-an-api-aws/#exporting-and-deploying-your-api) HTTP API definitions to the API Gateway.
    * `"apigateway:POST"` - Enables [deploying](/docs/designing-and-developing-your-api/deploying-an-api/deploying-an-api-aws/#exporting-and-deploying-your-api) HTTP API definitions to a stage on the API Gateway.
    * `"apigateway:*"` - Assigns all GET, PUT, POST, PATCH, DELETE permissions to the IAM role.
    * `"cloudwatch:GetMetricData"` - Enables [viewing CloudWatch metrics](/docs/designing-and-developing-your-api/deploying-an-api/deploying-an-api-aws/#viewing-cloudwatch-metrics) in Postman.

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

When you're ready, select **Import**. After importing your API definition, you can [view API deployments in Postman](/docs/designing-and-developing-your-api/deploying-an-api/deploying-an-api-aws/).

## Supported API definitions formats

Postman directly supports importing the following formats:

* [OpenAPI 3.0 and 3.1](https://github.com/postmanlabs/openapi-to-postman)
* Swagger [1.2](https://github.com/postmanlabs/swagger1-to-postman) and [2.0](https://github.com/postmanlabs/swagger2-postman2-lambda)
* Protobuf 2 and 3
* [GraphQL](https://github.com/postmanlabs/graphql-to-postman)
* [cURL](https://github.com/postmanlabs/curl-to-postman)
* RAML [0.8](https://github.com/postmanlabs/raml-to-postman) and [1.0](https://github.com/postmanlabs/raml1-to-postman)
* [WSDL 1.1 and 2.0](https://github.com/postmanlabs/wsdl-to-postman)
* [HTTP Archive (HAR)](https://github.com/postmanlabs/har-to-postman)
* Web Application Description Language (WADL)

There are also tools on GitHub to convert different API specifications into a Postman Collection that can be imported:

* [`runscope-to-postman`](https://github.com/postmanlabs/runscope-to-postman)

* [`DHC-to-postman`](https://github.com/postmanlabs/dhc-to-postman)
