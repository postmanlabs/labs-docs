---
title: 'Data formats'
order: 49
page_id: 'data_formats'
contextual_links:
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Healthwise"
    url: "https://www.postman.com/case-studies/healthwise.pdf"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Sync your specs"
    url: "https://blog.postman.com/2018/03/02/sync-your-specs/"
  - type: link
    name: "Importing SoapUI projects into Postman"
    url: "https://blog.postman.com/2016/04/27/importing-soapui-projects-into-postman/"
  - type: link
    name: "Importing RAML folders into Postman"
    url: "https://blog.postman.com/2015/11/04/supporting-raml-folders-in-postman/"
  - type: link
    name: "Introducing Postman Collection Format Schema"
    url: "https://blog.postman.com/2015/07/02/introducing-postman-collection-format-schema/"
  - type: link
    name: "Travelogue of Postman Collections Format v2"
    url: "https://blog.postman.com/2015/06/05/travelogue-of-postman-collection-format-v2/"

warning: false
---

Postman can import and export Postman data, including collections, environments, data dumps, and globals. Postman can also import non-Postman data in the form of API schemas to help you consolidate your API development workflow.

## Contents

* [Importing data into Postman](#importing-data-into-postman)

    * [Importing Postman data](#importing-postman-data)

    * [Importing API specifications](#importing-api-specifications)

* [Validating collection JSON files](#validating-collection-json-files)

* [Exporting Postman data](#exporting-postman-data)

    * [Collections](#collections)

    * [Environments](#environments)

    * [Data dumps](#data-dumps)

* [Next steps](#next-steps)

## Importing data into Postman

You can import your Postman data (e.g. collections) as well as your API specifications directly into the app.

To import your data into Postman, click **Import** in the upper-left corner of the Postman app.

![Import modal](https://assets.postman.com/postman-docs/import-modal.jpg)

You can import your data via files, folders, links, or raw text.

### Importing Postman data

You can import Postman data you previously exported, including [collections](#collections), [environments](#environments), [data dumps](#data-dumps), and globals.  

To import Postman data, click **Import**, then select your file or folder, input your link, or paste your raw text. Postman will automatically recognize Postman data and confirm the name, format, and what the file will import as. Click **Import** to bring your data into Postman.

![Import collection and environment](https://assets.postman.com/postman-docs/import-coll-env.jpg)

### Importing API specifications

Postman supports the following API specification formats:

* [OpenAPI 3.0](https://github.com/postmanlabs/openapi-to-postman)

* RAML [0.8](https://github.com/postmanlabs/raml-to-postman), [1.0](https://github.com/postmanlabs/raml1-to-postman)

* [GraphQL](https://github.com/postmanlabs/graphql-to-postman)

* [cURL](https://github.com/postmanlabs/curl-to-postman)

* WADL

* Swagger [1.2](https://github.com/postmanlabs/swagger1-to-postman), [2.0](https://github.com/postmanlabs/swagger2-postman2-lambda)

* [Runscope](https://github.com/postmanlabs/runscope-to-postman)

* [DHC](https://github.com/postmanlabs/dhc-to-postman)

To import your API specifications into Postman, click **Import**, then select your file or folder, input your link, or paste your raw text. Confirm the name, format, and what you'd like your data to import as, then click **Import** to bring your data into Postman.

![Import file](https://assets.postman.com/postman-docs/import-file.jpg)

You can also configure your **Import Settings**, which will differ depending on your API specification.

## Validating collection JSON files

To validate if a JSON file is in the correct collections format, you can use [schema files for collections](http://schema.getpostman.com/).

* [Schema file](https://schema.getpostman.com/json/collection/v1.0.0/collection.json)
* [Associated documentation](https://schema.getpostman.com/)
* [Postman schemas in GitHub](https://github.com/postmanlabs/schemas)
* [Example of data validation using a schema](https://blog.postman.com/2015/07/02/introducing-postman-collection-format-schema/) and a [validator](https://github.com/mafintosh/is-my-json-valid)

## Exporting Postman data

Postman can export and import the following formats as a file or generated URL. When you export a collection from the Postman app, the exported file is a JSON file. The file contains all data (and metadata) that is required by Postman to recreate the collection when imported back into Postman, or that is utilized by [Newman](/docs/postman/collection-runs/command-line-integration-with-newman/) to run the collection from the command line interface (CLI).

### Collections

[![export collection](https://assets.postman.com/postman-docs/WS-collections-view.png)](https://assets.postman.com/postman-docs/WS-collections-view.png)

Postman can export collections in two formats - v1 and v2. Both Collection v1 and v2 download as JSON files; v2 is more versatile and the most-used choice. Learn more about the [v1 and v2 formats](https://blog.postman.com/2015/06/05/travelogue-of-postman-collection-format-v2/).

[![select v1 or v2 format](https://assets.postman.com/postman-docs/WS-export-collection1.png)](https://assets.postman.com/postman-docs/WS-export-collection1.png)

### Environments

Environments can be exported from the **MANAGE ENVIRONMENTS** modal, and imported here as well.

[![export environments](https://assets.postman.com/postman-docs/WS-manage-environments2.png)](https://assets.postman.com/postman-docs/WS-manage-environments2.png)

### Data dumps

From the **Data** tab of the **SETTINGS** modal, Postman allows you to export all collections, environments, globals and header presets into one JSON file. Postman does not export your history. You can import this data back into Postman.

[![export all Postman data](https://assets.postman.com/postman-docs/WS-data-dumps-settings.png)](https://assets.postman.com/postman-docs/WS-data-dumps-settings.png)

## Next steps

Learn more about [Postman's API workflow](/docs/postman/design-and-develop-apis/the-api-workflow/).
