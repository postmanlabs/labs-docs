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
    name: "Next Steps"
  - type: link
    name: "Sending your first request"
    url: "/docs/getting-started/sending-the-first-request/"

warning: false

---

Postman automatically syncs changes across all devices that are linked to your account, including edits, updates, additions, or deletions. As long as you are signed into Postman in the desktop app or in the web version, and have a reliable internet connection, your data will sync.

* When you _sign out_, Postman removes your synced data from your local storage.
* When you _sign back in_, Postman restores your data from the cloud.
* When you _reload_, Postman automatically retrieves the most recent version of your data.

You can have up to three devices logged in to your Postman account simultaneously, such as your work computer, personal computer, and phone.

## Understanding sync states

Postman indicates the sync state of your workspace with the sync icon in the Postman footer. Hover over the sync icon to see more information about your connection and sync status.

<img alt="Understanding sync states" src="https://assets.postman.com/postman-docs/syncing-understanding-sync-states-v9.19.jpg" width="250px"/>

Possible states are:

* **Offline** means that you aren't connected to the Postman servers. This means that either your computer isn't connected to the internet or you aren't signed in to Postman.

    > If you are offline, you will be in the _Scratch Pad_, a space where you can work locally without an internet connection or signing in to Postman. The work that you do in the Scratch Pad won't be synced to Postman, but you can export it and import it into a workspace later. For more information, see [Using the Scratch Pad](/docs/getting-started/using-scratch-pad/).

* **Online** means that you are connected to the Postman servers and your work is either in the process of syncing or is already synced.
* **Error** means there was a syncing error while connecting to Postman. Hover over the sync state icon to see detailed information on the error.

> You may occasionally experience sync conflicts between Postman and its servers, particularly when you work as part of a team. When this happens, Postman will prompt you to [resolve any conflicts](/docs/collaborating-in-postman/using-workspaces/conflicts/) that occur.

## Disabling sync

Some organizations have security guidelines that prevent team members from syncing data to the Postman cloud. In this situation, you can use Postman without an account and [manually back up your data locally](/docs/getting-started/importing-and-exporting-data/#exporting-postman-data).

You can delete data that is already synced to Postman by [deleting your account](#deleting-your-postman-account). Note that if you are a part of a Postman team, you must first [leave the team](/docs/collaborating-in-postman/collaboration-intro/#leaving-a-team) to delete your account.

> Learn more about [Security at Postman](https://www.postman.com/trust/security/).
