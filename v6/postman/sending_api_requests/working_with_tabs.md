---
title: "Working with Tabs"
page_id: "working_with_tabs"
warning: false

---
 ### Overview 

 Tabs in Postman allow you to keep multiple requests open at the same time. You can send a request and receive a response in each tab separately and switch between these tabs without losing data. Postman does not limit the number of tabs you can open. 
 
 This section describes the following topics:

 * Types of Tabs
 * Managing Tabs
 * Using Multiple Tabs
 * Other Tab Settings
 
#### Types of Tabs

The way tabs behave in Postman is something you may want to understand in vivid detail. Tabs have different states in Postman and this section outlines a brief overview of each state. The following are the different types of Tabs available:

* Preview Tab
* Busy Tab
* Unsaved Tab (Dirty Tabs)

##### Preview Tabs

Any new request opened in a new tab will be in preview mode. A tab in the preview mode appears as shown below: 

[![tabs in preview mode](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Tabs_Preview1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Tabs_Preview.png)


##### Busy Tab

A tab in Postman goes into the 'Busy' state once state there is a change of state in 
Whenever a tab changes from one state to another, in a preview mode changes to a Busy mode once it changes the state. For instance, 


##### Unsaved Tab (Dirty Tab)

An unsaved tab in Postman 




#### Managing Tabs

The tabs interface lets you perform many actions. You can open any number of tabs for your requests and can rearrange them in the order you want. Additionally, you can duplicate a current tab, close a current tab,force-close all tabs, force-close all but current tab and delete a tab. Also, there are keyboard shortcuts that let you perform these actions. 

This section describes the following topics:

* Opening and Closing Tabs
* Switching and Rearranging Tabs
* Duplicating Tabs
* Recovering Tabs

##### Opening and Closing Tabs

You can open several tabs at the same time.  Click '+' sign to open a new tab, as illustrated in the screen below:

[![unsaved tabs](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Multiple_Tabs1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Multiple_Tabs1.png)

The orange dot in the tab header indicates it's an unsaved tab (dirty). 

Whenever you close a tab in which changes have been made, an orange dot appears on the top corner of the tab indicating it's unsaved mode. 

asking whether you want to save the tab. (You can suppress these messages in the General area of the Preferences dialog box.) The message offers the following choices:
•	Don't Save closes the tab without saving. 
•	Cancel cancels the close action and the tab remains open. 
•	Save opens the Save dialog box in which each file (tab, workspace, or session) can be saved as it is closed.
•	A quick way to make a copy of an independent tab is to use the Duplicate options. This creates an exact duplicate of the active tab or workspace, except that the name of the new tab/workspace is followed by a number. Duplicating a tab or workspace does not modify the original in any way.


Click ellipsis (...) to perform these actions, as illustrated below:

[![tabs menu](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Multiple_Tabs3.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Multiple_Tabs3.png)

**Note:** Duplicating a tab and duplicating a request are not one and the same. When you duplicate a request, it occupies space and adds an additional request to your collection. However, Postman recommends you to always duplicate a tab when you want to run the same request with different query parameters without creating additional overheads.


### Using Multiple Tabs

The following screen illustrates multiple tabs in the Postman interface:

[![tabs in postman](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Multiple_Tabs2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Multiple_Tabs2.png)


 The way tabs open in Postman is something you may want to understand in vivid detail. Postman tabs have a concept of 'Preview Tabs'. 

 

 If you want to open requests in a single tab every time you click a request in the side bar, set the option 'Always open requests in new tab' to OFF in Settings screen. The following screen clearly illustrates this:

[![open req in new tab](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/OpenReqNewTab.gif)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/OpenReqNewTab.gif)
 
  When you set 'Always open requests in new tab' option to OFF, Postman searches for an open preview tab to open the request. It opens in a new preview tab only if it is does not find an already open preview tab. Set this option to ON to let Postman open a request in a new permanent tab always. The above screen illustrates this. 
 
 If you want to make a preview tab a permanent one, double-click the tab itself, as the following screen illustrates:

[![preview to permanent tab](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Preview_to_Permanent_Tab.gif)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Preview_to_Permanent_Tab.gif)

   

When you try to close an unsaved tab, Postman prompts you to save your changes, as shown in the following screen:

[![tabs save](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Multiple_Tabs_Save.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Multiple_Tabs_Save.png)

If you don't want to see the save dialog, select the check box 'Do not ask me again'. You can also control this behavior from the 'Settings' screen using the option 'Always ask when closing unsaved tabs'. 

If you accidentally or purposefully close a tab in Postman, you might want to retrieve the same tab again. Postman has a feature that lets you restore all your tabs in the order they were closed. The following screen clearly illustrates this process:

[![recently closed tabs](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/RecentlyClosedTabs.gif)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/RecentlyClosedTabs.gif)

A point to note here is that Postman has a limit of tracking your last 10 tabs. If you exceed this limit, you will not be able to retrieve the tab.