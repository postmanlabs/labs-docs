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

1. Generate your Postman API Key. You'll need your API key in a later step.

1. Drag your Postman collection that you would like to automate and copy the command from postman cli code-gen.

1. Paste in your terminal and run the commands.

1. Check the results.

 > The above command uses the unique identifier of your collection (collection id) to run the collection. You could also export your collection file and run the same by mentioning the collection file path and name on your command.

## Running a collection in CI/CD

Once you are confident in running your collections locally and have the final command handy, copy these commands and paste them in your CI/CD scripts to make them a part of your workflows. This is a one-time setup that will help you automate your API Testing. Let us walk you through the step-by-step process to do this:

1. Select **Configure Command** under the Run in the CI/CD Menu.

1. Select configurations - environment to run this with, the os of your CI/CD system and the CI/CD Provider type.

1. Click on copy command and paste the same into your build or deployment scripts.

1. Generate an API Key on Postman and put it in the variables section of your CI/CD Provider. As an example we have shown you how to do this in bitbucket.

1. Trigger a build/deployment and check results of your collection run.

## Running collections on local or remote Git branches

With Postman’s latest version 10 release, you will be able to create branches and work on the same in Postman. These branches can be local (synced with your filesystem) or remote (synched directly with your git repositories). Read more about it on this blog <link this blog> from one of Postman’s cofounders. You can update/add or remove your tests or assertions in your branch specific and run the tests in your CI/CD Systems specific to the changes on this branch.

If you are wondering how this will help you, let's take a step back and see how you would go about automating your tests currently:

### Approach 1: Run your collections using the collection id

    postman login my-api-key
    postman run collection my-collection-id

Here, we would fetch your postman collections that are saved at our end and run the same in the pipeline. The problem with this approach is, that once you update the collection, it would run these updated tests in all your pipelines - dev, beta, stage, prod, and so on. Any failing test would also fail any/all of the CI/CD pipelines that have automation testing integrated.

### Approach 2: Export your collection file to Git and run the same

    postman login my-api-key
    postman run collection /postman/collections/my-collection-file.json

In this approach, you would export your updated collection JSON (containing your tests and assertions) from postman and save it in your git repository (such as Gitlab, Github, Bitbucket and so on). You would then run your specific branch in CI/CD to test your implementation changes against your API. This approach solves the problem you faced with Approach 1, however it comes with its own challenges such as exporting and importing collection manually each time you need to work on any testing-related changes and making sure you are using the correct collection file in postman.

With Postman v10 we are solving all the above problems. By integrating your postman APIs with your git repositories, you would be able to directly work on your branches from postman and commit changes to these branches directly, thereby eliminating a need to export your postman collection. Read the details on how to use Postman’s updated API Platform.

Below, we walk you through the steps to automate your API Testing once you have integrated your git repository:

1. Once Integrated with your git repository for your Postman Collections on API Builder, click on Test & Automation

1. Click on Configure Postman CLI on Local or Configure on CI/CD for the respective flows

1. Select your environments, your CI/CD OS Configuration and copy the generated snippet

1. Paste your snippet in your build Configuration or YAML files

1. Run your builds and check the results

You can take this further and integrate your Build Pipelines with Postman. This will ensure all your builds are also reported back to postman and you have a one-stop for all your automation testing and pipeline runs. If you would like to identify why a build failed, you could easily do so by expanding the build information and seeing which tests failed.
