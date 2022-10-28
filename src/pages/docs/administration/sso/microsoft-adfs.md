---
title: "Microsoft AD FS"
order: 134
updated: 2020-07-07
page_id: "microsoft_adfs"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Intro to SSO"
    url: "/docs/administration/sso/intro-sso/"
---

> __[SSO with Microsoft AD FS is available on Postman Enterprise plans.](https://www.postman.com/pricing)__

You can configure [Microsoft Active Directory Federation Services](https://docs.microsoft.com/en-gb/windows-server/identity/active-directory-federation-services) (AD FS) to work with Postman single sign-on (SSO).

## Contents

* [Prerequisites](#prerequisites)
* [Configuration](#configuration)
    * [Step 1: Create an AD FS authentication scheme](#step-1-create-an-ad-fs-authentication-scheme)
    * [Step 2: Add a Relying Party Trust](#step-2-add-a-relying-party-trust)
    * [Step 3: Create claim rules](#step-3-create-claim-rules)
    * [Step 4: Adjust the trust settings](#step-4-adjust-the-trust-settings)
    * [Step 5: Submit Identity Provider details](#step-5-submit-identity-provider-details)
    * [Step 6: Enable the RelayState parameter on your AD FS servers](#step-6-enable-the-relaystate-parameter-on-your-ad-fs-servers)

## Prerequisites

Before you configure Microsoft Active Directory Federation Services (AD FS) to work with Postman single sign-on (SSO), you must have:

* An Active Directory instance where all users have an email address attribute.
* A SSL certificate from the AD FS server.
* A server that runs Microsoft Server 2012 or 2008.

> This guide uses screenshots from Server 2012R2, but similar steps are possible in other versions.

After you meet these basic requirements, install AD FS on your server.

To configure and install AD FS, see [Deploy and configure AD FS](https://docs.microsoft.com/en-us/previous-versions/dynamicscrm-2016/deployment-administrators-guide/gg188612(v=crm.8)) in the Microsoft Knowledge Base.

## Configuration

Follow the steps below to configure Microsoft AD FS to work with Postman SSO.

### Step 1: Create an AD FS authentication scheme

First, you need to create an AD FS authentication scheme in Postman. To create this authentication scheme, see [Configuring SSO for a team](/docs/administration/sso/admin-sso/).

After creating the scheme, collect the values for these fields in the [Team](https://app.getpostman.com/dashboard/teams) page.

| Fields   | AD FS equivalent |
| ------------- | ------------- |
| Assertion Consumer Service URL  |  SAML 2.0 SSO service URL  |
| Encryption Certificate   | Token encryption certificate  |

### Step 2: Add a Relying Party Trust

Relying Party Trust (RPT) defines the connection between AD FS and Postman.

1. Select the **Relying Party Trusts** folder from AD FS Management.
1. On the Actions sidebar, select **Add Relying Party Trust** to start the configuration wizard for a new trust.
1. Select **Claims aware** in the Welcome screen and then select **Start**.

    [![relying party trust](https://assets.postman.com/postman-docs/ENT-Relying-Party-Trust.png)](https://assets.postman.com/postman-docs/ENT-Relying-Party-Trust.png)

1. In the Select Data Source screen, select **Enter Data About the Party Manually**.

    [![select data source](https://assets.postman.com/postman-docs/ENT-Enter-Data-About-Party-Manually.jpeg)](https://assets.postman.com/postman-docs/ENT-Enter-Data-About-Party-Manually.jpeg)

1. Enter a **Display Name** that you'll recognize later. You can optionally add notes.

    [![display name](https://assets.postman.com/postman-docs/ENT-display-name.jpeg)](https://assets.postman.com/postman-docs/ENT-display-name.jpeg)

1. Upload the encryption certificate in the [Team](https://app.getpostman.com/dashboard/teams) page or use the default certificate settings.

    [![encryption cert](https://assets.postman.com/postman-docs/ENT-configure-cert.jpeg)](https://assets.postman.com/postman-docs/ENT-configure-cert.jpeg)

1. Select **Enable Support** for the SAML 2.0 WebSSO protocol.
1. Collect the service URL (ACS URL) from the [Team](https://app.getpostman.com/dashboard/teams) page.

    [![acs url](https://assets.postman.com/postman-docs/ENT-ACS-URL.jpeg)](https://assets.postman.com/postman-docs/ENT-ACS-URL.jpeg)

1. Add this Relying party trust identifier: `https://identity.getpostman.com`.

    [![replying party trust identifier](https://assets.postman.com/postman-docs/ENT-Relying-party-trust-identifier.jpeg)](https://assets.postman.com/postman-docs/ENT-Relying-party-trust-identifier.jpeg)

1. Select **Permit everyone**.

    [![permit everyone](https://assets.postman.com/postman-docs/ENT-Permit-everyone.jpeg)](https://assets.postman.com/postman-docs/ENT-Permit-everyone.jpeg)

1. In the next two screens, the wizard displays an overview of your settings.
1. In the final screen, select **Close** to exit and open the Claim Rules editor.

### Step 3: Create claim rules

After you create the relying party trust, you can create the claim rules.

[![claim rules](https://assets.postman.com/postman-docs/ENT-claim-rules.jpeg)](https://assets.postman.com/postman-docs/ENT-claim-rules.jpeg)

1. Select **Add Rule**. Then create a **Send LDAP Attributes as Claims** rule.

    [![add rule](https://assets.postman.com/postman-docs/ENT-Add-Rule.jpeg)](https://assets.postman.com/postman-docs/ENT-Add-Rule.jpeg)

1. Use the Active Directory as your attribute store. In the **LDAP Attribute** column, select **E-Mail Addresses**.
1. In the **Outgoing Claim Type**, select **E-Mail Address**.

    [![active directory](https://assets.postman.com/postman-docs/ENT-Active-Directory.jpeg)](https://assets.postman.com/postman-docs/ENT-Active-Directory.jpeg)

1. Select **Finish** to save the new rule.
1. Select **Add Rule** to create another new rule and select **Transform an Incoming Claim** as the template.

    [![incoming claim](https://assets.postman.com/postman-docs/ENT-Transform-Incoming-Claim.jpeg)](https://assets.postman.com/postman-docs/ENT-Transform-Incoming-Claim.jpeg)

1. In **Incoming Claim Type**, select **E-mail Address**.
1. In **Outgoing Claim Type**, select **Name ID**.
1. In **Outgoing Name ID Format**, select **Email**.

    > Use the default setting **Pass through all claim values**.

    [![pass through claim values](https://assets.postman.com/postman-docs/ENT-Pass-through-all-claim-values.jpeg)](https://assets.postman.com/postman-docs/ENT-Pass-through-all-claim-values.jpeg)

1. Select **Finish** to create the claim rule.
1. There are two transform rules. Select **Edit Claim Issuance Policy** to confirm.

[![edit claim issuance](https://assets.postman.com/postman-docs/ENT-Edit-Claim-Issuance-Policy.jpeg)](https://assets.postman.com/postman-docs/ENT-Edit-Claim-Issuance-Policy.jpeg)

### Step 4: Adjust the trust settings

1. In the Actions sidebar, Select **RPT** and then select **Properties**.
1. In the Advanced tab, specify **SHA-1** as the secure hash algorithm.

[![adjusting trust](https://assets.postman.com/postman-docs/ENT-Adjusting-trust-settings.jpeg)](https://assets.postman.com/postman-docs/ENT-Adjusting-trust-settings.jpeg)

### Step 5: Submit Identity Provider details

After the setup, you must submit your Identity Provider's details to Postman.

1. Download the `FederationMetadata.xml` file. You can often find this file at: `https://<Federation Service name>/FederationMetadata/2007-06/FederationMetadata.xml`
1. Collect the Identity Provider Single Sign-On URL, Identity Provider Issuer, and X.509 Certificate from the metadata file and enter these values in the [Team](https://app.getpostman.com/dashboard/teams) page under **Identity Provider Details**.

### Step 6: Enable the RelayState parameter on your AD FS servers

Next, you must enable the RelayState parameter on your AD FS servers.

* For AD FS 2.0, open the following file in a text editor:

    ```shell
    %systemroot%\inetpub\adfs\ls\web.config
    ```

* For AD FS 3.0, open the following file in a text editor:

    ```shell
    %systemroot%\ADFS\Microsoft.IdentityServer.Servicehost.exe.config
    ```

1. In the `<microsoft.identityServer.web>` section, add a line for __useRelyStateForIdpInitiatedSignOn__ as follows, and save the change:

    ```shell
    <microsoft.identityServer.web>    ... <useRelayStateForIdpInitiatedSignOn enabled="true" />    ...</microsoft.identityServer.web>
    ```

1. For AD FS 2.0, run IISReset to restart IIS.
1. For both platforms, restart the Active Directory Federation Services (`adfssrv`) service.

    > If you're using AD FS 3.0 you only need to do the above on your AD FS 3.0 servers, not the WAP servers.

1. Ensure that `<useRelayStateForIdpInitiatedSignOn enabled="true" />` has been added at `microsoft.identityServer.web`, then generate a URL encoded string from the relay state and the Entity ID as follows. There are two pieces of information you need to generate the RelayState URL:

    * The relying party's identifier, which you can find in the AD FS Management Console. View the Identifiers tab on the relying party's property page.
    * The actual RelayState value that you need to send to the relying Party. The example below uses the relying party identifier of `https://identity-example.getpostman.com` and the relay state of `35ef7ab89gh99hh00`.
    * Starting values:

        * **RPID** - `https://identity-example.getpostman.com`
        * **Relay State** - `35ef7ab89gh99hh00`

    > You should use a trusted URL encoder to generate the encode values.

1. URL encode each value.

    * **RPID** - `https%3A%2F%2Fidentity-example.getpostman.com`
    * **Relay State** - `35ef7ab89gh99hh00`

1. Merge the URL encoded values with the string below, and URL encode the whole string.

    * **String** - `RPID=<URL encoded RPID>&RelayState=<URL encoded RelayState>`
    * **String with values** - `RPID=https%3A%2F%2Fidentity-example.getpostman.com&RelayState=35ef7ab89gh99hh00`
    * **URL encoded string** - `RPID%3Dhttps%253A%252F%252Fidentity-example.getpostman.com%26RelayState%3D+35ef7ab89gh99hh00`

1. Take the final string and append it to the IDP initiated sign-on URL.

    * An example IDP initiated sign-on URL would have the following structure: `https://adfs.contoso.com/adfs/ls/idpinitiatedsignon.aspx`
    * **Final URL** - `https://adfs.contoso.com/adfs/ls/idpinitiatedsignon.aspx?RelayState=RPID%3Dhttps%253A%252F%252Fidentity-example.getpostman.com%26RelayState%3D+35ef7ab89gh99hh00`

The first time you sign in from Azure AD, go to the final URL in the browser. This sets the relay state and enables users to sign in with SSO in the future.
