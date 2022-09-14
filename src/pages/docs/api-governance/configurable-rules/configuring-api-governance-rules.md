---
title: "Configuring API Governance rules"
updated: 2022-09-15
search_keyword: "api governance, schema validation, api schema vulnerabilities"
---

> [Configurable governance rules are only available to Postman Enterprise teams.](https://www.postman.com/pricing) If you don't have an Enterprise account, you'll be able to see the API Governance page, but you won't be able to turn rules on or off or add new rules.

You can customize the API Governance rules that Postman applies to your [API definitions](/docs/api-governance/api-definition/api-definition-warnings/). Adhering to these API Governance rules early in the API lifecycle keeps your API consistent without requiring additional work at later stages, which can prevent unnecessary delays for your organization.

<img alt="API Governance configuration page" src="https://assets.postman.com/postman-docs/v10/api-governance-configuration-home-v10.jpg" width="900px"/>

## Contents

* [Accessing the configurable API Governance rules](#accessing-the-configurable-api-governance-rules)
* [Adding rules to your API Governance configuration](#adding-rules-to-your-API-governance-configuration)
    * [Importing rules from the Postman library](#importing-rules-from-the-postman-library)
    * [Adding custom rules](#adding-custom-rules)
* [Turning configured rules on and off](#turning-configured-rules-on-and-off)
* [Removing rules from your API Governance configuration](#removing-rules-from-your-api-governance-configuration)

## Accessing the configurable API Governance rules

To access the configurable API Governance rules:

1. Go to the [Postman home screen](https://go.postman.co/).
1. Select **API Governance** from the team information panel.

## Adding rules to your API Governance configuration

In addition to the rules turned on by default in Postman, you can add other rules to your API Governance configuration from the Postman library. You can also create your own custom rules.

### Importing rules from the Postman library

> Only Team Admins with a [Developer role](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) can import API Governance rules from the Postman library.

Select **Import From Library**. To see more details about a particular rule, select the expand icon **>** next to the rule name. Select the rules in the library you want to add, then select **Import selected**. If you want to import all the rules, select **Import all**.

<img alt="Import API Governance rule from Postman library" src="https://assets.postman.com/postman-docs/v10/api-governance-import-from-library-v10.jpg" width="800px"/>

Once you import new rules from the library, you need to turn them on in the Governance dashboard.

### Adding custom rules

> Only Team Admins with a [Developer role](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) can create custom API Governance rules.

You can create new custom governance rules for Postman to evaluate your API's definition.

1. Select **Create New Rule**.
1. Define the rule in the editor. It must adhere to [custom rule guidelines](/docs/api-governance/configurable-rules/spectral/).
1. The rule must be valid YAML or JSON. Use the dropdown list to choose the correct syntax.
1. Select OpenAPI 2.0 or OpenAPI 3.0 to choose which specification your new rule is valid for.
1. Select **Create**.
    <img alt="Create a custom API Governance rule" src="https://assets.postman.com/postman-docs/v10/api-governance-create-custom-rule-v10.jpg" width="800px"/>
1. Find your new rule under **Custom Rules** and turn it on.

You can also select **Upload file(s)** to upload a new rule in valid YAML or JSON format.

> You can't create a custom rule that duplicates an existing rule.

## Turning configured rules on and off

> Only Team Admins with a [Developer role](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) can turn configured API Governance rules on and off.

Your team can turn individual governance rules on or off to meet your development needs:

* To turn a governance rule on, select the toggle next to the rule name. You and your team members will see violations for this rule in your API's definition.
* To turn a governance rule off, select the toggle next to the rule name. You and your team members won't see violations for this rule in your API's definition.

<img alt="Turn individual rules on and off" src="https://assets.postman.com/postman-docs/v10/api-governance-configuration-turn-rules-off-v10.jpg" width="800px"/>

## Removing rules from your API Governance configuration

> You must be a Team Admin with a [Developer role](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) to delete a custom governance rule.

To remove an API Governance rule, select the delete icon <img alt="Delete icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px"> next to its name. You can re-import from the rule library by selecting **Import from library**.

If you remove a custom rule using the delete icon <img alt="Delete icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px">, you'll need to add it back into Postman using **Create New Rule** if you want to use it again.
