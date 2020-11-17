---
title: "Using version control"
order: 75
page_id: "version_control_for_collections"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Grouping requests in Collections"
    url: "/docs/sending-requests/intro-to-collections/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Versioning APIs"
    url: "/docs/collaborating-in-postman/versioning-an-api/"
---

You can use version control with your Postman collections, forking and merging using a standard pull request process. Version control allows you to collaborate with teammates, working on different forks of the same collection, updating forks from the parent collection, and merging changes when you're ready. You can tag collaborators to review pull requests and resolve conflicts to manage collection versions.

* [Forking a collection](#forking-a-collection)
    * [Fork information](#fork-information)
* [Creating pull requests](#creating-pull-requests)
* [Approving changes](#approving-changes)
* [Merging changes](#merging-changes)
* [Pulling updates](#pulling-updates)
* [Reviewing pull requests](#reviewing-pull-requests)
* [Resolving conflicts](#resolving-conflicts)

## Forking a collection

To fork a collection in Postman, select the collection in the __Collections__ sidebar and click the __View more actions__ (__...__) and select __Create a Fork__. To provide a uniform forking experience, you can create a fork in a public workspace in three steps - login to Postman, fill up fork details and enable your public profile.

<img src="https://assets.postman.com/postman-docs/create-a-fork-v2.jpg" alt="Create Fork" width="250px"/>

Enter a label for your fork, and select a workspace to save it to. Click __Fork collection__.

<img src="https://assets.postman.com/postman-docs/forked-collection-v2.jpg" alt="Fork Label"/>

Your fork will be created in the selected workspace.

> If there are any mocks or monitors associated with a collection, they will not be available with the forked collection. You will need to create mocks and monitors specifically for the fork if you need them.

### Fork information

To fork a collection within a public workspace, you must enable your public profile. Navigate to __Edit Profile__ and enable __Make Profile Public__. Your username should consist of only only alphanumeric characters and hyphens. If you do not have a public profile, the screen shows a dialog box — once you have entered a valid username, click __Enable public profile__.

<img src="https://assets.postman.com/postman-docs/enable-public-profile.jpg" alt="Enable public profile" width="350px"/>

Fork information provides details about forks and the users who have created them. You will be able to identify the users who are actively consuming and contributing to your APIs. Click the fork count to reveal the list of users who have created active forks.

[![Fork Information](https://assets.postman.com/postman-docs/fork-information-count.jpg)](https://assets.postman.com/postman-docs/fork-information-count.jpg)

> You can click on a user under __Forked by__ to view their public profile.

## Creating pull requests

You can merge changes from a collection fork (the _source_) into the parent (the _destination_) using a pull request process, by tagging reviewers who can comment on your changes and decide to merge them. In Postman, open the menu for a collection and select __Create Pull Request__.

<img alt="Create Pull Request" src="https://assets.postman.com/postman-docs/create-pull-request-v2.jpg" width="250px"/>

You can overview the source, destination, and changes that will be included in the pull request.

![Pull Request Changes](https://assets.postman.com/postman-docs/pull-request-changes-v2.jpg)

> If the parent collection has any changes since you last updated your fork, you can [pull those changes](#pulling-updates) before merging.

If there are any conflicts, they will be highlighted so that you can [resolve them](#resolving-conflicts).

If your pull request has no conflicts, you can go ahead and open it for review. Enter a title and description, and select up to three reviewers from the dropdown list. Reviewers will need edit access to the collection in order to merge your changes. Click __Create Pull Request__.

<img alt="Create Pull Request" src="https://assets.postman.com/postman-docs/pull-request-overview-v2.jpg" width="850px"/>

Reviewers can [comment on your pull request or decide to merge](#reviewing-pull-requests) your changes into the parent collection.

## Approving changes

You can approve changes on a fork (the _source_) into the parent (the _destination_). Once the pull request is created, navigate to the collection in Postman and click on the **Pull Requests** icon on the right panel.

<img src="https://assets.postman.com/postman-docs/status-pull-request-v2.jpg" alt="Status Pull Request" width="850px"/>

If you're tagged as a reviewer on a pull request, you can go ahead and approve the pull request. Upon approval, you will see the status of the pull request as **Approved**.

<img src="https://assets.postman.com/postman-docs/approve-fork-v2.jpg" alt="Approve Fork" width="850px"/>

## Merging changes

You can merge changes on a fork (the _source_) into the parent fork (the _destination_). It is recommended that you use the [pull request process](#creating-pull-requests) instead of merging straight away—which you can only do if you have edit access to the original collection. If you do not have permissions to edit the parent collection, you will need to [open a pull request](#creating-pull-requests) so that someone with edit access can merge your changes.

When you merge changes from a fork into its parent collection, you have a chance to review the "diff" first. Select __Merge changes__ on the fork in Postman.

Postman will display an overview of the changes you are attempting to merge.

![Merge Fork](https://assets.postman.com/postman-docs/merge-fork-collection-change.jpg)

> If the parent collection has any changes since you last updated your fork, you can [pull those changes](#pulling-updates) before merging.

If there are no [conflicts](#resolving-conflicts) you can review the changes and click __Merge all changes__ when you are ready.

<img src="https://assets.postman.com/postman-docs/merge-fork-options.jpg" alt="Merge Fork Options" width="300px"/>

You can merge all changes from the fork into the parent, merge into the parent and update the fork, or merge in the parent and delete the fork. Make a selection and click __Merge__.

## Pulling updates

You can keep your forked collections up to date with any changes in the parent, for example if another team member has merged changes into the parent collection.

To compare your fork to its parent, choose __Merge changes__ in the forked collection in Postman.

<img src="https://assets.postman.com/postman-docs/merge-changes-v2.jpg" alt="Merge Fork" width="250px"/>

Postman will warn you before you attempt to merge a fork whose parent has changed since you last updated it. Click __Pull Changes__ to update your fork with the changes in the parent collection.

![Update Fork](https://assets.postman.com/postman-docs/merge-changes-screen.jpg)

## Reviewing pull requests

If you're tagged as a reviewer on a pull request, you can view the changes, comment, and merge the forked collection into the parent (or decline the pull request) when you are ready.

You can see a list of pull request for any collection under the __Pull Requests__ tab on the right panel in Postman.

![Open Pull Request](https://assets.postman.com/postman-docs/open-pull-request-list-v2.jpg)

Each pull request includes status, which will be `OPEN` for any that have not been merged or declined.

You can choose to __Edit__ or __Decline__ the pull request.

![Pull Request Options](https://assets.postman.com/postman-docs/edit-decline-pull-request-v2.jpg)

Once a pull request is merged, you cannot __edit__ or __decline__ it. You can check the merged pull request in the __Pull Requests__ panel.

![Merged PR](https://assets.postman.com/postman-docs/pull-request-list-v2.jpg)

You can view the detail on any merged pull request by selecting it.

![Merged PR Detail](https://assets.postman.com/postman-docs/pull-request-details.jpg)

## Resolving conflicts

If you encounter conflicts when you attempt to merge a forked collection, you will need to decide how you want to resolve them before continuing. A conflict will occur when you are attempting to merge changes into a request, folder, or example that has changed since you updated your fork.

> Merge conflicts can involve changes in multiple workspaces.

![Merge Conflicts](https://assets.postman.com/postman-docs/merge-conflicts.jpg)

The __Source__ will indicate the changes on your fork, with the __Destination__ representing the changes on the parent branch. Click __Use this__ next to the version you want to include when you merge. When conflicts are resolved, the __Merge all changes__ or __Approve and Merge__ button will be enabled and you can [merge your fork](#merging-changes).

## Next steps

You can also use [version control on APIs](/docs/collaborating-in-postman/versioning-an-api/) you design and build in Postman.
