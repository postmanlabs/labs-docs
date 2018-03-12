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

#### Postman app

In the Postman app, click the "Build" menu in the Status bar at the bottom of the screen.

Select "Browse" and then click "Monitors" at the top of the page.

Click the **Monitor a collection** button if there are existing collections. Or click the **Monitor this collection in this workspace** button if no collections exist in the workspace.

In the CREATE A MONITOR modal, enter and select the appropriate information, and then click US (Static IP) to monitor static IPs.

https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-create-a-monitor.png
