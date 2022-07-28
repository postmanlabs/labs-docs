---
title: "Running collections on the command line with Newman"
updated: 2022-05-23
search_keyword: "newman run"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Using the Collection Runner"
    url: "/docs/running-collections/intro-to-collection-runs/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Run Collections with Newman | Postman Level Up"
    url: "https://www.youtube.com/watch?v=SQlwGZj97Y4"
  - type: link
    name: "Using Custom Reporters with Newman"
    url: "https://youtu.be/Nxdxx-VaYno"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "Next-Level Automation Tricks for Newman"
    url: "https://blog.postman.com/automation-tricks-for-newman/"
  - type: link
    name: "Newman: run and test your collections from the command line"
    url: "https://blog.postman.com/newman-run-and-test-your-collections-from-the-command-line/"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "SEI Novus"
    url:  "https://www.postman.com/case-studies/sei-novus/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Intro to the Postman API"
    url: "/docs/developer/intro-api/"
warning: false
---
Newman is a command-line Collection Runner for Postman. It enables you to run and test a Postman Collection directly from the command line. It's built with extensibility in mind so that you can integrate it with your continuous integration servers and build systems.

Newman maintains feature parity with Postman and allows you to run collections the way they're executed inside the collection runner in Postman.

Newman resides in the [NPM registry](https://www.npmjs.com/package/newman) and on [GitHub](https://github.com/postmanlabs/newman).

[![Running Newman](https://assets.postman.com/postman-docs/newman-running-in-terminal.gif)](https://assets.postman.com/postman-docs/newman-running-in-terminal.gif)

## Contents

* [Getting started](#getting-started)
* [Options](#options)
* [File uploads](#file-uploads)
* [Custom reporters](#custom-reporters)

## Getting started

To get started, install Node.js and Newman, then run your collections. Learn more about [installing and running Newman](/docs/running-collections/using-newman-cli/installing-running-newman/).

## Options

Newman provides a rich set of options to customize a run. Learn more about [Newman options](/docs/running-collections/using-newman-cli/newman-options/).

## File uploads

Newman supports file uploads, so you can use a data file (such as a text file) to fill in form data fields. Learn more about [uploading files in Newman](/docs/running-collections/using-newman-cli/newman-file-uploads/).

## Custom reporters

Custom reporters are useful to generate collection run reports that cater to specific use cases, for example, logging out the response body when a request (or its tests) fail. Learn more about [using Newman custom reporters](/docs/running-collections/using-newman-cli/newman-custom-reporters/).
