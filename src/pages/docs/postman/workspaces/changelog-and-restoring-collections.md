---
title: "Viewing changelogs and restoring collections"
order: 99
page_id: "changelog_and_restoring_collections"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Intro to collections"
    url: "/docs/postman/collections/intro-to-collections/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "SynapseFi"
    url: "https://www.getpostman.com/case-studies/SynapseFI.pdf?_ga=2.240920773.754547870.1571851340-1454169035.1570491567"
  - type: link
    name: "Clarifai"
    url: "https://www.getpostman.com/case-studies/Clarifai.pdf?_ga=2.240920773.754547870.1571851340-1454169035.1570491567"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "New, More Useful Activity Feed in Postman Collections"
    url: "https://blog.getpostman.com/2016/10/27/new-more-useful-activity-feed-in-postman-collections/?_ga=2.125447628.754547870.1571851340-1454169035.1570491567"
  - type: section
    name: "Associated Topics"
  - type: link
    name: "Intro to Integrations"
    url: "/docs/postman-pro/integrations/intro-integrations/"

warning: false
---

Your Postman collections display a changelog for reviewing create, update, and delete events. You can use the changelog to keep track of any updates you and your collaborators make to your private and team collections. The changelog also lets you rollback a collection and restore it to any previous point in time. Postman also tracks activity within teams and accounts.

## Contents

* Viewing changes to a [collection](#viewing-the-collection-changelog), [workspace](#viewing-workspace-activity), [team](#viewing-team-activity), or [user account](#viewing-user-activity).
* [Restoring collections](#restoring-collections)
* [Exporting team activity](#exporting-team-activity-to-other-platforms)
* [Next steps](#next-steps)

## Viewing the collection changelog

To review the changelog for a collection in Postman, select the __Collections__ tab and click the arrow (&#9656;) next to the relevant collection to view its details. Select the __Changelog__ tab to see a chronological list of collection activities.

The changelog indicates the date of each update, the user who carried it out, what type of update they performed, and the time the change occurred. The changelog collates consecutive updates on the same session to the same entity for readability.

![Collection Changelog](https://user-images.githubusercontent.com/6666370/68310435-ea613900-00a7-11ea-8ceb-af601ec5d502.png)

With a Postman Pro or Enterprise account, you can see generated diffs detailing changes to a collection.

![Changelog diffs](https://user-images.githubusercontent.com/6666370/68315651-f9e48000-00af-11ea-8e94-1d4c863c4442.png)

You can alternatively review a collection changelog from the [Workspaces dashboard](https://app.getpostman.com/dashboard) by selecting a workspace and collection.

## Viewing workspace activity

You can review an activity feed for a workspace in the Postman app. In the status bar at the bottom, toggle to the __Browse__ view. Select the __Activity__ tab to see events that have occurred within the workspace.

![Workspace Activity](https://user-images.githubusercontent.com/6666370/68311079-f0a3e500-00a8-11ea-9042-4d504626312e.png)

You can also review the activity for a workspace from the [Workspaces dashboard](https://app.getpostman.com/dashboard) in the Postman web app.

## Viewing team activity

You can review the activity for a team with a Postman Pro or Enterprise account. In the [Postman web app](https://app.getpostman.com), use the __Workspaces__ dropdown to select your team, then open the __Activity__ tab to view the events.

## Viewing user activity

You can review the activity for your own account in the [Postman web app](https://app.getpostman.com). Click your avatar in the top right, and select __Profile__—the __Activity__ tab will list your events.

## Restoring collections

With a Postman Pro or Enterprise account, you can use the changelog to restore a collection to a previous point in time. Click __Restore__ under a change to revert the collection to the point immediately _after_ the change was applied. The changelog will update and Postman will display a confirmation message indicating the time the collection has been restored to.

![Restore from Changelog](https://user-images.githubusercontent.com/6666370/68316570-93606180-00b1-11ea-83f3-e3e02092c660.png)

You may see a warning on any request tabs you have open that are affected by reverting the collection, for example indicating a conflict or deletion.

![Revert conflict](https://user-images.githubusercontent.com/6666370/68321200-3072c880-00b9-11ea-98ba-d42e6aaccbe8.png)

Postman will prompt you to resolve any conflicts that may cause you to lose unsaved data.

## Exporting team activity to other platforms

With a Postman Pro or Enterprise account, you can pipe team activity feeds to external communication channels:

* [Slack integration](/docs/postman-pro/integrations/slack/)
* [HipChat integration](/docs/postman-pro/integrations/hipchat/)
* [Microsoft Teams integration](/docs/postman-pro/integrations/microsoft-teams/)  

## Next steps

For more on working with a team in Postman, see [collaboration](/docs/postman/launching-postman/collaboration/). To learn how to invite input on your API projects, see [sharing collections](/docs/postman/collections/sharing-collections/).
