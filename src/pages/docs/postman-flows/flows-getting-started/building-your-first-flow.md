---
title: "Building your first Flow"
updated: 2022-11-17
---

For your first Flow, this topic will walk you through calling the Pokémon API and printing out the list to the console. The Pokémon API returns over a thousand results so this Flow will print two hundred at a time to the console.

<!--TODO: Contents. Number steps in headings? -->

## Creating your API request

For this Flow, there is one required request to prepare, which is a GET call. After creating a new Collection and making your request, run it once with the URL `https://pokeapi.co/api/v2/pokemon?limit=200` and save the request as an example so that Flows can automatically detect the structure for easier access later.

![Building your Request](https://assets.postman.com/postman-labs-docs/building-your-first-flow/first-api-request.gif)

## Making your first Send Request

Connect the start block to the send request block, then select the request that was created earlier and add a string block to connect to the URL variable.

![Making your first Send Request](https://assets.postman.com/postman-labs-docs/building-your-first-flow/first-send-request.gif)

## Logging the output to the console

Create a select block. Because we saved an example earlier, the structure of the returned data will auto-populate in the block and `/body/results` can be selected and sent to the log block where the results can be seen in the console section.

![Log results to console](https://assets.postman.com/postman-labs-docs/building-your-first-flow/first-log-to-console.gif)

## Checking for the next page of results

Create another select block and this time enter `/body/next` which will give us the link to the next set of 200 results. This will then go into an evaluate block where it can be assigned to the variable `has_next` and compared to see if it exists (if it is null that means this was the last set of Pokémon).

![Evaluate has_next](https://assets.postman.com/postman-labs-docs/building-your-first-flow/first-check-for-next-result.gif)

## Using an If block to branch based on has_next being null

The evaluate block outputs if `has_next` is null; now that has to change the behavior of the Flow. The output of evaluate is either true or false, which determines which branch the if block uses. Another connection from the select block will allow the URL of the next set of Pokémon which will be needed in the next step.

![If block](https://assets.postman.com/postman-labs-docs/building-your-first-flow/first-if-block.gif)

## Calling the request with the next URL

If `has_next` was not null, then there is another set of Pokémon to get which means calling the send request block again, but this time with the new URL that was specified in `/body/next`. Two new connections need to be made, one to pass in the new URL to the `URL` variable, and one to trigger the send event port of the block so it runs again.

![Calling the send request again](https://assets.postman.com/postman-labs-docs/building-your-first-flow/first-next-url.gif)

## Watching it run

After the above steps are completed, the Flow will run and log all the Pokémon to the console.

![Watching it run](https://assets.postman.com/postman-labs-docs/building-your-first-flow/watching-flow-run.gif)

Congratulations, you've created your first flow!
