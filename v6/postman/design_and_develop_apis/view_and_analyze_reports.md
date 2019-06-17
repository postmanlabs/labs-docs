---
title: "Viewing and analyzing APIs"
page_id: "viewing_and_analyzing_apis"
warning: false
---


Postman is attempting to expedite API development better and faster. As businesses integrate with systems and enable functionalities to provide better user experience, they end up creating more APIs. With the API ecosystem broadening, the need for detailed API analytics arises in order to be able to provide feedback to design, plan, develop & test teams. In addition, API analytics help CXOs, Product managers, and API Architects to understand how their digital initiatives are performing. 

Postman also provides key API and organization-level metrics to help you understand the needs of your users so you could make the best use of its features. Remember, your collections must be linked to your APIs in order for you to analyze your APIs. 

**Note:** Your APIs must be shared with a team in order for you to generate reports. However, Postman does not take into account your APIs present in your personal workspaces.

You can use Postman API reports to collect and review specific information about APIs or teams under a single view in the Postman web dashboard. This section describes the following topics:

* [Launching the reporting dashboard](#launching-the-reporting-dashboard)
* [Understanding team-level metrics](#understanding-team-level-metrics)
* [Understanding API-level metrics](#understanding-API-level-metrics)

### Launching the reporting dashboard

To launch the reporting dashboard, select the API from the APIs tab and click **Reports**. Reports of the selected API will be displayed. The following screen illustrates launching the reporting dashboard:

![reports main(https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Report-Main.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Report-Main.png)

Clicking the **Reports** button launches the following screen:

![reports main(https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Report-Team1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Report-Team1.png)

In the above screen, select **Overview** to display organization-level metrics. It provides a statistical overview of the number of new and active APIs, team-size, and active and empty workspaces within a team. Click the corresponding section in the above screen for a detailed overview.

### Understanding team-level metrics

Visibility into some of your most important team-level metrics helps you and your teams monitor the API usage over time and make necessary changes depending on the usage of APIs and addition and deletion of the APIs. Using the organization-level metrics dashboard, you can track changes in the APIs and take appropriate action. 

It presents you the below metrics:

* [Total number of APIs](#total-number-of-apis)
* [New APIs](#new-apis)
* [Active APIs](#active-apis)
* [Team size](#team-size)
* [Empty workspaces](#empty-workspaces)
* [Active workspaces](#active-workspaces) 


#### Total number of APIs

Displays the total number of APIs present in the team. It displays a list of all APIs in both the private and public workspaces within the team. 

#### New APIs

Displays the number of new APIs created in the team. However, note that new versions of an API created are not accounted for.  

#### Active APIs

Displays the number of active APIs in the team. Postman considers an API active if at least one request was sent through a collection linked to an API. 

#### Team size

This view displays the number of users in the team. 

#### Empty workspaces

Displays a list of all empty workspaces within a team. Postman considers a workspace that has no collections created in it as an empty workspace.

#### Active workspaces

Displays a list of all active workspaces within a team. Personal workspaces are excluded from this list. Postman considers a workspace that has at least one revision made during a certain period as active.

### Understanding API-level metrics

The API-level metrics allow you to determine the team usage, average response time, average response size, test failures and response codes. It provides a graphical representation of the data and enables you to filter the data by collections and duration (last 7 or 30 days). The API-level metrics dashboard presents you the below metrics:

* [Average response size](#average-response-size)
* [Average response time](#average-response-time)
* [Number of error responses](#number-of-error-responses)
* [Traffic in Postman](#traffic-in-postman)
* [Failed test runs](#failed-test-runs)


#### Average response size

Gives you the average response size of your request in terms of bytes or kilobytes. 

#### Average response time

Gives you the average response time of the API to serve the request. 

#### Number of error responses

Gives you the number of error response codes your API is returning so you can analyze the cause and take corrective measures. 

#### Traffic in Postman

Gives you insights into the usage and traffic of the API so you can measure the performance and take precautionary steps. 

#### Failed test runs

Provides you the number of failed test runs in collection runs and monitors so you can identify and debug the root cause of errors in the requests. 
