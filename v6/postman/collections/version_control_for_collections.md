---
title: "Version Control for Collections"
page_id: "version_control_for_collections"
warning: false
---

Version control for collections in Postman allows multiple users to work on the same collection. It ensures you always have access to the updated versions  of collections. It's easy to see what has changed, then merge the changes and even resolve the conflicts.   

You can 'fork' a collection in a personal or a team workspace. To create a copy (fork) of a collection, either the workspace must belong to you or you should be a member of a team workspace. In Postman, a forked collection is referred to as 'Source' because you'll use it to make changes/updates. Your base collection is the 'Destination' copy because Postman merges the changes to your base collection (destination).

This section describes the following topics:

* Forking a Collection
* Merging Changes
* Pulling Changes 
* Resolving Conflicts

#### Forking a Collection

You can fork a collection from the Postman app as well as Postman dashboard. To fork a collection, go to your Postman app, choose a collection and select 'Create a Fork'. Specify a name for this copy, choose a workspace where you need this collection and click 'Fork Collection'. Let's consider an example where HealthAPICheck collection belongs to a personal workspace. A copy of this is created in Team-Cobras workspace which has zero collections in it. The following file illustrates this:

[![fork collection](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Forking_a_Collection.gif)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Forking_a_Collection.gif)


Select the workspace in the dashboard that has your collection and click the 'Collections' tab to view a list of collections. Click ellipses (...) (adjacent to the 'share' button) and select Fork, as illustrated in the screen above.

The following screen appears:

[![fork collection dialog](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Fork_Merge2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Fork_Merge2.png)

In the above screen, select a workspace where you want to create a copy of this collection and click 'Fork'. Let's select 'Merge Conflict' workspace here. 

Postman confirms the success and the screen in the dashboard changes as shown below:

[![forked collection](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Fork_Merge3.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Fork_Merge3.png)

You'll see the above collection in your team workspace 'Merge Conflict'. 


#### Merging Changes

It's easy to see changes and merge them. This section describes how to merge the changes made in your collections by your team members.
Let's change the name of the forked collection in the above example to HealthAPICheck - Forked Collection which is part of Team-Cobras workspace. 

The base collection - HealthAPICheck has four request R1, R2, R3, and R4. All of them are 'Get' requests. A copy of this collection now exists in Team-Cobras workspace. All four requests are updated in Team-Cobras workspace and those changes are merged in the base collection. The following screen illustrates this:

[![merging changes](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Forking_n_Merging.gif)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Forking_n_Merging.gif)


When you attempt to merge the changes by clicking 'Merge all changes',Postman provides you three options, as illustrated in the following screen:

[![merge all changes](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Merge_All_Changes.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Merge_All_Changes.png)

Choose either of the options and click 'Merge'. 


#### Pulling Changes 

Let's say you forked a collection and made updates to the forked collection. If there are changes in the base collection, Postman notifies this and allows you to pull the changes. The following file illustrates this:

[![merging conflict](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Fork_Merge5.gif)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Fork_Merge5.gif)

#### Resolving Conflicts 

This section illustrates how you can resolve conflicts when multiple changes happen in a team. We'll consider the same example, as discussed in the 'Merging Changes' section. However, to create a conflict, we'll change the method 'Get' to 'Post' in the personal workspace collection (Destination) again. 

[![resolving conflicts](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Fork_Merge4.gif)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Fork_Merge4.gif)

