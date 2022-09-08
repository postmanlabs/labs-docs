---
title: "Configuring API Governance rules"
updated: 2022-09-15
search_keyword: "api governance, schema validation, api schema vulnerabilities"
---

> [Configurable governance rules are only available to Postman Enterprise teams.](https://www.postman.com/pricing) If you don't have an Enterprise account, you'll be able to see the API Governance page, but you won't be able to turn rules on or off or add new rules.

You can customize the API Governance rules that Postman applies to your [API definitions](/docs/designing-and-developing-your-api/defining-an-api/). Adhering to these API Governance rules enables you keep your API consistent and consumable.

<!-- TODO: screenshot -->

## Contents

* [Accessing the configurable API Governance rules](#accessing-the-configurable-api-governance-rules)
* [Adding rules to your API Governance configuration](#adding-rules-to-your-API-governance-configuration)
    * [Importing rules from the Postman library](#importing-rules-from-the-postman-library)
    * [Adding custom rules](#adding-custom-rules)
* [Turning configured rules on and off](#turning-configured-rules-on-and-off)
* [Removing rules from your API Governance configuration](#removing-rules-from-your-api-governance-configuration)

## Accessing the configurable API Governance rules

To access the configurable API Governance rules, go to the [Postman home screen](https://go.postman.co/), then select **API Governance** from the team information panel.

## Adding rules to your API Governance configuration

In addition to the rules turned on by default in Postman, you can add other rules to your API Governance configuration from the Postman library. You can also create your own custom rules.

### Importing rules from the Postman library

Select **Import from library**. To see more details about a particular rule, select the expand icon **>** next to the rule name. Select the rules in the library you want to add, then select **Import selected**. If you want to import all the rules, select **Import all**. Once you import new rules from the library, you need to turn them on in the Governance dashboard.

### Adding custom rules

> Only Team Admins with a [Developer role](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) can create custom API Governance rules.

You can create new custom governance rules for Postman to evaluate your API's definition.

1. Select **Create new rule**.
1. Define the rule in the editor. It must adhere to [custom rule guidelines](#custom-rule-guidelines).
    <!-- TODO: screenshot -->
1. The rule must be valid YAML or JSON. Use the dropdown list to choose the correct syntax.
1. Select OpenAPI 2.0 or OpenAPI 3.0 to choose which specification your new rule is valid for.
1. Select **Create**.
1. Find your new rule under **Custom rules** and turn it on.

<!-- TODO: screenshot -->

You can also select **Upload file(s)** to upload a new rule in valid YAML or JSON format.

#### Custom rule guidelines

Postman uses [Spectral v6](https://github.com/stoplightio/spectral/releases/) to define custom rules, and any new rules you create must adhere to Spectral v6 [guidelines for custom rules](https://github.com/stoplightio/spectral#1-create-a-local-ruleset).

* Custom rules can't contain Spectral custom functions.
* You can't create a custom rule that duplicates an existing rule.

<!-- TODO: add example -->

## Turning configured rules on and off

> Only Team Admins with a [Developer role](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) can turn configured API Governance rules on and off.

Your team can turn individual governance rules on or off to meet your development needs:

* To turn a governance rule on, select the toggle next to the rule name. You and your team members will see violations for this rule in your API's definition.
* To turn a governance rule off, select the toggle next to the rule name. You and your team members won't see violations for this rule in your API's definition.

<!-- TODO: screenshot -->

## Removing rules from your API Governance configuration

To remove an API Governance rule, select the delete icon <img alt="Delete icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px"> next to its name. You can re-import from the rule library by selecting **Import from library**.

<!-- TODO: screenshot -->

> You must be a Team Admin with a [Developer role](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) to delete a custom governance rule. If you delete a custom rule, you'll need to add it back into Postman if you want to use it again.
