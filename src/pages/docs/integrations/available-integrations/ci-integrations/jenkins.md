---
title: "Jenkins"
page_id: "jenkins"
updated: 2022-03-31
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "CI Integrations"
    url: "/docs/integrations/ci-integrations/"
---

[Jenkins](https://www.jenkins.io/) is an open source automation server that can act as a CI (continuous integration) server or a continuous delivery (CD) hub. With hundreds of available plug-ins, teams can use Jenkins to build, deploy, and automate almost any project.

To set up Jenkins integration for your API, you’ll need to create an API token in Jenkins and configure your API in Postman. After you set up the integration, you can view the status of builds or kick off a new build, all from within Postman.

> If your Jenkins pipeline is configured to run collections using Newman, you can configure the  Newman reporter to send collection run information back to Postman.

## Creating a Jenkins API token

1. Log into Jenkins.
1. Select your user name at the upper right, and then select **Configure**.
1. Select **Add new Token**.
1. Enter a name for the token and select **Generate**.
1. Copy the new token. (You might want to save the token somewhere safe.)

## Configuring Jenkins integration

1. Open your API by selecting **APIs** in the left sidebar, and then selecting an API and a version. *Each API version can be linked to only one CI project*.
1. Select the **Test** tab.
1. Under **Connect to CI/CD Builds**, select **Jenkins**.

    ![CI Integration](https://assets.postman.com/postman-docs/ci-add-integration-v9-15.jpg)

1. Enter a **Nickname** to help you recognize the integration later.
1. Enter the **URL** for your Jenkins server.
1. Enter your **Jenkins username**.
1. For **Authentication token**, enter your Jenkins API token.
1. Select the **CI project** used for your API.
1. Select **Connect**.

    <img alt="Add API key" src="https://assets.postman.com/postman-docs/jenkins-connect-project-v9-15.jpg" width="527px">

## Viewing build status

After you set up Jenkins integration, information for build jobs is available in Postman. For each build you can view the start time, duration, and build status (success or failed). You can also view the results of collection runs that are configured in your pipeline using Newman.

To view build jobs, open an API version and select the **Test** tab. The most recent jobs are listed under **CI/CD Builds**.

* To view collection run details, use the arrows to expand a build and then expand **Collection Runs**. Expand a collection to view details about the collection run.
* To view a build in Jenkins, hover over a build and select **View build details**.
* To kick off a new build, select **Run Build**.
* To edit or delete the integration, select the three dots <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg#icon" width="18px">.

<img alt="View CI recent runs" src="https://assets.postman.com/postman-docs/ci-recent-runs-v9.jpg" width="788">

To view the full list of build jobs, select **View Builds**. Use the dropdown list to filter the list by build status. To get the latest build status information, select **Refresh**.

<img alt="View all CI builds" src="https://assets.postman.com/postman-docs/ci-view-builds-v9.jpg" width="788">

## Configuring Newman for Jenkins

With the help of Newman and the Postman API, you can run API tests created in Postman as part of your CI pipeline. First [generate the Newman configuration code](/docs/integrations/ci-integrations/#configuring-newman-for-ci) in Postman. Then add the configuration code to Jenkins:

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
1. Add the Newman configuration you copied to the build configuration file in your API repository.

1. Open your project in CircleCI and select **Configure**.
1.
1. Paste the Newman configuration you copied from Postman:
    * Replace both instances of `$POSTMAN_API_KEY` with a valid [Postman API Key](/docs/developer/intro-api/#generating-a-postman-api-key).
    * Make sure to add the `newman-collection-run` job to a new or existing workflow.
1. Select **Save and Run** to run the pipeline using the new configuration.
1. To view the test results in Postman, open your API and select the **Tests** tab.

### Example of Jenkins pipeline script

```groovy
pipeline {
  agent any

  tools {nodejs "node"}

  stages {
    stage('Install Newman') {
      steps {
        sh 'npm install -g newman'
      }
    }

    stage ('Install Postman Cloud Reporter') {
      steps {
        sh 'npm install -g newman-reporter-postman-cloud'
      }
    }

    stage('Running collection') {
      steps {
        sh 'newman run "https://api.getpostman.com/collections/12420868-2ffef72e-d740-456c-a0c6-a6af9ec8755c?apikey=PMAK-62417f08f345a72295a71cb2-fb730ec623f6f62ee7e4cbfe4078e5b6a9" -r postman-cloud --reporter-apiKey "PMAK-62417f08f345a72295a71cb2-fb730ec623f6f62ee7e4cbfe4078e5b6a9" --reporter-workspaceId "4f4f98fb-7127-4cb5-8cb8-fddce86d53a6" --reporter-integrationIdentifier "107267-${JOB_NAME}${BUILD_NUMBER}"'
      }
    }
  }
}
```
