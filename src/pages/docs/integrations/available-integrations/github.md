---
title: "GitHub"
updated: 2022-11-29
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Grouping requests in collections"
    url: "/docs/sending-requests/intro-to-collections/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "Syncing Your OpenAPI, RAML, and GraphQL Schema to GitHub with Postman"
    url:  "https://blog.postman.com/syncing-your-openapi-raml-and-graphql-schema-to-github-with-postman/"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Reputation"
    url: "https://www.postman.com/case-studies/reputation/"

---

> **[GitHub Enterprise Server integrations are available on Postman Enterprise plans.](https://www.postman.com/pricing)**

Back up your Postman collections to GitHub, a cloud-based hosting service for Git repositories, with the Postman to GitHub integration. You can also backup collections to a custom domain on GitHub Enterprise Server.

Setting up a GitHub integration requires you to generate a GitHub personal access token and configure how you would like to back up your collections.

> To import data into Postman from a GitHub repository, see [Importing from GitHub repositories](http://localhost:8000/docs/getting-started/importing-and-exporting-data/#importing-from-github-repositories).

## Contents

* [API sync with GitHub](#api-sync-with-github)
* [Generating a GitHub personal access token](#generating-a-github-personal-access-token)
* [Backing up collections to GitHub](#backing-up-collections-to-github)
* [Backing up collections to GitHub Enterprise Server](#backing-up-collections-to-github-enterprise-server)
* [Troubleshooting the GitHub integration](#troubleshooting-the-github-integration)

## API sync with GitHub

With Postman v10, you can connect a GitHub repository to an API in the API Builder. Once connected, you can sync your API's definition and associated collections between Postman and GitHub. You can switch branches, pull changes from the repository, and push changes to the repository, all from within Postman. To learn more about syncing your API with GitHub, see [Versioning APIs](/docs/designing-and-developing-your-api/versioning-an-api/).

## Generating a GitHub personal access token

To integrate with GitHub, you need a GitHub personal access token.

1. Sign in to [GitHub](https://github.com/).
1. If you don’t already have a personal access token, [generate a new one](https://github.com/settings/tokens). You can use a classic token or a [fine-grained token](https://github.blog/2022-10-18-introducing-fine-grained-personal-access-tokens-for-github/).

    * **Classic token** - Make sure to select the `repo` and `user` scopes.
    * **Fine-grained token** - Make sure the token has access to the repository you want to back up to and has the following Repository permissions: `Contents (Read and write)` and `Metadata (Read-only)`.

1. Save the generated token to use later.

> For more information about generating a token, see the [GitHub documentation](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

## Backing up collections to GitHub

 You can back up a Postman collection to a GitHub repository. After you create the integration, any new changes to the collection in Postman will also appear in the GitHub repository.

1. From the **[Home](https://go.postman.co/home)** page select **[Integrations](https://go.postman.co/integrations)**.

    <img alt="Home page and integrations" src="https://assets.postman.com/postman-docs/v10/home-integrations-v10.jpg" width="390px">

1. Search and select **GitHub**.

    <img alt="GitHub integration" src="https://assets.postman.com/postman-docs/v10/integrations-github-v10.jpg" />

1. Next to **Backup a collection**, select **Add Integration**.

1. Enter your GitHub **Personal Access Token** and select **Authenticate and Proceed**.

    <img alt="GitHub integration" src="https://assets.postman.com/postman-docs/v10/integrations-github-authenticate-v10.jpg" width="515px" />

1. After Postman verifies the token, you can configure the integration:

   * Give the integration a nickname.
   * Select the workspace with the collection you want to back up.
   * Select a collection to back up.
   * Select the GitHub repository where you want to back up the collection.
   * Enter the directory where you want to push the collection. If the directory doesn't exist, Postman will create it for you. If you don't specify a directory, Postman will create a `Postman collections` directory.
   * Enter the file name of the collection in the repository.
   * Select the branch where you want to push the collection. The branch must already exist in your repository. If you don't specify a branch, Postman will push the collection to the default branch of the repository.

   <img alt="Configure GitHub integration" src="https://assets.postman.com/postman-docs/v10/integrations-github-add-v10.jpg" width="507px">

1. To finish setting up the integration, select **Add Integration**.

Every change saved to your Postman collection automatically commits changes to your GitHub repository in JSON format. Go to your GitHub repository to view your collections.

<img alt="Collection backup in GitHub" src="https://assets.postman.com/postman-docs/v10/integrations-github-repo-v10.jpg" />

## Backing up collections to GitHub Enterprise Server

You can back up a Postman collection to a GitHub Enterprise Server repository on a custom domain. Follow the same step as [backing up collections to GitHub](#backing-up-collections-to-github) with the following differences:

1. After searching for the GitHub integration in Postman, select **Add Integration** next to **Backup a collection (custom domain)**.

1. Along with your personal access token, enter the custom domain of your enterprise server (for example, `https://my-git-server.example.com`). Then select **Authenticate and Proceed**.

   <img alt="GitHub custom domain" src="https://assets.postman.com/postman-docs/v10/integrations-github-custom-domain-v10.jpg" width="515px">

1. Configure the integration with your collection, repository, directory, file name, and branch.

1. To finish setting up the integration, select **Add Integration**.

### Static IP support

If your network is behind a firewall, you must allowlist a static IP address to enable collection backups to GitHub Enterprise Server on a custom domain.

Contact your IT team to allowlist the following static IP in your firewall:

* US East: `3.212.102.200`

Once you allowlist this IP address, the collection backup integration will be able to connect to your private network.

> The **Backup a collection (custom domain)** integration requires the ability to reach the static IP address `3.212.102.200` from the network where your GitHub Enterprise Server instance is hosted. If your server instance is in a VPC, you may need to change the VPC's network access control list or rules.

## Troubleshooting the GitHub integration

If your GitHub integration has issues or your data isn't pushed to GitHub, make sure you've met the following requirements:

* You added the GitHub integration in the same workspace as the content you want to push to the GitHub repository.
* You selected the correct GitHub integration in Postman. For example, if you use [GitHub Enterprise Server on a custom domain](#backing-up-collections-to-github-enterprise-server), make sure you selected the **Backup a collection (custom domain)** integration.
* You initialized your GitHub repository with a `README.md` file. When creating a new repository, you can select the **Add a README file** check box.
* You selected the correct permissions when creating your GitHub [personal access token](#generating-a-github-personal-access-token):

    * **Classic token** - Make sure to select the `repo` and `user` scopes.
    * **Fine-grained token** - Make sure the token has access to the repository you want to back up to and has the following Repository permissions: `Contents (Read and write)` and `Metadata (Read-only)`.

* The branch you specified when setting up the integration already exists on GitHub. Postman won't create the branch if it doesn't already exist.
* You have permissions to push to the branch.
* If your instance of GitHub Enterprise Server is on-premises or self-hosted, check with your IT team for [firewall requirements](#static-ip-support).

Edit the integration to make any required changes. If the integration still doesn't work after you edit it, delete the integration and add it again.
