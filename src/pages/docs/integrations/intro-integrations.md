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
    url: "https://blog.postman.com/2018/04/13/integrations-how-postman-plays-with-some-of-your-favorite-tools/"
---

> __[Integrations are available on Postman Team, Business, and Enterprise plans.](https://www.getpostman.com/pricing)__

Postman provides an API development toolchain aimed at integrating with your workflow.

The Postman team develops an open ecosystem in conjunction with industry partners to build integrations that facilitate your API projects.

Integrations allow you to automate sharing data and functionality between Postman and other tools you might be using for your API development.

> If you use GitHub or GitLab for your repository management and use Postman to develop and test your APIs, you can save your Postman Collections to your repositories with the [Postman to GitHub integration](/docs/integrations/available-integrations/github/) and [Postman to GitLab integration](https://learning.postman.com/docs/integrations/available-integrations/gitlab/).

## Accessing integrations

You can access integrations by navigating to your workspace in the [web dashboard](https://go.postman.co/workspaces), then selecting **Integrations**.

![Workspace Integrations](https://assets.postman.com/postman-docs/workspace-integrations-api.jpg)

Select __Browse Integrations__. Click __View Details__ to see an overview of an integration then add it to your workspace.

## Static IP Support for Integrations

You can use static IP addresses to enable integrations that need to access hosted (private) networks behind firewalls that require whitelisted IP addresses. You will need to whitelist the static IP `3.212.102.200` in your firewall to enable data backup integrations. All Postman network calls to your domain will come from this IP address. Whitelisting this IP address will allow the integrations work as expected.

Postman supports implementing static IP addresses for the following integration services:

- [Custom Webhooks](https://learning.postman.com/docs/integrations/webhooks/)
- [GitHub Custom Domain Backup](https://learning.postman.com/docs/integrations/available-integrations/github/#backup-collections-to-github-on-custom-domain)
- [GitLab Custom Domain Backup](https://learning.postman.com/docs/integrations/available-integrations/gitlab/#backup-your-postman-collections-to-gitlab-on-a-custom-domain)
