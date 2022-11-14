---
title: "Azure DevOps"
order: 169
page_id: "azure-devops"
updated: 2021-12-20
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Grouping requests in collections"
    url: "/docs/sending-requests/intro-to-collections/"
---

> **[Azure DevOps Server (hosted on-premises) integrations are available on Postman Enterprise plans.](https://www.postman.com/pricing)**

Postman enables you to sync your Postman APIs to Microsoft Azure DevOps, an open-source Git repository manager, with the Postman to Azure DevOps integration.

Setting up an Azure DevOps integration requires you to authenticate with Azure Devops and configure how you would like to back up your collections.

## API sync with Azure DevOps

Postman 9.0 introduced the ability to connect a Git repository to an API. Instead of using an integration, you can directly connect an Azure DevOps repo to an API in the API Builder. This provides two-way sync of schemas and associated collections, plus adds features for syncing branches and release tags between Postman and your repo. For more information on the repo sync feature, see [Versioning APIs](/docs/designing-and-developing-your-api/versioning-an-api/).
