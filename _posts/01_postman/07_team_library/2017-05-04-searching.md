---
categories:
  - "postman"
  - "team_library"
title: "Searching"
page_id: "searching"
warning: false
---

### Searching in Postman
Find lets you search in collections, environments, and globals. 

1. Click on the **Find** icon in the status bar. 

[![findIcon](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Find_icon2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Find_icon2.png)

2. Enter the term you want to search and determine the search settings.
3. Click the **Find** button.

**Note**: Windows and Linux users can press CMD+SHIFT+F as a keyboard shortcut to access Find.

#### Determine your search settings
You can set search settings to:
* Refine the search expression
* Determine where to search
* Filter search results
* Navigate search results

#### Refine the search expression
You can refine your search expression by selecting a regular expression or ignore case. 

| **Setting**  | **Description** |
| --- | --- |
| Regex (regular expression) | Set the entity as a string of text to locate.  |
| Ignore Case| Indicate whether or not upper- and lowercase letters are considered the same. |

[![findRegex](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Find_regex1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Find_regex1.png)

#### Indicate where to search
You can search through all collections, environments, and globals.

| **Setting**  | **Description** |
| --- | --- |
| Everything| Search all collections, environments, and globals. ‘Everything’ is the default setting.  |
| Choose entities to find:| Select whether to direct your search in collections, environments, or globals. |
| Collections | Select this setting to search in collections. You can specify the collection to search or click Select all to search all collections.<br> [![findCollection](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Find_searchCollections.jpg)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Find_searchCollections.jpg) |
| Environments| Select this setting to search in environments. You can specify the environments to search or click Select all to search all environments.<br>   [![findEnvironment](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Find_environments.jpeg)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Find_environments.jpeg)|
| Globals| Select this setting to search in globals. <br> [![findGlobals](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Find_globals.jpeg)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Find_globals.jpeg) |


#### Filter search results
To narrow results in specific fields, you can choose the fields to exclude from the "Include fields" drop down for each of the tabs in collections, environments and globals.

| **Tab**  | **Filter** |
| --- | --- |
| Collections| [![filter_collections](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Find_collections_filter2.jpeg)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Find_collections_filter2.jpeg) |
| Environments| [![filter_environment](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Find_environments_filter.jpeg)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Find_environments_filter.jpeg) |
| Globals |  [![filter_globals](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Find_globals.jpeg)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Find_globals.jpeg)   |

#### Navigate search results
As you browse search results, you can collapse the entities you don’t want to see.

|  |  |
| --- | --- |
| To expand and collapse entities, click the entity name in the results area.| IMAGE |
| In Collections, you can open a specific request in the builder when you click on 'Open in builder'. | IMAGE |
| In Environments, you can open a specific request in MANAGE ENVIRONMENTS when you click on 'Open'. |  IMAGE  |
| In Globals, you can open a specific request in MANAGE ENVIRONMENTS when you click on 'Open'. |  IMAGE  |
| You can see the key name to which a value or a description belongs for data editor elements in the form of key, value, description, and so on. When you hover over a value or description, a tooltip displays with information about the key.  |  IMAGE  |

### Filtering by name or description

To quickly filter the list of collections in your library, begin typing the collection name or description in the search input field.

[![filter collections](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/teamLibraryFilter.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/teamLibraryFilter.png)

### Favoriting

You can favorite collections in the Team Library like you do in the **Collections** sidebar. Click on the star icon to bring the collection(s) to the top of the list. Favorited collections from both places will always be listed at the top.

### Sorting

You can re-order collections in the Team Library by Name, Last Modified, Owner, or by Date Created. Remember that collections that you have favorited will be at the top but now sorted by the criteria you selected.

[![sort collections](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/teamLibrarySort.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/teamLibrarySort.png)

### Searching through the Slack Bot

You can integrate the Postman Pro Search Slack bot and get more detailed search results too. This feature will be available in the Team Library soon. Read more about the [Slack Bot](http://blog.getpostman.com/2015/09/24/api-integrations-using-postman-building-a-slack-channel-bot/){:target="_blank"}.
