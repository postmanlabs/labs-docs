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

Personal Workspaces are only visible to you. If you don't have Postman account, you can have only one personal Workspace. If you do have an account, you can have an unlimited number of Workspaces.

You can invite other users to your Workspace, which is only visible to you and those users. When you add an element to the Workspace, it automatically becomes visible to those invited users. You can also assign users as Admins, who can [view, add, create, delete, and remove](/docs/postman/workspaces/using_workspaces){:target="_blank"} elements in the Workspace.

You can [remove and delete](/docs/postman/workspaces/using_workspaces){:target="_blank"} an element from a Workspace. When you remove an element from a Workspace, it is no longer visiable in a personal or team Workspace. When you delete an element, you completly eliminate it from the system. You can only delete an element from your personal Workspace.

**Team Workspaces**

When you invite users, you create a team. The team has a default Workspace. Any element that is shared to the team Workspace is accessible to everyone in the team. Any entity shared between users in any Workspace is also visible in the team workspace.

[![WS-mainScreen-teamMenu](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-mainScreen-teamenu.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-mainScreen-teamenu.png)

A user can subscribe to a collection in a shared Workspace and add it to a personal Workspace. If the user has the appropriate permissions for the collection, the user can edit the collection in any Workspace where it exists. The collection would also be updated in all those Workspaces.

As a Postman Pro or Enterprise user, you can create shared Workspaces for ongoing development or short-term collaborations. You can add and remove Workspace members from among all of the organization’s paid users. Each Workspace contains a shareable team request history that enables developers to debug requests and API usage collaboratively.

You can sync and share Postman Environments directly in Workspaces, without the need for templates.






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

Types of Workspace roles
