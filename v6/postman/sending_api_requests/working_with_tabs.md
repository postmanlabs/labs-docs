---
title: "Working with Tabs"
page_id: "working_with_tabs"
warning: false

---

A lot of users might want to keep multiple requests open at the same time. The Tabs feature lets you do this. Any request you send (and its response) are local to the tab it's in, and you can switch to other tabs without losing the data in other tabs. 
Click '+' sign to open a new tab, as illustrated in the screen below:

[![unsaved tabs](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Multiple_Tabs1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Multiple_Tabs1.png)

The following screen illustrates multiple tabs in the Postman interface:

[![tabs in postman](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Multiple_Tabs2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Multiple_Tabs2.png)

 When you click on a saved request in the collection sidebar, the request will open in a tab that is open. However, if the request that's open in the current tab is dirty (orange dot in the tab header), the new request will open in a new tab. A dirty tab is shown below:

 [![dirty tab](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Multiple_Tabs1_Dirty.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Multiple_Tabs1_Dirty.png)

 **Note:** If you want to open requests in a single tab every time you click a request in the side bar, set the option 'Always open requests in new tab' to OFF in Settings screen. The following gif file clearly illustrates this:

[![open req in new tab](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/OpenReqNewTab.gif)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/OpenReqNewTab.gif)

 The tabs feature lets you perform many actions. You can duplicate a current tab, close a current tab, force-close all tabs, force-close all but current tab and delete a tab. Click ellipsis (...) to perform these actions, as illustrated below:

[![tabs menu](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Multiple_Tabs3.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Multiple_Tabs3.png)

**Note:** Duplicating a tab and duplicating a request are not one and the same. When you duplicate a request, it occupies space and adds an additional request to your collection. However, Postman recommends you to always duplicate a tab when you want to run the same request with different query parameters without creating additional overheads.  

When you try to close an unsaved tab, Postman prompts you to save your changes, as shown in the following screen:

[![tabs save](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Multiple_Tabs_Save.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Multiple_Tabs_Save.png)

If you don't want to see the save dialog, select the check box 'Do not ask me again'. You can also control this behavior from the 'Settings' screen using the option 'Always ask when closing unsaved tabs'. 

If you accidentally or purposefully close a tab in Postman, you might want to retrieve the same tab again. Postman has a built-in feature that lets you restore all your tabs in the order they were closed. The following gif file clearly illustrates this process:

[![recently closed tabs](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/RecentlyClosedTabs.gif)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/RecentlyClosedTabs.gif)

