---
title: "CI Integration"
order: 164.2
page_id: "ci-integration"
warning: false
---

## Configuring CI/CD

You can now easily configure your tests (i.e. tests inside collections) inside CI

providing you with the actual configuration that can be copied directly in the CI config file for most of the leading CI tools.

To configure CI/CD:

1. Go to API > tests
2. Select **CI/CD builds**.
3. Click **Configure Newman**.
4. Specify a collection and environment.
   1. Click **Add more** to add more than one collection.
1. Copy the generated config and add it to your CI tool.
2. Generate a Postman API key to add to the generated config.

[screenshot]

## Seeing CI/CD build status

With this integration, you will be able to see the status of the builds of your API within Postman itself, where your API definition resides.

[screenshot]

## Triggering CI/CD builds from Postman
