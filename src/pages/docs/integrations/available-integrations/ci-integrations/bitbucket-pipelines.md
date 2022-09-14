---
title: "Bitbucket Pipelines"
page_id: "bitbucket-pipelines"
updated: 2022-09-15
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "CI Integrations"
    url: "/docs/integrations/ci-integrations/"
---

[Bitbucket Pipelines](https://bitbucket.org/product/features/pipelines) is a continuous integration (CI) and continuous delivery (CD) service that's integrated with Bitbucket Cloud. Software development teams can use Bitbucket Pipelines to automatically build, test, and deploy code in Bitbucket.

To set up a Bitbucket Pipelines integration for your API, first create a pipeline in Bitbucket and then configure your API in Postman. After you set up the integration, you can view the status of builds or start a new build, all from within Postman.

## Creating a pipeline in Bitbucket

If you haven't already, create a pipeline in the Bitbucket repository you use for your API. To create a pipeline, add a `bitbucket-pipelines.yml` file in the root of your repository. You define your pipeline in this YAML file. To learn more, see [the Bitbucket Pipelines documentation](https://support.atlassian.com/bitbucket-cloud/docs/get-started-with-bitbucket-pipelines/).

## Configuring a Bitbucket Pipelines integration

1. Open your API by selecting **APIs** in the sidebar, and then selecting an API and a version. *Each API version can be linked to one CI project*.
1. Select the **Test** tab.
1. Under **Connect to CI/CD Builds**, select **Bitbucket**.
1. You'll be prompted to authorize Postman to access your Bitbucket account. After you grant access, you can close the browser tab and return to Postman.
1. Enter a **Nickname** to help you recognize the integration later.
1. Select the Bitbucket **Workspace** with your API repository.
1. Select the **CI project** used for your API.
1. Select **Connect**.

<img alt="Connect to Bitbucket Pipelines" src="https://assets.postman.com/postman-docs/bitbucket-pipelines-connect-project-v9-15.jpg" width="518px">

## Viewing build status

After you set up a Bitbucket Pipelines integration, information for build jobs is available in Postman. For each build you can view the branch, start time, duration, and status (successful or failed). You can also view the results of collection runs that are [configured in your pipeline using the Postman CLI](#viewing-collection-run-details).

To view build jobs, open an API version and select the **Test** tab. The most recent jobs are listed under **CI/CD Builds**.

Select **View All Builds** to view the full list of build jobs. From here you can take the following actions:

* Use the dropdown lists to filter jobs by branch or build status.
* To view a build in Bitbucket Pipelines, select the build name.
* To start a new build, select **Run Build**. Select or enter the name of the branch to use and select **Run Build**. To cancel a running build, select **Cancel** next to the build.
* To get the latest build status information, select <img alt="Refresh icon" src="https://assets.postman.com/postman-docs/icon-refresh-v9-5.jpg#icon" width="14px"> **Refresh**.
* To edit or delete the integration, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px">.

<img alt="View all Bitbucket Pipelines builds" src="https://assets.postman.com/postman-docs/v10/collection-runs-v10-2.jpg">

## Viewing collection run details

Using the Postman CLI, you can run Postman collections with your API tests as part of a Bitbucket pipeline.

To view details for collections that were run as part of a build, first [configure the Postman CLI for Bitbucket Pipelines](#configuring-the-postman-cli-for-bitbucket-pipelines) and then [start a new build](#viewing-build-status). After the build is complete, use the arrows to expand a build and expand a collection to view details about a collection run.

<img alt="View collection runs" src="https://assets.postman.com/postman-docs/v10/collection-runs-v10-2.jpg">

> Select **View Report** to view a collection run report in the Postman **History**. Learn more about using the [Collection Runner](/docs/running-collections/intro-to-collection-runs/).

## Configuring the Postman CLI for Bitbucket Pipelines

With the help of the Postman CLI and the Postman API, you can run API tests created in Postman as part of your Bitbucket pipeline. First generate the Postman CLI configuration code in Postman. Then add the configuration code to the `bitbucket-pipelines.yml` file in your Bitbucket repository.

Each time the pipeline runs, the Postman CLI runs the collections that contain your tests. You can view the results of your tests in Postman. You an also enforce [API Governance and API Security rules each time the pipeline runs](/docs/api-governance/api-definition/api-definition-warnings/#tracking-governance-and-security-rule-violations-in-cicd) ([Enterprise teams only](https://www.postman.com/pricing/)).

> Before you begin, make sure you’ve already [set up an integration](#configuring-bitbucket-pipelines-integration) between your API version and Bitbucket Pipelines.

To generate configuration code for the Postman CLI:

1. Open your API version and select the **Test** tab.
1. Under **CI/CD Builds**, select **View All Builds**.
1. Select **Configure Postman CLI**.
1. Select a **Collection** to run during pipeline builds. To be available in the list, you must first [add the collection as a test suite](/docs/designing-and-developing-your-api/testing-an-api/#adding-tests) to your API. You can also select an **Environment** to use.
1. (Optional) Select the checkbox to enforce API Governance and API Security rules each time the CI/CD pipeline runs ([Enterprise teams only](https://www.postman.com/pricing/)). To review rule violations, go to the API's overview page and select **View files** under **Definition**.
1. Select the **Operating system** for your CI/CD pipeline.
1. Select **Copy Postman CLI Command** to copy the Postman CLI configuration.

<img alt="Generate the Postman CLI configuration" src="https://assets.postman.com/postman-docs/v10/generate-postman-cli-v10-2.jpg" width="548px">

To add the Postman CLI configuration to your Bitbucket pipeline:

1. Edit the `bitbucket-pipelines.yml` file at the root of your Bitbucket repository.
1. Add the Postman CLI configuration you copied from Postman to the `bitbucket-pipelines.yml` file:
    * Replace all instances of `$POSTMAN_API_KEY` with a valid [Postman API Key](/docs/developer/intro-api/#generating-a-postman-api-key).
1. Commit and push the changes to your remote repository. This will automatically start a build in Bitbucket Pipelines.
1. To view the test results in Postman, open your API and select the **Test** tab. Learn more about [Viewing collection run details](#viewing-collection-run-details).
