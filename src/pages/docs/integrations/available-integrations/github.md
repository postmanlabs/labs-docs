---
title: "GitHub"
updated: 2022-03-15
warning: false
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

Back up your Postman collections to GitHub, a cloud-based hosting service for Git repositories, with the Postman to GitHub integration.

Setting up a GitHub integration requires you to generate a GitHub personal access token and configure how you would like to back up your collections.

> To import data into Postman from a GitHub repository, see [Importing via GitHub repositories](/docs/getting-started/importing-and-exporting-data/#importing-via-github-repositories).

## Contents

* [API sync with GitHub](#api-sync-with-github)
* [Generating a GitHub personal access token](#generating-a-github-personal-access-token)
* [Backing up collections on GitHub](#backing-up-collections-on-github)
* [Backing up collections to GitHub on a custom domain](#backing-up-collections-to-github-on-a-custom-domain)
* [Troubleshooting the GitHub integration](#troubleshooting-the-github-integration)

## API sync with GitHub

Postman 9.0 introduced the ability to connect a Git repository to an API. Instead of using an integration, you can directly connect a GitHub repo to an API in the API Builder. This provides two-way sync of schemas and associated collections, plus adds features for syncing branches and release tags between Postman and your repo. For more information on the repo sync feature, see [Versioning APIs](/docs/designing-and-developing-your-api/versioning-an-api/).

## Generating a GitHub personal access token

To integrate with GitHub, you will need a GitHub personal access token.

1. Sign in to [GitHub](https://github.com/).
1. If you don’t already have a personal access token, [generate a new one](https://github.com/settings/tokens).
1. To enable backing up collections, make sure to select the `repo` and the `user` scopes.
1. Save the generated token to use later.

> For more information about generating a token, see the [GitHub documentation](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

## Backing up collections on GitHub

After you create the integration, any new changes to the collection in Postman will also appear in the GitHub repository.

1. From the **[Home](https://go.postman.co/home)** page select **[Integrations](https://go.postman.co/integrations)**.

    <img alt="Home page and integrations" src="https://assets.postman.com/postman-docs/home-integrations.jpg" width="500px">

1. Search and select **GitHub**.

    [![GitHub integration](https://assets.postman.com/postman-docs/integrations-github1.jpg)](https://assets.postman.com/postman-docs/integrations-github1.jpg)

1. Next to **Backup a collection**, select **Add Integration**.

1. Enter your GitHub **Personal Access Token** and select **Authenticate and Proceed**.

    <img alt="Access token" src="https://assets.postman.com/postman-docs/integrations-github-schema-pat.jpg" width="500px">

1. After Postman verifies the token, you can configure the integration:

   * Give the integration a nickname.
   * Select the workspace with the collection you want to back up.
   * Select a collection to back up.
   * Select the GitHub repository where you want to back up the collection.
   * Enter the directory where you want to push the collection. If the directory doesn't exist, Postman will create it for you. If you don't specify a directory, Postman will create a `Postman Collections` directory.
   * Enter the file name of the collection in the repository.
   * Enter the branch where you want to push the collection. The branch must already exist in your repository. If you don't specify a branch, Postman will push the collection to the default branch of the repository.

   <img alt="Configure GitHub integration" src="https://assets.postman.com/postman-docs/integrations-github-add.jpg" width="500px">

1. To finish setting up the integration, select **Add Integration**.

Every change saved to your Postman Collection automatically commits changes to your GitHub repo in JSON format. Go to your GitHub repository to view your collections.

<img alt="Github integrations screen" src="https://assets.postman.com/postman-docs/Github_Integrations5.png" style="border: 1px solid #4a4a4a">

## Backing up collections to GitHub on a custom domain

Follow the same steps as [backing up a collection](#backing-up-collections-on-github) with the following differences:

* After searching for the GitHub integration in Postman, select **Add Integration** next to **Backup a collection (custom domain)**.

* Along with your personal access token, enter your GitHub custom domain, then select **Authenticate and Proceed**.

   <img alt="GitHub custom domain" src="https://assets.postman.com/postman-docs/integrations-github-custom-domain-pat.jpg" width="500px">

* Configure the integration with your collection, repository, directory, file name, and branch.

* To finish setting up the integration, select **Add Integration**.

### Static IP support

If your network is behind a firewall that requires IP addresses from an allowlist, you must use a static IP address to enable collection backups to GitHub on a custom domain.

Contact your IT team to allowlist the following static IP in your firewall:

* US East: `3.212.102.200`

Once you allowlist this IP address, calls for this integration will be able to connect to your network and allow the integration to work as expected.

> GitHub Enterprise requires the ability to reach the above IP from the network where your GitHub Enterprise server instance is hosted. If your server instance is in a VPC, you may need to modify the network access control list or rules there.

## Troubleshooting the GitHub integration

If your GitHub integration has issues or your data isn't pushed to GitHub, check the following requirements:

* You added the GitHub integration in the same workspace as the content you want to push to the GitHub repo.
* You selected the correct GitHub integration in Postman. For example, if you use a [custom domain](#backing-up-collections-to-github-on-a-custom-domain), make sure you selected the **Backup a collection (custom domain)** integration.
* You initialized your GitHub repo with a `README.md` file. When creating a new repository, you can select the **Add a README file** check box.
* You selected the scopes `user` and `repo` when creating your GitHub [personal access token](#generating-a-github-personal-access-token).
* The branch you specified when setting up the integration already exists on GitHub. Postman won't create the branch if it doesn't already exist.
* You have permissions to push to the branch.
* If your enterprise version of GitHub is on-premises or self-hosted, check with your IT team for [firewall requirements](#static-ip-support).

Edit the integration to make any required changes. If the integration still doesn't work after you edit it, delete the integration and add it again.
