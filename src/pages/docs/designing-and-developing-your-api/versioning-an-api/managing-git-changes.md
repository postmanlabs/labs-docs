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

After you connect to a remote or local Git repository, you can use Postman to make changes to your API and collaborate with others. Any changes you make to your API definition, collections, or other linked elements always happen on a branch. You can work on any branch in your repository.

If you [configured a local repository](/docs/designing-and-developing-your-api/versioning-an-api/using-local-git-repo/), any changes you make in Postman are saved to your active local branch. From there, you can push the changes to the remote repository, where the changes will be available to others.

If you [configured a remote repository](/docs/designing-and-developing-your-api/versioning-an-api/using-external-git-repo/) but haven't configured a local repository, Postman stores your changes in a local cache. When you're ready to share your work with others, push your changes to the remote repository.

## Contents

* [Working with branches](#working-with-branches)
* [Pushing and pulling changes](#pushing-and-pulling-changes)
* [Making your changes available to others](#making-your-changes-available-to-others)

## Working with branches

Git branches help you organize your work and collaborate with others. As an API producer, you always work on a branch. <!-- You can switch to any branch in your repository, or you can create a new branch. -->

### Switching branches

If your Git repository has multiple branches (such as `main`, `develop`, and feature branches) you can switch between branches in Postman. Switching to a branch makes it the active branch.

To switch branches, select the branch dropdown menu next to the API's name in the sidebar, then select the branch you want to make active. After switching to a branch, you can use Postman to make changes to your API's definition and linked collections and environments. Any changes you make are stored in the active branch.

<img alt="Switching branches" src="https://assets.postman.com/postman-docs/v10/api-builder-switch-branches-v10.jpg" width="382px" />

<!--
### Creating a new branch

Feature branches enable you to work on changes to your API without affecting the default branch in your repository. When you create a new branch, Postman automatically makes it the active branch.

To create a new branch:

1. Steps...

> You can also create a branch when [committing changes](#committing-and-pushing-changes) to a local repository.
-->

## Pushing and pulling changes

As you work on your API, Postman tracks the changes you make to the active branch. Use the **Source Control** pane to view and manage your change history. You can commit and push your changes to the remote repository to make your work available to others. You can also pull changes to keep your working files up to date with the remote repository.

<img alt="Source control pane" src="https://assets.postman.com/postman-docs/v10/api-builder-source-control-v10.jpg" width="443px" />

### Committing and pushing changes

The **Source Control** pane displays the number of changes in the active branch in Postman. To commit and push the changes to the remote repository:

1. Select **APIs** in the sidebar and select an API.
1. Select the source control icon <img alt="Source control icon" src="https://assets.postman.com/postman-docs/icon-source-control.jpg#icon" width="16px"/> in the right sidebar.
1. If there are unstaged changes, you can stage them by selecting **+** next to a changed file. If you want to review the changes before staging them, select the diff icon <img alt="Diff icon" src="https://assets.postman.com/postman-docs/icon-diff.jpg#icon" width="16px"/>.

    > You can unstage a file by selecting **-** next to a file.

1. To commit the staged changes to the active branch, enter a commit message and select **Commit**. <!-- If you want to commit the changes to a new feature branch instead of the active branch, select **Create a new branch for this commit** and enter a branch name before committing. -->
1. The push icon <img alt="Push icon" src="https://assets.postman.com/postman-docs/icon-push.jpg#icon" width="36px"/> indicates the number of commits your active branch is ahead of the remote branch. Select the push icon to push the changes to the remote repository. If there are changes in the remote repository, you'll be prompted to [pull the changes](#pulling-changes) before pushing.

    > If you configured a remote repository but haven't configured a local repository, you don't need to stage or commit your files before pushing. You also don't need to pull changes. Enter a commit message and select **Commit and Push**.

After you push a change, other producers on your team can switch to the branch, pull the changes, and view the updates you made.

> You can also commit and pull changes using your preferred Git client. The Git change history will be reflected in Postman.

### Pulling changes

Pulling brings changes from the remote (origin) branch into your active branch.

> If you configured a remote repository but haven't configured a local repository, you must [push your changes](#pushing-and-pulling-changes) before you can pull from the remote branch.

To pull changes from the remote branch:

1. Select **APIs** in the sidebar and select an API.
1. Select the refresh icon <img alt="Refresh icon" src="https://assets.postman.com/postman-docs/icon-refresh-v9-5.jpg#icon" width="14px"> under **Connected repository** to get the latest changes from the remote branch.
1. Select the source control icon <img alt="Source control icon" src="https://assets.postman.com/postman-docs/icon-source-control.jpg#icon" width="16px"/> in the right sidebar. The pull icon <img alt="Pull icon" src="https://assets.postman.com/postman-docs/icon-pull.jpg#icon" width="36px"/> indicates the number of commits your active branch is behind the remote branch.
1. Select the pull icon to bring the changes into your active branch.

If there are any conflicts, you'll need to [resolve the conflicts](#resolving-conflicts) before you can finish pulling the changes.

### Resolving conflicts

If a change in your active branch conflicts with a change in the remote (origin) branch, you must resolve the conflict before you can pull changes.

To resolve a conflict:

1. Select the link to review the affected files.
1. Next to each file, select either **Keep remote file** or **Keep local file**.
1. When you're finished, select **Pull Changes**.

<!-- TO DO: VERIFY STEPS, UPDATE SCREENSHOT -->

![](https://assets.postman.com/postman-docs/api-builder-pull-changes-conflict.jpg)

> If the file with the conflict isn't in a format Postman supports, you'll need to resolve the conflict in your preferred Git client.

## Making your changes available to others

Any branches and changes you push to your remote repository are visible to other API producers on your team.

To make your changes available to your API's consumers, publish a new version of your API. When you publish a version, the API's definition and linked elements (collections and environments) are synced to your workspace in the Postman cloud. Learn more about [publishing an API version](/docs/designing-and-developing-your-api/versioning-an-api/api-versions/).
