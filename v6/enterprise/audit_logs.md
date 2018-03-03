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
|team.add_member  |Added Member   | x  |
|team.cancel_invite  |Cancelled Invite    | x  |
|team.customauth.create   |Custom auth scheme created   | x  |
|team.customauth.disable   |Custom auth scheme disabled     | x  |
|team.customauth.enable  |Custom auth scheme enabled    | x  |
|team.customauth.remove  |Custom auth scheme removed    | x  |
|team.customauth.update  |Custom auth scheme updated   | x  |
|team.decrease_size  |Decreased Team Size   | x  |
|team.delete_domain  |Deleted Domain    | x  |
|team.increase_size  |Increased Team Size    | x  |
|team.modify_future_plan |Set Instructions For Next Billing Cycle    | x  |
|team.name_updated  |Team name changed    | x  |
|team.remove_member  |Removed Member    | x  |
|team.retry_invoice_success |	Successfully Retried Invoice    | x  |
|team.send_invite  |Sent Invite    | x  |
| team.start_enterprise  |Started Pro    | x  |
|team.update_domain_verification  |	Updated domain verification    | x  |
|team.update_user_roles  |Updated User Roles    | x  |
|team.url_updated  |Team URL changed    | x  |
