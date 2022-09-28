---
title: "Scheduling collection runs"
order: 56.1
updated: 2021-02-16
page_id: "scheduling_collection_runs"
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

You can create schedules to [run collections](/docs/running-collections/intro-to-collection-runs/) at specified times. You can review, edit, and delete the schedules you create. You can also pause and resume schedules.

Schedules share permissions with collections. For example, if you have permissions to edit a collection, you'll be able to edit that collection's schedules.

If you import or export a collection, its schedules do not import/export.

If you delete a collection, its schedules are deleted also.

Scheduled collection runs are limited to personal, private, and team workspaces.

Locally hosted APIs can't be tested as these are run on Postman cloud. Scheduled runs are made on the Postman cloud and its usage is limited by your Postman account.

Scheduled collection runs are not included in workspace history.

Run order can't be customized for scheduled runs in the cloud.

1. Select **Collections** in the sidebar and select the collection you want to run.

1. On the Overview tab, select <img alt="Runner icon" src="https://assets.postman.com/postman-docs/icon-runner-v9.jpg#icon" width="16px"> **Run**.

1. On the Collection Runner, select **Schedule runs**.

1. Enter the following:
    * The schedule's name
    * The schedule's frequency
    * An environment associated with the collection (optional)
    * The number of iterations you want the schedule to run
    * A data file (`JSON` or `CSV`). Data files can be used to test multiple variatioons of your API behavior.
    * Notification recipients. Recipients will be notified about test failures and errors in the runs.
    * Advanced settings
      * Retry if run fails
      * Set request timeout
      * Set delay between requests
      * Follow redirects
      * Enable SSL validation

1. Select the `Schedule Run` button.
