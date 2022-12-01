---
title: "Configuring SCIM with OneLogin"
order: 142
updated: 2022-03-17
page_id: "configuring_scim_with_onelogin"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Configuring SSO with OneLogin"
    url: "/docs/administration/sso/onelogin/"

---

Postman supports SCIM provisioning through OneLogin with the Postman OneLogin app, allowing you to automate user provisioning and de-provisioning for your team.

You must be an administrator in both OneLogin and Postman to enable SCIM for your team. With SCIM enabled, users won't have the option to leave your team on their own, and won't be able to change their account email or password. Only Team Admins will have the right to remove team members.

## Contents

* [Enabling SCIM in OneLogin](#enabling-scim-in-onelogin)

* [Configuring the OneLogin SCIM integration](#configuring-the-onelogin-scim-integration)

## Enabling SCIM in OneLogin

Postman is available as an app in OneLogin, allowing you to enable user provisioning along with SSO.

Before enabling SCIM, you must [configure SSO with OneLogin](/docs/administration/sso/onelogin/) for your Postman team.

To set up provisioning with OneLogin, do the following:

1. [Enable SCIM in Postman](/docs/administration/scim-provisioning/scim-provisioning-overview/#enabling-scim-in-postman) and [generate a SCIM API key](/docs/administration/scim-provisioning/scim-provisioning-overview/#generating-scim-api-key).

2. In OneLogin, go to the Postman app and select **Configuration**. Paste the generated SCIM API key under **API Connection** and select **Enable**.

    <img alt="OneLogin configuration API connection" src="https://assets.postman.com/postman-docs/onelogin-api-connection.jpg" width="275px"/>

3. Click **Save**.

## Configuring the OneLogin SCIM integration

Postman supports the provisioning features detailed in the [SCIM provisioning overview](/docs/administration/scim-provisioning/scim-provisioning-overview/#scim-features).

To configure provisioning, go to the Postman app in OneLogin and select **Provisioning** on the left, then **Enable provisioning**.

<img alt="OneLogin provisioning workflow" src="https://assets.postman.com/postman-docs/onelogin-provisioning-workflow.jpg" width="400px"/>

Select features to enable them, or de-select to turn them off.

You can also define what happens when users are deleted in OneLogin, their Postman app access is removed, or their accounts are suspended. You can choose to **Suspend** these users' Postman accounts or **Do Nothing**. If you choose to **Suspend**, the affected accounts will no longer appear in your [Postman team dashboard](https://go.postman.co/settings/team/members). Regardless of your choice, users who are deleted, suspended, or have their app access removed will no longer be able to sign in to their Postman account.

Select **Save** to save your changes.
