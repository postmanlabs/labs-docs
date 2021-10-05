---
title: 'Versioning APIs'
order: 81.2
page_id: 'versioning_an_api'
warning: false
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
    name: "Related Blog Posts"
  - type: link
    name: "Redefining API Management for the API-First World"
    url: "https://blog.postman.com/new-postman-api-platform-redefining-api-management-for-api-first-world"
  - type: link
    name: "Create APIs directly within the Postman app"
    url: "https://blog.postman.com/postman-7-1-create-apis-directly-within-the-postman-app/"
  - type: link
    name: "Streamline the API Development Lifecycle with Postman Version Control"
    url: "https://blog.postman.com/streamline-api-development-lifecycle-with-postman-version-control/"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Versioning APIs with Tags | Postman Level Up"
    url: "https://youtu.be/Kq8Ra0ugqoY"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Viewing and analyzing APIs"
    url: "/docs/designing-and-developing-your-api/view-and-analyze-api-reports/"
  - type: link
    name: "Validating elements against schema"
    url: "/docs/designing-and-developing-your-api/validating-elements-against-schema/"
---

You can manage multiple versions of any APIs you create in Postman. You can then associate mocks, monitors, and documentation to specific versions of APIs.

> API versioning is different than using version control for collections. For information on how to use version control for collections, see [Using version control](/docs/collaborating-in-postman/version-control-for-collections/).

* [Versioning concepts](#versioning-concepts)
* [Using an external Git repository](#using-an-external-git-repository)
    * [Connecting a Repository](#connecting-a-repository)
    * [Pulling and pushing changes](#pulling-and-pushing-changes)
    * [Switching branches](#switching-branches)
    * [Removing the repository connection](#removing-the-repository-connection)
* [Working with API versions](#working-with-api-versions)
* [Working with API releases](#working-with-api-releases)
* [Setting an API status](#setting-an-api-status)

## Versioning concepts

Each API in Postman has one or more versions, and versions have multiple releases. Each version also has a status.

* A _version_ defines a major variant of an API and its associated elements, such as documentation, tests, mock servers, and monitors.
* A _release_ is a periodic incremental change to a version of an API. You can see released and unreleased changes in the Changelog, and create new releases there. Changes include edits to the API schema or any related elements. Releases can be mapped to Git release tags when you are connected to an external Git repo.
* A _status_ is a text tag which you can change to indicate the current development stage of the API version.

You can create any number of versions in parallel. For example, you can create a new 2.0 version of an API that introduces new breaking changes and work on it internally, but keep adding changes to the 1.0 version that is currently public.

A typical workflow for API-first development:

1. Create an initial version of an API. Set the version's status to indicate it is in progress, such as "Planning" or "In Development."
1. Make changes to the schema and associated collections.
1. Review changes in the changelog. You can set the version's status in Postman to "Code Review" or "Security Review" during this stage.
1. Go to the changelog and select **Release changes**. Name the release, add a release note, and create the release. Then change the status to "In Production."

## Using an external Git repository

You can connect a GitHub or Bitbucket repo to your API, and sync your API specifications and associated collections with the repo. You can continuously make changes synced between Postman and a develop branch in Git.

When it's time to release, you can merge the develop branch to the main branch in Git, which holds the released version of the API. You can then create a Git release, and map this release tag to your release in Postman.

A typical workflow for API-first development with an external Git repo:

1. Connect a repo and set up a develop branch.
1. Create an initial version of an API in Postman. Set the version's status to indicate it is in progress, such as "Planning" or "In Development."
1. Make changes to the schema and associated collections in Postman, then commit and push changes to the develop branch in the Git repo.
1. You can also make changes to schemas and collections directly in Git using other tools or editors. And developers can follow a Git workflow like working on feature branches, then creating PRs to merge them into the develop branch.
1. Periodically pull from the develop branch to get changes others have made into Postman, and resolve conflicts if there are any issues.
1. Review changes on your develop branches, then merge them to the main branch in Git and create a Git release. You can set the version's status in Postman to "Code Review" or "Security Review" during this stage.
1. In Postman, go to the changelog and select **Release changes**. Name the release, add a release note, and map the release to a Git release tag. Then change the status to "In Production."

### Connecting a repository

You can connect an API to your remote Git-based repository, at the API level. This enables you to continuously synchronize changes between the repository and Postman. Versions and release tags are then synchronized between Postman and your Git repo.

> The user account used for authentication requires full access to repositories. You may want to create a service account with limited permissions specifically for this integration.

You can only connect one Postman API to one remote repo. Multiple APIs require multiple repos. Multiple versions of an API can link to the same repo/branch combination, as long as development only happens on one branch. If you link a repo/branch to a new version, then all older integrations on that branch become locked. For inactive integrations, no pulls/pushes or new tag-links can happen, but the linked tags will remain.

> For GitHub connections, there's currently a limit of ten auth tokens per user per application imposed by GitHub. If you create more than ten connections with the same user, your oldest tokens will be revoked. Teams can use other Postman accounts to create more than ten integrations.

To connect a repository:

1. On an API Version page, select **Connect Repository** and choose a repo type: **GitHub**, **GitHub Enterprise**, or **Bitbucket**.
1. An authentication pop-up window appears. Enter the information to log in to your repo and select **Grant access**.
   > This pop-up window may be hidden by your browser. Make sure to enable pop-ups from this site.
1. On the **Connect your repository page**, enter the information for your repo.
1. Enter the Git **Organization** and **Repository** where the API will be stored.
   > Note that you can only connect one Postman API per repo. Multiple APIs require multiple repos.
1. Enter the **Main branch** for the API. This is used to fetch  release tags; code is not pushed to this branch.
1. Enter the **Development branch** for the API. This is where code updates are pushed.
1. Enter an **API schema directory** and **Collection directory** where schemas and collections will be stored in the repo. If you leave a value blank, a `postman/schemas` or `postman/collections` directory will be created in the root of the repo.
1. Select **Connect Repository**.

> If you previously used the GitHub integration for two-way sync of an API schema, you must delete the old integration to connect a repo to your API. An existing integration will continue to function, but you can't add new integrations for two-way sync to an API schema.

### Pulling and pushing changes

When you are connected to an external Git repo, the repo dropdown list displays your current develop branch and indicates if your API changes in Postman are ahead of or behind the files in your external repo. It shows links to the connected branch and repo, and a date when changes were last pulled to Postman or pushed to the Git repo. It also contains commands to pull, commit and push, switch branches, and delete the integration.

<img src="https://assets.postman.com/postman-docs/api-builder-git-integration-dropdown.jpg" alt="API Builder source control" width="250px" />

#### Pulling changes

To get changes from the remote repo, select **Pull** from the repo dropdown list. This syncs any changes from the develop branch of the remote repo to Postman.

If you have a local change that conflicts with the remote copy, you will be shown a link to the latest Git commit, and the conflicting files.

![](https://assets.postman.com/postman-docs/api-builder-pull-changes-conflict.jpg)

To resolve the conflict, next to each file, select either **Keep remote file** or **Keep local file**, then click **Pull Changes**.

#### Committing and pushing changes

To add your local changes to the external repo, select **Commit and push** from the repo dropdown list. You will be shown a list of files modified. Enter a commit message, and select **Commit and Push Changes**.

If there have been changes on the remote repo, you will be asked to pull changes first.

### Switching branches

If your Git repo has multiple feature branches, you can switch branches in Postman from the development branch to a different feature branch. This enables you to view and make changes when you use a Git workflow where developers work in different feature branches.

To switch to a different branch, select **Switch Branch** the repo dropdown list, then choose a branch from the list. Note that the **Switch Branch** list is only available if your repo has more than one branch, in addition to the main branch.

When you are not in the configured develop branch, you can only edit the API schema and collections. Commit and push your changes to the feature branch, then in your Git repo, you can make a pull request, review changes, and merge back to your develop branch.

### Removing the repository connection

You can remove a connection to a Git repo at any time. You may want to do this if you are changing accounts or providers, or need to use a different development branch.

On the repo dropdown list, select **Delete Integration**. Note that this only removes the connection to Git; it does not change any files or branches.

## Working with API versions

When you create a new API in Postman, it also creates the initial version you entered during the API creation. You can create new versions from scratch or based on an existing version. Each API version has its own **API version** page, which you can find on the API Overview page or in the left sidebar.

### Creating versions

To create a new version of an API:

1. Go to the API **Overview** page. Select <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> in the upper right corner and select **Create version**.
1. Enter a version name.
1. Select **Make this version available for consumers** if you want the new version to be visible. Otherwise, it is only visible to editors.
1. If you want want to base this version on existing elements, click **Show more options** to expand the dialog. In **Copy elements from a previous version**, choose a previous version of the API. Then select the elements you want to copy to your new API.
    > Copying an element creates a new copy in your workspace. The new element will have the new version number appended to its name, such as `my-docs-2.0.0`. The new elements will be linked to the new version of the API.
1. Click __Create Version__. Your new version will open in the API Builder.

### Renaming and deleting versions

You can rename, edit, or delete an API version using the __View more actions__ (<img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px">) menu in the left sidebar. Editing an API enables you to change the name, status, and visibility at once.

   > When you delete an API version, the collections, monitors, mocks, and environments linked to it will not be deleted or removed.

## Working with API releases

A _release_ is a periodic incremental change to a version of an API. You regularly create a release to put out changes that have been made to the API. Releases can have semantic version names (`3.2.0-beta`) or can be named dynamically (`2021-12-25`, `Q4 Security Update`).

When you are connected to an external Git repo, releases can be mapped to the Git release tags.

### Viewing releases

Releases are shown on the **API version** page, on the **Overview** tab. Hover over a release and select **View Release** to open that release's page.

<img src="https://assets.postman.com/postman-docs/api-builder-releases.jpg" alt="API Builder releases" width="350px"/>

Each release page shows a read-only view of the schema, documentation, and tests associated with that release. You can't make changes to a released API; if you have more changes, you can create another release.

### Creating a release

To create a release:

1. If you are using an external Git repo, create a release in Git first by merging changes from your develop branch to the main branch, and creating a release tag.
1. Select the Changelog icon (<img alt="Changelog icon" src="https://assets.postman.com/postman-docs/icon-changelog.jpg" width="25px" style="vertical-align:middle;margin-bottom:0px">) in the sidebar. The Changelog will show changes to the API version's schema and associated elements.
1. Select **+ Release changes**.
1. Enter the release name and description.
1. If you are using an external Git repo, select a tag in **Git release**.
1. Select **Make this version available for consumers** if you want the new version to be visible. Otherwise, it is only visible to editors.
1. Select **Create Release**. You will be taken to a new page for the release.

You can also edit a release name in the Changelog. Next to the release, select <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px">, then select **Edit**.

## Setting an API status

An API status is a text tag which you can change to indicate the current stage of the API version within your development cycle. For example, you can select a status such as "In Design," "Security Review," or "In Production." You can set different statuses for each version of an API.

A status doesn't affect visibility, permissions, or availability of an API. It's simply a way to tell others on your team the current state of the API. Statuses are not automatically changed by any actions or state change in your files. You can change the status at any time.

Statuses are displayed in the upper left of the API tab. To set a new status, choose one from the dropdown list.
