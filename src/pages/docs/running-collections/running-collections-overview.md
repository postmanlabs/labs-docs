---
title: "Running collections overview"
updated: 2022-11-09
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Using the Collection Runner"
    url: "/docs/running-collections/intro-to-collection-runs/"
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "API Monitoring | The Exploratory"
    url: "https://youtu.be/tDQzY1Hn2LY"
  - type: dynamic_blog
    name: "Blog Posts"
    blog_tag: "monitors"

warning: false

---

In Postman, a [collection](/docs/getting-started/creating-the-first-collection/) can be a group of saved [requests](/docs/getting-started/sending-the-first-request/), or a [workflow](/docs/running-collections/building-workflows/), or a [test suite](/docs/writing-scripts/test-scripts/). You might run a collection to send requests to your new API's endpoints, or to retrieve data from a data source, or to test an API's functionality. Postman enables you to run collections in several ways:

* You can [run collections manually](/docs/running-collections/intro-to-collection-runs/), with the Collection Runner. This is useful when you're sending a small number of requests and you don't need to repeat them many times.
* You can run collections frequently in an automated way by scheduling collection runs or by setting up monitors. [Scheduled collection runs](/docs/running-collections/scheduling-collection-runs) are useful for automating testing, and [monitors](/docs/running-collections/scheduling-collection-runs-monitors) are useful for checking performance, availability, and reliability.
* You can automate collection runs in your CI/CD with the [Postman CLI](/docs/postman-cli/postman-cli-overview/) or [Newman](/docs/running-collections/using-newman-cli/command-line-integration-with-newman/).
* You can use [webhooks](/docs/running-collections/collection-webhooks/) to trigger collection runs at certain times or when a specific event happens in your application.
