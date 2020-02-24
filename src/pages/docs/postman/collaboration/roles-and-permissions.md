---
title: "Roles and permissions"
order: 62
page_id: "roles_and_permissions"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Collaborating in Postman"
    url: "/docs/postman/collaboration/collaboration-intro/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Streamline access control with extended roles & permissions"
    url: "https://blog.getpostman.com/2019/03/11/streamline-access-control-with-extended-roles-permissions/?_ga=2.109343365.1078379737.1571761632-963694147.1565912089"
  - type: link
    name: "Manage large teams in Postman with workspaces, permissions & more"
    url: "https://blog.getpostman.com/2019/07/23/postman-team-workspaces-and-permissions/?_ga=2.109343365.1078379737.1571761632-963694147.1565912089"
---
> __[Certain team options are only available on Postman Team, Business, and Enterprise plans.](https://www.postman.com/pricing)__

In Postman you can assign roles and permissions to provide access-control.

## Contents

* [Roles in Postman](#roles-in-postman)

    * [Team roles](#team-roles)

    * [Workspace roles](#workspace-roles)

    * [API roles](#api-roles)

    * [Collection roles](#collection-roles)

* [Managing roles and permissions](#managing-roles-and-permissions)

* [FAQ](#faq)

* [Next steps](#next-steps)

## Roles in Postman

As a team admin, you have the power to define Postman access at a team, workspace, collection, and API level. You can utilize Postman's role-based access control system to limit visibility of team resources, define your development workflow, and provide access to administrative and billing personnel.

### Team roles

You can assign three role types to team members: **Admin**, **Billing**, and **Developer**.

* **Admin**: can manage team members and team settings
* **Billing**: can manage team plan and payments
* **Developer**: can access team resources and workspaces

Each user must have at least one role attached to them, and can hold multiple roles simultaneously.

Team roles provide high-level access control:

| Permission | Admin | Billing | Developer |
| --- |:---:| --- | --- |
| Add and remove users | &#x2714; | |
| Manage team Admins and Developers | &#x2714; | |
| Manage SSO | &#x2714; ||
| Manage custom domains  | &#x2714; ||
| View audit logs  | &#x2714; | |
| View usage data | &#x2714; | &#x2714; | &#x2714;
| Manage Billing members | | &#x2714; |
| Manage payment | | &#x2714; | |
| Change plan  | | &#x2714; |
| View shared APIs, collections, environments, mock servers and monitors | | |&#x2714;
| View and create team workspaces | | | &#x2714;
| View activity feed  | | | &#x2714;

### Workspace roles

You can assign two role types in Postman workspaces: **Admin** and **Collaborator**.

* **Admin**: can manage workspace details and members
* **Collaborator**: can work on team resources in a workspace

These roles control access at a workspace level:

| Action | Admin | Collaborator |
| --- | --- | --- |
| Create workspaces | &#x2714; | &#x2714; |
| Delete workspaces | &#x2714; | |
| Edit workspace details | &#x2714; | |
| Join and leave workspaces | &#x2714; | &#x2714; |
| Add members | &#x2714; | &#x2714; |
| Remove members | &#x2714; | |
| Manage workspace roles | &#x2714; | |
| Manage workspace visibility | &#x2714; | |
| Add and remove APIs, collections, and environments | &#x2714; | &#x2714; |
| Manage integrations | &#x2714; | &#x2714; |
| Add monitors and mock servers | &#x2714; | &#x2714; |

### API roles

You can assign two role types in Postman APIs: **Viewer** and **Editor**.

* **Viewer**: can view, fork, and export APIs.
* **Editor**: can edit APIs directly

These roles control access at an API level:

| APIs |   Viewer   | Editor |
| ---   |   ---     | ---   |
| Edit and delete APIs |       | &#x2714;    |
| Manage roles on APIs  |     | &#x2714;  |
| Share APIs  |   &#x2714;   | &#x2714;   |
| Comment on APIs |   &#x2714;   | &#x2714;   |
| Create new API versions |     | &#x2714;   |
| Update schema |     | &#x2714;   |
| Generate collections from the schema |   &#x2714;  | &#x2714;   |
| View reports for APIs |   &#x2714;  | &#x2714;   |
| Add and remove API environments |   &#x2714;  | &#x2714;   |
| Add and remove API documentation |   &#x2714;  | &#x2714;   |
| Add and remove API test suites, integration tests, and contract tests |   &#x2714;  | &#x2714;   |
| Add and remove API monitors |   &#x2714;  | &#x2714;   |
| Add and remove API mock servers |   &#x2714;  | &#x2714;   |

### Collection roles

You can assign two role types in Postman collections: **Viewer** and **Editor**.

* **Viewer**: can view, fork, and export collections
* **Editor**: can edit collections directly

These roles control access at a collection level:

| Collections |   Viewer   | Editor |
| ---   |   ---     | ---   |
| Edit and delete collections |       | &#x2714;    |
| Manage roles on collections  |     | &#x2714;  |
| Export collections  |   &#x2714;   | &#x2714;   |
| Fork collections |   &#x2714;   | &#x2714;   |
| Merge forks on collections  |         | &#x2714;   |
| Publish collection documentation and add to API Network  |      | &#x2714;  |
| Share collections to a different workspace  |  &#x2714;  | &#x2714;   |
| Tag and restore collection versions   |    | &#x2714;   |
| Add, edit, and delete mock servers  |         | &#x2714;   |
| Add, edit, and delete monitors |       | &#x2714;    |

## FAQ

xyz

## Managing roles and permissions

To manage team roles, see [Managing roles](/docs/postman-pro/managing-pro/managing-your-team/#managing-roles).

## Next steps

Learn more about [Collaborating in Postman](/docs/postman/collaboration/collaboration-intro/).
