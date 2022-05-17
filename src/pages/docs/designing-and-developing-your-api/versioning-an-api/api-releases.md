---
title: 'Working with API releases'
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

A _release_ is a periodic incremental change to a version of an API. You regularly create a release to put out changes that have been made to the API. Releases can have semantic version names (`3.2.0-beta`) or can be named dynamically (`2021-12-25`, `Q4 Security Update`).

When you are connected to an external Git repo, releases can be mapped to the Git release tags.

## Viewing releases

Releases are shown on the **API version** page, on the **Overview** tab. Select a release date to open that release's page.

<img src="https://assets.postman.com/postman-docs/api-builder-releases-v9-16.jpg" alt="API Builder releases" width="350px"/>

Each release page shows a read-only view of the schema, documentation, and tests associated with that release. You can't make changes to a released API. If you have more entity changes, you can create another release.

## Creating a release

To create a release:

1. If you are using an external Git repo, create a release in Git first by merging changes from your develop branch to the main branch, and creating a release tag.
1. Select the changelog icon (<img alt="Changelog icon" src="https://assets.postman.com/postman-docs/icon-changelog.jpg" width="25px" style="vertical-align:middle;margin-bottom:0px">) in the sidebar. The Changelog will show changes to the API version's schema and associated elements.
1. Select **+ Create Release**.
1. Enter the release name and summary. The summary can be up to 140 characters.
1. Optionally, enter release notes for the release. Use the editor to enter a long-form description of the release, which can include headings, lists, tables, images, code blocks and other formatting.
1. If you are using an external Git repo, select a tag in **Git release**.
1. Select **Make this version available for consumers** if you want the new version to be visible. Otherwise, it's only visible to users with Editor access to the API.
1. Select **Create Release**. You will be taken to a new page for the release.

You can edit a release name in the Changelog. Next to the release, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px">, then select **Edit**. You can also edit a release's summary and release notes from the release page, either in the edit dialog, or by selecting the description or release notes in the overview.
