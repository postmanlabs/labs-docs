---
title: "Using the Scratch Pad"
order: 7.1
page_id: "using-the-scratch-pad"
updated: 2022-03-01
warning: false
contextual_links:
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Accessing Scratchpad in Postman | Postman Level Up"
    url: "https://youtu.be/AHpdO8AetjA"
  - type: link
    name: "Importing Data from the Scratchpad | Postman Level Up"
    url: "https://youtu.be/GZWf7F-aVDc"

---

The _Scratch Pad_ is a space where you can work if you're using the Postman desktop app and not connected to Postman servers. When you aren't logged in or don't have a network connection, you can still access some Postman features offline, such as creating collections and requests, or sending requests.

All your work in the Scratch Pad is stored locally and isn't synced online with Postman. After working in the Scratch Pad, you can later move your work into a workspace once you sign in.

## Entering the Scratch Pad

If you sign out or your connection to Postman breaks, Postman displays a global banner at the top of the screen indicating that you're already in the Scratch Pad.

<img alt="Scratch Pad global banner" src="https://assets.postman.com/postman-docs/scratch-pad-notice.jpg" width="350px" />

If you are logged in and want to go to the Scratch Pad, select the settings icon <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px"> in the header and select **Scratch Pad**.

## Scratch Pad features

While you are in the Scratch Pad, you can:

* Create, edit, rename, or delete a collection, folder, environment, HTTP request, or WebSocket request.
* Send a request.
* View your history of your sent requests.
* Write and execute test scripts and visualizers.
* Export collections and environments.
* Edit documentation for a collection or request.

## Leaving the Scratch Pad

To leave the Scratch Pad:

1. Ensure you have a network connection to Postman, and sign in.
1. Switch to a workspace by selecting **Workspaces** from the header. For more information, see [Using and managing workspaces](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/).

> You can also select **Switch to a Workspace** from the Scratch Menu global banner at the top of the screen.

## Exporting data from the Scratch Pad

When you leave the Scratch Pad, your data remains there and isn't automatically transferred to your workspace. But you can export the data from the Scratch Pad as JSON, then import it to a workspace.

To export saved Scratch Pad data:

1. Go to the Scratch Pad.
1. Select the settings icon <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px"> in the header, then select **Settings** > **Data**.
1. Select **Export Data**.
1. Choose a directory in which to save the file, then select **Save**.

You can also export a single collection or an environment. For more information, see [Exporting Postman data](/docs/getting-started/importing-and-exporting-data/#exporting-postman-data).

## Importing data from the Scratch Pad

When you log back in to Postman, you can import your Scratch Pad data:

1. Sign in and switch to a workspace by selecting **Workspaces** from the header. For more information, see [Using and managing workspaces](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/).
1. Select **Import** in the upper-left corner.
1. Drag your exported data dump, collection, or environment and select **Import**.

For more information on importing, see [Importing data into Postman](/docs/getting-started/importing-and-exporting-data/#importing-data-into-postman).
