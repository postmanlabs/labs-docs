---
title: "Syncing your work"
order: 5
updated: 2022-2-18
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

Postman automatically syncs changes across all devices that are linked to your account, including edits, updates, additions, or deletions. As long as you are signed in to Postman in the desktop app or in the web version, your data will be synced.

* When you _sign out_, Postman removes your synced data from your local storage.
* When you _sign back in_, Postman restores your data from the cloud.
* When you _reload_, Postman automatically retrieves the most recent version of your data.

You can have up to three devices logged in to your Postman account simultaneously, such as your work computer, personal computer, and mobile phone.

## Understanding sync states

Postman indicates the sync state of your workspace with the cloud icon. Possible states are:

* **Offline** <img alt="Sync offline icon" src="https://assets.postman.com/postman-docs/icon-sync-offline.jpg" width="16px" style="vertical-align:middle;margin-bottom:5px"> means that you are not connected to the Postman servers. This means that either your computer is not connected to the internet or you are not signed in to Postman.

    > If you are offline, you will be in the _Scratch Pad_, which is a space where you can work locally without a connection or login to Postman. The work that you do in the Scratch Pad will not be synced to Postman, but you can export it and import it into a workspace later. For more information, see [Using the Scratch Pad](/docs/getting-started/using-scratch-pad/).
    >
    > <img alt="Offline state" src="https://assets.postman.com/postman-docs/scratch-pad-logged-out-v9.12.jpg" width="250px" />

* **Connecting** <img alt="Sync connecting icon" src="https://assets.postman.com/postman-docs/icon-sync-connecting.jpg" width="16px" style="vertical-align:middle;margin-bottom:5px"> means the app is trying to connect to the Postman servers. You may also see this status if your connection drops and then reconnects.
* **Online** <img alt="Sync online icon" src="https://assets.postman.com/postman-docs/icon-sync-online.jpg" width="16px" style="vertical-align:middle;margin-bottom:5px"> means that you are connected to the Postman servers and your work is either in the process of syncing or is already synced.
* **Error** <img alt="Sync connection error icon" src="https://assets.postman.com/postman-docs/icon-sync-connection-error.jpg" width="16px" style="vertical-align:middle;margin-bottom:5px"> means there was a syncing error while connecting to Postman. Hover over the cloud icon to see detailed information on the error.

> You may occasionally experience sync conflicts between Postman and its servers, particularly when you work as part of a team. When this happens, Postman will prompt you to [resolve any conflicts](/docs/collaborating-in-postman/using-workspaces/conflicts/) that occur.

## Disabling sync

Some organizations have security guidelines that prevent team members from syncing data to the Postman cloud. In this situation, you can use Postman without an account and [manually back up your data locally](/docs/getting-started/importing-and-exporting-data/#exporting-postman-data).

You can delete data that has already been synced to Postman by [deleting your account](#deleting-your-postman-account). Note that if you are a part of a Postman team, you must first [leave the team](/docs/collaborating-in-postman/collaboration-intro/#leaving-a-team) to delete your account.

> Learn more about [Security at Postman](https://www.postman.com/trust/security/).
