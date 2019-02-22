---
title: "Roles and permissions"
page_id: "roles_and_permissions"
warning: false
---
Roles and permissions in Postman have been enhanced to provide a more robust-access control mechanism. In Postman v7.0, you access features through assigned roles that have their own set of permissions and privileges. 

This chapter describes the following topics:

* [Understanding roles in Postman](#understanding-roles-in-postman)
* [List of roles and permissions](#list-of-roles-and-permissions)
* [Roles before and after](#roles-before-and-after)
* [Migrating to Postman v7](#migrating-to-postman-v7)


### Understanding roles in Postman

Permissions to perform certain tasks and/or operations are assigned to 
specific roles in Postman. For instance, Postman provides an admin-level role to help manage the permissions of Postman for the entire team. Likewise, Postman has other roles with specific permissions.  

The diagram below illustrates the roles in Postman: 

[![roles overview](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/RBAC1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/RBAC1.png)

The following is a brief outline of the main roles:

* **Collection viewer** can view, run, and share a collection. When a viewer shares a collection it carries the same viewer permissions to the viewer with whom it is shared. 
* **Collection editor** can manage a collection and controls the highest level administrative and security settings.
* **Workspace collaborator** can view all resources in the workspace, has add and remove privileges, can create history, and even add members.
* **Workspace admin** can edit workspace’s information like name, summary, settings, remove members and change workspace roles, and delete the workspace.
* **Team developer** can access some team resources (collections, environments, workspaces).
* **Team admin** can’t access team resources, can edit team details, settings and invite/remove team members.
* **Team billing** can’t access team resources, can access billing related things.


### List of roles and permissions 

Roles and permissions is not a new feature in Postman and in version 7.0 they have been enhanced to provide a fine-grained access management of its features. This sections clearly outlines the roles and permissions for collections, workspaces, and teams in a table format.

This section describes the following topics:

* [Collection roles](#collection-roles)
* [Workspace roles](#workspace-roles)
* [Team roles](#team-roles)

#### Collection roles

In Postman version 7.0, collections have two roles - **Collection Viewer** and **Collection Editor**. The following table illustrates the roles and permissions of collections:  

[![collection roles](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/RBAC_CollectionsTable1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/RBAC_CollectionsTable1.png)


#### Workspace roles

In Postman version 7.0, workspaces have two roles - **Workspace Collaborator** and **Workspace Admin**. The following table illustrates the roles and permissions of workspaces:  

[![collection roles](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/RBAC_WorkspacesTable1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/RBAC_WorkspacesTable1.png)

#### Team roles

In Postman version 7.0, teams have three roles - **Developer**, **Admin**, and **Billing**. The following table illustrates team's roles and permissions:  

[![collection roles](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/RBAC_TeamsTable1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/RBAC_TeamsTable1.png)


### Roles before and after

A user's role determines what they can and cannot do in Postman. Each role has a default set of permissions. The following section illustrates the roles prior to version 7.0 and post 7.0. The following lists the old roles and the newer ones feature-wise:

* Collections
  - *Can view* changed to **Viewer**
  - *Can edit* changed to **Editor**
* Workspace (No roles existed prior to version 7.0)
  - Collaborator
  - Admin
* Team
  - *User* changed to **Developer**
  - Admin 
  - Billing

**Note:** The older set of roles applied till Postman app version 6. 

### Migrating to Postman v7

To know more about migration-related information, refer to [migrating to v7.0](/docs/v6/postman/migrating_to_v7.0) section.
