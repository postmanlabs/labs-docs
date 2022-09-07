---
title: "CircleCI"
order: 164.3
page_id: "circleci"
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
    name: "Videos"
  - type: link
    name: "Building Continuous Delivery Pipelines in CircleCI With Newman"
    url: "https://youtu.be/xyu7CG3msQY"
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
* To start a new build, select **Run Build**. Select or enter the name of the branch to use and select **Run Build**.
* To get the latest build status information, select <img alt="Refresh icon" src="https://assets.postman.com/postman-docs/icon-refresh-v9-5.jpg#icon" width="14px"> **Refresh**.
* To edit or delete the integration, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px">.

<img alt="View all CircleCI builds" src="https://assets.postman.com/postman-docs/ci-view-builds-v9-15.jpg">

## Configuring the Postman CLI for CircleCI

With the help of the Postman CLI and the Postman API, you can run API tests created in Postman as part of your CircleCI pipeline. First generate the Postman CLI configuration code in Postman. Then add the configuration code to the `config.yml` file in your CircleCI project.

To generate configuration code for the Postman CLI:

1. Open your API version and select the **Test** tab.
1. Under **CI/CD Builds**, select **View All Builds**.
1. Select **Configure Postman CLI**.
1. Select a **Collection** to run during pipeline builds. To be available in the dropdown list, you must first [add the collection as a test suite](/docs/designing-and-developing-your-api/testing-an-api/#adding-tests) to your API. You can also select an **Environment** to use.
1. (Optional) Select the check box to test the API's schema against configured governance and security rules.
1. Select the **Operating system** for your CI/CD pipeline.
1. Select <img alt="Copy icon" src="https://assets.postman.com/postman-docs/icon-copy-v9.jpg#icon" width="15px"> **Copy** to copy the Postman CLI configuration, and then select **Finish**.

<img alt="Generate the Postman CLI configuration" src="https://assets.postman.com/postman-docs/v10/generate-postman-cli-v10.jpg" width="548px">

To add the Postman CLI configuration to your CircleCI project:

1. Open your project in CircleCI, select a branch, and then select **Edit Config**.
1. Paste the Postman CLI configuration you copied from Postman:
    * Replace all instances of `$POSTMAN_API_KEY` with a valid [Postman API Key](/docs/developer/intro-api/#generating-a-postman-api-key).
    * Make sure to add the `postman-automated-runs` job to a new or existing workflow.
1. Select **Save and Run** to run the pipeline using the new configuration.
1. To view the test results in Postman, open your API and select the **Test** tab.

### Example CircleCI config.yml

```yaml
version: 2.1

jobs:
  postman-automated-runs:
    docker:
      - image: cimg/base:2021.04
    steps:
      - checkout
      - run:
          name: Install Postman CLI
          command: |
            curl https://dl-cli.pstmn.io/install/linux64 -o postman-cli.tar.gz
            tar -zxvf postman-cli.tar.gz
            sudo mv postman-cli /usr/bin/postman
            rm postman-cli.tar.gz
      - run:
          name: Login using your API key
          command: postman login --with-api-key $POSTMAN_API_KEY
      - run: |
            export POSTMAN_API_BASE_URL='https://api.getpostman.com'
            postman collection run "${CIRCLE_WORKING_DIRECTORY}/postman/collections/Postman CLI Collection Test_4946945-3673316a-9a35-4b0d-a148-3566b490798d.json"

workflows:
  version: 2
  automated-api-tests:
    jobs:
      - postman-automated-runs
          # Run your API using Postman CLI
            postman api lint
```
