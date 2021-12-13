---
title: "Configuring domain capture"
order: 143
page_id: "configuring_domain_capture"
warning: false
updated: 2021-12-12
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Configuring SSO for a team"
    url: "/docs/administration/sso/admin-sso/"
  - type: link
    name: "Configuring SCIM provisioning"
    url: "/docs/administration/managing-your-team/configuring-scim/"
---

> __[Domain capture is only available to Postman Enterprise teams.](https://www.postman.com/pricing)__

Domain capture allows you to identify and manage all user accounts in Postman that have been created with your organization’s domains and subdomains. With this feature, you can consolidate all of your organization's Postman users into a single Postman team and ensure that any new users that sign up for Postman with your domain are automatically added.

You must be a [Postman team admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) to enable domain capture for your team. Your team must also have [SSO](/docs/administration/sso/admin-sso/) configured and alternative auth methods (Postman or Google login) disabled prior to setting up domain capture.

## Contents

* [Enabling domain capture](#enabling-domain-capture)

* [Admin experience](#admin-experience)

* [User experience](#user-experience)

## Enabling domain capture

To enable domain capture, navigate to Postman and select **Team** > **Team Settings** in the upper-right. Select **Authentication** in the left sidebar.

Confirm your team has only SSO auth method enabled. Then, select the **Domains** tab.

> Your team must only have SAML based SSO auth methods enabled to set up domain capture. Alternative auth methods such as Postman or Google login must be disabled.

Select **Add Domain**. Enter the domain or subdomain you'd like to add, then select **Generate Verification Records**. <img alt="Copy icon" src="https://assets.postman.com/postman-docs/icon-copy-v9.jpg" width="15px" style="vertical-align:middle;margin-bottom:5px"> **Copy** the **TXT record** and add it to your domain's DNS configuration.

[domain details page w/"verification pending", txt record screenshot]

In Postman, you can select **← Back** to navigate back to your domain dashboard.

<img alt="Domain capture verification in progress" src="https://assets.postman.com/postman-docs/authentication-domain-verification-in-progress-9.4.1.jpg"/>

Postman's team will verify your requested domain and update its status in your dashboard, as well as notify your team admins via email.

> You can reach out to [Postman support](https://www.postman.com/support/) to check on the status of your domain verification.

Once your domain has been verified, you can enable it by selecting the switch under **Domain authentication**.

<img alt="Domain authentication confirmation" src="https://assets.postman.com/postman-docs/authentication-domain-manage-accounts-confirm-9.4.jpg" width="500px"/>

Select **Confirm** to enable domain capture.

## Admin experience

Team admins can manage the domains and subdomains that have been added to a team by navigating to the [domain capture dashboard](https://go.postman.co/settings/team/domain-capture).

<img alt="Domain capture dashboard" src="https://assets.postman.com/postman-docs/authentication-domain-dashboard-9.4.jpg"/>

In the dashboard, you can view your domains, their verification status, the number of unclaimed accounts associated with the domain, and if domain capture is currently enabled or disabled for the particular domain.

**Unclaimed Accounts** is the number of accounts associated with a verified domain that are not a part of your Postman team. When you opt to enable **Domain authentication** for a domain, you'll be provided with a list of the unclaimed Postman accounts that will be automatically added to your team. Once enabled, the number of unclaimed accounts will go down to 0.

With domain capture enabled, any new users that sign up for Postman with your domain are automatically added to your team and can be managed in your [team dashboard](https://go.postman.co/settings/team/members).

You can add, enable, disable, or delete domains at any time in the [domain capture dashboard](https://go.postman.co/settings/team/domain-capture).

## User experience

When domain capture is enabled, Postman users with accounts associated with the domain will automatically join your Postman team. This applies to existing users who are a part of other Postman teams, existing individual Postman users, and new users who sign up for Postman.

Existing users will be notified when they next log in to Postman that their account is now managed by your team.

<img alt="Domain capture join team notification" src="https://assets.postman.com/postman-docs/domain-capture-join-team-9.4.jpg" width="350px"/>

Existing users who were previously on another Postman team will have their personal workspace data, collections, and environments automatically transferred over. If users experience any issues when moving to your Postman team, please reach out to [Postman support](https://www.postman.com/support/).
