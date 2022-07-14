---
title: "Viewing workspace activity"
order: 79
updated: 2021-04-21
page_id: "changelog_and_restoring_collections"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Creating workspaces"
    url: "/docs/collaborating-in-postman/using-workspaces/creating-workspaces/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "Stay On Top of Your Evolving Collections with Postman’s New Changelog"
    url: "https://blog.postman.com/stay-on-top-of-evolving-collections-postman-new-changelog/"
  - type: link
    name: "How We Built Postman’s New Activity Feed System"
    url: "https://blog.postman.com/how-we-built-postman-activity-feed-system/"

warning: false
---

> **[Changelog is available on Postman Basic, Professional, and Enterprise plans.](https://www.postman.com/pricing/)**

Each Postman Collection has a changelog that covers create, update, transfer, and delete events. You can use the changelog to keep track of updates you and other collaborators make to your private and team collections. The changelog also enables you to roll back a collection and restore it to an earlier point in time.

## Contents

* Viewing changes to a [collection](#viewing-the-collection-changelog), [workspace](#viewing-workspace-activity), or [team](#viewing-team-activity)
* [Restoring collections](#restoring-collections)
* [Exporting team activity](#exporting-team-activity-to-other-platforms)
* [Next steps](#next-steps)

## Viewing the collection changelog

To review the changelog for a collection in Postman, open the collection and select the changelog icon <img alt="Changelog icon" src="https://assets.postman.com/postman-docs/icon-changelog-v9.jpg#icon" width="18px"> on the right.

The changelog provides a chronological list of collection activities. You can view the time and date changes occurred, the users who were involved, and what parts of the collection were affected.

<img alt="Collection changelog" src ="https://assets.postman.com/postman-docs/changelog-v9.16.jpg" width=400px/>

Postman groups changes made within several minutes of each other into sessions for readability. You can select a session in the changelog to review its changes individually.

Select **View changes** under an item to view the collection diff. If a diff is too large to view in the changelog, you can hover over the diff and select **View more** to open it in a new tab.

<img alt="Collection changelog view changes" src ="https://assets.postman.com/postman-docs/changelog-view-changes-view-more-v9.16.jpg" width=375px/>

## Viewing workspace activity

You can [access the activity feed in Postman](#accessing-the-activity-feed-from-postman). The activity feed will show information on who added or removed collections, environments, or entities from the workspace as well as members joining and leaving the workspace. You can [filter this information](#filtering-the-activity-feed) directly within the activity feed.

You can also [view who's active in your workspace](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#seeing-who-is-in-your-workspace).

### Accessing the activity feed from Postman

To access the activity feed in Postman, select the **Overview** tab. Go to the **Activity** section to learn about events that have occurred within the workspace.

[![Activity feed from postman](https://assets.postman.com/postman-docs/activity-feed-overview-v8.jpg)](https://assets.postman.com/postman-docs/activity-feed-overview-v8.jpg)

### Filtering the activity feed

Filtering the activity feed allows you to display the relevant information directly instead of having to scroll through the feed. You can choose to filter by [user](#filtering-by-user) or by [element](#filtering-by-element) (Workspace, API, Collection, Environment).

To reset your search, select **Clear filters** at the right of the activity feed. You can also refresh the results by selecting **Refresh** at the right of the activity feed.

#### Filtering by user

Filtering by user will only display the actions the specified user carried out.
To filter by user, select **User** at the top of the activity feed and select the user or users. You can search for a specific user by typing their name in the search field. Once you have selected the user, select **Apply**.

> The user list will only show the users that are part of the workspace, not all team members.

[![Activity filtering by user](https://assets.postman.com/postman-docs/filter-by-user.gif)](https://assets.postman.com/postman-docs/filter-by-user.gif)

#### Filtering by element

Filtering by element will only display the actions carried out on the selected element type. Available entities are `Workspace`, `API`, `Collection`, and `Environment`.
To filter by element, select **Entity** at the top of the activity feed and select the element or entities. You can search for a specific element by typing its name in the search field. Once you have selected the element, select **Apply**.

> You can access the changelog of a specific collection by selecting **View Changelog** next to actions on collections.

[![Activity filtering by element](https://assets.postman.com/postman-docs/filter-by-entity.gif)](https://assets.postman.com/postman-docs/filter-by-entity.gif)

## Viewing team activity

You can review your team's activity with a Postman Basic, Professional, or Enterprise account. To do so, select **Home** in the upper-left. You can view your team **Activity Feed** on the right.

## Restoring collections

You can use the [changelog](#viewing-the-collection-changelog) to restore a collection to an earlier point in time.

To restore a collection from the changelog:

1. Select a session to expand it.
2. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the change you'd like to restore your collection to, then select **Restore to this change**.

    <img alt="Restore from changelog" src="https://assets.postman.com/postman-docs/changelog-restore-v9.16.jpg" width="350px"/>

Restoring a collection from the changelog reverts it to the point immediately after your selected change occurred.

> If you'd like to restore a deleted collection, see [Recovering a deleted collection](/docs/sending-requests/intro-to-collections/#recovering-a-deleted-collection).

## Exporting team activity to other platforms

With a Postman Basic, Professional, or Enterprise account, you can pipe team activity feeds to external communication channels:

* [Slack integration](/docs/integrations/available-integrations/slack/)
* [Microsoft Teams integration](/docs/integrations/available-integrations/microsoft-teams/)

## Next steps

* For more on working with a team in Postman, read the [collaboration overview](/docs/collaborating-in-postman/working-with-your-team/collaboration-overview/).
* To learn how to invite input on your API projects, read [sharing your work](/docs/collaborating-in-postman/sharing/).
