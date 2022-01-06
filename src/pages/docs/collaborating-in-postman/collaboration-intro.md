---
title: "Working with your team"
order: 71
page_id: "collaboration"
warning: false
contextual_links:
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Working With Your Team in Postman | The Exploratory"
    url: "https://youtu.be/5lscUV-Exac"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Get More Out of Postman by Collaborating with Your Team"
    url: "https://blog.postman.com/get-more-out-of-postman-by-collaborating-with-your-team/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Creating workspaces"
    url: "/docs/collaborating-in-postman/using-workspaces/creating-workspaces/"
  - type: link
    name: "Your private API network"
    url: "/docs/collaborating-in-postman/adding-private-network/"

---

> Postman Free allows teams of up to three to collaborate at no cost. To collaborate with additional team members, features, and increased usage limits, see [Plans and Pricing](https://www.postman.com/pricing/).

Postman allows all users to collaborate with their teams through Team Workspaces. Using this feature, you can easily collaborate and share your collections, environments, integrations, history, mocks, monitors, and more.

Postman will alert you with notifications when activities occur within your team and workspace. You can view and opt in or out notifications by selecting your avatar in the upper right and selecting **Notification Preferences**.

## Contents

* [Working with team workspaces](#working-with-team-workspaces)
* [Team discovery](#team-discovery)

    * [Making your team discoverable](#making-your-team-discoverable)

    * [Finding teams within your organization](#finding-teams-within-your-organization)

* [Leaving a team](#leaving-a-team)

* [Usage limit](#usage-limit)

    * [How archiving works](#how-archiving-works)

    * [Recovering archived collections](#recovering-your-archived-collections)

* [Next steps](#next-steps)

## Working with team workspaces

A team workspace allows you to ... <!-- TODO: fill this in -->

Postman creates a default Team Workspace. You cannot delete this workspace but you can rename it.

You can invite team members to join a [new](/docs/collaborating-in-postman/using-workspaces/creating-workspaces/ ) or existing workspace. For more details about how to invite a team member to a workspace, see [Sharing workspaces](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#sharing-workspaces).

You can create a new team workspace and invite members.

## Team discovery

Enabling team discovery encourages collaboration and eases the onboarding process by allowing users accessing Postman with their company email address to request to join pre-existing teams within their organization.

### Making your team discoverable

You can enable team discovery in the dashboard by selecting **Team** > **Team Settings** > [**Team Discovery**](https://go.postman.co/settings/team/discovery).

[![Enable team discovery](https://assets.postman.com/postman-docs/team-discovery-enable-v9.1.0.jpg)](https://assets.postman.com/postman-docs/team-discovery-enable-v9.1.0.jpg)

> Team admins will receive an email notification when team discovery is enabled.

You can optionally add a question for pending team members to answer when they request to join your team. Enter your question and select **Update Question**. Anyone who requests to join the team will be prompted with the question.

> If you do not specify a question, team members can still add a note when they ask to join.

You will receive a notification when anyone makes a request to join your team, including their answer to any question you set, or an optional note.

[![Team Request Approval](https://assets.postman.com/postman-docs/admin-team-join-requests.jpg)](https://assets.postman.com/postman-docs/admin-team-join-requests.jpg)

### Finding teams within your organization

When you log in to the Postman web dashboard using a verified email address for your company or organization, you can see available teams to join by selecting your avatar > **Your Team**. You will also be prompted with available teams when you first sign into your Postman account with a verified address.

[![Choose Team](https://assets.postman.com/postman-docs/join-team-from-list.jpg)](https://assets.postman.com/postman-docs/join-team-from-list.jpg)

You will see a list of the available teams within your organization. Select a team. Answer the question set by the team admin, if there is one. You can also add an optional note. Select **Request to join**.

<img alt="Team Join Question" src="https://assets.postman.com/postman-docs/team-join-question-entry.jpg" width="400px"/>

The team admin will receive a notification that you asked to join the team. Once they approve your request, you will be able to access the team and collaborate on API projects within it.

## Leaving a team

You can leave a Postman team by navigating to your [Postman Dashboard](https://go.postman.co/home), selecting your avatar in the top-right corner, then **Account Settings**. Select **Team** on the left. You can then opt to **Leave Team**.

<img src="https://assets.postman.com/postman-docs/leave-team-v9.1.jpg" alt="Leave team"/>

> If your team has [SCIM configured](/docs/administration/managing-your-team/configuring-scim/), you must contact your Postman team admins to leave the team.

When you leave a team, you no longer have access to the team's workspaces or any of the elements in them. You will still have access to your personal workspaces.

If you are the last member to leave your team, you will have the option to transfer collections to a personal workspace.

<img src="https://assets.postman.com/postman-docs/leave-and-delete-team.jpg" alt="Leave and delete team" width="400px"/>

> If you are invited to a new team and you are the last member in your current team, all team data will be transferred to your personal default workspace.

## Usage limit

You can check your usage limits within Postman. Free users can select the drop-down menu to the right of **Upgrade** in the app. Paid users can access the menu by selecting a team name.

The usage menu allows you to review limits for APIs, shared requests and history, mocks, monitors, and public documentation. Select **Resource Usage** to view your usage period.

[![usage info](https://assets.postman.com/postman-docs/Screen%20Shot%202019-11-11%20at%205.38.16%20PM.png)](https://assets.postman.com/postman-docs/Screen%20Shot%202019-11-11%20at%205.38.16%20PM.png)

If your free team's collaboration exceeds usage limits, Postman will archive collections to bring your team within usage limits. Collections that have gone the longest without being revised will be archived first, based on the last edit date.

### How archiving works

Postman archives collections when a free team's collaboration exceeds usage limits. Archived collections cannot be collaborated on, however they are still accessible to users. You will receive an in-app notification when a collection is archived.

Postman chooses which collection(s) to archive based on last edit date. The collections that have gone the longest without a revision will be archived in order to bring your team within usage limits.

Postman indicates the number of archived collections at the bottom of the left sidebar.

[![archived message](https://assets.postman.com/postman-docs/ArchiveMsg2.png)](https://assets.postman.com/postman-docs/ArchiveMsg2.png)

### Recovering your archived collections

To recover archived collections, select **Archived Collections**.

You will then be directed to your dashboard. Select **Download your data** > **Request data export** > **Request an archive**.
[![export data1](https://assets.postman.com/postman-docs/Recovering_ArchivedCol1.png)](https://assets.postman.com/postman-docs/Recovering_ArchivedCol1.png)

You will then be able to select **Download** to retrieve your archived data.

[![Download Data](https://assets.postman.com/postman-docs/Download_Data1.png)](https://assets.postman.com/postman-docs/Download_Data1.png)

> The `archive.json` inside the downloaded ZIP archive is not a Postman collection that can be imported; it is simply an index of files present in the archive. A collections folder contains all the files that can be imported.

Alternatively, you can download your archived data directly within Postman. To learn how, refer to [Settings](/docs/getting-started/settings/).

## Next steps

For a more in-depth introduction to workspaces and how they can help organize your API development, check out [Creating Workspaces](/docs/collaborating-in-postman/using-workspaces/creating-workspaces/).

To see how you can share the APIs that your teams use internally, check out [Your private API Network](/docs/collaborating-in-postman/adding-private-network/).
