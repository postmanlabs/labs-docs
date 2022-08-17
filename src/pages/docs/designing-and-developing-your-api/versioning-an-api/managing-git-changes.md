---
title: 'Managing changes using Git'
updated: 2022-09-15
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Using a remote Git repository"
    url: "/docs/designing-and-developing-your-api/the-api-workflow/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "Better Practices for Git Version Control in Postman"
    url: "https://blog.postman.com/better-practices-for-git-version-control-in-postman/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Syncing to a Postman workspace"
    url: "/docs/designing-and-developing-your-api/syncing-an-api/"
---

After you connect to a remote or local Git repository, you can use Postman to make changes to your API and collaborate with others. Any changes you make to your API definition, collections, or other linked elements always happen on a branch. You can work on your repository's default branch, or you can create a new feature branch for your changes.

If you [configured a local repository](/docs/designing-and-developing-your-api/versioning-an-api/using-local-git-repo/), any changes you make in Postman are saved to your active local branch. From there, you can push the changes to the remote repository, where the changes will be available to the others.

If you [configured a remote repository](/docs/designing-and-developing-your-api/versioning-an-api/using-external-git-repo/) but haven't configured a local repository, Postman stores your changes in a local cache. When you're ready to share your work with others, push your changes to the remote repository.

## Contents

* [Working with branches](#working-with-branches)
* [Pushing and pulling changes](#pushing-and-pulling-changes)
* [Making your changes available to others](#making-your-changes-available-to-others)

## Working with branches

Git branches help you organize your work and collaborate with others. As an API producer, you always work on a branch. You can switch to any branch in your repository, or you can create a new branch.

### Switching branches

If your Git repository has multiple branches (such as `main`, `develop`, and feature branches) you can switch between branches in Postman. Switching to a branch makes it the active branch.

To switch branches, select the branch dropdown menu next to the API's name in the sidebar, then select the branch you want to make active. After switching to a branch, you can use Postman to make changes to your API's definition, tests, documentation, environments, mocks, and monitors. Any changes you make are stored in the active branch.

<!-- TO DO: VERIFY STEPS, ADD SCREENSHOT -->

> If you are working in a local branch, you won't be able to run mocks and monitors until you [push your changes](#committing-and-pushing-changes) to the remote repository. After pushing to the remote repository, you'll also be able to view CI integrations and run builds from Postman.

### Creating a new branch

Feature branches enable you to work on changes to your API without affecting the default branch in your repository. When you create a new branch, Postman automatically makes it the active branch.

To create a new branch:

1.

<!-- TO DO: ADD STEPS, ADD SCREENSHOT -->

> You can also create a branch when [committing changes](#committing-and-pushing-changes) to a local repository.

## Pushing and pulling changes

As you work on your API, Postman tracks the changes you make to the active branch. Use the **Source Control** pane to view and manage your change history. You can commit and push your changes to the remote repository to make your work available to others. You can also pull changes to keep your working files up to date with the remote repository.

<!-- TO DO: ADD SCREENSHOT OF SOURCE CONTROL PANE -->

### Committing and pushing changes

If there are uncommitted changes in your active branch, an icon displays next to the branch dropdown menu indicating the number of changes.

To commit and push the changes to the remote repository:

1. Select <!-- TO DO: ADD SOURCE CONTROL ICON --> **Source Control** in the right sidebar.
1. If there are unstaged changes, you can add them by selecting **+** next to a changed file. If you want to review the changes before adding them, select the diff icon <!-- TO DO: ADD DIFF ICON -->.
1. To commit the staged changes to the active branch, enter a commit message and select **Commit changes**. If you want to commit the changes to a new feature branch instead of the active branch, select **Create a new branch for this commit** and enter a branch name before committing.
1. The push icon <!-- TO DO: ADD SOURCE CONTROL ICON --> indicates the number of commits your active branch is ahead of the remote branch.Select the push icon to push the changes to the remote repository. If there are changes in the remote repository, you'll be prompted to [pull the changes](#pulling-changes) before pushing.

    > If you configured a remote repository but haven't configured a local repository, you don't need to stage or commit your files before pushing. Just enter a commit message and select **Commit and Push**.

<!-- TO DO: VALIDATE STEPS, ADD SCREENSHOT -->

After you push a change, other producers on your team can switch to the branch, pull the changes, and view the updates you made.

> You can also commit and pull changes using your preferred Git client. The Git change history will be reflected in Postman.

### Pulling changes

Pulling brings changes from the remote (origin) branch into your active branch. You need to pull any changes from the remote branch before you can push changes to it.

To pull changes from the remote branch:

1. Select the refresh icon <img alt="Refresh icon" src="https://assets.postman.com/postman-docs/icon-refresh-v9-5.jpg#icon" width="14px"> to get the latest changes from the remote branch.
1. Select <!-- TO DO: ADD SOURCE CONTROL ICON --> **Source Control** in the right sidebar. The pull icon <!-- TO DO: ADD SOURCE CONTROL ICON --> indicates the number of commits your active branch is behind the remote branch.
1. Select the pull icon to bring the changes into your active branch.

<!-- TO DO: VALIDATE STEPS, ADD SCREENSHOT -->

If there are any conflicts, you'll need to [resolve the conflicts](#resolving-conflicts) before you can finish pulling the changes.

### Resolving conflicts

If a change in your active branch conflicts with a change in the remote (origin) branch, you must resolve the conflict before you can pull changes.

To resolve a conflict:

1. Select the link to review the affected files.
1. Next to each file, select either **Keep remote file** or **Keep local file**.
1. When you're finished, select **Pull Changes**.

<!-- TO DO: VALIDATE STEPS, ADD SCREENSHOT -->

![](https://assets.postman.com/postman-docs/api-builder-pull-changes-conflict.jpg)

> If the file with the conflict isn't in a format Postman supports, you'll need to resolve the conflict in your preferred Git client.

## Making your changes available to others

Any branches and changes you push to your remote repository are visible to other API producers on your team.

To make your changes available to your API's consumers, use the following workflow:

1. **Push the changes to your remote repository's default branch.** If your changes are on a feature branch, use your team's standard workflow to merge the changes into your remote repository's default branch. For example, you can use your preferred Git client to create a pull request to merge your feature branch into the default branch.

1. **Sync the changes to your Postman workspace.** For cloud-hosted repositories, updates to the remote default branch are automatically synced to your Postman workspace. For enterprise self-hosted repositories, you must manually sync your local repository to your Postman workspace. Learn more about syncing to a Postman workspace. <!-- TO DO: ADD LINK TO SYNCING PAGE -->

1. **Publish a new API version.** Once your changes are synced to your Postman workspace, you can publish a new version of your API to make it available to consumers. Learn more about publishing an API. <!-- TO DO: ADD LINK TO PUBLISHING PAGE -->
