---
title: "Frequently Asked Questions 🤔"
page_id: "frequently_asked_questions"
updated: 2022-04-25
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Grouping requests in collections"
    url: "/docs/sending-requests/intro-to-collections/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "Integrations: how Postman plays with some of your favorite tools"
    url: "https://blog.postman.com/integrations-how-postman-plays-with-some-of-your-favorite-tools/"
---

### Why are my pre-request and test scripts not running in flows?

Pre-request and tests are actually running in flows, but environment, globals updated
is blocked in flows. The reason for this decision has been explained in the following document.
[!ref Environment/Global not updating](https://github.com/postmanlabs/postman-flows/discussions/142)

If you add a `console.log` you can see you output in the Postman Console and the results of the tests
can be viewed by using the [Test Summary](blocks/test-summary.md) block.