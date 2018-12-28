---
title: "Version Control for Collections"
page_id: "version_control_for_collections"
warning: false
---

Version control for collections in Postman allows multiple users to work on the same collection. It ensures you always have access to the updated versions of collections. It's easy to see what has changed, pull the changes, merge them and even resolve the conflicts.   

You can 'fork' a collection in a personal or a team workspace. To create a copy (fork) of a collection, either the workspace must belong to you or you should be a member of a team workspace. In Postman, a forked collection is referred to as 'Source' because you'll use it to make changes/updates. Your base collection is the 'Destination' copy because Postman merges your changes to the base collection (destination).

This section describes the following topics:

* Forking a Collection
* Pulling Changes 
* Merging Changes
* Resolving Conflicts

#### Forking a Collection

You can fork a collection from the Postman app as well as Postman dashboard. To fork a collection, go to your Postman app, click (...) adjacent to a collection and select 'Create a Fork'. Specify a name for this copy, select a workspace and click 'Fork Collection'. Let's consider an example where HealthAPICheck collection belongs to a personal workspace. A copy of this is created (forked) in Team-Cobras workspace. The following screen illustrates this:

[![fork collection](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Forking_a_Collection.gif)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Forking_a_Collection.gif)


#### Pulling Changes 

After forking a collection, the base collection may be updated by others. If that happens, your forked copy will no longer be the same. In such circumstances, Postman notifies you about this change and allows you to pull these changes. As discussed in the previous section, the HealthAPICheck collection is forked in Team-Cobras. This collection is now updated in the personal workspace making the forked and base collection out of sync. In this case, you may want to pull the changes. The following screen illustrates this:

[![pull changes](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Fork_Pull_Changes.gif)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Fork_Pull_Changes.gif)


#### Merging Changes

It's easy to view changes, review them and then merge. This section describes how to merge the changes made in your collections by others. Let's change the name of the forked collection in the above example to HealthAPICheck - Forked Collection which is part of Team-Cobras workspace. 

The base collection - HealthAPICheck has four request R1, R2, R3, and R4. All of them are 'Get' requests. A copy of this collection now exists in Team-Cobras workspace. All four requests are updated in Team-Cobras workspace and those changes are merged in the base collection. The following screen illustrates this:

[![merging changes](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Forking_n_Merging.gif)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Forking_n_Merging.gif)

When you attempt to merge the changes by clicking 'Merge all changes', Postman provides the following three options, as illustrated:

[![merge all changes](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Merge_All_Changes.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Merge_All_Changes.png)

Choose either of the options and click 'Merge'. 

#### Resolving Conflicts 

This section illustrates how you can resolve conflicts when changes happen in more than a single workspace. The Request R2 gets changed in both the workspaces - personal and Team-Cobras. Postman notifies the conflict and prompts you to resolve them. The following screen illustrates this:

[![resolving conflicts](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Fork_Resolve_Conflicts.gif)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Fork_Resolve_Conflicts.gif)

