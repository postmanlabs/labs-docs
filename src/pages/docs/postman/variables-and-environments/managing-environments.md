---
title: "Managing environments"
order: 81.1
page_id: "managing-environments"
search_keyword: "pm.globals.set, globals.set, pm.environment.set, environment.set, pm.variables.get, variables.get, pm.globals.get, globals.get, pm.environment.get, environment.get" 
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Variables"
    url:  "/docs/postman/variables-and-environments/variables/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "How to use global variables in Postman"
    url: "https://www.youtube.com/watch?v=TU1i1CgjVR8"
  - type: link
    name: "How to use environments in Postman"
    url:  "https://www.youtube.com/watch?v=wArvaHYdw2I"
  - type: link
    name: "New to Postman: Chaining requests"
    url: "https://www.youtube.com/watch?v=shYn3Ys3ygE"
  - type: link
    name: "Working with sessions"
    url: "https://youtu.be/JcSZtVwH69w"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Dynamically unset environment variables"
    url: "https://blog.postman.com/2019/05/28/pro-tip-dynamically-unset-postman-environment-variables/"
  - type: link
    name: "10 tips for working with variables"
    url: "https://blog.postman.com/2017/12/29/10-tips-for-working-with-postman-variables/"
  - type: link
    name: "Sessions FAQ"
    url:  "https://blog.postman.com/2018/08/09/sessions-faq/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Intro to collections"
    url: "/docs/postman/collections/intro-to-collections/"
  - type: link
    name: "Intro to scripts"
    url: "/docs/postman/scripts/intro-to-scripts/"
  - type: link
    name: "Dynamic variables"
    url:  "/docs/postman/variables-and-environments/variables-list/"

warning: false

---

An environment is a set of [variables](/docs/postman/variables-and-environments/variables/) you can use in your Postman requests. You can use environments to group related sets of values together and manage access to shared Postman data if you're working as part of a team.

## Environments quick start

A typical use of environments could work as follows:

* You have a production API and a development API, at different locations.
* You use two environments, one for development and one for production.
* Each environment includes a variable to store the base URL.
* Each request in your collection refers to the variable in the URL field.
* You toggle between environments when running your requests to test them against either the development or the production environment.
* _Within your organization, you could have a team that only has access to the development environment, and individual team members with edit vs readonly access to specific environments._

You can use the current value of your environment variables to ensure that sensitive data values such as credentials are not accidentally shared. By using environments rather than global variables, you can control visibility of your data values within your workspace and team.

## Contents

* [Creating environments](#creating-environments)
    * [Adding environment variables](#adding-environment-variables)
* [Accessing environments](#accessing-environments)
    * [Editing environment variables](#editing-environment-variables)
    * [Setting environment variables from scripts](#setting-environment-variables-from-scripts)
* [Working with environments as a team](#working-with-environments-as-a-team)
    * [Managing environment roles](#managing-environment-roles)
    * [Using an environment in viewer role](#using-an-environment-in-viewer-role)
    * [Using an environment in editor role](#using-an-environment-in-editor-role)

## Creating environments

To create a new environment, click __Environment quick look__ (eye button) or __Manage environments__ (gear button) at the top right of the Postman app.

(pic)

The quick look lists variables for any existing _active_ environment you have currently selected in your Postman app, and any global variables you have declared (or that are shared via your workspace).

To create a new environment, click __Add__.

(pic)

Enter a name for your environment, and initialize it with any variables you need—you can alternatively specify variables for the environment later.

### Adding environment variables

You can add variables to an active (currently selected) environment by opening the environment quick look using the eye button at the top right of the Postman app, and clicking __Edit__.

(pic)

Alternatively, click __Manage Environments__ and select the environment.

Enter a name for your variable, and specify __Initial__ and __Current__ values for it—by default the current value will copy the initial value.

* The __Initial Value__ is synced to your account via the Postman servers and shared with any collaborators who have access to the environment.
* The __Current Value__ is local to your Postman app, and is never synced to your account or shared with your team.

To update the synced variable with your local value, set the initial value to the current value by clicking __...__ to the right of the variable row and choosing __Persist__. To reset your local (current) value with the synced value shared with your workspace / collaborators, click __Reset__. You can persist or reset all values in the environment using __Persist All__ and __Reset All__.

(pic)

If you are working with environment variables as part of a team, you will only be able to change initial values if you have [edit access to the environment](#managing-environment-roles). You can access all variables in environments shared with you, but may have readonly access to initial values if you have viewer role on the environment.

## Accessing environments

You can access and update your environment variables from the Postman app UI and from your request elements, including the URL, parameters, body data, and test scripts.

To see all of your environments, click __Manage Environments__ (gear button) at the top right of Postman.

(pic)

Here you can [share](#working-with-environments-as-a-team), duplicate, download, delete environments, and remove a shared environment from a workspace. You can also access your global variables from here by clicking __Globals__.

To view the variables in an environment, click its name. You can edit, add, and remove variables from the environment here.

(pic)

> You can also view your environments in __Browse__ mode—in __Environments__ or __Activity__, click an environment name to see the variables within it in the web dashboard.

To use the variables in an environment, select it from the drop-down list at the top right of Postman.

(pic)

To check a variable value at a glance, use the __quick look__ (eye button).

When you have an environment selected in the drop-down, Postman will treat it as the active environment, and will run all requests against that environment if your requests reference environment variables.

Your requests can use environment variable values by referring to them by name surrounded with [double curly braces](/docs/postman/variables-and-environments/variables/#accessing-variables):

```
{{base_url}}
```

You can use the same variable notation in request URLs, parameters, headers, and body data.

(pic)

Hover over a variable reference to see its current value.

> If more than one variable with the same name is available to a request, Postman will use the value from the variable with narrowest [scope](/docs/postman/variables-and-environments/variables/#variable-scopes). This means that if you have an environment variable with the same name as a collection or global variable, Postman will use the environment variable, but local and data variable values will supersede environment values.

You can access current environment variable values in your __Pre-request__ and __Tests__ code.

```
pm.environment.get("variable_key");
```

### Editing environment variables

You can edit variables by opening the environment quick look (eye button) at the top right of Postman, and clicking __Edit__.

(pic)

Edit the environment name, or the names and values of your variables, bearing in mind that __Initial__ values will be synced with your Postman account and shared with any collaborators who have access to the environment. Click __Update__ when your edits are complete.

(pic)

You will only be able to edit initial values for variables in environments where you have edit access. If you have viewer access, you will only be able to edit the current value, which is visible only to you and not synced with your Postman account or workspace.

> You can edit current values for variables in an active (currently selected) environment directly via the environment quick look. Click the pencil icon to edit your chosen value. (pic)

You can also update environment variable values from your test scripts.

### Setting environment variables from scripts

Your __Pre-request__ and __Tests__ scripts can update environment variable values.

Use [pm.environment](/docs/postman/scripts/postman-sandbox-api-reference/#pmenvironment) to set an environment variable in the active (currently selected) environment:

```js
pm.environment.set("variable_key", "variable_value");
```

You can only create new variables from a script in an environment that you have edit access to. If you update or unset a value in a script with viewer access to the environment, that change will only be visible to you and not shared with your team.

> If you use scripts to set environment variable values, these will be reflected for all requests referencing the variables. For example, you can use environments [in conjunction with the collection runner](/docs/postman/collection-runs/using-environments-in-collection-runs/) to share updated values throughout a run for a series of requests as well as after it completes.

## Working with environments as a team

You can use environments to collaborate on your API development and testing processes with team members who share your workspace, environment, or collection. Environments allow you to access shared resources and to configure visibility of restricted data such as specific server locations, and sensitive information like API keys.

When you collaborate with your team in a shared workspace, any global variables you create and update will be available to others in the workspace. You can use the __current__ value of global variables to restrict certain values from collaborators, but by default the __initial__ value of a global variable is generally accessible throughout the space.

By specifying role-based access to your environments, you can achieve a finer grained control level over your variable values. You can choose to share an environment within your workspace to make it available to team members—and specify access levels for each individual.

To share an environment to your workspace, click __Manage Environments__ (gear button) at the top right of Postman.

(pic)

Click __Share__ next to the environment.

(pic)

Select the workspace you want to share the environment to. You can assign the same role to everyone in the workspace, or can configure access levels on an individual basis.

(pic)

Select roles for your shared environment and click __Save Roles__.

> You can also share environments from __Browse__ mode in the Postman app by selecting __Environments__ and clicking __Share__ then choosing a workspace. Alternatively, navigate to the environment from the [dashboard](https://web.postman.co/) via your team, workspace, activity feed, or the user profile of a collaborator by clicking __Environments__. Click __Share__ next to the environment and choose a workspace to share it to.

You can remove a shared environment from a workspace in __Manage Environments__ by clicking __...__ next to the environment name and choosing __Remove from workspace__.

### Managing environment roles

If you use personal credentials in your requests and the requests are pulling these from a shared environment (for example a variable storing an API secret value), you can restrict visibility of your credentials by only storing them in the __current__ value of the variable. If you're managing an environment that's shared across a team, you can restrict edit access so that most of your team only has viewer role on the environment, which prevents them from accidentally updating the shared value and leaking credentials. Similarly, you can prevent accidental changes to values by restricting the number of team members who have edit access to your environment.

In order to effectively leverage environments to preserve security and minimize the risk of accidental changes to variables, group your variables into environments you need to share as a coherent set, and then configure each user role so that access is only granted where it's required, and that you can identify the potential source of accidental changes.

When you open the quick look (eye button) for an environment and hover over __Edit__ you will see an indicator if you only have view access.

(pic)

Viewer access allows collaborators to use variable values in their work, but they can only edit the __initial__ value of a variable if they have edit access to the environment as a whole.

### Using an environment in viewer role

If you have view access to an environment, you will be able to access the value of the variables to use them in your requests, but will not be able to update the __initial__ value, which is shared with your team. You can update the __current__ value, but this is not shared with anyone on your team or synced with your Postman account.

If you are using sensitive data like API credentials, it's safe to use the __current__ value of an environment variable for these. You will not be able to __persist__ the current values to update the initial values of environment variables without edit access to the environment. You can use the __reset__ option to update your local current values with the shared initial value at any time.

If you need to update the initial value of a variable in an environment you have readonly access to, you can request edit access. Click __Manage Environments__ (gear button) at the top right of Postman and click the environment name to open it. Click __Request Access__.

(pic)

Select the team member you want to submit the request to, and choose __Editor__ from the drop-down list. Click __Request Access__.

(pic)

You will receive an email when your request is approved.

### Using an environment in editor role

If you have edit access to an environment, you can update the variable values from the Postman app UI and from your scripts. If you are using sensitive data such as personal or development / test credentials, make sure you only update these in the __current__ value of a variable so that you do not accidentally share this information with your team.

When you edit the __initial__ value of a shared environment variable, your updated value will be reflected for everyone who has access to the environment, so ensure that you only do this when you are happy for your value to be synced with Postman's servers.

With editor role, you can [configure access for other team members](#managing-environment-roles). If you need to specify access but do not have the editor role, you can request access via __Manage Environments__ (gear button). Select the environment and click __Request Access__, choosing the editor role.

(pic)

## Next steps

Shared environments allow you to leverage collaboration within Postman. Check out some more resources on how you can work with team members on your API development projects:

* [Collaborating in Postman](/docs/postman/collaboration/collaboration-intro/)
* [Intro to workspaces](/docs/postman/workspaces/intro-to-workspaces/)
* [Managing and sharing APIs](/docs/postman/design-and-develop-apis/managing-apis/)
* [Version control for collections](/docs/postman/collections/version-control-for-collections/)
