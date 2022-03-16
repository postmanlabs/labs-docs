---
title: "Lightstep"
updated: 2022-03-14
search_keyword: "lightstep, servicenow"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Grouping requests in collections"
    url: "/docs/sending-requests/intro-to-collections/"
---

[Lightstep Incident Response](https://lightstep.com/incident-response) is an incident response platform from ServiceNow, which offers the ability to observe, assess, resolve, and escalate alerts and issues in enterprise and DevOps applications.

ServiceNow has created a Postman integration for Lightstep. This integration ingests Postman monitoring alerts into Lightstep to give visibility and remediation guidance for ops and support teams. When a configured Postman monitor fails, an alert is sent to Lightstep. Postman's [webhooks integration](/docs/integrations/webhooks/) is used to add the integration to Postman.

To use Lightstep with Postman, use the Postman integration within Lightstep to create a webhook. Then, add a webhook integration in Postman and add the URL of the Lightstep webhook.

See the [Lightstep documentation for the Postman integration](https://lightstep.com/incident-response/docs/integrations-postman) for a complete procedure on how to add a Postman integration to Lightstep.
