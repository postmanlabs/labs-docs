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
---

CircleCI is a cloud-based continuous integration and continuous delivery (CI/CD) platform. Software development teams use CircleCI to run build jobs, automate tests, and orchestrate complex workflows.

To set up CircleCI integration for your API, you’ll need to create an API token in CircleCI and configure your API in Postman. After you set up the integration, you can view the status of builds or kick off a new build, all from within Postman.

## Creating a CircleCI API Token

1. Log into [CircleCI](https://app.circleci.com/settings/user/tokens) and navigate to **User Settings > Personal API Tokens**.
1. Select **Create New Token**.
1. Enter a **Token Name** and select **Add API Token**.
1. Select **Copy** to copy the new token. (You might want to save the token somewhere safe.)

## Configuring CircleCI integration

1. Open your API by selecting **APIs** in the left sidebar, and then selecting an API and a version. *Each API version can be linked to only one CI project*.
1. Select the **Test** tab.
1. Under **Connect to CI/CD Builds**, select **CircleCI**.

    ![CI Integration](https://assets.postman.com/postman-docs/ci-add-integration-v9.jpg)

1. For **API Key**, enter your CircleCI token.
1. Enter a **Nickname** to help you recognize the integration later.
1. Select the **CI project** used for your API.
1. Select **Connect**.

    <img alt="Add API key" src="https://assets.postman.com/postman-docs/circleci-connect-project-v9.jpg" width="527px">

## Configuring Newman for CircleCI

With the help of Newman and the Postman API, you can run API tests created in Postman as part of your CI pipeline. First [generate the Newman configuration code](/docs/integrations/ci-integrations/#configuring-newman-for-ci) in Postman. Then add the configuration code to CircleCI:

1. Open your project in CircleCI, select a branch, and then select **Edit Config**.
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
