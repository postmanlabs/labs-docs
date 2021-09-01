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
* [Creating API versions](#creating-api-versions)
* [Updating versions](#updating-versions)
* [Connecting linked elements to versions](#connecting-linked-elements-to-versions)

## Versioning concepts

Each API in Postman has a version, a release, and a status:

* A _version_ defines a discrete set of resources shipped to customers defining a feature set.
* A _release_ is a periodic incremental change to a version of an API. Releases are mapped to git tags.
* A _status_ is an arbitrary text tag which you can change to indicate the current stage of the API.

You can create any number of versions in parallel. For example, you can create a new 2.0 version of an API that introduces breaking changes, but keep adding changes to the 1.0 version.

A typical workflow for API-first development:

1. Create an initial version of an API. Set the version's status to indicate it is in progress, such as "Planning" or "In Development."
1. Select a feature branch in your repo. Make changes to the schema and associated collections, then commit and push changes to the git repo.
1. Periodically pull from the feature branch to get changes others have made to the feature, and resolve conflicts if there are any issues.
1. Review changes on your feature branches using your repo's tools, and merge them to the main branch in git. You can set the version's status in Postman to "Code Review" or "Security Review" during this stage.
1. After you've accrued changes, go to the changelog and select **Release changes**. Name the release, add a release note, and map the release to a git release tag. Then change the status to "In Production."

## Using an external git repository

You can connect a GitHub or Bitbucket repo to your API, and sync your API specifications and associated collections with the repo. You can continuously make changes in develop branches, then merge to a main branch that hosts the released version of the API. This provides an API-first developer workflow, and also enables you make changes to your API files outside of Postman, and the changes will be synchronized.

<!--TODO: Uniqueness of Branches/Repos w.r.t. Versions/APIs -->

<!-- TODO: GitHub two-way sync deprecated. Existing integrations still work, but you can't add a new one, and you need to disconnect the old one to use the new system.
-->

### Connecting a repository

You can connect an API to your remote git-based repository, at the API level. This enables you to continuously synchronize changes between the repository and Postman. Versions and release tags are then synchronized between Postman and your git repo.

To connect a repository:

1. On the API, select **Connect Repository** and choose a repo type: **GitHub**, **GitHub Enterprise**, or **Bitbucket**.
1. An authentication pop-up window appears. Enter the information to log in to your repo and select **Grant access**.
   > This pop-up window may be hidden by your browser. Make sure to enable pop-ups from this site.
1. On the **Connect your repository page**, enter the information for your repo.
1. Enter the git **Organization** and **Repository** where the API will be stored.
   > Note that you can only connect one Postman API per repo. Multiple APIs require multiple repos.
1. Enter the **Main branch** for the API. This is used to determine what tags are used; code is not pushed to this branch.
1. Enter the **Development branch** for the API. This is where code updates are pushed.
1. Enter an **API schema directory** and **Collection directory** where schemas and collections will be stored in the repo. If you leave a value blank, a `postman/schemas` or `postman/collections` directory will be created in the root of the repo.
1. Select **Connect Repository**.

After you connect the repository, your API will have a repo dropdown list at the top of the API overview, which contains the status of your sync, along with commands to commit,

<!--TODO note: usage counts against total number of integrations -->

### Pushing and pulling changes

When you are connected to an external git repo, the repo dropdown list displays your current develop branch and if your API changes in Postman are ahead of or behind the files in your external repo.

<!-- TODO: screenshot of the dropdown with changes, not selected -->

<!-- TODO: this also shows links to the repo and branch -->

#### Pulling changes

To get changes from the remote repo, select **Pull** from the dropdown list. This syncs any changes from the remote repo to Postman. If you have a local change that conflicts with the remote copy, you will be shown the latest commit number, and the conflicting files. To resolve the conflict, next to each file, select either **Keep remote file** or **Keep local file**, then click **Pull Changes**.

#### Committing and pushing changes

To add your local changes to the external repo, select **Commit and push** from the dropdown list. If there have been changes on the remote repo, you will be asked to pull changes first. You will be shown a list of files modified. Enter a commit message, and select **Commit and Push Changes**.

<!-- TODO:
## Changing branches
**Switch branch**

You only have one develop branch you defined when you connected the repo. Externally, people can work on whatever feature branches, then merge to develop, but that review/merge happens in your git tool.

removing integration

-->

## Working with API versions

When you create a new API in Postman, it also creates one version you entered during the API creation. You can create new versions from scratch or based on an existing version.

<!-- TODO:
Each API version has its own API version page.
-->

### Creating versions

To create a new version of an API:

1. Go to the API **Overview** page. From the action menu (...) select **Create version**.

   ![](https://via.placeholder.com/200x100.png?text=under+construction)

1. Enter a version name.

1. Select **Make this version available for consumers** if you want the new version to be visible.

1. If you want want to base this version on existing elements, click **Show more options** to expand the dialog. In **Copy elements from a previous version**, choose a previous version of the API. Then select the elements you want to copy to your new API.

   ![](https://via.placeholder.com/200x100.png?text=under+construction)

1. Click __Create Version__. Your new version will open in the API Builder.

### Updating versions

<!-- TODO: update content - also consolidate with the creating versions above -->

Postman automatically updates the version tags for linked collections whenever you update the API version. If you add a new version to the API, Postman will also add that version tag to the collection.

[![API link collection to API version](https://assets.postman.com/postman-docs/API-updating-version-tags-v8.gif)](https://assets.postman.com/postman-docs/API-updating-version-tags-v8.gif)

You can tag your collection revisions to match changes in your API. For example, if you update the API, which results in a revision of the collection, you can then link the updated collection (or documentation) to the new version of the API.

[![API link collection revisions](https://assets.postman.com/postman-docs/api-version-tags-updated-v8.gif)](https://assets.postman.com/postman-docs/api-version-tags-updated-v8.gif)

> If you have collections with specific version tags, Postman will associate them with the appropriate API versions by default. Due to this automatic behavior, Postman does not allow you to manipulate the version tags of a collection linked with an API manually.

If an API version is incremented, for example from 2.0 to 3.0, and you choose to *Carry over elements from a previous version*, but the collection is not tagged to API version 3.0 yet, Postman will display a warning, since there is no equivalent version tag on the collection corresponding to API version 3.0.

[![API version mismatch](https://assets.postman.com/postman-docs/api-version-mismatch-v8.gif)](https://assets.postman.com/postman-docs/api-version-mismatch-v8.gif)

To resolve this, add a corresponding version tag to the collection.

When you update an API version number and choose to carry over elements from a previous version, Postman provides you a list of elements that you need to update in order to match the new API version. This makes the API Builder your central dashboard to manage changes across all of your API elements.

### Renaming and deleting versions
<!-- TODO:
rename/edit/delete is now on version overview page ... menu
-->

## Working with API releases

<!--TODO:

### Creating a release
Release names can be semantic versions (`3.2.0-beta`) or dynamic (`2021-12-25`).

1. Create tags in repo first.
1. Go to Changelog in sidebar.
1. Shows unreleased changes. Select **+ Release changes**
1. Enter **Release name**, **Description**, select a tag in **Git release**. Select or clear **Show this release to consumers in changelog**.
   > You can only map releases to tags if you use an external git repo.
1. Select **Create Release**.

### Viewing releases

You can't commit changes to a released API.

TODO: Tagging API for changelog V2
-->

## Setting an API status

An API status is an arbitrary text tag which you can change to indicate the current stage of the API within your development cycle. For example, you can select a status such as "In Design," "Security Review," or "In Production." There are nine possible statuses. You can set different statuses for each version of an API.

A status doesn't affect visibility, permissions, or availability of an API. It's simply a way to tell others on your team the current state of the API. Statuses are not automatically changed by any actions or state change in your files. You can change the status at any time.

Statuses are displayed in the upper left of the API tab. To set a new status, choose one from the dropdown list.

## Validating APIs

<!-- TODO: this all changes. -->

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
