---
title: "Syncing your work"
order: 5
page_id: "syncing"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Download and Install"
    url: "https://www.postman.com/downloads/"
  - type: section
    name: "Additional Resources"
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

Postman automatically syncs changes such as edits, updates, additions, or deletions, across all devices that are linked to your account. As long as you are signed in to Postman in the desktop app or in the web version, your data will be synced.

* If you _sign out_, Postman deletes your data from the local app instance.
* When you _sign back in_, Postman restores your data from the cloud.
* When you _reload_, Postman automatically retrieves the most recent and up-to-date version of your collections.

> Postman restricts parallel usage to three apps per account.

### Understanding sync states

Postman indicates the sync state of your workspace with the cloud icon. Possible states are:

* **Offline**: An offline status means that you are not connected to the Postman servers. This means that either your computer is not connected to the internet or you are not signed in to Postman.

    > If you are offline, you will be in the _Scratch Pad_, which is a space where you can work locally without a connection or login to Postman. The work that you do in the Scratch Pad will not be synced to Postman, but you can export it and import it to a workspace later. For more information, see [Using the Scratch Pad](/docs/getting-started/using-scratch-pad/).
    >
    > <img alt="Offline state" src="https://assets.postman.com/postman-docs/scratch-pad-logged-out.jpg" width="300px" />

* **Connecting**: When you open Postman, the status will be **Connecting** before it starts to sync. You may also see this status if your connection drops and then reconnects.

    [![Connecting state](https://assets.postman.com/postman-docs/connecting-state.jpg)](https://assets.postman.com/postman-docs/connecting-state.jpg)

* **Online**: Status indicator

    * **Syncing**: The data in your workspace is in the process of being backed up on Postman's servers.
    * **In sync**: The data in your workspace is fully backed up on Postman's servers.

* **Error**: If you encounter a syncing error while connecting to Postman, the status indicator will show the **Error** state. Hover to see the detailed information on the error.

    [![Error state](https://assets.postman.com/postman-docs/error-state-v2.jpg)](https://assets.postman.com/postman-docs/error-state-v2.jpg)

> You may occasionally experience sync conflicts between Postman and its servers, particularly when you work as part of a team. When this happens, Postman will prompt you to [resolve any conflicts](/docs/collaborating-in-postman/using-workspaces/conflicts/) that occur.

## Disabling sync

If you or your organization have a requirement to prevent your data from being synced to the Postman cloud, you can use Postman without an account and [manually back up your data locally](/docs/getting-started/importing-and-exporting-data/#exporting-postman-data).

You can delete already synced data by [deleting your account](#deleting-your-postman-account). Note that if you are a part of a Postman team, you must first [leave the team](/docs/collaborating-in-postman/collaboration-intro/#leaving-a-team) in order to delete your account.

> Learn more about [Security at Postman](https://www.postman.com/trust/security/).
