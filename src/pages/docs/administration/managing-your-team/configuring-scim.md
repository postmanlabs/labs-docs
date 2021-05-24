---
title: "Configuring SCIM provisioning"
order: 142
page_id: "configuring_scim"
warning: false
contextual_links:
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Manage Large Teams in Postman with Workspaces, Permissions, and Version Control"
    url: "https://blog.postman.com/postman-team-workspaces-and-permissions/"

---

> __[Provisioning with SCIM is only available to Postman Enterprise teams.](https://www.postman.com/pricing)__

Postman supports [SCIM](http://www.simplecloud.info/) (System for Cross-domain Identity Management), allowing you to automate provisioning and de-provisioning for your team. With this feature, you can efficiently deploy Postman at scale across your organization and control access to it via your identity provider.

You must be a [Postman team admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) to enable SCIM for your team. With SCIM enabled, users will not have the option to leave your team on their own, and will not be able to change their account email or password . Only team admins will have the right to remove team members.

## Contents

* [SCIM features](#scim-features)

* [Enabling SCIM provisioning](#enabling-scim-provisioning)

    * [Enabling SCIM in Postman](#enabling-scim-in-postman)

    * [Generating SCIM API key](#generating-scim-api-key)

* [Enabling SCIM with the SCIM API](#enabling-scim-with-the-scim-api)

* [Next steps](#next-steps)

## SCIM features

Postman supports the following provisioning features:

* Create user: Creates a new user account in Postman, adds the account to your organization's Postman team, and activates authentication for the user, provided an account with the same email ID does not already exist in Postman.

> The newly added user will have the developer role in Postman by default. You can later [update account roles in Postman](/docs/administration/managing-your-team/managing-your-team/#managing-roles).

* Update user information: Updates a user’s first and last name in Postman.

* Activate user: Creates a new user on your Postman team, if one does not already exist, and activates the user to authenticate into your Postman team.

* Deactivate user: Removes a user from your Postman team and deactivates their account, blocking the account from authenticating into Postman.

> The user account and the data corresponding to it will not be deleted. To permanently delete the user account and their data, [contact Postman support](https://www.postman.com/support/).

* Reactivate user: Reactivates an existing deactivated user by unblocking the account's authentication into Postman and adds the account back on to your Postman team.

## Enabling SCIM provisioning

You must have SSO configured prior to enabling SCIM for your Postman team.

> To use SCIM, you must have only one SSO method configured. If you have more than one SSO method enabled, you will not have the option to generate a SCIM API key.

<!-- -->
> Learn [how to configure SSO in Postman](/docs/administration/sso/admin-sso/).

### Enabling SCIM in Postman

To enable SCIM, navigate to [Postman](https://go.postman.co/home) and select **Team** in the upper-right > **Team Settings**. Select **Authentication** in the left sidebar.

<img alt="Enable SCIM in dashboard" src="https://assets.postman.com/postman-docs/auth-enable-scim-1.jpg"/>

Next to **SCIM provisioning**, select the **OFF** toggle.

<img alt="Enable SCIM in dashboard" src="https://assets.postman.com/postman-docs/turn-on-scim-provisioning-1.jpg" width="400px"/>

Click **Turn On** to enable SCIM provisioning.

### Generating SCIM API key

Under **SCIM provisioning**, select **Generate SCIM API Key**.

<img alt="Generate SCIM API key" src="https://assets.postman.com/postman-docs/generate-scim-api-key.jpg"/>

Name your key and click **Generate**. Copy your new API key for later use and click **Done**.

> You can revisit this page to generate a new API key later on if needed. Your previous API key will stay active briefly while you switch over.

<!-- -->

> For further information or assistance configuring SCIM, [contact Postman support](https://www.postman.com/support/).

## Enabling SCIM with the SCIM API

Visit Postman's [SCIM API docs](x) for information on setting up SCIM for your Postman team via the SCIM 2.0 API.

## Next steps

Learn more about [defining roles](/docs/collaborating-in-postman/roles-and-permissions/) in your team.
