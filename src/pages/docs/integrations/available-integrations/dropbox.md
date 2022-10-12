---
title: "Dropbox"
order: 167
updated: 2022-10-12
page_id: "dropbox"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Grouping requests in collections"
    url: "/docs/sending-requests/intro-to-collections/"
---

Back up and synchronize your Postman Collections on Dropbox for file sharing, storage, and collaboration. The Postman to Dropbox integration seamlessly complements your existing workflows and allows you to store your Postman Collections and other project files in one place.

## Contents

* [Configuring Dropbox integration](#configuring-dropbox-integration)
* [Accessing your Postman Collections on Dropbox](#accessing-your-postman-collections-on-dropbox)

## Configuring Dropbox integration

1. From the **[Home](https://go.postman.co/home)** page, select **[Integrations](https://go.postman.co/integrations)**.

    ![integrations page](https://assets.postman.com/postman-docs/home-integrations.jpg)

1. Select **Browse All Integrations**.

1. Search and select **Dropbox**.

1. Select **Add Integration** to authorize a backup of your Postman collection. Your collection is saved as a single JSON file and uploaded to Dropbox.

    ![dropbox add integration](https://assets.postman.com/postman-docs/dropbox-add-integration.jpg)

1. You'll be prompted to allow Postman to access its own folder inside your Dropbox account. After you grant access, you can close the browser tab and return to Postman.

1. Enter the following in the **Add integration** window:

    * **Nickname** - A nickname for your integration.
    * **Workspace** - The workspace that contains your collection.
    * **Collection** - The collection you would like uploaded to Dropbox.
    * **Filename** - The name of the JSON file in Dropbox.

1. Select **Add Integration** to save the configuration.

## Accessing your Postman Collections on Dropbox

Once you've backed up your collection in Dropbox, you can find your backups at **Dropbox > Apps > Postman Pro**.

  ![view in dropbox](https://assets.postman.com/postman-docs/v10/dropbox-view-v10.jpg)

Going forward, every change saved to your Postman Collection will automatically upload to Dropbox in real time. Complement your team's existing workflows and back up your Postman Collections to Dropbox.
