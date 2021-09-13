---
title: "CI Integrations"
order: 164.2
page_id: "ci-integrations"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "API Development Overview"
    url: "/docs/designing-and-developing-your-api/the-api-workflow/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "CircleCI"
    url: "/docs/integrations/available-integrations/ci-integrations/circleci/"
  - type: link
    name: "Travis CI"
    url: "/docs/integrations/available-integrations/ci-integrations/travis-ci/"
---

Continuous Integration and Continuous Delivery (CI/CD) are a core component of the [API development workflow](/docs/designing-and-developing-your-api/the-api-workflow/). Postman integrates with popular CI tools so you can view details about API builds in the same place where you define and test your API.

After you set up CI integration, you can view the status of builds or kick off a new build, all from within Postman. In addition, with the help of [Newman](/docs/running-collections/using-newman-cli/command-line-integration-with-newman/) and the Postman API, you can run API tests created in Postman as part of your CI pipeline.

## Configuring CI integration

To set up CI integration for your API, you’ll need to create an API token in your CI tool and configure your API in Postman. See the instructions for your CI tool:

* [CircleCI](/docs/integrations/available-integrations/ci-integrations/circleci/)
* [Travis CI](/docs/integrations/available-integrations/ci-integrations/travis-ci/)

## Viewing build status

After you set up CI integration, status information for CI build jobs is available in Postman. For each build you can view the commit message, the branch the build ran on, the build status (success or failed), and the time the build ran.

To view build jobs, open your API and select the **Test** tab. The most recent jobs are listed under **Recent Runs**.

* To view a build in your CI tool, hold the cursor over a build and select **View build details**.
* To kick off a new build, select **Run Build**. Select or type a branch name, and then select **Run Build**.
* To edit or delete the integration, select the three dots <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px">.

<img alt="View CI recent runs" src="https://assets.postman.com/postman-docs/ci-recent-runs-v9.jpg" width="788">

To view the full list of build jobs, select **View All Builds**. Use the dropdown list to filter the list of builds by branch or view builds for **All Branches**. To get the latest build status information, select **Refresh**.

<img alt="View all CI builds" src="https://assets.postman.com/postman-docs/ci-view-builds-v9.jpg" width="788">

## Configuring Newman for CI

Running API tests as part of your CI pipeline helps to ensure that expectations between your API producers and consumers stay in sync.

To run your API tests along with each build, first generate the required Newman configuration code in Postman. Then add the configuration code to your CI tool. After configuration, each time a CI build runs, Newman uses the Postman API to run the collections that contain your tests. You can view the results of your tests in Postman.

>Before you begin, make sure you’ve already [set up an integration](#configuring-ci-integration) between your API and CI tool.

To generate configuration code for Newman:

1. Open your API and select the **Test** tab.
1. Under **Recent Runs**, select **View All Builds**.
1. Select **Configure Newman**.
1. Select a **Collection** and **Environment** to run during CI builds.
1. (Optional) Select **+ Add more** to select additional collections to run.
1. Select **Copy** to copy the Newman configuration, and then select **Finish**.
1. Add the Newman configuration you copied to the build configuration file in your API repository. See the instructions for your CI tool:
    * [CircleCI](/docs/integrations/available-integrations/ci-integrations/circleci/#configuring-newman-for-circleci)
    * [Travis CI](/docs/integrations/available-integrations/ci-integrations/travis-ci/#configuring-newman-for-travis-ci)

<img alt="Generate Newman configuration for CI" src="https://assets.postman.com/postman-docs/ci-generate-newman-config-v9.jpg" width="543">
