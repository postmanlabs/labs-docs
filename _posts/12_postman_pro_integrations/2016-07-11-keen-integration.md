---
category: "docs"
title: "Keen IO Integration"
page_id: "keen_integration"
tags: 
  - "integrations"
  - "keen"
warning: false
---

**Push Monitor results into Keen Streams for API-based computation & S3 backups**

Keen IO can be used for API-based computation, Amazon S3 backups, and building visualizations and dashboards for your APIs.  Connect your Postman Monitor results to Keen Streams with the Postman Pro to Keen Integration.

**Retrieve your Keen IO project ID and API Key**

[Log in][0] to Keen IO.  Find the Organization and Project you’d like to stream Postman Monitor data to.  Go to your Project’s Settings and select API Keys.  Make a note of your Project ID and API key for later.

[]()[1]

**Push Monitor results to Keen Streams**

From the [Integrations page][2]: select Keen IO from a list of Postman's 3rd party Integrations for Postman Pro users.

[]()[3]

Click Add to connect Keen IO to Postman Monitors to generate events on every run.

[]()[4]

Choose a Monitor, enter the Keen IO Project ID and API Key from before, and Submit. You can send the results of multiple Monitors to the same Keen IO collection.

[]()[5]

**How your data appears in Keen IO**

Within a few minutes, you should start to see data flowing into Keen IO provided your Monitor is running.  If you’ve sent the results of multiple Postman Monitors to Keen, you’ll be able to segment by monitor name/id, collection name/id, error code, etc.

Here’s a preview of analyses from the Postman Monitors integration. You can build visualizations into dashboards that your team or customers can view, by utilizing Keen dashboard templates: here.

[]()[6]

[0]: https://keen.io/home/
[1]: placeholder
[2]: https://app.getpostman.com/dashboard/integrations
[3]: placeholder
[4]: placeholder
[5]: placeholder
[6]: placeholder
