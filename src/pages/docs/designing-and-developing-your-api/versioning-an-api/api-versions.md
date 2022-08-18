---
title: 'Publishing an API version'
updated: 2022-09-15
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

When you create a new API in Postman, it also creates the initial version you entered during the API creation. You can create new versions from scratch or based on an existing version. Each API version has its own **API version** page, which you can find on the API Overview page or in the sidebar.

## Creating versions

To create a new version of an API:

1. Go to the API **Overview** page. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> in the upper right corner and select **Create version**.
1. Enter a version name.
1. If you want to base this version on existing elements, select **Show more options**. In **Copy elements from a previous version**, choose a previous version of the API. Then select the elements you want to copy to your new API.
    > Copying an element creates a new copy in your workspace. The new element will have the new version number appended to its name, such as `my-docs-2.0.0`. The new elements will be linked to the new version of the API.
1. Select __Create Version__. Your new version will open in the API Builder.

## Renaming and deleting versions

You can rename, edit, or delete an API version using the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> in the sidebar. Editing an API enables you to change the name and status.

   > When you delete an API version, the collections, monitors, mocks, and environments linked to it won't be deleted or removed.
