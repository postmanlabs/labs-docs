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

If you've configured a local repository, any changes you make in Postman are saved to your active local branch. From there, you can push the changes to the corresponding origin branch in your remote repository. To make your changes available to your API's consumers, push them or merge them into your remote repository's default branch.

If you haven't configured a local repository, Postman stores your changes in a local cache as you work on them. When you're ready to share your work with others, you can push your changes to the default branch in your remote repository.

## Contents

* [Working with branches](#working-with-branches)
* [Pushing and pulling changes](#pushing-and-pulling-changes)
* [Making changes available to consumers](#making-changes-available-to-consumers)

## Working with branches

As a producer, you must always work on a branch. You can work on any branch in your repo, or create a new branch. Switch to a branch to make it active. You can also switch to a consumer view (read only).

### Switching branches

Switch the active branch. Postman reflects the active branch (schema, collections).

If your Git repo has multiple feature branches, you can switch branches in Postman from the development branch to a different feature branch. This enables you to view and make changes when you use a Git workflow where developers work in different feature branches.

To switch to a different branch, select **Switch Branch** from the repo dropdown list, then choose a branch from the list. Note that the **Switch Branch** list is only available if your repo has more than one branch, in addition to the main branch.

When you aren't in the configured develop branch, you can only edit the API schema and collections. Commit and push your changes to the feature branch, then in your Git repo, you can make a pull request, review changes, and merge back to your develop branch.

### Creating a new branch

You can create a new feature branch. This lets you work on changes without affecting the default branch until you're ready to merge.

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

## Making changes available to consumers

To make your changes available to your API's consumers, push the changes to your remote repository's default branch. If your changes are on a feature branch, use your team's standard workflow to merge the changes into your remote repository's default branch. For example, you can use your preferred Git client to create a pull request to merge your feature branch into the default branch.

For cloud-hosted repositories, updates to the remote default branch are automatically synced to your Postman workspace where your API's consumers can view them. <!-- TO DO: ADD LINK --> For self-hosted repositories, you must manually sync your local repository to your Postman workspace before the changes are available to consumers. Learn more about syncing to a Postman workspace. <!-- TO DO: ADD LINK -->
