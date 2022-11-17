---
title: "Creating pull requests"
order: 75
page_id: "version_control"
warning: false
updated: 2022-11-08
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
    name: "Blog Posts"
  - type: link
    name: "Introducing Environment Forking and Pull Requests"
    url: "https://blog.postman.com/introducing-environment-forking-and-pull-requests/"
  - type: link
    name: "Streamline the API Development Lifecycle with Postman Version Control"
    url: "https://blog.postman.com/streamline-api-development-lifecycle-with-postman-version-control/"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Youi"
    url: "https://www.postman.com/case-studies/youi/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Versioning APIs"
    url: "/docs/designing-and-developing-your-api/versioning-an-api/"
---

When you have made the changes that you want to a forked collection or environment, you can create a _pull request_. Creating a pull request means that you want to merge the changes you made in the forked element (the _source_) into the parent element (the _destination_). As part of the pull request process, you will request that reviewers look at your changes. Reviewers can make comments on your changes and will decide whether to approve them and merge them into the parent element.

## Contents

* [Creating pull requests](#creating-pull-requests)
* [Creating public pull requests](#creating-public-pull-requests)
* [Pull request settings](#pull-request-settings)

## Creating pull requests

> The pull request process isn't available for flows.

1. Hover over the element in the sidebar.
1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to its name.

1. Select **Create pull request**.

    <img alt="Create Pull Request" src="https://assets.postman.com/postman-docs/v10/create-pull-request-v10.jpg" width="300px"/>

1. Select **Changes** to review the changes in the pull request.

    ![Pull Request Changes](https://assets.postman.com/postman-docs/v10/pull-request-changes-v10.jpg)

    * If the parent element has any changes since you last updated your fork, you can [pull those changes](/docs/collaborating-in-postman/using-version-control/forking-entities/#pulling-updates-from-a-parent-element) into your fork before merging.

    * If there are any conflicts between the fork and the parent element, Postman highlights them so that you can [resolve them](/docs/collaborating-in-postman/using-version-control/reviewing-pull-requests/#resolving-conflicts-from-a-pull-request).

1. Select **Overview**.
1. Enter a title and description for your pull request, and select up to 50 reviewers from the dropdown list. Reviewers must have [Editor access](/docs/collaborating-in-postman/roles-and-permissions/#element-based-roles) on the element to merge your changes.
1. Select **Create Pull Request**.

    <img alt="Create Pull Request" src="https://assets.postman.com/postman-docs/v10/pull-request-overview-v10.jpg" width="350px"/>

Postman notifies the reviewers you selected about your pull request. You will receive a notification if the reviewers [comment on](/docs/collaborating-in-postman/using-version-control/reviewing-pull-requests/#adding-comments), [approve](/docs/collaborating-in-postman/using-version-control/reviewing-pull-requests/#approving-a-pull-request), or [merge](/docs/collaborating-in-postman/using-version-control/reviewing-pull-requests/#merging-changes-from-a-pull-request) the pull request.

> A reviewer must have an Editor role for the element to merge changes. If you add a user who doesn't have Editor access as a reviewer, there will be a warning icon next to their name.
>
> <img alt="Reviewer permission" src="https://assets.postman.com/postman-docs/pull-request-reviewer-permission.jpg" width="350px"/>

## Creating public pull requests

To create a pull request on a public collection or environment, you must fork the parent element into a public workspace so that the users you ask to [review it](/docs/collaborating-in-postman/using-version-control/reviewing-pull-requests/) have access to it.

To create a public pull request, do the following:

1. Begin the pull request process described in [Creating pull requests](#creating-pull-requests). A note tells you to move the source element to a public workspace.
1. Select **Move Collection** or **Move Environment**.

    <img src="https://assets.postman.com/postman-docs/v10/make-source-collection-public-v10.jpg" alt="Make the source collection public"/>

1. Select the public workspace where you want to move the fork.
1. Select **Move Collection** or **Move Environment**.

    <img src="https://assets.postman.com/postman-docs/v10/move-source-collection-v10.jpg" alt="Move the source collection" width="400px"/>

1. After you move the fork to a public workspace, proceed with the workflow in [Creating pull requests](#creating-pull-requests).

Once you create the pull request, you will get a notification that it was **Shared to public workspace**.

## Pull request settings

> Pull request settings are available on [Postman Professional and Enterprise plans](https://www.postman.com/pricing).

Pull request settings let you manage permissions for reviewers and assign merge checks.

### Manage reviewer permissions

1. Hover over the element in the sidebar.
1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to its name.
1. Select **Manage roles**.

    <img alt="Collection Manage Roles" src="https://assets.postman.com/postman-docs/collection-manage-roles-v9.1.jpg" width="300px"/>

1. Select **Editor** for the users you want to give Editor access to.
1. Select **Update Roles**.

    [![manage roles](https://assets.postman.com/postman-docs/manage-roles-collection-v9.12.jpg)](https://assets.postman.com/postman-docs/manage-roles-collection-v9.12.jpg)

### Assign merge checks

For collections, you can assign merge checks before approving changes.

There are two different types of checks that you can enable for a pull request:

* **Approved once** - You need at least one approval to merge the pull request.
* **Approved by a collection editor** - You need the approval of a user who has [Editor access for the collection](/docs/collaborating-in-postman/roles-and-permissions/#collection-roles) to merge the pull request.

To set merge checks for pull requests on a specific collection, do the following:

1. Hover over the collection in the sidebar.
1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to its name.
1. Select **Manage roles**.
1. Select the merge checks that you want to set for the collection.

<img alt="Merge Check" src="https://assets.postman.com/postman-docs/manage-roles-set-merge-checks.jpg" width="800px"/>

If the merge conditions for a pull request aren't met, the option to **Merge** it into the parent collection will be inactive.

<img alt="Merge option isn't active" src="https://assets.postman.com/postman-docs/view-merge-conditions-v9.12.jpg" width="300px"/>

For information about the pull request's merge conditions, select **View Merge Conditions**.

<img alt="Merge Condition" src="https://assets.postman.com/postman-docs/v10/merge-conditions-v10.jpg" width="400px"/>
