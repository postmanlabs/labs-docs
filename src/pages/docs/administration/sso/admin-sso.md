---
title: "Configuring SSO for a team"
order: 132
updated: 2020-08-06
page_id: "admin_sso"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Intro to SSO"
    url: "/docs/administration/sso/intro-sso/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Postman 101 for Admins | Webinar"
    url: "https://youtu.be/d6pw-0Yy5fs"
---

> __[SSO is available on Postman Professional and Enterprise plans.](https://www.postman.com/pricing)__

## Configuring single sign-on

Only a [Team Admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) can configure single sign-on (SSO) for a Postman team.

To configure a new authentication method:

1. Go to [Team Settings](https://app.getpostman.com/dashboard/teams/edit), then select **Authentication**.
1. Select **Add Authentication Method**.
1. Select the authentication type.
1. Enter an authentication name that's identifiable to your team.
1. Select **Proceed**.

<img src="https://assets.postman.com/postman-docs/add-auth-method.jpg" width="350px" alt="Authentication Method"/>

> Always check with your authentication provider dashboard or your IT support staff for the correct information to complete a modal.

In the "Service Provider Details (Postman)" screen, the Entity ID, and the URLs for the Login and ACS are already populated.

As a next step, you must fill in the details in the **Identity Provider Details** section. Enter your authentication certificate from your identity provider in "X.509 Certificate".

   [![details](https://assets.postman.com/postman-docs/server-provider-details.jpg)](https://assets.postman.com/postman-docs/server-provider-details.jpg)

To enter details in the **Identity Provider Details** section, you must sign in to your IDP account and fetch details. Refer to the corresponding section of the documentation and follow the outlined procedure there:

* [Setting up SSO with Okta](/docs/administration/sso/okta/)

* [Setting up SSO with Duo](/docs/administration/sso/duo/)

* [Setting up SSO with Google Workspace](/docs/administration/sso/google-workspace/)

* [Setting up SSO with OneLogin](/docs/administration/sso/onelogin/)

* [Setting up SSO with Ping Identity](/docs/administration/sso/ping-identity/)

* [Setting up SSO with Azure AD](/docs/administration/sso/azure-ad/)

## Edit SSO settings

After configuring an SSO authentication method for your Postman team, you can select the **Status** toggle to turn it on or off. This is a team-level option, so this setting applies to the whole team.

To update the settings for an authentication method, select **Edit**.

<img alt="" src="https://assets.postman.com/postman-docs/admin-sso-turn-on-auth-method-v9.jpg" width="800px"/>

## Managing user accounts

This section describes the following topics:

* [Creating end user accounts](#creating-end-user-accounts)

* [Adding existing user accounts](#adding-existing-user-accounts)

* [Automatically adding new users](#automatically-adding-new-users)

* [Managing team logins](#managing-team-logins)

* [Removing team access](#removing-team-access)

* [Next steps](#next-steps)

### Creating end user accounts

You can create an account for a user in the Identity Provider (IdP).

The first time a new user logs in to Postman through the IdP, a Postman account is created under two conditions—the team has seats available and the [**Automatically add new users**](#automatically-adding-new-users) checkbox was enabled during SSO configuration.

The user will be automatically associated to the team with a **developer** role and have access to team resources.

### Adding existing user accounts

If a Postman user logs in to Postman through a team's IdP, the user will be automatically added to the team if **one of the following** is true:

* The team has available slots and the [**Automatically add new users**](#automatically-adding-new-users) checkbox in your configuration is enabled.
* An admin has invited the user to join the team.

### Automatically adding new users

The **Automatically add new users** checkbox in your SSO configuration determines whether users with accounts in your SSO system will be allowed to join your team automatically by signing in to Postman with SSO. If this is enabled, users with or without existing Postman accounts can join your team by heading to the [Enterprise sign in page](https://identity.getpostman.com/enterprise/login) and logging in with SSO.

> **Automatically add new users** will only work if your team has user slots available. Your team size won't be automatically increased if more users sign in with SSO.

### Managing team logins

By default, Postman only supports Service Provider initiated logins for Postman Professional or Enterprise teams utilizing SSO. Your team must use the [Enterprise login page](https://identity.getpostman.com/enterprise/login) in order to sign in to Postman. If you require users be able to sign in from your SSO portal, you can generate and copy the RelayState from your [Postman team settings](http://go.postman.co/settings/team/auth) and save it in your IDP configuration. This ensures an extra level of security when logins are initiated through a source unknown to Postman.

### Removing team access

You must [remove users from your team in Postman](/docs/administration/managing-your-team/managing-your-team/#removing-team-members) to prevent access to shared resources. When you remove a user from your team, you'll still retain access to any data they have shared with the team. You'll also be able to reassign their personal workspaces and the data within them to a remaining team member so that the team doesn't lose access to any unshared work.

## Next steps

To learn more about the end user experience, see [Logging in to an SSO team](/docs/administration/sso/user-sso/).

If your team is on a Postman Enterprise plan, check out [SCIM provisioning](/docs/administration/scim-provisioning/scim-provisioning-overview/).
