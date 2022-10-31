---
title: "GitHub Actions"
page_id: "github-actions"
updated: 2022-08-11
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "CI Integrations"
    url: "/docs/integrations/ci-integrations/"
---

> __[GitHub Actions self-hosted runners are only available on Postman Enterprise plans.](https://www.postman.com/pricing)__

[GitHub Actions](https://docs.github.com/en/actions) is a continuous integration (CI) and continuous delivery (CD) service that's integrated with GitHub. Software development teams can use GitHub Actions to automatically build, test, and deploy code in GitHub.

To set up a GitHub Actions integration for your API, first create a pipeline in GitHub and then configure your API in Postman. After you set up the integration, you can view the status of builds from within Postman.

## Contents

* [Creating a pipeline in GitHub](#creating-a-pipeline-in-github)
* [Configuring a GitHub Actions integration](#configuring-a-github-actions-integration)
* [Viewing build status](#viewing-build-status)
* [Viewing collection run details](#viewing-collection-run-details)
* [Viewing API Governance and API Security rule violations](#viewing-api-governance-and-api-security-rule-violations)
* [Configuring the Postman CLI for GitHub Actions](#configuring-the-postman-cli-for-github-actions)

## Creating a pipeline in GitHub

If you haven't already, create a pipeline in the GitHub repository you use for your API. To create a pipeline, create a directory in your repository named `.github/workflows`, and then add a YAML file to the directory. You define your pipeline in this YAML file. To learn more, see [the GitHub Actions documentation](https://docs.github.com/en/actions/using-workflows/about-workflows).

## Configuring a GitHub Actions integration

1. Open your API by selecting **APIs** in the sidebar. *Each API can be linked to one CI project*.
    > **Tip:** If you've already authenticated with GitHub to connect a Git repo for source control, you can use the same authentication. To automatically create the integration, under **Test and Automation**, select **Connect to GitHub**.
1. Select **Test and Automation**.
1. Under **Automate**, select **GitHub Actions**.
1. You'll be prompted to allow Postman to access your GitHub account. After you grant access, you can close the browser tab and return to Postman.

    > **There's a limit of ten auth tokens per user per application imposed by GitHub.** If you create more than ten connections with the same user, the additional tokens will be revoked in the order that they were created. Teams can use other Postman accounts to create more than ten integrations.

1. Enter a **Nickname** to help you recognize the integration later. Postman pre-fills a nickname in the format `GitHub-{API_NAME}`, and you can edit it if you want.
1. Select the GitHub **Organization** with your API repository.
1. Select the **Repository** used for your API.
1. Select **Connect**.

<img alt="Connect to GitHub Actions" src="https://assets.postman.com/postman-docs/v10/github-actions-connect-v10.jpg" width="571px" />

## Viewing build status

After you set up a GitHub Actions integration, information for build jobs is available in Postman. For each build you can view the branch, start time, and status (`Success` or `Failure`). You can also view the results of collection runs that are [configured in your pipeline using the Postman CLI](#viewing-collection-run-details).

To view build jobs, open an API and select **Test and Automation**. The most recent jobs are listed under the repository name.

> You can't start GitHub Actions builds directly in Postman. To start a new build, go to GitHub.

Select **View All Builds** to view the full list of build jobs. From here you can take the following actions:

* Use the dropdown lists to filter jobs by branch or build status.
* To view a build in GitHub, select the build name.
* To get the latest build status information, select <img alt="Refresh icon" src="https://assets.postman.com/postman-docs/icon-refresh-v9-5.jpg#icon" width="14px"> **Refresh**.
* To edit or delete the integration, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px">.

<img alt="View all GitHub builds" src="https://assets.postman.com/postman-docs/v10/github-actions-collection-runs-v10.jpg">

## Viewing collection run details

Using the Postman CLI, you can run Postman collections with your API tests as part of a GitHub Actions pipeline.

To view details for collections that were run as part of a build, first [configure the Postman CLI for GitHub](#configuring-the-postman-cli-for-github-actions) and then start a new build in GitHub. To learn more about starting builds, see [the GitHub Actions documentation](https://docs.github.com/en/actions/managing-workflow-runs/manually-running-a-workflow). After the build is complete, use the arrows to expand a build and expand a collection to view details about a collection run.

<img alt="View GitHub Actions collection runs" src="https://assets.postman.com/postman-docs/v10/github-actions-collection-runs-v10.jpg">

> Select **View Report** to view a collection run report in the Postman **History**. Learn more about using the [Collection Runner](/docs/running-collections/intro-to-collection-runs/).

## Viewing API Governance and API Security rule violations

Using the Postman CLI, you can enforce [API Governance and API Security rules each time the pipeline runs](/docs/api-governance/api-definition/api-definition-warnings/#tracking-governance-and-security-rule-violations-in-cicd) using the [`api lint` command](/docs/postman-cli/postman-cli-options/#governance-and-security) ([Enterprise teams only](https://www.postman.com/pricing/)).

To view the results of API Governance and API Security checks that ran as part of the build, first [configure the Postman CLI for GitHub Actions](#configuring-the-postman-cli-for-github-actions) and then start a new build on GitHub. After the build is complete, use the arrows to expand a build and expand an API definition to view any rule violations.

<img alt="View API Governance and API Security results" src="https://assets.postman.com/postman-docs/v10/github-actions-api-governance-and-security-results-v10.jpg">

## Configuring the Postman CLI for GitHub Actions

With the help of the Postman CLI and the Postman API, you can run API tests created in Postman as part of your GitHub pipeline. First generate the Postman CLI configuration code in Postman. Then add the configuration code to a YAML file in the `.github/workflows` directory in your GitHub repository.

Each time the pipeline runs, the Postman CLI runs the collections that contain your tests. You can view the results of your tests in Postman. You an also enforce [API Governance and API Security rules each time the pipeline runs](/docs/api-governance/api-definition/api-definition-warnings/#tracking-governance-and-security-rule-violations-in-cicd) ([Enterprise teams only](https://www.postman.com/pricing/)).

> Before you begin, make sure you’ve already [set up an integration](#configuring-a-github-actions-integration) between your API and GitHub Actions.

To generate configuration code for the Postman CLI, do the following:

1. Open your API and select **Test and Automation**.
1. Under the repository name, select **View All Builds**.
1. Select **Configure Postman CLI**.
1. Select a **Collection** to run during pipeline builds. To be available in the list, you must first [add the collection as a test suite](/docs/designing-and-developing-your-api/testing-an-api/#adding-tests) to your API. You can also select an **Environment** to use.
1. (Optional) Select the checkbox to enforce API Governance and API Security rules each time the CI/CD pipeline runs ([Enterprise teams only](https://www.postman.com/pricing/)).
1. Select the **Operating system** for your CI/CD pipeline.
1. Select **Copy Postman CLI Command** to copy the Postman CLI configuration.

   <img alt="Generate the Postman CLI configuration" src="https://assets.postman.com/postman-docs/v10/generate-postman-cli-v10-2.jpg" width="548px">

To add the Postman CLI configuration to your GitHub pipeline, do the following:

1. Create a new YAML file in the `.github/workflows` directory in your GitHub repository, and then edit the file.
1. Add the Postman CLI configuration you copied from Postman to the YAML file:
    * Replace all instances of `$POSTMAN_API_KEY` with a valid [Postman API Key](/docs/developer/intro-api/#generating-a-postman-api-key).
    > Postman recommends that you store your Postman API key as a secret in GitHub to keep it secure. To learn more about secrets, see the [GitHub documentation](https://docs.github.com/en/actions/security-guides/encrypted-secrets).
1. Commit and push the changes to your remote repository. This will automatically start a build in GitHub.
1. To view the test results in Postman, open your API and select **Test and Automation**. Learn more about [Viewing collection run details](#viewing-collection-run-details).
