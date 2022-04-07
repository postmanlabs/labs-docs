---
title: 'Importing and exporting data'
order: 8.2
page_id: 'importing_and_exporting_data'
updated: 2022-03-01
contextual_links:
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Postman | How to Connect to Your Git Repository"
    url: "https://youtu.be/8jJHXLVYOh0"
  - type: link
    name: "Generate a Collection From a Specification | Postman Level Up"
    url: "https://youtu.be/gljWt9tDKOY"
  - type: link
    name: "Postman Level Up | Import a HAR file in Postman"
    url: "https://youtu.be/E3uo-oQ9WtE"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "Sync your specs"
    url: "https://blog.postman.com/sync-your-specs/"
  - type: link
    name: "Importing SoapUI projects into Postman"
    url: "https://blog.postman.com/importing-soapui-projects-into-postman/"
  - type: link
    name: "Importing RAML folders into Postman"
    url: "https://blog.postman.com/supporting-raml-folders-in-postman/"
  - type: link
    name: "Introducing Postman Collection Format Schema"
    url: "https://blog.postman.com/introducing-postman-collection-format-schema/"
  - type: link
    name: "Travelogue of Postman Collections Format v2"
    url: "https://blog.postman.com/travelogue-of-postman-collection-format-v2/"
  - type: link
    name: "Postman Supports WSDL"
    url: "https://blog.postman.com/postman-now-supports-wsdl/"
  - type: subtitle
    name: "Next Steps"
  - type: link
    name: "Using the API Builder"
    url: "/docs/designing-and-developing-your-api/the-api-workflow/"

warning: false
---

Postman can import and export Postman data, including collections, environments, data dumps, and globals. Postman can also import non-Postman data in the form of API schemas to help you consolidate your API development workflow.

## Contents

* [Importing data into Postman](#importing-data-into-postman)

    * [Importing Postman data](#importing-postman-data)

    * [Converting Postman collections from v1 to v2](#converting-postman-collections-from-v1-to-v2)

    * [Importing API specifications](#importing-api-specifications)

    * [Importing via GitHub repositories](#importing-via-github-repositories)

* [Exporting Postman data](#exporting-postman-data)

    * [Exporting collections](#exporting-collections)

    * [Exporting environments](#exporting-environments)

    * [Exporting data dumps](#exporting-data-dumps)

* [Next steps](#next-steps)

## Importing data into Postman

You can import collections or your API specifications directly into Postman.

To import your data into Postman, select **Import** in upper left:

![Import UI](https://assets.postman.com/postman-docs/import-export-import-ui-v9-6.jpg)

You can import your data from files, folders, links, raw text, or code repositories.

### Importing Postman data

You can import Postman data you exported earlier, including collections, environments, data dumps, and globals.

1. Select **Import** in the left navigation menu.
1. Select your file or folder, input your link, paste your raw text, or [import from GitHub](#importing-via-github-repositories).
   Postman will automatically recognize Postman data, confirming the name, format, and what the file will import as.
   ![Import collection and environment](https://assets.postman.com/postman-docs/import-export-github-files-confirm.jpg)
1. Select the files you want to import.
1. Select **Import** to bring your data into Postman.

### Converting Postman collections from v1 to v2

Postman no longer supports the collection v1 format and will return an error if you try to import a collection in this format.

You can convert your collection's format from v1 to v2 to import it into Postman:

1. In the terminal of your choice, enter the following command to install the Postman Collection Transformer.

   ```bash
   sudo npm install -g postman-collection-transformer
   ```

1. Convert an individual Postman collection from v1 to v2 by entering the command below.

   ```bash
   postman-collection-transformer convert -i <path to the input Postman collection file> -o <path to the downloaded Postman file> -j 1.0.0 -p 2.0.0 -P
   ```

The resulting collection will download to your target file path in v2 format.

You can retrieve a list of convert options by running the command with the ``-h`` flag:

   ```bash
   postman-collection-transformer convert -h
   ```

See the [Postman Collection Transformer](https://github.com/postmanlabs/postman-collection-transformer) for more information on the collection conversion.

### Importing API specifications

Postman directly supports importing the following formats:

* [OpenAPI 3.0 and 3.1](https://github.com/postmanlabs/openapi-to-postman)
* Swagger [1.2](https://github.com/postmanlabs/swagger1-to-postman) and [2.0](https://github.com/postmanlabs/swagger2-postman2-lambda)
* [GraphQL](https://github.com/postmanlabs/graphql-to-postman)
* [cURL](https://github.com/postmanlabs/curl-to-postman)
* RAML [0.8](https://github.com/postmanlabs/raml-to-postman) and [1.0](https://github.com/postmanlabs/raml1-to-postman)
* [WSDL 1.1 and 2.0](https://github.com/postmanlabs/wsdl-to-postman)
* [HTTP Archive (HAR)](https://github.com/postmanlabs/har-to-postman)
* Web Application Description Language (WADL)

There are also tools on GitHub to convert different specifications into a Postman collection for import:

* [`runscope-to-postman`](https://github.com/postmanlabs/runscope-to-postman)

* [`DHC-to-postman`](https://github.com/postmanlabs/dhc-to-postman)

To import your API specifications into Postman:

1. Select **Import** in the left navigation menu.
1. Select a file or folder, input a link to the API, or paste your raw text. Confirm the name, format, and what you would like your data to import as.
1. Select **Import** to bring your data into Postman.

> You can configure your **Import Settings**, which will differ depending on your API specification.

You can import several API specification files at once. Select the workspace you'd like to import the APIs into, choose whether you want to generate collections from the APIs, configure the details, and select **Import**.

When importing into a team workspace, you can also choose to add the APIs to the [Private API Network](/docs/collaborating-in-postman/adding-private-network/).

[![Import several APIs](https://assets.postman.com/postman-docs/import-export-publish-to-private-api-network-22.jpg)](https://assets.postman.com/postman-docs/import-export-publish-to-private-api-network-22.jpg)

### Importing via GitHub repositories

> You must sign in to a [Postman account](/docs/getting-started/postman-account/#signing-up-for-a-postman-account) to use this feature.

You can import data in bulk from a GitHub repository.

1. Select **Import** > **Code repository** > **GitHub**.

1. Confirm your GitHub account and **Authorize postmanlabs** to access your repositories.

1. In Postman, select your GitHub organization, repository, and branch, then select **Continue**.

1. Confirm the files you would like to import into Postman. You can also select **Generate collection from imported APIs** and select what you would like to link this collection as. Select **Show advanced settings** to control how Postman should generate collections based on your file types, then select **Import**.

   ![Confirm import from github](https://assets.postman.com/postman-docs/import-export-github-files-confirm.jpg)

You will receive a confirmation once the import has completed. You can now view your newly imported files and generated collections in Postman.

### Importing via Bitbucket repositories

> You must sign in to a [Postman account](/docs/getting-started/postman-account/#signing-up-for-a-postman-account) to use this feature.

You can import data in bulk from a Bitbucket repository.

1. Select **Import** > **Code repository** > **Bitbucket**.

1. Confirm your Bitbucket account and **Authorize Postman** to access your repositories.

1. In Postman, select your Bitbucket workspace, repository, and branch, then select **Continue**.

1. Postman shows a preview of the files to import into your workspace. Select **Import** to confirm and complete the import.

You will receive a confirmation once the import has completed. You can now view your newly imported files and generated collections in Postman.

## Exporting Postman data

You can export your Postman data, including collections, environments, data dumps, and globals, as JSON files. You can import these files back into any Postman instance, or use them with [Newman](/docs/running-collections/using-newman-cli/command-line-integration-with-newman/), Postman's command-line collection runner.

### Exporting collections

1. Select <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg#icon" width="18px"> next to the collection, then select **Export**.

   <img alt="Export collection" src="https://assets.postman.com/postman-docs/export-collection-v9.1.jpg" width="350px" />

1. Select the format you'd like your collection to export as.

   > Learn more about Postman's [collection formats](https://blog.postman.com/travelogue-of-postman-collection-format-v2/).

1. Select **Export** to download your newly generated JSON file.

### Exporting environments

You can also export your environments from Postman.

1. Select the **Environments** tab from the left navigation menu.
1. Select an environment to export.
1. In the main work area, select the more actions icon <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg#icon" width="18px">.
1. Select **Export** to download your newly generated JSON file.

### Exporting data dumps

You can export a data dump of all your collections, environments, globals, and header presets in Postman.

1. Select the gear icon in the upper-right corner to open **Settings**.

   ![Export data dump](https://assets.postman.com/postman-docs/import-export-data-dump-menu.jpg)

1. Select the **Data** tab, then **Export Data** to start your request for the data dump.

1. Select **Export Data** to confirm the data types you need to export.

1. Select **Request Data Export** to submit the request.

   ![Export data dump](https://assets.postman.com/postman-docs/import-export-data-dump-request-confirm.jpg)

The [Export page](http://go.postman.co/me/export) shows information about your export request, including the file size, the date the export expires, and the statuses of your requested data exports. Possible statuses are:

* **Scheduled**: The export request is placed.
* **Transferring**: The data transfer process has started.
* **Transferred**: The data transfer process has completed.
* **Zipping**: The process of zipping the file has started.
* **Zipped**: The file is zipped.
* **Download**: The zipped file is ready to download.

When the export is ready, you will receive an email with link to download a zipped file with the data dump. You can also download the file using the **Download** button on the Export page.

> Data exports from the Scratch Pad are downloaded directly instead of being emailed to you. See [Exporting data from the Scratch Pad](/docs/getting-started/using-scratch-pad/#exporting-data-from-the-scratch-pad) for more details.

## Next steps

You can collaborate on collections by [sharing](/docs/collaborating-in-postman/sharing/) and [commenting](/docs/collaborating-in-postman/commenting-on-collections/) to discuss your API projects with team members. Learn more about [Postman's API workflow](/docs/designing-and-developing-your-api/the-api-workflow/).
