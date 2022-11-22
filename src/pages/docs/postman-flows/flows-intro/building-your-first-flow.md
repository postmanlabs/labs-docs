---
title: "Building your first Flow"
updated: 2022-11-17
---

This topic walks you through your first flow, calling the Pokémon API and printing out the list to the console. The Pokémon API returns over 1,000 results and this flow will print two hundred at a time to the console.

## Contents

* [Creating your API request](#creating-your-api-request)
* [Making your first send request](#making-your-first-send-request)
* [Logging the output to the console](#logging-the-output-to-the-console)
* [Checking for the next page of results](#checking-for-the-next-page-of-results)
* [Using an **If** block to branch based on has_next being null](#using-an-if-block-to-branch-based-on-has_next-being-null)
* [Calling the request with the next URL](#calling-the-request-with-the-next-url)
* [Watching it run](#watching-it-run)

## Creating your API request

This flow requires a single GET call.

1. Create a new collection and add a request.
1. Run the request once with the URL `https://pokeapi.co/api/v2/pokemon?limit=200`.
1. Save the request as an example so that Postman Flows can automatically detect the structure for easier access later.

![Building your request](https://assets.postman.com/postman-labs-docs/building-your-first-flow/first-api-request.gif)

## Making your first send request

1. Connect the **Start** block to the **Send Request** block.
1. Select the request you created earlier.
1. Add a **String** block to connect to the URL variable.

![Making your first send request](https://assets.postman.com/postman-labs-docs/building-your-first-flow/first-send-request.gif)

## Logging the output to the console

1. Create a **Select** block.
    > Because we saved an example earlier, the structure of the returned data will auto-populate in the block.
1. Select `/body/results`.
1. View the results in the **Log** block.

![Log results to console](https://assets.postman.com/postman-labs-docs/building-your-first-flow/first-log-to-console.gif)

## Checking for the next page of results

1. Create another **Select** block and enter `/body/next` to get the link to the next set of 200 results.
1. Create an **Evaluate** block.
1. Assign it to the variable `has_next` to see if it exists. If it is null that means this was the last set.

![Evaluate has_next](https://assets.postman.com/postman-labs-docs/building-your-first-flow/first-check-for-next-result.gif)

## Using an If block to branch based on has_next being null

In this example, the **Evaluate** block outputs `true` if `has_next` is not null, or `false` if `has_next` is null.

1. Create an **If** block. The **Evaluate** block sends either `true` or `false`, which determines which branch the **If** block uses.
1. Connect the **Select** block to the **If** block. The **Select** block sends the URL of the next set of Pokémon, used in the next step.

![**If** block](https://assets.postman.com/postman-labs-docs/building-your-first-flow/first-if-block.gif)

## Calling the request with the next URL

In this example, `has_next` was not null, so there is another set of Pokémon to get. Postman Flows calls the **Send Request** block again with the URL specified in `/body/next`.

1. Connect the **If** block's TRUE output to the **Send Request** block's URL port. This passes the new `URL` variable to the **Send Request** block.
1. Connect the **If** block's FALSE output to the **Send Request** block's Send port. This triggers the send event port of the block so it runs again.

![Calling the **Send Request** block again](https://assets.postman.com/postman-labs-docs/building-your-first-flow/first-next-url.gif)

## Watching it run

After the above steps are completed, the flow runs and logs all the Pokémon to the console.

![Watching it run](https://assets.postman.com/postman-labs-docs/building-your-first-flow/watching-flow-run.gif)

Congratulations, you've created your first flow!
