---
category: 
  - "docs"
  - "postman"
  - "launching_postman"
title: "Navigating Postman"
page_id: "navigating_postman"
warning: false
---

Postman provides a multi-window and multi-tab interface for you to work on APIs. Postman strives to be clean and flexible to your needs. It gives you as much space as possible for your APIs. Navigating through the interface is easy. See the graphic below to see how everything is organized.

![](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59046674.jpg)

### Sidebar

The Postman sidebar lets you find and manage requests and collections. The sidebar is divided into two main tabs, for **[History](https://www.getpostman.com/docs/History)** and **[Collections](https://www.getpostman.com/docs/Collections)**.

The right edge can be dragged to resize the width of the sidebar.  The sidebar can also be minimized for smaller screens.

![](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58460797.png)

### **History tab**

Every request that you send inside the Postman app is saved in the **History** tab within the sidebar. Learn more about harnessing the power of your history [here](https://www.getpostman.com/docs/History).

### **Collections tab**

Create and manage collections from the **Collections** tab in the sidebar. Learn more about Collections and how they help bring your APIs to warp speed [here](https://www.getpostman.com/docs/What+is+a+collection).

### **Header toolbar**

![](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58462646.png)

The topmost toolbar in Postman covers the following options:

1.  *   Sidebar toggle icon - Show or hide the sidebar
    *   **Runner** button - Open the [collection runner](https://www.getpostman.com/docs/Collection+Runs)
    *   **Import** button - Import Postman collections, environments, WADL, Swagger, RAML, or cURL into Postman using files, links or raw text
    *   New window icon - Open a new Postman window
    *   **Builder** and **Team Library** tabs - Switch context between the request builder and team library view
    *   Interceptor/Proxy icon - Manage proxy or Interceptor settings
    *   Sync status icon - See and update the status of your Postman account 
    *   User dropdown - Manage collection links and your profile or log in to, or out of, your Postman account
    *   Notifications icon - Receive notifications or broadcasts
    *   Settings icon - Manage Postman app settings and find other support resources
    *   Heart - Love Postman? Click on this button to share the love!

### Builder

Postman gives you a tabbed layout for sending and managing API requests in the builder. The top half is the request builder and the bottom half is the response viewer.  

*   *   **Cookies** - The **MANAGE COOKIES** modal is accessed by the **Cookies** link on the far right beneath the **Save** button. This feature lets you manage cookies associated with the request. Learn more about [working with cookies](https://www.getpostman.com/docs/Cookies).

    *   **Code** - The **GENERATE CODE SNIPPETS** modal is accessed by the **Code** link on the far right beneath the **Save** button. This feature lets you generate code snippets associated with the request in more than 20 languages.

### Console

To see what's going behind the scenes, there are two consoles available in Postman. Learn more about troubleshooting with console logs [here](https://www.getpostman.com/docs/Logging+and+troubleshooting+Postman).

*   *   Postman console - Contains a running log of HTTP requests and responses. Logs messages that come out of scripts (like in console.log). This feature is only available in Postman's native apps.
    *   DevTools console - Where you can log diagnostic information during development.

### Menu bar

The Postman application menu bar provides access to additional features. Note that there are some key differences between the menu bar for Postman's native apps and Postman's Chrome app.

**Postman native app**:  displays more menu options making it easier to access specific Postman features.

[![](http://blog.getpostman.com/wp-content/uploads/2017/03/Screen-Shot-2017-03-02-at-3.43.45-PM.pn)](http://blog.getpostman.com/wp-content/uploads/2017/03/Screen-Shot-2017-03-02-at-3.43.45-PM.png)

**Postman Chrome app**:  displays a few menu options restricted by the Chrome standard 

[![](http://blog.getpostman.com/wp-content/uploads/2017/03/Screen-Shot-2017-03-02-at-3.46.38-PM.pn)](http://blog.getpostman.com/wp-content/uploads/2017/03/Screen-Shot-2017-03-02-at-3.46.38-PM.png)

### Tabs and Windows

Postman lets you use multi-tab and multi-window configurations. This allows you to work on multiple requests or even multiple collections together and simultaneously.

To open a new tab in Postman press the **+** icon in the builder or use the **CMD/CTRL + T** shortcut. From the menu bar, you can also select "New Tab" from the **File** menu to create a new tab.

By right clicking on a tab name, the menu allows you to duplicate or close tabs.  If any tab has unsaved changes and you are attempting to close the tab, Postman will prompt you to save your changes.

##### **Tab and sidebar behavior**

By default, Postman assumes that you want to work on one collection request in one tab. When you open a request from the sidebar, Postman will open a new tab if an existing tab has unsaved changes, otherwise the request takes over the current tab. You can always open a request in a new tab. From the sidebar under the **Collections** tab, right click a request and select "Open in New Tab".

##### **Moving requests**

Within the request builder, drag and drop tabs to reorder them as you see fit. Open a new request in a new tab, or in a new Postman window. Open multiple windows using the **New Window** icon in the header toolbar or the keyboard shortcut.

### Keyboard Shortcuts

Keyboard usability is high on the priority list for any dev tool. For most developers, it’s a more efficient input method, requiring minimum movement and effort compared to a mouse or other pointing device. It also saves time, and for repetitive or well-frequented tasks, this can bring about a huge improvement in speed over the long run.

When we approached assigning keyboard shortcuts in Postman, we broadly categorized them into three buckets based on their function: navigation, manipulation and global. Navigational shortcuts help you move around the interface, manipulation shortcuts allow you to manipulate the current selection and global shortcuts can be accessed from anywhere.

##### Navigational Shortcuts

We want to make it easier for a user to navigate quickly between elements. Let’s take the simple example of opening and sending a series of saved requests. Without a shortcut, a user selecting a request in the sidebar would use their pointer every time to open it in a tab. With the **CMD/CTRL + ALT + 1** shortcut, you can now focus the sidebar from wherever you are in interface. You can then navigate to the desired request using the arrow keys. Combine this with **CMD/CTRL + Enter** to send a number of requests in the matter of a few seconds. 

##### Manipulation Shortcuts

Manipulation shortcuts allow you to quickly work on your current selection and perform actions such as edit, delete and duplicate. Combined with navigational shortcuts, this makes creating and organizing collections in your sidebar a breeze. These shortcuts can also be used in other list views such as our new data editor.

##### Global Shortcuts

Global shortcuts are used for important actions so that they can be accessed irrespective of the element in focus. Actions on your selected tab, like Save (**CMD/CTRL + S**), Save As (**CMD/CTRL + Shift + S**), and Send Request (**CMD/CTRL + Enter**) all follow this pattern. Global shortcuts can also be used to perform UI actions like toggling the sidebar(**CMD/CTRL + \**), Jump to URL (**CMD/CTRL + L**), and Open Console (**CMD/CTRL + ALT + C**).

##### View keyboard shortcuts for your OS

Different operating systems will have different shortcuts.  You can always view a complete list of your operating system's shortcuts under the **Shortcuts** tab in the **SETTINGS** modal.

##### ![](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59179733.png)

##### Reference for all shortcuts

<div>

<table>

<thead>

<tr>

<th>

TABS

</th>

<th>

macOS

</th>

<th>

Windows / Linux Shortcuts

</th>

</tr>

</thead>

<tbody>

<tr>

<td>Open New Tab</td>

<td>⌘ T</td>

<td>Ctrl + T</td>

</tr>

<tr>

<td>Close Tab</td>

<td>⌘ W</td>

<td>Ctrl + W</td>

</tr>

<tr>

<td>Switch To Next Tab</td>

<td>⇧ ⌘ ]</td>

<td>Ctrl + Shift + ]</td>

</tr>

<tr>

<td>Switch To Previous Tab</td>

<td>⇧ ⌘ [</td>

<td>Ctrl + Shift + [</td>

</tr>

<tr>

<td>Switch To Tab at Position</td>

<td>⌘ 1 through ⌘ 8</td>

<td>Ctrl + 1 through Ctrl + 8</td>

</tr>

<tr>

<td>Switch To Last Tab</td>

<td>⌘ 9</td>

<td>Ctrl + 9</td>

</tr>

<tr>

<td>Open Request from Sidebar in New Tab</td>

<td>⌥ ⌘ (click)</td>

<td>Ctrl + Shift + (click)</td>

</tr>

<tr>

<th>REQUEST</th>

<th>  
</th>

<th>  
</th>

</tr>

<tr>

<td>Request URL</td>

<td>⌘ L</td>

<td>Ctrl + L</td>

</tr>

<tr>

<td>Save Request</td>

<td>⌘ S</td>

<td>Ctrl + S</td>

</tr>

<tr>

<td>Save Request As</td>

<td>⇧ ⌘ S</td>

<td>Ctrl + Shift + S</td>

</tr>

<tr>

<td>Send Request</td>

<td>⌘ ↵</td>

<td>Ctrl + Enter</td>

</tr>

<tr>

<td>Send And Download Request</td>

<td>⌥ ⌘ ↵</td>

<td>Ctrl + Alt + Enter</td>

</tr>

<tr>

<td>Scroll To Request</td>

<td>⌥ ⌘ ↑</td>

<td>Ctrl + Alt + ↑</td>

</tr>

<tr>

<td>Scroll To Response</td>

<td>⌥ ⌘ ↓</td>

<td>Ctrl + Alt + ↓</td>

</tr>

<tr>

<td>Beautify raw Request body</td>

<td>⌘ B</td>

<td>Ctrl + B</td>

</tr>

<tr>

<th>SIDEBAR</th>

<th>  
</th>

<th>  
</th>

</tr>

<tr>

<td>Search Sidebar</td>

<td>⌘ F</td>

<td>Ctrl + F</td>

</tr>

<tr>

<td>Toggle Sidebar</td>

<td>⌘ \</td>

<td>Ctrl + \</td>

</tr>

<tr>

<td>Next Item</td>

<td>↓</td>

<td>↓</td>

</tr>

<tr>

<td>Previous Item</td>

<td>↑</td>

<td>↑</td>

</tr>

<tr>

<td>Expand Item</td>

<td>→</td>

<td>→</td>

</tr>

<tr>

<td>Collapse Item</td>

<td>←</td>

<td>←</td>

</tr>

<tr>

<td>Select Item</td>

<td>↵</td>

<td>Enter</td>

</tr>

<tr>

<td>Rename Item</td>

<td>⌘ E</td>

<td>Ctrl + E</td>

</tr>

<tr>

<td>Group Items</td>

<td>⌘ G</td>

<td>Ctrl + G</td>

</tr>

<tr>

<td>Cut Item</td>

<td>⌘ X</td>

<td>Ctrl + X</td>

</tr>

<tr>

<td>Copy Item</td>

<td>⌘ C</td>

<td>Ctrl + C</td>

</tr>

<tr>

<td>Paste Item</td>

<td>⌘ V</td>

<td>Ctrl + V</td>

</tr>

<tr>

<td>Duplicate Item</td>

<td>⌘ D</td>

<td>Ctrl + D</td>

</tr>

<tr>

<td>Delete Item</td>

<td>⌫</td>

<td>Del</td>

</tr>

<tr>

<th>INTERFACE</th>

<th>  
</th>

<th>  
</th>

</tr>

<tr>

<td>Zoom In</td>

<td>⌘ +</td>

<td>Ctrl + +</td>

</tr>

<tr>

<td>Zoom Out</td>

<td>⌘ -</td>

<td>Ctrl + -</td>

</tr>

<tr>

<td>Reset Zoom</td>

<td>⌘ 0</td>

<td>Ctrl + 0</td>

</tr>

<tr>

<td>Toggle Two-Pane View</td>

<td>⌥ ⌘ V</td>

<td>Ctrl + Alt + V</td>

</tr>

<tr>

<td>Switch To Sidebar</td>

<td>⌥ ⌘ 1</td>

<td>Ctrl + Alt + 1</td>

</tr>

<tr>

<td>Switch To Builder</td>

<td>⌥ ⌘ 2</td>

<td>Ctrl + Alt + 2</td>

</tr>

<tr>

<th>WINDOWS AND MODALS</th>

<th>  
</th>

<th>  
</th>

</tr>

<tr>

<td>New Requester Window</td>

<td>⌘ N</td>

<td>Ctrl + N</td>

</tr>

<tr>

<td>New Runner Window</td>

<td>⇧ ⌘ N</td>

<td>Ctrl + Shift + N</td>

</tr>

<tr>

<td>New Console Window</td>

<td>⌥ ⌘ C</td>

<td>Ctrl + Alt + C</td>

</tr>

<tr>

<td>Import</td>

<td>⌘ O</td>

<td>Ctrl + O</td>

</tr>

<tr>

<td>Manage Environments</td>

<td>⌥ ⌘ E</td>

<td>Ctrl + Alt + E</td>

</tr>

<tr>

<td>Settings</td>

<td>⌘ ,</td>

<td>Ctrl + ,</td>

</tr>

<tr>

<td>Submit Modal</td>

<td>⌘ ↵</td>

<td>Ctrl + Enter</td>

</tr>

<tr>

<td>Open Shortcut Help</td>

<td>⌘ /</td>

<td>Ctrl + /</td>

</tr>

</tbody>

</table>

</div>

### Data editor

Working with large amounts of data can be cumbersome and time consuming. Postman's data editor lets you view and manipulate data in a fast, effective, and elegant manner.

Spreadsheet features are familiar to most people working with data, so we used them as inspiration for the design of the data editor.  

##### Visual layout

We've configured the available horizontal and vertical space more effectively to optimize the data that can be displayed up front.

Relevant features will display for a specific row on hover. This reduces clutter in the interface and helps the user focus on the most relevant data.

![](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59162701.png)

##### Select multiple rows by simply dragging your mouse

![](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59162713.gif)

##### Keyboard shortcuts for the data editor

![](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59162727.png)

![](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59162742.gif)

##### Support for bulk actions

You can select and copy multiple rows. Then go ahead and paste them in a different place (e.g. params) and check out what happens for yourself ![](images/icons/emoticons/smile.pn)

![](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59162757.gif)  

##### View information up front

We want to display the information you want to see up front. If you navigate to a place with a large amount of data, the UI element auto expands to show the complete information. This is implemented in the data editor as well as the URL bar.  

![](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59162771.gif)

##### Ability to resize columns

You can change the width of the key and value columns by dragging the boundary on the right side of the ‘key’ column header.

![](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59162787.gif)

##### **Multiline support**

The data editor supports sending multiline values. Pressing 'Enter' in a key or value field expands it and takes the cursor to a new line.

**![](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59162801.gif)**

</div>