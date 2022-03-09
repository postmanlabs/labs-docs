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
    name: "LGBTQ+ Pride Public Workspace: An Invitation for the API Community to Celebrate Pride"
    url: "https://blog.postman.com/lgbtq-pride-public-workspace-api-community/"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Public Workspaces | The Exploratory"
    url: "https://youtu.be/DjGbMdqnY64"
---

A _public workspace_ can be accessed by anyone in the Postman community. A public workspace can enhance a new user's onboarding experience with your API, inspire existing users with new use cases and resources, increase your API's discovery in Postman search results, and enable you to collaborate publicly with partners.

## Contents

* [Enabling your team profile](#enabling-your-team-profile)
* [Creating a public workspace](#creating-a-public-workspace)
* [Sharing a public workspace](#sharing-a-public-workspace)
* [Managing a public workspace](#managing-a-public-workspace)
    * [Editing a public workspace](#editing-a-public-workspace)
    * [Adding summaries](#adding-summaries)
    * [Adding elements to a public workspace](#adding-elements-to-a-public-workspace)
    * [Removing elements from a public workspace](#removing-elements-from-a-public-workspace)
    * [Deleting a public workspace](#deleting-a-public-workspace)
    * [Managing public workspace members](#managing-public-workspace-members)
* [Accessing a public workspace](#accessing-a-public-workspace)
* [Collaborating in a public workspace](#collaborating-in-a-public-workspace)
* [Next steps](#next-steps)

## Enabling your team profile

The first step to being able to collaborate using public workspaces is having a public team profile. It will encourage others to collaborate with you in a public workspace, allow you to solicit contributions gather product feedback, and  will help increase your API's discovery in search results. A public team profile will will also show up on the [Public API Network](https://www.postman.com/explore).

To make your [team profile](https://go.postman.co/settings/team/general) public:

1. Select **Team** next to your avatar in the upper-right corner of Postman, then select **Team settings**.
1. Select **Team profile**.
1. Select the toggle next to **Make team profile public** to set the profile to public.

An informative and inviting public profile can help increase adoption of your API. Consider adding additional information and assets to your team profile:

* Add a **team logo**, **cover photo**, and **favicon** to establish your identity and ensure consistent branding.
* Add information to the **About your team** section to help potential collaborators understand who your team is and what you do.
* Add your team's website and links to your social profiles to give potential collaborators other ways to engage with your team.

<img alt="Enable team profile" src="https://assets.postman.com/postman-docs/edit-team-profile-v9.1.0.jpg"/>

## Creating a public workspace

> You must be a [__workspace admin__](/docs/collaborating-in-postman/roles-and-permissions/#workspace-roles) to change the visibility of a workspace to public.

There are four types of workspaces: personal, team, private, and public workspaces. When you open a workspace, Postman will provide an overview of its contents, activity, and members in a new tab.

Open the workspace menu, then select **Create Workspace**.

<img alt="Workspace menu" src="https://assets.postman.com/postman-docs/workspace-switcher-v9.1.jpg" width="400px"/>

Specify a workspace name and summary. Under **Visibility**, select **Public**.

<img alt="Create public workspace" src="https://assets.postman.com/postman-docs/create-public-wkspc-v9.5.jpg" width="400px"/>

> Within a team, you cannot have two public workspaces with the same name.

You can also convert an existing workspace to a public workspace. Open the workspace in Postman. In the **Overview** tab, select **Workspace Settings** in the upper right. Under **Visibility**, select **Public** from the dropdown list, then **Update**.

If you are on a Postman Professional or Enterprise plan, you need a community manager's approval to change a workspace's visibility to __Public__. In the **Overview** tab, select **Workspace Settings**. Under **Visibility**, select **Public** from the dropdown list, then **Request to Change Visibility**.

<img alt="Visibility" src="https://assets.postman.com/postman-docs/workspace-settings-request-visibility-change-v9.1.0.jpg" width="400px"/>

Once you make a workspace public, all entities within that workspace become publicly accessible through the workspace.

### Notifying workspace members

When you make a workspace public, a notification is sent to all workspace members. Select the notification icon <img alt="Changelog icon" src="https://assets.postman.com/postman-docs/icon-notification-bell-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> in the top right corner to view notifications.

<img alt="In app notification" src="https://assets.postman.com/postman-docs/visibility-app-notification.jpg" width="500px"/>

In addition to this notification, all users will receive an email with the workspace information regarding who has made the change and which workspace was affected. The email will also provide a direct link to the workspace.

## Sharing a public workspace

You can share a public workspace by sharing its **workspace URL** directly. To access the public profile URL, navigate to the workspace **Overview** page. Hover over the workspace name to reveal the link icon <img alt="Link icon" src="https://assets.postman.com/postman-docs/icon-workspace-link-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px">. Select the link icon to copy the workspace's URL to your clipboard. You can share this workspace URL with other users.

<!-- TODO: screenshot -->

> When you share a workspace, it must be public. If the workspace is restricted to a team or is a private workspace, users who do not have access will not be able to open the workspace. <!-- TODO: reword -->

# Managing a public workspace

<!-- TODO: intro for this section -->

### Editing a public workspace

To view and edit your public workspace's name and summary, navigate to the workspace in Postman. In the **Overview** tab, hover over the workspace name or summary and select to edit. Changes to the workspace name and summary will be saved automatically.

To update the workspace's visibility or to delete the workspace, select **Workspace Settings**.

<img alt="Create public workspace dropdown" src="https://assets.postman.com/postman-docs/workspace-edit-name-details-overview-tab-v9.1.jpg"/>

### Adding summaries
<!-- TODO: don't love this for this page but not sure where it should go -->
Add summaries to improve the visibility of your collections, APIs, and workspaces on the Public API Network.

1. Navigate to your team page by selecting your team name from **Home**, then selecting **View team profile**.
1. Select the **Collections**, **APIs**, or **Workspaces** tab.
1. Hover over an item and select <img alt="Edit icon" src="https://assets.postman.com/postman-docs/documentation-edit-icon-v8-10.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> **Edit listing**.
1. Enter a brief **Summary** that describes your collection, API, or workspace.
1. Select **Save**.

![Adding a summary](https://assets.postman.com/postman-docs/workspace-add-summary-v9.5.jpg)

### Adding elements to a public workspace

You can add existing collections and environments to another public workspace by sharing them.

* To share a _collection_ to a public workspace, open it using Collections on the left side, then select <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> > **Share collection**.
* To share an _environment_ to a public workspace, open it using Environments on the left side, then select <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> > **Share environment**.

Select the public workspace you want to share to, and choose whether you also want to remove the element from its current workspace. Select **Share and Continue**.

### Removing elements from a public workspace

When you remove an element from a public workspace, it's no longer visible in that particular workspace. The element is still available in any other workspace where it has been added.

* To remove a _collection_ from a public workspace, open it using Collections on the left side, then select <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> > **Remove from workspace**. Confirm that you would like to remove the collection from the current workspace. The collection will no longer be visible in the workspace.
* To remove an _environment_ from a public workspace, select <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> next to the environment menu or select <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> next to the Share button in the Environment tab. Select **Remove from workspace** and confirm that you would like to remove the environment from the current workspace. The environment will no longer be visible in the workspace.

> Deleting an element is different from removing it. When you delete an element, it's no longer available in any workspace. When you remove an element from a specific workspace, it will still be available in any other workspaces it was in.

#E# Deleting a public workspace

Public workspaces must have their visibility reverted in order to be deleted. If you try to delete a public workspace by selecting <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> on the right corner of the workspace overview, the option to delete will be greyed out.

![Deleting a public workspace](https://assets.postman.com/postman-docs/delete-option-greyed-public-workspace.jpg)

To change the visibility of a public workspace, change the visibility dropdown to **Team**, then **Save Changes**. After changing the visibility, you will be able to delete the workspace. Select <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> > **Delete workspace**.

### Managing public workspace members

If you're a team administrator you can add or remove any member from your public workspace using the **Members** tab. To add members to a public workspace, see [Sharing workspaces](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#sharing-workspaces).

Another way to add workspace members is to select **Manage Team** and select **Invite Users**.

![Add workspace members to a public workspace](https://assets.postman.com/postman-docs/manage-team-v8.jpg)

Enter an email address, select **Add** to the team, select the roles you would like to assign to them, then select **Send Invitations**. You can also generate a link and invite people to your team by sharing the link with them.

![Edit members for a public workspace](https://assets.postman.com/postman-docs/edit-member-public-workspace.jpg)

> Team members will receive an email and in-app notification when added to a public workspace.

To remove any team member, select <img alt="External link icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg" width="12px" style="vertical-align:middle;margin-bottom:5px"> (the delete icon) next to the individual you want to remove from the workspace, and select **Remove User From Team**.

![Remove team members for a public workspace](https://assets.postman.com/postman-docs/remove-member-public-workspace.jpg)

Select **X** next to the team member you want to remove from the public workspace, and select **Save**.

<img alt="Remove members for a public workspace from overview" src="https://assets.postman.com/postman-docs/remove-team-member-workspace-overview.jpg" width="400px"/>

## Accessing a public workspace

You can access public workspaces using the Postman Explore page's [**Workspaces** category](https://www.postman.com/explore/workspaces). You can also access the public workspaces that you own or are a member of using the **Workspaces** selector at the top of Postman.

![Access public workspaces](https://assets.postman.com/postman-docs/accessing-public-workspaces.jpg)

## Collaborating in a public workspace

<!-- TODO: intro for this section -->
<!-- TODO: new subheading titles, these are bad -->

### Inviting collaboration on your workspace

An informative and inviting public workspace can potentially increase adoption of your APIs.

complete team public profile
good public workspace including documentation for your APIs

Signs of a healthy public workspace include:

* **Active forks of your workspace.** The number of people who [fork your workspace](/docs/collaborating-in-postman/version-control-for-collections/#forking-postman-elements) and work on their forks can indicate strong collaborator engagement.
* **People watching your workspace.** The number of people who [watch your workspace](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#watching-a-workspace) for activity can reflect interest from potential collaborators.
* **Recent activity on the workspace.** A [workspace activity feed](/docs/collaborating-in-postman/using-workspaces/changelog-and-restoring-collections/#viewing-workspace-activity) that shows ongoing work assures potential collaborators that your team updates and maintains the workspace.
* **API calls from Postman.** The percentage of calls to your API that include a Postman `User-Agent` header can be a good indicator that your workspace is being used.

For more information on using a public workspace to help increase adoption of your API, see the [Postman blog](https://blog.postman.com/increasing-adoption-of-an-api-with-a-public-workspace/).

### Collaborating on other's workspaces

If you want to collaborate with someone in their public workspace, you can...

To collaborate on entities within a public workspace, open the workspace menu and select the workspace.

For collections and environments, [create a fork](/docs/collaborating-in-postman/version-control-for-collections/#forking-a-collection) and request to merge changes using a [pull request](/docs/collaborating-in-postman/version-control-for-collections/#creating-pull-requests).

For APIs, navigate to the API and version. Select **Definition** > **Request Access** to request an editor role.

## Next steps

To add an API to the network, see [Adding your API](/docs/collaborating-in-postman/adding-private-network/#adding-your-apis). <!-- TODO: for frick's sake, what the heck is this -->
