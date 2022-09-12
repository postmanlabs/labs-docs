---
title: "Running a collection with the Postman CLI"
updated: 2022-09-15
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Postman CLI overview"
    url: "/docs/postman-cli/postman-cli-overview/"
  - type: link
    name: "Installing the Postman CLI"
    url: "/docs/postman-cli/postman-cli-installation/"
  - type: link
    name: "Postman CLI command options"
    url: "/docs/postman-cli/postman-cli-options/"
warning: false
tags:
  - "Postman CLI"

---

You can use the Postman API Platform to manually validate your APIs. With Postman CLI, you can also script these manual validations into tests and assertions which you can then run with the Postman Collection Runner.

## Contents

* [Running a collection locally with the Postman CLI](#running-a-collection-locally-with-the-postman-cli)
* [Running a collection in CI/CD](#running-a-collection-in-cicd)

## Running a collection locally with the Postman CLI

1. [Install Postman CLI](/docs/postman-cli/postman-cli-installation).

1. Select **Collections** in the sidebar and select the collection you want to run.

1. On the Overview tab, select <img alt="Runner icon" src="https://assets.postman.com/postman-docs/icon-runner-v9.jpg#icon" width="16px"> **Run**.

1. On the Collection Runner, select **Automate runs via CLI**.

    <img alt="Automate runs via CLI" src="https://assets.postman.com/postman-docs/PCLI-automate-cli-v10.jpg" style="border: 1px solid #4a4a4a">

1. In the **Postman CLI command** window, select **Add API Key**.

1. Select **Generate Key** (or **Use Existing Key** to enter an existing API key and skip to step #9).

1. Enter a name for the API key.

1. Select **Generate**.

1. Copy and save the API key.

1. Select **Insert Key**.

1. Select <img alt="Copy icon" src="https://assets.postman.com/postman-docs/icon-copy-v9.jpg#icon" width="15px"> **Copy**.

1. Paste and run the commands in your terminal.

1. After running the commands, the Postman CLI generates a link. Follow the link to check the results on Postman.

## Running a collection in CI/CD

When the collections run to your satisfaction, you can copy the commands into your CI/CD scripts to integrate them into your workflows. To learn more, see [Configuring the Postman CLI for CI](/docs/integrations/ci-integrations/#configuring-the-postman-cli-for-ci).
