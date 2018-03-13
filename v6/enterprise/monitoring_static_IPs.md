---
title: Monitoring static IPs
page_id: “monitoring_static_IPs"
tags: 
  - "enterprise"
warning: false
---


Static IPs are fixed IP addresses. Services with assigned static IP addresses use the same IP address to connect to the Internet. Companies often use fixed IP addresses to more easily connect to services over the Internet, or redirect domain names to their servers. 

By default, Postman Monitors access APIs from dynamic IP addresses. For Enterprise users who want to test APIs behind a whitelist restricted firewall, Postman provides the option to monitor APIs from a static IP address. 

By whitelisting a single static IP address, customers can monitor their APIs using Postman’s monitoring service, while conforming to company security policies. 

#### Monitoring APIs from a static IP address in an existing monitor

In the Postman app, click the "Build" dropdown menu and select "Browse".

[![build menu](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-build-menu1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-build-menu1.png)

At the top of the page, select "Monitors". 

Choose the monitor and click the **Edit** button.

In the **EDIT MONITOR** modal, select "US (Static IP)" in "Regions" and click the **Save Changes** button to complete the process.

[![static IP monitor](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-select-staticIP.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-select-staticIP.png)



