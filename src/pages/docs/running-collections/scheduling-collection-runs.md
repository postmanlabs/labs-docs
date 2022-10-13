---
title: "Scheduling collection runs"
updated: 2021-02-16
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

Many Postman users run collections at specific times each day or week. For example, you may want to test your API's endpoints every week to observe availability, performance, or reliability. You can schedule collection runs using the Collection Runner. You can also schedule collection runs using [monitors](/docs/running-collections/scheduling-collection-runs-monitors/).

When you schedule a collection run with the Collection Runner, the scheduled run is added to the collection's **Runs** tab. You can view, pause, edit, and delete scheduled collection runs from the collection's **Runs** tab. These scheduled runs execute in the Postman Cloud.

<img alt="Runs tab v10" src="https://assets.postman.com/postman-docs/v10/scheduled-runs-v10.jpg"/>

> * Schedules share permissions with their collections. For example, if you have permissions to edit a collection, you'll you'll be able to edit that collection's schedules.
> * Scheduled collection runs support [custom run orders](/docs/running-collections/building-workflows/).
> * Only personal, private, and team workspaces support scheduling collection runs.
> * Scheduled runs are executed in the Postman Cloud. Use of the Postman Cloud is limited by your Postman account.
> * Scheduled collection runs are not included in a workspace's history.
> * If you import or export a collection, its schedules do not import or export with it. However, if you delete a collection, its schedules are deleted also.

## Contents

* [Scheduling a collection run](#scheduling-a-collection-run)
* [Viewing your scheduled run](#viewing-your-scheduled-run)
* [Manually running your scheduled run](#manually-running-your-scheduled-run)
* [Pausing or resuming a scheduled run](#pausing-or-resuming-a-scheduled-run)
* [Editing a scheduled run](#editing-a-scheduled-run)
* [Deleting a scheduled run](#deleting-a-scheduled-run)

<!-- * [Check usage for your run]()
TODO: Add this content. More info needed; awaiting response to question in review draft docs. -->

## Scheduling a collection run

1. Select **Collections** in the sidebar and select the collection you want to schedule.

1. On the Overview tab, select <img alt="Runner icon" src="https://assets.postman.com/postman-docs/icon-runner-v9.jpg#icon" width="16px"> **Run**.

    > You can also select <img alt="Runner icon" src="https://assets.postman.com/postman-docs/icon-runner-v9.jpg#icon" width="16px"> __Runner__ from the Postman footer and drag a collection from __Collections__ or __History__ in the sidebar.

1. On the Collection Runner, select **Schedule runs**.

    ![Schedule runs](https://assets.postman.com/postman-docs/v10/schedule-runs-1-v10.jpg)

1. Enter the following:
    * The schedule's name
    * The schedule's frequency
    * An environment associated with the collection (optional)
    * How many times you want the collection to run (iterations)
    * A `JSON` or `CSV` [data file](/docs/running-collections/working-with-data-files/) (optional)
    * Notification recipients (optional)
    * Advanced settings (optional)
      * Retry if run fails
      * Set request timeout
      * Set delay between requests
      * Follow redirects
      * Enable SSL validation

1. Select the **Schedule Run** button. The **Runs** page appears, where you can view and edit scheduled collection runs.

## Viewing your scheduled run

1. Select **Collections** in the sidebar and select the collection with the scheduled run you want to view.

1. Select the **Runs** tab.

    ![Scheduled runs tab v10](https://assets.postman.com/postman-docs/v10/scheduled-runs-tab-v10.jpg)

1. Select the **Scheduled runs** tab. A list of your scheduled runs appears.

1. Select **View** next to your scheduled run.

## Manually running your scheduled run

1. Select **Collections** in the sidebar and select the collection with the scheduled run you want to run.

1. Select the **Runs** tab.

    ![Scheduled runs tab v10](https://assets.postman.com/postman-docs/v10/scheduled-runs-tab-v10.jpg)

1. Select the **Scheduled runs** tab. A list of your scheduled runs appears.

1. Select **View** next to your scheduled run. The scheduled run's results appear.

1. Select the **Run** button.

## Pausing or resuming a scheduled run

1. Select **Collections** in the sidebar and select the collection with the scheduled run you want to pause or resume.

1. Select the **Runs** tab.

    ![Scheduled runs tab v10](https://assets.postman.com/postman-docs/v10/scheduled-runs-tab-v10.jpg)

1. Select the **Scheduled runs** tab. A list of scheduled runs appears.

1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the scheduled run you want to delete.

1. Select **Pause** or **Resume**. Paused runs appear under the **Paused** heading on the **Runs** tab.

## Editing a scheduled run

1. Select **Collections** in the sidebar and select the collection whose schedule you want to edit.

1. Select the **Runs** tab.

    ![Scheduled runs tab v10](https://assets.postman.com/postman-docs/v10/scheduled-runs-tab-v10.jpg)

1. Select the **Scheduled runs** tab. A list of scheduled runs appears.

1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the scheduled run you want to edit.

1. Select **Edit schedule.** The **Edit scheduled run** page appears. Here you can edit the same settings you entered when you scheduled the run.

1. Select **Save changes** when you're finished editing.

## Deleting a scheduled run

1. Select **Collections** in the sidebar and select the collection with the scheduled run you want to delete.

1. Select the **Runs** tab. A list of past and scheduled collection runs appears.

    ![Scheduled runs tab v10](https://assets.postman.com/postman-docs/v10/scheduled-runs-tab-v10.jpg)

1. Select the **Scheduled runs** tab. A list of scheduled runs appears.

1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the scheduled run you want to delete.

1. Select **Delete schedule**. A "Delete scheduled collection" window appears.

1. In the "Delete scheduled collection" window, select **Delete**.
