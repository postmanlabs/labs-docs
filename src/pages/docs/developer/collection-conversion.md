---
title: "Postman Collection conversion"
order: 149.2
updated: 2022-07-20
page_id: "collection-conversion"
search_keyword: "postman-api-key, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Grouping requests in collections"
    url: "/docs/sending-requests/intro-to-collections/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Youi"
    url: "https://www.postman.com/case-studies/youi/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Continuous Integration"
    url: "/docs/running-collections/using-newman-cli/continuous-integration/"

warning: false

---

You can convert from a variety of API formats into Postman Collections. If you have API requests defined as OpenAPI, Swagger, RAML, or GraphQL schema formats, you can convert these to Postman Collections. You can import Postman Collections into the app or use them with other Postman utilities including [Newman](/docs/running-collections/using-newman-cli/command-line-integration-with-newman/), Postman's command-line collection runner.

## Contents

* [Converting API formats into Postman Collections](#converting-api-formats-into-postman-collections)
* [Next steps](#next-steps)

## Converting API formats into Postman Collections

Check out the repo for the format you need to convert—the READMEs indicate how to install and use the converters. Your output collections will be suitable for import into Postman, or to run collections on the command line using [Newman](/docs/running-collections/using-newman-cli/command-line-integration-with-newman/), Postman's command-line collection runner.

The following open-source projects are hosted on GitHub:

* [OpenAPI 3.0 to Postman](https://github.com/postmanlabs/openapi-to-postman)
* [Swagger 2.0 to Postman](https://github.com/postmanlabs/swagger2-postman2)
* [RAML 1.0 to Postman](https://github.com/postmanlabs/raml1-to-postman)
* [GraphQL to Postman](https://github.com/postmanlabs/graphql-to-postman)

Each of these Node.js modules is available through npm or by cloning directly from the repo.

## Next steps

If you're using converters to automate Postman Collection runs with your development, testing, or deployment pipeline, check out how you can use [Postman API in your CI workflow](/docs/running-collections/using-newman-cli/continuous-integration/).
