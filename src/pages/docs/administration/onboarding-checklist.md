---
title: "Onboarding Checklist"
order: 264
page_id: "onboarding_checklist"
warning: false
contextual_links:
  - type: section
    name: "Additional Resources"
  - type: link
    name: "Postman Pricing"
    url: "https://www.postman.com/pricing"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Announcing updated Postman plans and pricing"
    url: "https://blog.postman.com/2020/01/06/announcing-updated-postman-plans-and-pricing/"

---

What is this page about?

## Contents

* [Setting up Postman](#setting-up-postman)
    * [Functionality Tests](#functionality-tests)
    * [Send Invites](#send-invites)
    * [Enable Team Discovery](#enable-team-discovery)

## Setting up Postman

Make contact with your IT team to establish what the procedure is for adding a new piece of software. This varies from organization to organization, however, the following points are common:

* IT team to make an exception to device policy allowing for Postman to be installed on employee’s workstations. Provide a [Postman download link​](https://www.getpostman.com/downloads/) to the IT team to help establish this exception.
* If your organization's network connection is facilitated via a proxy, you may need to configure Postman appropriately. Retrieve proxy connection details from your IT team and [​setup within Postman](https://learning.getpostman.com/docs/postman/sending_api_requests/proxy/)​.
* IT team to whitelist Postman’s domains to ensure Postman data is synced with the cloud and all functionality works as expected. By default, WebSocket connections use the same ports as HTTP (80) and HTTPS (443). Ensure your network firewall allows WebSocket connections for Postman's services by whitelisting the following domains:

    - *.postman.com
    - *.getpostman.com
    - *.postman.co
    - *.pstmn.io

* IT team to enable static IPs for monitoring. Currently, static IPs are available only for the US east and US west regions. If you selected a Static IP region on your monitors, you will have to whitelist the following IP addresses:

    - 34.201.186.27 for US - east
    - 52.89.173.88 for US - west

* Update the your [team settings](https://go.postman.co/settings/team/general). You can find out more about the team settings in [Team Settings](/docs/postman/collaboration/team-settings/) on the Learning Center.
* IT team to configure single-sign-on (SSO). For step by step instructions for integrating with a number of identity providers please see [Configuring SSO for a team](/docs/administration/sso/admin-sso/) on the Learning Center.

### Functionality Tests

Before we kick-off in full, it’s best for us to check-in on the workings of the Postman app within your organization and ensure everything works as expected. Depending on your organization's IT policy you may need to make requests of your IT team in order to get up and running.

Ensure you are connected to your organization's network and test the following:

* Can you ​[execute a request](/docs/postman/sending_api_requests/requests)​ to example.com within Postman?
* Can you execute a request to one of your internal/private APIs?
* Save a request inside a [​Collection​](/docs/postman/collections/creating_collections). Visit ​go.postman.co​, has your Collection and Request synced with Postman’s cloud?

Repeat these checks on a colleague’s workstation. If everything worked, your workstations and network are ready to support Postman Enterprise! Else, if you experienced a hiccup, [​let us know](https://getpostman.com/support) and please read on.

### Send Invites

Add your teammates from your [team dashboard](https://go.postman.co/team) or by generating a shareable link and inviting them through a direct email. You can find out how to do that in [Managing Your Team](/docs/postman/collaboration/managing-your-team/#inviting-to-a-team) on the Learning Center.

![Invite Users](https://assets.postman.com/postman-docs/Screen%20Shot%202019-11-12%20at%201.18.07%20PM.png)

### Enable Team Discovery

When team discovery is enabled, users in your organization can see teams to join when they access their Postman accounts. Anyone signing in with a company email address is presented with available teams and can make a request to join each one. Administrators will receive a notification and can approve or deny access from there.

![Team Discovery](https://blog.postman.com/wp-content/uploads/2019/10/enable-discovery-768x189.png)

This kind of automation makes Postman’s collaboration features more discoverable to users, and allows your team participation to scale up along with your successful API projects.

