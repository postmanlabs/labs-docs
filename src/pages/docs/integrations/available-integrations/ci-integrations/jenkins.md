---
title: "Jenkins"
page_id: "jenkins"
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
    name: "Stay on Top of Your API Builds with Postman’s Jenkins Integration"
    url: "https://blog.postman.com/stay-on-top-of-your-api-builds-witih-postmans-jenkins-integration/"
---

[Jenkins](https://www.jenkins.io/) is an open source automation server that can act as a continuous integration (CI) server or a continuous delivery (CD) hub. With hundreds of available plug-ins, teams can use Jenkins to build, deploy, and automate almost any project.

To set up a Jenkins integration for your API, first create an API token in Jenkins and then configure your API in Postman. After you set up the integration, you can view the status of builds or start a new build, all from within Postman.

## Creating a Jenkins API token

1. Sign in to Jenkins.
1. Select your user name at the upper right, and then select **Configure**.
1. Select **Add new Token**.
1. Enter a name for the token and select **Generate**.
1. Copy the new token. (You might want to save the token somewhere safe.)

## Configuring a Jenkins integration

1. Open your API by selecting **APIs** in the sidebar. *Each API can be linked to one CI project*.
1. Select **Test and Automation**.
1. Under **Automate**, select **Jenkins**.
1. Enter a **Nickname** to help you recognize the integration later.
1. Enter the **URL** of your Jenkins server.

    > If your Jenkins server is located behind a firewall, you may need to ask your IT team to allowlist the Postman static IP address (`3.212.102.200`) to enable the Jenkins integration. Learn more about [Static IP support](https://learning.postman.com/docs/integrations/intro-integrations/#static-ip-support).

1. Enter your **Jenkins username**.
1. For **Authentication token**, enter your Jenkins API token.
1. Select the **CI project** used for your API.
1. Select **Connect**.

<img alt="Connect to Jenkins" src="https://assets.postman.com/postman-docs/jenkins-connect-project-v9-15.jpg" width="527px">

## Viewing build status

After you set up a Jenkins integration, information for build jobs is available in Postman. For each build you can view the start time, duration, and build status (`Success` or `Failed`). You can also view the results of collection runs that are [configured in your pipeline using the Postman CLI](#configuring-the-postman-cli-for-jenkins).

To view build jobs, open an API and select **Test and Automation**. The most recent jobs are listed under the repository name.

Select **View Builds** to view the full list of build jobs. From here you can take the following actions:

* Use the dropdown list to filter jobs by build status.
* To view a build in Jenkins, hover over a build and select **View build details**.
* To start a new build, select **Run Build**.
* To get the latest build status information, select <img alt="Refresh icon" src="https://assets.postman.com/postman-docs/icon-refresh-v9-5.jpg#icon" width="14px"> **Refresh**.
* To edit or delete the integration, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg#icon" width="18px">.

<img alt="View all Jenkins builds" src="https://assets.postman.com/postman-docs/v10/collection-runs-v10-2.jpg">

## Viewing collection run details

Using the Postman CLI, you can run Postman collections with your API tests as part of a Jenkins pipeline.

To view details for collections that were run as part of a build, first [configure the Postman CLI for Jenkins](#configuring-the-postman-cli-for-jenkins) and then [start a new build](#viewing-build-status). After the build is complete, use the arrows to expand a build and expand a collection to view details about a collection run.

<img alt="View collection runs" src="https://assets.postman.com/postman-docs/v10/collection-runs-v10-2.jpg">

> Select **View Report** to view a collection run report in the Postman **History**. Learn more about using the [Collection Runner](/docs/running-collections/intro-to-collection-runs/).

## Viewing API linting results

Using the Postman CLI, you can enforce [API Governance and API Security rules each time the pipeline runs](/docs/api-governance/api-definition/api-definition-warnings/#tracking-governance-and-security-rule-violations-in-cicd) using the [API linting command](/docs/postman-cli/postman-cli-options/#governance-and-security) ([Enterprise teams only](https://www.postman.com/pricing/)).

To view API linting results that were run as part of the build, first [configure the Postman CLI for Jenkins](#configuring-the-postman-cli-for-jenkins) and then [start a new build](#viewing-build-status). After the build is complete, use the arrows to expand a build and expand an API definition to view API linting results.

<img alt="View API linting" src="https://assets.postman.com/postman-docs/v10/collection-runs-v10-2.jpg">

## Configuring the Postman CLI for Jenkins

With the help of the Postman CLI and the Postman API, you can run API tests created in Postman as part of your Jenkins pipeline. First generate the Postman CLI configuration code in Postman. Then add the configuration code to your Jenkins pipeline.

Each time a build runs, the Postman CLI runs the collections that contain your tests. You can view the results of your tests in Postman. You an also enforce [API Governance and API Security rules each time the pipeline runs](/docs/api-governance/api-definition/api-definition-warnings/#tracking-governance-and-security-rule-violations-in-cicd) ([Enterprise teams only](https://www.postman.com/pricing/)).

> Before you begin, make sure you’ve already [set up an integration](#configuring-jenkins-integration) between your API and Jenkins.

To generate configuration code for the Postman CLI:

1. Open your API version and select **Test and Automation**.
1. Under **CI/CD Builds**, select **View Builds**.
1. Select **Configure Postman CLI**.
1. Select a **Collection** to run during pipeline builds. To be available in the dropdown list, you must first [add the collection as a test suite](/docs/designing-and-developing-your-api/testing-an-api/#adding-tests) to your API. You can also select an **Environment** to use.
1. (Optional) Select the checkbox to enforce API Governance and API Security rules each time the CI/CD pipeline runs ([Enterprise teams only](https://www.postman.com/pricing/)).
1. Select the **Operating system** for your CI/CD pipeline.
1. Select **Copy Postman CLI Command** to copy the Postman CLI configuration.

<img alt="Generate the Postman CLI configuration" src="https://assets.postman.com/postman-docs/v10/generate-postman-cli-v10-2.jpg" width="548px">

To add the Postman CLI configuration to your Jenkins pipeline:

1. Open your pipeline project in Jenkins and select **Configure**.
1. Paste the Postman CLI configuration you copied from Postman into the **Pipeline script**:
    * Replace `your_nodejs_configured_tool_name` with the name of your Node.js tool, for example, `node`.
    * Replace all instances of `$POSTMAN_API_KEY` with a valid [Postman API Key](/docs/developer/intro-api/#generating-a-postman-api-key).
1. Select **Save** and then run the pipeline using the new configuration.
1. To view the test results in Postman, open your API version and select **Test and Automation**. For more help, see [Viewing collection run details](#viewing-collection-run-details).
