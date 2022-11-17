---
title: "Using Flows webhooks"
updated: 2022-11-17
---

To create a Flow that executes on the Postman servers, create a webhook endpoint.

![Webhook Endpoint](https://assets.postman.com/postman-labs-docs/cloud-execution/remote-execution-setting-up-endpoint.gif)

## Contents

* [Testing Flows locally](#testing-flows-locally)
* [Create a release](#create-a-release)
* [Trigger the webhook](#trigger-the-webhook)

## Testing Flows locally

Before starting, enter your test data and run it to see the output on your local console.

![Testing Locally](https://assets.postman.com/postman-labs-docs/cloud-execution/remote-execution-test-data.gif)

## Create a release

Select **Release** and give your release a meaningful name. It is now running in the cloud. Toggling **Observe** will enable you to see the logs and flow of data live.

> **Important**
>
> Every time you release, it saves a snapshot of your Collections and Environments. If you make any changes to these, you will need to release again.

![Release to cloud](https://assets.postman.com/postman-labs-docs/cloud-execution/remote-execution-create-release.gif)

## Trigger the webhook

Make a POST request to trigger the webhook endpoint and your flow is now running in the cloud.

![Trigger the Endpoint](https://assets.postman.com/postman-labs-docs/cloud-execution/remote-execution-running-in-cloud.gif)
