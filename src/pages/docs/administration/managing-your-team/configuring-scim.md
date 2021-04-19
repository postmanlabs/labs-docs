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

Postman supports SCIM (System for Cross-domain Identity Management), allowing you to automate provisioning and de-provisioning for your team. With this feature, you can efficiently deploy Postman at scale across your organization and control access to it via your identity provider.

You must be a [Postman team admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) to enable SCIM for your team.

## Contents

* [Enabling SCIM provisioning](#enabling-scim-provisioning)

    * [Enabling SCIM in Postman](#enabling-scim-in-postman)

    * [Generating SCIM API key](#generating-scim-api-key)

* [Enabling SCIM in Okta](#enabling-scim-in-okta)

    * [Pushing new users](#pushing-new-users)

    * [Pushing profile updates](#pushing-profile-updates)

    * [Pushing user deletion](#pushing-user-deletion)

    * [Importing new users](#importing-new-users)

* [Enabling SCIM with the SCIM API](#enabling-scim-with-the-scim-api)

* [Next steps](#next-steps)

## Enabling SCIM provisioning

You must have SSO configured prior to enabling SCIM for your Postman team.

> Learn [how to configure SSO in Postman](/docs/administration/sso/admin-sso/).

### Enabling SCIM in Postman

To enable SCIM, navigate to [Postman](https://go.postman.co/home) and select **Team** in the upper-right > **Team Settings**. Select **Authentication** in the left sidebar. 

<img alt="Enable SCIM in dashboard" src="https://assets.postman.com/postman-docs/dashboard-auth-enable-scim.jpg"/>

Next to **SCIM provisioning**, select the **OFF** toggle.

<img alt="Enable SCIM in dashboard" src="https://assets.postman.com/postman-docs/turn-on-scim-confirmation.jpg" width="400px"/>

Click **Turn On** to enable SCIM provisioning.

### Generating SCIM API key

Under **SCIM provisioning**, select **Generate SCIM API Key**.

<img alt="Generate SCIM API key" src="https://assets.postman.com/postman-docs/generate-scim-api-key.jpg"/>

Name your key and click **Generate**. Copy your new API key for later use and click **Done**.

If you are using Okta, continue by [enabling SCIM in Okta](#enabling-scim-in-okta). If you are using another identity provider, continue by [enabling SCIM with the SCIM API](#enabling-scim-with-the-scim-api).

## Enabling SCIM in Okta

Postman is available in the Okta Integration Network as an app, allowing you to enable user provisioning directly through Okta.

**(add instructions for adding app)**
<!--- If they already have the postman app in okta for SSO, do they still need to add it as a new application or just enable provisioning in their existing app? Re: step 5-9 here - https://docs.databricks.com/administration-guide/users-groups/scim/okta.html#configure-databricks-provisioning-using-okta -->
<!--- Need base URL --->

### Pushing new users

**(add instructions)**

<!-- The flow here https://docs.databricks.com/administration-guide/users-groups/scim/okta.html is unclear - can you get access to an okta account that has scim enabled for an app and provide a brief clip of how to navigate to where this would be? I am unsure on starting point (okta dashboard? postman app settings in okta dashboard? and which screens users will go through)  -->

### Pushing profile updates

**(add instructions)**

<!-- same as above, is the first screenshot on this page - https://docs.databricks.com/administration-guide/users-groups/scim/okta.html#configure-databricks-provisioning-using-okta - the starting point for users and do they select those tabs? how do you get to that starting point?
-->

### Pushing user deletion

**(add instructions)**

<!-- same as above -->

### Importing new users

**(add instructions)**
<!-- is this a feature? was mentioned in call as part of list. can users in postman be imported into okta? see: https://docs.databricks.com/administration-guide/users-groups/scim/okta.html#import-users-from-databricks-to-okta -->

## Enabling SCIM with the SCIM API
 
Visit Postman's [SCIM API docs]() for information on setting up SCIM for other identity providers.

## Next steps

Learn more about [defining roles](/docs/collaborating-in-postman/roles-and-permissions/) in your team.
