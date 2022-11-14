---
title: "Configuring SCIM with Okta"
order: 142
updated: 2022-03-02
page_id: "configuring_scim_with_okta"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Configuring SSO with Okta"
    url: "/docs/administration/sso/okta/"
---

Postman supports SCIM provisioning through Okta with the [Postman Okta app](https://www.okta.com/integrations/postman/), allowing you to automate user provisioning and de-provisioning for your team.

You must be a [Postman Team Admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) to enable SCIM for your team. With SCIM enabled, users won't have the option to leave your team on their own, and won't be able to change their account email or password. Only Team Admins will have the right to remove team members.

## Contents

* [Enabling SCIM in Okta](#enabling-scim-in-okta)

* [Configuring the Okta SCIM integration](#configuring-the-okta-scim-integration)

## Enabling SCIM in Okta

Postman is available as an app in the Okta Integration Network, allowing you to enable user provisioning directly through Okta.

Prior to enabling SCIM in Okta, you must [add the Postman app in Okta](https://www.okta.com/integrations/postman/) and [configure Okta's SSO for your Postman team](/docs/administration/sso/saml-okta/).

1. [Enable SCIM in Postman](/docs/administration/scim-provisioning/scim-provisioning-overview/#enabling-scim-in-postman) and [generate a SCIM API key](/docs/administration/scim-provisioning/scim-provisioning-overview/#generating-scim-api-key).

2. In Okta, go to the Postman app and select **Provisioning**. Click **Configure API Integration**.

    <img alt="Configure API Integration in Okta Postman app" src="https://assets.postman.com/postman-docs/postman-okta-app-configure-api-integration.jpg"/>

3. Check **Enable API integration** and enter your [SCIM API key](/docs/administration/scim-provisioning/scim-provisioning-overview/#generating-scim-api-key) as the **API Token**.

    <img alt="Configure provisioning in Okta's Postman app" src="https://assets.postman.com/postman-docs/postman-okta-app-enable-provisioning.jpg"/>

4. Click **Test API Credentials**. If successful, a verification message will appear.

    > If verification is unsuccessful, confirm that you have [SCIM enabled for your team in Postman](/docs/administration/scim-provisioning/scim-provisioning-overview/#enabling-scim-in-postman), are using the correct [SCIM API key](/docs/administration/scim-provisioning/scim-provisioning-overview/#generating-scim-api-key), and that your API key's status is **ACTIVE** in your [team authentication settings](https://go.postman.co/settings/team/auth). If you continue to face issues, [contact Postman support](https://www.postman.com/support/) for assistance.

5. Click **Save**.

## Configuring the Okta SCIM integration

The Postman Okta app supports the provisioning features listed in the [SCIM provisioning overview](/docs/administration/scim-provisioning/scim-provisioning-overview/#scim-features).

To turn these features on or off, go to the Postman app in Okta and select **To App** on the left, then click **Edit**.

<img alt="Configure features in Okta's Postman app" src="https://assets.postman.com/postman-docs/postman-okta-app-enable-features.jpg"/>

Select features to enable them, or de-select to turn them off. Click **Save** to save your changes.

<img alt="Enabled features in Okta's Postman app" src="https://assets.postman.com/postman-docs/postman-okta-app-enabled-features.jpg"/>

Any provisioning features you've enabled will be immediately available for use in your Postman Okta app. If a user is already provisioned from the Postman app, you may encounter an error in Okta. If this occurs, remove the pending invite from the Postman manage team settings, and Okta will then provision them.
