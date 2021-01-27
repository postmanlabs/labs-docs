---
title: "Syncing your work"
order: 5
page_id: "syncing"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Download and Install"
    url: "https://getpostman.com/apps"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "HotelBeds"
    url: "https://www.postman.com/case-studies/Hotelbeds.pdf"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Intro to Postman Cloud"
    url: "https://www.youtube.com/watch?v=ccdxr0oJR-I"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Backup and Sync your Postman Collections on GitHub"
    url: "https://blog.postman.com/backup-and-sync-your-postman-collections-on-github/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Sending your first request"
    url: "/docs/getting-started/sending-the-first-request/"

warning: false

---

## What is Syncing?

Syncing makes all your Postman data available when you're signed in to your Postman account.

Changes, such as edits, additions, or deletions, sync across all devices that are linked to your account.

These entities can sync with the server and be saved to the cloud:

* Collections
* Folders
* Requests
* Responses
* Header Presets
* Environments
* Environment variables
* Global variables
* Collection run results
* Workspaces
* History

## How do I Sync between computers?

Install the [Postman app](https://www.postman.com/downloads/) and sign in with the same email address or username on all your devices.

Alternatively, access Postman on the web by visiting [go.postman.co/build](https://go.postman.co/build) in your browser and signing into your account.

If you forget your username or password, you can recover them using the links in the sign-in prompt.

When you're logged into Postman, your data is synced across devices.

**Note:** Postman restricts parallel usage to three apps per account.

### States

If your app is in sync with the server, the icon to the left of your name in the top navigation appears orange, and displays **IN SYNC**.

If a sync operation is underway, it displays **SYNCING**.

If you are not signed in to the app, you see **OFFLINE**.

When you open the app or if your connection drops, it displays **CONNECTING** before it starts to sync.

[![sync icon in header](https://assets.postman.com/postman-docs/Sync-Screen.png)](https://assets.postman.com/postman-docs/Sync-Screen.png)

> You may occasionally experience sync conflicts between your app and the Postman servers, particularly when you work as part of a team: [Postman will prompt you to resolve any conflicts that occur](/docs/collaborating-in-postman/using-workspaces/conflicts/)

## Sign Out

If you choose to sign out, Postman deletes your data from the local instance of the app.

Don’t worry, Postman restores all your data from the cloud when you sign in, and enables other users to use the app without your data clashing.

When you reload the app, Postman automatically retrieves the most recent and up-to-date version of your collections.

## Disabling sync

If you or your organization have a requirement to prevent your data from being synced to the Postman cloud, you can use Postman without an account and [manually back up your data locally](/docs/postman/collections/importing-and-exporting-data/#exporting-postman-data).

You can delete already synced data by [deleting your account](#deleting-your-postman-account). Note that if you are a part of a Postman team, you must first [leave the team](https://go.postman.co/settings/me/team) in order to delete your account.

> Learn more about [Security at Postman](https://www.postman.com/security/).

## Deleting your Postman account

If you have a Postman account and are not part of a Postman team, you can [delete your account](https://go.postman.co/settings/me).

Otherwise, you can contact us at [help@postman.com](mailto:help@postman.com).

[![delete account](https://assets.postman.com/postman-docs/WS-syncing-deleteAccount.png)](https://assets.postman.com/postman-docs/WS-syncing-deleteAccount.png)
