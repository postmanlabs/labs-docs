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

[Jenkins](https://www.jenkins.io/) is an open source automation server that can act as a continuous integration (CI) server or a continuous delivery (CD) hub. With hundreds of available plug-ins, teams can use Jenkins to build, deploy, and automate almost any project.

To set up a Jenkins integration for your API, you need to create an API token in Jenkins and configure your API in Postman. After you set up the integration, you can view the status of builds or kick off a new build, all from within Postman.

> If your Jenkins pipeline is configured to run API tests using [Newman](/docs/running-collections/using-newman-cli/command-line-integration-with-newman/), you can [configure the  Postman cloud reporter](#configuring-newman-for-jenkins) to send collection run information back to Postman.

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
1. Enter the **URL** of your Jenkins server.
1. Enter your **Jenkins username**.
1. For **Authentication token**, enter your Jenkins API token.
1. Select the Jenkins **CI project** used for your API.
1. Select **Connect**.

    <img alt="Add API key" src="https://assets.postman.com/postman-docs/jenkins-connect-project-v9-15.jpg" width="527px">

## Viewing build status

After you set up a Jenkins integration, information for build jobs is available in Postman. For each build you can view the start time, duration, and build status (success or failed). You can also view the results of collection runs that are [configured in your pipeline using Newman](#configuring-newman-for-jenkins).

To view build jobs, open an API version and select the **Test** tab. The most recent jobs are listed under **CI/CD Builds**.

* To view a build in Jenkins, hover over a build and select **View build details**.
* To kick off a new build, select **Run Build**.
* To edit or delete the integration, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg#icon" width="18px">.

<img alt="View recent Jenkins builds" src="https://assets.postman.com/postman-docs/jenkins-test-tab-v9-14.jpg">

To view the full list of build jobs, select **View Builds**. Use the dropdown list to filter the list by build status. To get the latest build status information, select **Refresh**.

<img alt="View all Jenkins builds" src="https://assets.postman.com/postman-docs/jenkins-view-builds-v9-14.jpg">

## Viewing collection run details

Using Newman, you can run Postman collections with your API tests as part of a Jenkins pipeline. The Postman cloud reporter can send details about the collection runs back to Postman.

To view details for collections that were run as part of a build, first [configure Newman for Jenkins](#configuring-newman-for-jenkins) and then [kick off a new build](#viewing-build-status). After the build is complete, use the arrows to expand a build and expand **Collection Runs**. Then expand a collection to view details about a collection run.

<img alt="View collection runs" src="https://assets.postman.com/postman-docs/jenkins-collection-runs-v9-14.jpg">

Select **View Report** to view a collection run report in the Postman **History**. Learn more about using the [Collection Runner](/docs/running-collections/intro-to-collection-runs/).

<img alt="View collection run report" src="https://assets.postman.com/postman-docs/jenkins-view-report-v9-14.jpg">

## Configuring Newman for Jenkins

With the help of Newman and the Postman API, you can run API tests created in Postman as part of your Jenkins pipeline. First generate the Newman configuration code in Postman. Then add the configuration code to your Jenkins pipeline.

Each time a Jenkins build runs, Newman runs the collections that contain your tests. You can view the results of your tests in Postman. You an also configure the  [Postman cloud reporter](https://www.npmjs.com/package/newman-reporter-postman-cloud) to send detailed collection run information back to Postman.

> Before you begin, make sure you’ve already [set up an integration](#configuring-jenkins-integration) between your API version and Jenkins.

To generate configuration code for Newman:

1. Open your API version and select the **Test** tab.
1. Under **CI/CD Builds**, select **View Builds**.
1. Select **Configure Newman**.
1. Select a **Collection** and **Environment** to run during Jenkins builds.

    > If needed, select **+ Add More** to select additional collections to run.

1. (Optional) Select the check box to use the Postman cloud reporter to send detailed collection run information back to Postman. You can view the collection run details in the Postman **History** and on the API version **Test** tab.
1. Select **Copy** to copy the Newman configuration, and then select **Finish**.

<img alt="Generate Newman configuration" src="https://assets.postman.com/postman-docs/jenkins-generate-newman-v9-14.jpg" width="546px">

To add the Newman configuration to your Jenkins pipeline:

1. Open your pipeline project in Jenkins and select **Configure**.
1. Paste the Newman configuration you copied from Postman into the **Pipeline script**:
    * Replace `your_nodejs_configured_tool_name` with the name of your Node.js tool, for example, `node`.
    * Replace both instances of `$POSTMAN_API_KEY` with a valid [Postman API Key](/docs/developer/intro-api/#generating-a-postman-api-key).
1. Select **Save** and then run the pipeline using the new configuration.
1. To view the test results in Postman, open your API version and select the **Tests** tab. For more help, see [Viewing collection run details](#viewing-collection-run-details).

### Example of Jenkins pipeline script

```groovy
pipeline {
  agent any

  tools {nodejs "{your_nodejs_configured_tool_name}"}

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
        sh 'newman run "https://api.getpostman.com/collections/12420868-2ffef72e-d740-456c-a0c6-a6af9ec8755c?apikey=$POSTMAN_API_KEY" -r postman-cloud --reporter-apiKey "$POSTMAN_API_KEY" --reporter-workspaceId "4f4f98fb-7127-4cb5-8cb8-fddce86d53a6" --reporter-integrationIdentifier "107267-${JOB_NAME}${BUILD_NUMBER}"'
      }
    }
  }
}
```
