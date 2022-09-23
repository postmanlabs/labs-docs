---
title: 'Managing changes using Git'
updated: 2022-09-15
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "API version control overview"
    url: "/docs/designing-and-developing-your-api/versioning-an-api/versioning-an-api-overview/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "Better Practices for Git Version Control in Postman"
    url: "https://blog.postman.com/better-practices-for-git-version-control-in-postman/"
  - type: section
---

After you connect to a remote Git repository, you can use Postman to make changes to your API and collaborate with others. Any changes you make to your API's definition or collections always happen on a branch. You can work on any branch in your repository.

If you [configured a remote repository](/docs/designing-and-developing-your-api/versioning-an-api/using-external-git-repo/), Postman stores your changes in a local cache. When you're ready to share your work with others, push your changes to the remote repository.

## Contents

* [Working with branches](#working-with-branches)
    * [Switching branches](#switching-branches)
    * [Creating a new branch](#creating-a-new-branch)
* [Pushing and pulling changes](#pushing-and-pulling-changes)
    * [Committing and pushing changes](#committing-and-pushing-changes)
    * [Pulling changes](#pulling-changes)
    * [Resolving conflicts](#resolving-conflicts)
    * [Creating a pull request](#creating-a-pull-request)
* [Making your changes available to others](#making-your-changes-available-to-others)

## Working with branches

Git branches help you organize your work and collaborate with others. As an API producer, you always work on a branch. <!-- You can switch to any branch in your repository, or you can create a new branch. -->

### Switching branches

If your Git repository has multiple branches (such as `main`, `develop`, and feature branches) you can switch between branches in Postman. Switching to a branch makes it the active branch.

To switch branches, select the Git branch dropdown menu in the Postman footer, then select the branch you want to make active. After switching to a branch, you can use Postman to make changes to your API's definition and collections. Any changes you make are stored in the active branch.

<img alt="Switching branches" src="https://assets.postman.com/postman-docs/v10/api-builder-switch-branches-footer-v10.jpg" width="382px" />

Postman displays a limited set of branches in the list. If a branch isn't listed, enter a branch name in the **Search** box of the dropdown and select the branch to switch to it.

### Creating a new branch

Feature branches enable you to work on changes to your API without affecting the default branch in your repository. When you create a new branch, Postman automatically makes it the active branch.

To create a new branch in the remote repository:

1. Select **APIs** in the sidebar and select an API.
1. Select the Git branch dropdown menu in the Postman footer.
1. Enter the name of the new branch in the **Search** box.
1. Select **Create branch from current branch**.

## Pushing and pulling changes

As you work on your API, Postman tracks the changes you make to the active branch. Use the **Source Control** pane to view and manage your change history. You can commit and push your changes to the remote repository to make your work available to others. You can also pull changes to keep your working files up to date with the remote repository.

To show or hide the commit history, select **Commits**. Expand a commit to see details about the changes. Use the dropdown menu next to **Commits** to show file history or show all commits.

<img alt="Source control pane" src="https://assets.postman.com/postman-docs/v10/api-builder-source-control-remote-v10a.jpg" width="443px" />

### Committing and pushing changes

The **Source Control** pane displays the number of changes in the active branch in Postman. To commit and push the changes to the remote repository:

1. Select **APIs** in the sidebar and select an API.
1. Select the source control icon <img alt="Source control icon" src="https://assets.postman.com/postman-docs/icon-source-control.jpg#icon" width="16px"/> in the right sidebar.
1. If you want to review the changes before committing and pushing them, hover over a file and select the diff icon <img alt="Diff icon" src="https://assets.postman.com/postman-docs/icon-diff.jpg#icon" width="16px"/>.

    > You can discard changes in a file by selecting the discard icon <img alt="Delete icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px"> next to it.

1. To commit the saved changes to the active branch, enter a commit message and select **Commit and Push**. <!-- If you want to commit the changes to a new feature branch instead of the active branch, select **Create a new branch for this commit** and enter a branch name before committing. -->
<!-- 1. The push icon <img alt="Push icon" src="https://assets.postman.com/postman-docs/icon-push.jpg#icon" width="36px"/> indicates the number of commits your active branch is ahead of the remote branch. Select the push icon to push the changes to the remote repository. -->

> If there are changes in the remote repository, you need to [pull the changes](#pulling-changes) before you can commit and push.

After you push a change, other producers on your team can switch to the branch, pull the changes, and view the updates you made.

<!-- >> You can also commit and pull changes using your preferred Git client. The Git change history will be reflected in Postman.-->

### Pulling changes

Pulling brings changes from the remote (origin) branch into your active branch.

To pull changes from the remote branch:

1. Select **APIs** in the sidebar and select an API.
1. Select the source control icon <img alt="Source control icon" src="https://assets.postman.com/postman-docs/icon-source-control.jpg#icon" width="16px"/> in the right sidebar. The pull icon <img alt="Pull icon" src="https://assets.postman.com/postman-docs/v10/icon-pull-v10.jpg#icon" width="36px"/> indicates the number of commits your active branch is behind the remote branch.
1. Select the pull icon to bring the changes into your active branch.

If there are any conflicts, you'll need to [resolve the conflicts](#resolving-conflicts) before you can finish pulling the changes.

### Resolving conflicts

If a change in your active branch conflicts with a change in the remote (origin) branch, you must resolve the conflict before you can pull changes.

To resolve a conflict:

1. Next to each affected file, select either **Keep remote file** or **Keep local file**.
1. When you're finished, select **Pull Changes**.

![](https://assets.postman.com/postman-docs/api-builder-pull-changes-conflict.jpg)

> If the file with the conflict isn't in a format Postman supports, you'll need to resolve the conflict in your preferred Git client.

### Creating a pull request

After you push changes to a branch, you can create a pull request (PR) to merge your changes into another branch. For example, if you are working on a feature branch, you can create a pull request to merge your changes into the repository's main branch.

To create a pull request:

1. Select **APIs** in the sidebar and select an API.
1. Select the source control icon <img alt="Source control icon" src="https://assets.postman.com/postman-docs/icon-source-control.jpg#icon" width="16px"/> in the right sidebar.
1. Select **Create a PR**. A browser tab opens where you can finish creating the PR.

After the PR is merged, make sure to [switch to the branch](#switching-branches) you merged the changes into and [pull the changes](#pulling-changes).

<img alt="Source control pane" src="https://assets.postman.com/postman-docs/v10/api-builder-create-pr-v10.jpg" width="443px" />

## Making your changes available to others

Any branches and changes you push to your remote repository are visible to other API producers on your team. You can also [create a pull request](#creating-a-pull-request) to ask others on your team to review your changes.

To make your changes available to your API's consumers, publish a new version of your API. When you publish a version, the API's definition and collections are synced to your workspace in the Postman cloud. Learn more about [publishing an API version](/docs/designing-and-developing-your-api/versioning-an-api/api-versions/).
