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

If you've [configured a local repository](/docs/designing-and-developing-your-api/versioning-an-api/using-local-git-repo/), any changes you make in Postman are saved to your active local branch. From there, you can push the changes to the remote repository, where the changes will be available to the others.

If you've [configured a remote repository](/docs/designing-and-developing-your-api/versioning-an-api/using-external-git-repo/) but haven't configured a local repository, Postman stores your changes in a local cache. When you're ready to share your work with others, push your changes to the remote repository.

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

Feature branches enable to work on changes to your API without affecting the default branch in your repository. When you create a new branch, Postman automatically makes it the active branch.

To create a new branch:

1.

<!-- TO DO: ADD STEPS, ADD SCREENSHOT -->

> You can also create a branch when [committing changes](#committing-and-pushing-changes) to a local repository.

## Pushing and pulling changes

When you are connected to an external Git repo, the repo dropdown list displays your current develop branch and indicates if your API changes in Postman are ahead of or behind the files in your external repo. It shows links to the connected branch and repo, and a date when changes were last pulled to Postman or pushed to the Git repo. It also contains commands to pull, commit and push, switch branches, and delete the integration.

<img src="https://assets.postman.com/postman-docs/api-builder-git-integration-dropdown-v9-17.jpg" alt="API Builder source control" width="250px" />

Select the refresh icon <img alt="Refresh icon" src="https://assets.postman.com/postman-docs/icon-refresh-v9-5.jpg#icon" width="14px"> next to the repo dropdown list to check the remote repo for relevant changes.

### Committing and pushing changes

If there’s no local repo linked, the “commit and push” actions are combined.

If a local repo has been linked, users can commit and push independently. The commit/push actions done from outside Postman (CLI or IDE, for example) also reflect in Postman.

Once a change is pushed, any other producer can switch to that branch, pull changes, and see the updates you made.

To add your local changes to the external repo, select **Commit and push** from the repo dropdown list. You will be shown a list of files modified. Enter a commit message, and select **Commit and Push Changes**.

If there have been changes on the remote repo, you will be asked to pull changes first.

### Pulling changes

To get changes from the remote repo, select **Pull** from the repo dropdown list. This syncs any changes from the develop branch of the remote repo to Postman.

If you have a local change that conflicts with the remote copy, you will be shown a link to the latest Git commit, and the conflicting files.

![](https://assets.postman.com/postman-docs/api-builder-pull-changes-conflict.jpg)

To resolve the conflict, next to each file, select either **Keep remote file** or **Keep local file**, then select **Pull Changes**.

The first time you pull changes from the remote repo, if the remote schema directory already contains schema files, you will be prompted to select which schema to use in Postman.

### Resolving conflicts

If conflicts occur...

Can resolve conflicts for elements Postman understands within Postman.

## Making your changes available to others

Any branches and changes you push to your remote repository are visible to other API producers on your team.

To make your changes available to your API's consumers, push the changes to your remote repository's default branch. If your changes are on a feature branch, use your team's standard workflow to merge the changes into your remote repository's default branch. For example, you can use your preferred Git client to create a pull request to merge your feature branch into the default branch.

For cloud-hosted repositories, updates to the remote default branch are automatically synced to your Postman workspace. For enterprise self-hosted repositories, you must manually sync your local repository to your Postman workspace. Learn more about syncing to a Postman workspace. <!-- TO DO: ADD LINK TO SYNCING PAGE -->

Once your changes are synced to your Postman workspace, you can publish a new version of your API to make it available to consumers. Learn more about publishing an API. <!-- TO DO: ADD LINK TO PUBLISHING PAGE -->
