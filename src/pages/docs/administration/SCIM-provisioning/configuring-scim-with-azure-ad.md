---
title: "Configuring SCIM with Azure AD"
order: 142
updated: 2022-03-02
page_id: "configuring_scim_with_azure_ad"
warning: false
contextual_links:
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Introducing User Management in Postman with SCIM"
    url: "https://blog.postman.com/introducing-user-management-in-postman-with-scim/"
---

Postman supports SCIM provisioning through Microsoft Azure AD, allowing you to automate user provisioning and de-provisioning for your team.

You must be a [Postman team admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) to enable SCIM for your team. With SCIM enabled, users will not have the option to leave your team on their own, and will not be able to change their account email or password. Only team admins will have the right to remove team members.

<!-- Add SCIM support for Azure AD to allow user to configure a custom Azure AD app for user provisioning -->

## Contents

* [Enabling SCIM in Azure AD](#enabling-scim-in-azure-ad)

    * [Configuring the Azure AD SCIM integration](#configuring-the-azure-ad-scim-integration)

## Enabling SCIM in Azure AD

1. [Enable SCIM in Postman](/docs/administration/scim-provisioning/scim-provisioning-overview/#enabling-scim-in-postman) and [generate a SCIM API key](/docs/administration/scim-provisioning/scim-provisioning-overview/#generating-scim-api-key).


### Configuring the Azure AD SCIM integration
