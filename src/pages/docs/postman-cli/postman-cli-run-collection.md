---
title: "Running a collection with the Postman CLI"
updated: 2022-09-15
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Postman CLI Overview"
    url: "/docs/postman-cli/overview/"
  - type: link
    name: "/docs/postman-cli/installation"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Installing Postman CLI"
    url: "/docs/postman-cli/postman-cli-installation/"
warning: false
---

You can use the Postman API Platform to manually validate your APIs. With Postman CLI, you can also script these manual validations into tests and assertions which you can then run with the Postman Collection Runner.

## Running a collection locally with the Postman CLI

1. Select **Collections** in the sidebar and select the collection you want to run.

1. On the Overview tab, select <img alt="Runner icon" src="https://assets.postman.com/postman-docs/icon-runner-v9.jpg#icon" width="16px"> **Run**.

1. On the Collection Runner, select **Automate runs via CLI**.

    <img alt="Automate runs via CLI" src="https://assets.postman.com/postman-docs/automate-cli-v10.jpg" style="border: 1px solid #4a4a4a">

1. Select **Add API Key**.

1. Select **Generate Key** (or **Use Existing Key** to enter an existing API key and skip to step #9).

1. Enter a name for the API key.

1. Select **Generate**.

1. Copy and save the API key.

1. Select **Insert Key**.

1. In the **Postman CLI command** window, select **Copy**.

1. Paste and run the commands in your terminal.

1. Check the results.

## Running a collection in CI/CD

When the collections run to your satisfaction, you can copy the commands into your CI/CD scripts to integrate them into your workflows. To do this, follow the steps below:

1. Under **Automate Run**, select **Configure Command**. The **Generate Postman CLI Configuration** page appears.

1. Select a collection and environment. To add collections and environments, select `+ Add More`.

1. Select a CI/CD Provider.

1. Select an operating system.

1. In the **Postman CLI Config** window, select **Copy**.

1. Paste the copied code into your CI/CD script.

1. Select **Back** when you are done.