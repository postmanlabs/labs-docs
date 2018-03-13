---
title: Monitoring static IPs
page_id: “monitoring_static_IPs"
tags: 
  - "enterprise"
warning: false
---


Static IPs are fixed IP addresses. Services with assigned static IP addresses use the same IP address to connect to the Internet. Companies often use fixed IP addresses to more easily connect to services over the Internet, or redirect domain names to their servers. 

By default, monitors access APIs from dynamic IP addresses. For Enterprise users that want to test APIs behind a whitelist restricted firewall, Postman provides the option to monitor APIs from a static IP address. By whitelisting a single static IP address, customers can monitor their APIs using Postman’s monitoring service, while conforming to company security policies. 

### Monitoring APIs from a static IP address

To monitor APIs from a static IP address in an existing monitor:

How to get there and select "Monitors". 

Choose the monitor and click the **Edit** button.

In the EDIT MONITOR modal, select "US (Static IP)" in "Regions".

[![static IP monitor](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-select-staticIP.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-select-staticIP.png)




#### Postman app

In the Postman app, click the "Build" menu in the Status bar at the bottom of the screen.

Select "Browse" and then click "Monitors" at the top of the page.

You can either add a static IP monitor on an existing collection, or create a mon

Click the **Monitor a collection** button if there are existing collections. Or click the **Monitor this collection in this workspace** button if no collections exist in the workspace.

In the Regions sectopm of the modal, click "US (Static IP)" to monitor static IPs. For more information about creating a monitor, see 

[![static IP monitor](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-create-a-monitor.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-create-a-monitor.png)


