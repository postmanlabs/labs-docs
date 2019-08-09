---
title: "Visualize API responses"
page_id: "visualizer"
---

Postman provides a programmable way to visually represent [HTTP responses](/docs/postman/sending_api_requests/responses) in the "Visualizer" tab inside the response body area. You can use Visualizers to combine data from HTTP responses with layout information to suite your needs. Visualizers open up a whole new way to look at response body beyond the Pretty, Raw and Preview options in Postman.

Think of Visualizers as a tool to build domain-specific representation of API responses. APIs encapsulate domain and business logic. You can use visualizers to model and show the part of the response data that are relevant for those business use cases.

For example, your API might respond with a JSON body containing an array of objects. That data is can be better understood by putting it in a table, than looking at an array of objects. Or, you may receive a timeseries data that you can plot of a timeseries chart.

## How Visualizers work

Visualizers are [scripts](/docs/postman/scripts/intro_to_scripts) that you write in the Pre-request Script or Tests tab in your requests using the `pm.visualizer.set()` method.

The `pm.visualizer.set()` method takes three arguments:

- `layout` (required): The first argument of this method is a [Handlebars](https://handlebarsjs.com/) template string.
- `data`: The second argument is optional layout context data that is passed to the template.
- `options`: The third argument is an optional configuration object for the underlying renderer, which you can use to pass Handlebars configuration options currently.

Postman uses the information you pass to `pm.visualizer.set()` to render a HTML page in an `iframe` sandbox for Visualizer. You see this rendered HTML page inside the "Visualize" tab. The `layout` string goes into the `<body>` of this rendered page, including any JavaScript, CSS and HTML that the layout template may contain.

You can use any of the libraries in the Postman Sandbox to programmatically generate the layout template. You can also import any external JavaScript libraries by adding their URL to a `<script>` tag in the template code. This lets you visualize the data using any visualization tool of your choice (be it D3.js or something similar).

## Examples

### Rendering a simple table

Let's say your API endpoint responds with names and emails of a list of people. The response body parsed to JSON might look like this:

```js
[
    {
        "name": "Alice",
        "email": "alice@example.com"
    },
    {
        "name": "Jack",
        "email": "jack@example.com"
    },
    // ... and so on
]
```

You can create a small template that loops on this data and renders a table. You can add this script to your request's Tests tab:

```js
var template = `
    <table>
        <tr>
            <th>Name</th>
            <th>Email</th>
        </tr>

        {{#each response}}
            <tr>
                <td>{{name}}</td>
                <td>{{email}}</td>
            </tr>
        {{/each}}
    </table>
`;

// Set visualizer
pm.visualizer.set(template, {
    // Pass the response body parsed as JSON as `data`
    response: pm.response.json()
});
```

## Try it out

You can import a collection by clicking the button below. Try sending the requests and look at the "Visualize" tab under response body.

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/76c6cb66b91157788af4)
