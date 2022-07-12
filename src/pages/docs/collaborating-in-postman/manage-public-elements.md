---
title: "Managing public elements"
order: 76.1
updated: 2021-08-23
page_id: "manage_public_elements"
warning: false
contextual_links:
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "How to Securely Deploy Postman at Scale, Part 2: Information Management"
    url: "https://blog.postman.com/how-to-securely-deploy-postman-at-scale-part-2-information-management/"
  - type: link
    name: "How to Set Up Your First Public Workspace"
    url: "https://blog.postman.com/how-to-set-up-public-workspaces/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Creating workspaces"
    url: "/docs/collaborating-in-postman/using-workspaces/creating-workspaces/"
search_keyword: "collection links, collection JSON links, manage public elements, public documentation, public workspaces"
---

> **[Manage public elements is available only on Postman Enterprise plan.](https://www.postman.com/pricing/)**

The [Manage public elements](https://blog.postman.com/govern-your-public-api-collections-more-effectively/) dashboard gives you a central place to control what collections are shared outside of your team for public consumption. You need to have a [Community Manager](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) role in enterprise organizations to view and manage everything that’s made public by your team, including public collections links, public documentation, and public workspaces created by members of your team, all in one place.

## Contents

* [Managing public elements](#managing-public-elements)
    * [Workspaces](#workspaces)
    * [Public documentation](#public-documentation)
    * [Collection JSON links](#collection-json-links)
* [Next steps](#next-steps)

### Managing public elements

To manage public elements, you need to have a Community Manager role in a Postman **Enterprise** plan. Use the dashboard to manage what collections your team has exposed for public consumption and for information about specific links. You can also delete links to collections you feel shouldn't be public.

To access the **Manage public elements** dashboard, select **Team** in the header, then select **Manage Public Elements**.

> You can also access this dashboard from the **Home** page. Go to the **Manage public elements** section and select **Manage** to go to the dashboard view.

#### Workspaces

In the dashboard's **Workspaces** tab, you have access to all the public workspaces created by your team. You can also view and respond to requests to make workspaces public. Along with workspace name, the request date and the requester details are displayed.

To respond to the request, select **Respond** to the right of the workspace. Approve the request to convert the workspace into a [public workspace](/docs/collaborating-in-postman/using-workspaces/public-workspaces/).

<img alt="Convert to public workspaces" src="https://assets.postman.com/postman-docs/request-visibility-public-workspace.jpg"/>

#### Public Documentation

The dashboard's **Documentation** tab displays all the collections with published documentation. Use the search box to filter by the publisher. Along with the collection name and environment name, you can view the date the documentation was published on, who published it, and the documentation URL. Copy the **Documentation URL** and paste it in a browser of your choice, and you will have access to the documentation.

#### Collection JSON links

The dashboard's **Collection JSON Links** tab displays all the collections with JSON links. Select **Allow sharing collection JSON via public link** to enable anyone with the link to access the collection in JSON format, even if they aren't on your team.

As the Community Manager, you will be able to view, access, or delete the collections with JSON links. In addition to the collection name, the dashboard displays more information about the date the link was updated on, who updated the link, and the JSON link.

If you turn off the **Allow sharing collection JSON via public link** option, no new links can be generated and existing links cannot be modified or edited. The previously created JSON links will still remain accessible.

Hover over the **JSON link** corresponding to the collection and select **Copy link to JSON**. Paste the link in a browser of your choice and you will have access to the collection JSON.

## Next steps

To learn more about workspaces, see [Creating workspaces](/docs/collaborating-in-postman/using-workspaces/creating-workspaces/) and [Managing workspaces](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/). For more details on how to create a public workspace, visit [Public workspaces](/docs/collaborating-in-postman/using-workspaces/public-workspaces/).
