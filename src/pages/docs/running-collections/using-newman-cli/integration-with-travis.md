---
title: "Integrating with Travis CI"
order: 63
page_id: "integration_with_travis"
updated: 2022-1-13
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Command-line integration with Newman"
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

With CI, every code commit triggers an automated process that builds the code and runs tests. The process can even deploy the updated code if all checks pass, a practice referred to Continuous Delivery (CD).

> **Developing an API?** Postman offers built-in tools to integrate your API with some of the most widely-used Continuous Integration (CI) tools, including Travis CI. After you set up CI integration for your API, you can view the status of builds or kick off a new build, all from within Postman. You can also use Newman to run API tests as part of your CI pipeline. To learn more, see [CI integrations](/docs/integrations/ci-integrations/).

## Running Postman tests with Travis CI

In general, integrating your [Postman tests](/docs/writing-scripts/test-scripts/) with your favorite continuous integration service is the same process as [running on Jenkins](/docs/running-collections/using-newman-cli/integration-with-jenkins/), Travis CI, AppVeyor, or any other build system.

You will set up your CI configuration to run a shell command when starting your build. The command is a [Newman script](/docs/running-collections/using-newman-cli/command-line-integration-with-newman/) that runs the collection containing the tests and returns a pass or fail exit code that’s logged in your CI system.

This example shows you how to integrate Postman with [Travis CI](https://travis-ci.com/), a continuous integration platform that development teams use to automatically build and test code changes. When you're finished, Travis CI will run your tests every time you make a commit to your GitHub repo.

[![travis workflow](https://assets.postman.com/postman-docs/travis_workflow.png)](https://assets.postman.com/postman-docs/travis_workflow.png)

## Getting started

To get started integrating with Travis CI, follow these steps:

1. **Choose the Postman collection with your tests.** In most cases, you'll already have a Postman collection with your tests. For the purposes of this example, you can download a sample collection and environment by selecting the **Run in Postman** button below.

    [![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/92cc7527bbab2bedffbd?action=collection%2Fimport)

1. **Set up a GitHub repository.** Travis CI is free for open source projects on GitHub. This example stores Postman tests in a public GitHub repo.

1. **Set up Travis CI**: Follow the [Travis CI getting started guide](https://docs.travis-ci.com/user/getting-started) for a complete walk through. You will need to [sign in to Travis CI](https://app.travis-ci.com/signin) using your GitHub account and activate Travis CI integration for your public GitHub repo on the [settings page](https://app.travis-ci.com/account/repositories).

## Connecting Postman to Travis CI

1. [Export the Postman Collection as a JSON file](/docs/getting-started/importing-and-exporting-data/) and move the file to your project directory. If you’re using an environment such as this example, [download the Postman environment as a JSON file](/docs/sending-requests/managing-environments/) and move the file to your project directory as well.

    In this example, we've moved both files into a directory called `tests` placed in the root of the project repository.

    Remember to add and commit these two files to your repo.

    [![tree view tests directory](https://assets.postman.com/postman-docs/travis_tree.png)](https://assets.postman.com/postman-docs/travis_tree.png)

1. Create a new file called `.travis.yml` and move it to the root of your project repository.

    Remember to add and commit it to your repo. This file tells Travis CI the programming language for your project and how to  build it.

    Any step of the build [can be customized](https://docs.travis-ci.com/user/customizing-the-build). These scripts will execute the next time you commit and push a change to your repo.

    [![tree view yml](https://assets.postman.com/postman-docs/travis_tree_yml.png)](https://assets.postman.com/postman-docs/travis_tree_yml.png)

1. In the `.travis.yml` file, add a command to `install` Newman in the CI environment, and then add a `script` telling Newman to run the Postman tests (which we've placed in the `tests` directory).

    Since Travis CI doesn’t know where Newman is located, let's update the `PATH`. In this node.js example, the `newman` tool is located in my `.bin` directory which is located in my `node_modules` directory.

    Now, the `.travis.yml` file looks like this for this `node.js` example:

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

Travis CI is now set up to run your Postman tests every time you trigger a build, for example, by pushing a commit to your repo.

Let’s try it out. The Travis CI [build status page](https://travis-ci.org/) will show if the build passes or fails:

If you need to use an environment, export it as a json and add it to the script:

```bash
- node_modules/.bin/newman run tests/hello_world.postman_collection.json -e tests/tests.postman_environment.json
```





[![travis fail](https://assets.postman.com/postman-docs/travis_fail.png)](https://assets.postman.com/postman-docs/travis_fail.png)

   Travis CI is running the Newman command, but you see a failed exit code (1). Boo.

   Stay calm. Let’s review the logs in Travis CI. Newman ran the tests, you see the first and second tests passed, but the last test `Updated in the last day` failed.

[![travis log fail](https://assets.postman.com/postman-docs/travis_log_fail.png)](https://assets.postman.com/postman-docs/travis_log_fail.png)

   Let’s go back to the Postman collection and fix the `Updated in the last day` test.

[![PM test script](https://assets.postman.com/postman-docs/WS-get-information95.png)](https://assets.postman.com/postman-docs/WS-get-information95.png)

   Once you fix the mistake in the test, let’s save the changes, update the repo with the latest collection file, and then trigger a Travis CI build once again by committing and pushing the change.

[![travis log success](https://assets.postman.com/postman-docs/travis_log_success.png)](https://assets.postman.com/postman-docs/travis_log_success.png)

 And it's working! All the tests passed and the command exited with a successful exit code (0).

---
For more information about collection runs, see:

* [Using the Collection Runner](/docs/running-collections/intro-to-collection-runs/)
* [Working with data files](/docs/running-collections/working-with-data-files/)
* [Building workflows](/docs/running-collections/building-workflows/)
* [Integration with Jenkins](/docs/running-collections/using-newman-cli/integration-with-jenkins/)
* [Newman with Docker](/docs/running-collections/using-newman-cli/newman-with-docker/)
