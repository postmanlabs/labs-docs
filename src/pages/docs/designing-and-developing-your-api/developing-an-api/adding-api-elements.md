---
title: 'Adding elements to an API'
updated: 2021-09-15
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Creating an API"
    url: "/docs/designing-and-developing-your-api/creating-an-api/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Postman Space Camp | Advanced API Debugging"
    url: "https://youtu.be/9xGp6d7VFgU"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "The Reimagined API-First Workflow, Part 1: for Developers"
    url: "https://blog.postman.com/the-reimagined-api-first-workflow-for-developers/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Managing APIs"
    url: "/docs/designing-and-developing-your-api/managing-apis/"
---

Your API in Postman can include more than an API definition. You can add elements such as collections and environments to help you document and test your API.

To add an element, it must be in the same workspace as your API. The element will inherit the [roles and permissions](/docs/collaborating-in-postman/roles-and-permissions/) of the API you are adding it to.

> When you add a collection or environment, an independent copy of it is added to the API. The copy in the API will no longer be in sync with the original. If you move or delete an API, any collections or environments linked to the API are moved or deleted with it.

## Contents

* [Adding a collection](#adding-a-collection)
* [Adding an environment](#adding-an-environment)
* [Removing elements from an API](#removing-elements-from-an-api)

## Adding a collection

Add a collection to document your API or help others test your API's endpoints. You can add an existing collection or generate a new collection from your API definition.

> You can also add a test suite to your API. Learn more about [testing an API](/docs/designing-and-developing-your-api/testing-an-api/).

### Adding an existing collection

To add an existing collection to your API:

1. Select **APIs** in the sidebar and select an API.
1. On the API's overview, below **Collections** select **+ Add Collection**.
1. Select an available collection and select **Copy Collection**.

The copy of the collection displays on your API's overview and under your API in the sidebar. To view documentation for the collection, expand the collection and select **View full documentation**.

### Generating a collection

To generate a new collection from your API definition:

1. Select **APIs** in the sidebar and select an API.
1. On the API's overview, below **Definition** select **+** and choose **Generate from API definition**.
1. Change any settings to customize the new collection.
1. Select **Generate Collection**.

The linked collection displays on your API's overview and under your API in the sidebar. To view documentation for the collection, expand the collection and select **View full documentation**.

## Adding an environment

An environment is a set of related variables you can use in Postman requests. Add an environment to resolve any variables used in the collections linked to your API.

To add an environment to your API:

1. Select **Environments** in the left sidebar.
1. In the sidebar, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to an environment and select **Add to API**.
1. Select the **API** you want to add the environment to, then select **Add environment**.

This makes a copy of the environment in your API. The environment displays under your API in the sidebar. Select the environment to view or add variables. Learn more about [managing environments](/docs/sending-requests/managing-environments/).

## Removing elements from an API

You can delete a collection or environment from your API.

1. Select **APIs** in the sidebar and select an API.
1. In the sidebar, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to a collection or environment and select **Delete**.

The collection or environment is deleted from the API.

> You can also delete a collection by selecting the remove icon <img alt="Remove icon" src="https://assets.postman.com/postman-docs/icon-remove-api-element-v9.jpg#icon" width="16px"> next to a collection on the API's overview.
