---
title: "Adding to the Private API Network"
order: 66
page_id: "adding_private_network"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Collaborating in Postman"
    url: "/docs/postman/collaboration/collaboration-intro/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Team collaboration with Postman"
    url: "https://www.youtube.com/watch?v=8tLvvQ-3Nx0"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Authoring your documentation"
    url: "/docs/postman/api-documentation/authoring-your-documentation/"

---

You can publish the APIs that your teams use internally to the Private API Network. When you publish to the Private API Network, your team can access the APIs they need and start consuming them immediately.

![Team APIs](https://assets.postman.com/postman-docs/Internal+Network+Explore.jpg)

You can add to the Private API Network from your team's private API space on the [Dashboard](https://www.postman.com). The [Dashboard](https://www.postman.com) is also where your team members can discover and consume your private APIs.

## Contents

* [Adding your APIs](#adding-your-apis)
    * [Security](#security)
    * [Guidelines](#guidelines)
* [Discovering and consuming private APIs](#discovering-and-consuming-private-apis)
* [Next steps](#next-steps)

### Adding your APIs

> Before you can add an API to the Private API Network, all of your team members must be given permission to view the API. Learn more about [roles and permissions](/docs/postman/collaboration/roles-and-permissions/).

To add a private API for your team, sign in to your [Dashboard](https://www.postman.com) and click **API Network** at the top.

> Open your browser to sign in to the [Dashboard](https://www.postman.com).

![Nav bar](https://assets.postman.com/postman-docs/Network+in+nav+bar.jpg)

Click your team name at the top left.

![Team name](https://assets.postman.com/postman-docs/Add+to+API+Network.jpg)

In your team's private API space, click **Add to Network**.

![Add to network button](https://assets.postman.com/postman-docs/Add+to+Network+button.jpg)

In the modal, choose the workspace the API is coming from, and select the API that you want to publish. Click **Add to Network**.

![Modal](https://assets.postman.com/postman-docs/Private+API+Network+modal.jpg)

> The APIs that you add to the Private API Network are synced to your team workspace. Changes made to the API from the workspace will be reflected in the API that is in the Private API Network.

To see the published API, navigate to your team's private API space on the [Dashboard](https://www.postman.com) and find the API in the list.

![Listed APIs](https://assets.postman.com/postman-docs/APIs+listed+in+Private+Network.jpg)

You can see which APIs and collections have been added to the Private API Network from your team workspace on the [Dashboard](https://www.postman.com).

> You can hover over **Added to Postman's API Network** to remove an API from the network.

![Published to network](https://assets.postman.com/postman-docs/Added+to+private+network.jpg)

> APIs that have already been added to the Private API Network cannot be added again. If a team member tries to add an API that already exists in the network, they will receive an error message telling them that API has already been added.

#### Security

When users sign in to Postman, only the private APIs for the teams associated with their login credentials will be visible to them. Users must be signed in to browse private APIs. Private APIs will not be discoverable or accessible to anyone who is not a part of your team.

#### Guidelines

To keep your APIs secure, you will have to make sure that every member of your team has viewing permission for the API you want to add. APIs submitted to the Private API Network without all team members having view-access will not be premitted to add. Learn more about team [roles and permissions](/docs/postman/collaboration/roles-and-permissions/).

> View-access is the minimum permission you need to grant your teammates to be abe to add to the network. You can choose to give members of your team edit-access.

## Discovering and consuming private APIs

You can find the APIs that your team has added to the Private API Network by browsing through your team's private API space on the [Dashboard](https://www.postman.com).

> Only the private APIs for the teams associated with your login credentials will be visible to you.

Sign in to the [Dashboard](https://www.postman.com) and click **API Network** at the top.

> Open your browser to sign in to the [Dashboard](https://www.postman.com).

![Nav bar](https://assets.postman.com/postman-docs/Network+in+nav+bar.jpg)

Click your team name at the top left.

![Team name](https://assets.postman.com/postman-docs/Add+to+API+Network.jpg)

Browse through the list of your organization's private APIs.

![API list](https://assets.postman.com/postman-docs/List+of+private+APIs.jpg)

Click on an API to see details.

![API display](https://assets.postman.com/postman-docs/Private+API+display.jpg)

If you have edit access to the API, you can make chages directly from the [Dashboard](https://www.postman.com) view.

![Edit API](https://assets.postman.com/postman-docs/Private+API+gif.gif)

You can also generate a collection based on the API schema. When you generate a collection, you can create documentation for the API or build new test suites.

To generate a collection, click **Generate collection** in the upper right.

![Edit API](https://assets.postman.com/postman-docs/Generate+collection+button.jpg)

Name the collection and select your reason for creating the collection. Click **Generate Collection**.

![Generation modal](https://assets.postman.com/postman-docs/Collection+generation+modal.jpg)

To view the collection, navigate to your team workspace and click **Collections**. The collection will be displayed in a list of all the collections in that workspace.

![Generated collection](https://assets.postman.com/postman-docs/Generated+collection+on+dashboard.jpg)

## Next steps

Learn how to [author API documentation](/docs/postman/api-documentation/authoring-your-documentation/).
