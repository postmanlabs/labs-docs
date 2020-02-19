---
title: "Sharing a collection run"
order: 116
page_id: "sharing_a_collection_run"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Intro to collection runs"
    url: "/docs/postman/collection-runs/intro-to-collection-runs/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Tyk"
    url: "https://www.postman.com/case-studies/Tyk.pdf"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Intro to Workspaces"
    url: "/docs/postman/workspaces/intro-to-workspaces/"

warning: false
---
To share a Collections run results, you can export them from the Collection Runner so that they can be imported into another users Postman application.

This topic will describe how to [export](#exporting-single-or-multipe-collection-runs) and [import](#importing-a-run) a collection run.

## Exporting single or multiple collection runs

To export a collection run, select the _Download_ icon. This will appear when you hover over a specific item in the _Recent Runs_ list.

This will open an explorer window, you can then save the generated JSON file to a local file directory.

[![export collection run](https://assets.postman.com/postman-docs/Collection_Run_Export.png)](https://assets.postman.com/postman-docs/Collection_Run_Export.png)

You also can select a collection run from the _Recent Runs_ list and click the **Export Results** button in the Runner's header. This will open an explorer window, you can then save the generated JSON file to a local file directory.

[![export results](https://assets.postman.com/postman-docs/Collection_Run_Export_Results.png)](https://assets.postman.com/postman-docs/Collection_Run_Export_Results.png)

To export multiple collections run results from the _Recent Runs_ list, hold down the command key and select the items from the list that you want to export. Select the _Download_ icon, this can be found on the right side of the _Recent Runs_ menu bar.

This will open an explorer window, you can then save the generated .zip file of all the selected collection runs to a local file directory.

[![export multiple results](https://assets.postman.com/postman-docs/Collection_Run_Export_Multiple_Results.png)](https://assets.postman.com/postman-docs/Collection_Run_Export_Multiple_Results.png)

## Importing a run

To import a run, select the **Import Runs** button on the _Recent Runs_ menu bar. An explorer window will open, this can be used to navigate your local file directory and import either a JSON collection run file or a .zip file of multiple collections run results into Postman.

[![import collection run](https://assets.postman.com/postman-docs/Collection_Run_Import_Results.png)](https://assets.postman.com/postman-docs/Collection_Run_Import_Results.png)

---
For more information about collection runs, see:

* [Starting a collection run](/docs/postman/collection-runs/starting-a-collection-run/)
* [Using environments in collection runs](/docs/postman/collection-runs/using-environments-in-collection-runs/)
* [Working with data files](/docs/postman/collection-runs/working-with-data-files/)
* [Running multiple iterations](/docs/postman/collection-runs/running-multiple-iterations/)
* [Building workflows](/docs/postman/collection-runs/building-workflows/)
* [Debugging a collection run](/docs/postman/collection-runs/debugging-a-collection-run/)
* [Command line integration with Newman](/docs/postman/collection-runs/command-line-integration-with-newman/)
* [Integration with Jenkins](/docs/postman/collection-runs/integration-with-jenkins/)
* [Integration with Travis CI](/docs/postman/collection-runs/integration-with-travis/)
* [Newman with Docker](/docs/postman/collection-runs/newman-with-docker/)
