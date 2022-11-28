---
title: "CI integrations"
updated: 2022-09-15
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "API Development Overview"
    url: "/docs/designing-and-developing-your-api/the-api-workflow/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "Introducing Powerful Integrations"
    url: "https://blog.postman.com/the-new-postman-api-platform/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Bitbucket Pipelines"
    url: "/docs/integrations/available-integrations/ci-integrations/bitbucket-pipelines/"
  - type: link
    name: "CircleCI"
    url: "/docs/integrations/available-integrations/ci-integrations/circleci/"
  - type: link
    name: "Jenkins"
    url: "/docs/integrations/available-integrations/ci-integrations/jenkins/"
  - type: link
    name: "Travis CI"
    url: "/docs/integrations/available-integrations/ci-integrations/travis-ci/"
---

Continuous Integration and Continuous Delivery (CI/CD) are a core part of the [API development workflow](/docs/designing-and-developing-your-api/the-api-workflow/). Postman integrates with popular CI tools so you can view details about API builds in the same place where you define and test your API.

After you set up CI integration, you can view the status of builds or start a new build, all from within Postman. You can also run API tests created in Postman as part of your CI pipeline using the [Postman CLI](/docs/postman-cli/postman-cli-overview/) and the Postman API.

## Configuring CI integration

To set up CI integration for your API, first set up your CI project and then connect Postman to your CI tool. After you set up CI integration, information for CI build jobs is available in Postman. Select **Test and Automation** for your API to view recent build jobs, see the build status, and even start a new build.

To connect your API to your CI project, see the steps for your CI tool:

* [Bitbucket Pipelines](/docs/integrations/available-integrations/ci-integrations/bitbucket-pipelines/)
* [CircleCI](/docs/integrations/available-integrations/ci-integrations/circleci/)
* [GitHub Actions](/docs/integrations/available-integrations/ci-integrations/github-actions/)
* [GitLab CI/CD](/docs/integrations/available-integrations/ci-integrations/gitlab-ci/)
* [Jenkins](/docs/integrations/available-integrations/ci-integrations/jenkins/)
* [Travis CI](/docs/integrations/available-integrations/ci-integrations/travis-ci/)

## Configuring the Postman CLI for CI

Running API tests as part of your CI pipeline helps to keep expectations between your API producers and consumers in sync. The Postman CLI can also perform [API Governance and API Security checks](/docs/api-governance/api-governance-overview/) as part of your CI pipeline ([Enterprise teams only](https://www.postman.com/pricing/)).

To run your API tests along with each build and, optionally, your API Governance and API Security checks, first generate the Postman CLI configuration code in Postman. Then add the configuration code to your CI project. Each time a CI build runs, the Postman CLI uses the Postman API to run the collections that contain your tests. You can view the results of your tests in Postman.

To configure the Postman CLI to run API tests, see the steps for your CI tool:

* [Bitbucket Pipelines](/docs/integrations/available-integrations/ci-integrations/bitbucket-pipelines/#configuring-the-postman-cli-for-bitbucket-pipelines)
* [CircleCI](/docs/integrations/available-integrations/ci-integrations/circleci/#configuring-the-postman-cli-for-circleci)
* [GitHub Actions](/docs/integrations/available-integrations/ci-integrations/github-actions/#configuring-the-postman-cli-for-github-actions)
* [GitLab CI/CD](/docs/integrations/available-integrations/ci-integrations/gitlab-ci/#configuring-the-postman-cli-for-gitlab-cicd)
* [Jenkins](/docs/integrations/available-integrations/ci-integrations/jenkins/#configuring-the-postman-cli-for-jenkins)
* [Travis CI](/docs/integrations/available-integrations/ci-integrations/travis-ci/#configuring-the-postman-cli-for-travis-ci)
