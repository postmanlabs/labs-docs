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

<!-- TODO: change this section -->
You can manage multiple versions of any APIs you create in Postman. You can link collections, mocks, monitors, and documentation to specific versions of APIs using version tagging.

To use versioning with your APIs, you need to carry out the following steps:

* Link your API to a collection
* Add version tags to your collection
* Update version tags on API changes

You can access versions in the API Builder by opening **APIs**, selecting the API you want to work with, and clicking **Show All Versions** to the upper-right of the menu.

<!--TODO: note that collection version control is something different, xref -->

* [Connecting a Repository](#connecting-a-repository)
* [Creating API versions](#creating-api-versions)
* [Updating versions](#updating-versions)
* [Connecting linked elements to versions](#connecting-linked-elements-to-versions)

## Versioning concepts

There are three different possible approaches to API versioning:

* **A remote git repository** - You can connect a GitHub or Bitbucket repo to your API version, and sync API specs and collections. You can continuously make changes in develop branches, then merge to a main branch that hosts the released version of the API. This provides an API-first developer workflow, and also enables you make changes to your API files outside of Postman, and the changes will be synchronized.
* **The Postman versioning system**
* **GitHub two-way sync** - integration for two-way sync of an API schema

Each API has a version, a release, and a status:

* A _version_ defines a discrete set of resources shipped to customers defining a feature set.
* A _release_ is a periodic incremental change to a version of an API. Releases are mapped to git tags.
* A _status_ is an arbitrary text tag which you can change to indicate the current stage of the API within your development cycle. For example, you can select a status such as "In Design," "Security Review," or "In Production."

You can create any number of versions in parallel. For example, you can create a new 2.0 version of an API that introduces breaking changes, but keep adding changes to the 1.0 version.

A typical workflow for API-first development:

1. Create an initial version of an API. Set the version's status to indicate it is in progress, such as "Planning" or "In Development."
1. Select a feature branch in your repo. Make changes to the schema and collection, then commit and push changes to the git repo.
1. Periodically pull from the feature branch to get changes others have made to the feature, and resolve conflicts if there are any issues.
1. Review changes on your feature branches using your repo's tools, and merge them to the main branch in git. You can set the version's status in Postman to "Code Review" or "Security Review" during this stage.
1. After you've accrued enough changes, go to the changelog and select **Release changes**. Name the release, add a release note, and map the release to a git release tag.

## Connecting a repository

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

<!--TODO limitations/notes-->

## Creating API versions

When you create a new API in Postman, it will indicate the version you entered during the API creation. You can create new versions from scratch or from an existing version. Click __Show All Versions__.

<img alt="API Version" src="https://assets.postman.com/postman-docs/api-current-version-v8.jpg" width="400px"/>

From here you can rename and delete versions—_deleting a version will also delete its version tag_. To create a new version, click __Create another version__.

<img alt="API Version List" src="https://assets.postman.com/postman-docs/api-version-list-v8.jpg" width="400px"/>

Enter a version name. If you want want to base this version on an existing version select it from the dropdown list, otherwise choose __Don't carry over any elements__. If you are basing your new version on an existing version, check any elements you want to connect to the new version. Click __Create Version__.

<img alt="API Version List" src="https://assets.postman.com/postman-docs/add-new-api-version-v8.jpg" width="400px"/>

Your new version will open in the API Builder.

<!-- TODO: Make this version available for consumers -->

<!-- TODO:
## Branching

## Push/Pull

## Creating a releases

Can be named semantic or date/dynamic
You can't commit changes to a released API.
-->

## Updating versions

Postman automatically updates the version tags for linked collections whenever you update the API version. If you add a new version to the API, Postman will also add that version tag to the collection.

[![API link collection to API version](https://assets.postman.com/postman-docs/API-updating-version-tags-v8.gif)](https://assets.postman.com/postman-docs/API-updating-version-tags-v8.gif)

You can tag your collection revisions to match changes in your API. For example, if you update the API, which results in a revision of the collection, you can then link the updated collection (or documentation) to the new version of the API.

[![API link collection revisions](https://assets.postman.com/postman-docs/api-version-tags-updated-v8.gif)](https://assets.postman.com/postman-docs/api-version-tags-updated-v8.gif)

> If you have collections with specific version tags, Postman will associate them with the appropriate API versions by default. Due to this automatic behavior, Postman does not allow you to manipulate the version tags of a collection linked with an API manually.

If an API version is incremented, for example from 2.0 to 3.0, and you choose to *Carry over elements from a previous version*, but the collection is not tagged to API version 3.0 yet, Postman will display a warning, since there is no equivalent version tag on the collection corresponding to API version 3.0.

[![API version mismatch](https://assets.postman.com/postman-docs/api-version-mismatch-v8.gif)](https://assets.postman.com/postman-docs/api-version-mismatch-v8.gif)

To resolve this, add a corresponding version tag to the collection.

When you update an API version number and choose to carry over elements from a previous version, Postman provides you a list of elements that you need to update in order to match the new API version. This makes the API Builder your central dashboard to manage changes across all of your API elements.

### Validating APIs

For APIs using OpenAPI 3.0, you can validate the schema against the documentation and select __Click to validate__ to start the validation.

<img alt="Schema validation" src="https://assets.postman.com/postman-docs/click-validation-v8.jpg"/>

If there are any issues, you will see a warning sign. Hover on it to see the details and click __Review Issues__.

<img alt="Review validation issues" src="https://assets.postman.com/postman-docs/review-validation-issues-v8.jpg" width="300px"/>

To keep your collection in sync with the schema, select the changes you require and click __Confirm Changes to Collection__.

<img alt="Schema documentation sync" src="https://assets.postman.com/postman-docs/documentation-collection-sync-v8.jpg"/>

Your collection will be in sync with schema.

<img alt="Collection updated" src="https://assets.postman.com/postman-docs/collection-updated-v8.jpg" width="500px"/>

## Connecting linked elements to versions

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

You can [publish specific versions of collection documentation](/docs/publishing-your-api/documenting-your-api/#versioning-your-docs).

## Next steps

For more on working with the API Builder, check out the following topics:

* [Validating elements against schema](/docs/designing-and-developing-your-api/validating-elements-against-schema/)
* [Viewing and analyzing APIs](/docs/designing-and-developing-your-api/view-and-analyze-api-reports/)
