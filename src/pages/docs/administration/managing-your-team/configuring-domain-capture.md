---
title: "Configuring domain capture"
order: 143
page_id: "configuring_domain_capture"
warning: false
updated: 2021-12-12
contextual_links:
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Introducing Domain Capture: Group Your Organization’s Postman Users into a Single Team"
    url: "https://blog.postman.com/introducing-domain-capture/"

---

> __[Domain capture is only available to Postman Enterprise teams.](https://www.postman.com/pricing)__

Domain capture allows you to identify and manage all user accounts in Postman that have been created with your organization’s domains and subdomains. With this feature, you can consolidate all of your organization's Postman users into a single Postman team and ensure that any new users who sign up for Postman with your domain are automatically added.

## Contents

* [Prerequisites for domain capture](#prerequisites-for-domain-capture)

* [Enabling domain capture](#enabling-domain-capture)

* [Admin experience](#admin-experience)

* [User experience](#user-experience)

* [Domain capture FAQs](#domain-capture-faqs)

## Prerequisites for domain capture

You must be a [Postman team admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) to enable domain capture for your team. In addition, domain capture requires the following:

* Your team must be on the [Postman Enterprise](https://www.postman.com/pricing) plan.
* Your team must be on [Postman version V9](/docs/administration/upgrading/).
* [SSO](/docs/administration/sso/admin-sso/) must be configured and enabled.
    * Alternative authentication methods (Postman or Google login) must be disabled.

It is recommended that you enable [SSO provisioning](/docs/administration/managing-your-team/configuring-scim/) to ease the process of onboarding new users and [auto-flex](/docs/administration/billing/#utilizing-auto-flex) to ensure that your team can automatically accommodate all users that may be added to your Postman team when domain capture is enabled.

## Enabling domain capture

To enable domain capture, navigate to Postman and select **Team** > **Team Settings** in the upper-right. Select **Authentication** in the left sidebar.

Confirm that your team has only the SSO authentication method enabled. Then, select the **Domains** tab.

> Your team must have only SAML-based SSO authentication methods enabled to set up domain capture. Alternative authentication methods such as Postman or Google login must be disabled.

Select **Add Domain**. Enter the domain or subdomain you'd like to add, then select **Generate Verification Records**. <img alt="Copy icon" src="https://assets.postman.com/postman-docs/icon-copy-v9.jpg" width="15px" style="vertical-align:middle;margin-bottom:5px"> **Copy** the **TXT record** and add it to your domain's DNS configuration.

<img alt="Add domain - domain details" src="https://assets.postman.com/postman-docs/authentication-domain-add-details-9.4.jpg" width="350"/>

In Postman, you can select **← Back** to navigate back to your domain dashboard.

<img alt="Domain dashboard" src="https://assets.postman.com/postman-docs/authentication-domain-dashboard-9.5.jpg"/>

Verification status will change from "Created" to "In Progress" after the TXT record has been added to the domain's DNS configuration.

Postman's team will verify your requested domain and update its status to "Verified" in your domain dashboard, as well as notify your team admins via email.

> You can reach out to [Postman support](https://www.postman.com/support/) to check on the status of your domain verification.

Once your domain has been verified, you can enable it by selecting the switch under **Domain authentication**.

<img alt="Domain authentication confirmation" src="https://assets.postman.com/postman-docs/authentication-domain-manage-accounts-confirm-9.4.jpg" width="500px"/>

Select **Confirm** to enable domain capture.

> You can enable domain capture for additional domains at any time in your [domain dashboard](https://go.postman.co/settings/team/domain-capture).

## Admin experience

Team admins can manage the domains and subdomains that have been added to a team by navigating to the [domain dashboard](https://go.postman.co/settings/team/domain-capture). Here, admins can add, enable, disable, or delete domains for their team at any time.

<img alt="Domain dashboard" src="https://assets.postman.com/postman-docs/authentication-domain-dashboard-9.5.jpg"/>

In the domain dashboard, you can view your domains, their verification status, the number of unclaimed accounts associated with the domain, and if domain capture is currently enabled or disabled for the particular domain.

**Unclaimed Accounts** is the number of accounts associated with a verified domain that are not a part of your Postman team. When you opt to enable **Domain authentication** for a domain, you'll be provided with a list of the unclaimed Postman accounts that will be automatically added to your team. Once enabled, the number of unclaimed accounts will reduce as these users log in and join your team.

> You will not be able to cherry-pick users you'd like to add to your team. When domain capture is enabled, any user associated with the domain, who can authenticate via the SSO auth method you've enabled, can join your Postman team.

With domain capture enabled, any new users that sign up for Postman with your domain are automatically added to your team and can be managed in your [team dashboard](https://go.postman.co/settings/team/members).

## User experience

When domain capture is enabled, Postman users with accounts associated with the domain will only be able to access Postman after joining your Postman team. This applies to existing users who are a part of other Postman teams, existing individual Postman users, and new users who sign up for Postman.

Existing users will be notified when they next log in to Postman that their account is now managed by your team.

<img alt="Domain capture join team notification" src="https://assets.postman.com/postman-docs/domain-capture-join-team-9.4.jpg" width="350px"/>

Existing users who were previously on another Postman team will have their personal workspace data, collections, and environments automatically transferred over. If users experience any issues when moving to your Postman team, please reach out to [Postman support](https://www.postman.com/support/).

## Domain capture FAQs

* **What happens to captured users and their data (collections, environments, etc.) when domain capture is enabled?**

The experience for captured users depends on their prior team status:

* If a captured user is already on your organization's team, nothing changes for them.
* If a captured user is not a part of any team:
    * All existing user sessions are revoked.
    * The next time the user logs in, they will be prompted to join your organization's team via SSO.
    * When the user authenticates into your organization's team via SSO, their existing data will be available in their personal workspace.
* If a captured user is a part of an existing free or paid team:
    * They are removed from their existing team and the data that solely belongs to them and has not been shared will be moved with them.
    * All existing user sessions are revoked.
    * The next time the user logs in, they will be prompted to join your organization's team via SSO.
    * When the user authenticates into your organization's team via SSO, their existing data will be available in their personal workspace.
* If a captured user is the last admin of an existing free team:
    * They are removed from the team and the remaining members are assigned the admin role. The data that solely belongs to them and has not been shared will be moved with them.
    * All existing user sessions are revoked.
    * The next time the user logs in, they will be prompted to join your organization's team via SSO.
    * When the user authenticates into your organization's team via SSO, their existing data will be available in their personal workspace.
* If a captured user is the last admin of an existing paid team:
    * Postman support will contact your team admins to discuss how to approach this prior to verifying the domain you've added to your team.
    * All existing user sessions are revoked.
    * The next time the user logs in, they will be prompted to leave their existing team.
    * They will need to contact [Postman support](https://www.postman.com/support/) to assign the admin role to another team member and remove them from the team. The data that solely belongs to them and has not been shared will be moved with them.
    * Once they have been removed from their previous team, they can authenticate via SSO and join your organization's team. Their existing data will be available in their personal workspace.

* **Can a team admin view the list of user accounts that will be captured before enabling domain capture?**

Yes, a team admin can view the list of the unclaimed Postman accounts that will be captured prior to confirming they'd like to enable domain capture.

* **Does adding a domain automatically add all the users with the organization’s domain to the organization’s team?**

No, after a domain is added, it must be verified by [Postman support](https://www.postman.com/support/). Postman support will contact team admins to evaluate and explain the effects of enabling domain capture, then confirm verification of the domain. Any team admin will then be able to enable domain capture for your Postman team.
