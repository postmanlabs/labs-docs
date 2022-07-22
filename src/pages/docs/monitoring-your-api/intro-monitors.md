---
title: "Monitoring your APIs"
order: 88
page_id: "intro_monitors"
updated: 2022-2-14
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Grouping requests in collections"
    url: "/docs/sending-requests/intro-to-collections/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "API Monitoring | The Exploratory"
    url: "https://youtu.be/tDQzY1Hn2LY"
  - type: link
    name: "API Lifecycle, Part 2: Monitor and Deploy an API | Postman Space Camp"
    url: "https://youtu.be/voAUfBx8fnE"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "Integrated API Monitoring in Postman"
    url: "https://blog.postman.com/integrated-api-monitoring-in-postman/"
  - type: link
    name: "Continuous API Testing with Postman"
    url: "https://blog.postman.com/continuous-api-testing-with-postman/"
  - type: link
    name: "Build an Exercise Tracker using Notion API and Postman Monitor"
    url: "https://blog.postman.com/how-build-daily-habit-counter-notion-api-postman/"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Hathway"
    url: "https://www.postman.com/case-studies/hathway/"
  - type: link
    name: "Momentive"
    url: "https://www.postman.com/case-studies/momentive/"
  - type: subtitle
    name: "Public Workspaces"
  - type: link
    name: "Postman API Monitoring Examples"
    url:  "https://www.postman.com/postman/workspace/e348c5a0-2965-44cc-87ed-7b316516f38d"

warning: false

---

Postman Monitors give you continuous visibility into the health and performance of your APIs. Uptime monitors (open beta) enable you to keep watch on a single API endpoint, while collection-based monitors enable you to run API test scripts, chain together multiple requests, and validate critical API flows.

Once the monitor is running you’ll be alerted to any system outages or test failures, so you can identify and address issues before your API’s consumers are affected.

## Contents

* [Uptime monitors](#uptime-monitors)
* [Collection-based monitors](#collection-based-monitors)
* [Next steps](#next-steps)

## Uptime monitors

Uptime monitors (open beta) enable you to track the availability of an API or website. There’s no need to set up collections, test scripts, or environments. Enter the URL you want to monitor (HTTP or HTTPS only) and select the team members to be notified of outages.

The uptime monitor continuously checks the availability of the URL, as often as every minute (paid plans) or every 15 minutes (free plans). When Postman detects downtime, the selected team members are alerted by email.

Uptime monitors ensure the availability of your API or service around the clock and help you detect system outage issues more quickly. Uptime statistics are recorded on the monitor’s dashboard, so you can always check the status of your API, view past trends, or pause the monitor as needed.

Learn how to [create an uptime monitor](/docs/monitoring-your-api/uptime-monitors/).

> Uptime monitors can only monitor URLs, API endpoints, and websites that are publicly available over the internet. Only HTTP and HTTPS are supported.

## Collection-based monitors

A collection-based monitor runs a series of requests from the Postman cloud on a schedule you set. When creating a monitor, you choose a [collection](/docs/sending-requests/intro-to-collections/) with the requests you want to run. These can be basic requests that indicate whether an endpoint is up and reachable. More complex collections can make use of [chained requests](https://www.youtube.com/watch?v=shYn3Ys3ygE), [test scripts](/docs/writing-scripts/test-scripts/), and [environment variables](/docs/sending-requests/managing-environments/) to validate API responses and functionality.

You can configure your monitors to run as frequently as you would like, depending on your [Postman plan](https://www.postman.com/pricing/). For paid plans, monitors can be scheduled to run as often as every five minutes. For free plans, monitors can be scheduled to run as often as every hour. You can even specify which region of the world you’d like to run the collection from (paid plans only).

Get alerted by email if a test fails or errors occur, or [set up integrations](/docs/integrations/intro-integrations/) to be notified over Slack and other channels. All results are recorded on the monitor’s dashboard, so you can view past results or inspect trends over time.

Learn how to [set up a collection-based monitor](/docs/monitoring-your-api/setting-up-monitor/).

### Use cases

Because they run Postman requests and scripts, collection-based monitors can be used to monitor APIs in a variety of ways. Here are some things you can do with collection-based monitors:

* **Check API health and performance** - Ensure the API is up and running in production and other environments.
* **Validate API response structure and data** - Ensure the API is functioning according to specifications.
* **Test complex, multi-step workflows** - Ensure that critical API flows as well as edge cases are working as expected.
* **Continuously conduct user acceptance, smoke, and regression tests** - Proactively identify issues so you can address them before they affect API consumers.
* **Run tests in multiple environments and regions** - Ensure your APIs are working everywhere. (Running monitors in multiple regions requires a paid Postman plan.)
* **Monitor the security of your endpoints** - Continuously test APIs for known security vulnerabilities.
* **Visualize results on the monitor dashboard** - Get better visibility into API performance over time and identify trends.

> For more examples of Postman Monitors in action, visit the [Postman API Monitoring Examples public workspace](https://www.postman.com/postman/workspace/postman-api-monitoring-examples/overview) to find example collections for some common monitoring use cases. You can collaborate on the collections in the workspace by [creating a fork](/docs/collaborating-in-postman/version-control-for-collections/#creating-a-fork), or modify the collections for your team's use by [exporting and importing them into your team workspace](/docs/getting-started/importing-and-exporting-data/#exporting-collections).

## Next steps

Learn how to [set up a new collection-based monitor](/docs/monitoring-your-api/setting-up-monitor/) or [start monitoring uptime for an API endpoint](/docs/monitoring-your-api/uptime-monitors/).
