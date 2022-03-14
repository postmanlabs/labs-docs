---
title: "GitHub"
order: 168
updated: 2022-03-14
page_id: "github"
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
    name: "Related Blog posts"
  - type: link
    name: "Syncing Your OpenAPI, RAML, and GraphQL Schema to GitHub with Postman"
    url:  "https://blog.postman.com/syncing-your-openapi-raml-and-graphql-schema-to-github-with-postman/"
  - type: link
    name: "How to Auto-Sync Postman Collections with AWS CodeCommit Repositories"
    url:  "https://blog.postman.com/how-to-auto-sync-postman-collections-with-aws-codecommit-repositories/"
---

> __[GitHub Enterprise Server integrations are only available on Postman Enterprise plans.](https://www.postman.com/pricing)__

Back up your Postman collections to GitHub, a cloud-based hosting service for Git repositories, with the Postman to GitHub integration.

Setting up a GitHub integration requires you to generate a GitHub personal access token and configure how you would like to back up your collections.

> To import data into Postman from a GitHub repository, see [Importing via GitHub repositories](/docs/getting-started/importing-and-exporting-data/#importing-via-github-repositories).

## Contents

* [API sync with GitHub](#api-sync-with-github)
* [Generating a GitHub Personal Access Token](#generating-a-github-personal-access-token)
* [Backing up collections on GitHub](#backing-up-collections-on-github)
* [Backing up collections to GitHub on a custom domain](#backing-up-collections-to-github-on-a-custom-domain)
* [Troubleshooting GitHub Sync](#troubleshooting-github-sync)

## API sync with GitHub

Postman 9.0 introduced the ability to connect a git repository to an API. Instead of using an integration, you can directly connect a GitHub repo to an API in the API Builder. This provides two-way sync of schemas and associated collections, plus adds powerful new features for syncing branches and release tags between Postman and your repo. For more information on the new repo sync feature, see [Versioning APIs](/docs/designing-and-developing-your-api/versioning-an-api/).

## Generating a GitHub Personal Access Token

To integrate with GitHub, you will need a GitHub Personal Access Token.

1. Log in to [GitHub](https://github.com/).

1. If you don’t already have a personal access Token, [generate a new one](https://github.com/settings/tokens).

1. To enable backing up collections, select the `repo` and the `user` scopes.

   [![repo scope](https://assets.postman.com/postman-docs/WS-integrations-github-repo-scope.png)](https://assets.postman.com/postman-docs/WS-integrations-github-repo-scope.png)

   [![user scope](https://assets.postman.com/postman-docs/WS-integrations-github-user-scope.png)](https://assets.postman.com/postman-docs/WS-integrations-github-user-scope.png)

1. Save the generated token to use later.

   <img alt="Generated token" src="https://assets.postman.com/postman-docs/WS-integrations-github-generated-token.png" width="100%" style="border: 1px solid #4a4a4a">

## Backing up collections on GitHub

 You can back up a Postman collection to a GitHub repository. After you create the integration, any new changes to the collection in Postman will also appear in the GitHub repository.

1. From the **[Home](https://go.postman.co/home)** page select **[Integrations](https://go.postman.co/integrations)**.

    ![home page and integrations](https://assets.postman.com/postman-docs/home-integrations.jpg)

1. Search and select **GitHub**.

    [![github integration](https://assets.postman.com/postman-docs/integrations-github1.jpg)](https://assets.postman.com/postman-docs/integrations-github1.jpg)

1. Next to **Backup a collection**, select **Add Integration**.

1. Enter your GitHub **Personal Access Token** and select **Authenticate and Proceed**.

   [![access token](https://assets.postman.com/postman-docs/integrations-github-schema-pat.jpg)](https://assets.postman.com/postman-docs/integrations-github-schema-pat.jpg)

1. After the token is verified, you can configure the integration:

   * Give the integration a nickname.
   * Select the workspace with the collection you want to back up.
   * Select a collection to back up.
   * Select the GitHub repository where you want to back up the collection.
   * Enter the directory where you want to push the collection. If the directory doesn't exist, Postman will create it for you. If you do not specify a directory, Postman will create a `Postman Collections` directory.
   * Enter the file name of the collection in the repository.
   * Enter the branch where you want to push the collection. The branch must already exist in your repository. If you do not specify a branch, Postman will push the collection to the default branch of the repository.

   [![configure](https://assets.postman.com/postman-docs/integrations-github-add.jpg)](https://assets.postman.com/postman-docs/integrations-github-add.jpg)

1. To finish setting up the integration, select **Add Integration**.

Every change saved to your Postman collection automatically commits changes to your GitHub repo in JSON format. Navigate to your GitHub repository to view your collections.

<img alt="Github integrations screen" src="https://assets.postman.com/postman-docs/Github_Integrations5.png" width="100%" style="border: 1px solid #4a4a4a">

## Backing up collections to GitHub on a custom domain

Backing up collection to GitHub with a custom domain name is similar to the above, with the following differences.

1. From the initial GitHub integrations page, next to **Backup a collection (custom domain)**, select **Add Integration**.

1. In addition to your Personal Access Token, enter your GitHub Custom Domain, and select **Proceed**:

   [![access token custom](https://assets.postman.com/postman-docs/integrations-github-custom-domain-pat.jpg)](https://assets.postman.com/postman-docs/integrations-github-custom-domain-pat.jpg)

1. Complete the same steps as above to configure your collection, repository, directory, file name, and branch.

1. To finish, select **Add Integration**.

### Static IP support

If your network is behind a firewall that requires IP addresses from an allowlist, you will need to use a static IP address to enable collection backups to GitHub on custom domains.

Contact your IT team to allowlist the following static IP in your firewall to enable collection backups to GitHub:

* US East: `3.212.102.200`

Once you allowlist this IP address, calls for this integration will be able to connect to your network and allow the integration to work as expected.

## Troubleshooting GitHub sync

If you're having issues with your GitHub integration and find your data isn't syncing to GitHub, please ensure that the following requirements are in place:

* The GitHub integration has been added to the same workspace as the content you're trying to push to the GitHub repo.
* The correct option has been chosen when setting up your integration and selecting __Backup your Postman Collections to GitHub__, for example if you're using a custom domain.
* Your repo has been initialized with a `Readme.md` file. Check the box __Initialize this repository with a README__ and then configure a new integration on it.
* The scopes `user` and `repo` are selected when creating the access token on GitHub.
* The branch specified in the setup already exists on GitHub. _The integration will not create one if the branch doesn't exist._
* You have permissions to push to the branch.
* If all else fails, try reinstalling the integration.

> If your enterprise version of GitHub is on-premises / self-hosted, this may be a firewall issue.
