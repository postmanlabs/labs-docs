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

<!-- TODO: change the "link collections..." part -->
You can manage multiple versions of any APIs you create in Postman. You can link collections, mocks, monitors, and documentation to specific versions of APIs using version tagging.

To use versioning with your APIs, you need to carry out the following steps:

* Link your API to a collection
* Add versions for your API
* Create releases for minor API changes, and new versions for major changes

> API versioning is different than using version control for collections. For information on how to use version control for collections, see [Using version control](/docs/collaborating-in-postman/version-control-for-collections/).

* [Versioning concepts](#versioning-concepts)
* [Using an external git repository](#using-an-external-git-repository)
  - [Connecting a Repository](#connecting-a-repository)
  - [Pushing and pulling changes](#pushing-and-pulling-changes)
  - [Removing the repository connection](#removing-the-repository-connection)
* [Creating API versions](#creating-api-versions)
* [Updating versions](#updating-versions)
* [Connecting linked elements to versions](#connecting-linked-elements-to-versions)

## Versioning concepts

Each API in Postman has one or more versions, and versions have multiple releases. Each version also has a status.

* A _version_ defines a discrete set of resources shipped to customers defining a feature set.
* A _release_ is a periodic incremental change to a version of an API. Releases can be mapped to git release tags when you are connected to an external git repo.
* A _status_ is an arbitrary text tag which you can change to indicate the current development stage of the API.

You can create any number of versions in parallel. For example, you can create a new 2.0 version of an API that introduces new breaking changes and work on it internally, but keep adding changes to the 1.0 version that is currently public.

A typical workflow for API-first development:

1. Create an initial version of an API. Set the version's status to indicate it is in progress, such as "Planning" or "In Development."
1. Make changes to the schema and associated collections.
1. Review changes in the changelog. You can set the version's status in Postman to "Code Review" or "Security Review" during this stage.
1. Go to the changelog and select **Release changes**. Name the release, add a release note, and create the release. Then change the status to "In Production."

## Using an external git repository

You can connect a GitHub or Bitbucket repo to your API, and sync your API specifications and associated collections with the repo. You can continuously make changes synced between Postman and a develop branch in git.

When it's time to release, you can merge the develop branch to the main branch in git, which holds the released version of the API. You can then create a git release, and map this release tag to your release in Postman.

A typical workflow for API-first development with an external git repo:

1. Connect a repo and set up a develop branch.
1. Create an initial version of an API in Postman. Set the version's status to indicate it is in progress, such as "Planning" or "In Development."
1. Make changes to the schema and associated collections in Postman, then commit and push changes to the develop branch in the git repo.
1. You can also make changes to schemas and collections directly in git using other tools or editors. And developers can follow a git workflow like working on feature branches, then creating PRs to merge them into the develop branch.
1. Periodically pull from the develop branch to get changes others have made into Postman, and resolve conflicts if there are any issues.
1. Review changes on your develop branches, then merge them to the main branch in git and create a git release. You can set the version's status in Postman to "Code Review" or "Security Review" during this stage.
1. In Postman, go to the changelog and select **Release changes**. Name the release, add a release note, and map the release to a git release tag. Then change the status to "In Production."

### Connecting a repository

You can connect an API to your remote git-based repository, at the API level. This enables you to continuously synchronize changes between the repository and Postman. Versions and release tags are then synchronized between Postman and your git repo.

> The user account used for authentication requires full access to repositories. You may want to create a service account with limited permissions specifically for this integration.

You can only connect one Postman API to one remote repo. Multiple APIs require multiple repos. This means:

* One team can't have two active versions of an API linked to the same branch.
* One team can't have versions from two different APIs linked to the same branch.
* Two different teams can't have links to the same repo.
* One API can't have multiple versions synced to multiple repos.

Multiple versions of an API can link to the same repo/branch combination, as long as development only happens on one branch. If you link repo/branch to a new version, then all older integrations on that branch become locked. For inactive integrations, no pulls/pushes or new tag-links can happen, but the linked tags stay.

To connect a repository:

1. On an API Version page, select **Connect Repository** and choose a repo type: **GitHub**, **GitHub Enterprise**, or **Bitbucket**.
1. An authentication pop-up window appears. Enter the information to log in to your repo and select **Grant access**.
   > This pop-up window may be hidden by your browser. Make sure to enable pop-ups from this site.
1. On the **Connect your repository page**, enter the information for your repo.
1. Enter the git **Organization** and **Repository** where the API will be stored.
   > Note that you can only connect one Postman API per repo. Multiple APIs require multiple repos.
1. Enter the **Main branch** for the API. This is used to fetch  release tags; code is not pushed to this branch.
1. Enter the **Development branch** for the API. This is where code updates are pushed.
1. Enter an **API schema directory** and **Collection directory** where schemas and collections will be stored in the repo. If you leave a value blank, a `postman/schemas` or `postman/collections` directory will be created in the root of the repo.
1. Select **Connect Repository**.

> If you previously used the GitHub integration for two-way sync of an API schema, you must delete the old integration to connect a repo to your API. An existing integration will continue to function, but you can't add new integrations for two-way sync to an API schema.

### Pushing and pulling changes

When you are connected to an external git repo, the repo dropdown list displays your current develop branch and indicates if your API changes in Postman are ahead of or behind the files in your external repo. It also shows links to the connected branch and repo, and a date when changes were last pulled to Postman or pushed to the git repo.

<img src="https://assets.postman.com/postman-docs/api-builder-git-integration-dropdown.jpg" alt="API Builder source control" width="250px" />

#### Pulling changes

To get changes from the remote repo, select **Pull** from the repo dropdown list. This syncs any changes from the develop branch of the remote repo to Postman.

If you have a local change that conflicts with the remote copy, you will be shown a link to the latest git commit, and the conflicting files.

![](https://assets.postman.com/postman-docs/api-builder-pull-changes-conflict.jpg)

To resolve the conflict, next to each file, select either **Keep remote file** or **Keep local file**, then click **Pull Changes**.

#### Committing and pushing changes

To add your local changes to the external repo, select **Commit and push** from the repo dropdown list. You will be shown a list of files modified. Enter a commit message, and select **Commit and Push Changes**.

If there have been changes on the remote repo, you will be asked to pull changes first.

### Removing the repository connection

You can remove a connection to a git repo at any time. You may want to do this if you are changing accounts or providers, or need to use a different development branch.

On the repo dropdown list, select **Delete Integration**. Note that this only removes the connection to git; it does not change any files or branches.

## Working with API versions

When you create a new API in Postman, it also creates the initial version you entered during the API creation. You can create new versions from scratch or based on an existing version. Each API version has its own **API version** page, which you can find on the API Overview page or in the left sidebar.

### Creating versions

To create a new version of an API:

1. Go to the API **Overview** page. Select **...** in the upper right corner and select **Create version**.
1. Enter a version name.
1. Select **Make this version available for consumers** if you want the new version to be visible. Otherwise, it is only visible to editors.
1. If you want want to base this version on existing elements, click **Show more options** to expand the dialog. In **Copy elements from a previous version**, choose a previous version of the API. Then select the elements you want to copy to your new API.
1. Click __Create Version__. Your new version will open in the API Builder.

### Updating versions

<!-- TODO: update content - also consolidate with the creating versions above -->

Postman automatically updates the version tags for linked collections whenever you update the API version. If you add a new version to the API, Postman will also add that version tag to the collection.

[![API link collection to API version](https://assets.postman.com/postman-docs/API-updating-version-tags-v8.gif)](https://assets.postman.com/postman-docs/API-updating-version-tags-v8.gif)

You can tag your collection revisions to match changes in your API. For example, if you update the API, which results in a revision of the collection, you can then link the updated collection (or documentation) to the new version of the API.

[![API link collection revisions](https://assets.postman.com/postman-docs/api-version-tags-updated-v8.gif)](https://assets.postman.com/postman-docs/api-version-tags-updated-v8.gif)

> If you have collections with specific version tags, Postman will associate them with the appropriate API versions by default. Due to this automatic behavior, Postman does not allow you to manipulate the version tags of a collection linked with an API manually.

If an API version is incremented, for example from 2.0 to 3.0, and you choose to *Copy elements from a previous version*, but the collection is not tagged to API version 3.0 yet, Postman will display a warning, since there is no equivalent version tag on the collection corresponding to API version 3.0.

[![API version mismatch](https://assets.postman.com/postman-docs/api-version-mismatch-v8.gif)](https://assets.postman.com/postman-docs/api-version-mismatch-v8.gif)

To resolve this, add a corresponding version tag to the collection.

When you update an API version number and choose to carry over elements from a previous version, Postman provides you a list of elements that you need to update in order to match the new API version. This makes the API Builder your central dashboard to manage changes across all of your API elements.

### Renaming and deleting versions

You can rename, edit, or delete an API version using the __View more actions__ (__...__) menu in the left sidebar. Editing an API enables you to change the name, status, and visibility at once.

   > When you delete an API version, the collections, monitors, mocks, and environments linked to it will not be deleted or removed.

## Working with API releases

A _release_ is a periodic incremental change to a version of an API. You regularly create a release to put out changes that have been made to the API. Releases can have semantic version names (`3.2.0-beta`) or can be named dynamically (`2021-12-25`, `Q4 Security Update`).

When you are connected to an external git repo, releases can be mapped to the git release tags.

### Viewing releases

Releases are shown on the **API version** page, on the **Overview** tab. Hover over a release and select **View Release** to open that release's page.

<img src="https://assets.postman.com/postman-docs/api-builder-releases.jpg" alt="API Builder releases" width="350px"/>

Each release page shows a read-only view of the schema, documentation, and tests associated with that release. You can't make changes to a released API; if you have more changes, you can create another release.

### Creating a release

To create a release:

1. If you are using an external git repo, create a release there first by merging changes from your develop branch to the main branch, and creating a release tag.
1. Select the Changelog icon in the sidebar. The Changelog will show changes to the API version's schema and associated elements. 1. Select **+ Release changes**.
1. Enter the release name and description.
1. If you are using an external git repo, select a tag in **Git release**.
1. Select **Make this version available for consumers** if you want the new version to be visible. Otherwise, it is only visible to editors.
1. Select **Create Release**. You will be taken to a new page for the release.

<!-- TODO: Tagging API for changelog V2 -->

## Setting an API status

An API status is an arbitrary text tag which you can change to indicate the current stage of the API within your development cycle. For example, you can select a status such as "In Design," "Security Review," or "In Production." There are nine possible statuses. You can set different statuses for each version of an API.

A status doesn't affect visibility, permissions, or availability of an API. It's simply a way to tell others on your team the current state of the API. Statuses are not automatically changed by any actions or state change in your files. You can change the status at any time.

Statuses are displayed in the upper left of the API tab. To set a new status, choose one from the dropdown list.

## Validating APIs

<!-- TODO: this all changes.
Also, there's redundancy between this and validating-events-against-schema
 -->

For APIs using OpenAPI 3.0, you can validate the schema against the documentation and select __Click to validate__ to start the validation.

<img alt="Schema validation" src="https://assets.postman.com/postman-docs/click-validation-v8.jpg"/>

If there are any issues, you will see a warning sign. Hover on it to see the details and click __Review Issues__.

<img alt="Review validation issues" src="https://assets.postman.com/postman-docs/review-validation-issues-v8.jpg" width="300px"/>

To keep your collection in sync with the schema, select the changes you require and click __Confirm Changes to Collection__.

<img alt="Schema documentation sync" src="https://assets.postman.com/postman-docs/documentation-collection-sync-v8.jpg"/>

Your collection will be in sync with schema.

<img alt="Collection updated" src="https://assets.postman.com/postman-docs/collection-updated-v8.jpg" width="500px"/>

## Connecting linked elements to versions
<!-- TODO: edits -->
You can link elements such as collections to a version of an API, [by adding either documentation or a test suite](/docs/designing-and-developing-your-api/the-api-workflow/) in the API Builder.

[![Api link collections](https://assets.postman.com/postman-docs/api-link-collections-v8.gif)](https://assets.postman.com/postman-docs/api-link-collections-v8.gif)

> When you add a mock or a monitor to an API, the underlying collection also gets linked to the API.

To link a collection to an API version, go to the **Collections** tab in the sidebar, then navigate to the right side of Postman to open the **Changelog** > **Add Version Tag**.

<img alt="Collection changelog" src="https://assets.postman.com/postman-docs/collection-api-version-v8.jpg" width="500px"/>

Choose the version of the API you want to connect to and how you want the collection to be linked.

<img alt="Collection Version 2" src="https://assets.postman.com/postman-docs/add-version-tag-collection-v8.jpg" width="300px"/>

You can create and run mocks and monitors on tagged revisions of your collections. You can also create and publish documentation from the tagged revisions of collections.

Monitors, mocks, and documentation are always associated with specific versions of a collection.

* The version tags of monitors and mocks linked to versioned collections do not update automatically. If you update the version of an API you're monitoring, you need to create a new monitor linked to the new version as your original linked monitor will run on the original collection.
* Documentation version tags automatically update along with your API.

You can then [publish specific versions of collection documentation](/docs/publishing-your-api/documenting-your-api/#versioning-your-docs).
