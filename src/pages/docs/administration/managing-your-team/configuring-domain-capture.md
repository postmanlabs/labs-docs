---
title: "Configuring domain capture"
order: 143
page_id: "configuring_domain_capture"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Configuring SSO for a team"
    url: "/docs/administration/sso/admin-sso/"
---

> __[Provisioning with SCIM is only available to Postman Enterprise teams.](https://www.postman.com/pricing)__



Postman supports [SCIM](https://datatracker.ietf.org/doc/html/rfc7642) (System for Cross-domain Identity Management), allowing you to automate user provisioning and de-provisioning for your team. With this feature, you can efficiently deploy Postman at scale across your organization and control access to it via your identity provider.

You can enable SCIM with the [SCIM API](#enabling-scim-with-the-scim-api) or utilize the [Postman Okta app](#enabling-scim-in-okta) for provisioning. You must be a [Postman team admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) to enable SCIM for your team. With SCIM enabled, users will not have the option to leave your team on their own, and will not be able to change their account email or password. Only team admins will have the right to remove team members.

## Contents

* [SCIM features](#scim-features)

* [Enabling SCIM provisioning](#enabling-scim-provisioning)

    * [Enabling SCIM in Postman](#enabling-scim-in-postman)

    * [Generating SCIM API key](#generating-scim-api-key)

* [Enabling SCIM in Okta](#enabling-scim-in-okta)


## SCIM features

