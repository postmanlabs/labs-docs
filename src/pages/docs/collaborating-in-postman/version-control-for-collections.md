---
title: "Using version control"
order: 75
page_id: "version_control_for_collections"
warning: false
updated: 2022-02-15
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Grouping requests in Collections"
    url: "/docs/sending-requests/intro-to-collections/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Version Control for Collections | Postman Level Up"
    url: "https://www.youtube.com/watch?v=QKxukXJWRPI&list=PLM-7VG-sgbtC5tNXxd28cmePSa9BYwqeU&index=7"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Streamline the API Development Lifecycle with Postman Version Control"
    url: "https://blog.postman.com/streamline-api-development-lifecycle-with-postman-version-control/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Versioning APIs"
    url: "/docs/designing-and-developing-your-api/versioning-an-api/"
---

You can use version control with your Postman Collections by forking and merging and utilizing a standard pull request process. Version control allows you to collaborate with teammates by working on different forks of the same collection, updating forks from the parent collection, and merging changes when you're ready. You can tag collaborators to review pull requests and resolve conflicts to manage collection versions.

> Version control for collections is different than  API versioning. For information on managing multiple versions of APIs, see [Versioning APIs](/docs/designing-and-developing-your-api/versioning-an-api/).

* [Forking Postman elements](#forking-postman-elements)
    * [Forking a collection](#forking-a-collection)
    * [Forking an environment](#forking-an-environment)
    * [Viewing fork information](#viewing-fork-information)
* [Creating pull requests](#creating-pull-requests)
    * [Pull request settings](#pull-request-settings)
    * [Creating public PRs](#creating-public-prs)
    * [Watching a pull request](#watching-a-pull-request)
* [Approving changes](#approving-changes)
* [Merging changes](#merging-changes)
* [Pulling updates](#pulling-updates)
* [Reviewing pull requests](#reviewing-pull-requests)
* [Resolving conflicts](#resolving-conflicts)

## Forking Postman elements

You can fork Postman collections and environments. <!-- TODO: flesh this out a bit and how it relates to version control -->

### Forking a collection

> To fork a collection within a public workspace, you must enable your public profile in your [profile settings](https://go.postman.co/settings/me). For more information on making your profile public, see [Managing your account](/docs/getting-started/postman-account/#making-your-profile-public).

When you fork a Postman collection, you create a copy of it in a different workspace. To fork a collection:

1. Select **Collections** in the left sidebar.
1. Select the three dots <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> next to the collection name.
1. Select **Create a fork**.


    <img src="https://assets.postman.com/postman-docs/collection-create-a-fork-v9.1.jpg" alt="Create fork selected in menu" width="300px"/>

    > You can also fork a collection by selecting **Fork** on the collection overview tab.

1. Enter a label for your fork, and select a workspace to save it to.
1. Select **Fork Collection**.

    <img src="https://assets.postman.com/postman-docs/fork-collection-v9.1.jpg" alt="Create fork tab" width="400px"/>

Your fork will be created in the selected workspace.

If there are any [mocks](/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/) or [monitors](/docs/monitoring-your-api/intro-monitors/) associated with a collection, they will not be available with the forked collection. You will need to create mocks and monitors specifically for the fork if you need them.

> If you are not a member of a public workspace, you will not be able to send a request from a collection within the workspace. To send requests or make changes to a collection, fork the collection into a personal workspace or a team workspace that you belong to, and then make changes. Before forking the collection, you must be signed in to Postman.

### Forking an environment

To fork an environment in Postman:

1. Select **Environments** in the left sidebar.
1. Select the three dots <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> next to the environment name.
1. Select **Create a fork**.

    <img src="https://assets.postman.com/postman-docs/environment-create-a-fork-v9.1.jpg" alt="Create an Environment Fork" width="300px"/>

    > You can also fork an environment by selecting **Fork** on the environment overview tab.

1. Enter a label for your fork, and select a workspace to save it to.
1. Select **Fork Environment**.

    <img src="https://assets.postman.com/postman-docs/fork-environment-v9.1.jpg" alt="Fork environment tab" width="400px"/>

Your forked environment will be created in the selected workspace. You will be able to view forked environments in **Environments** as well as under the environment dropdown on the right side of Postman.

<img alt="Environment dropdown for forked environments" src="https://assets.postman.com/postman-docs/environment-dropdown-view-v9.12.jpg" height="200px"/>

### Viewing fork information

Fork information provides details about forks and the users who have created them. You will be able to identify the users who are actively consuming and contributing to your APIs.

To see the list of users who have forked a collection or an environment:

1. Select the number next to the fork icon <img alt="Fork icon" src="https://assets.postman.com/postman-docs/icon-fork.jpg" width="14px" style="vertical-align:middle;margin-bottom:5px"> to reveal the list of users who have active forks.

    <img alt="View the fork information count" src="https://assets.postman.com/postman-docs/fork-information-count-v9.12.jpg" width="400px"/>

To see the list of forks for a collection:

1. Select the fork icon <img alt="Fork icon" src="https://assets.postman.com/postman-docs/icon-fork.jpg" width="14px" style="vertical-align:middle;margin-bottom:5px"> from the context menu.
1. Select the fork name under **Forks**.
1. You can also select the user's avatar under **Forks** to view the user's public profile.

    <img alt="View the list of forks" src="https://assets.postman.com/postman-docs/fork-information-list-v9.12.jpg" width="350px"/>

## Creating pull requests

> Pull requests are not available for environments.

When you fork a collection, you can make changes to it. When you have made the changes that you want, you can create a _pull request_. Creating a pull request means that you want to merge the changes you made in the fork of the collection (the source) into the parent collection (the destination), requesting that reviewers look at your changes and decide to merge them.

1. Select the collection in the **Collections** sidebar.
1. Select the three dots <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> next to the collection name.
1. Select **Create pull request**.

    <img alt="Create Pull Request" src="https://assets.postman.com/postman-docs/create-pull-request.jpg" width="250px"/>

1. Select **Changes** to review the content changes that will be included in the pull request.

    ![Pull Request Changes](https://assets.postman.com/postman-docs/pull-request-changes.jpg)

    * If the parent collection has any changes since you last updated your fork, you can [pull those changes](#pulling-updates) before merging.

    * If there are any conflicts, they will be highlighted so that you can [resolve them](#resolving-conflicts).

1. Select **Overview**.
1. Enter a title and description for your pull request, and select up to 50 reviewers from the dropdown list. Reviewers must have edit access to the collection in order to merge your changes.
1. Select **Create Pull Request**.

    <img alt="Create Pull Request" src="https://assets.postman.com/postman-docs/pull-request-overview.jpg" width="350px"/>

The reviewers you selected will be notified about your pull request. You will receive a notification if the reviewers comment on your pull request, approve your pull request, or merge the pull request. <!-- TODO: add links to other sections -->

### Pull request settings

Pull request settings are available on [Postman Professional and Enterprise plans](https://www.postman.com/pricing) in the __Manage Roles__ section of a collection.

<img alt="Collection Manage Roles" src="https://assets.postman.com/postman-docs/collection-manage-roles-v9.1.jpg" width="300px"/>

In Postman, select the collection in the __Collections__ sidebar and select <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px">. Select __Manage roles__, then select __Editor__ for the users you want to provide editor access to and **Update Roles**.

[![manage roles](https://assets.postman.com/postman-docs/manage-roles-collection-v9.1.jpg)](https://assets.postman.com/postman-docs/manage-roles-collection-v9.1.jpg)

You must have __Editor__ access on a collection to merge changes. If you have __Viewer__ access to a collection, you will see a warning icon while adding reviewers to a pull request.

<img alt="Reviewer permission" src="https://assets.postman.com/postman-docs/reviewer-permission-pull-request.jpg" width="400px"/>

Once you have created the pull request, you can assign merge checks before approving changes.

<img alt="Merge Check" src="https://assets.postman.com/postman-docs/manage-roles-collection-v9.1.jpg"/>

There are two different types of checks that you can enable for a pull request:

* __Approved once__ : You need at least one approval to merge the pull request.
* __Approved by a collection editor__ : You require the approval of a collection editor to merge the pull request.

If you do not have editor access to the collection, the option to __Merge__ will be disabled.

<img alt="Merge Disabled" src="https://assets.postman.com/postman-docs/view-merge-conditions.jpg" width="400px"/>

Select __View Merge Conditions__ to see the merge conditions to be met for the pull request.

<img alt="Merge Condition" src="https://assets.postman.com/postman-docs/merge-conditions.jpg" width="400px"/>

### Creating public PRs

To create a pull request on a public collection, you must fork the collection to a public workspace and you should have either viewer or editor access on the source collection.

The pull request author and users with viewer or editor access on the destination collection can do the following:

* Edit the metadata (update the title and description)
* Decline a pull request
* Approve or unapprove a pull request
* Merge a pull request
* View or add pull request comments

You can create a pull request on a fork (the _source_) into the parent (the _destination_). The parent collection resides in a public workspace whereas the forked collection is present in a team workspace. While creating a pull request, share the source collection to a public workspace so that the reviewers can access it while reviewing the pull request. Select the workspace and select __Create Pull Request__.

<img src="https://assets.postman.com/postman-docs/make-source-collection-public-v2.jpg" alt="Source Collection Public" width="400px"/>

Once you create the pull request, you will get a notification that it has been __Shared to public workspace__.

<img src="https://assets.postman.com/postman-docs/source-collection-shared-v2.jpg" alt="Source Collection Shared"/>

### Watching a pull request

The watch option allows you to receive an in-app notification when one of your team member belonging to the same workspace modifies the pull request. If you watch a pull request, you will be notified of actions such as adding a new comment, approving or unapproving, merging, editing or declining a pull request, and so on.

Once you've created the pull request, select __Watch__ to start watching the pull request.

![Pull request watching](https://assets.postman.com/postman-docs/watching-a-pull-request-v9.jpg)

Once you have enabled watch, you will be able to view and modify the conditions for which notifications will be triggered.

<img alt="Conditions for watch notifications" src="https://assets.postman.com/postman-docs/watching-conditions-notifications-v9.jpg" height="424px"/>

Select the bell icon <img alt="Changelog icon" src="https://assets.postman.com/postman-docs/icon-notification-bell-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> in the top right corner of Postman to view the notification. The popup will indicate further information about the change that was made to the pull request.

<img alt="Notification Pull Request Watching" src="https://assets.postman.com/postman-docs/pull-request-watch-notification-v8.jpg" width="500px"/>

> If you created the pull request and modified it from the same account, you will not receive any notifications for changes made.

## Approving changes

You can approve changes on a fork (the _source_) into the parent (the _destination_). Once the pull request is created, navigate to the collection in Postman and select the **Pull Requests** icon on the right panel.

<img src="https://assets.postman.com/postman-docs/status-pull-request-v2.jpg" alt="Status Pull Request"/>

If you're tagged as a reviewer on a pull request, you can go ahead and approve the pull request. Upon approval, you will see the status of the pull request as **Approved**.

<img src="https://assets.postman.com/postman-docs/approve-fork-v2.jpg" alt="Approve Fork"/>

## Merging changes

You can merge changes on a fork (the _source_) into the parent fork (the _destination_). It is recommended that you use the [pull request process](#creating-pull-requests) instead of merging straight away—which you can only do if you have edit access to the original collection. If you do not have permissions to edit the parent collection, you will need to [open a pull request](#creating-pull-requests) so that someone with edit access can merge your changes.

When you merge changes from a fork into its parent collection, you have a chance to review the "diff" first. Select __Merge changes__ on the fork in Postman.

Postman will display an overview of the changes you are attempting to merge.

![Merge Fork](https://assets.postman.com/postman-docs/merge-fork-collection-change-v2.jpg)

> If the parent collection has any changes since you last updated your fork, you can [pull those changes](#pulling-updates) before merging.

If there are no [conflicts](#resolving-conflicts) you can review the changes and select __Merge all changes__ when you are ready.

<img src="https://assets.postman.com/postman-docs/merge-fork-options.jpg" alt="Merge Fork Options" width="300px"/>

You can merge all changes from the fork into the parent, merge into the parent and update the fork, or merge in the parent and delete the fork. Make a selection and select __Merge__.

## Pulling updates

You can keep your forked collections up to date with any changes in the parent, for example if another team member has merged changes into the parent collection.

To compare your fork to its parent, choose __Merge changes__ in the forked collection in Postman.

<img src="https://assets.postman.com/postman-docs/collection-fork-merge-changes-v9.1.jpg" alt="Merge Fork" width="300px"/>

Postman will warn you before you attempt to merge a fork whose parent has changed since you last updated it. Select __Pull Changes__ to update your fork with the changes in the parent collection.

![Update Fork](https://assets.postman.com/postman-docs/merge-changes-screen-v2.jpg)

## Reviewing pull requests

If you're tagged as a reviewer on a pull request, you can view the changes, comment, and merge the forked collection into the parent (or decline the pull request) when you are ready.

You can see a list of pull request for any collection under the __Pull Requests__ tab on the right panel in Postman.

<img src="https://assets.postman.com/postman-docs/open-pull-request-list-v2.jpg" alt="Open Pull Request" width="350px"/>

Each pull request includes status, which will be `OPEN` for any that have not been merged or declined.

You can choose to __Edit__ or __Decline__ the pull request.

![Pull Request Options](https://assets.postman.com/postman-docs/edit-decline-pull-request-v2.jpg)

To view the differences between the fork (the _source_) and the parent fork (the _destination_), select __Changes__ tab.

![Diff Navigation](https://assets.postman.com/postman-docs/diff-navigation-v2.jpg)

The diff navigation view enables you to review the changes made to a collection effortlessly. The nested folder structure shows the requests present within the folders and improves navigation while working with forks and pull requests.

Once a pull request is merged, you cannot __edit__ or __decline__ it. You can check the merged pull request in the __Pull Requests__ panel.

<img src="https://assets.postman.com/postman-docs/pull-request-list-v2.jpg" alt="Merged PR" width="400px"/>

You can view the detail on any merged pull request by selecting it.

<img src="https://assets.postman.com/postman-docs/pull-request-details-v2.jpg" alt="Merge PR Detail" width="300px"/>

## Resolving conflicts

If you encounter conflicts when you attempt to merge a forked collection, you will need to decide how you want to resolve them before continuing. A conflict will occur when you are attempting to merge changes into a request, folder, or example that has changed since you updated your fork.

> Merge conflicts can involve changes in multiple workspaces.

<img src="https://assets.postman.com/postman-docs/conflicts-pull-changes-v2.jpg" alt="Pull Changes" width="450px"/>

The __Source__ will indicate the changes on your fork, with the __Destination__ representing the changes on the parent branch. Select __Use this__ next to the version you want to include when you merge. When conflicts are resolved, the __Pull changes__ button will be enabled and you can [pull updates](#pulling-updates).

## Next steps

You can also use [version control on APIs](/docs/designing-and-developing-your-api/versioning-an-api/) you design and build in Postman.
