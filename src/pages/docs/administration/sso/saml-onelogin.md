---
title: "Custom SAML in OneLogin"
order: 139
page_id: "saml_onelogin"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Intro to SSO"
    url: "/docs/administration/sso/intro-sso/"
---

> You must be an admin of your OneLogin organization in order to create this custom SAML application.

## Setting up a custom SAML application in OneLogin

1. Go to the OneLogin home page at [https://www.onelogin.com/](https://www.onelogin.com/) and log in to your account using your OneLogin credentials.

1. Navigate to the OneLogin applications page, and select **Add Apps**:

   [![OneLogin add app2](https://assets.postman.com/postman-docs/Onelogin-Add-Apps2.png)](https://assets.postman.com/postman-docs/Onelogin-Add-Apps2.png)

1. Search for *SAML Test Connector* in the Find Applications section. Select *SAML Test Connector (IdP w/ attr w/ sign response)* from the search results

    [![onelogin find saml](https://assets.postman.com/postman-docs/Onelogin-Select-SAML1.png)](https://assets.postman.com/postman-docs/Onelogin-Select-SAML1.png)

1. Update or rename the **Display Name**, and select **Save**.

   [![onelogin display name](https://assets.postman.com/postman-docs/Onelogin_display.png)](https://assets.postman.com/postman-docs/Onelogin_display.png)

1. You are now in the **Info** tab. Select the **Configuration** tab. Enter your Postman service provider details here. These details can be found on the Postman [Edit Team Details page](https://go.postman.co/settings/team/general). Select **Save** to proceed.

   [![OneLogin service provider](https://assets.postman.com/postman-docs/Onelogin-IDP-Details2.png)](https://assets.postman.com/postman-docs/Onelogin-IDP-Details2.png)

    * Enter the string `^https:\/\/identity.getpostman.com\/` in the **ACS(Consumer) URL Validator** field.
    * Copy **EntityID** in the **Recipient** field, and **ACS URL** in **ACS (Consumer) URL**.
    * Enter `https://identity.getpostman.com` in the **Single Logout URL** field.

1. Navigate to the SSO tab in OneLogin and copy the `Identity Provider SSO URL`, `SAML 2.0 Endpoint (HTTP)`, and `X.509 Certificate` from here:

   [![OneLogin service provider](https://assets.postman.com/postman-docs/Onelogin-Copy-IDP-Details1.png)](https://assets.postman.com/postman-docs/Onelogin-Copy-IDP-Details1.png)

1. To copy the X.509 certificate, select **View Details**, then paste the values into the corresponding fields in the Postman Identity Provider Details screen:

    [![OneLogin service provider details](https://assets.postman.com/postman-docs/server-provider-details.jpg)](https://assets.postman.com/postman-docs/server-provider-details.jpg)

1. Generate or regenerate the relay state, select **Automatically add new users using this authentication method to my team**, and click **Save Authentication**.
