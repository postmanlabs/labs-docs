---
title: 'Using a local Git repository'
updated: 2022-09-15
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Using the API Builder"
    url: "/docs/designing-and-developing-your-api/the-api-workflow/"
  - type: link
    name: "Streamline the API Development Lifecycle with Postman Version Control"
    url: "https://blog.postman.com/streamline-api-development-lifecycle-with-postman-version-control/"
  - type: link
    name: "Better Practices for Git Version Control in Postman"
    url: "https://blog.postman.com/better-practices-for-git-version-control-in-postman/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Validating elements against schema"
    url: "/docs/designing-and-developing-your-api/validating-elements-against-schema/"
---

You can connect an API in Postman to a Git repository on your local development system. Postman supports connecting to GitHub, Bitbucket, GitLab, GitLab Self-Managed, or Azure DevOps repositories.

After connecting to a local repository, you can complete your local API development workflow using Postman. Create branches to work on new features, pull the latest changes, and resolve any conflicts. Use your collections, environments, and other resources on your local system to help implement and test your endpoints. Once you've verified the new features locally, commit and push your changes to the remote repository and create a pull request.

> **You must connect your API to a remote Git repository before you can connect to a local repository.** The remote repository must be the origin of the local repository you are connecting to. Learn more about [connecting to a remote Git repository](/docs/designing-and-developing-your-api/versioning-an-api/using-external-git-repo/).

## Contents

* [Connecting to a local repository](#connecting-to-a-local-repository)
* [Disconnecting a local repository](#disconnecting-a-local-repository)
* [Next steps](#next-steps)

## Connecting to a local repository

You can connect an API in Postman to a Git repository on your local system. After connecting, you can use Postman to create and switch branches, commit and pull changes, and manage pull requests.

<!-- TO DO: VERIFY STEPS, ADD SCREENSHOT -->

1. If you haven't done so already, [connect your API to a remote repository](/docs/designing-and-developing-your-api/versioning-an-api/using-external-git-repo/). Make sure the remote repository is the origin of the local repository you want to connect to.
1. Select **APIs** in the sidebar and then select an API.
1. Select the branch dropdown menu next to the API and select **Link local repository**.
1. Select the root folder of your local Git repository and select **Open**.
1. Select **Connect** to link the local repository to your API.

## Disconnecting a local repository

After you disconnect a local repository, you can no longer work with your local files in Postman. The connection to your remote repository won't be affected.

<!-- TO DO: VERIFY STEPS, ADD SCREENSHOT -->

1. Select **APIs** in the sidebar and then select an API.
1. Select the branch dropdown menu next to the API and select **Disconnect local repository**.

## Next steps

Now that you've connected a local repository to your API, you can:

<!-- TO DO: ADD LINKs -->

* Work with branches, push and pull changes, and create pull requests. Learn more about managing changes.
* Publish an API version to a workspace or the Private API Network. Learn more about publishing an API version.
* Sync your changes to a Postman workspace. Learn more about syncing your API with Postman.
