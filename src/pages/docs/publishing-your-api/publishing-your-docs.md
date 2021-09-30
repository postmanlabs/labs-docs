---
title: "Publishing your docs"
order: 103
page_id: "publishing_your_docs"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Grouping requests in collections"
    url: "/docs/sending-requests/intro-to-collections/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Imgur"
    url: "https://www.postman.com/resources/case-studies/imgur/"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "API documentation with Postman"
    url: "https://www.youtube.com/watch?v=Ayo_KdLLcTA"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "API Network Exploration: Infermedica"
    url: "https://blog.postman.com/api-network-exploration-infermedica/"

warning: false
---

Publishing your documentation makes it publicly available to anyone with the link to the documentation and a web browser. Publish your documentation to help people around the world learn how to use your collection or interact with your Public API.

Public documentation automatically includes details for each request or endpoint in the published collection, along with sample code in various client languages. As you modify your collection, the published documentation automatically stays in sync with  your latest changes. There's no need to publish the documentation again after making changes.

> Your public documentation includes the **Run in Postman** button so users can interact with your collection or API directly in Postman. For an example, check out the [Postman API documentation](https://documenter.postman.com/view/631643/JsLs/) which was published from a Postman collection.

## Contents

* [Making your documentation public](#making-your-documentation-public)
* [Adding a custom logo](#adding-a-custom-logo)
* [Sharing your public docs](#sharing-your-public-docs)
* [Changing publication settings](#changing-publication-settings)
* [Unpublishing your docs](#unpublishing-your-docs)
* [Next steps](#next-steps)

## Making your documentation public

To publish [documentation](/docs/publishing-your-api/documenting-your-api/), it must be part of a collection. You can publish documentation for any collections that you created or have permission to edit.

To publish the documentation for a collection:

1. Select **Collections** in the left sidebar.
1. Select the three dots <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> next to a collection, and then select **View Documentation**.
1. Select **Publish** at the upper right.

    <img alt="Publish documentation" src="https://assets.postman.com/postman-docs/documentation-publish-button-v9.jpg" width="753px">

1. Change any publication settings as needed:

    * **Release tag:** Select one or more [release tags](/docs/publishing-your-api/documenting-your-api/#documenting-releases) to publish. Users can view documentation for each selected release.
    * **Environment:** Select an [environment](/docs/publishing-your-api/documenting-your-api/#associating-environments-with-documentation) to publish environment variables with your documentation. *The initial values of all variables are published with your documentation, so make sure they don't contain sensitive information such as passwords or tokens.*
    * **Custom domain:** Select a [custom domain](/docs/publishing-your-api/custom-doc-domains/) where you want to publish your documentation.
    * **Default layout:** Select a layout style for your documentation. **Double column** displays sample code in a column to the right of the documentation. **Single column** displays sample code inline beneath each request.
    * **Header background color:** Specify a color (hex format) for the header at the top of the documentation window.
    * **Code background color:** Specify a color (hex format) for sample code blocks.
    * **Highlight color:** Specify a color (hex format) for hyperlinks.
    * **Move to public workspace:** (Optional) Select an available [public workspace](/docs/collaborating-in-postman/public-workspaces/) to move the collection to. This will make the collection discoverable on the [Public API Network](https://www.postman.com/explore), along with its documentation.

1. To see what your documentation will look like using the current settings, select **Preview Documentation**. The preview automatically updates as you change settings.

    > If Postman detects a possibly sensitive token or other secret, a warning appears at the top of the preview window. Postman also highlights the token so you can remove it from the documentation before publishing.

1. When you are finished changing settings, select **Publish Collection**. You can view your public documentation at the provided URL.

[![Published documentation example](https://assets.postman.com/postman-docs/documentation-published-docs-v9.jpg)](https://assets.postman.com/postman-docs/documentation-published-docs-v9.jpg)

## Adding a custom logo

If you are a team admin, you can customize your published documentation with a team logo. To add a logo, [edit your team profile](/docs/administration/team-settings/#editing-your-team-profile) in your [team settings](https://go.postman.co/settings/team/general). Your team logo will replace the Postman logo in your team's published documentation. (It may take a few minutes for the new logo to appear.)

## Sharing your public docs

To share your public documentation, simply share the published URL with your team members, other users, or the community. If you have forgotten the URL for your published documentation, you get it at any time:

1. Select **Collections** in the left sidebar.
1. Select the three dots <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> next to a collection with published docs, and then select **View Documentation**.
1. Select **Published** at the upper right, and then select **Copy published link**.

<img alt="Copy published link" src="https://assets.postman.com/postman-docs/documentation-published-link-v9.jpg" width="753px">

If your collection is in a public workspace, others can search for and find your collection on the [Public API Network](https://www.postman.com/explore), along with its documentation. If you haven't already moved your collection to a public workspace, you can do so at any time by [changing the publication settings](#changing-publication-settings).

> By sharing your documentation with the Public API Network, you increase the visibility of your API to a wider range of consumers in the Postman community. Learn more about [public workspaces](/docs/collaborating-in-postman/public-workspaces/).

## Changing publication settings

Change the publication settings for your documentation to add a release, update your documentation's look, or make your collection public. You can change the publication settings at any time after publishing your documentation:

1. Select **Collections** in the left sidebar.
1. Select the three dots <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> next to a collection with published docs, and then select **View Documentation**.
1. Select **Published** at the upper right, and then select **Edit published documentation**.

    <img alt="Edit published documentation" src="https://assets.postman.com/postman-docs/documentation-edit-published-docs-v9.jpg" width="753px">

1. Select **Edit settings**, and then change the [publication settings](#making-your-documentation-public) as needed.
1. Select **Save and republish**.

## Unpublishing your docs

If you no long want your documentation to be publicly available, you can unpublish it:

1. Select **Collections** in the left sidebar.
1. Select the three dots <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> next to a collection with published docs, and then select **View Documentation**.
1. Select **Published** at the upper right, and then select **Edit published documentation**.
1. Select **Unpublish**.

If you change your mind, you can [publish your documentation](#making-your-documentation-public) again at any time.

<img alt="Unpublish documentation" src="https://assets.postman.com/postman-docs/documentation-unpublish-v9.jpg" width="737px">

## Next steps

Learn more about [viewing documentation](/docs/publishing-your-api/viewing-documentation/).
