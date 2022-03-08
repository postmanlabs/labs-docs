---
title: "Working with certificates"
order: 29
updated: 2021-03-10
page_id: "certificates"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Setting up Postman"
    url: "/docs/getting-started/settings/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Encryption, SSL/TLS, and Managing Your Certificates in Postman"
    url: "https://blog.postman.com/encryption-ssl-tls-and-managing-your-certificates-in-postman/"

warning: false

---

Certificates enable making encrypted calls to APIs using Transport Layer Security (TLS) and Secure Sockets Layer (SSL). Many APIs require requests to be sent over an encrypted connection and will reject requests that are not secure. To send encrypted requests to an API, add a certificate in Postman.

You can add two types of certificates:

* **CA certificates** are issued by a trusted certificate authority and provide the highest level of control over security and encryption.
* **Client certificates** are self-signed rather than issued by a certificate authority. You can configure the domain and passphrase for the self-signed certificate.

> Certificates in Postman are added on a per-domain basis. To send encrypted requests to additional domains, add the appropriate certificate for each domain.

## Contents

* [Managing certificates](#managing-certificates)
    * [Adding CA certificates](#adding-ca-certificates)
    * [Adding client certificates](#adding-client-certificates)
    * [Editing a certificate](#editing-a-certificate)
    * [Removing a certificate](#removing-a-certificate)
* [Using a certificate](#using-a-certificate)
* [Viewing certificate details](#viewing-certificate-details)

## Managing certificates

You can view currently installed certificates, add a new certificate, or remove a certificate, in the Postman settings.

1. Select the gear icon <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-gear-outline-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> in the Postman header and select **Settings**.
1. Select the **Certificates** tab.

[![certificates tab](https://assets.postman.com/postman-docs/WS-certificates.png)](https://assets.postman.com/postman-docs/WS-certificates.png)

### Adding CA certificates

To add a certificate issued by a certificate authority to Postman:

1. Turn on the toggle switch next to **CA Certificates**.
1. Use the **Select file** button to select the PEM file for your CA certificate, and then select **Open**.

SCREENSHOT - CA CERT INSTALLED

### Adding client certificates

To add a client certificate to Postman:

1. Select **Add Certificate**.

In the **Host** field, enter the domain (without protocol) of the request URL for which you want to use the certificate, for example, `https://postman-echo.com` ([view Collection for Postman Echo](https://www.postman.com/postman/workspace/published-postman-templates/documentation/631643-f695cab7-6878-eb55-7943-ad88e1ccfd65)).

You can also specify a custom port to associate with this domain in the **Port** field. This is optional. If left empty, the default HTTPS port (443) will be used.

Choose your client certificate file in the **CRT file** field. Currently, Postman only supports the CRT format. Support for other formats (like PFX) will come soon.

Choose your client certificate key file in the **KEY file** field.

If you used a passphrase while generating the client certificate, you’ll need to supply the passphrase in the **Passphrase** field. Otherwise, leave it blank.

[![add certificate](https://assets.postman.com/postman-docs/addcertificate.png)](https://assets.postman.com/postman-docs/addcertificate.png)

Once your certificate is added, it should appear in the client certificates list.

[![client certificates list](https://assets.postman.com/postman-docs/clientcertificateslist.png)](https://assets.postman.com/postman-docs/clientcertificateslist.png)

**NOTE:** You should not have multiple certificates set for the same domain. If you have multiple ones set, only the last one added will be used.

### Editing a certificate

You cannot edit a certificate after it has been created. To make changes to it, you will need to remove the certificate and create a new one.

> Let's Encrypt SSL certificates renew automatically—you do not need to carry out any manual steps. When a certificate is generated it has a 90 day expiry date and will renew seven days before it expires

### Removing a certificate

To remove a certificate, use the **Remove** link next to the certificate under the **Certificates** tab in the Settings.

[![remove certificate](https://assets.postman.com/postman-docs/removecertificate.png)](https://assets.postman.com/postman-docs/removecertificate.png)

## Using a certificate

You do not have to perform any extra steps to use a client certificate if it has been added. If you make a request to a configured domain, the certificate will automatically be sent with the request, provided you make the request over HTTPS.

To verify the certificate was sent, open the Postman console by selecting **Console** in the status bar at the bottom left of Postman. Learn more about the [Postman Console](/docs/sending-requests/troubleshooting-api-requests/).

Now, send a request to `https://postman-echo.com/get`. Keep the Postman Console open if Postman version is lower than `v7.10`. Notice we’re using `https` to make sure the certificate is sent. Once the response arrives, switch over to the Postman console to see your request. If you expand your request, you will be able to see which certificate was sent along with the request.

[![Postman console view](https://assets.postman.com/postman-docs/postmanconsoleviewcertificates.png)](https://assets.postman.com/postman-docs/postmanconsoleviewcertificates.png)

## Viewing certificate details

Postman will indicate certificate information in the __Network__ response pop-up for any HTTPS requests you send, including warnings and errors such as self-signed and expired certificates.

[![Network info](https://assets.postman.com/postman-docs/network-info-response.jpg)](https://assets.postman.com/postman-docs/network-info-response.jpg)

You can also see certificate info in the [console](/docs/sending-requests/troubleshooting-api-requests/).

<img alt="Certificate info in console" src="https://assets.postman.com/postman-docs/certificate-info-in-console.jpg" width="300px"/>

If certificate verification fails, Postman will display an error message.

<img alt="Certificate verification fail" src="https://assets.postman.com/postman-docs/certificate-verification-fail.jpg" width="500px"/>

You will see the error in the response area if you have SSL verification turned on. __Disable SSL Verification__ to turn off the setting globally and rerun the request.

<img alt="Verification error" src="https://assets.postman.com/postman-docs/response-error-disable-ssl.jpg" width="300px"/>

If you have SSL verification switched off either globally or for the individual request, you will see the detail of any errors or warnings in the response __Network__ information.

<img alt="Certificate error" src="https://assets.postman.com/postman-docs/certificate-error-in-network-info.jpg" width="400px"/>

You can find more information about failed certification in the [console](/docs/sending-requests/troubleshooting-api-requests/).

<img alt="Certificate fail in console" src="https://assets.postman.com/postman-docs/console-certificate-fail.jpg" width="600px"/>

You can toggle SSL verification on and off by default in the Postman __Settings__ (select the gear icon <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-gear-outline-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> at the top right) or for a specific request in the __Settings__ tab.

[![Request SSL](https://assets.postman.com/postman-docs/request-ssl-toggle.jpg)](https://assets.postman.com/postman-docs/request-ssl-toggle.jpg)
