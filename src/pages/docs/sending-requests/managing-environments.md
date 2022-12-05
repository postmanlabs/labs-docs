---
title: "Managing environments"
order: 25
updated: 2022-11-16
page_id: "managing-environments"
search_keyword: "pm.globals.set, globals.set, pm.environment.set, environment.set, pm.variables.get, variables.get, pm.globals.get, globals.get, pm.environment.get, environment.get"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Using variables"
    url:  "/docs/sending-requests/variables/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Postman | How to Use Environments"
    url:  "https://youtu.be/oCEDjp3XMco"
  - type: link
    name: "Intro to Postman | Chain Requests"
    url: "https://youtu.be/4fULCou_7Wc"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "How to Control Access to Variables, Workflows, and More"
    url:  "https://blog.postman.com/postman-environments-how-to-control-access-to-variables-workflows-and-more/"
  - type: link
    name: "Dynamically unset environment variables"
    url: "https://blog.postman.com/pro-tip-dynamically-unset-postman-environment-variables/"
  - type: link
    name: "Securely Using API Keys in Postman"
    url: "https://blog.postman.com/how-to-use-api-keys/"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Hathway"
    url: "https://www.postman.com/case-studies/hathway/"
  - type: link
    name: "VideoAmp"
    url: "https://www.postman.com/case-studies/videoamp/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Collaborating with your team"
    url: "/docs/collaborating-in-postman/working-with-your-team/collaboration-overview/"
  - type: link
    name: "Version control overview"
    url:  "/docs/collaborating-in-postman/using-version-control/version-control-overview/"

warning: false

---

An environment is a set of [variables](/docs/sending-requests/variables/) you can use in your Postman requests. You can use environments to group related sets of values together and manage access to shared Postman data if you are working as part of a team.

## Contents

* [Creating environments](#creating-environments)
    * [Adding environment variables](#adding-environment-variables)
* [Accessing environments](#accessing-environments)
    * [Selecting an active environment](#selecting-an-active-environment)
    * [Editing environment variables](#editing-environment-variables)
    * [Setting environment variables from scripts](#setting-environment-variables-from-scripts)
* [Working with environments as a team](#working-with-environments-as-a-team)
    * [Managing environment roles](#managing-environment-roles)
    * [Using an environment in Viewer role](#using-an-environment-in-viewer-role)
        * [Requesting environment access](#requesting-environment-access)
    * [Using an environment in Editor role](#using-an-environment-in-editor-role)
    * [Forking environments](#forking-environments)
    * [Viewing pull requests, forks, and environment details](#viewing-pull-requests-forks-and-environment-details)
* [Next steps](#next-steps)

## Creating environments

Postman displays the active environment in the environment selector, located in the top right of the workbench.

You can access all environments from __Environments__ in the sidebar. Select the set active icon <img alt="Set active icon" src="https://assets.postman.com/postman-docs/icon-checkmark-v9.jpg#icon" width="16px"> next to an environment to make it the active environment.

Select an environment's name to open the environment editor.

[![Environment editor](https://assets.postman.com/postman-docs/environment-editor-v9.13.jpg)](https://assets.postman.com/postman-docs/environment-editor-v9.13.jpg)

The environment quick look icon <img alt="Environment quick look icon" src="https://assets.postman.com/postman-docs/icon-environment-quick-look.jpg#icon" width="16px"> is next to the environment selector. The environment quick look lists variables for the active environment, and any global variables you have declared or that are shared in your workspace.

<img alt="Selecting the environment quick look" src="https://assets.postman.com/postman-docs/v10/environment-quick-look-selector-v10.jpg" width="250px"/>

To create a new environment, select __Environments__ on the left and select __+__.

<img src="https://assets.postman.com/postman-docs/environment-create-new-v9.13.jpg" alt="Create new environment" width="300px"/>

Enter a name for your environment, and initialize it with any variables you need—you can alternatively specify variables for the environment later.

[![Add Environment](https://assets.postman.com/postman-docs/environment-editor-new-v9.13.jpg)](https://assets.postman.com/postman-docs/environment-editor-new-v9.13.jpg)

Select __Save__ to save any environment variables you have added.

### Adding environment variables

You can add variables to an active (currently selected) environment by opening the environment from the sidebar and editing it in the tab that opens.

![Edit environment](https://assets.postman.com/postman-docs/environment-editor-tab-v9.13.jpg)

Edit the variable names and values inline, or use the close icon <img alt="Close icon" src="https://assets.postman.com/postman-docs/icon-close.jpg#icon" width="16px"> to delete a variable. Enter the name and values for a new variable on a new line. __Save__ when your changes are complete.

Alternatively, select the environment quick look icon <img alt="Environment quick look icon" src="https://assets.postman.com/postman-docs/icon-environment-quick-look.jpg#icon" width="16px"> and edit inline.

> If you are working with environment variables as part of a team, you will only be able to change initial values if you have [edit access to the environment](#managing-environment-roles). You can access all variables in environments shared with you, but may have read-only access to initial values if you have a Viewer role.

Enter a name for your variable, and specify its __Initial__ and __Current__ values. By default the current value will copy the initial value.

* The __Initial Value__ is synced to your account using the Postman servers. It's shared with any collaborators who have access to the environment.
* The __Current Value__ is used in your local instance of Postman, and is never synced to your account or shared with your team _unless you choose to persist it_.

To update the synced variable with your local value, set the initial value to the current value by selecting the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> and choosing __Persist__. To reset your local (current) value with the synced value shared with your workspace / collaborators, select __Reset__. You can persist or reset all values in the environment using __Persist All__ and __Reset All__.

You can also define environment variables by **Type**. Variables are automatically assigned the default type when created, which is shown as plain text and has no extra properties. You can change sensitive variables to [secret type](/docs/sending-requests/variables/#variable-types), which masks the initial and current values for all workspace members. Secret type can be used to prevent unintentional disclosure of sensitive data, including API secrets, passwords, tokens, and keys.

## Accessing environments

You can access your environment variables from Postman and from your request elements, including the URL, parameters, body data, and test scripts.

For the list of all your environments, select __Environments__ in the sidebar.

<img src="https://assets.postman.com/postman-docs/environments-view-menu-v9.13.jpg" alt="View all environments" width="300px"/>

Here you can add, share, duplicate, download, manage access, delete, and remove a shared environment from a workspace. You can also access your global variables by selecting __Globals__.

To view the variables in an environment, select its name. You can edit, add, and remove variables from the environment here.

[![Edit environment](https://assets.postman.com/postman-docs/environment-editor-new-v9.13.jpg)](https://assets.postman.com/postman-docs/environment-editor-new-v9.13.jpg)

### Selecting an active environment

To use the variables in an environment, select it from the environment selector at the top right of the workbench.

<img src="https://assets.postman.com/postman-docs/v10/environment-selector-v10.jpg" alt="Environment selector" width="200px">

To check a variable value at a glance, use the environment quick look icon <img alt="Environment quick look icon" src="https://assets.postman.com/postman-docs/icon-environment-quick-look.jpg#icon" width="16px">.

When you choose an environment using the environment selector, Postman treats it as the active environment and runs all requests against that environment (if your requests reference environment variables).

To use an environment variable value in a request, reference it by name, surrounded with [double curly braces](/docs/sending-requests/variables/):

```js
{{base_url}}
```

You can use the same variable notation in request URLs, parameters, headers, and body data.

<img alt="Environment var reference" src="https://assets.postman.com/postman-docs/env-hover-v8.jpg" width="400px"/>

Hover over a variable reference to get its current value.

> If more than one variable with the same name is available to a request, Postman will use the value from the variable with narrowest [scope](/docs/sending-requests/variables/#variable-scopes). This means that if you have an environment variable with the same name as a collection or global variable, Postman will use the environment variable, but local and data variable values will supersede environment values. The value of any overridden variables will display with a strikethrough.

You can access current environment variable values in your __Pre-request__ and __Tests__ code.

```js
pm.environment.get("variable_key");
```

> You can publish environments with your [API documentation](/docs/publishing-your-api/publishing-your-docs/) and the [Run in Postman button](/docs/publishing-your-api/run-in-postman/creating-run-button/).

### Editing environment variables

You can edit variables either by opening an environment from __Environments__ on the left, or by selecting the environment quick look icon <img alt="Environment quick look icon" src="https://assets.postman.com/postman-docs/icon-environment-quick-look.jpg#icon" width="16px"> next to the [environment selector in the workbench](/docs/getting-started/navigating-postman/#environment-selector-and-environment-quick-look) and selecting __Edit__.

> You will only be able to edit environments where you have [Editor access](#requesting-environment-access).

[![Edit environment](https://assets.postman.com/postman-docs/environment-editor-new-v9.13.jpg)](https://assets.postman.com/postman-docs/environment-editor-new-v9.13.jpg)

Edit the environment name, or the names, [types](/docs/sending-requests/variables/#variable-types), and values of your variables, bearing in mind that __Initial Values__ will be synced with your Postman account and shared with any collaborators who have access to the environment. Select __Save__ when your edits are complete.

[![Viewer role on environment](https://assets.postman.com/postman-docs/request-access-env-v9.13.jpg)](https://assets.postman.com/postman-docs/request-access-env-v9.13.jpg)

If you have Viewer access to an environment, a lock icon <img alt="Lock icon" src="https://assets.postman.com/postman-docs/icon-lock.jpg#icon" width="11px"> next to the name indicates that it's read-only. You will only be able to edit the current value, which is visible only to you and not synced with your Postman account or workspace. To edit initial values you will need to **Request Access**.

> You can edit current values for variables in an active (currently selected) environment directly using the environment quick look. Select the edit icon <img alt="Edit icon" src="https://assets.postman.com/postman-docs/documentation-edit-icon-v8-10.jpg#icon" width="18px"> to edit your chosen value.

<img alt="Using the environment quick look" src="https://assets.postman.com/postman-docs/v10/environment-quick-look-edit-v10.jpg" width="700px"/>

You can also update environment variable values from your test scripts.

### Setting environment variables from scripts

Your __Pre-request__ and __Tests__ scripts can update environment variable values.

Use [pm.environment](/docs/writing-scripts/script-references/postman-sandbox-api-reference/) to set an environment variable in the active (currently selected) environment:

```js
pm.environment.set("variable_key", "variable_value");
```

You can only create new variables from a script in an environment that you have edit access to. If you update or unset a value in a script with Viewer access to the environment, that change will only be visible to you and not shared with your team.

> If you use scripts to set environment variable values, these will be reflected for all requests referencing the variables. For example, you can use environments [in conjunction with the collection runner](/docs/running-collections/intro-to-collection-runs/) and [monitors](/docs/monitoring-your-api/intro-monitors/) to share updated values throughout a run for a series of requests as well as after it completes.

## Working with environments as a team

You can use environments to collaborate on shared resources and configure the visibility of sensitive data, including API secrets, passwords, tokens, and keys.

In a shared workspace, any global variables you create and update will be available to others in the workspace. You can define variables as [secret type](/docs/sending-requests/variables/#variable-types) to mask the initial and current values for all workspace members and prevent unintentional disclosure of sensitive data. You can also use the __Current Value__ of global variables to restrict certain values from collaborators, but by default the __Initial Value__ of a global variable is generally accessible throughout the workspace.

You can move environments to shared workspaces to collaborate with your team.

> You must be an Editor on an environment or the Workspace Admin to move an environment to another workspace. To learn more about roles and permissions, see [Defining roles](/docs/collaborating-in-postman/roles-and-permissions/).

In the sidebar, select the environment you want to share, then select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> > **Move**.

Use the search bar to find the workspace you want to move the environment to, or filter by workspace visibility by selecting the filter icon <img alt="Filter icon" src="https://assets.postman.com/postman-docs/icon-filter.jpg#icon" width="16px">.

You can share environments to personal, private, team, and public workspaces that you have access to. Shared private, team, and public workspaces allow you to collaborate with others.

> You can't move environments from team, private, or public workspaces to a personal workspace.

<!-- -->

> Refer to [Roles and permissions](/docs/collaborating-in-postman/roles-and-permissions/) for information on workspace access control within your team.

Select the workspace, then **Move**  **Environment**.

<img alt="Move environment" src="https://assets.postman.com/postman-docs/move-environment-v9.1.jpg" width="400px"/>

Note that monitors, mock servers, and integrations in the original workspace that are using the environment may no longer work and will need to be re-configured in the new workspace. Collections and APIs that use the environment must be [moved separately](/docs/collaborating-in-postman/working-with-your-team/collaborating-in-team-workspaces/#moving-elements-to-team-workspaces).

You can manage roles on an environment by navigating to it in the sidebar, selecting it, then selecting the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> > **Manage Roles**.

<img alt="Manage roles environment" src="https://assets.postman.com/postman-docs/environment-manage-roles-v9.1.jpg" width="250px"/>

You can also remove a shared environment from a workspace by selecting the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the environment name and choosing __Move__ to move it to a different workspace or **Delete** to delete it entirely.

To export an environment, select it and select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> in the upper right > **Export**.

<img alt="Export environment" src="https://assets.postman.com/postman-docs/environment-export-v9.1.jpg" width="250px" />

### Managing environment roles

You can manage roles on an environment by selecting the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> in the upper right > **Manage Roles**.

You can assign collaborators the Editor or Viewer role. Users with the Viewer role can only edit the current values of variables, but they can use the environment when sending requests. If a user requires edit access, they can request it when viewing the environment in the editor.

For more details, see [Environment roles](/docs/collaborating-in-postman/roles-and-permissions/#environment-roles).

### Using an environment in Viewer role

If you have the Viewer role for an environment, you will be able to access the value of the variables to use them in your requests, but won't be able to update the __Initial Value__, which is shared with your team. You can update the __Current Value__, but this isn't shared with anyone on your team or synced with your Postman account.

If you are using sensitive data like API credentials, it's safer to use the current value of an environment variable for these. You won't be able to __Persist__ the current values to update the initial values of environment variables without edit access to the environment. You can use the __Reset__ option to update your local current values with the shared initial value at any time.

#### Requesting environment access

If you need to update the initial value of a variable in an environment you have read-only access to, you can request edit access. Open the environment from __Environments__ in the sidebar and select __Request Access__.

[![Viewer role on environment](https://assets.postman.com/postman-docs/request-access-env-v9.13.jpg)](https://assets.postman.com/postman-docs/request-access-env-v9.13.jpg)

Select the team member you want to submit the request to, and select the __Editor__ role. Select __Request Access__. You will receive an email when your request is approved.

### Using an environment in Editor role

If you have edit access to an environment, you can update the variable values from Postman and from your scripts. If you are using sensitive data such as API secrets, passwords, tokens, or keys, you can define variables as [secret type](/docs/sending-requests/variables/#variable-types) to mask their initial and current values. You can also opt to only use current values, which aren't synced or shared with your team.

When you edit the initial value of a shared environment variable, your updated value will be reflected for everyone who has access to the environment, so ensure that you only do this when you are happy for your value to be synced with the Postman servers.

> If you clear the checkbox for a variable in your environment, it will only be available to collaborators who also have Editor access to the environment. The variable's listing will also indicate whether it's active. Anyone with the Viewer role for the environment won't be able to access the cleared variable. </br></br> ![Turn off environment variable](https://assets.postman.com/postman-docs/environment-editor-unchecked-var-v9.13.jpg)

With the Editor role, you can [configure access for other team members](#managing-environment-roles). If you need to specify access but don't have the Editor role, you can [request access](#requesting-environment-access).

### Forking environments

You can fork environments to change them without impacting their base versions, or to contribute to their development without having Editor access.

1. Hover over the environment in the sidebar and select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px">.
2. Select **Create a Fork**.

> You can also fork an environment by selecting **Fork** <img alt="Fork icon" src="https://assets.postman.com/postman-docs/icon-fork.jpg#icon" width="14px"> in the environment overview tab.

You can edit your environment fork and use it as needed, or you can [create a pull request](/docs/collaborating-in-postman/using-version-control/creating-pull-requests/) to update the original environment.

### Viewing pull requests, forks, and environment details

You can view all pull requests, forks, and details about an environment from the right sidebar.

* To view pull requests, select the pull request icon <img alt="Pull request icon" src="https://assets.postman.com/postman-docs/icon-pull-request.jpg#icon" width="16px">
* To view forks, select the fork icon <img alt="Fork icon" src="https://assets.postman.com/postman-docs/icon-fork.jpg#icon" width="16px">
* To view additional information about the environment, including its ID, author, and any mock servers or monitors that use it, select the information icon <img alt="Information icon" src="https://assets.postman.com/postman-docs/icon-information-v9-5.jpg#icon" width="16px">

If you have [Editor access](/docs/collaborating-in-postman/roles-and-permissions/#environment-roles) on the environment, you can [review pull requests](/docs/collaborating-in-postman/using-version-control/reviewing-pull-requests/#reviewing-pull-requests) and [merge changes into the parent environment](/docs/collaborating-in-postman/using-version-control/forking-entities/#merging-changes-from-a-fork).

## Next steps

Shared environments allow you to leverage collaboration within Postman. Check out some more resources on how you can work with team members on your API development projects:

* To learn more about how to use Postman with your team, visit [Collaborating in Postman](/docs/collaborating-in-postman/working-with-your-team/collaboration-overview/).
* To learn more about how create a workspace in Postman, visit [Intro to workspaces](/docs/collaborating-in-postman/using-workspaces/creating-workspaces/).
* To learn more about how to share access to your APIs, visit [Managing and sharing APIs](/docs/designing-and-developing-your-api/managing-apis/).
* To learn how to use version control to collaboratively build an API, visit [Version control in Postman](/docs/collaborating-in-postman/using-version-control/version-control-overview/).
