---
title: 'Using a remote Git repository'
updated: 2022-09-15
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "API version control overview"
    url: "/docs/designing-and-developing-your-api/versioning-an-api/versioning-an-api-overview/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Postman | How to Connect to Your Git Repository"
    url: "https://youtu.be/8jJHXLVYOh0"
  - type: link
    name: "Git Workflows in Postman | The Exploratory"
    url: "https://youtu.be/cB7mCuYeuAU"
  - type: link
    name: "Integrating GitLab in Postman's API Builder"
    url: "https://youtu.be/ecAQv9gZEKk"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "Announcing Postman’s Redesigned API Builder with Native Git Support"
    url: "https://blog.postman.com/announcing-postmans-redesigned-api-builder-with-native-git-support/"
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

You can connect a GitHub, Bitbucket, GitLab, or Azure DevOps repository to your API to sync your API definitions and collections between Postman and the repository.

After connecting, you can push and pull changes between Postman and branches in the remote repository. When it's time to release, you can publish an API version to make your changes available to consumers.

## Contents

* [Connecting to a repository](#connecting-to-a-repository)
    * [Connecting to a cloud-hosted repository](#connecting-to-a-cloud-hosted-repository)
    * [Connecting to an on-premises repository](#connecting-to-an-on-premises-repository)
* [Disconnecting a remote repository](#disconnecting-a-remote-repository)
* [Next steps](#next-steps)

## Connecting to a repository

You can connect an API in Postman to your remote Git-based repository. This enables you to sync changes between the repository and Postman.

Keep in mind the following when connecting to a repository:

* **The user account used for authentication requires full access to repositories.** You may want to create a service account with limited permissions for this integration.

* **You can connect an API to one remote repository.** You can't connect an API to more than one repository, and you can't connect more than one API to the same repository.

* **For Azure DevOps connections, make sure to enable third-party application access for your organization.** If you don't enable third-party access, Postman won't be able to connect to your repository. In Azure DevOps, go to your [organization settings](https://docs.microsoft.com/en-us/azure/devops/organizations/accounts/change-application-access-policies?view=azure-devops), select **Policies**, and turn on the toggle next to **Third-party application access via OAuth**.

* **For GitHub connections, there's a limit of ten auth tokens per user per application imposed by GitHub.** If you create more than ten connections with the same user, the additional tokens will be revoked in the order that they were created. Teams can use other Postman accounts to create more than ten integrations.

    > If you used the earlier standalone GitHub integration for two-way sync of an API definition, you must delete the previous integration to connect a repository to your API. An existing integration will continue to function, but you can't add new integrations for two-way sync to an API definition.

### Connecting to a cloud-hosted repository

To connect a GitHub, Bitbucket, GitLab, or Azure DevOps repository hosted in the cloud, do the following:

1. Select **APIs** in the sidebar and select an API.
1. Under **Connect repository**, select **Connect** and select the type of repository you want to connect to.
1. A browser tab opens asking you to log in to your repository. Follow the onscreen instructions. When you're finished, close the browser tab and return to Postman.
1. On the **Connect your repository** page, enter the **Organization** or **Workspace** and the **Repository** where the API will be stored. (For GitLab, **Organization** refers to a **Group**, and **Repository** refers to a **Project**.)
1. Select the **Active branch** for the API. Any changes you make in Postman are stored in the active branch. (You can switch to another branch to make it the active branch at any time.)
1. Select an **API schema directory** and **Collection directory** where API definitions and collections will be stored in the repository. Keep in mind the following:

    * If you leave these fields blank, a `postman/schemas` or `postman/collections` directory will be created in the root of the repository.
    * If you select a directory already containing API definitions, you will be asked which definition to use in Postman the first time you pull changes.
    * The collection directory can't be a parent or the child of the schema directory.

1. Select **Connect Repository**.

<img alt="Connecting to a cloud-hosted repo" src="https://assets.postman.com/postman-docs/v10/api-builder-remote-repo-v10.jpg" width ="562px"/>

### Connecting to an on-premises repository

<!--
> Use the [Postman desktop app](/docs/getting-started/installation-and-updates/) to connect to an on-premises Git repository. You can't use the [Postman web app](https://learning.postman.com/docs/getting-started/installation-and-updates/#using-the-postman-web-app).-->

> Your repository must be able to reach the IP address mentioned in [static IP support](/docs/integrations/intro-integrations/#static-ip-support). Contact your IT team to allowlist the appropriate IP address.

To connect an GitHub Enterprise Server, GitLab Self-Managed, or Azure DevOps Server repository hosted on-premises, do the following:

1. Select **APIs** in the sidebar and select an API.
1. Under **Connect repository**, select **Connect** and select the type of repository you want to connect to.
1. Enter the **Domain URL** of your repository. Use the base URL of your enterprise server, for example: `https://my-git-server.example.com`
1. Enter a **Personal access token** to access the repository. Ensure that the token has the required permissions as specified on the **Connect repository** page.
1. Select **Authenticate**.
1. Select an **API schema directory** and **Collection directory** where API definitions and collections will be stored in the repository. Keep in mind the following:

    * If you leave these fields blank, a `postman/schemas` or `postman/collections` directory will be created in the root of the repository.
    * If you select a directory already containing API definitions, you will be asked which definition to use in Postman the first time you pull changes.
    * The collection directory can't be a parent or the child of the schema directory.

1. Select **Connect Repository**.

## Disconnecting a remote repository

After you disconnect a remote repository, you can no longer sync changes between Postman and the repository.

1. Select **APIs** in the sidebar and select an API.
1. Select the source control icon <img alt="Git branch icon" src="https://assets.postman.com/postman-docs/icon-source-control.jpg#icon" width="16px"/> in the right sidebar.
1. In the **Source Control** pane, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> and select **Disconnect repository from Postman**.
1. Enter the name of the API to confirm, then select **Disconnect**.

## Next steps

After you've connected a remote repository to your API, you can:

* Work with branches, push and pull changes, and resolve conflicts. Learn more about [managing changes using Git](/docs/designing-and-developing-your-api/versioning-an-api/managing-git-changes/).
* Publish an API version to a workspace or the Private API Network. Learn more about [publishing an API version](/docs/designing-and-developing-your-api/versioning-an-api/api-versions/).
