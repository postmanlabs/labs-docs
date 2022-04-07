---
title: "Bitbucket Pipelines"
page_id: "bitbucket-pipelines"
updated: 2022-04-12
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "CI Integrations"
    url: "/docs/integrations/ci-integrations/"
---

[Bitbucket Pipelines](https://bitbucket.org/product/features/pipelines) is a continuous integration (CI) and continuous delivery (CD) service that's integrated with Bitbucket Cloud. Software development teams can use Bitbucket Pipelines to automatically build, test, and deploy code in Bitbucket.

To set up a Bitbucket Pipelines integration for your API, you need to create a pipeline in Bitbucket and configure your API in Postman. After you set up the integration, you can view the status of builds or kick off a new build, all from within Postman.

> If your Bitbucket pipeline is configured to run API tests using [Newman](/docs/running-collections/using-newman-cli/command-line-integration-with-newman/), you can [configure the  Postman cloud reporter](#configuring-newman-for-bitbucket-pipelines) to send collection run information back to Postman.

## Creating a pipeline in Bitbucket

If you haven't already, create a pipeline in the Bitbucket repository you use for your API. To create a pipeline, add a `bitbucket-pipelines.yml` file in the root of your repository. You define your pipeline in this YAML file. To learn more, see [the Bitbucket Pipelines documentation](https://support.atlassian.com/bitbucket-cloud/docs/get-started-with-bitbucket-pipelines/).

## Configuring Bitbucket Pipelines integration

1. Open your API by selecting **APIs** in the left sidebar, and then selecting an API and a version. *Each API version can be linked to only one CI project*.
1. Select the **Test** tab.
1. Under **Connect to CI/CD Builds**, select **Bitbucket**.
1. You'll be prompted to authorize Postman to access your Bitbucket account. After you grant access, you can close the browser tab and return to Postman.
1. Enter a **Nickname** to help you recognize the integration later.
1. Select the Bitbucket **Workspace** with your API repository.
1. For **CI project**, select the Bitbucket repository you use for your API.
1. Select **Connect**.

    <img alt="Add API key" src="https://assets.postman.com/postman-docs/jenkins-connect-project-v9-15.jpg" width="527px">

## Viewing build status

After you set up a Bitbucket Pipelines integration, information for build jobs is available in Postman. For each build you can view the branch, start time, duration, and status (successful or failed).

To view build jobs, open an API version and select the **Test** tab. The most recent jobs are listed under **CI/CD Builds**.

* To view a build in Bitbucket Pipelines, hover over a build and select **View build details**.
* To start a new build, select **Run Build**.
* To edit or delete the integration, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg#icon" width="18px">.

<img alt="View recent Jenkins builds" src="https://assets.postman.com/postman-docs/jenkins-test-tab-v9-14.jpg">

To view the full list of build jobs, select **View All Builds**. Use the dropdown lists to filter jobs by branch or build status. To get the latest build status information, select **Refresh**.

To view more details for a build, use the arrows to expand a build and expand **Build Steps**. For each build step you can view the name, duration, and status.

<img alt="View all Jenkins builds" src="https://assets.postman.com/postman-docs/jenkins-view-builds-v9-14.jpg">

## Viewing collection run details

Using Newman, you can run Postman collections with your API tests as part of a Bitbucket pipeline. The Postman cloud reporter can send details about the collection runs back to Postman.

To view details for collections that were run as part of a build, first [configure Newman for Bitbucket Pipelines](#configuring-newman-for-bitbucket-pipelines) and then [start a new build](#viewing-build-status). After the build is complete, use the arrows to expand a build and expand **Collection Runs**. Then expand a collection to view details about a collection run.

<img alt="View collection runs" src="https://assets.postman.com/postman-docs/jenkins-collection-runs-v9-14.jpg">

Select **View Report** to view a collection run report in the Postman **History**. Learn more about using the [Collection Runner](/docs/running-collections/intro-to-collection-runs/).

<img alt="View collection run report" src="https://assets.postman.com/postman-docs/jenkins-view-report-v9-14.jpg">

## Configuring Newman for Bitbucket Pipelines

With the help of Newman and the Postman API, you can run API tests created in Postman as part of your Bitbucket pipeline. First generate the Newman configuration code in Postman. Then add the configuration code to the `bitbucket-pipelines.yml` file in your Bitbucket repository.

Each time the pipeline runs, Newman runs the collections that contain your tests. You can view the results of your tests in Postman. You an also configure the [Postman cloud reporter](https://www.npmjs.com/package/newman-reporter-postman-cloud) to send detailed collection run information back to Postman.

> Before you begin, make sure you’ve already [set up an integration](#configuring-bitbucket-pipelines-integration) between your API version and Bitbucket Pipelines.

To generate configuration code for Newman:

1. Open your API version and select the **Test** tab.
1. Under **CI/CD Builds**, select **View All Builds**.
1. Select **Configure Newman**.
1. Select a **Collection** and **Environment** to run during Jenkins builds.

    > If needed, select **+ Add More** to select additional collections to run.

1. (Optional) Select the check box to use the Postman cloud reporter to send collection run information back to Postman. You can view the collection run details in the Postman **History** and on the API version **Test** tab.
1. Select **Copy** to copy the Newman configuration, and then select **Finish**.

<img alt="Generate Newman configuration" src="https://assets.postman.com/postman-docs/jenkins-generate-newman-v9-14.jpg" width="546px">

To add the Newman configuration to your Bitbucket pipeline:

1. Edit the `bitbucket-pipelines.yml` file at the root of your Bitbucket repository.
1. Add the Newman configuration you copied from Postman to the `bitbucket-pipelines.yml` file:
    * Replace both instances of `$POSTMAN_API_KEY` with a valid [Postman API Key](/docs/developer/intro-api/#generating-a-postman-api-key).
1. Commit and push the changes to your remote repository. This will automatically start a build in Bitbucket Pipelines.
1. To view the test results in Postman, open your API and select the **Test** tab. Learn more about [Viewing collection run details](#viewing-collection-run-details).

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
          - newman run "https://api.getpostman.com/collections/735639-949d82a2-1b47-4e2a-8836-10222ba1fb51?apikey=$POSTMAN_API_KEY" -r postman-cloud --reporter-apiKey "$POSTMAN_API_KEY" --reporter-workspaceId "1b5bd345-56e0-4acd-842f-d27b3d82d0b4" --reporter-integrationIdentifier "46689-${BITBUCKET_PIPELINE_UUID}"
```
