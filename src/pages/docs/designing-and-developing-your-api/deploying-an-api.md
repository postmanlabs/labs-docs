---
title: 'Deploying an API'
order: 81.65
page_id: 'deploying_an_api'
updated: 2022-03-31
search_keyword: "deploy, aws, api gateway"
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
    name: "Stay on Top of Your API Deployments: AWS API Gateway Integration"
    url: "https://blog.postman.com/deployments-aws-api-gateway-integration/"

---

[Amazon API Gateway](https://aws.amazon.com/api-gateway/) enables developers to publish and manage APIs that access AWS as well as other web services and data sources. Once connected to API Gateway, you can view your API deployment status and history from within Postman. You can also view [Amazon CloudWatch](https://aws.amazon.com/cloudwatch/) metrics for each stage to get operational insight into your API.

This integration supports OpenAPI 3.0 schemas for both HTTP and REST APIs. For HTTP APIs, you can choose to export your schema from Postman to Amazon API Gateway. You can then use the AWS console to deploy your exported schema to a stage. Alternatively, you can deploy your HTTP API schema directly from Postman to a stage in API Gateway.

## Contents

* [Connecting to Amazon API Gateway](#connecting-to-amazon-api-gateway)
    * [Authenticating with an AWS IAM role](#authenticating-with-an-aws-iam-role)
    * [Authenticating with an AWS access key](#authenticating-with-an-aws-access-key)
* [Viewing Amazon API gateway deployments](#viewing-amazon-api-gateway-deployments)
* [Viewing CloudWatch metrics](#viewing-cloudwatch-metrics)
* [Exporting and deploying your API](#exporting-and-deploying-your-api)

## Connecting to Amazon API Gateway

To connect to Amazon API Gateway in Postman, select **APIs** in the left sidebar, and then select the API and version you want to connect. Select the **Deployments** tab, and then select **AWS API Gateway**.

<img alt="Connecting to AWS API Gateway" src="https://assets.postman.com/postman-docs/deployments-aws-api-gateway-v9-5.jpg" width="915px"/>

When setting up the connection to API Gateway, you can choose to authenticate by [creating an AWS IAM role](#authenticating-with-an-aws-iam-role) or by [using an AWS access key](#authenticating-with-an-aws-access-key). Follow the steps for your chosen method below.

### Authenticating with an AWS IAM role

To set up a connection to Amazon API Gateway using an AWS IAM role, select **IAM** under **AWS Authentication Mechanism**.

<img alt="Connecting with AWS IAM role" src="https://assets.postman.com/postman-docs/connect-to-api-gateway-with-iam-role-v9-5.jpg" width="502px"/>

Enter a **Nickname** for this integration and select the **AWS API Type** (HTTP or REST).

Next, create an IAM role for Postman in AWS:

1. Navigate to the [AWS IAM console](https://console.aws.amazon.com/iam/home#/roles) and select **Create role**.
2. Under **Select type of trusted entity**, select **Another AWS account**.
3. Enter Postman's **AWS Account ID**: `258201882842`
4. Under options, select the check box to **Require external ID** and enter the **External ID** from Postman. You can find the external ID under **Step 1: Create an IAM role**.

    > For more information, refer to the [AWS IAM guide on using external IDs](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user_externalid.html).

5. Select **Next: Permissions**.
6. Select an existing IAM policy or select **Create policy**. If you are creating a policy, use the following JSON:

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

    > If you previously created an IAM policy, make sure to add `"cloudwatch:GetMetricData"` to the policy as shown above to enable Postman to get CloudWatch metrics.

7. Select **Next: Tags**.
8. Select **Next: Review**.
9. Add a **Role name** and **Role description**, then select **Create role**.

Copy the **Role ARN** from AWS and paste it in Postman under **Step 2: Enter role ARN and region**. Next, enter the **AWS Region** where the API Gateway is located and select the **API Gateway**. When you're ready, select **Connect**.

### Authenticating with an AWS access key

To set up a connection to Amazon API Gateway using an AWS access key, select **Access Key** under **AWS Authentication Mechanism**.

<img alt="Connecting with AWS access key" src="https://assets.postman.com/postman-docs/connect-to-api-gateway-with-access-key-v9-5.jpg" width="502px"/>

Next, enter information about the connection:

* Enter a **Nickname** for this integration.
* Select the **AWS API Type** (HTTP or REST).
* Enter the **Access Key ID** and **Secret Access Key** for your AWS account. (Learn how to [find your credentials in AWS](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/getting-your-credentials.html).)
* Enter the **AWS Region** where the API Gateway is located and select the **API Gateway**.

When you're ready, select **Connect**.

## Viewing Amazon API Gateway deployments

After connecting to Amazon API Gateway, you can view the export and deployment history for your API schemas in Postman. Select **APIs** in the left sidebar, select an API and version, and then select the **Deployments** tab.

* For each stage you can view the active deployment, the creation date, and the date last updated. You can also view CloudWatch metrics for the last week, such as average latency and the number of 4xx and 5xx errors.
    * Select the arrow next to a stage to view additional details, including the invoke URL and stage description (from AWS).
    * Select a stage name to view additional metrics on the [CloudWatch dashboard](#viewing-cloudwatch-metrics).
* For each export from Postman, you can view the source of the export and the time when exported.
* For each deployment you can view the ID, description, and creation date.

<img alt="Viewing API deployments" src="https://assets.postman.com/postman-docs/api-gateway-view-deployments-v9-14.jpg"/>

From the **Deployments** tab, you can take the following actions:

* To view your API Gateway in AWS, select the **AWS Gateway ID**.
* To export or deploy your schema, select **Deploy API** (for HTTP API schemas only). Learn more about [deploying your API](#exporting-and-deploying-your-api).
* To view metrics for your API Gateway in AWS, select **View Dashboard**.
* To see the latest deployment status, select the refresh icon <img alt="Refresh icon" src="https://assets.postman.com/postman-docs/icon-refresh-v9-5.jpg#icon" width="14px">.
* To edit or delete the connection to Amazon API Gateway, select the three dots <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg#icon" width="18px">.

## Viewing CloudWatch metrics

[Amazon CloudWatch](https://aws.amazon.com/cloudwatch/) provides monitoring and observability for APIs deployed to Amazon API Gateway. After connecting to API Gateway, you can view the last week of CloudWatch metrics in Postman.

From the **Deployments** tab, select the name of a stage to view the CloudWatch dashboard for that stage. The graphs on the dashboard display metrics for latency, integration latency, 4xx and 5xx error rates, and count.

* Hover over a data point on a graph to view detailed metrics data.
* Hover over the information icon <img alt="Information icon" src="https://assets.postman.com/postman-docs/icon-information-v9-5.jpg#icon" width="16px"> above a graph to learn more about the metrics in that graph.

<img alt="Viewing CloudWatch metrics" src="https://assets.postman.com/postman-docs/api-gateway-view-cloudwatch-v9-14.jpg"/>

From the CloudWatch dashboard, you can take the following actions:

* To view metrics for a different stage, select the stage in the drop-down list.
* To view metrics for a different time range, select the time range in the drop-down list.
* To view metrics for your API Gateway in AWS, select **View Dashboard**.
* To view the currently selected stage in AWS, select **View Stage on AWS**.
* To view the latest CloudWatch metrics, select the refresh icon <img alt="Refresh icon" src="https://assets.postman.com/postman-docs/icon-refresh-v9-5.jpg#icon" width="14px">.

## Exporting and deploying your API

Exporting an HTTP API schema makes it available in the connected Amazon API Gateway. After you export a schema from Postman, use the AWS console to configure and deploy the schema to a stage in API Gateway. Alternatively, when exporting, you can choose to deploy the schema directly from Postman to a stage in the connected API Gateway. Once the schema is deployed, users can start calling the API.

> Only HTTP API schemas can be exported and deployed from Postman. To deploy a REST API schema, use the AWS console.

1. Open your API by selecting **APIs** in the left sidebar, and then selecting an API and a version.
1. Select the **Deployments** tab, and then select **Deploy API**.

    You can also export and deploy your API from the Changelog. Open the Changelog <img alt="Changelog icon" src="https://assets.postman.com/postman-docs/icon-changelog-v9.jpg#icon" width="18px"> in the right context bar, select the three dots <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg#icon" width="18px"> next to a release, and then select **Deploy Schema**.

1. Select the version, branch, or release to deploy. Learn more about [versioning an API](/docs/designing-and-developing-your-api/versioning-an-api/) and [creating a release](/docs/designing-and-developing-your-api/versioning-an-api/#creating-a-release).
1. (Optional) If you would like to immediately deploy the schema to a stage after exporting, select **Deploy on a stage**. Select the AWS stage to deploy the schema to, and enter a brief description.

    > To deploy your schema, your gateway must have at least one route with a configured integration.

1. Select **Deploy**.

<img alt="Deploying an API" src="https://assets.postman.com/postman-docs/deploy-api-schema-on-aws-v9-8.jpg" width="502px"/>

> [API Gateway extensions to Open API](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions.html) (vendor extensions) are preserved when pushing and deploying a schema from Postman. Postman merges any extensions present in the API Gateway into the schema before pushing the merged schema to the API Gateway.
