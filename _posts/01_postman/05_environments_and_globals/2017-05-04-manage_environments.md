---
categories:
  - "postman"
  - "environments_and_globals"
title: "Manage environments"
page_id: "manage_environments"
warning: false

---

### **What is an environment?**

An environment is a set of key-value pairs, with the key as the variable name. You can use a [data editor](/docs/postman/launching_postman/navigating_postman) to modify an environment.


While working with APIs, you will often need to have different setups. For example, your local machine, the development server, or the production API. Environments give you the ability to customize requests using variables. This way you can easily switch between different setups without changing your requests. You won’t have to worry about remembering all those values once they are in Postman. Environments can be downloaded and saved as JSON files and uploaded later.

> **Environment and global variables are always stored as strings. If you’re storing objects/arrays, be sure to `JSON.stringify()` them before storing, and `JSON.parse()` them while retrieving.**

[![manage environments modal](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/manage_environ.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/manage_environ.png)

### **Creating a new environment**

You can create a new environment from the:
* Manage Environments icon
* New button
* Launch screen

#### **Manage environments icons**

Click the Manage Environments icon in the upper right corner of the Postman app

Image

Select “Manage Environments”. 
Click the Add button to create a new environment.

[![add new environment](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58756026.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58756026.png)


#### **New button**
In the header toolbar, click the **New** button.

Image

The Create New screen appears.
Image

Note: At the bottom of the screen you can select ‘Show this window at launch’ to indicate whether you want the Create New screen to display each time you open Postman.
Click Environment and enter a name for the new environment. 
Add the variables you want to save as key-value pairs.
Click Add.

 #### **
Launch screen**
The Create New screen appears by default when you launch Postman. (At the bottom of the screen you can select ‘Show this window at launch’ to indicate whether you want the Create New screen to display each time you open Postman.
Open Postman.
In the Create New screen, click Environment.
Enter a name for the new environment. 
Add the variables you want to save as key-value pairs.
Click Add.

Click the gear icon in the upper right corner of the Postman app and select "Manage Environments". In addition to creating and sharing an environment, you can also duplicate, export, and delete an environment. This is also where you can import an environment as a single JSON file.

##### **Select an active environment**

Click the dropdown in the upper right corner of the Postman app to select an active environment, or type in the environment name. Once you select an environment, you can access variables within the active environmental scope.  
[![environments dropdown](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58755923.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58755923.png)

##### **Edit an active environment**

Click the Quick Look icon in the upper right corner of the Postman app to display the environment and global variables. Clicking on the **Edit** link will open a modal for editing keys and values.

[![quick look icon](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58755957.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58755957.png)

##### **Share an environment**

Click the gear icon in the upper right corner of the Postman app and select "Manage Environments". Click the **Duplicate Environment** icon next to the environment you want to share.

[![duplicate environment](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58787970.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58787970.png)

It's a best practice to create a duplicate, remove any sensitive values like passwords and access tokens before downloading the copy to share with someone else.  When someone else imports the environment, or accesses the shared template, they can input their own personal information within their own version of the template.

For Postman Pro and Enterprise users, learn how to [share environment templates](/docs/postman/team_library/sharing) with team members.
