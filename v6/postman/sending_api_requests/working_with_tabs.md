---
title: "Working with Tabs"
page_id: "working_with_tabs"
warning: false

---

A lot of users might want to keep multiple requests open at the same time. The Tabs feature lets you do this. Any request you send (and its response) are local to the tab it's in, and you can switch to other tabs without losing the data in other tabs. The following screen illustrates multiple tabs in Postman interface:

[![tabs in postman](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Multiple_Tabs2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Multiple_Tabs2.png)

Click '+' sign to create a tab, as illustrated in the screen below:

[![unsaved tabs](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Multiple_Tabs1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Multiple_Tabs1.png)

 When you click on a saved request in the collection sidebar, the request will open in a tab that is open. However, if the request that's open in the current tab is dirty (orange dot in the tab header), the new request will open in a new tab.

 The tabs feature lets you perform many actions. You can duplicate a current tab, close a current tab, force-close all tabs, force-close all but current tab and delete a tab. Click ellipsis (...) to perform these actions, as illustrated below:

[![tabs menu](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Multiple_Tabs3.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Multiple_Tabs3.png)

When you try to close an unsaved tab, Postman prompts you to save your changes, as shown in the following screen:

[![tabs save](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Multiple_Tabs_Save.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Multiple_Tabs_Save.png)

If you don't want to see the save dialog, select the check box 'Do not ask me again'. You can also control this behavior from the 'Settings' screen using the option 'Always ask when closing unsaved tabs'. 


Use `Cmd + Shift + { , }` (`Ctrl` for windows) to cycle through open tabs.


[![dirty tab in postman](https://www.getpostman.com/img/v1/docs/tabs/dirtytab.png)](https://www.getpostman.com/img/v1/docs/tabs/dirtytab.png)

You can also use `Cmd+Shift+Click` (or `Ctrl+Shift+Click`) to force-open the request in a new tab.