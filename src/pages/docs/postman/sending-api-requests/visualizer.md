---
title: "Visualize API responses"
page_id: "visualizer"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Responses"
    url: "/docs/postman/sending-api-requests/responses/"
  - type: link
    name: "Intro to scripts"
    url: "/docs/postman/scripts/intro-to-scripts/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Visualizer demo"
    url: "https://www.youtube.com/watch?v=Qj7j3QsY2ok"

---

Postman provides a programmable way to visually represent [HTTP responses](/docs/postman/sending_api_requests/responses/) in the "Visualizer" tab inside the response body area. Visualizers open up a whole new way to look at response body beyond the Pretty, Raw and Preview options in Postman.

Visualizers let you focus on the data that matters in an HTTP response. You can use Visualizers to model and show the part of the response data that are relevant for those business use cases, instead of having to look at the raw response data. With Visualizers, you can render visualizatios of API data and see it in the context of the current request. Once you [share that collection](/docs/postman/collections/sharing_collections/) with your team, they will be able to see the same visualization without having to move out of Postman.

[![Visualizer bar chart rendering](https://assets.postman.com/postman-docs/visualizer-barchart.png)](https://assets.postman.com/postman-docs/visualizer_barchart.png)

## Visualizing response data

Visualizers are written as [scripts](/docs/postman/scripts/intro_to_scripts/) in the Pre-request Script or Tests tab in your requests using the `pm.visualizer.set()` method.

### Adding visualizer code

The first argument for `pm.visualizer.set()` is a [Handlebars](https://handlebarsjs.com/) template string. The second argument is data that you can inject into the template. Let's see how you can build a Handlebars template and pass data to it using the `pm.visualizer.set()` method.

### Rendering HTML

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

First, we will create a simple Handlebars template which can render a table by looping over an array. Handlebars can do it using the `{{#each}}` tag. You can add this script to your request's Tests tab:

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
```

The variable names inside the double curly braces in the template above will be substituted by the data you pass in the `pm.visualizer.set()` method. Now, append this script to the Tests tab:

```js
// Set visualizer
pm.visualizer.set(template, {
    // Pass the response body parsed as JSON as `data`
    response: pm.response.json()
});
```

The `template` variable in the code above is the template string created earlier. The second argument passed here is an object with the `response` property. This is the variable that the template expects in the `{{#each response}}` loop. The value assigned to the `response` property is the response JSON data parsed into an object.

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/4e3ee3d03f6e2e7fc250)

### Viewing visualizations

Now, if you hit "Send" for this request, and look under the response body section, you will see a table rendered under the "Visualize" tab.

[![Visualizer table rendering](https://assets.postman.com/postman-docs/visualizer_table.png)](https://app.getpostman.com/run-collection/4e3ee3d03f6e2e7fc250)

### Adding styling and interaction to visualizations

You can load an external stylesheet using `<link>` tags in your HTML template code, the same way you add a stylesheet to a HTML file. You can also add stylesheets as `<style>` tags. Postman does not ship with any readymade stylesheets. You bring your own styles.

Similarly, you can add interactions using JavaScript code in `<script>` tags in your HTML code.

### Using your own libraries

You can use any of the libraries in the Postman Sandbox to programmatically generate the layout template. But, Postman does not ship with any data visualization libraries in the Sandbox. You can import any external JavaScript libraries by adding their URL to a `<script>` tag in the template code, just the same way as you would load JavaScript in an HTML file. This lets you visualize the data using any visualization tool of your choice (be it D3.js or something similar).

### Accessing data inside the template

Any `<script>` elements inside the template can access the data that was passed in the second argument to `pm.visualizer.set()` by calling `pm.getData(callback)` method. This is only applicable to JavaScript code in the template. You will find it useful if your Visualizer template includes JavaScript to render a chart.

The `pm.getData(callback)` method takes a callback function as its argument. This callback is called with two arguments: `error` and `data`. The second argument is the `data` that was passed to `pm.visualizer.set()`.

## Try it out

You can import any collection by following the links below and clicking on the "Run in Postman" buttons on those pages. Try sending the requests and look at the "Visualize" tab under response body.

- [A DIY collection that renders a bar chart using ChartJS](https://documenter.getpostman.com/view/4946945/SVzz4KxB?version=latest)
- [A heat map visualization](https://documenter.getpostman.com/view/4946945/SVzw6MYM?version=latest)
- [Map of commercial airline traffic](https://documenter.getpostman.com/view/9215231/SW11XeM6?version=latest)

## Visualizer API

The `pm.visualizer.set()` method takes three arguments:

- `layout` (required): The first argument of this method is a [Handlebars](https://handlebarsjs.com/) HTML template string.
- `data`: The second argument is optional data that you can bind to the template. The properties of this object can be accessed in the template.
- `options`: The third argument is an optional `options` object for [`Handlebars.compile()`](https://handlebarsjs.com/reference.html). You can use this to control how Handlebars compiles the template.

Postman uses the information you pass to `pm.visualizer.set()` to render an HTML page in the sandbox for Visualizer. You see this rendered HTML page inside the "Visualize" tab. The `layout` string goes into the `<body>` of this rendered page, including any JavaScript, CSS and HTML that the layout template may contain.

## Debugging visualizers

You can debug a visualization in Postman by right-clicking on the Visualizer area and clicking on "Inspect visualization". This opens up the Visualizer DevTools attached to the Visualizer sandbox. You can use it just like debugging any other web page.

![Debugging Visualizers in Postman](https://assets.postman.com/postman-docs/visualizer-debugging.gif)
