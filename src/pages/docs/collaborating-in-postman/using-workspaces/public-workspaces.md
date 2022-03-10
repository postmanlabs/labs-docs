---
title: "Public workspaces"
order: 76
page_id: "public_workspaces"
updated: 2022-03-11
warning: false
contextual_links:
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Creating workspaces"
    url: "/docs/collaborating-in-postman/using-workspaces/creating-workspaces/"
  - type: link
    name: "Public Workspaces: Why We Created Them and What You Can Do with Them"
    url: "https://blog.postman.com/public-workspaces-why-we-created-them-what-you-can-do/"
  - type: link
    name: "Increasing Adoption of an API with a Public Workspace"
    url: "https://blog.postman.com/increasing-adoption-of-an-api-with-a-public-workspace/"
  - type: link
    name: "How to Set Up Your First Public Workspace in 5 Easy Steps"
    url: "https://blog.postman.com/how-to-set-up-public-workspaces/"
  - type: link
    name: "LGBTQ+ Pride Public Workspace: An Invitation for the API Community to Celebrate Pride"
    url: "https://blog.postman.com/lgbtq-pride-public-workspace-api-community/"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Public Workspaces | The Exploratory"
    url: "https://youtu.be/DjGbMdqnY64"
---

Anyone in the Postman community can access a _public workspace_. A public workspace can enhance a new user's onboarding experience with your API, inspire your existing users with new use cases and resources, increase your API's discovery in Postman search results, and enable you to work publicly with partners.

## Contents

* [Enabling your team profile](#enabling-your-team-profile)
* [Creating a public workspace](#creating-a-public-workspace)
* [Inviting collaboration on a public workspace](#inviting-collaboration-on-a-public-workspace)
    * [Sharing a public workspace](#sharing-a-public-workspace)
* [Managing a public workspace](#managing-a-public-workspace)
    * [Editing public workspace details](#editing-public-workspace-details)
    * [Adding elements to a public workspace](#adding-elements-to-a-public-workspace)
    * [Removing elements from a public workspace](#removing-elements-from-a-public-workspace)
    * [Deleting a public workspace](#deleting-a-public-workspace)
    * [Managing public workspace members](#managing-public-workspace-members)
* [Collaborating in another user's public workspace](#collaborating-in-another-users-public-workspace)
* [Next steps](#next-steps)

## Enabling your team profile

Before other Postman users can work with your team in a public workspace, your team needs to have a public profile. A public team profile will encourage others to collaborate with you in a public workspace, allow you to ask for contributions and gather feedback, and will help increase your API's discovery in search results. A public team profile will also show up on the [Public API Network](https://www.postman.com/explore).

To make your [team profile](https://go.postman.co/settings/team/general) public:

1. Select **Team** next to your avatar in the upper-right corner of Postman, then select **Team settings**.
1. Select **Team profile**.
1. Select the toggle next to **Make team profile public** to set the profile to public.

An informative and inviting public profile can help increase adoption of your API. Consider adding more information and assets to your team profile:

* Add a **team logo**, **cover photo**, and **favicon** to establish your identity and ensure consistent branding.
* Add information to the **About your team** section to help potential collaborators understand who your team is and what you do.
* Add links to your team's website and social profiles to give potential collaborators other ways to engage with your team.

<img alt="Enable team profile" src="https://assets.postman.com/postman-docs/edit-team-profile-v9.1.0.jpg"/>

For more tips on how to create a public profile, see [How to create your Postman profile](https://blog.postman.com/how-to-create-your-postman-public-profile/) on the Postman blog.

## Creating a public workspace

To create a new public workspace:

1. Open the workspace menu, then select **Create Workspace**.

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

> You must have an [Admin](/docs/collaborating-in-postman/roles-and-permissions/#workspace-roles) role for a workspace to change its visibility to public.
<!--  -->
> If you are on a [Postman Professional or Enterprise plan](https://www.postman.com/pricing), you need a community manager's approval to change a workspace's visibility to public. In the **Overview** tab, select **Workspace Settings**. Under **Visibility**, select **Public** from the dropdown list, then **Request to Change Visibility**.

Once you make a workspace public, all entities within that workspace become publicly accessible through the workspace.

When you make a workspace public, Postman sends in-app and email notifications to all workspace members. To view your in-app notifications, select the notification icon <img alt="Changelog icon" src="https://assets.postman.com/postman-docs/icon-notification-bell-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> in the top right corner of Postman.

## Inviting collaboration on a public workspace

An informative and inviting public workspace can help increase adoption of your APIs. To invite collaboration from other users on your public workspace, you should have:

* A complete [public team profile](#enabling-your-team-profile).
* A complete [workspace overview](#editing-public-workspace-details), including a name, summary, and description.
* Descriptive [documentation](/docs/publishing-your-api/documenting-your-api/) for your APIs.

Signs of a public workspace that invites collaboration include:

* **Active forks of your workspace.** The number of people who [fork your workspace](/docs/collaborating-in-postman/version-control-for-collections/#forking-postman-elements) and work on their forks shows strong collaborator engagement.
* **People watching your workspace.** The number of people who [watch your workspace](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#watching-a-workspace) for activity can reflect interest from potential collaborators.
* **Recent activity on the workspace.** A [workspace activity feed](/docs/collaborating-in-postman/using-workspaces/changelog-and-restoring-collections/#viewing-workspace-activity) that shows ongoing work assures potential collaborators that your team updates and maintains the workspace.

For more information on using a public workspace to help increase adoption of your API, see the [Increasing adoption of an API with a public workspace](https://blog.postman.com/increasing-adoption-of-an-api-with-a-public-workspace/) on the Postman blog.

### Sharing a public workspace

You can share a public workspace by giving collaborators its **workspace URL** directly.

To access a workspace's URL:

1. Navigate to the workspace **Overview** page.
1. Hover over the workspace name to reveal the link icon <img alt="Link icon" src="https://assets.postman.com/postman-docs/icon-workspace-link-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px">.
1. Select the link icon to copy the workspace's URL to your clipboard.

You can share this workspace URL with other users.

<img alt="Copy link to workspace" src="https://assets.postman.com/postman-docs/copy-workspace-link-v9.jpg" width="500px"/>

> When you share a workspace with Postman users who aren't workspace members, its visibility must be public. If the workspace is restricted to a team or is a private or personal workspace, users who don't have access won't be able to open the workspace.

## Managing a public workspace

When a user opens a public workspace, Postman shows an overview of its contents, activity, and members in a new tab. The user interacts with the contents of the public workspace—the collections, APIs, environments, and other elements. As a team member with an Admin role on the workspace, you can manage the overview, the elements in the workspace, and the members of the workspace.

### Editing public workspace details

Users with an [Admin role](/docs/collaborating-in-postman/roles-and-permissions/#workspace-roles) for a workspace can edit workspace details, including updating the workspace's name, summary, description, and visibility. For more information, see [Editing workspace details](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#editing-workspace-details).

> The [Public API Network](/docs/getting-started/exploring-public-api-network/) displays your workspace's name and summary. Make your workspace name and summary informative to improve its visibility on the Public API Network.

### Adding elements to a public workspace

You can add existing collections and environments to another public workspace by sharing them.

* To share a _collection_ to a public workspace, open it using Collections on the left side, then select the three dots icon <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> > **Share collection**.
* To share an _environment_ to a public workspace, open it using Environments on the left side, then select the three dots icon <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> > **Share environment**.

Select the public workspace you want to share to, and choose whether you also want to remove the element from its current workspace. Select **Share and Continue**.

### Removing elements from a public workspace

When you remove an element from a public workspace, it's no longer visible in that particular workspace. The element is still available in any other workspace in which it exists.

* To remove a _collection_ from a public workspace, open it using Collections on the left side, then select the three dots icon <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> > **Remove from workspace**. Confirm that you would like to remove the collection from the current workspace. The collection will no longer be visible in the workspace.
* To remove an _environment_ from a public workspace, select the three dots icon <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> next to the environment menu or select <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> next to the Share button in the Environment tab. Select **Remove from workspace** and confirm that you would like to remove the environment from the current workspace. The environment will no longer be visible in the workspace.

> Deleting an element is different from removing it. When you delete an element, it's no longer available in any workspace. When you remove an element from a specific workspace, it will still be available in any other workspaces in which it exists.

### Deleting a public workspace

To delete a public workspace, you must revert its visibility. If you try to delete a public workspace by selecting the three dots icon <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> on the right corner of the workspace overview, the option to delete is greyed out.

![Deleting a public workspace](https://assets.postman.com/postman-docs/delete-option-greyed-public-workspace.jpg)

To change the visibility of a public workspace and delete it:

1. Change the visibility dropdown to **Team**, then **Save Changes**.
1. Select the three dots icon <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px">, then select **Delete workspace**.

### Managing public workspace users and roles

If you have a [team Admin role](/docs/collaborating-in-postman/roles-and-permissions/#team-roles), you can manage collaborators and user roles in a public workspace:

* **Invite team members, groups, and external users to collaborate in a public workspace.** To learn more about inviting users to work with you in your public workspace, see [Sharing workspaces](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#sharing-workspaces).
* **Assign access to elements within a workspace.** Workspace roles control access to elements. You can assign workspace roles to an individual user or to a user group. To learn more about assigning workspace roles or removing a user from a workspace, see [Managing workspace roles](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#managing-workspace-roles).

> Team members will receive an email and in-app notification when they're added to a public workspace.

## Collaborating in another user's public workspace

To collaborate with someone else in their public workspace, open the **Workspace** menu and select the workspace you want to work in.

For **collections** and **environments**, [create a fork](/docs/collaborating-in-postman/version-control-for-collections/#forking-a-collection) and request to merge changes using a [pull request](/docs/collaborating-in-postman/version-control-for-collections/#creating-pull-requests).

For **APIs**, navigate to the API and version. Select **Definition** > **Request Access** to request an editor role.

You can access public workspaces using the Postman Explore page's [**Workspaces** category](https://www.postman.com/explore/workspaces). You can also access the public workspaces that you own or are a member of using the **Workspaces** selector at the top of Postman.

![Access public workspaces](https://assets.postman.com/postman-docs/accessing-public-workspaces.jpg)

## Next steps

When you're working collaboratively in a public workspace, users will fork collections and create pull requests. To learn more about version control in Postman, see [Using version control](/docs/collaborating-in-postman/version-control-for-collections/).
