---
title: "Customizing Postman"
page_id: "customizing_postman"
warning: false
---

### Creating Custom Methods

Postman features can easily be extended and customized to meet corporate, team-wide and user-specific requirements. With a view to providing more user-control, Postman introduced **Custome Methods** feature. Using this feature, you can create your own custom methods. Once you create these methods, you'll be able to send/save your requests. This feature also lets you to save/delete the custom method. This feature also allows you to delete default methods thereby giving the entire user control to you. Working with this feature is a breeze. Just point your cursor to the dropdown of the request method area, click there and type your custom method name and save it. It's that simple! The following screen illustrates this procedure. 

[![custom methods1](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/custom_methods2.gif)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/custom_methods2.gif)

**Note:** You can only save your custom methods locally, which means these are not synced to the Postman servers. This essentially means signing out will cause your data to be lost. However, you are also not limited to use any request having a custom method that is not saved in the list. The only constraint is that it will not appear in the method drop-down.   

If you are in a team workspace and creating and using custom methods, the behavior of this feature is a little dynamic so we recommend you to note the following points:

1. When importing collections having requests with custom methods, you'll still be able to view these custom methods and be able to save by clicking the custom method.

2. You must be on the same version of the app in order for you to effectively use this feature. 

3. If you import collections containing requests with custom methods in an older version of the Postman app, the custom methods can only be viewed and consumed but can't be saved. This behavior is influenced by the Sync feature.

4. Likewise, even if you are in the older version of Postman app, you'll still be able to view and consume custom methods from the History tab if your team member had created custom methods using the newest version of the app. However, you'll not be able to save these custom methods.

5. If you're in a team workspace and send a request by creating a custom method in it, the history created cannot be viewed by your team members unless they are on the latest app.

**Note:** Mock servers currently don't support custom methods. 






  

