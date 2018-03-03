---
title: "Audit logs"
page_id: "audit_logs"
tags: 
  - "enterprise"
warning: false
---

Audit logs are an Enterprise-only feature that lists team events. This will help admin users identify when changes were made to
the team composition or team settings. Audit logs will show the user who performed the action, and the time of occurrence. 
Audit logs currently include events around team management, billing, and security. More events like documentation being 
published, and API Keys / monitors created will soon be added to this list.


Here's a list of events that are currently logged:


| Action name  |   Human readable name     | Description         |
| ---   |   ---     | ---   |
|team.add_domain  |Added Domain    | x  |
|team.add_member  | x   | x  |
|team.cancel_invite  |  x    | x  |
|team.customauth.create   |   x   | x  |
|team.customauth.disable   |  x     | x  |
|team.customauth.enable  |  x    | x  |
|team.customauth.remove  |  x    | x  |
|team.customauth.update  |  x    | x  |
|team.decrease_size  |  x    | x  |
|team.delete_domain  |  x    | x  |
|team.increase_size  |  x    | x  |
|team.modify_future_plan |  x    | x  |
|team.name_updated  |  x    | x  |
|team.remove_member  |  x    | x  |
|team.retry_invoice_success |  x    | x  |
|team.send_invite  |  x    | x  |
| team.start_enterprise  |  x    | x  |
|team.update_domain_verification  |  x    | x  |
|team.update_user_roles  |  x    | x  |
|team.url_updated  |  x    | x  |
