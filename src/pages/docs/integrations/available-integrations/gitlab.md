---
title: "GitLab"
order: 169
page_id: "gitlab"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Grouping requests in collections"
    url: "/docs/sending-requests/intro-to-collections/"
---

> __[Integrations are available on Postman Team, Business, and Enterprise plans.](https://www.postman.com/pricing)__

Back up your Postman Collections to GitLab, an open source Git repository manager, with the Postman to GitLab integration.

Setting up a GitLab integration requires you to get a GitLab Personal Access Token and configure how you would like to back up your collections.

## Generating a GitLab Personal Access Token

Log in to [GitLab](https://gitlab.com/).

If you don’t already have a Personal Access Token from GitLab, [generate a new one](https://gitlab.com/profile/personal_access_tokens).  

Save the generated token to use later.

<img src="https://assets.postman.com/postman-docs/gitlab_create_gray2.png" alt="gitlab create token">

<img src="https://assets.postman.com/postman-docs/gitlab_token2_gray2.png" alt="gitlab token">

## Configuring a backup for Postman Collections in GitLab

1. In the [Integrations](https://go.postman.co/workspaces) tab for your workspace, select GitLab from the list of third party integrations.

  <img src="https://assets.postman.com/postman-docs/integrations-gitlab1_gray2.png" alt="select gitlab integration">

1. Click **View Details** to see information about GitLab and how it can back up your Postman Collections to your GitLab projects or self-hosted domains.

    **Note:** You can also click the **Configured Integrations** tab to set up other integrations, view available integrations for Gitlab, or view all integrations.

    <img src="https://assets.postman.com/postman-docs/Gitlab_Main_Backup_Page_gray2.png" alt="select gitlab add">

    The above screen provides you the following two options:

    * [Backup your Postman Collections to GitLab](#backup-your-postman-collections-to-gitlab)
    * [Backup your Postman Collections to GitLab on a custom domain](#backup-your-postman-collections-to-gitlab-on-a-custom-domain)

## Backup your Postman Collections to GitLab

1. Click the **Add Integration** button to enter your Gitlab token to start the integration.

<img src="https://assets.postman.com/postman-docs/GitLab_Add1_gray2.png" alt="select gitlab add">

1. Enter your GitLab Personal Access Token and click **Proceed**.

1. In the **Backup your Postman Collections** page, choose an existing Postman Collection and your GitLab Project,  enter a filename for your backup.

1. Click the **Add Integration** button.
Your Collection is pushed to your GitLab project under the filename that you specified and saved as a single JSON file.

    Now every change that is saved to your Postman Collection automatically commits changes to your GitLab project in real time. Your Collections and code can exist in the same repository.

    <img src="https://assets.postman.com/postman-docs/WS-integrations-gitlab-backupPostToken2_gray2.png" alt="backup">

    In "Advanced Options" you can enter a custom directory name or leave "Postman Collections" as the default. You can specify a branch for commit or the default branch of the repository will be used.

    <img src="https://assets.postman.com/postman-docs/integrations-gitlab-advOptions1_gray2.png" alt="gitlab advanced options">

## Backup your Postman Collections to GitLab on a custom domain

<img src="https://assets.postman.com/postman-docs/GitLab_Custom_Add1_gray2.png" alt="gitlab add">

1. Click **Add Integration** to enter your GitLab token to start the integration.

1. Enter your GitLab Personal Access Token, specify your Gitlab custom/self-hosted domain and click **Proceed**.

    **Static IP Support**

    If your network is behind a firewall that requires whitelisted IP addresses, you will need to use a static IP address to enable collection backups to GitLab on custom domains.

    Contact your IT team to whitelist the following static IP in your firewall to enable collection backups GitLab:

      * US East: `3.212.102.200`

    Once you whitelist this IP address, calls for this integration will be able to connect to your network and allow the integration to work as expected.

1. In the **Backup your Postman Collections** page, choose an existing Postman Collection and your GitLab Project, enter a filename for your backup.

1. Click **Add Integration**.
Your Collection is pushed to your GitLab project under the directory that you specified and saved as a single JSON file. This is illustrated in the following screen:

<img src="https://assets.postman.com/postman-docs/Gitlab_CustomDomain_Collection1_gray2.png" alt="file in Gitlab project">

Now every change that is saved to your Postman Collection automatically commits changes to your GitLab project in real time. Your Collections and code can exist in the same repository.

<img src="https://assets.postman.com/postman-docs/WS-integrations-gitlab-backupPostToken2_gray2.png" alt="backup">

In "Advanced Options" you can enter a custom directory name or leave "Postman Collections" as the default. You can specify a branch for commit or the default branch of the repository will be used. Make sure you have write access to the branch you are trying to push your changes.

> Note that the branch you want to back up your collection to must already exist.

<img src="https://assets.postman.com/postman-docs/integrations-gitlab-advOptions1_gray2.png" alt="gitlab advanced options">

Click Add Integrations.

Now, you can go to your Gitlab domain and view your backed-up collections, as illustrated in the screen below:

<img src="https://assets.postman.com/postman-docs/Gitlab_repo1_gray2.png" alt="gitlab advanced options">
