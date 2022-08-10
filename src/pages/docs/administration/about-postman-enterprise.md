---
title: "About Postman Enterprise"
updated: 2022-09-05
---

The Postman Enterprise plan is for organizations that need advanced identity management, security, and governance features as they design, build, test, and deploy APIs. Postman Enterprise enables you to deploy Postman at scale, manage your team, and streamline your organization's API development process.

## Contents

* [Enterprise features](#enterprise-features)
    * [Reports](#reports)
    * [Advanced identity management](#advanced-identity-management)
    * [API security and governance features](#api-security-and-governance-features)
    * [Administration](#administration)
* [Postman Enterprise trial](#postman-enterprise-trial)
* [Purchasing a Postman Enterprise plan](#purchasing-a-postman-enterprise-plan)
* [Next steps](#next-steps)

## Enterprise features

Postman Enterprise has features for reporting, identity management, API security and governance, and administration. This list isn't comprehensive, since we often add new features to Postman Enterprise and update existing ones.

### Reports

Postman Enterprise enables you to access reports that give you insights into the state of your APIs, including API creation, collection execution, and test runs. Reports also have information about your team's API consumption, performance, security posture, and SLA adherence. To learn more about reports, see [Using reports](/docs/reports/reports-overview/).

### Advanced identity management

Postman Enterprise gives you access to advanced identity management features, including:

* **Role-based access control (RBAC)** - Postman Enterprise RBAC features help you give the right members of your team access to the right tools and data. To learn more about the team-level roles available to Enterprise teams, including Super Admin, Community Manager, and API Network Manager, see [Defining roles](/docs/collaborating-in-postman/roles-and-permissions/#team-roles).
* **User groups** - An Enterprise plan enables you to organize members of your team into groups, then assign roles and permissions according to each group's function. To learn more about user groups, see [Managing user groups](/docs/administration/managing-your-team/user-groups/).
* **Single sign-on (SSO)** - You can enable your team members to sign in to Postman Enterprise using your organization's [identity provider](/docs/administration/sso/intro-sso/#identity-providers-supported). To learn more about setting up SSO for your team, see [Single sign-on](/docs/administration/sso/intro-sso/).
* **System for cross-domain identity management (SCIM)** - Setting up SCIM enables you to automatically provision and de-provision team members and organize them into [user groups](/docs/administration/managing-your-team/user-groups/). To learn more about enabling SCIM for your team, see [SCIM provisioning](/docs/administration/scim-provisioning/scim-provisioning-overview/).
* **Domain capture** - Domain capture enables you to consolidate all your organization's users into a single Postman team and ensure that any new users who sign up for Postman with your domain are automatically added. To learn more about setting up domain capture, see [Configuring domain capture](/docs/administration/managing-your-team/configuring-domain-capture/).

### API security and governance features

Postman Enterprise provides you with access to API security features to keep your data secure. You can [create a custom token scanner](/docs/administration/token-scanner/#custom-alerts) to proactively check for security leaks. You can also set oversight on which workspaces your team can [share publicly](/docs/collaborating-in-postman/manage-public-elements/).

You also get access to API governance features, including formatting and security warnings, that enable you to apply standards consistently throughout your API development process's [design](/docs/api-governance/api-definition/api-definition-warnings/) and [testing phases](/docs/api-governance/api-testing/api-testing-warnings/).

### Administration

You can [deploy Postman Enterprise](/docs/administration/managing-enterprise-deployment/) to your team at scale, including choosing which version of the app they use. Once you set up Postman Enterprise, you can use [audit logs](/docs/administration/audit-logs/) to understand how your team members are using it.

Some integrations, including [Azure DevOps](/docs/integrations/available-integrations/azure-devops/), [GitHub Enterprise Server](/docs/integrations/available-integrations/github/), and [GitLab Self-Managed](/docs/integrations/available-integrations/gitlab/), are only available with an Enterprise plan.

## Postman Enterprise trial

If you're interested in trying out Postman Enterprise for your organization, you can evaluate the service during a free 30 day trial. During the 30 day trial, you will be able to access the full range of features available in Postman Enterprise.

If you have an existing Postman account, you can start a trial from the [Postman website](https://www.postman.com/postman-enterprise/) or from the Postman app. You must have an [Admin role](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) to start a trial. If you have a [Billing role](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) in addition to your Admin role, you can start the trial from the [Billing dashboard](http://go.postman.co/billing).

To start the trial, select **Start a trial** and accept the terms and conditions. <!-- TODO: is this true, look at figma -->

> If you don't already have a Postman account, you need to [sign up for Postman](/docs/getting-started/postman-account/#signing-up-for-a-postman-account) and [create a team](/docs/collaborating-in-postman/working-with-your-team/collaboration-overview/#creating-a-team) before you can start a trial of Postman Enterprise.

If you decide to upgrade to Postman Enterprise during or after your trial, contact the [Postman sales team](https://www.postman.com/company/contact-sales/) to get started. <!-- TODO: is there a url + utm to use here? -->

If you decide not to upgrade after your trial period is over, you will return to your original plan. If you didn't already have a Postman account before starting the trial, your plan will switch to a [Free plan](https://www.postman.com/pricing/).

## Purchasing a Postman Enterprise plan

To purchase a Postman Enterprise plan, contact the [Postman sales team](https://www.postman.com/company/contact-sales/). The sales team will evaluate your organization's needs, including the number of team member slots and any [add-ons](/docs/administration/billing/#managing-add-ons). To learn more, see [Purchasing Postman](/docs/administration/buying/).

## Next steps

After you purchase a Postman Enterprise plan, you can customize it to meet your organization's needs:

* To learn how to manage Postman app versioning and deploy the Postman Enterprise app to your organization, see [Managing Enterprise deployment](/docs/administration/managing-enterprise-deployment/).
