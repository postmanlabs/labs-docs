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

The way tabs behave in Postman is something you may want to understand in vivid detail. Since you will be actively using tabs, Postman categorizes them in different states based on your activity. This section outlines a brief overview of each state of the tab. The following are the different types of Tabs available:

* Preview Tab
* Busy Tab
* Unsaved Tab (Dirty Tabs)
* Conflicted Tab

##### Preview Tabs

A request when opened will be in a preview tab. Postman treats this as 'Preview tab' because it retains the existing state until you make any change in it. If you have four requests and open them one after the other, each of this requests opens in the same tab. Because you have not made any attempt to modify data within that tab, Postman treats it as a preview tab. A preview tab is represented in italicised titles. The following screen illustrates this: 

[![tabs in preview mode](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Tab_Preview1.gif)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Tab_Preview.gif)

Let's take a scenario wherein you've 100 requests that contain critical debugging information. And your aim is to just analyze the information in these requests. In this case, it makes sense to show the information in that request in a preview tab. It would just not be feasible to open 100 requests in 100 tabs

A tab in the preview mode appears as shown below: 

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
* Restoring Tabs
* Duplicating Tabs

##### Opening and Closing Tabs

You can open several tabs at the same time. Click '+' sign to open a new tab, as illustrated in the screen below:

[![open a tab](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Tabs_PlusSign.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Tabs_PlusSign1.png)

To close a tab, click 'x' on top corner of a tab. The following screen illustrates this:

[![close a tab](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Tabs_CloseHover.gif)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Tabs_CliseHover.gif.png)

**Note:** An orange dot on top right corner of a tab indicates there are changes that need to be saved. 

Whenever you close a tab after making changes in it, Postman prompts to save your changes, as shown below:

[![tabs save](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Multiple_Tabs_Save.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Multiple_Tabs_Save.png)

If you don't want to see the save dialog, select the check box 'Do not ask me again'. You can also control this behavior from the 'Settings' screen using the option 'Always ask when closing unsaved tabs'. 

The 'Do You Want To Save' dialog offers the following choices:

•	**Don't save** closes the tab without saving. 
•	**Cancel** cancels the close action and the tab remains open. 
•	**Save changes** saves your changes.

##### Switching and Rearranging Tabs

You can switch between tabs with a click of a mouse button. You can also rearrange tabs by dragging them along the tab bar, as shown in the screen below:

[![rearrange tabs](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/RearrangeTabs.gif)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/RearrangeTabs_.gif.png)


##### Restoring Tabs

If you close a tab in Postman, you might want to restore the same tab again. Postman lets you restore all your tabs in the order they were closed. 

The following screen clearly illustrates this process:

[![recently closed tabs](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/RecentlyClosedTabs.gif)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/RecentlyClosedTabs.gif)

**Note:** A point to note here is that Postman has a limit of tracking your last 10 tabs. If you exceed this limit, you will not be able to restore the tab.


##### Duplicating Tabs

A quick way to make a copy of an independent tab is to use the Duplicate Current Tab option. This creates an exact duplicate of the active tab.  

Click ellipsis (...) to duplicate a tab, as illustrated below:

[![tabs menu](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Multiple_Tabs3.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Multiple_Tabs3.png)

**Note:** Duplicating a tab and duplicating a request are not one and the same. When you duplicate a request, it occupies space and adds an additional request to your collection. Postman recommends you to always duplicate a tab to run the same request with different query parameters. 


### Using Multiple Tabs

Postman lets you open multiple tabs in its interface. When your interface contains so many tabs they may seem not fitting in the Postman interface. But tabs just get underneath each other as they are added because Postman does not limit you from creating tabs. 

The following screen illustrates multiple tabs in the Postman interface:

[![tabs in postman](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Multiple_Tabs2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Multiple_Tabs2.png)

Postman allows you control the way you want to work with multiple tabs. To learn more about this, refer to the section 'Other Tab Settings'. 

### Other Tab Settings

To provide more user control on tabs, Postman has the following two settings options that you can set based on your preference:

* Always open requests in new tab
* Always ask when closing unsaved tabs

##### Always open request in new tab

If you want to open requests in a single tab every time you click a request in the side bar, set the option 'Always open requests in new tab' to OFF in Settings screen. The following screen clearly illustrates this:

[![open req in new tab](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/OpenReqNewTab.gif)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/OpenReqNewTab.gif)
 
 When you set 'Always open requests in new tab' option to OFF, Postman searches for an open preview tab to open the request. It opens in a new preview tab only if it is does not find an already open preview tab. Set this option to ON to let Postman open a request in a new tab always. The above screen illustrates this. 
 


##### Always ask when closing unsaved tabs

If you wish to save your data in a tab, set this option to 'ON' in Postman settings screen. 
 

