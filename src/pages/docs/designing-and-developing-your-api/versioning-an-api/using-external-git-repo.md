---
title: 'Using an external Git repository'
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

You can connect a GitHub, Bitbucket, GitLab, or Azure DevOps repository to your API to sync your API definitions and collections between Postman and the repository.

After connecting, you can push and pull changes between Postman and branches in the remote repository. When it's time to release, you can merge your changes to the default branch in the remote repository. You can then publish an API version to make your changes available to consumers.

Here's a typical workflow for API-first development with a remote repository:

1. Create an API in Postman. Set the API's status to indicate it's in progress (for example, `Planning` or `In Development`).
1. Connect the API to a remote repository.
1. In Postman, select an active branch. Make changes to the API definition and associated collections, then commit and push the changes to the remote repository.

    > You can also make changes to API definitions and collections using other tools or editors. Developers can follow a Git workflow by working on feature branches, then creating pull requests to merge them into the default branch.

1. Periodically pull from the remote repository to get changes others have made into Postman, and resolve conflicts if there are any issues.
1. Review changes on your active branch, then merge them to the default branch in the remote repository. (You can set API's status in Postman to `Code Review` or `Security Review` during this stage.)
1. In Postman, publish a new version to make the changes available to your API's consumers.

## Connecting a repository

You can connect an API in Postman to your remote Git-based repository. This enables you to synchronize changes between the repository and Postman.

Keep in mind the following when connecting to a repository:

* **The user account used for authentication requires full access to repositories.** You may want to create a service account with limited permissions specifically for this integration.

* **You can connect an API to one remote repository.** You can't connect more than one API to the same repo, and you can't connect an API to more than one repo.

* **Enterprise repositories hosted on-premises require setting up local Git integration.** With local Git integration, you develop and test your API locally. When you're ready to share your work, push your changes to the remote repository. Learn more about [connecting to a local Git repository](/docs/designing-and-developing-your-api/versioning-an-api/using-local-git-repo/).

* **For Azure DevOps connections, make sure to enable third-party application access for your organization.** If you don't enable third-party access, Postman won't be able to connect to your repo. In Azure DevOps, go to your [organization settings](https://docs.microsoft.com/en-us/azure/devops/organizations/accounts/change-application-access-policies?view=azure-devops), select **Policies**, and turn on the toggle next to **Third-party application access via OAuth**.

* **For GitHub connections, there's a limit of ten auth tokens per user per application imposed by GitHub.** If you create more than ten connections with the same user, the additional tokens will be revoked in the order that they were created. Teams can use other Postman accounts to create more than ten integrations.

    > If you used the earlier standalone GitHub integration for two-way sync of an API schema, you must delete the previous integration to connect a repo to your API. An existing integration will continue to function, but you can't add new integrations for two-way sync to an API schema.

## Connecting a cloud-hosted repository

To connect a GitHub, Bitbucket, GitLab, or Azure DevOps repository hosted in the cloud:

1. Select **APIs** in the sidebar and then select an API.
1. Select **Connect Repository** and select the type of repository you want to connect to.
1. A browser tab opens asking you to log in to your repository. Follow the onscreen instructions. When you're finished, close the browser tab and return to Postman.
1. On the **Connect your repository** page, enter the **Organization** and **Repository** where the API will be stored. (For GitLab, **Organization** refers to a **Group**, and **Repository** refers to a **Project**.)
1. Enter the **Active branch** for the API. Any changes you make are stored in the active branch. (You can switch to another branch to make it the active branch at any time.)
1. Select an **API schema directory** and **Collection directory** where schemas and collections will be stored in the repo. If you leave these blank, a `postman/schemas` or `postman/collections` directory will be created in the root of the repo. If you select a directory already containing schemas, you will be asked which schema to use in Postman the first time you pull changes.
1. Select **Connect Repository**.

## Connecting to an on-premises repository:

To connect an GitHub Enterprise Server, GitLab Self-Managed, or Azure DevOps Server repository hosted on-premises:

1. Select **APIs** in the sidebar and then select an API.
1. Select **Connect Repository** and select the type of repository you want to connect to.
1. Enter the **Domain URL** for your repository.
1. Under **Local File System**, select **Select Folder**. Select the root folder of your local Git repository and select **Open**.
1. Select an **API schema directory** and **Collection directory** where schemas and collections will be stored in the repo. If you leave these blank, a `postman/schemas` or `postman/collections` directory will be created in the root of the repo. If you select a directory already containing schemas, you will be asked which schema to use in Postman the first time you pull changes.
1. Select **Connect Repository**.

## Next steps

After you've connected a remote repository to your API, you can:

<!-- TO DO: ADD LINKs -->

* Connect to a Git repository on your local development system. Learn more about [using a local Git repository](/docs/designing-and-developing-your-api/versioning-an-api/using-local-git-repo/).
* Work with branches, push and pull changes, and resolve conflicts. Learn more about [managing changes using Git](/docs/designing-and-developing-your-api/versioning-an-api/managing-git-changes/).
* Publish an API version to a workspace or the Private API Network. Learn more about publishing an API version.
* Sync your changes to a Postman workspace. Learn more about syncing your API with Postman.
