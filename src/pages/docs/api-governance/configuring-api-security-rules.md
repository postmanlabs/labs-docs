---
title: "Configuring API Security rules"
updated: 2022-09-15
search_keyword: "api security, security warnings, schema validation, security validation, api security audit, api security scan, api schema vulnerabilities, security audit"
---

> [Configurable security rules are only available to Postman Enterprise teams.](https://www.postman.com/pricing) If you don't have an Enterprise account, you'll be able to see the API Security admin panel, but you won't be able to turn rules on or off or add new rules.

You can use the _API Security dashboard_ to configure the rules that Postman applies to your API at both the design phase and the testing phase of API development:

* **API design** - Postman applies governance rules to your [API definition](/docs/designing-and-developing-your-api/defining-an-api/) and shows warnings about your definition's format and security posture.
* **API testing** - Postman applies governance rules to your [API requests](https://learning.postman.com/docs/api-governance/api-testing/api-testing-warnings/) and shows warnings about issues that might impact their security posture.

<!-- TODO: screenshot -->

## Contents

* [Accessing the API Security admin panel](#accessing-the-api-security-admin-panel)
* [Configuring security rules for your team](#configuring-security-rules-for-your-team)
* [Creating custom security rules](#creating-custom-security-rules)
    * [Turning off custom security rules](#turning-off-custom-security-rules)
    * [Deleting custom security rules](#deleting-custom-security-rules)

## Accessing the API Security admin panel

To access the API Security panel, go to the [Postman home screen](https://go.postman.co/), then select **API Security** from the team information panel.

> Access to the API Security admin panel is only available for users who have both an Admin and a Developer role assigned to them. If you don't see the **API Security** link from the Postman home page, you might not have the correct permissions. Talk to your Team Admin to discuss your [assigned roles](/docs/collaborating-in-postman/roles-and-permissions/).

## Configuring security rules for your team

You can set security rules that Postman runs during the design and testing phases of the API development process:

* To configure the security rules that Postman runs during the design phase of API development, select **API definitions**.
* To configure the security rules that Postman runs during the testing phase of API development, select **Requests**.

<!-- TODO: screenshot -->

### Turning security rules off and on

> You must have an [Admin or Developer](/docs/collaborating-in-postman/roles-and-permissions/) role for your team to turn security rules off and on.

All the available security rules are turned on by default. Your team can configure individual security rules to meet your development needs. If you turn a rule off, you and your team members won't see warnings for this rule if it's violated in your API's definition or when you send an API request.

To turn a security rule off, select the toggle next to the rule name. To turn the rule back on, select the toggle again.

<!-- TODO: screenshot -->

## Creating custom security rules

> Creating custom security rules is only available for **API definitions**.
<!--  -->
> You must have an [Admin or Developer](/docs/collaborating-in-postman/roles-and-permissions/) role for your team to create custom governance rules.

You can create new custom security rules for Postman to evaluate your API's definition with at the design phase of the API development process.

The new rules you create must adhere to [Spectral guidelines for custom rules](https://meta.stoplight.io/docs/spectral/e5b9616d6d50c-custom-rulesets). However, they can't include [Spectral custom functions](https://meta.stoplight.io/docs/spectral/ZG9jOjI1MTkw-custom-functions).

1. Select **API definitions**.
1. Select **Create new rule**.
1. Define the rule in the editor.
    <!-- TODO: screenshot -->
1. The rule must be valid YAML or JSON. Use the dropdown list to choose the correct syntax.
1. Select OpenAPI 2.0 or OpenAPI 3.0 to choose which specification your new rule is valid for.
1. Select **Create**.
1. In the API Security admin panel, find your new rule under **Custom rules** and turn it on.

<!-- TODO: screenshot -->

You can also select **Upload file(s)** to upload a new rule in valid YAML or JSON format.

You can't create a custom rule that duplicates an existing rule.

### Turning off custom security rules

To turn a custom security rule off, select the toggle next to the rule name.

### Deleting custom security rules

You must be a [Team Admin](/docs/collaborating-in-postman/roles-and-permissions/) to delete a custom rule. To delete a custom rule, select the delete icon <img alt="Delete icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px"> next to its name. If you delete a custom security rule, you will need to add it back into Postman if you want to use it again.
