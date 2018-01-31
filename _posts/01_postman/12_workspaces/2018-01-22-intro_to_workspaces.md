---
categories:
  - "postman"
  - "workspaces"
title: "Intro to Workspaces"
page_id: "intro_to_workspaces"
warning: false
---

[![API lifecycle]()]()


### What is a Workspace?

A Workspace is a collaborative environment for a group of users to develop and test APIs. You can create a personal or team Workspace. 

[![WS_mainScreen-basicMenu](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-mainScreen-basicMenu.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-mainScreen-basicMenu.png)

Regardless of the type of Workspace, you can share and hide elements in specific teams and mulitple Workspaces at the same time. We define elements in Postman as collections, monitors, documentation, mocks, environments, and integrations.

Workspaces provides three user roles: administrator, member, and non-member.


| **Role**  |   **Permissions**   |
| ---   |   ---     | 
| Administrator   |   View, edit, and manage    |
| Member   |  View and edit    | 
| Non-member   |  View only     | 

**Personal Workspaces**

Personal Workspaces are only visible to you. If you don't have Postman account, you can have only one personal Workspace. If you do have an account, you can have an unlimited number of Workspaces.

You can invite other users to your Workspace, which is only visible to you and those users. When you add an element to the Workspace, it automatically becomes visible to those invited users. You can also assign users as Admins, who can [view, add, create, delete, and remove](/docs/postman/workspaces/using_workspaces){:target="_blank"} elements in the Workspace.

You can [remove and delete](/docs/postman/workspaces/using_workspaces){:target="_blank"} an element from a Workspace. When you remove an element from a Workspace, it is no longer visiable in a personal or team Workspace. When you delete an element, you completly eliminate it from the system. You can only delete an element from your personal Workspace.

**Team Workspaces**

When you invite users, you create a team. The team has a default Workspace. Any team member can see and access elements that are shared to the team Workspace. 

[![WS-mainScreen-teamMenu](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-mainScreen-teamenu.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-mainScreen-teamenu.png)

You can subscribe to a collection in a shared Workspace and add it to a personal Workspace. If you have the appropriate permissions for the collection, you can edit and update the collection in any Workspace where it exists. 

As a Postman Pro or Enterprise user, you can create shared Workspaces for ongoing development or short-term collaborations. You can add and remove Workspace members from among all of the organization’s paid users. Each Workspace contains a shareable team request history that enables developers to debug requests and API usage collaboratively.

You can sync and share Postman Environments directly in Workspaces, without the need for templates.

### Why use Workspaces?

We designed Workspaces to help you better organize your collections when you collaborate with others. Let's say you have several personal collections. A couple of your collections are related to a project you're working on, but they're mixed with other collections you don't need for this project. Now you have to consider how to distinguish your collection from the collections you don't need. You decide to mark those collection as favorite so they can appear at the top of your list. However, you have to another project to work on with greater priority. Now you have to unfavorite the other collections and favorite another set of personal collection related to this project to appear on top.










To solve these issues, we need a new abstraction - called Workspaces.
 

