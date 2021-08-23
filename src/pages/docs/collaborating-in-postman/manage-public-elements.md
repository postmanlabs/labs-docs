---
title: "Managing public elements"
order: 76.1
page_id: "manage_public_elements"
warning: false
contextual_links:
search_keyword: "collection links, collection JSON links, manage public elements, public documentation, public workspaces"
---

> **[Manage public elements is available only on Postman Enterprise plan.](https://www.postman.com/pricing/)**

The [Manage public elements](https://blog.postman.com/govern-your-public-api-collections-more-effectively/) dashboard gives you a central place to control what collections are shared outside of your team for public consumption. You need to have a [Community Manager](/docs/collaborating-in-postman/roles-and-permissions/#team-roles/) role in enterprise organizations to view and manage everything that’s made public by your team — including public collections links, public documentation, and public workspaces created by members of your team — all in one place.

## Contents

* [Managing public elements](#managing-public-elements)
    * [Workspaces](#workspaces)
    * [Public documentation](#public-documentation)
    * [Collection JSON links](#collection-json-links)
* [Next steps](#next-steps)

### Managing public elements

To manage public elements, you need to have a Community Manager role in a Postman **Enterprise** plan. Use the dashboard to manage what collections your team has exposed for public consumption and to see which team member created a specific link. You have the ability to delete links to collections you feel should not be public. From the **Home** page, go to the **Manage public elements** section and select **Manage** to navigate to the dashboard view.

<img alt="Manage public elements" src="https://assets.postman.com/postman-docs/manage-public-elements.jpg"/>

#### Workspaces

In the **Workspaces** tab, you will have access to all the public workspaces created by your team. You will also be able to view and respond to requests to make workspaces public. Along with workspace name, the request date and the requester details will be displayed.

<img alt="Manage workspaces" src="https://assets.postman.com/postman-docs/manage-workspaces.jpg"/>

To respond to the request, click **Respond** towards the right end of the workspace. A dialog box will open up in the workspace overview tab. Upon approving, the workspace gets converted to a [public workspace](/docs/collaborating-in-postman/public-workspaces/).

<img alt="Convert to public workspaces" src="https://assets.postman.com/postman-docs/request-visibility-public-workspace.jpg"/>

#### Public Documentation

The **Documentation** tab displays all the collections with published documentation. The search box below the header enables you to filter by the publisher. Along with the collection name and environment name, you will be able to view date the documentation was published on, who published it, and the documentation URL. Copy the **Documentation URL** and paste it in a browser of your choice, and you will have access to the documentation.

<img alt="Public documentation" src="https://assets.postman.com/postman-docs/public-documentation.jpg"/>

#### Collection JSON links

The **Collection JSON Links** tab displays all the collections with JSON links. You can use the toggle option to enable sharing collection JSON via public links.

As the Community Manager, you will be able to view, access, or delete the collections with JSON links. In addition to the collection name, the dashboard displays more information about the date the link was updated on, who updated the link, and the JSON link.

If you disable the toggle option, no new links can be generated and existing links cannot be modified or edited. The previously created JSON links will still remain accessible.

Hover over the **JSON link** corresponding to the collection and click **Copy link to JSON**. Paste the link in a browser of your choice and you will have access to the collection JSON.

<img alt="Collection JSON links" src="https://assets.postman.com/postman-docs/collection-json-links.jpg"/>

## Next steps

For more details on how to create a public workspace, visit [Public workspaces](/docs/collaborating-in-postman/public-workspaces/).
