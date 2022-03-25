---
title: "Working with certificates"
order: 29
updated: 2022-03-24
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

Mutual TLS (mTLS) is an authentication method that requires both the client and the server to verify their identity with a certificate. Once both parties are verified, an encrypted connection is established. To connect to an API that uses mTLS, you need to add a client certificate to Postman.

You can also add a custom CA certificate to Postman. If an endpoint uses a certificate that's registered with an internal certificate registry, requests sent from Postman will fail with a "self signed certificate" error. Adding a custom CA certificate will enable you to send requests to the endpoint without needing to [turn off SSL verification](#troubleshooting-certificate-errors).

## Contents

* [Managing certificates](#managing-certificates)
    * [Adding CA certificates](#adding-ca-certificates)
    * [Adding client certificates](#adding-client-certificates)
    * [Editing a certificate](#editing-a-certificate)
    * [Removing a certificate](#removing-a-certificate)
* [Using a certificate](#using-a-certificate)
    * [Verifying a certificate was sent](#verifying-a-certificate-was-sent)
    * [Viewing certificate details](#viewing-certificate-details)
    * [Troubleshooting certificate errors](#troubleshooting-certificate-errors)

## Managing certificates

In the Postman settings, you can view installed certificates, add a new certificate, or remove a certificate.

1. Select the gear icon <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-gear-outline-v9.jpg#icon" width="18px"> in the Postman header and select **Settings**.
1. Select the **Certificates** tab.

[![Certificates tab](https://assets.postman.com/postman-docs/certificates-settings-tab-v9-14.jpg)](https://assets.postman.com/postman-docs/certificates-settings-tab-v9-14.jpg)

### Adding CA certificates

To avoid "self signed certificate" errors when sending requests, add your custom CA certificate to Postman.

1. Turn on the toggle switch next to **CA Certificates**.
1. Select the **PEM file** for your CA certificate. (The PEM file can contain multiple CA certificates.)

[![Adding a CA certificate](https://assets.postman.com/postman-docs/certificates-add-ca-cert-v9-14.jpg)](https://assets.postman.com/postman-docs/certificates-add-ca-cert-v9-14.jpg)

### Adding client certificates

To send requests to an API that uses mutual TLS authentication, add your client certificate to Postman:

1. Select **Add Certificate**.
1. Enter the **Host** domain for the certificate (don't include the protocol). For example, enter `postman-echo.com` to send requests to the [Postman Echo API](https://www.postman.com/postman/workspace/published-postman-templates/documentation/631643-f695cab7-6878-eb55-7943-ad88e1ccfd65).

    You can optionally enter a custom port number to associate with this domain. If you don't specify a port, Postman uses the default HTTPS port (443).

1. Select the **CRT file** and the **Key file** for your certificate *OR* select the **PFX file** for your certificate.
1. If you used a **Passphrase** when generating the client certificate, enter it in the box. Otherwise, leave the box blank.
1. Select **Add**.

[![Adding a client certificate](https://assets.postman.com/postman-docs/certificates-add-client-cert-v9-14.jpg)](https://assets.postman.com/postman-docs/certificates-add-client-cert-v9-14.jpg)

> Each client certificate is specific to a domain. To send requests to more domains, add the appropriate certificate for each domain. Don't add more than one certificate for the same domain. If you add more than one certificate for a domain, Postman will use the last certificate added.

### Editing a certificate

You can't edit a certificate after adding it. To make changes, first [remove the certificate](#removing-a-certificate), then generate a new certificate and add it to Postman.

> [Let's Encrypt](https://letsencrypt.org/) SSL certificates have a lifetime of 90 days. Let's Encrypt recommends using an [ACME client](https://letsencrypt.org/docs/client-options/) to automatically renew your certificate every 60 days.

### Removing a certificate

Remove a certificate if you no longer need it to send requests from Postman.

* To remove a CA certificate, select the remove icon <img alt="Close icon" src="https://assets.postman.com/postman-docs/icon-close.jpg#icon" width="16px"> next to the certificate
* To remove a client certificate, select **Remove** next to the certificate.

## Using a certificate

After adding a client certificate, you don't have to perform any extra steps to use the certificate in Postman. When you make an HTTPS request to a configured domain, Postman automatically sends the client certificate with the request. (Postman won't send the certificate if you make an HTTP request.)

### Verifying a certificate was sent

You can verify a certificate was sent using the [Postman Console](/docs/sending-requests/troubleshooting-api-requests/). Open the Postman console by selecting **Console** in the Postman footer, and then send a request.

In the example below, Postman sent the certificate because the request used `https://`. You can expand the request to view details about the certificate that was sent with the request.

[![Certificate details in console](https://assets.postman.com/postman-docs/certificates-console-details-v9-14.jpg)](https://assets.postman.com/postman-docs/certificates-console-details-v9-14.jpg)

### Viewing certificate details

You can view more certificate details in the response pane below the request. The globe icon <img alt="Network information locked icon" src="https://assets.postman.com/postman-docs/icon-globe-locked.jpg#icon" width="16px"> includes a padlock if a request was sent using HTTPS. Hover over the globe icon to view information about the certificate that was sent with the request, and any warnings or errors such as self-signed or expired certificates.

[![Network details](https://assets.postman.com/postman-docs/certificates-network-details-v9-14.jpg)](https://assets.postman.com/postman-docs/certificates-network-details-v9-14.jpg)

### Troubleshooting certificate errors

If certificate verification fails when sending a request, Postman displays an error message in the response pane.

To fix the error, try turning off SSL verification for the request:

1. Open the request and select the **Settings** tab.
1. Turn off the toggle next to **Enable SSL certificate verification**.
1. Send the request again.

[![SSL certificate verification](https://assets.postman.com/postman-docs/certificates-ssl-verification-v9-14.jpg)](https://assets.postman.com/postman-docs/certificates-ssl-verification-v9-14.jpg)

> You can turn off SSL verification globally in the [Postman settings](/docs/getting-started/settings/) on the **General** tab.

If SSL verification is turned off, you can hover over the globe icon <img alt="Network information error icon" src="https://assets.postman.com/postman-docs/icon-globe-error.jpg#icon" width="16px"> in the response pane to see details about any certificate errors or warnings.

[![Network information error](https://assets.postman.com/postman-docs/certificates-network-error-v9-14.jpg)](https://assets.postman.com/postman-docs/certificates-network-error-v9-14.jpg)

You can also find more information about certificate errors in the [Postman console](/docs/sending-requests/troubleshooting-api-requests/).

[![Console certificate error](https://assets.postman.com/postman-docs/certificates-console-error-v9-14.jpg)](https://assets.postman.com/postman-docs/certificates-console-error-v9-14.jpg)
