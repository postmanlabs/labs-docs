---
title: 'Versioning an API overview'
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

You can manage multiple versions of any APIs you create in Postman. You can then associate mocks, monitors, and documentation to specific versions of APIs.

> API versioning is different than using version control for collections. For information on how to use version control for collections, see [Using version control](/docs/collaborating-in-postman/version-control-for-collections/).

## Contents

* [Versioning concepts](#versioning-concepts)
* [Using an external Git repository](#using-an-external-git-repository)
* [Working with API versions](#working-with-api-versions)
* [Working with API releases](#working-with-api-releases)
* [Setting an API status](#setting-an-api-status)

## Versioning concepts

Each API in Postman has one or more versions, and versions have multiple releases. Each version also has a status.

* A _version_ defines a major variant of an API and its associated elements, such as documentation, tests, mock servers, and monitors.
* A _release_ is a periodic incremental change to a version of an API. The Changelog lists released and unreleased changes, and you can create new releases there. Changes include edits to the API schema or any related elements. Releases can be mapped to Git release tags when you are connected to an external Git repo.
* A _status_ is a text tag which you can change to indicate the current development stage of the API version.

You can create any number of versions in parallel. For example, you can create a new 2.0 version of an API that introduces new breaking changes and work on it internally, but keep adding changes to the 1.0 version that's currently public.

A typical workflow for API-first development:

1. Create an initial version of an API. Set the version's status to indicate it's in progress, such as "Planning" or "In Development."
1. Make changes to the schema and associated collections.
1. Review changes in the Changelog. You can set the version's status in Postman to "Code Review" or "Security Review" during this stage.
1. Go to the Changelog and select **Release changes**. Name the release, add a release note, and create the release. Then change the status to "In Production."

## Using an external Git repository

You can connect a GitHub, Bitbucket, GitLab, GitLab Self-Managed, or Azure DevOps repo to your API, and sync your API specifications and associated collections with the repo. You can continuously make changes synced between Postman and a develop branch in Git.

Learn more about [using an external Git repository](/docs/designing-and-developing-your-api/versioning-an-api/using-external-git-repo/).

## Working with API versions

When you create a new API in Postman, it also creates the initial version you entered during the API creation. You can create new versions from scratch or based on an existing version. Each API version has its own **API version** page, which you can find on the API Overview page or in the sidebar.

Learn more about [working with API versions](/docs/designing-and-developing-your-api/versioning-an-api/api-versions/).

## Working with API releases

A _release_ is a periodic incremental change to a version of an API. You regularly create a release to put out changes that have been made to the API. When you are connected to an external Git repo, releases can be mapped to the Git release tags.

Learn more about [working with API releases](/docs/designing-and-developing-your-api/versioning-an-api/api-releases/).

## Setting an API status

An API status is a text tag which you can change to indicate the current stage of the API version within your development cycle. For example, you can select a status such as "In Design," "Security Review," or "In Production." You can set different statuses for each version of an API.

A status doesn't affect visibility, permissions, or availability of an API. Instead, it's a way to tell others on your team the current state of the API. Statuses aren't automatically changed by any actions or state change in your files. You can change the status at any time.

By default, a new API's status is "In Planning". To set a new status, choose one from the dropdown list on the API's overview page.

Learn more about [setting an API status](/docs/designing-and-developing-your-api/versioning-an-api/api-statuses/).
