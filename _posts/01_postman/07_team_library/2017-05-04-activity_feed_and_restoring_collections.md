---
category: 
  - "docs"
  - "postman"
  - "team_library"
title: "Activity Feed and restoring collections"
page_id: "activity_feed_and_restoring_collections"
warning: false
---

An activity feed is a list of events, displaying to the user in an interactive interface, updates to their Postman Data. It is useful to keep track of changes made to your private and team collections by different users across the team. The activity feed also lets you rollback a collection, and restore it to any previous point in time. 

### **Types of activity feed**

Postman tracks changes made at 3 different levels: collection, team and user.

##### Collection

To review the activity feed at the collection level, expand the angle bracket (>) next to the collection name to open the collection details view. Under the **Activity** tab, review a chronological listing of activities affecting the collection. The activity feed displays who updated the collection, what the updates were, and when they were completed. Consecutive updates on the same session to the same entity are collated for readability.

![](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58788452.png)

##### Team

To review the activity feed at the team level, go to the **Activity Feed** tab within the **Team Library** view. Review a chronological listing of activities affecting all collections shared with the team. Like the feed at the collection level, the team activity feed displays who made changes, to what, and when it was completed.

![](http://blog.getpostman.com/wp-content/uploads/2016/10/840x459xScreenshot-2016-10-17-20.05.08-1024x560.png,qx38712.pagespeed.ic.1EV4RiRLH4.jp)

##### User

To review the activity feed at the user level, log in and go to the **Dashboard** tab on the **[Postman Website](https://app.getpostman.com).** The user activity feed includes a list of changes to collections that you own and are subscribed to.

![](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59057534.png)

### Breaking the Event down

The activity feed captures different updates that are made to collections. This includes CRUD operations (Create, Read, Update, Delete) on collection, folders, and requests, among other activities.

**![](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58927272.png)**

A consolidated update to a request, for example, looks like the screenshot above providing you with a diff view to pinpoint the exact changes. 

**Note**: Postman Pro users can view diffs. Other users will be able to track the "who" and "when" in the activity feeds, but not the "what" at this level of detail. 

### **Restoring collections**

Postman Pro users also have the ability within the collection-level activity feed to restore their collections to a point in time.

![](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59058662.png)

Hovering over the activity will display a **Restore** link. Clicking the **Restore** link will restore the collection to the point right _after_ this change was applied.

![](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59114317.png)

And now the top of the activity feed displays the confirmation of restoring the collection.

**![](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58927426.png)** 

### **Connecting to Slack, HipChat and Other Platforms**

Postman Pro users can pipe the team's activity feed to a communication channel of your choosing with the following integrations

*   *   [Postman Pro to Slack integration](https://www.getpostman.com/docs/Slack)
    *   [Postman Pro to Slack integration](https://www.getpostman.com/docs/HipChat)
    *   [Postman Pro to Microsoft Teams integration](https://www.getpostman.com/docs/Microsoft+Teams)  

### **Upcoming additions to the activity feed**

The activity feed will become even more powerful in the near future. It'll integrate with all our Postman Pro products → Mock Servers, Monitors, Documentation, and other features in the pipeline. We're also going to soon add **Tagging** support. You'll be able to tag collections at a point in time, allowing easier referencing and ability to rollback, while also allowing you set up Monitors and Documentation on tagged versions of the collection. These version control constructs will allow your team even more flexibility with your API code development within Postman Pro.