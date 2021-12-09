---
title: 'Deploying an API'
order: 81.65
page_id: 'deploying_an_api'
updated: 2021-12-15
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
    name: "Introducing Powerful Integrations"
    url: "https://blog.postman.com/the-new-postman-api-platform/"

---

Stay on top of your API deployments in Postman by connecting to [AWS API Gateway](https://aws.amazon.com/api-gateway/). With this integration, you can view your API deployment status and history from within Postman. You can also deploy any version of your API directly from Postman to a stage in AWS API Gateway.

* [Connecting to AWS API Gateway](#connecting-to-aws-api-gateway)
    * [Authenticating with an AWS IAM role](#authenticating-with-an-aws-iam-role)
    * [Authenticating with an AWS access key](#authenticating-with-an-aws-access-key)
* [Viewing API deployments in Postman](#viewing-api-deployments-in-postman)
* [Deploying your API from Postman](#deploying-your-api-from-postman)

## Connecting to AWS API Gateway

To connect to AWS API Gateway in Postman, select **APIs** in the left sidebar, and then select the API and version you want to connect. Select the **Deployments** tab, and then select **AWS API Gateway**.

<img alt="Connecting to AWS API Gateway" src="https://assets.postman.com/postman-docs/deployments-aws-api-gateway-v9-5.jpg" width="915px"/>

When setting up the connection to AWS API Gateway, you can choose to authenticate by [creating an AWS IAM role](#authenticating-with-an-aws-iam-role) or by [using an AWS access key](#authenticating-with-an-aws-access-key). Follow the steps for your chosen method below.

### Authenticating with an AWS IAM role

To set up a connection to AWS API Gateway using an AWS IAM role, select **IAM** under **AWS Authentication Mechanism**.

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
                    "apigateway:GET"
                ],
                "Resource": [
                    "*"
                ]
            }
        ]
    }
    ```

7. Select **Next: Tags**.
8. Select **Next: Review**.
9. Add a **Role name** and **Role description**, then select **Create role**.

Copy the **Role ARN** from AWS and paste it in Postman under **Step 2: Enter role ARN and region**. Next, enter the **AWS Region** where your API gateway is located and select the **API Gateway**. When you're ready, select **Connect** to connect to AWS API Gateway.

### Authenticating with an AWS access key

To set up a connection to AWS API Gateway using an AWS access key, select **Access Key** under **AWS Authentication Mechanism**.

<img alt="Connecting with AWS access key" src="https://assets.postman.com/postman-docs/connect-to-api-gateway-with-access-key-v9-5.jpg" width="502px"/>

Next, enter information about the connection:

* Enter a **Nickname** for this integration.
* Select the **AWS API Type** (HTTP or REST).
* Enter the **Access Key ID** and **Secret Access Key** for your AWS account. (Learn how to [find your credentials in AWS](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/getting-your-credentials.html).)
* Enter the **AWS Region** where your API gateway is located and select the **API Gateway**.

When you're ready, select **Connect** to connect to AWS API Gateway

## Viewing API deployments in Postman

After connecting to AWS API Gateway, you can view API deployment status and history in Postman. Select **APIs** in the left sidebar, select an API and version, and then select the **Deployments** tab.

<img alt="Viewing API deployments" src="https://assets.postman.com/postman-docs/api-gateway-deployments-configured-v9-5.jpg" width="915px"/>

For each deployment you can view the ID, description, creation date, and status. For each stage you can view the most recent deployment, the creation date, and the date last updated. Select a stage to view additional details, including the invoke URL and stage description (from AWS).

* To view your API gateway in AWS, select the **AWS Gateway ID**.
* To deploy your schema, select **Deploy API**. Learn more about [deploying your API](#deploying-your-api-from-postman).
* To view metrics for your API gateway in AWS, select **View Dashboard**.
* To see the last time your schema was deployed, hover over the information icon <img alt="Information icon" src="https://assets.postman.com/postman-docs/icon-information-v9-5.jpg" width="16px" style="vertical-align:middle;margin-bottom:5px">.
* To see the latest deployment status, select the refresh icon <img alt="Refresh icon" src="https://assets.postman.com/postman-docs/icon-refresh-v9-5.jpg" width="14px" style="vertical-align:middle;margin-bottom:5px">.
* To edit or delete the connection to AWS API Gateway, select the three dots <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px">.

## Deploying your API from Postman

Deploying an API schema makes it available on the connected AWS API Gateway, so users can start calling the API. You can also choose to export the schema to the API gateway without deploying it, and deploy the schema later using the AWS console.

1. Open your API by selecting **APIs** in the left sidebar, and then selecting an API and a version.
1. Select the **Deployments** tab, and then select **Deploy API**.
1. Select the branch or release to deploy. Learn more about [versioning an API](/docs/designing-and-developing-your-api/versioning-an-api/).
1. Select the AWS stage to deploy the schema to, such as dev, prod, or beta.

    If you do not want to deploy the schema to a stage, select **Only Export Schema to HEAD**. The schema will be pushed to AWS API Gateway but will not be deployed to a stage. You can deploy the schema later from the AWS console.

1. Select **Deploy**.

<img alt="Deploying an API" src="https://assets.postman.com/postman-docs/deploy-api-schema-on-aws-v9-5.jpg" width="512px"/>

> [API Gateway extensions to Open API](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions.html) (vendor extensions) are preserved when pushing and deploying a schema from Postman. Postman merges any extensions present on the gateway into the schema before pushing the merged schema to AWS API Gateway.
