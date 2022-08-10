---
title: 'Using an external Git repository'
updated: 2022-05-09
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Using the API Builder"
    url: "/docs/designing-and-developing-your-api/the-api-workflow/"
  - type: link
    name: "Managing and sharing APIs"
    url: "/docs/designing-and-developing-your-api/managing-apis/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "How to Version APIs | Postman"
    url: "https://youtu.be/LzJEKsccQ70"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "Redefining API Management for the API-First World"
    url: "https://blog.postman.com/new-postman-api-platform-redefining-api-management-for-api-first-world"
  - type: link
    name: "Streamline the API Development Lifecycle with Postman Version Control"
    url: "https://blog.postman.com/streamline-api-development-lifecycle-with-postman-version-control/"
  - type: link
    name: "Better Practices for Git Version Control in Postman"
    url: "https://blog.postman.com/better-practices-for-git-version-control-in-postman/"
  - type: link
    name: "Syncing Your Specs with Collections"
    url: "https://blog.postman.com/latest-updates-to-syncing-your-specs-with-collections/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Reports overview"
    url: "/docs/reports/reports-overview/"
  - type: link
    name: "Validating elements against schema"
    url: "/docs/designing-and-developing-your-api/validating-elements-against-schema/"
---

> __[GitHub Enterprise Server, GitLab Self-Managed, and Azure DevOps Server (hosted on-premises) integrations are only available on Postman Enterprise plans.](https://www.postman.com/pricing)__

You can connect a GitHub, Bitbucket, GitLab, GitLab Self-Managed, or Azure DevOps repo to your API, and sync your API specifications and associated collections with the repo. You can continuously make changes synced between Postman and a develop branch in Git.

When it's time to release, you can merge the develop branch to the main branch in Git, which holds the released version of the API. You can then create a Git release, and map this release tag to your release in Postman.

A typical workflow for API-first development with an external Git repo:

1. Connect a repo and set up a develop branch.
1. Create an initial version of an API in Postman. Set the version's status to indicate it's in progress, such as "Planning" or "In Development."
1. Make changes to the schema and associated collections in Postman, then commit and push changes to the develop branch in the Git repo.
1. You can also make changes to schemas and collections directly in Git using other tools or editors. And developers can follow a Git workflow like working on feature branches, then creating PRs to merge them into the develop branch.
1. Periodically pull from the develop branch to get changes others have made into Postman, and resolve conflicts if there are any issues.
1. Review changes on your develop branches, then merge them to the main branch in Git and create a Git release. You can set the version's status in Postman to "Code Review" or "Security Review" during this stage.
1. In Postman, go to the changelog and select **Release changes**. Name the release, add a release note, and map the release to a Git release tag. Then change the status to "In Production."

## Connecting a repository

You can connect an API to your remote Git-based repository, at the API level. This enables you to continuously synchronize changes between the repository and Postman. Versions and release tags are then synchronized between Postman and your Git repo.

Keep in mind the following when connecting to a repository:

* **The user account used for authentication requires full access to repositories.** You may want to create a service account with limited permissions specifically for this integration.

* **You can only connect one Postman API to one remote repo.** Multiple APIs require multiple repos. Multiple versions of an API can link to the same repo/branch combination, as long as development only happens on one branch. If you link a repo or branch to a new version, then all previous integrations on that branch become locked. For inactive integrations, no pulls, pushes, or new tag-links can happen, but the linked tags will remain.

* **For Azure DevOps connections, make sure to enable third-party application access for your organization.** If you don't enable third-party access, Postman won't be able to connect to your repo. In Azure DevOps, go to your [organization settings](https://docs.microsoft.com/en-us/azure/devops/organizations/accounts/change-application-access-policies?view=azure-devops), select **Policies**, and turn on the toggle next to **Third-party application access via OAuth**.

* **For GitHub connections, there's a limit of ten auth tokens per user per application imposed by GitHub.** If you create more than ten connections with the same user, the additional tokens will be revoked in the order that they were created. Teams can use other Postman accounts to create more than ten integrations.

    > If you used the earlier standalone GitHub integration for two-way sync of an API schema, you must delete the previous integration to connect a repo to your API. An existing integration will continue to function, but you can't add new integrations for two-way sync to an API schema.

To connect a repository, do the following:

1. On an API Version page, select **Connect Repository** and choose a repo type: **GitHub**, **GitHub Enterprise**, **Bitbucket**, **GitLab**, **GitLab Self-Managed**, or **Azure DevOps**.
1. An authentication pop-up window appears. Enter the information to sign in to your repo and select **Grant access**.

   > This pop-up window may be hidden by your browser. Make sure to enable pop-ups from this site.

1. On the **Connect your repository** page, enter the information for your repo.
1. Enter the Git **Organization** and **Repository** where the API will be stored. (For GitLab, **Organization** refers to a **Group**, and **Repository** refers to a **Project**.)

   > Note that you can only connect one Postman API per repo. Multiple APIs require multiple repos.

1. Enter the **Main branch** for the API. This is used to fetch release tags; code isn't pushed to this branch.
1. Enter the **Development branch** for the API. This is where code updates are pushed.
1. Select an **API schema directory** and **Collection directory** where schemas and collections will be stored in the repo. If you leave a value blank, a `postman/schemas` or `postman/collections` directory will be created in the root of the repo. If you select a directory already containing schemas, you will be asked which schema to use in Postman the first time you pull changes.
1. Select **Connect Repository**.

## Pulling and pushing changes

When you are connected to an external Git repo, the repo dropdown list displays your current develop branch and indicates if your API changes in Postman are ahead of or behind the files in your external repo. It shows links to the connected branch and repo, and a date when changes were last pulled to Postman or pushed to the Git repo. It also contains commands to pull, commit and push, switch branches, and delete the integration.

<img src="https://assets.postman.com/postman-docs/api-builder-git-integration-dropdown-v9-17.jpg" alt="API Builder source control" width="250px" />

Select the refresh icon <img alt="Refresh icon" src="https://assets.postman.com/postman-docs/icon-refresh-v9-5.jpg#icon" width="14px"> next to the repo dropdown list to check the remote repo for relevant changes.

### Pulling changes

To get changes from the remote repo, select **Pull** from the repo dropdown list. This syncs any changes from the develop branch of the remote repo to Postman.

If you have a local change that conflicts with the remote copy, you will be shown a link to the latest Git commit, and the conflicting files.

![](https://assets.postman.com/postman-docs/api-builder-pull-changes-conflict.jpg)

To resolve the conflict, next to each file, select either **Keep remote file** or **Keep local file**, then select **Pull Changes**.

The first time you pull changes from the remote repo, if the remote schema directory already contains schema files, you will be prompted to select which schema to use in Postman.

### Committing and pushing changes

To add your local changes to the external repo, select **Commit and push** from the repo dropdown list. You will be shown a list of files modified. Enter a commit message, and select **Commit and Push Changes**.

If there have been changes on the remote repo, you will be asked to pull changes first.

## Switching branches

If your Git repo has multiple feature branches, you can switch branches in Postman from the development branch to a different feature branch. This enables you to view and make changes when you use a Git workflow where developers work in different feature branches.

To switch to a different branch, select **Switch Branch** from the repo dropdown list, then choose a branch from the list. Note that the **Switch Branch** list is only available if your repo has more than one branch, in addition to the main branch.

When you aren't in the configured develop branch, you can only edit the API schema and collections. Commit and push your changes to the feature branch, then in your Git repo, you can make a pull request, review changes, and merge back to your develop branch.

## Removing the repository connection

You can remove a connection to a Git repo at any time. You may want to do this if you are changing accounts or providers, or need to use a different development branch.

On the repo dropdown list, select **Delete Integration**. Note that this only removes the connection to Git; it doesn't change any files or branches.
