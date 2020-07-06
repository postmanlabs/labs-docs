---
title: "Scheduling runs with monitors"
order: 56.1
page_id: "scheduling_collection_runs_with_monitors"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Using the Collection Runner"
    url: "/docs/running-collections/intro-to-collection-runs/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "From manual to automated testing: The roadblocks and the journey"
    url: "https://medium.com/better-practices/from-manual-to-automated-testing-the-roadblocks-and-the-journey-6333dfacc5ae"

warning: false
---

You can automate [collection runs](/docs/running-collections/intro-to-collection-runs/) using [monitors](/docs/designing-and-developing-your-api/monitoring-your-api/intro-monitors/) to schedule runs and receive reports on your request test results.

To add or access monitors for a particular collection, open a collection in the left sidebar of Postman, and select the __Monitors__ tab,

[![Monitors for collection](https://assets.postman.com/postman-docs/collections-monitor-tab.jpg)](https://assets.postman.com/postman-docs/collections-monitor-tab.jpg)

Any monitors already attached to your collection will appear. Click __Create a monitor__ to add one (or __+ Add monitor__ if you already have one on the collection).

[![Add new monitor to collection](https://assets.postman.com/postman-docs/add-new-monitor-collection.jpg)](https://assets.postman.com/postman-docs/add-new-monitor-collection.jpg)

Give your monitor a name, choose a version tag, and an optional environment your scheduled collection runs should reference. Enter the frequency you want your monitor to run on, and select a region. Click __Create__ and your monitor will run on the schedule you entered.

[![New monitor created](https://assets.postman.com/postman-docs/monitor-created-detail.jpg)](https://assets.postman.com/postman-docs/monitor-created-detail.jpg)

You can open the [web dashboard](https://go.postman.co) to [view your monitor results](/docs/designing-and-developing-your-api/monitoring-your-api/viewing-monitor-results/) at any time. Your new monitor will appear in the collection overview.

[![New monitor in collection](https://assets.postman.com/postman-docs/new-monitor-in-collection.jpg)](https://assets.postman.com/postman-docs/new-monitor-in-collection.jpg)

## Next steps

Check out the [monitoring](/docs/designing-and-developing-your-api/monitoring-your-api/intro-monitors/) section for more on how you can leverage monitors in your API development pipeline.
