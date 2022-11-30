---
title: "GitLab CI/CD"
updated: 2022-09-15
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "CI Integrations"
    url: "/docs/integrations/ci-integrations/"
---

> **[GitLab Self-Managed integrations are available on Postman Enterprise plans.](https://www.postman.com/pricing)**

[GitLab CI/CD](https://docs.gitlab.com/ee/ci/) is a continuous integration (CI) and continuous delivery (CD) service that's integrated with GitLab SaaS and GitLab self-managed. Software development teams can use GitLab CI/CD to automatically build, test, and deploy code in GitLab.

To set up a GitLab CI/CD integration for your API, first create a pipeline in GitLab and then configure your API in Postman. After you set up the integration, you can view the status of builds or start a new build, all from within Postman.

## Creating a pipeline in GitLab

If you haven't already, create a pipeline in the GitLab repository you use for your API. To create a pipeline, add a `.gitlab-ci.yml` file in the root of your repository. You define your pipeline in this YAML file. To learn more, see [the GitLab CI/CD documentation](https://docs.gitlab.com/ee/ci/).

## Configuring a GitLab CI/CD integration

To start configuring a GitLab CI/CD integration for Gitlab SaaS or GitLab self-managed, do the following:

1. Open your API by selecting **APIs** in the sidebar. *Each API can be linked to one CI project*.
    > **Tip:** If you've already authenticated with GitLab to connect a Git repo for source control, you can use the same authentication. To automatically create the integration, under **Test and Automation**, select **Connect to GitLab**.
1. Select **Test and Automation**.
1. Under **Automate**, select **GitLab SaaS** or **GitLab self-managed**.
1. You'll be prompted to authorize Postman to access your GitLab account. After you grant access, you can close the browser tab and return to Postman.

To continue configuring a GitLab CI/CD integration for GitLab SaaS, do the following:

1. Enter a **Nickname** to help you recognize the integration later. Postman pre-fills a nickname in the format `GitLab-{API_NAME}`, and you can edit it if you want.
1. Select the GitLab **Workspace** with your API repository.
1. Select the **CI project** used for your API.
1. Select **Connect**.

<img alt="Connect to GitLab CI/CD" src="https://assets.postman.com/postman-docs/v10/gitlab-saas-connect-ci-cd-v10.jpg" width="571px" />

To continue configuring a GitLab CI/CD integration for GitLab self-managed, do the following:

1. Enter the URL of your GitLab self-managed domain.
1. Enter your GitLab personal access token. When [creating your token](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html), make sure to select the **api**, **read_api**, **read_user**, and **write_repository** scopes.
1. Select **Authenticate**.

<img alt="Connect to GitLab CI/CD" src="https://assets.postman.com/postman-docs/gitlab-hosted-connect-ci-cd-v9-19.jpg" width="571px" />

## Viewing build status

After you set up a GitLab integration, information for build jobs is available in Postman. For each build you can view the branch, start time, and status (`Successful` or `Failed`). You can also view the results of collection runs that are [configured in your pipeline using the Postman CLI](#viewing-collection-run-details).

To view build jobs, open an API and select **Test and Automation**. The most recent jobs are listed under the repository name.

Select **View All Builds** to view the full list of build jobs. From here you can take the following actions:

* Use the dropdown lists to filter jobs by branch or build status.
* To view a build in GitLab, select the build name.
* To start a new build, select **Run Build**. Select or enter the name of the branch to use, and then select **Run Build**. To cancel a running build, select **Cancel** next to the build.
* To get the latest build status information, select <img alt="Refresh icon" src="https://assets.postman.com/postman-docs/icon-refresh-v9-5.jpg#icon" width="14px"> **Refresh**.
* To edit or delete the integration, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px">.

<img alt="View all GitLab builds" src="https://assets.postman.com/postman-docs/v10/collection-runs-v10-2.jpg">

## Viewing collection run details

Using the Postman CLI, you can run Postman collections with your API tests as part of a GitLab pipeline. The Postman cloud reporter can send details about the collection runs back to Postman.

To view details for collections that were run as part of a build, first [configure the Postman CLI for GitLab](#configuring-the-postman-cli-for-gitlab-cicd) and then [start a new build](#viewing-build-status). After the build is complete, use the arrows to expand a build and expand a collection to view details about a collection run.

<img alt="View collection runs" src="https://assets.postman.com/postman-docs/v10/collection-runs-v10-2.jpg">

> Select **View Report** to view a collection run report in the Postman **History**. Learn more about using the [Collection Runner](/docs/running-collections/intro-to-collection-runs/).

## Viewing API Governance and API Security rule violations

Using the Postman CLI, you can enforce [API Governance and API Security rules each time the pipeline runs](/docs/api-governance/api-definition/api-definition-warnings/#tracking-governance-and-security-rule-violations-in-cicd) using the [`api lint` command](/docs/postman-cli/postman-cli-options/#governance-and-security) ([Enterprise teams only](https://www.postman.com/pricing/)).

To view the results of API Governance and API Security checks that ran as part of the build, first [configure the Postman CLI for GitLab](#configuring-the-postman-cli-for-gitlab-cicd) and then [start a new build](#viewing-build-status). After the build is complete, use the arrows to expand a build and expand an API definition to view any rule violations.

<img alt="View API Governance and API Security results" src="https://assets.postman.com/postman-docs/v10/api-governance-and-security-results-v10.jpg">

## Configuring the Postman CLI for GitLab CI/CD

With the help of the Postman CLI and the Postman API, you can run API tests created in Postman as part of your GitLab pipeline. First generate the Postman CLI configuration code in Postman. Then add the configuration code to the `.gitlab-ci.yml` file in your GitLab repository.

Each time the pipeline runs, the Postman CLI runs the collections that contain your tests. You can view the results of your tests in Postman. You an also enforce [API Governance and API Security rules each time the pipeline runs](/docs/api-governance/api-definition/api-definition-warnings/#tracking-governance-and-security-rule-violations-in-cicd) ([Enterprise teams only](https://www.postman.com/pricing/)).

> Before you begin, make sure you’ve already [set up an integration](#configuring-a-gitlab-cicd-integration) between your API and GitLab CI/CD.

To generate configuration code for the Postman CLI, do the following:

1. Open your API version and select **Test and Automation**.
1. Under **CI/CD Builds**, select **View All Builds**.
1. Select **Configure Postman CLI**.
1. Select a **Collection** to run during pipeline builds. To be available in the dropdown list, you must first [add the collection as a test suite](/docs/designing-and-developing-your-api/testing-an-api/#adding-tests) to your API. You can also select an **Environment** to use.
1. (Optional) Select the checkbox to enforce API Governance and API Security rules each time the CI/CD pipeline runs ([Enterprise teams only](https://www.postman.com/pricing/)).
1. Select the **Operating system** for your CI/CD pipeline.
1. Select **Copy Postman CLI Command** to copy the Postman CLI configuration.

   <img alt="Generate the Postman CLI configuration" src="https://assets.postman.com/postman-docs/v10/generate-postman-cli-v10-2.jpg" width="548px" />

To add the Postman CLI configuration to your GitLab pipeline, do the following:

1. Edit the `.gitlab-ci.yml` file at the root of your Gitlab repository.
1. Add the Postman CLI configuration you copied from Postman to the `.gitlab-ci.yml` file:
    * Replace all instances of `$POSTMAN_API_KEY` with a valid [Postman API Key](/docs/developer/intro-api/#generating-a-postman-api-key).
1. Commit and push the changes to your remote repository. This will automatically start a build in GitLab.
1. To view the test results in Postman, open your API and select **Test and Automation**. Learn more about [Viewing collection run details](#viewing-collection-run-details).
