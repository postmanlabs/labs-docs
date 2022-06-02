---
title: "GitLab"
order: 169
page_id: "gitlab"
updated: 2021-11-15
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Grouping requests in collections"
    url: "/docs/sending-requests/intro-to-collections/"
---

> __[GitLab Self-Managed integrations are only available on Postman Enterprise plans.](https://www.postman.com/pricing)__
>
Back up your Postman Collections to GitLab, an open-source Git repository manager, with the Postman to GitLab integration.

Setting up a GitLab integration requires you to get a GitLab Personal Access Token and configure how you would like to back up your collections.

## API sync with GitLab

Postman 9.0 introduced the ability to connect a git repository to an API. Instead of using an integration, you can directly connect a GitLab repo to an API in the API Builder. This provides two-way sync of schemas and associated collections, plus adds features for syncing branches and release tags between Postman and your repo. For more information on the repo sync feature, see [Versioning APIs](/docs/designing-and-developing-your-api/versioning-an-api/).

## Generating a GitLab Personal Access Token

1. Sign in to [GitLab](https://about.gitlab.com/).

1. If you don’t already have a Personal Access Token from GitLab, [generate a new one](https://gitlab.com/-/profile/personal_access_tokens).

   ![gitlab create token](https://assets.postman.com/postman-docs/gitlab-create-token.jpg)

1. Save the generated token to use later.

   ![gitlab save token](https://assets.postman.com/postman-docs/gitlab-save-token.jpg)

## Configuring a backup for Postman collections in GitLab

1. From the **[Home](https://go.postman.co/home)** page select **[Integrations](https://go.postman.co/integrations)**.

1. Search and select **GitLab**.

1. You can select **View** or **View All** to see all integrations created by your team.

   ![gitlab add integration](https://assets.postman.com/postman-docs/gitlab-add-integration.jpg)

The above screen provides you the following two options:

* [Back up your Postman Collections to GitLab](#back-up-your-postman-collections-to-gitlab)
* [Back up your Postman Collections to GitLab on a custom domain](#back-up-your-postman-collections-to-gitlab-on-a-custom-domain)

## Back up your Postman Collections to GitLab

1. Select **Add Integration** to enter your GitLab token to start the integration.

   ![enter gitlab token](https://assets.postman.com/postman-docs/gitlab-backup-collection-authenticate.jpg)

1. Enter your GitLab Personal Access Token and select **Authenticate and Proceed**.

1. Choose an existing Postman Collection and your GitLab Project, and enter a filename for your backup.

1. In **Advanced Options** you can enter a custom directory name or leave `Postman Collections` as the default. You can specify a branch for commit or the default branch of the repository will be used.

    ![gitlab integration configuration](https://assets.postman.com/postman-docs/gitlab-backup-collection-configuration.jpg)

1. Select **Add Integration** to save your integration configuration.

Your collection is pushed to your GitLab project under the filename that you specified and saved as a single JSON file.

Every change that is saved to your Postman Collection automatically commits changes to your GitLab project in real time. Your collections and code can exist in the same repository.

## Back up your Postman Collections to GitLab on a custom domain

1. If your network is behind a firewall that requires allowlisting IP addresses, you will need to use a static IP address to enable collection backups to GitLab on custom domains.

    Contact your IT team to allowlist the following static IP in your firewall to enable collection backups to GitLab:

   * US East: 3.212.102.200

   Once you allowlist this IP address, calls for this integration will be able to connect to your network and allow the integration to work as expected.

1. Select **Add Integration** to enter your GitLab token to start the integration.

1. Enter your GitLab Personal Access Token, specify your GitLab custom/self-hosted domain, and select **Proceed**.

1. In the **Backup your Postman Collections** page, choose an existing Postman Collection and your GitLab Project, then enter a filename for your backup.

1. In **Advanced Options** you can enter a custom directory name or leave `Postman Collections` as the default. You can specify a branch for commit or the default branch of the repository will be used. Make sure you have write access to the branch where you want to push your changes.

   > Note that the branch you want to back up your collection to must already exist.

1. Select **Add Integration**.

Your collection is pushed to your GitLab project under the directory that you specified and saved as a single JSON file.

Every change that is saved to your Postman Collection automatically commits changes to your GitLab project in real time. Your collections and code can exist in the same repository.

You can go to your GitLab domain and view your backed-up collections, as illustrated in the screen below:

![gitlab advanced options 2](https://assets.postman.com/postman-docs/gitlab-gray7.jpg)
