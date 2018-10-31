---
title: "Sharing history in Workspaces"
page_id: "sharing_history_in_workspaces"
warning: false
---

 Postman, besides storing "History" of all your requests, will also let you save the responses to your requests. This feature strengthens the collaboration aspect of Postman. You can view everything your team members send or receive using the history of these responses and can collaborate with them to debug or report issues. 

 Let's take a case in point. Go through the Gif below:

 [![history response 1](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/History_Response.gif)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/History_Response.gif)

 To illustrate this with an example, let's consider two users Arif+3 and Arif+4 as this enables us to switch between two users for the sake of demonstration. User Arif+3 sends a pm.globals.set request with values foo1 and bar1 instead of sending some actual variable values. The other user Arif+4 accesses the same request from the history of Arif+3 and sends some real values instead - userid and John007.   
 


 
 In the above gif, you can see one of your team members specified an environment variable in the pre-request script which returns an error. You can make corrections and resend the request. Once you do this, you can see how a correct response is received and how the button adjacent to the Pre-request Script turns from red to green. Your corrected version can again be viewed by other team members in the history and responses section who can in turn access and modify this request from the history responses section. 








