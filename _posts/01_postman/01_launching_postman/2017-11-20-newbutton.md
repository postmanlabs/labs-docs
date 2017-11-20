The **New** button lets you initiate requests, collections, environments, monitors, documentation, and mock servers in one button click.

[![new_button](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/newButton_homePage_blk.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/newButton_homePage_blk.png)

When you click the **New** button, the **Create New** modal appears.

![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

In **BUILDING BLOCKS**, create a new request, collection, or environment.

In **ADVANCED**, create a new monitor, documentation, and a mock server.

You can select ‘Use a Template’ to use templates that are helpful to developers and DevOps operations, such as DNS and link checkers.

You can also indicate whether to show the **Create New** modal each time you open Postman.

**Note**: You can directly create a new feature when you click the down arrow at the right side of the **New** button.

## BUILDING BLOCKS
### Creating requests
You can create any kind of HTTP request. 

1. To create a request, click ‘Request’ from the **New** button drop down menu and enter a title and description. 
2. Select a collection and save the request in it. 

You can either create a new collection or select an existing one. After you save the request, you can add the URL, method, headers, and body to the request in the builder.

![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

### Creating collections
A collection is a group of individual requests that you can organize into folders. 

1. To create a collection, click ‘Collection’ from the New button drop down menu and enter a name and description for it. 
2. After creating the collection, you can save requests to this collection and add folders for better organization.

![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

### Creating environments
While working with APIs, you often need different setups, such as your local machine, the development server, or the production API. Environments let you customize requests using variables. 

1. To create an environment, click ‘Environment’ from the New button drop down menu and enter a name for it. 
2. Add the variables you want to save as key-value pairs.

![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

## ADVANCED
### Creating monitors
A monitor runs a collection periodically to check its performance and response. You can set a monitor to run as frequently as every 5 minutes. 

1. To create a monitor, click ‘Monitor’ from the New button drop down menu and enter the URLs you want to monitor, and indicate the response time and the response code. You can also select an existing collection to monitor all those requests. 
2. Click ‘Next’ to enter the name of the monitor, how often you want the monitor to run, and the region you want to monitor.

Postman makes a collection of the URLs and adds a script that checks the response time and response code for each URL.

You receive notifications when either the response code doesn’t match or the response time falls below the expected values. You can also add the method, headers, and body to the individual URLs in the request builder, as well as add custom test scripts.

![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

### Creating documentation
You can create public or private documentation and share it in a web page. Postman generates and hosts browser-based documentation for your collections automatically in real-time. 

1. To create documentation, click ‘Documentation’ from the New button drop down menu and enter the request URLs with the methods you want to document. 
2. Click ‘Next’ to enter the name for the APIs and a general description for your API. 

Postman creates a collection and generates documentation that you and your team can view.

![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

### Creating mock servers
A mock server simulates each endpoint in a Postman Collection. You can mock a request and response in Postman before you send the actual request or set up a single endpoint to return the response. 

1. To create a mock server, click ‘Mock Server’ from the New button drop down menu and enter the request endpoint and the expected response. 
2. Then click ‘Next’ to enter the name of your APIs. You can indicate if you want this mock server to be private.

Postman creates a collection and adds examples for individual requests. Postman also provides a mock URL you can share with the public, such as with front-end developers. They can send a request to this URL, followed by an endpoint, to get the corresponding response.

![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")






