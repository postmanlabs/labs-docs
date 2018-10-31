---
title: "Sharing history in Workspaces"
page_id: "sharing_history_in_workspaces"
warning: false
---

 Postman, besides storing "History" of all your requests, will also let you save the responses to your requests. This feature strengthens the collaboration aspect of Postman. You can view everything your team members send or receive using the history of these responses and can collaborate with them to debug or report issues. 
 
 To illustrate this with an example, let's consider two users Arif+3 and Arif+4 as this enables us to switch between two users for the sake of demonstration. User Arif+3 sends a pm.globals.set request with incorrect syntax. This throws an error. The other user Arif+4 accesses the same request from the history of Arif+3, corrects the script and sends the request.   
 
 [![history response 1](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/History_Response3.gif)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/History_Response3.gif)

 In the above gif, you can see an environment variable in the pre-request script  returning an error. After corrections, you can see a correct response and how the button adjacent to the Pre-request Script turns from red to green. Your corrected version can again be viewed by other team members in the history and responses section who can in turn access and modify the request. 








