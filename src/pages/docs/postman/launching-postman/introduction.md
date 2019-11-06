---
title: "Introduction"
order: 0.9
page_id: "introduction"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Download and Install"
    url: "https://getpostman.com/apps"
  - type: link
    name: "Installation and updates"
    url: "/docs/postman/launching-postman/installation-and-updates/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "First 5 things to try if you're new to Postman"
    url: "https://blog.getpostman.com/2018/04/11/first-5-things-to-try-if-youre-new-to-postman/"
  - type: subtitle
    name: "Videos"
  - type: link
    name: Postman intro series
    url: "https://www.youtube.com/playlist?list=PLM-7VG-sgbtAgGq_pef5y_ruIUBPpUgNJ"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Sending the first request"
    url: "/docs/postman/launching-postman/sending-the-first-request"
  - type: link
    name: "The API workflow"
    url: "/docs/postman/design-and-develop-apis/the-api-workflow/"

---

Welcome to the Postman docs!

Postman is a collaboration platform for API development. You can use Postman to design, build, and test APIs in conjunction with your teammates, and to support developer adoption for published APIs. The documentation includes info on carrying out these tasks—you will also find learning material on the [blog](https://blog.getpostman.com) and in the [community forum](https://community.getpostman.com/).

__If you are completely new to Postman, the guide to [sending your first request](/docs/postman/launching-postman/sending-the-first-request/) is a great place to start.__

Check out the guidance below for topics you might find helpful depending on how you plan to use Postman.

## Contents

Learn how to use Postman for particular activities:

* [Development](#development)
* [Testing](#testing)
* [Product management](#product-management)
* [Other](#other)

[Provide feedback on the documentation.](#providing-feedback)

## Development

![Development](https://www.getpostman.com/img/v2/uses-cases/api-first-development-with-postman.svg)

If you're developing an application, carrying out an API-first development project, or integrating an API into an existing project, you can use Postman to facilitate various stages of the development lifecycle.

* Learn the Postman basics, making authenticated requests, grouping them into collections, inspecting responses, and scripting tests:
    * [Requests](/docs/postman/sending-api-requests/requests/)
    * [Responses](/docs/postman/sending-api-requests/responses/)
    * [Authorization](/docs/postman/sending-api-requests/authorization/)
    * [Intro to collections](/docs/postman/collections/intro-to-collections/)
    * [Intro to scripts](/docs/postman/scripts/intro-to-scripts/)
* Build and integrate your API requests within your development workflow:
    * [Intro to environments and globals](/docs/postman/environments-and-globals/intro-to-environments-and-globals/)
    * [Variables](/docs/postman/environments-and-globals/variables/)
    * [Intro to mock servers](/docs/postman/mock-servers/intro-to-mock-servers/)
    * [Generate code snippets](/docs/postman/sending-api-requests/generate-code-snippets/)
    * [Proxy](/docs/postman/sending-api-requests/proxy/)
    * [Interceptor extension](/docs/postman/sending-api-requests/interceptor-extension/)
    * [Postman API](/docs/postman/postman-api/intro-api/)
    * [Continuous Integration](/docs/postman/postman-api/continuous-integration/)
* Carry out unit and integration tests, troubleshoot requests, build workflows for end-to-end testing on your project functionality, and monitor your API:
    * [Troubleshooting API requests](/docs/postman/sending-api-requests/troubleshooting-api-requests/)
    * [Debugging and logs](/docs/postman/sending-api-requests/debugging-and-logs/)
    * [Intro to collection runs](/docs/postman/collection-runs/intro-to-collection-runs/)
    * [Command line integration with Newman](/docs/postman/collection-runs/command-line-integration-with-newman/)
    * [Intro to monitoring](/docs/postman/monitors/intro-monitors/)
* Follow an API-first workflow, designing your schema, creating specs, and sharing visualized request data for input:
    * [The API workflow](/docs/postman/design-and-develop-apis/the-api-workflow/)
    * [Visualizing API responses](/docs/postman/sending-api-requests/visualizer/)

## Testing

![Testing](https://www.getpostman.com/img/v2/uses-cases/test-automation-in-postman.png)

If you're QA testing an API, regression testing a recent change to functionality, automating your manual tests, or carrying out exploratory testing, Postman provides can help streamline the process.

* Test your API with custom scripts utilizing the Postman sandbox libraries:
    * [Intro to scripts](/docs/postman/scripts/intro-to-scripts/)
    * [Test scripts](/docs/postman/scripts/test-scripts/)
    * [Test examples](/docs/postman/scripts/test-examples/)
    * [Postman sandbox](/docs/postman/scripts/postman-sandbox/)
* Use variables and environments to test efficiently:
    * [Variables](/docs/postman/environments-and-globals/variables/)
    * [Intro to environments and globals](/docs/postman/environments-and-globals/intro-to-environments-and-globals/)
* Run your tests within request collections to model workflows and build continuous integration into your process:
    * [Intro to collection runs](/docs/postman/collection-runs/intro-to-collection-runs/)
    * [Command line integration with Newman](/docs/postman/collection-runs/command-line-integration-with-newman/)
    * [Integration with Jenkins](/docs/postman/collection-runs/integration-with-jenkins/)
    * [Integration with Travis CI](/docs/postman/collection-runs/integration-with-travis/)
* Monitor API performance with reports:
    * [Intro to monitoring](/docs/postman/monitors/intro-monitors/)
    * [Viewing and analyzing APIs](/docs/postman/design-and-develop-apis/view-and-analyze-api-reports/)

## Product management

![Product management](https://www.getpostman.com/img/v2/uses-cases/use-cases-developer-portal-postman.svg)

If you're working in product management, are an engineering manager / lead, a tech writer, or are involved in developer relations, you can use Postman to communicate with colleagues and partners to spec an API and help consumers adopt it.

* Collaborate with stakeholders on your team by discussing and agreeing on API details:
    * [Collaboration](/docs/postman/launching-postman/collaboration/)
    * [Commenting on collections](/docs/postman/collections/commenting-on-collections/)
    * [Sharing APIs and managing roles](/docs/postman/design-and-develop-apis/sharing-apis/)
* Define your API product strategy and design:
    * [Managing APIs](/docs/postman/design-and-develop-apis/managing-apis/)
    * [The API workflow](/docs/postman/design-and-develop-apis/the-api-workflow/)
* Share API info and use mocking to test your UX/DX:
    * [Examples](/docs/postman/collections/examples/)
    * [Intro to mock servers](/docs/postman/mock-servers/intro-to-mock-servers/)
    * [Visualize API responses](/docs/postman/sending-api-requests/visualizer/)
* Publish developer documentation for your API to support onboarding, monitor API performance, and manage versions:
    * [Intro to API documentation](/docs/postman/api-documentation/intro-to-api-documentation/)
    * [Public API documentation](/docs/postman-for-publishers/public-api-docs/)
    * [Viewing monitor results](/docs/postman/monitors/viewing-monitor-results/)
    * [Versioning APIs](/docs/postman/design-and-develop-apis/versioning-an-api/)

## Other

If you are using Postman for a use case not mentioned above, or just want to learn about APIs, try [sending your first request](/docs/postman/launching-postman/sending-the-first-request/) and take it from there! You might also find the [first five things to try if you're new to Postman](https://blog.getpostman.com/2018/04/11/first-5-things-to-try-if-youre-new-to-postman/
) helpful.

## Providing feedback

Share your thoughts on the documentation and help the Postman team to improve it for yourself and other learners! To submit feedback, please [create an issue on the documentation GitHub repo](https://github.com/postmanlabs/postman-docs/issues) or post in the [community forum](https://community.getpostman.com/). _To provide feedback, report a bug, or make a feature request for the Postman app itself, please use the [Postman App Support](https://github.com/postmanlabs/postman-app-support/issues) repo._
