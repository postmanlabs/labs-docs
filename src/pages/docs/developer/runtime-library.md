---
title: "Postman Runtime library"
order: 149
updated: 2022-07-20
page_id: "runtime_library"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Grouping requests in collections"
    url: "/docs/sending-requests/intro-to-collections/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Continuous Integration"
    url: "/docs/running-collections/using-newman-cli/continuous-integration/"

warning: false

---

The Postman Runtime library supports request sending and [collection running](/docs/running-collections/intro-to-collection-runs/) in Postman as well as in other interfaces including [Newman](/docs/running-collections/using-newman-cli/command-line-integration-with-newman/), Postman's command-line collection runner.

## Contents

* [Accessing the Postman Runtime library](#accessing-the-postman-runtime-library)
* [Next steps](#next-steps)

## Accessing the Postman Runtime library

The library is an [open-source Node.js project](https://github.com/postmanlabs/postman-runtime/) you can use for low-level configuration over request sending in your API development and testing projects.

To get started with the Runtime library, check out the repo's [README](https://github.com/postmanlabs/postman-runtime).

You can install the library from [npm](https://www.npmjs.com/package/postman-runtime). The following example code shows a simplified outline of using the Runtime library in conjunction with the [Collection SDK](/docs/developer/collection-sdk/):

```js
runtime = require('postman-runtime');
var runner = new runtime.Runner();

//Collection object constructed using the Collection SDK
var collection = new sdk.Collection();

runner.run(collection, {
  data: [],
  timeout: {
    request: 30000,
    script: 5000
  },
  iterationCount: 1,

  //other options...

},
function (err, run) {
  //Callbacks to execute as the collection runs
  run.start(callbacks);
});
```

You can use the Runtime library if you need a detailed configuration of your request runs, for example as part of an automation workflow to integrate Postman Collection runs into your development pipeline.

> Note that if you only need to run collections, you can use [Newman](/docs/running-collections/using-newman-cli/command-line-integration-with-newman/), Postman's command-line tool.

## Next steps

Now that you've gotten started with the Runtime library, you might also want to use the Postman API in your Continuous Integration / Continuous Deployment (CI/CD) workflow:

* To learn more about incorporating Postman into your CI/CD workflow, visit [CI with Postman API](/docs/running-collections/using-newman-cli/continuous-integration/).
