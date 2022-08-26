---
title: "Running a collection with the Postman CLI"
updated: 2022-09-15
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Postman CLI overview"
    url: "/docs/postman-cli/postman-cli-overview"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Postman CLI command options"
    url: "/docs/postman-cli/postman-cli-options/"

warning: false
---

## Running a collection locally with the Postman CLI

1. Select **Collections** in the sidebar and select the collection you want to run.

1. On the overview tab, select <img alt="Runner icon" src="https://assets.postman.com/postman-docs/icon-runner-v9.jpg#icon" width="16px"> **Run**.

1. On the Collection Runner, select **Automate runs via CLI**.

    <img alt="Automate runs via CLI" src="https://assets.postman.com/postman-docs/automate-cli-v10.jpg" style="border: 1px solid #4a4a4a">

1. Select **Download the Postman CLI**.

1. Generate your Postman API Key.

1. Drag the Postman collection you want to automate and copy the commands from postman cli code-gen.

1. Paste and run the commands in your terminal.

1. Check the results.

## Running a collection in CI/CD

When the collections run to your satisfaction, copy the commands into your CI/CD scripts to make them a part of your workflows. To do this, follow the steps below:

1. Select **Configure command** under the **Run in the CI/CD** menu.

1. Select **Configurations - environment** to run this with your CI/CD system's OS and Provider type.

1. Select **Copy command** and paste the commands into your build or deployment scripts.

1. Generate an API Key in Postman and add it to the variables section of your CI/CD Provider.

1. Trigger a build or deployment and check the results of your collection run.

## Running collections on local or remote Git branches

With Postman’s latest version 10 release, you will be able to create and use branches in Postman. These branches can be local (synced with your filesystem) or remote (synced with your Git repositories). You can update, add, and remove tests and assertions to specific branches. You can also run tests in your CI/CD systems for specific branches.

To automate your API Testing with an integrated Git repository:

1. In Postman, select **Test & Automation**.

1. Select **Configure Postman CLI on Local** or **Configure on CI/CD** for the respective flows.

1. Select your environments and your CI/CD OS configuration.

1. Copy the generated snippet.

1. Paste the snippet into your build configuration or YAML files.

1. Run your builds and check the results.
