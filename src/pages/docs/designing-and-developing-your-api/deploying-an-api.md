---
title: 'Deploying an API'
order: 81.65
page_id: 'deploying_an_api'
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Developing an API"
    url: "/docs/designing-and-developing-your-api/developing-an-api/"

---

You can stay on top of your API deployments in Postman by connecting to AWS API Gateway. With this integration, you can view your API deployment status and history directly within Postman.

* [Connecting deployment services to Postman](#connecting-deployment-services-to-postman)
    * [Connecting to AWS API Gateway](#connecting-to-aws-api-gateway)
        * [Authenticating with an AWS IAM role](#authenticating-with-an-aws-iam-role)
        * [Authenticating with an AWS access key](#authenticating-with-an-aws-access-key)
* [Viewing API deployments in Postman](#viewing-api-deployments-in-postman)

## Connecting deployment services to Postman

Postman currently offers a deployment integration with AWS API Gateway. Follow the [Postman Public Roadmap](http://go.pstmn.io/public-roadmap) for details on upcoming releases.

### Connecting to AWS API Gateway

To connect your deployment service to Postman, navigate to your API in Postman by selecting APIs from the left sidebar, then selecting your API and a version to view. Select the **Deployments** tab, then **AWS API Gateway**.

<img alt="Deployments AWS API Gateway" src="https://assets.postman.com/postman-docs/deployments-aws-api-gateway-v9.jpg"/>

To connect to AWS API Gateway, you can either [authenticate by creating an AWS IAM role](#authenticating-with-an-AWS-IAM-role) or [authenticate by using an AWS access key](#authenticating-with-an-AWS-access-key).

#### Authenticating with an AWS IAM role

To set up a connection to AWS API Gateway with an AWS IAM role, select **IAM** from the dropdown under **AWS Authentication Mechanism**.

<img alt="Connecting with AWS IAM role" src="https://assets.postman.com/postman-docs/connect-to-api-gateway-with-iam-role-v9.jpg" width="400px"/>

Provide a **Name** for your integration and select the **AWS API Type**.

Next, create an IAM role for Postman in AWS by taking the following actions:

1. Navigate to your [AWS IAM console](https://console.aws.amazon.com/iam/home#/roles) and select **Create role**.
2. Under **Select type of trusted entity**, select **Another AWS account**.
3. Enter Postman's Account ID: `258201882842`.
4. Under options, check the box to **Require external ID** and enter the external ID Postman has provided.
    > Refer to the [AWS IAM guide on using external IDs](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user_externalid.html) for more information.
5. Select **Next: Permissions**.
6. Choose the existing IAM policy or **Create policy**. If creating, submit the following JSON:

    ```
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
9. Add a **Role name** and **Role description**, then **Create Role**.

Copy the **Role ARN** from AWS and paste it in Postman under **Step 2: Enter role ARN and region**. Then, enter the **AWS Region**, select the **API Gateway**, and select **Connect** to connect Postman to AWS API Gateway.

#### Authenticating with an AWS access key

To set up a connection to AWS API Gateway with an AWS access key, select **Access Key** from the dropdown under **AWS Authentication Mechanism**.

<img alt="Connecting with AWS access key" src="https://assets.postman.com/postman-docs/connect-to-api-gateway-with-access-key.jpg" width="400px"/>

Provide the following information to connect to AWS API Gateway:

* Enter a **Name** for your integration.
* Select the **AWS API Type**.
* Enter your **Access Key ID**.
* Enter your **Secret Access Key**.
* Add your **AWS Region**.

Select **Connect** to connect Postman to AWS API Gateway.

## Viewing API deployments in Postman

To view your API deployments in Postman, navigate to your API version and select the **Deployments** tab.

<img alt="Deployed APIs" src="https://assets.postman.com/postman-docs/.jpg" width=""/>

You can view details about your various API deployments, including their IDs, descriptions, creation dates, and current statuses. You can also view your invoke URL, access logs, and execution logs by selecting a deployment.

Select **View Dashboard** in the upper right to open your AWS dashboard.

To edit or delete the integration, select **...** in the upper right.
