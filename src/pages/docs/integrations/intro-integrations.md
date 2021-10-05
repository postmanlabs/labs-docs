---
title: "Integrating with Postman"
order: 161
page_id: "intro_integrations"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Grouping requests in collections"
    url: "/docs/sending-requests/intro-to-collections/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Integrations: how Postman plays with some of your favorite tools"
    url: "https://blog.postman.com/integrations-how-postman-plays-with-some-of-your-favorite-tools/"
---

Postman provides an API development toolchain aimed at integrating with your workflow. The Postman team develops an open ecosystem in conjunction with industry partners to build integrations that facilitate your API projects. Integrations allow you to automate sharing data and functionality between Postman and other tools you might use for your API development.

> **The maximum number of integrations you can use is determined by your Postman plan. [Learn more about what's included with each plan](https://www.postman.com/pricing/).**

## Contents

* [Accessing integrations](#accessing-integrations)
* [Static IP support](#static-ip-support)
* [CI integrations](#ci-integrations)

## Accessing integrations

You can access integrations by navigating to [Browse Integrations](https://go.postman.co/integrations/browse) from your [Home page](http://go.postman.co/) and selecting "Integrations" from the menu on the left. Search and select the integration you wish to add to your workspace.

![Workspace Integrations](https://assets.postman.com/postman-docs/browse-integrations.jpg)

Each integration's page explains how to use the integration and what it could do. If available, you can select **View** or **View All** to view previously configured integrations for the selected integration.

![Workspace Integrations](https://assets.postman.com/postman-docs/integrations-from-teammates.jpg)

Select __Add Integration__ to configure your integration. Enter the required information for account and access authorization. Select your workspace to add the integration to and complete the setup process.

![Add Integrations](https://assets.postman.com/postman-docs/add-integration-b.jpg)

## Static IP support

You can use static IP addresses to enable integrations and custom webhooks for Postman Collection backups that need to access hosted (private) networks behind firewalls that require whitelisted IP addresses.

Contact your IT team to whitelist the following static IP in your firewall to enable collection backup integrations and webhooks:

* US East: `3.212.102.200`

Once you whitelist this IP address, calls for the integrations and webhooks will be able to connect to your network and allow the integrations and webhooks to work as expected.

> DNS records should use the public IP address for instances which are behind a firewall or not accessible via the internet.

Postman supports implementing static IP addresses for the following integrations and webhooks:

* [Custom Webhooks](https://learning.postman.com/docs/integrations/webhooks/)
* [GitHub Custom Domain Backup](https://learning.postman.com/docs/integrations/available-integrations/github/#backup-collections-to-github-on-custom-domain)
* [GitLab Custom Domain Backup](https://learning.postman.com/docs/integrations/available-integrations/gitlab/#backup-your-postman-collections-to-gitlab-on-a-custom-domain)

## CI integrations

Postman integrates with some of the most widely-used Continuous Integration and Continuous Delivery (CI/CD) tools. After you set up CI integration for your API, you can view the status of builds or kick off a new build, all from within Postman. You can also run API tests created in Postman as part of your CI pipeline.

To learn more about how CI integrations work, and for detailed configuration steps, see [CI integrations](/docs/integrations/ci-integrations/).
