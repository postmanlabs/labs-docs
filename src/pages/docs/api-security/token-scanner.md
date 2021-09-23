---
title: "Token Scanner"
order: 115
page_id: "token-scanner"
search_keyword: "password security, secret scanning, secret, API key security"
warning: false
contextual_links:
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "2 Big Improvements to the Postman Token Scanner"
    url: "https://blog.postman.com/2-big-improvements-to-the-postman-token-scanner/"
---

The Postman Token Scanner scans your public workspaces, collections, environments, and documentation to find accidentally exposed tokens. This protects your organization and prevents malicious users from exploiting the tokens.

> Token Scanner is available on all Postman plans and is enabled by default.

## Contents

* [Use cases](#use-cases)
* [Supported tokens](#supported-tokens)
    * [Default alerts](#default-alerts)
    * [Custom alerts](#custom-alerts)

## Use cases

A scan is triggered whenever your team members do any of the following actions:

* Change the workspace visibility to Public.
* Share a collection or environment to a public workspace.
* Make changes to a collection or environment that is present in a public workspace.
* Author new documentation for a Postman Collection and make it public.
* Make any changes to publicly available Postman documentation.

Scan results are displayed in [Security audit reports](/docs/designing-and-developing-your-api/view-and-analyze-api-reports/#security-audit-reports) on the **Reports** section of the web dashboard.

## Supported tokens

The Token Scanner will scan a variety of tokens by default. You can also add your team's proprietary third-party app tokens that are not supported yet using [custom alerts](#custom-alerts).

### Default alerts

By default, tokens issued by the following service providers are scanned:

* Airtable API Key
* Basic Auth
* Bearer Token
* DSA Private Key
* EC2 SSH Private Key
* GitHub Personal Access Token
* Google API Key
* Google OAuth Token
* OpenSSH Private Key
* PGP Private Key
* Postman API Key
* RSA Private Key
* Slack Webhook URL
* Stripe Restricted Key
* Stripe Secret Key
* Telegram Bot Access Token
* Twilio API Key

### Custom alerts

Custom alerts can be used to scan your team's proprietary and third-party app tokens that are not scanned by default.

> **[Custom alerts are available only on Postman Enterprise plan](https://www.postman.com/pricing/)**.

Your team can add a total of five alerts. You must be a **Community Manager** or member with both **Developer** and **Admin** roles to add custom alerts.

To add custom alerts:

1. Go to **Team Settings** > **Token Scanner**.
2. In the **Custom alerts** section, click **Add Alert**.
3. In the **Add Alert** page, define the custom token.
