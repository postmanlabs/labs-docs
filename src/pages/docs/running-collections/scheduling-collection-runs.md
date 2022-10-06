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

Many Postman users run collections at specific times each day or week. For example, you may want to test your API's endpoints every week to observe availability, performance, or reliability. Prior to version 10, you could only [use monitors](/docs/running-collections/scheduling-collection-runs-monitors/) to automatically run collections at specific times. Now you can also schedule collection runs using the Collection Runner.

When you schedule a run using the Collection Runner, the schedule becomes a property of the collection. You can create, pause, edit, and delete scheduled collection runs.

Schedules share permissions with their collections. For example, if you have permissions to edit a collection, you'll you'll be able to edit that collection's schedules.

> * Only personal, private, and team workspaces support schedules.
> * Scheduled runs are processed on the Postman cloud. Use of the Postman cloud is limited by your Postman account.
> * Scheduled collection runs are not included in workspace history.
> * Run order can't be customized for scheduled runs in the cloud.
> * If you import or export a collection, its schedules do not import/export with it. However, if you delete a collection, its schedules are deleted also.

## Contents

* [Scheduling a collection run](#scheduling-a-collection-run)
* [Pausing or resuming a schedule](#pausing-or-resuming-a-schedule)
* [Editing a schedule](#editing-a-schedule)
* [Deleting a schedule](#deleting-a-schedule)

## Scheduling a collection run

1. Select **Collections** in the sidebar and select the collection you want to schedule.

1. On the Overview tab, select <img alt="Runner icon" src="https://assets.postman.com/postman-docs/icon-runner-v9.jpg#icon" width="16px"> **Run**.

    > You can also select <img alt="Runner icon" src="https://assets.postman.com/postman-docs/icon-runner-v9.jpg#icon" width="16px"> __Runner__ from the Postman footer and drag a collection from __Collections__ or __History__ in the sidebar.

1. On the Collection Runner, select **Schedule runs**.

    ![Schedule runs](https://assets.postman.com/postman-docs/schedule-runs-v10.jpg)

1. Enter the following:
    * The schedule's name
    * The schedule's frequency
    * An environment associated with the collection (optional)
    * How many times you want the collection to run (iterations)
    * A `JSON` or `CSV` data file (optional)
    * Notification recipients (optional)
    * Advanced settings (optional)
      * Retry if run fails
      * Set request timeout
      * Set delay between requests
      * Follow redirects
      * Enable SSL validation

1. Select the **Schedule Run** button. The **Runs** page appears, where you can view and edit past and scheduled collection runs.

## Pausing or resuming a schedule

1. Select **Collections** in the sidebar and select the collection with the scheduled run you want to pause or resume.

1. Select the **Runs** tab.
    ![Runs tab](https://assets.postman.com/postman-docs/runs-tab-v10.jpg)

1. Select the **Scheduled runs** tab. A list of scheduled runs appears.

1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the scheduled run you want to delete.

1. Select **Pause schedule** or **Resume**. Paused runs appear under the **Paused** heading on the **Runs** tab.

## Editing a schedule

1. Select **Collections** in the sidebar and select the collection whose schedule you want to edit.

1. Select the **Runs** tab.

1. Select the **Scheduled runs** tab. A list of scheduled runs appears.

1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the scheduled run you want to edit.

1. Select **Edit schedule.** The **Edit scheduled run** page appears. Here you can edit the same settings you entered when you scheduled the run.

1. Select **Save changes** when you're finished editing.

## Deleting a schedule

1. Select **Collections** in the sidebar and select the collection with the scheduled run you want to delete.

1. Select the **Runs** tab. A list of past and scheduled collection runs appears.

1. Select the **Scheduled runs** tab. A list of scheduled runs appears.

1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the scheduled run you want to delete.

1. Select **Delete schedule**.
