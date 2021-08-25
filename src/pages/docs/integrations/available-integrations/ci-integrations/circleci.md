---
title: "CircleCI"
order: 164.3
page_id: "circleci"
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
    name: "Related Blog Posts"
  - type: link
    name: "Enhanced workflows with CI and Postman"
    url: "https://blog.postmanlabs.com/enhanced-workflows-with-ci-and-postman/"
---

> **[Integrations are available on Postman Team, Business, and Enterprise plans.](https://www.postman.com/pricing/)**

CircleCI is a cloud-based continuous integration and continuous delivery (CI/CD) platform. Software development teams use CircleCI to run build jobs, automate tests, and orchestrate complex workflows.

To set up CircleCI integration for your API, you’ll need to create an API token in CircleCI and configure your API in Postman. After you set up the integration, you can view the status of builds or kick off a new build, all from within Postman.

## Creating a CircleCI API Token

1. Log into [CircleCI](https://app.circleci.com/settings/user/tokens) and navigate to **User Settings > Personal API Tokens**.
1. Select **Create New Token**.
1. Enter a Token Name and select **Add API Token**.
1. Select **Copy** to copy the new token. (You might want to save the token somewhere safe.)

## Configuring CircleCI integration

1. From the Postman **[Home](https://go.postman.co/home)** page select **[Integrations](https://go.postman.co/integrations)**.
1. Search for and select **CircleCI**. Then select **Add integration**.
1. Enter your CircleCI token and select the check box to agree to let Postman store your token. Then select **Authenticate and Proceed**.
1. Configure the integration:
    * Enter a **Nickname** to help you recognize the integration later.
    * Select the workspace your API is in.
    * Select the API to use.
    * Select the API version to use. *Each API version can be linked to only one CI project*.
    * Select the CI project used for your API.
1. Select **Add Integration**.

> You can also set up a CI integration from within your API. Open your API and select the **Test** tab. Under **Connect to CI/CD Builds**, select the integration you want to add.

<img alt="Add CI integration" src="https://assets.postman.com/postman-docs/circleci-add-integration-v9.jpg" width="527px">

## Viewing build status

After you set up CI integration, status information for CI build jobs is available in Postman. For each build you can view the commit message, the branch the build ran on, the build status (success or failed), and the time the build ran.

To view build jobs, open your API and select the **Test** tab. The most recent jobs are listed under **Recent Runs**. To view the build in your CI tool, hold the cursor over a build and select **View build details**.

To view the full list of build jobs, select **View All Builds**. From here you can:

* Filter the list of builds by branch or view builds for **All Branches**.
* Select **Run Build** to kick off a new build. Select or type a branch name, and then select **Run Build**.
* Select **Refresh** to get the latest build status information.
* Select the three dots <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> to edit or delete the integration.

<img alt="View CI builds" src="https://assets.postman.com/postman-docs/circleci-view-builds-v9.jpg" width="788">

## Configuring Newman for CI

Running API tests as part of your CI pipeline helps to ensure that expectations between your API producers and consumers stay in sync.

To run your API tests along with each build, first generate a Newman configuration file. Then add the configuration file to your CI tool. After configuration, each time a CI build runs, Newman uses the Postman API to run the collections that contain your tests. You can view the results of your tests in Postman.

>Before you begin, make sure you’ve already set up an integration between your API and CI tool.

To generate a Newman configuration file:

1. Open your API and select the **Test** tab
1. Under **Recent Runs**, select **View All Builds**.
1. Select **Configure Newman**.
1. Select a **Collection** and **Environment** to run during CI builds.
1. (Optional) Select **+ Add more** to select additional collections to run.
1. Select **Copy** to copy the Newman configuration, and then select **Finish**.

<img alt="Generate Newman configuration for CI" src="https://assets.postman.com/postman-docs/circleci-generate-newman-config-v9.jpg" width="543">

To add the Newman configuration file to CircleCI:

1. Open the project in CircleCI, select a branch, and then select **Edit Config**.
1. Paste the Newman configuration you copied from Postman:
    * Replace both instances of `$POSTMAN_API_KEY` with a valid [Postman API Key](/docs/developer/intro-api/#generating-a-postman-api-key).
    * Make sure to add the `newman-collection-run` job to a new or existing workflow.
1. Select **Save and Run** to run the pipeline using the new configuration.
1. To view the test results in Postman, open your API and select the **Tests** tab.

### Example CircleCI config.yml

```yaml
version: 2.1

orbs:
  newman: postman/newman@0.0.2

jobs:
  newman-collection-run:
    executor: newman/postman-newman-docker
    steps:
      - checkout

      - newman/newman-run:
        collection: https://api.getpostman.com/collections/789883-28b680e3-eb56-4135-8f4c-de01a6e494e9?apikey=$POSTMAN_API_KEY
        environment: https://api.getpostman.com/environments/5d1b4d44-ac1e-4eb6-9062-b28cd96333a4?apikey=$POSTMAN_API_KEY

workflows:
  example-workflow:
    jobs:
      - newman-collection-run
```
