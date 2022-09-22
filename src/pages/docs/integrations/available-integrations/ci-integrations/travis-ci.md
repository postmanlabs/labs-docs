---
title: "Travis CI"
order: 164.4
page_id: "travisci"
updated: 2022-09-15
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "CI Integrations"
    url: "/docs/integrations/ci-integrations/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "The Reimagined API-First Workflow, Part 2: for Testers"
    url: "https://blog.postman.com/the-reimagined-api-first-workflow-for-testers/"
---

Travis CI is continuous integration (CI) platform that software development teams use to automatically build and test code changes. With Travis CI, developers can get immediate feedback on the success of a change.

To set up Travis CI integration for your API, first create an API token in Travis CI and then configure your API in Postman. After you set up the integration, you can view the status of builds or start a new build, all from within Postman.

## Copying your Travis CI API Token

1. Sign in to [Travis CI](https://app.travis-ci.com/account/preferences) and go to your account profile page.
1. Select the **Settings** tab, and then select **Copy Token**.

## Configuring a Travis CI integration

1. Open your API by selecting **APIs** in the sidebar. *Each API can be linked to one CI project*.
1. Select **Test and Automation**.
1. Under **Automate**, select **Travis CI**.
1. For **API Key**, enter your Travis CI token.
1. Enter a **Nickname** to help you recognize the integration later.
1. Select the **CI project** used for your API.
1. Select **Connect**.

<img alt="Connect to Travis CI" src="https://assets.postman.com/postman-docs/travis-ci-connect-project-v9-15.jpg" width="522px">

## Viewing build status

After you set up a Travis CI integration, status information for build jobs is available in Postman. For each build you can view the commit message, the branch the build ran on, the start time and duration, and the build status (`Passed` or `Failed`).

To view build jobs, open an API and select **Test and Automation**. The most recent jobs are listed under the repository name.

Select **View All Builds** to view the full list of build jobs. From here you can take the following actions:

* Use the dropdown lists to filter jobs by branch or build status.
* To view a build in Travis CI, hover over a build and select **View build details**.
* To start a new build, select **Run Build**. Select or enter the name of the branch to use and select **Run Build**.
* To get the latest build status information, select <img alt="Refresh icon" src="https://assets.postman.com/postman-docs/icon-refresh-v9-5.jpg#icon" width="14px"> **Refresh**.
* To edit or delete the integration, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px">.

<img alt="View all Travis CI builds" src="https://assets.postman.com/postman-docs/v10/collection-runs-v10-2.jpg">

## Viewing API Governance and API Security rule violations

Using the Postman CLI, you can enforce [API Governance and API Security rules each time the pipeline runs](/docs/api-governance/api-definition/api-definition-warnings/#tracking-governance-and-security-rule-violations-in-cicd) using the [`api lint` command](/docs/postman-cli/postman-cli-options/#governance-and-security) ([Enterprise teams only](https://www.postman.com/pricing/)).

To view the results of API Governance and API Security checks that ran as part of the build, first [configure the Postman CLI for Travis CI](#configuring-the-postman-cli-for-travis-ci) and then [start a new build](#viewing-build-status). After the build is complete, use the arrows to expand a build and expand an API definition to view any rule violations.

<img alt="View API linting" src="https://assets.postman.com/postman-docs/v10/collection-runs-v10-2.jpg">

## Configuring the Postman CLI for Travis CI

With the help of the Postman CLI and the Postman API, you can run API tests created in Postman as part of your Travis CI pipeline. First generate the Postman CLI configuration code in Postman. Then add the configuration code to the `.travis.yml` file in your Travis CI project.

You an also enforce [API Governance and API Security rules each time the pipeline runs](/docs/api-governance/api-definition/api-definition-warnings/#tracking-governance-and-security-rule-violations-in-cicd) ([Enterprise teams only](https://www.postman.com/pricing/)).

To generate configuration code for the Postman CLI:

1. Open your API version and select **Test and Automation**.
1. Under **CI/CD Builds**, select **View All Builds**.
1. Select **Configure Postman CLI**.
1. Select a **Collection** to run during pipeline builds. To be available in the dropdown list, you must first [add the collection as a test suite](/docs/designing-and-developing-your-api/testing-an-api/#adding-tests) to your API. You can also select an **Environment** to use.
1. (Optional) Select the checkbox to enforce API Governance and API Security rules each time the CI/CD pipeline runs ([Enterprise teams only](https://www.postman.com/pricing/)).
1. Select the **Operating system** for your CI/CD pipeline.
1. Select **Copy Postman CLI Command** to copy the Postman CLI configuration.

<img alt="Generate the Postman CLI configuration" src="https://assets.postman.com/postman-docs/v10/generate-postman-cli-v10-2.jpg" width="548px">

To add the Postman CLI configuration to your Travis CI project:

1. Create a file named **.travis.yml** at the root of your project repository.
1. Add the Postman CLI configuration you copied from Postman to the **.travis.yml** file:
    * Replace all instances of `$POSTMAN_API_KEY` with a valid [Postman API Key](/docs/developer/intro-api/#generating-a-postman-api-key).
1. Commit and push the changes to your remote repository.
1. In Travis CI, open the repository from the dashboard. Then select **More options > Trigger build**.
1. To view the test results in Postman, open your API and select **Test and Automation**.
