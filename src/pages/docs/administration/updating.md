---
title: "Updating your team to the current version of Postman"
order: 140.1
updated: 2022-09-15
page_id: "updating"
search_keyword: "upgrade, upgrading, update, updating, version"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Installing and updating"
    url: "/docs/getting-started/installation-and-updates/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Test-driving the Latest Postman Release: v9 and Flows"
    url: "https://youtu.be/j-fkJLbOpjk"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "The New Postman API Platform: Redefining API Management for the API-First World"
    url: "https://blog.postman.com/new-postman-api-platform-redefining-api-management-for-api-first-world/"

---
This section describes the steps to migrate your team to the latest version of Postman.

Postman v10 provides a consistent, improved API development experience. The Postman desktop app and the [Postman web app](/docs/getting-started/installation-and-updates/#using-the-postman-web-app) are equally empowering—which one you use is a matter of preference for your workflows.

* [Updating to Postman v10](#updating-to-postman-v10)
* [Updating to Postman v9](#updating-to-postman-v9)
* [Updating to Postman v8](#updating-to-postman-v8)
    * [Updating to v8 as an individual](#updating-to-v8-as-an-individual)
    * [Updating to v8 as a team](#updating-to-v8-as-a-team)
* [Installing earlier versions of Postman](#installing-earlier-versions-of-postman)
    * [Downloading Postman v9](#downloading-postman-v9)
    * [Downloading Postman v8](#downloading-postman-v8)

## Updating to Postman v10

You can move from Postman v8 or v9 to Postman v10 by navigating to **Settings** and selecting **Update**, then **Download update**.

If you are using Postman v9.13 or later, Postman automatically downloads updates.

<img alt="Settings Update" src ="https://assets.postman.com/postman-docs/settings-update-v8-to-v9.jpg"/>

You will need to restart Postman to install the update. Select __Restart and Install Update__.

<img alt="Restart and install modal" src ="https://assets.postman.com/postman-docs/restart-and-install-update-v8.jpg" width="450px"/>

You can start using Postman v10 once the update is completed.

## Updating to Postman v9

You can move from Postman v8 to Postman v9 by navigating to **Settings** and selecting **Update**, then **Download update**.

<img alt="Settings Update" src ="https://assets.postman.com/postman-docs/settings-update-v8-to-v9.jpg"/>

You will need to restart Postman to install the update. Select __Restart and Install Update__.

<img alt="Restart and install modal" src ="https://assets.postman.com/postman-docs/restart-and-install-update-v8.jpg" width="450px"/>

You can start using Postman v9 once the update is completed.

> Postman v9.4 is the last version of Postman that supports both 32-bit and 64-bit Windows. All versions of Postman following v9.4 will only work on 64-bit Windows. You can continue to use Postman v9.4 and earlier on 32-bit Windows.

## Updating to Postman v8

### Updating to v8 as an individual

Non-team users on v7 can update to v8 by navigating to **Settings** and selecting **Update**, then **Download update**.

It's important to make sure your work is synced so that no data is lost during the update. Select __Verify Sync__.

<img alt="Verify Sync modal" src ="https://assets.postman.com/postman-docs/verify-sync-before-updating-v8.jpg" width="450px"/>

Once your work is synced, you can update to Postman v8. Select __Update to v8__.

<img alt="Work in Sync modal" src ="https://assets.postman.com/postman-docs/sync-update-confirmed-v8.jpg" width="450px"/>

You will need to restart Postman to install the update. Select __Restart and Install Update__.

<img alt="Restart and install modal" src ="https://assets.postman.com/postman-docs/restart-and-install-update-v8.jpg" width="450px"/>

You can start using Postman v8 once the update is completed.

### Updating to v8 as a team

Team members on v7 can update to v8 by navigating to **Settings** and selecting **Update**, then **Download update**. You don't need an approval from an admin to update from v7 to v8.

> If you're on a team and download Postman v8 while the rest of your team is using Postman v7, you will still be able to use v8. Syncing and collaboration won't be affected.

## Installing earlier versions of Postman

If you'd like to downgrade to Postman v9 or below to continue working with a team that hasn't migrated yet, you can download an earlier version of Postman.

### Downloading Postman v9

Use the following links to download the latest Postman v9 version for your platform.

* [Download Postman v9 for macOS 64-bit](https://go.pstmn.io/dl-macos64-v9-latest)
* [Download Postman v9 for Windows 64-bit](https://go.pstmn.io/dl-win64-v9-latest)
* [Download Postman v9 for Windows 32-bit](https://go.pstmn.io/dl-win32-v9-latest)
* [Download Postman v9 for Linux 64-bit](https://go.pstmn.io/dl-linux64-v89-latest)

If you're using Postman for Linux, and had installed the app through 'Ubuntu Software Center' or 'Snap Store', use the following commands to switch to Postman v9.

```shell
sudo snap switch --channel=v9/stable postman
sudo snap refresh postman
```

### Downloading Postman v8

Use the following links to download the latest Postman v8 version for your platform.

* [Download Postman v8 for macOS 64-bit](https://go.pstmn.io/dl-macos64-v8-latest)
* [Download Postman v8 for Windows 64-bit](https://go.pstmn.io/dl-win64-v8-latest)
* [Download Postman v8 for Windows 32-bit](https://go.pstmn.io/dl-win32-v8-latest)
* [Download Postman v8 for Linux 64-bit](https://go.pstmn.io/dl-linux64-v8-latest)

If you're using Postman for Linux, and had installed the app through 'Ubuntu Software Center' or 'Snap Store', use the following commands to switch to Postman v8.

```shell
sudo snap switch --channel=v8/stable postman
sudo snap refresh postman
```
