---
title: "Scheduling collection runs with monitors"
updated: 2022-10-19
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

You can automate [collection runs](/docs/running-collections/intro-to-collection-runs/) using [monitors](/docs/monitoring-your-api/intro-monitors/) to schedule runs and receive reports on your request test results.

> You can also schedule collection runs with the [**Collection Runner**](/docs/running-collections/scheduling-collection-runs/). Monitors are typically used to schedule runs when you want to set up alerts like triggering on-call upon failure. Users typically choose the Collection Runner to schedule runs for all other use cases.

1. To add or access monitors for a particular collection, select __Monitors__ in the sidebar.

    <img alt="Monitors v10" src="https://assets.postman.com/postman-docs/v10/create-a-monitor-v10.jpg" height="341px"/>

    Any monitors already attached to your collection will appear. Select __Create a monitor__ to add one (or __+ Create a new Monitor__ if you already have one on the collection).

    You can also add a monitor by selecting a collection first. Select the collection you want to add a monitor to, then select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> > __Monitor collection__.

1. Enter the following:
    * Monitor name
    * Collection
    * Environment (optional)
    * Data file (optional)
    * Run this monitor (schedule)
    * Regions
    * Email addresses for failure and error notifications
    * Retry if run fails
    * Set request timeout
    * Set delay between requests
    * Follow redirects
    * Enable SSL validation

1. Select __Create Monitor__ and your monitor will run on the schedule you entered.

    [![Add new monitor to collection](https://assets.postman.com/postman-docs/v10/create-new-monitor-overview-1-v10.jpg)](https://assets.postman.com/postman-docs/v10/create-new-monitor-overview-1-v10.jpg)

    Your new monitor will appear in the monitor overview. You can open the monitor overview tab to [view your monitor results](/docs/monitoring-your-api/viewing-monitor-results/) at any time.

    <img alt ="New monitor created" src="https://assets.postman.com/postman-docs/v10/new-monitor-created-v10.jpg" height ="338px"/>
