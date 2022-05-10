---
title: "Public workspaces"
order: 76
page_id: "public_workspaces"
updated: 2022-03-11
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Creating workspaces"
    url: "/docs/collaborating-in-postman/using-workspaces/creating-workspaces/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Public Workspaces | The Exploratory"
    url: "https://youtu.be/DjGbMdqnY64"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "How to Set Up Your First Public Workspace in 5 Easy Steps"
    url: "https://blog.postman.com/how-to-set-up-public-workspaces/"
  - type: link
    name: "Increasing Adoption of an API with a Public Workspace"
    url: "https://blog.postman.com/increasing-adoption-of-an-api-with-a-public-workspace/"
  - type: link
    name: "Public Workspaces: Why We Created Them and What You Can Do with Them"
    url: "https://blog.postman.com/public-workspaces-why-we-created-them-what-you-can-do/"
  - type: link
    name: "Workspace Linter Using a Style Guide | Postman Level Up"
    url: "https://youtu.be/6MSS8YgvFVA"

---

Anyone in the Postman community can access a _public workspace_. A public workspace can enhance a new user's onboarding experience with your API, inspire your existing users with new use cases and resources, increase your API's discovery in Postman search results, and enable you to work publicly with partners.

## Contents

* [Enabling your team profile](#enabling-your-team-profile)
* [Creating a public workspace](#creating-a-public-workspace)
* [Inviting collaboration on a public workspace](#inviting-collaboration-on-a-public-workspace)
    * [Sharing a public workspace](#sharing-a-public-workspace)
* [Managing a public workspace](#managing-a-public-workspace)
    * [Editing public workspace details](#editing-public-workspace-details)
    * [Moving elements to a public workspace](#moving-elements-to-a-public-workspace)
    * [Deleting elements from a public workspace](#deleting-elements-from-a-public-workspace)
    * [Deleting a public workspace](#deleting-a-public-workspace)
    * [Managing public workspace users and roles](#managing-public-workspace-users-and-roles)
* [Collaborating in another user's public workspace](#collaborating-in-another-users-public-workspace)
* [Next steps](#next-steps)

## Enabling your team profile

Before other Postman users can work with your team in a public workspace, your team needs to have a public profile. A public team profile will encourage others to collaborate with you in a public workspace, allow you to ask for contributions and gather feedback, and will help increase your API's discovery in search results. A public team profile will also show up on the [Public API Network](https://www.postman.com/explore).

To make your [team profile](https://go.postman.co/settings/team/general) public:

1. In the upper-right corner of Postman next to your avatar, select **Team** > **Team settings**.
1. Select **Team profile**.
1. Select **Make team profile public** to set the profile to public.

An informative and inviting public profile can help increase adoption of your API. Consider adding more information and assets to your team profile:

* Add a **team logo**, **cover photo**, and **favicon** to establish your identity and ensure consistent branding.
* Add information to the **About your team** section to help potential collaborators understand who your team is and what you do.
* Add links to your team's website and social profiles to give potential collaborators other ways to engage with your team.

<img alt="Enable team profile" src="https://assets.postman.com/postman-docs/edit-team-profile-v9.1.0.jpg"/>

For more tips on how to create a public profile, see [How to create your Postman profile](https://blog.postman.com/how-to-create-your-postman-public-profile/) on the Postman blog.

## Creating a public workspace

To create a new public workspace:

1. Select **Workspaces** from the header, then select **Create Workspace**.

    <img alt="Workspace menu" src="https://assets.postman.com/postman-docs/workspace-switcher-v9.1.jpg" width="400px"/>

1. Specify a workspace **Name** and **Summary**.
1. Under **Visibility**, select **Public**.
1. Select **Create workspace**.

    <img alt="Create public workspace" src="https://assets.postman.com/postman-docs/create-public-wkspc-v9.5.jpg" width="400px"/>

> Within a team, you can't have two public workspaces with the same name.

To convert an existing workspace to a public workspace:

1. Open the workspace. In the **Overview** tab, select **Workspace Settings** in the upper right.
1. Under **Visibility**, select **Public**.
1. Select **Update**.

> You must be a workspace [Admin](/docs/collaborating-in-postman/roles-and-permissions/#workspace-roles) to change the visibility of a workspace.
<!--  -->
> If you are on a [Postman Professional or Enterprise plan](https://www.postman.com/pricing), you need a approval from a user with the [Community Manager role](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) to change a workspace's visibility. In the **Overview** tab, select **Workspace Settings**. Under **Visibility**, select **Public** from the dropdown list, then **Request to Change Visibility**.

Once you make a workspace public, all entities within that workspace become publicly accessible through the workspace.

When you make a workspace public, Postman sends in-app and email notifications to all workspace members. To view your in-app notifications, select the notification icon <img alt="Changelog icon" src="https://assets.postman.com/postman-docs/icon-notification-bell-v9.jpg#icon" width="18px"> in the Postman header.

## Inviting collaboration on a public workspace

An informative and inviting public workspace can help increase adoption of your APIs. To invite collaboration from other users on your public workspace, you need to have:

* A complete [public team profile](#enabling-your-team-profile).
* A complete [workspace overview](#editing-public-workspace-details), including a name, summary, and description.
* Descriptive [documentation](/docs/publishing-your-api/documenting-your-api/) for your APIs.

Signs of a public workspace that invites collaboration include:

* **Active forks of your workspace** - The number of people who [fork your workspace](/docs/collaborating-in-postman/version-control-for-collections/#forking-postman-elements) and work on their forks shows strong collaborator engagement.
* **People watching your workspace** - The number of people who [watch your workspace](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#watching-a-workspace) for activity can reflect interest from potential collaborators.
* **Recent activity on the workspace** - A [workspace activity feed](/docs/collaborating-in-postman/using-workspaces/changelog-and-restoring-collections/#viewing-workspace-activity) that shows ongoing work assures potential collaborators that your team updates and maintains the workspace.

For more information on using a public workspace to help increase adoption of your API, see [Increasing adoption of an API with a public workspace](https://blog.postman.com/increasing-adoption-of-an-api-with-a-public-workspace/) on the Postman blog.

### Sharing a public workspace

You can share a public workspace by giving collaborators its **workspace URL** directly.

To access a workspace's URL:

1. Go to the workspace **Overview** page.
1. Hover over the workspace name to reveal the link icon <img alt="Link icon" src="https://assets.postman.com/postman-docs/icon-workspace-link-v9.jpg#icon" width="18px">.
1. Select the link icon to copy the workspace's URL to your clipboard.

You can share this workspace URL with other users.

<img alt="Copy link to workspace" src="https://assets.postman.com/postman-docs/copy-workspace-link-v9.jpg" width="500px"/>

> When you share a workspace with Postman users who aren't team members, its visibility must be public. If the workspace is restricted to a team or is a private or personal workspace, users who don't have access won't be able to open the workspace.

## Managing a public workspace

When a user opens a public workspace, Postman shows an overview of its contents, activity, and members in an **Overview** tab. The user interacts with the contents of the public workspace, including the collections, APIs, environments, and other elements. As a team member with an [Admin role](/docs/collaborating-in-postman/roles-and-permissions/#workspace-roles) on the workspace, you can manage the overview, the elements in the workspace, and the members of the workspace.

### Editing public workspace details

Users with an [Admin role](/docs/collaborating-in-postman/roles-and-permissions/#workspace-roles) for a workspace can edit workspace details, including updating the workspace's name, summary, description, and visibility. For more information, see [Editing workspace details](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#editing-workspace-details).

> The [Public API Network](/docs/getting-started/exploring-public-api-network/) displays your workspace's name and summary. Make your workspace name and summary informative to improve its visibility on the Public API Network.

### Moving elements to a public workspace

You can move Postman elements from your personal, private, or team workspace into a public workspace. You must have an [Admin or Editor role](/docs/collaborating-in-postman/roles-and-permissions/#workspace-roles) for the public workspace to move elements to it.

To move an existing element to a public workspace:

1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the collection or environment name, then select **Move**.
1. Select the public workspace to which you want to move the collection or environment, then select **Move Collection** or **Move Environment**.

The Postman element that you move to the public workspace will no longer exist in the original workspace.

> If there are monitors, mock servers, or integrations associated with the moved element, they remain in the original workspace.

### Deleting elements from a public workspace

You can delete Postman elements from a public workspace for which you have an [Admin or Editor role](/docs/collaborating-in-postman/roles-and-permissions/#workspace-roles):

1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the element's name, then select **Delete**.
1. Select **Delete** to confirm your choice.

You can retrieve the deleted element by selecting <img alt="Delete icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px"> **Trash** from the footer.

### Deleting a public workspace

To delete a public workspace, you must change its visibility first. You must have an [Admin role](/docs/collaborating-in-postman/roles-and-permissions/#workspace-roles) for a workspace to be able to delete it.

1. On the workspace overview, select **Workspace Settings**.
1. Under **Visibility**, select one of **Team**, **Private**, or **Personal**, then select **Update**.
1. After you update its visibility, select **Delete Workspace**.
1. Enter the workspace name to confirm that you want to delete it, then select **Delete workspace**.

<img alt="Unable to delete a public workspace" src="https://assets.postman.com/postman-docs/public-workspace-cant-delete-v9.jpg" width="350px"/>

### Managing public workspace users and roles

If you have a [team Admin role](/docs/collaborating-in-postman/roles-and-permissions/#team-roles), you can manage collaborators and user roles in a public workspace:

* **Invite team members, groups, and external users to collaborate in a public workspace.** To learn more about inviting users to work with you in your public workspace, see [Sharing workspaces](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#sharing-workspaces).
* **Assign access to elements within a workspace.** Workspace roles control access to elements. You can assign workspace roles to an individual user or to a user group. To learn more about assigning workspace roles or removing a user from a workspace, see [Managing workspace roles](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#managing-workspace-roles).

> Team members will receive an email and in-app notification when they're added to a public workspace.

## Collaborating in another user's public workspace

To collaborate with someone else in their public workspace, select **Workspaces** from the header, and then select the workspace you want to work in.

For **collections** and **environments**, [create a fork](/docs/collaborating-in-postman/version-control-for-collections/#forking-a-collection) and request to merge changes using a [pull request](/docs/collaborating-in-postman/version-control-for-collections/#creating-pull-requests).

For **APIs**, select the API and version. Select the **Definition** tab and then select **Request Access** to request an Editor role.

You can access public workspaces using the Postman Explore page's [**Workspaces** category](https://www.postman.com/explore/workspaces). You can also access the public workspaces that you own or are a member of using **Workspaces** in the header.

![Access public workspaces](https://assets.postman.com/postman-docs/accessing-public-workspaces.jpg)

You can view who's active in a public workspace via the list of avatars in the Postman header. This list will include all active users with [public profiles](/docs/getting-started/postman-account/#making-your-profile-public) as well as users who've chosen to remain anonymous by not enabling their public profile.

<img alt="Active users in public workspace" src="https://assets.postman.com/postman-docs/presence-public-workspace-v9.15.jpg" width="250px"/>

## Next steps

When you're working collaboratively in a public workspace, users will fork collections and create pull requests. To learn more about version control in Postman, see [Using version control](/docs/collaborating-in-postman/version-control-for-collections/).
