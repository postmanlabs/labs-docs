---
title: "GitHub"
order: 168
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

Postman enables you to back up your collections (for paid plans only) or synchronize your API schemas on GitHub. For each of these integrations, you'll need to [generate a GitHub personal access token](#generating-a-github-personal-access-token).

> If you are looking to import data into Postman from a GitHub repository, see [Importing via GitHub repositories](/docs/getting-started/importing-and-exporting-data/#importing-via-github-repositories).

* [Backing up collections on GitHub](#backing-up-collections-on-github)
* [Syncing API schemas on GitHub](#syncing-your-api-schemas-on-github)
* [Troubleshooting GitHub Sync](#troubleshooting-github-sync)

## Generating a GitHub Personal Access Token

In order to set up an integration, you will need a GitHub Personal Access Token.

1. Log in to [GitHub](https://github.com/).

1. If you don’t already have a Personal Access Token from GitHub, [generate a new one](https://github.com/settings/tokens).

1. For backing up your collections, select the `repo` and the `user` scope. For syncing your API schema, select only the `repo` scope.

   [![repo scope](https://assets.postman.com/postman-docs/WS-integrations-github-repo-scope.png)](https://assets.postman.com/postman-docs/WS-integrations-github-repo-scope.png)
   [![user scope](https://assets.postman.com/postman-docs/WS-integrations-github-user-scope.png)](https://assets.postman.com/postman-docs/WS-integrations-github-user-scope.png)

1. Once that token is generated, copy it and save it somewhere for future use.
   [![generated token](https://assets.postman.com/postman-docs/WS-integrations-github-generated-token.png)](https://assets.postman.com/postman-docs/WS-integrations-github-generated-token.png)

## Backing up collections on GitHub

 You can back up and sync your Postman collections with a GitHub repo. Once the integration is complete, any new changes to your collection in Postman will also appear in the repository.

 > Backing up collections on GitHub is available for Team, Business and Enterprise plans only.

1. From the **[Home](https://go.postman.co/home)** page select **[Integrations](https://go.postman.co/integrations)**.

    ![home page and integrations](https://assets.postman.com/postman-docs/home-integrations.jpg)

    Search and select **Github**.

    [![github integration](https://assets.postman.com/postman-docs/integrations-github1.jpg)](https://assets.postman.com/postman-docs/integrations-github1.jpg)

1. Next to **Backup a collection**, click **Add Integration** to authorize a backup of your Postman collections.

1. Enter your GitHub Personal Access Token and click the **Proceed** button.

   [![access token](https://assets.postman.com/postman-docs/integrations-github-schema-pat.jpg)](https://assets.postman.com/postman-docs/integrations-github-schema-pat.jpg)

1. Once the token is verified, you'll be able to configure the integration.

   [![configure](https://assets.postman.com/postman-docs/integrations-github-add.jpg)](https://assets.postman.com/postman-docs/integrations-github-add.jpg)

   * Give the integration a nickname.
   * Select a workspace containing the collection to back up.
   * Select a collection to back up.
   * Select the GitHub repository where it will be backed up.
   * Enter the directory where the collection will be pushed. If the directory does not exist, it will be created for you. If you do not specify anything, the default directory will be `Postman Collections`.
   * Enter the file name of the collection in the repository.
   * Enter the branch where the collection will be pushed. This branch must already exist in your repository. If you do not specify anything, it will be pushed to the default branch of the repository.

1. To finish, click **Add Integration**.

> Every change saved to your Postman Collection automatically commits changes to your GitHub repo in real time. You can navigate to your GitHub repository to view your collections.

[![github integrations screen](https://assets.postman.com/postman-docs/Github_Integrations5.png)](https://assets.postman.com/postman-docs/Github_Integrations5.png)

## Backing up collections to GitHub on a custom domain

Backing up collection to GitHub with a custom domain name is similar to the above, with the following differences.

1. From the initial GitHub integrations page, next to **Backup a collection (custom domain)**, click **Add Integration**.

1. In addition to your Personal Access Token, enter your GitHub Custom Domain, and click **Proceed**:

   [![access token custom](https://assets.postman.com/postman-docs/integrations-github-custom-domain-pat.jpg)](https://assets.postman.com/postman-docs/integrations-github-custom-domain-pat.jpg)

1. Complete the same steps as above to configure your collection, repository, directory, file name, and branch.

1. To finish, click **Add Integration**.

### Static IP Support

If your network is behind a firewall that requires whitelisted IP addresses, you will need to use a static IP address to enable collection backups to GitHub on custom domains.

Contact your IT team to whitelist the following static IP in your firewall to enable collection backups to GitHub:

* US East: `3.212.102.200`

Once you whitelist this IP address, calls for this integration will be able to connect to your network and allow the integration to work as expected.

## Syncing your API schemas on GitHub

Syncing your API schemas will enable a two-way sync between the schema stored in the GitHub repository and the schema on Postman.

Postman 9.0 introduced the ability to connect a git repository to an API. Previously, a GitHub integration would only sync API schemas. Now, you can connect your repo to an API directly in the API Builder. Not only does this add two-way sync of schemas, but also syncs associated collections, and adds powerful new features for syncing branches and release tags between Postman and your repo. For more information on the repo sync feature, see [Versioning APIs](/docs/designing-and-developing-your-api/versioning-an-api/).

> If you previously added two-way sync for an API schema, it will continue to function in the future. But you can't add a new sync, and if you want to use the new API-level sync, you must delete the old one first.

## Troubleshooting GitHub Sync

If you're having issues with your GitHub integration and find your data isn't syncing to GitHub, please ensure that the following requirements are in place:

* The GitHub integration has been added to the same workspace as the content you're trying to push to the GitHub repo.
* The correct option has been chosen when setting up your integration and selecting __Backup your Postman Collections to GitHub__, for example if you're using a custom domain.
* Your repo has been initialized with a `Readme.md` file. Check the box __Initialize this repository with a README__ and then configure a new integration on it.
* The scopes `user` and `repo` are selected when creating the access token on GitHub.
* The branch specified in the setup already exists on GitHub. _The integration will not create one if the branch doesn't exist._
* You have permissions to push to the branch.
* If all else fails, try reinstalling the integration.

> If your enterprise version of GitHub is on-premises / self-hosted, this may be a firewall issue.
