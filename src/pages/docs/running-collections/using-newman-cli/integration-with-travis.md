---
title: "Integrating with Travis CI"
order: 63
page_id: "integration_with_travis"
updated: 2022-1-14
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Running collections on the command line with Newman"
    url: "/docs/running-collections/using-newman-cli/command-line-integration-with-newman/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Integrate API tests with Postman, Newman, and Travis CI"
    url: "https://blog.postman.com/integrate-api-tests-with-postman-newman-and-travis-ci/"
  - type: link
    name: "Integrations: how Postman plays with some of your favorite tools"
    url: "https://blog.postman.com/integrations-how-postman-plays-with-some-of-your-favorite-tools/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Intro to the Postman API"
    url: "/docs/developer/intro-api/"
  - type: link
    name: "CI Integrations"
    url: "/docs/integrations/ci-integrations/"

warning: false
tags:
  - "newman"

---

Continuous Integration (CI) is a development practice that encourages developers to regularly commit their code changes to a shared repository, usually several times a day. Committing early and often helps the team avoid technical debt and detect problems quickly, when conflicts are still relatively easy to fix.

With CI, every code commit triggers an automated process that builds the code and runs tests. The process can even deploy the updated code if all checks pass, a practice referred to as Continuous Delivery (CD).

> **Developing an API?** Postman offers built-in tools to integrate your API with some of the most widely-used Continuous Integration (CI) tools, including Travis CI. After you set up CI integration for your API, you can view the status of builds or kick off a new build, all from within Postman. You can also use Newman to run API tests as part of your CI pipeline. To learn more, see [CI integrations](/docs/integrations/ci-integrations/).

## Running Postman tests with Travis CI

In general, integrating your [Postman tests](/docs/writing-scripts/test-scripts/) with Travis CI is the same process as [running on Jenkins](/docs/running-collections/using-newman-cli/integration-with-jenkins/), AppVeyor, or any other build system. You will set up your CI configuration to run a shell command when starting your build. The command is a [Newman script](/docs/running-collections/using-newman-cli/command-line-integration-with-newman/) that runs the collection containing the tests and returns a pass or fail exit code that’s logged in your CI system.

This example shows you how to integrate Postman with [Travis CI](https://travis-ci.com/), a continuous integration platform that development teams use to automatically build and test code changes. When you're finished, Travis CI will run your tests every time you make a commit to your GitHub repo.

[![travis workflow](https://assets.postman.com/postman-docs/travis_workflow.png)](https://assets.postman.com/postman-docs/travis_workflow.png)

## Getting started

1. **Choose the Postman collection with your tests.** In most cases, you'll already have a Postman collection with your tests. For this example, you can import a sample "Hello World" collection into your workspace by selecting the **Run in Postman** button below.

    [![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/92cc7527bbab2bedffbd?action=collection%2Fimport)

1. **Set up a GitHub repository.** Travis CI is free for open source projects on GitHub. For this example, you'll store the collection with your Postman tests in a public GitHub repository. Go ahead and create a new public repo on GitHub and clone the project to your local system.

1. **Set up Travis CI**: Follow the [Travis CI getting started guide](https://docs.travis-ci.com/user/getting-started) for a complete walk through. You will need to [sign in to Travis CI](https://app.travis-ci.com/signin) and [activate Travis CI integration](https://app.travis-ci.com/account/repositories) for your new public GitHub repo.

## Connecting Postman to Travis CI

1. [Export the "Hello World" collection](/docs/getting-started/importing-and-exporting-data/) as a JSON file and rename the exported file `hello_world.postman_collection.json`.

1. Create a folder named `tests` at the root of your local project, and move the exported JSON file into the new `tests` folder.

    ```bash
    .
    └── tests
        └── hello_world.postman_collection.json
    ```

    > If your collection uses an environment, you should also [export the environment](/docs/sending-requests/managing-environments/) as a JSON file and move it to the `tests` folder as well.

1. Create a new file named `.travis.yml` at the root of your project repository. You'll use this file to tell Travis CI the programming language for your project and how to  build it.

    ```bash
    .
    ├── .travis.yml
    └── tests
        └── hello_world.postman_collection.json
    ```

    > Any step of the build process [can be customized](https://docs.travis-ci.com/user/customizing-the-build). The scripts in the `.travis.yml`file will execute the next time you commit and push a change to your repo.

1. In the `.travis.yml` file, add a command to `install` Newman in the CI environment, and then add a `script` telling Newman to run the Postman tests (which you placed in the `tests` folder).

    Because Travis CI doesn’t know where Newman is located, you need to update the `PATH`. In this example, the `newman` tool is located in the `.bin` folder which is in the `node_modules` folder.

    For this example, your `.travis.yml` file should look like the following:

    ```bash
    language: node_js
    node_js:
    - "16.13.2"

    install:
    - npm install newman

    before_script:
    - node --version
    - npm --version
    - node_modules/.bin/newman --version

    script:
    - node_modules/.bin/newman run tests/hello_world.postman_collection.json
    ```

    Note that if you exported an environment, you need to add it to the script as well:

    ```bash
    script:
    - node_modules/.bin/newman run tests/hello_world.postman_collection.json -e tests/tests.postman_environment.json
    ```

1. Commit all the changes to your local project and push them to your public GitHub repo.

    Travis CI will automatically trigger a build and run  your tests every time you push a commit to your repo. Head over to the [Travis CI dashboard](https://app.travis-ci.com/dashboard) to see the status of your build. If all went well, your build passed successfully.

    [![Travis CI build successful](https://assets.postman.com/postman-docs/travis-ci-build-success.jpg)](https://assets.postman.com/postman-docs/travis-ci-build-success.jpg)

## Fixing test failures

To see what things look like when a test fails, make a change in your imported "Hello Word" collection in Postman so that one of the test breaks.

1. Open the collection, select the "Hello World" request, and then select the **Tests** tab.

1. Change the final test so that it looks for the text "Hello, Everyone!" instead of "Hello, World!"

    [![Tests tab error](https://assets.postman.com/postman-docs/travis-ci-test-error-example-v9-9.jpg)](https://assets.postman.com/postman-docs/travis-ci-test-error-example-v9-9.jpg)

1. Save the change and then export the collection again. As before, rename the exported file `hello_world.postman_collection.json` and move it into the `tests` directory in your local project.

1. Commit and push the change to your public GitHub repo. This will trigger a new build in Travis CI, and this time the build should fail.

    [![Travis CI build failed](https://assets.postman.com/postman-docs/travis-ci-build-failed.jpg)](https://assets.postman.com/postman-docs/travis-ci-build-failed.jpg)

1. Select the failed build link to view the build logs in Travis CI. Looking at the logs, you can see that the assertion failed. If this was your own collection, you could use the error message to help understand why the test failed and debug the problem.

    [![Travis CI error log](https://assets.postman.com/postman-docs/travis-ci-error-log.jpg)](https://assets.postman.com/postman-docs/travis-ci-error-log.jpg)

1. For this example, if you want, you can correct the error in the test in Postman and export the collection again. As before, rename the JSON file, add it to the `tests` folder in your local project, then commit and push. This time your build in Travis CI should be successful.

## Next Steps

For more information about collection runs, see the following topics.

* [Using the Collection Runner](/docs/running-collections/intro-to-collection-runs/)
* [Importing data files](/docs/running-collections/working-with-data-files/)
* [Building request workflows](/docs/running-collections/building-workflows/)
* [Integrating with Jenkins](/docs/running-collections/using-newman-cli/integration-with-jenkins/)
* [Newman with Docker](/docs/running-collections/using-newman-cli/newman-with-docker/)
