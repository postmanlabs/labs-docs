---
title: "CircleCI"
order: 164.3
page_id: "circleci"
updated: 2022-04-08
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "CI Integrations"
    url: "/docs/integrations/ci-integrations/"
---

CircleCI is a cloud-based continuous integration and continuous delivery (CI/CD) platform. Software development teams use CircleCI to run build jobs, automate tests, and orchestrate complex workflows.

To set up CircleCI integration for your API, first create an API token in CircleCI and then configure your API in Postman. After you set up the integration, you can view the status of builds or start a new build, all from within Postman.

## Creating a CircleCI API token

1. Sign in to [CircleCI](https://app.circleci.com/settings/user/tokens) and go to **User Settings > Personal API Tokens**.
1. Select **Create New Token**.
1. Enter a **Token Name** and select **Add API Token**.
1. Select **Copy** to copy the new token. (You might want to save the token somewhere safe.)

## Configuring a CircleCI integration

1. Open your API by selecting **APIs** in the sidebar, and then selecting an API and a version. *Each API version can be linked to one CI project*.
1. Select the **Test** tab.
1. Under **Connect to CI/CD Builds**, select **CircleCI**.
1. For **API Key**, enter your CircleCI token.
1. Enter a **Nickname** to help you recognize the integration later.
1. Select the **CI project** used for your API.
1. Select **Connect**.

<img alt="Connect to CircleCI" src="https://assets.postman.com/postman-docs/circleci-connect-project-v9-15.jpg" width="512px">

## Viewing build status

After you set up a CircleCI integration, status information for build jobs is available in Postman. For each build you can view the commit message, the branch the build ran on, the start time and duration, and the build status (success or failed).

To view build jobs, open an API version and select the **Test** tab. The most recent jobs are listed under **CI/CD Builds**.

Select **View All Builds** to view the full list of build jobs. From here you can take the following actions:

* Use the dropdown lists to filter jobs by branch or build status.
* To view a build in CircleCI, hover over a build and select **View build details**.
* To start a new build, select **Run Build**. Enter the name of the branch to use and select **Run Build**.
* To get the latest build status information, select <img alt="Refresh icon" src="https://assets.postman.com/postman-docs/icon-refresh-v9-5.jpg#icon" width="14px"> **Refresh**.
* To edit or delete the integration, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg#icon" width="18px">.

<img alt="View all CircleCI builds" src="https://assets.postman.com/postman-docs/ci-view-builds-v9-15.jpg">

## Configuring Newman for CircleCI

With the help of Newman and the Postman API, you can run API tests created in Postman as part of your CircleCI pipeline. First generate the Newman configuration code in Postman. Then add the configuration code to the `config.yml` file in your CircleCI project.

To generate configuration code for Newman:

1. Open your API version and select the **Test** tab.
1. Under **CI/CD Builds**, select **View All Builds**.
1. Select **Configure Newman**.
1. Select a **Collection** to run during pipeline builds. You can also select an **Environment** to use.

    > If needed, select **+ Add More** to select other collections to run.

1. Select **Copy** to copy the Newman configuration, and then select **Finish**.

<img alt="Generate Newman configuration" src="https://assets.postman.com/postman-docs/ci-generate-newman-config-v9.jpg" width="543">

To add the Newman configuration to your CircleCI project:

1. Open your project in CircleCI, select a branch, and then select **Edit Config**.
1. Paste the Newman configuration you copied from Postman:
    * Replace all instances of `$POSTMAN_API_KEY` with a valid [Postman API Key](/docs/developer/intro-api/#generating-a-postman-api-key).
    * Make sure to add the `newman-collection-run` job to a new or existing workflow.
1. Select **Save and Run** to run the pipeline using the new configuration.
1. To view the test results in Postman, open your API and select the **Test** tab.

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
