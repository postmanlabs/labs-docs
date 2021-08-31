---
title: "Travis CI"
order: 164.4
page_id: "travisci"
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

Travis CI is continuous integration (CI) platform that software development teams use to automatically build and test code changes. With Travis CI, developers can get immediate feedback on the success of a change.

To set up Travis CI integration for your API, you’ll need to create an API token in Travis CI and configure your API in Postman. After you set up the integration, you can view the status of builds or kick off a new build, all from within Postman.

## Copying your Travis CI API Token

1. Log into [Travis CI](https://app.travis-ci.com/account/preferences) and navigate to your account profile page.
1. Select the **Settings** tab, and then select **Copy Token**.

## Configuring Travis CI integration

1. From the Postman **[Home](https://go.postman.co/home)** page select **[Integrations](https://go.postman.co/integrations)**.
1. Search for and select **Travis CI**. Then select **Add integration**.
1. Enter your Travis CI token and select the check box to agree to let Postman store your token. Then select **Authenticate and Proceed**.

    <img alt="Add API key" src="https://assets.postman.com/postman-docs/travis-ci-api-key-v9.jpg" width="523px">

1. Configure the integration:
    * Enter a **Nickname** to help you recognize the integration later.
    * Select the workspace your API is in.
    * Select the API to use.
    * Select the API version to use. *Each API version can be linked to only one CI project*.
    * Select the CI project used for your API.
1. Select **Add Integration**.

    <img alt="Add CI integration" src="https://assets.postman.com/postman-docs/travis-ci-add-integration-v9.jpg" width="523px">

> You can also set up a CI integration from within your API. Open your API and select the **Test** tab. Under **Connect to CI/CD Builds**, select the integration you want to add.

## Configuring Newman for Travis CI

With the help of Newman and the Postman API, you can run API tests created in Postman as part of your CI pipeline. First [generate the Newman configuration code](/docs/integrations/ci-integrations/#configuring-newman-for-ci) in Postman. Then add the configuration code to Travis CI:

1. Create a file named **.travis.yml** at the root of your project repository.
1. Add the Newman configuration you copied from Postman to the **.travis.yml** file:
    * Replace both instances of `$KEY` with a valid [Postman API Key](/docs/developer/intro-api/#generating-a-postman-api-key).
1. Commit and push the changes to your remote repository.
1. In Travis CI, open the repository from the dashboard. Then select **More options > Trigger build**.
1. To view the test results in Postman, open your API and select the **Tests** tab.

### Example Travis CI .travis.yml

```yaml
language: node_js
node_js:
- "12.18.3"

install:
- npm install newman

before_script:
- node --version
- npm --version
- node_modules/.bin/newman --version

script:
- node_modules/.bin/newman run https://api.getpostman.com/collections/789883-00912b43-80d9-4123-b6cb-f933e1828e77?apikey=$KEY --environment https://api.getpostman.com/environments/5d1b4d44-ac1e-4eb6-9062-b28cd96333a4?apikey=$KEY

```
