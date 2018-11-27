---
title: "Working with Tabs"
page_id: "working_with_tabs"
warning: false

---

A lot of users might want to keep multiple requests open at the same time. The Tabs feature lets you do this. Any request you send (and its response) are local to the tab it's in, and you can switch to other tabs without losing the data in other tabs. 
Click '+' sign to open a new tab, as illustrated in the screen below:

[![unsaved tabs](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Multiple_Tabs1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Multiple_Tabs1.png)

The orange dot in the tab header indicates it's an unsaved tab (dirty). The following screen illustrates multiple tabs in the Postman interface:

[![tabs in postman](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Multiple_Tabs2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Multiple_Tabs2.png)

 The way tabs open in Postman is something you may want to understand in vivid detail. Postman tabs have a concept of 'Preview Tabs'. A tab in the preview mode appears as shown below:

 [![tabs in preview mode](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Tabs_Preview1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Tabs_Preview.png)

 If you want to open requests in a single tab every time you click a request in the side bar, set the option 'Always open requests in new tab' to OFF in Settings screen. The following gif file clearly illustrates this:

[![open req in new tab](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/OpenReqNewTab.gif)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/OpenReqNewTab.gif)
 
 Postman always opens a request in the 'preview' tab if 'Always open requests in new tab' option is set to OFF in the Settings screen. When this option is set to ON, Postman opens a request in a new permanent tab always. The above GIF file illustrates this. 
 
 If you want to make a preview tab a permanent one, double-click the tab itself, as the following GIF file illustrates:

[![preview to permanent tab](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Preview_to_Permanent_Tab.gif)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Preview_to_Permanent_Tab.gif)

 The tabs feature lets you perform many actions. You can duplicate a current tab, close a current tab, force-close all tabs, force-close all but current tab and delete a tab. Click ellipsis (...) to perform these actions, as illustrated below:

[![tabs menu](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Multiple_Tabs3.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Multiple_Tabs3.png)

**Note:** Duplicating a tab and duplicating a request are not one and the same. When you duplicate a request, it occupies space and adds an additional request to your collection. However, Postman recommends you to always duplicate a tab when you want to run the same request with different query parameters without creating additional overheads.  

When you try to close an unsaved tab, Postman prompts you to save your changes, as shown in the following screen:

[![tabs save](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Multiple_Tabs_Save.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Multiple_Tabs_Save.png)

If you don't want to see the save dialog, select the check box 'Do not ask me again'. You can also control this behavior from the 'Settings' screen using the option 'Always ask when closing unsaved tabs'. 

If you accidentally or purposefully close a tab in Postman, you might want to retrieve the same tab again. Postman has a built-in feature that lets you restore all your tabs in the order they were closed. The following gif file clearly illustrates this process:

[![recently closed tabs](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/RecentlyClosedTabs.gif)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/RecentlyClosedTabs.gif)

