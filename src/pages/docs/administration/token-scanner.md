---
title: "Token Scanner"
order: 115
page_id: "token-scanner"
updated: 2021-11-09
search_keyword: "password security, secret scanning, secret, API key security"
warning: false
contextual_links:
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Postman Token Scanner | Postman Level Up"
    url: "https://youtu.be/9XxkqPQF-Rw"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "2 Big Improvements to the Postman Token Scanner"
    url: "https://blog.postman.com/2-big-improvements-to-the-postman-token-scanner/"
  - type: subtitle
    name: "Public Workspaces"
  - type: link
    name: "Postman Security"
    url:  "https://www.postman.com/postman/workspace/62d58d93-7e0c-45bf-9daa-cc8e531fc344"
---

The Postman Token Scanner scans your public workspaces, collections, environments, and documentation to find exposed authentication tokens. This protects your organization and prevents malicious users from exploiting the tokens.

> The Token Scanner is available on all Postman plans and is turned on by default.

## Contents

* [Use cases](#use-cases)
* [Supported tokens](#supported-tokens)
    * [Default alerts](#default-alerts)
    * [Custom alerts](#custom-alerts)
* [Token scanner dashboard](#token-scanner-dashboard)
* [Protecting Postman API keys in GitHub](#protecting-postman-api-keys-in-github)

## Use cases

A scan starts whenever team members do any of the following actions:

* Change the workspace visibility to Public.
* Share a collection or environment to a public workspace.
* Make changes to a collection or environment that's present in a public workspace.
* Write new documentation for a Postman Collection and make it public.

Postman delivers the scan results in the [Security audit reports](/docs/reports/security-audit-reports/) section of the [**Reports** dashboard](/docs/reports/reports-overview/).

> **[Security Audit Reports are available on Postman Enterprise plans.](https://www.postman.com/pricing/)**

## Supported tokens

The Token Scanner will scan a variety of tokens by default. You can also add your team's proprietary third-party app tokens that aren't supported yet using [custom alerts](#custom-alerts).

### Default alerts

By default, the Token Scanner scans tokens issued by the following service providers:

* Airtable API Key
* Akamai API Key
* Amazon MWS Token
* Basic Auth
* Bearer Token
* Clojars Deploy Token
* Databricks Authentication Token
* DSA Private Key
* EC2 SSH Private Key
* Firebase Cloud Messaging API Key
* GitHub Personal Access Token
* Google API Key
* Google OAuth Token
* Microsoft Outlook Team Webhook URL
* New Relic User Key
* OpenSSH Private Key
* PGP Private Key
* Postman API Key
* RSA Private Key
* SendGrid API Key
* Sendinblue Key
* Shopify Key
* Slack Webhook URL
* Square Access Key
* Square Access Token
* Square OAuth Secret
* Stripe Restricted Key
* Stripe Secret Key
* Telegram Bot Access Token
* Twilio API Key
* Twitter Bearer Token
* Typeform API Key
* Zapier Webhook URL

### Custom alerts

You can use custom alerts to scan your team's proprietary tokens and any third-party app tokens that aren't scanned by default.

> **[Custom alerts are available on Postman Enterprise plans.](https://www.postman.com/pricing/)**

Your team can add a total of five alerts. You must be a **Community Manager** or member with both **Developer** and **Admin** roles to add custom alerts.

To add custom alerts, do the following:

1. Go to **Team** > **Team Settings** > **Token scanner**.
2. In the **Custom alerts** section, select **Add Alert**.
3. On the **Add Alert** page, define the custom token.

## Token scanner dashboard

You can view your team's configured [default](#default-alerts) and [custom](#custom-alerts) alerts in your [data security dashboard](https://go.postman.co/settings/team/token-scanner). Select **Team** in the upper-right > **Team Settings**. Then, select **Data security** on the left, and select **Token scanner**.

<img alt="Data security dashboard" src="https://assets.postman.com/postman-docs/data-security-dashboard.jpg"/>

## Protecting Postman API keys in GitHub

Postman also works with GitHub to ensure that your Postman API keys are secure. If you commit a valid Postman API key to a public GitHub repository, Postman notifies you by email and in-app notification. You can also set up Postman's [Slack integration](/docs/integrations/available-integrations/slack/) to alert you in Slack if this occurs.

It's recommended you delete the exposed API key in your [API keys dashboard](https://go.postman.co/settings/me/api-keys). You can then [generate a new API key](/docs/developer/intro-api/#generating-a-postman-api-key) to continue working with the Postman API.
