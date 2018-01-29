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


**Personal Workspaces**

A personal Workspace is only visible to you. If you do not have Postman account, you can have only one personal Workspace. If you do have an account, you can have an unlimited number of Workspaces.

When you add an element to a Workspace, it automatically becomes visible to anyone with a private link. 

You can [remove or delete](/docs/postman/workspaces/using_workspaces){:target="_blank"} an element from a Workspace. When you remove an element from a Workspace, it is no longer visiable in a personal or team Workspace. When you delete an element, you completly eliminate it from the system. You can only delete an element from your personal Workspace.
 
You can also create any number (maybe limited) of workspaces and add collections to them individually (makes it easier to separate context for work). 


A user can also invite another user to a workspace (probably assign default permissions). Any collection shared in this workspace will be then visible to both users in this workspace. We can have a limit on the number of users that can be added on the free plan. That said, the workspace itself has an OWNER and the owner decides the permissions of users invited to the workspace.

The owner can also assign users as admins in a workspace, thereby allowing the admins to invite users too.


















**Team Workspaces**

Postman Pro and Enterprise users can access multiple Workspaces for personal or team accounts.


Workspaces now include shareable team request history, enabling developers to debug requests and API usage collaboratively.
Postman Environments can be synced and shared directly within Workspaces, without the need for templates.

Postman Pro and Enterprise users can create shared workspaces for ongoing development or short-term collaborations. Workspace members can be added and removed as needed, from among all of the organization’s paid users.

 


In a Workspace, you:

* Create an entity in a workspace (ext.link) or more simply, see Using Workspaced.

* Add to a workspace from an existing workspace (ext.link)

* Delete a workspace (ext.link)

* Remove a workspace  (ext.link)

* Join a workspace (ext.link)

* Share in a workspace (ext.link)

* Use workspace control for Enterprise accounts (?) (ext.link)









### Why use Workspaces?

Project-specific Workspaces provide superior organization and insight into your collections.

Imagine this scenario. You're working in your own Collections in the Team Library, while collaborating with a few of your teammates. At the team level, a team might be working on different projects in parallel. 

Use personal workspaces for private projects, works in progress, and other experiment

Then at the team level, 

If a person is on Postman Pro using the Team Library they might be working on their own collections while also collaborating with several others. At the team level, there might be different projects that a team might be working in parallel. One goal that we established upfront was that every team member should have visibility into the team's API infrastructure. Otherwise, it would lead to a situation more like Google Drive where one doesn't know where something is and has to rely on links stored somewhere. While this is helpful, it can be confusing for companies with several teams. The teams might have internal APIs and external APIs for other teams.


To solve these issues, we need a new abstraction - called Workspaces.
 
### Types of Workspaces

Postman offers two types of Workspaces: personal and team. 

* Personal: Individual users can create workspaces that are only visible to them.

* Team: Workspaces shared between all members of a team. All workspaces that a user has visibility into should be accessible from the Postman app and the web
