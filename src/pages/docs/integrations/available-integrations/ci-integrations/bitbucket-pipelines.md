---
title: "Bitbucket Pipelines"
page_id: "bitbucket-pipelines"
updated: 2022-04-08
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

> If your Bitbucket pipeline is configured to run API tests using [Newman](/docs/running-collections/using-newman-cli/command-line-integration-with-newman/), you can [configure the Postman cloud reporter](#configuring-newman-for-bitbucket-pipelines) to send collection run information back to Postman.

## Creating a pipeline in Bitbucket

If you haven't already, create a pipeline in the Bitbucket repository you use for your API. To create a pipeline, add a `bitbucket-pipelines.yml` file in the root of your repository. You define your pipeline in this YAML file. To learn more, see [the Bitbucket Pipelines documentation](https://support.atlassian.com/bitbucket-cloud/docs/get-started-with-bitbucket-pipelines/).

## Configuring a Bitbucket Pipelines integration

1. Open your API by selecting **APIs** in the sidebar. *Each API can be linked to one CI project*.
1. Select **Test and Automation**.
1. Under **Automate**, select **Bitbucket**.
1. You'll be prompted to authorize Postman to access your Bitbucket account. After you grant access, you can close the browser tab and return to Postman.
1. Enter a **Nickname** to help you recognize the integration later.
1. Select the Bitbucket **Workspace** with your API repository.
1. Select the **CI project** used for your API.
1. Select **Connect**.

<img alt="Connect to Bitbucket Pipelines" src="https://assets.postman.com/postman-docs/bitbucket-pipelines-connect-project-v9-15.jpg" width="518px">

## Viewing build status

After you set up a Bitbucket Pipelines integration, information for build jobs is available in Postman. For each build you can view the branch, start time, duration, and status (`Successful` or `Failed`). You can also view the results of collection runs that are [configured in your pipeline using Newman](#viewing-collection-run-details).

To view build jobs, open an API and select **Test and Automation**. The most recent jobs are listed under the repository name.

Select **View All Builds** to view the full list of build jobs. From here you can take the following actions:

* Use the dropdown lists to filter jobs by branch or build status.
* To view a build in Bitbucket Pipelines, select the build name.
* To start a new build, select **Run Build**. Select or enter the name of the branch to use and select **Run Build**. To cancel a running build, select **Cancel** next to the build.
* To get the latest build status information, select <img alt="Refresh icon" src="https://assets.postman.com/postman-docs/icon-refresh-v9-5.jpg#icon" width="14px"> **Refresh**.
* To edit or delete the integration, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px">.
* To view more details for a build, use the arrows to expand a build and expand **Build Steps**. For each build step you can view the name, duration, and status.

<img alt="View all Bitbucket Pipelines builds" src="https://assets.postman.com/postman-docs/bitbucket-pipelines-builds-v9-19.jpg">

## Viewing collection run details

Using Newman, you can run Postman collections with your API tests as part of a Bitbucket pipeline. The Postman cloud reporter can send details about the collection runs back to Postman.

To view details for collections that were run as part of a build, first [configure Newman for Bitbucket Pipelines](#configuring-newman-for-bitbucket-pipelines) and then [start a new build](#viewing-build-status). After the build is complete, use the arrows to expand a build and expand **Collection Runs**. Then expand a collection to view details about a collection run.

<img alt="View collection runs" src="https://assets.postman.com/postman-docs/bitbucket-pipelines-collection-runs-v9-19.jpg">

> Select **View Report** to view a collection run report in the Postman **History**. Learn more about using the [Collection Runner](/docs/running-collections/intro-to-collection-runs/).

## Configuring Newman for Bitbucket Pipelines

With the help of Newman and the Postman API, you can run API tests created in Postman as part of your Bitbucket pipeline. First generate the Newman configuration code in Postman. Then add the configuration code to the `bitbucket-pipelines.yml` file in your Bitbucket repository.

Each time the pipeline runs, Newman runs the collections that contain your tests. You can view the results of your tests in Postman. You an also configure the [Postman cloud reporter](https://www.npmjs.com/package/newman-reporter-postman-cloud) to send detailed collection run information back to Postman.

> Before you begin, make sure you’ve already [set up an integration](#configuring-bitbucket-pipelines-integration) between your API version and Bitbucket Pipelines.

To generate configuration code for Newman:

1. Open your API and select **Test and Automation**.
1. Under the repository name, select **View All Builds**.
1. Select **Configure Newman**.
1. Select a **Collection** to run during pipeline builds. To be available in the dropdown list, you must first [add the collection as a test suite](/docs/designing-and-developing-your-api/testing-an-api/#adding-tests) to your API. You can also select an **Environment** to use.

    > If needed, select **+ Add More** to select other collections to run.

1. (Optional) Select the check box to use the Postman cloud reporter to send collection run information back to Postman. You can view the collection run details in the Postman **History** and on the API version **Test** tab.
1. Select **Copy** to copy the Newman configuration, and then select **Finish**.

<img alt="Generate Newman configuration" src="https://assets.postman.com/postman-docs/bitbucket-pipelines-generate-newman-v9-19.jpg" width="548px">

To add the Newman configuration to your Bitbucket pipeline:

1. Edit the `bitbucket-pipelines.yml` file at the root of your Bitbucket repository.
1. Add the Newman configuration you copied from Postman to the `bitbucket-pipelines.yml` file:
    * Replace all instances of `$POSTMAN_API_KEY` with a valid [Postman API Key](/docs/developer/intro-api/#generating-a-postman-api-key).
1. Commit and push the changes to your remote repository. This will automatically start a build in Bitbucket Pipelines.
1. To view the test results in Postman, open your API and select **Test and Automation**. Learn more about [Viewing collection run details](#viewing-collection-run-details).

### Example bitbucket-pipelines.yml file

```yaml
image: node:16

pipelines:
  default:
    - step:
        name: Run collection via newman
        script:
          - 'npm i -g newman'
          - 'npm i -g newman-reporter-postman-cloud'
          - newman run "https://api.getpostman.com/collections/4946945-3673316a-9a35-4b0d-a148-3566b490798d?apikey=$POSTMAN_API_KEY" -r postman-cloud --reporter-apiKey "$POSTMAN_API_KEY" --reporter-workspaceId "34f3a42c-18a7-4ad6-83fb-2c05767d63a7" --reporter-integrationIdentifier "46689-${BITBUCKET_PIPELINE_UUID}"
```
