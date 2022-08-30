---
title: "API Governance admin panel"
updated: 2022-09-15
search_keyword: "api governance, schema validation, api schema vulnerabilities"
---

> [Configurable governance rules are only available to Postman Enterprise teams.](https://www.postman.com/pricing) If you don't have an Enterprise account, you'll be able to see the API Governance admin panel, but you won't be able to turn rules on or off or add new rules.

The _API Governance admin panel_ enables you to customize the governance rules that Postman applies to your API at the design phase. Postman applies governance rules to your [API definition](/docs/designing-and-developing-your-api/defining-an-api/) and shows warnings about your definition to help you keep your API consistent and consumable.

<!-- TODO: screenshot -->

## Contents

* [Accessing the API Governance admin panel](#accessing-the-api-governance-admin-panel)
* [Configuring governance rules for your team](#configuring-governance-rules-for-your-team)
* [Creating custom governance rules](#creating-custom-governance-rules)
    * [Turning off custom governance rules](#turning-off-custom-governance-rules)
    * [Deleting custom governance rules](#deleting-custom-governance-rules)

## Accessing the API Governance admin panel

To access the API Governance panel, go to the [Postman home screen](https://go.postman.co/), then select **API Governance** from the team information panel.

> Access to the API Governance admin panel is only available for users who have both an Admin and a Developer role assigned to them. If you don't see the **API Governance** link from the Postman home page, you might not have the correct permissions. Talk to your Team Admin to discuss your [assigned roles](/docs/collaborating-in-postman/roles-and-permissions/).

## Configuring governance rules for your team

You can set governance rules that Postman runs during the design phase of the API development process. Postman also has a rule library from which you can import governance rules.

<!-- TODO: screenshot -->

### Turning governance rules off and on

> You must have an [Admin or Developer](/docs/collaborating-in-postman/roles-and-permissions/) role for your team to turn governance rules off and on.

All the available governance rules turned on by default. Your team can configure individual governance rules to meet your development needs. If you turn a rule off, you and your team members won't see warnings for this rule if it's violated in your API's definition.

To turn a governance rule off, select the toggle next to the rule name. To turn the rule back on, select the toggle again.

<!-- TODO: screenshot -->

### Importing governance rules from the library

Select Import from library. To see more details about a particular rule, select the expand icon > next to the rule name. Select the rules in the library you want to add, then select Import selected. If you want to import all the rules, select Import all. Once you import new rules from the library, you need to turn them on in the Governance dashboard.

### Removing governance rules

To remove a governance rule from the API Governance admin panel, select the delete icon <img alt="Delete icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px"> next to its name. You can re-import from the rule library by selecting **Import from library**.

<!-- TODO: screenshot -->

## Creating custom governance rules

> You must have an [Admin or Developer](/docs/collaborating-in-postman/roles-and-permissions/) role for your team to create custom governance rules.

You can create new custom governance rules for Postman to evaluate your API's definition. The new rules you create must adhere to [Spectral guidelines for custom rules](https://meta.stoplight.io/docs/spectral/e5b9616d6d50c-custom-rulesets).

1. Select **Create new rule**.
1. Define the rule in the editor.
    <!-- TODO: screenshot -->
1. The rule must be valid YAML or JSON. Use the dropdown list to choose the correct syntax.
1. Select OpenAPI 2.0 or OpenAPI 3.0 to choose which specification your new rule is valid for.
1. Select **Create**.
1. In the API Governance admin panel, find your new rule under **Custom rules** and turn it on.

<!-- TODO: screenshot -->

You can also select **Upload file(s)** to upload a new rule in valid YAML or JSON format.

You can't create a custom rule that duplicates an existing rule.

### Turning off custom governance rules

To turn a custom governance rule off, select the toggle next to the rule name.

### Deleting custom governance rules

You must be a [Team Admin](/docs/collaborating-in-postman/roles-and-permissions/) to delete a custom rule. To delete a custom rule, select the delete icon <img alt="Delete icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px"> next to its name. If you delete a custom governance rule, you will need to add it back into Postman if you want to use it again.
