---
title: "Using Newman custom reporters"
updated: 2022-05-23
search_keyword: "newman run"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Using the Collection Runner"
    url: "/docs/running-collections/intro-to-collection-runs/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Run Collections with Newman | Postman Level Up"
    url: "https://www.youtube.com/watch?v=SQlwGZj97Y4"
  - type: link
    name: "Using Custom Reporters with Newman"
    url: "https://youtu.be/Nxdxx-VaYno"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "Newman: run and test your collections from the command line"
    url: "https://blog.postman.com/newman-run-and-test-your-collections-from-the-command-line/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Intro to the Postman API"
    url: "/docs/developer/intro-api/"

warning: false
---

_Custom reporters_ are useful to generate collection run reports with Newman that cater to specific use cases, for example, logging out the response body when a request (or its tests) fail.

## Building custom reporters

A custom reporter is a Node.js module with a name of the form `newman-reporter-<name>`. To create a custom reporter, do the following:

1. In the directory of your choice, create a blank npm package with `npm init`.

1. Add an `index.js` file, which exports a function of the following form:

    ```javascript
    function (emitter, reporterOptions, collectionRunOptions) {
      // emitter is is an event emitter that triggers the following events: https://github.com/postmanlabs/newman#newmanrunevents
      // reporterOptions is an object of the reporter specific options. The usage examples below have more details.
      // collectionRunOptions is an object of all the collection run options:
      // https://github.com/postmanlabs/newman#newmanrunoptions-object--callback-function--run-eventemitter
    };
    ```

1. Publish your reporter using `npm publish`, or use your reporter locally. Read the usage instructions for more information.

Scoped reporter package names like `@myorg/newman-reporter-<name>` are also supported.

## Using custom reporters

To use the custom reporter, it will have to be installed first. For instance, to use the Newman TeamCity reporter, install the reporter package:

```bash
npm install newman-reporter-teamcity
```

Note that the name of the package is of the form `newman-reporter-<name>`, where `<name>` is the actual name of the reporter. The installation is global if Newman is installed globally, local otherwise. Run `npm install ...` with the `-g` flag for a global installation.

To use local (non-published) reporters, run the command `npm install <path/to/local-reporter-directory>` instead.

Use the installed reporter, either with the command-line tool, or programmatically. Here, the `newman-reporter` prefix isn't required while specifying the reporter name in the options.

Scoped reporter packages must be specified with the scope prefix. For instance, if your package name is `@myorg/newman-reporter-name`, you must specify the reporter with `@myorg/name`.

On the command line:

```bash
newman run /path/to/collection.json -r myreporter --reporter-myreporter-<option-name> <option-value> # The option is optional
```

Programmatically:

```js
var newman = require('newman');

newman.run({
   collection: '/path/to/collection.json',
   reporters: 'myreporter',
   reporter: {
     myreporter: {
       'option-name': 'option-value' // this is optional
     }
   }
}, function (err, summary) {
  if (err) { throw err; }
  console.info('collection run complete!');
});
```

In both cases above, the reporter options are optional.
