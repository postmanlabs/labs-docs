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
1. Enter a **Token Name** and select **Add API Token**.
1. Select **Copy** to copy the new token. (You might want to save the token somewhere safe.)

## Configuring CircleCI integration

1. From the Postman **[Home](https://go.postman.co/home)** page select **[Integrations](https://go.postman.co/integrations)**.
1. Search for and select **CircleCI**. Then select **Add integration**.
1. Enter your CircleCI token and select the check box to agree to let Postman store your token. Then select **Authenticate and Proceed**.

    <img alt="Add API key" src="https://assets.postman.com/postman-docs/circleci-api-key-v9.jpg" width="527px">

1. Configure the integration:
    * Enter a **Nickname** to help you recognize the integration later.
    * Select the workspace your API is in.
    * Select the API to use.
    * Select the API version to use. *Each API version can be linked to only one CI project*.
    * Select the CI project used for your API.
1. Select **Add Integration**.

    <img alt="Add CI integration" src="https://assets.postman.com/postman-docs/circleci-add-integration-v9.jpg" width="527px">

> You can also set up a CI integration from within your API. Open your API and select the **Test** tab. Under **Connect to CI/CD Builds**, select the integration you want to add.

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
