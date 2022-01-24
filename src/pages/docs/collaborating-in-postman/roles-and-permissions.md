---
title: "Defining roles"
order: 72
page_id: "roles_and_permissions"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Working with your team"
    url: "/docs/collaborating-in-postman/collaboration-intro/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Streamline access control with extended roles & permissions"
    url: "https://blog.postman.com/streamline-access-control-with-extended-roles-permissions/"
  - type: link
    name: "Manage large teams in Postman with workspaces, permissions & more"
    url: "https://blog.postman.com/postman-team-workspaces-and-permissions/"
  - type: link
    name: "Introducing the Super Admin Role: Manage All Your Team’s Users and Resources"
    url: "https://blog.postman.com/introducing-the-super-admin-role/"

---

> Certain team options are only available on **[Postman Basic, Professional, and Enterprise plans](https://www.postman.com/pricing)**. To see which roles are available on your plan, go to your **[web dashboard](https://go.postman.co/settings/team/roles)**.

In Postman you can assign roles and permissions to provide access control.

## Contents

* [Roles in Postman](#roles-in-postman)

    * [Team roles](#team-roles)

    * [Workspace roles](#workspace-roles)

    * [API roles](#api-roles)

    * [Collection roles](#collection-roles)

* [Managing roles and permissions](#managing-roles-and-permissions)

* [Next steps](#next-steps)

## Roles in Postman

As a team admin, you have the power to define Postman access at the team level. You can use Postman's role-based access control system to limit visibility of team resources, define your development workflow, and provide access to administrative and billing personnel.

Workspace admins can modify the admin and collaborator roles for the workspace. Editors of particular elements (APIs, collections, environments, monitors, and mock servers) can modify the editor and viewer role on the element.

With these roles, you and your teammates can manage access for each individual, or, if you are on a [Postman Enterprise plan](https://www.postman.com/pricing), for [groups](/docs/administration/managing-your-team/user-groups/).

### Team roles

You can [assign](/docs/administration/managing-your-team/managing-your-team/) one or more role types to your team members, based on the functions those team members require:

* **Admin**: Manages team members and team settings.
* **Super Admin**: Manages everything within a team, including team settings, members, roles, and resources in [public, team, or private workspaces](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#changing-workspace-visibility). Team members with this role can perform all actions that Admin, Billing, Community Manager, and Developer roles can perform ([Enterprise plans only](https://www.postman.com/pricing)).
* **Billing**: Manages team plan and payments. Billing roles can be granted by a Super Admin or by a fellow team member with a billing role. If this is not possible, contact our [Support Center](https://support.postman.com/hc/en-us).
* **Developer**: Has access to all team resources and workspaces.
* **Community Manager**: Manages the public visibility of workspaces and team profile ([Professional and Enterprise plans only](https://www.postman.com/pricing)).

Each user must have at least one role attached to them, and can hold multiple roles simultaneously. Members with a Developer role consume a paid slot on the team, while those who have only Admin or Billing roles become Support Users and don’t consume paid slots. Your team can have two Support Users.

Team roles provide high-level access control:

| Permission | Super Admin | Admin | Billing | Developer | Community Manager |
| --- |:---:| --- | --- | --- | --- |
| Add users | &#x2714; | &#x2714; | | |
| Remove users | &#x2714; | &#x2714; | | |
| Manage team Admins and Developers | &#x2714; | &#x2714; | | |
| Manage SSO | &#x2714; | &#x2714; || |
| Manage custom domains  | &#x2714; | &#x2714; | | |
| View audit logs  | &#x2714; | &#x2714; | | | &#x2714;
| View usage data | &#x2714; | &#x2714; | &#x2714; | &#x2714; | &#x2714;
| Manage Billing members | &#x2714; | | &#x2714; | |
| Manage payment | &#x2714; | | &#x2714; | | |
| Change plan  | &#x2714; | | &#x2714; | |
| View shared APIs, collections, environments, mock servers and monitors | &#x2714; | | | &#x2714; | &#x2714;
| View and create team workspaces | &#x2714; | | | &#x2714; | &#x2714;
| Change visibility of workspaces to team or public | &#x2714; | | | &#x2714;&ast; | &#x2714;
| Approve requests to change workspace visibility&ast;&ast; | &#x2714; | | | | &#x2714;
| Enable public team profile | &#x2714; | &#x2714; | | | &#x2714;

&ast; On Postman Basic and Free plans, any developer can change visibility of workspaces

&ast;&ast; Enterprise and Professional plans only

### Workspace roles

You can [assign](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#managing-workspace-roles) three role types in Postman workspaces: **Admin**, **Editor** and **Viewer**.

* **Admin:** Can manage workspace resources and settings
* **Editor:** Can create and edit workspace resources
* **Viewer:** Can view, fork, and export workspace resources

The following roles control access at a workspace level:

| Action | Admin | Editor | Viewer |
| --- | --- | --- | --- |
| Create workspaces | &#x2714; | | |
| Delete workspaces | &#x2714; | | |
| Edit workspace details | &#x2714; | | |
| Join and leave workspaces | &#x2714; | &#x2714; | &#x2714; |
| Add members | &#x2714; | | |
| Remove members | &#x2714; | | |
| Manage workspace roles | &#x2714; | | |
| Manage workspace visibility | &#x2714;&ast; | | |
| Add and remove APIs, collections, and environments | &#x2714; | &#x2714; | |
| Manage integrations | &#x2714; | &#x2714; | |
| Add monitors and mock servers | &#x2714; | &#x2714; | |
| Send requests | &#x2714; | &#x2714; | &#x2714; |

&ast; On Professional and Enterprise plans, workspace admins must request to change a workspace's visibility to public. This request will go to the [Community Manager](/docs/collaborating-in-postman/roles-and-permissions/#team-roles). On Basic and Free plans, or if a team has no Community Manager assigned, workspace admins can control visibility.

### API roles

You can [assign](/docs/administration/managing-your-team/managing-your-team/) two role types in Postman APIs: **Editor** and **Viewer**.

* **Editor**: Can edit APIs directly
* **Viewer**: Can view and export APIs

The following roles control access at an API level:

| APIs |   Editor   | Viewer |
| ---   |   ---     | ---   |
| Edit and delete APIs |  &#x2714;     |     |
| Manage roles on APIs  |  &#x2714;   |   |
| Share APIs  |   &#x2714;   | &#x2714;   |
| Comment on APIs |   &#x2714;   | &#x2714;   |
| Create new API versions |  &#x2714;   |    |
| Update schema |  &#x2714;   |    |
| Generate collections from the schema |   &#x2714;  | &#x2714;   |
| View reports for APIs |   &#x2714;  | &#x2714;   |
| Add and remove API environments |   &#x2714;  | &#x2714;   |
| Add and remove API documentation |   &#x2714;  | &#x2714;   |
| Add and remove API test suites, integration tests, and contract tests |   &#x2714;  | &#x2714;   |
| Add and remove API monitors |   &#x2714;  | &#x2714;   |
| Add and remove API mock servers |   &#x2714;  | &#x2714;   |

### Collection roles

You can [assign](/docs/administration/managing-your-team/managing-your-team/) two role types in Postman collections: **Editor** and **Viewer**.

* **Editor**: Can edit collections directly
* **Viewer**: Can view, fork, and export collections

The following roles control access at a collection level:

| Collections |  Editor  | Viewer |
| ---   |   ---     | ---   |
| Edit and delete collections |    &#x2714;   |     |
| Manage roles on collections  |  &#x2714;   |   |
| Export collections  |   &#x2714;   | &#x2714;   |
| Fork collections |   &#x2714;   | &#x2714;   |
| Merge forks on collections  |    &#x2714;     |    |
| Publish collection documentation and add to API Network  |   &#x2714;  |   |
| Share collections to a different workspace  |  &#x2714;  | &#x2714;   |
| Tag and restore collection versions   |  &#x2714;   |   |
| Add, edit, and delete mock servers  |    &#x2714;      |   |
| Add, edit, and delete monitors |    &#x2714;   |     |

## Managing roles and permissions

To learn how to manage team roles, see the [Managing your team](/docs/administration/managing-your-team/managing-your-team/) guide.

## Next steps

Learn more about [Working with your team](/docs/collaborating-in-postman/collaboration-intro/).
