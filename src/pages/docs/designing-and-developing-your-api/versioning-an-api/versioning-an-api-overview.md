---
title: 'API version control overview'
updated: 2022-09-15
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "API development overview"
    url: "/docs/designing-and-developing-your-api/the-api-workflow/"
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
    url: "/docs/designing-and-developing-your-api/developing-an-api/validating-elements-against-schema/"
---

> **[GitHub Enterprise Server, GitLab Self-Managed, and Azure DevOps Server (hosted on-premises) integrations are available on Postman Enterprise plans.](https://www.postman.com/pricing)**

Postman enables you to use Git-based version control for developing and managing changes to your API. You can connect your API to a remote GitHub, Bitbucket, GitLab, or Azure DevOps repository. The remote repository can be hosted in the cloud or on-premises.

Once your API is connected to a repository, you can switch branches, pull changes from the repository, and push changes to the repository, all from within Postman. When you're ready to share your changes with consumers, you can publish a version of your API to the Private API Network.

> API version control with Git is different than using version control for collections in Postman. Learn more about [using version control for collections](/docs/collaborating-in-postman/using-version-control/version-control-overview/).

## Contents

* [API version control workflow](#api-version-control-workflow)
* [Using a remote Git repository](#using-a-remote-git-repository)
* [Managing changes using Git](#managing-changes-using-git)
* [Publishing an API version](#publishing-an-api-version)

## API version control workflow

Here's a typical workflow for API-first development with a connected repository:

1. Create an API in Postman.
1. Connect the API to a remote repository.
1. In Postman, select an active branch. Make changes to the API definition and associated collections, then commit and push the changes to the remote repository.

    > You can also make changes in the Git repository using other tools or editors. For example, developers can follow a Git workflow by working on feature branches, then creating pull requests to merge them into the default branch.

1. Periodically pull from the remote repository to bring changes others have made into Postman, and resolve conflicts if there are any issues.
1. In Postman, publish a new version to make the changes available to your API's consumers.

## Using a remote Git repository

You can connect your API to a GitHub, Bitbucket, GitLab, or Azure DevOps repository. Once connected, you can sync your API definition and associated collections in Postman with the remote repository.

Learn more about [using a remote Git repository](/docs/designing-and-developing-your-api/versioning-an-api/using-external-git-repo/).

## Managing changes using Git

After you've connected your API to a remote repository, you can perform common Git actions from within Postman. You can work on multiple branches, and Postman tracks the changes you make to your API definition and associated collections. At any time you can push your changes to the repository or pull changes into Postman.

Learn more about [managing changes using Git](/docs/designing-and-developing-your-api/versioning-an-api/managing-git-changes/).

## Publishing an API version

When you're ready to share the latest changes to your API with consumers, you can publish a version. Publishing a version creates a static representation of your API that consumers can view on the Private API Network.

Learn more about [publishing an API version](/docs/designing-and-developing-your-api/versioning-an-api/api-versions/).
