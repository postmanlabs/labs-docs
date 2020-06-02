---
title: "Your private API network"
order: 59.9
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

You can publish the APIs that your teams use internally to the private API network. When you publish to the private API network, your team can access the APIs they need and start consuming them immediately.

![Team APIs](https://assets.postman.com/postman-docs/Private+APIs.jpg)

You can add to the private API network from your team's private API space on the [Dashboard](https://go.postman.co). The [Dashboard](https://go.postman.co) is also where your team members can discover and consume your private APIs.

> Your API must be in the [API builder](/docs/postman/design-and-develop-apis/the-api-workflow/) in order to be added to the network. You cannot add a collection to the private API network.

## Contents

* [Adding your APIs](#adding-your-apis)
    * [Security](#security)
    * [Guidelines](#guidelines)
* [Discovering and consuming private APIs](#discovering-and-consuming-private-apis)
* [Next steps](#next-steps)

### Adding your APIs

> You can only add an API to the network if you have edit access to the API and all of your team members have permission to edit or view the API. Learn more about [roles and permissions](/docs/postman/collaboration/roles-and-permissions/).

To add a private API for your team, sign in to your [Dashboard](go.postman.co) and click **API Network** at the top.

> Open your browser to sign in to the [Dashboard](https://go.postman.co).

![Nav bar](https://assets.postman.com/postman-docs/Network+in+nav+bar.jpg)

By default, your team's private API space will open. Click **Add new** on the right.

![Team name](https://assets.postman.com/postman-docs/Add+new+button.jpg)

In the modal, choose the workspace containing the API you want to add to the network, and select the API you want to add. Click **Add to Network**.

![Modal](https://assets.postman.com/postman-docs/Add+to+network+modal.jpg)

> The APIs that you add to the private API network are synced to your team workspace. Changes made to the API from the workspace will be reflected in the network.

The API will immediately be visible in your team's private API space on the [Dashboard](https://go.postman.co). From the listing, you can edit the API summary or remove the API from the network.

![Listed APIs](https://assets.postman.com/postman-docs/Private+API+listing+and+modifying.jpg)

You can see which APIs and collections have been added to the private API network from your team workspace on the [Dashboard](https://go.postman.co).

> You can click **Added to Postman's API Network** to remove an API from the network or to view the API in the network.

![Published to network](https://assets.postman.com/postman-docs/Added+to+private+network.jpg)

> APIs that have already been added to the private API network cannot be added again. If a team member tries to add an API that already exists in the network, they will receive an error message telling them that the API has already been added.

#### Security

When users sign in to Postman, only the private APIs for the teams associated with their login credentials will be visible to them. Users must be signed in to browse private APIs. Private APIs will not be discoverable or accessible to anyone who is not a part of your team.

#### Guidelines

The person submitting the API to the network must have edit access to the API. Every member of your team must have view or edit access to the API before you submit it to the network. APIs submitted to the private API network without all team members having view or edit access to it will not be permitted to add. Learn more about team [roles and permissions](/docs/postman/collaboration/roles-and-permissions/).

## Discovering and consuming private APIs

You can find the APIs that your team has added to the private API network by browsing through your team's private API space on the [Dashboard](https://go.postman.co).

> Only the private APIs for the teams associated with your login credentials will be visible to you.

Sign in to the [Dashboard](https://go.postman.co) and click **API Network** at the top.

> Open your browser to sign in to the [Dashboard](https://go.postman.co).

![Nav bar](https://assets.postman.com/postman-docs/Network+in+nav+bar.jpg)

By default, your team's private API space will open, and you can browse through the list of your organization's private APIs.

![API list](https://assets.postman.com/postman-docs/Private+API+listings.jpg)

Select an API to see details.

![API display](https://assets.postman.com/postman-docs/Private+API+display.jpg)

If you have edit access to the API, you can make changes directly from the [Dashboard](https://go.postman.co) view.

![Edit API](https://assets.postman.com/postman-docs/Private+API+gif.gif)

You can also generate a collection based on the API schema. When you generate a collection, you can create documentation for the API or build new test suites.

To generate a collection, click **Generate collection** in the upper right.

![Edit API](https://assets.postman.com/postman-docs/Generate+collection+button.jpg)

Name the collection and select your reason for creating the collection. Click **Generate Collection**.

![Generation modal](https://assets.postman.com/postman-docs/Collection+generation+modal.jpg)

To view the collection, navigate to your team workspace and click **Collections**. The collection will appear in the list alongside all other collections in the workspace.

![Generated collection](https://assets.postman.com/postman-docs/Generated+collection+on+dashboard.jpg)

## Next steps

Learn how to [author API documentation](/docs/postman/api-documentation/authoring-your-documentation/).
