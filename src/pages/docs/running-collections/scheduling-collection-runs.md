---
title: "Scheduling collection runs"
updated: 2022-10-19
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Using the Collection Runner"
    url: "/docs/running-collections/intro-to-collection-runs/"

warning: false

---

Many Postman users run collections at specific times each day or week. For example, you may want to run a collection that tests your API every day. You can use the Collection Runner to schedule collection runs to execute automatically at specified days and times.

> You can also schedule collection runs using [monitors](/docs/running-collections/scheduling-collection-runs-monitors/). Monitors are typically used to schedule runs when you want to set up alerts like triggering on-call upon failure. Users typically choose the Collection Runner to schedule runs for all other use cases.

When you schedule a collection run with the Collection Runner, the scheduled run is added to the collection's **Runs** tab. You can view, pause, edit, and delete scheduled collection runs from the collection's **Runs** tab.

<img alt="Runs tab v10" src="https://assets.postman.com/postman-docs/v10/scheduled-runs-tab-5-v10.jpg"/>

> * Scheduled runs execute in the [Postman Cloud](/docs/getting-started/syncing/).
> * Schedules share permissions with their collections. For example, if you have permissions to edit a collection, you'll be able to edit that collection's schedules.
> * Scheduled collection runs support [custom run orders](/docs/running-collections/building-workflows/).
> * Personal, private, and team workspaces support scheduling collection runs.
> * If you import or export a collection, its schedules don't import or export with it. However, if you delete a collection, its schedules are deleted also.
> * Scheduled collection runs have the same [usage limits as monitors](/docs/monitoring-your-api/monitor-usage/).

## Contents

* [Scheduling a collection run](#scheduling-a-collection-run)
* [Viewing your scheduled run](#viewing-your-scheduled-run)
* [Manually running your scheduled run](#manually-running-your-scheduled-run)
* [Pausing or resuming a scheduled run](#pausing-or-resuming-a-scheduled-run)
* [Editing a scheduled run](#editing-a-scheduled-run)
* [Deleting a scheduled run](#deleting-a-scheduled-run)

## Scheduling a collection run

1. Select **Collections** in the sidebar and select the collection you want to schedule.

1. On the Overview tab, select <img alt="Runner icon" src="https://assets.postman.com/postman-docs/icon-runner-v9.jpg#icon" width="16px"> **Run**.

    > You can also select <img alt="Runner icon" src="https://assets.postman.com/postman-docs/icon-runner-v9.jpg#icon" width="16px"> __Runner__ from the Postman footer and drag a collection from __Collections__ or __History__ in the sidebar.

1. On the Collection Runner, select **Schedule runs**.

    ![Schedule runs](https://assets.postman.com/postman-docs/v10/schedule-runs-3-v10.jpg)

1. Choose any configuration options:
    * The schedule's name
    * The run's frequency
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

1. By default, your requests run in the sequence they're listed in the collection. If you need to change the order of execution, select and drag a request to its new location in the order. You can also remove an individual request from the run by clearing the checkbox next to its name.

1. Select the **Schedule Run** button.

## Viewing your scheduled run

1. Select **Collections** in the sidebar and select the collection with the scheduled run you want to view.

1. Select the **Runs** tab.

    ![Scheduled runs tab v10](https://assets.postman.com/postman-docs/v10/scheduled-runs-tab-3-v10.jpg)

1. Select the **Scheduled runs** tab.

1. Hover over your scheduled run and Select **View**.

    ![Scheduled runs view results v10](https://assets.postman.com/postman-docs/v10/view-scheduled-run-results-2-v10.jpg)

1. Each column in the graph represents an individual run. Select a column to see test results and the console log for that run. For more information see [Viewing scheduled collection runs](/docs/running-collections/viewing-scheduled-collection-runs/).

## Manually running your scheduled run

When a scheduled run is triggered manually, it runs in the Postman Cloud.

1. Select **Collections** in the sidebar and select the collection with the scheduled run you want to run.

1. Select the **Runs** tab.

    ![Scheduled runs tab v10](https://assets.postman.com/postman-docs/v10/scheduled-runs-tab-3-v10.jpg)

1. Select the **Scheduled runs** tab.

1. Hover over your scheduled run and select **View**.

1. Select the **Run** button.

## Pausing or resuming a scheduled run

1. Select **Collections** in the sidebar and select the collection with the scheduled run you want to pause or resume.

1. Select the **Runs** tab.

    ![Scheduled runs tab v10](https://assets.postman.com/postman-docs/v10/scheduled-runs-tab-3-v10.jpg)

1. Select the **Scheduled runs** tab.

1. Hover over the scheduled run you want to pause or resume and select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px">.

1. Select **Pause** or **Resume**. Paused runs appear under the **Paused** heading on the **Runs** tab.

## Editing a scheduled run

1. Select **Collections** in the sidebar and select the collection whose schedule you want to edit.

1. Select the **Runs** tab.

    ![Scheduled runs tab v10](https://assets.postman.com/postman-docs/v10/scheduled-runs-tab-3-v10.jpg)

1. Select the **Scheduled runs** tab.

1. Hover over the scheduled run you want to edit and select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px">.

1. Select **Edit schedule** and edit the scheduled run's settings.

1. Select **Save changes** when you're finished editing.

## Deleting a scheduled run

1. Select **Collections** in the sidebar and select the collection with the scheduled run you want to delete.

1. Select the **Runs** tab.

    ![Scheduled runs tab v10](https://assets.postman.com/postman-docs/v10/scheduled-runs-tab-3-v10.jpg)

1. Select the **Scheduled runs** tab.

1. Hover over the scheduled run you want to delete and select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px">.

1. Select **Delete schedule**.

1. Select **Delete** to confirm.
