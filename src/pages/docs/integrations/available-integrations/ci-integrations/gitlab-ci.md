---
title: "GitLab CI/CD"
updated: 2022-04-29
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "CI Integrations"
    url: "/docs/integrations/ci-integrations/"
---

[GitLab CI/CD](https://docs.gitlab.com/ee/ci/) is a continuous integration (CI) and continuous delivery (CD) service that's integrated with GitLab SaaS. Software development teams can use GitLab CI/CD to automatically build, test, and deploy code in GitLab.

To set up a GitLab CI/CD integration for your API, first create a pipeline in GitLab and then configure your API in Postman. After you set up the integration, you can view the status of builds or start a new build, all from within Postman.

> If your GitLab pipeline is configured to run API tests using [Newman](/docs/running-collections/using-newman-cli/command-line-integration-with-newman/), you can [configure the Postman cloud reporter](#configuring-newman-for-gitlab) to send collection run information back to Postman.

## Creating a pipeline in GitLab

If you haven't already, create a pipeline in the GitLab you use for your API. To create a pipeline, add a `.gitlab-ci.yml` file in the root of your repository. You define your pipeline in this YAML file. To learn more, see [the GitLab CI/CD documentation](https://docs.gitlab.com/ee/ci/).

## Configuring a GitLab CI/CD integration

1. Open your API by selecting **APIs** in the sidebar, and then selecting an API and a version. *Each API version can be linked to one CI project*.
1. Select the **Test** tab.
1. Under **Connect to CI/CD Builds**, select **GitLab**.
1. You'll be prompted to authorize Postman to access your GitLab account. After you grant access, you can close the browser tab and return to Postman.
1. Enter a **Nickname** to help you recognize the integration later.
1. Select the **Workspace** containing your API repository.
1. Select the **CI project** used for your API.
1. Select **Connect**.

   <img alt="Connect to GitLab CI/CD" src="https://assets.postman.com/postman-docs/gitlab-ci-connect-project-v9-16.jpg" />

## Viewing build status

After you set up a GitLabs integration, information for build jobs is available in Postman. For each build you can view the branch, start time, duration, and status (successful or failed). You can also view the results of collection runs that are [configured in your pipeline using Newman](#viewing-collection-run-details).

To view build jobs, open an API version and select the **Test** tab. The most recent jobs are listed under **CI/CD Builds**.

Select **View All Builds** to view the full list of build jobs. From here you can take the following actions:

* Use the dropdown lists to filter jobs by branch or build status.
* To view a build in GitLab, hover over a build and select **View build details**.
* To start a new build, select **Run Build**. Enter the name of the branch to use and select **Run Build**. To cancel a running build, select **Cancel** next to the build.
* To get the latest build status information, select <img alt="Refresh icon" src="https://assets.postman.com/postman-docs/icon-refresh-v9-5.jpg#icon" width="14px"> **Refresh**.
* To edit or delete the integration, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px">.
* To view more details for a build, use the arrows to expand a build and expand **Build Steps**. For each build step you can view the name, duration, and status.

<img alt="View all Bitbucket Pipelines builds" src="https://assets.postman.com/postman-docs/bitbucket-pipelines-builds-v9-15.jpg"><!--TODO replace -->

## Viewing collection run details

Using Newman, you can run Postman collections with your API tests as part of a GitLab pipeline. The Postman cloud reporter can send details about the collection runs back to Postman.

To view details for collections that were run as part of a build, first [configure Newman for GitLab](#configuring-newman-for-gitlab) and then [start a new build](#viewing-build-status). After the build is complete, use the arrows to expand a build and expand **Collection Runs**. Then expand a collection to view details about a collection run.

<img alt="View collection runs" src="https://assets.postman.com/postman-docs/bitbucket-pipelines-collection-runs-v9-15.jpg"><!--TODO replace -->

> Select **View Report** to view a collection run report in the Postman **History**. Learn more about using the [Collection Runner](/docs/running-collections/intro-to-collection-runs/).

## Configuring Newman for GitLab CI/CD

With the help of Newman and the Postman API, you can run API tests created in Postman as part of your GitLab pipeline. First generate the Newman configuration code in Postman. Then add the configuration code to the `.gitlab-ci.yml` file in your GitLab repository.

Each time the pipeline runs, Newman runs the collections that contain your tests. You can view the results of your tests in Postman. You an also configure the [Postman cloud reporter](https://www.npmjs.com/package/newman-reporter-postman-cloud) to send detailed collection run information back to Postman.

> Before you begin, make sure you’ve already [set up an integration](#configuring-gitlab-integration) between your API version and GitLab.

To generate configuration code for Newman:

1. Open your API version and select the **Test** tab.
1. Under **CI/CD Builds**, select **View All Builds**.
1. Select **Configure Newman**.
1. Select a **Collection** to run during pipeline builds. You can also select an **Environment** to use.

    > If needed, select **+ Add More** to select other collections to run.

1. (Optional) Select the check box to use the Postman cloud reporter to send collection run information back to Postman. You can view the collection run details in the Postman **History** and on the API version **Test** tab.
1. Select **Copy** to copy the Newman configuration, and then select **Finish**.

   <img alt="Generate Newman configuration" src="https://assets.postman.com/postman-docs/gitlab-ci-generate-newman-v9-16.jpg" />

To add the Newman configuration to your GitLab pipeline:

1. Edit the `.gitlab-ci.yml` file at the root of your Gitlab repository.
1. Add the Newman configuration you copied from Postman to the `.gitlab-ci.yml` file:
    * Replace all instances of `$POSTMAN_API_KEY` with a valid [Postman API Key](/docs/developer/intro-api/#generating-a-postman-api-key).
1. Commit and push the changes to your remote repository. This will automatically start a build in GitLab.
1. To view the test results in Postman, open your API and select the **Test** tab. Learn more about [Viewing collection run details](#viewing-collection-run-details).

### Example .gitlab-ci.yml file

```yaml
stages:
  - build

build_code_job:
    stage: build
    script:
        - npm i -g newman
        - npm i -g newman-reporter-postman-cloud
        - newman run "https://api.getpostman.com/collections/733336-007044ca-213d-4ca1-a935-1ad2f1f65145?apikey=$POSTMAN_API_KEY"  --environment "https://api.getpostman.com/environments/733336-cceafe18-8a69-4c70-b0b9-aab4d5823ecb?apikey=$POSTMAN_API_KEY" -r postman-cloud --reporter-apiKey "$POSTMAN_API_KEY" --reporter-workspaceId "32da4917-f0a9-40a1-893c-3ad988cb670e" --reporter-integrationIdentifier 47056-${CI_PIPELINE_ID}
```
