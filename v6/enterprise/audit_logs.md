---
title: "Audit logs"
page_id: "audit_logs"
tags: 
  - "enterprise"
warning: false
---

Audit logs, an Enterprise-only feature, lists all team events. Admins can use this list to identify changes to the team composition or team settings. For example, an admin can use an audit log identify user actions they performed and specify  when they performed the action.

Audit logs identifies which users performed a specific action, and the time that action occurred. 

Audit logs currently include events around team management, billing, and security. More events like documentation being 
published, and API Keys / monitors created will soon be added to this list.




Here's a list of events that are currently logged:


| Action name  |   Human readable name        | Description         |
| ---   |   ---    ----------------  |
|team.add_domain  |Added Domain    | A custom domain was added to your team                                                                      |
|team.add_member  |Added Member   |	A user joined your team  |
|team.cancel_invite  |Cancelled Invite    | An invitation for a user was cancelled  |
|team.customauth.create   |Custom auth scheme created   |A new SSO scheme was added to your team  |
|team.customauth.disable   |Custom auth scheme disabled     |An SSO scheme was disabled  |
|team.customauth.enable  |Custom auth scheme enabled    |An SSO scheme was enabled  |
|team.customauth.remove  |Custom auth scheme removed    |An SSO scheme was removed |
|team.customauth.update  |Custom auth scheme updated   |An SSO scheme was updated |
|team.decrease_size  |Decreased Team Size   |Extra licenses removed from the team  |
|team.delete_domain  |Deleted Domain    |A custom domain was deleted from your team  |
|team.increase_size  |Increased Team Size    |Additional licenses added to the team  |
|team.modify_future_plan |Set Instructions For Next Billing Cycle    |Instructions for the next billing cycle were added* (coming soon) |
|team.name_updated  |Team name changed    |Team name changed  |
|team.remove_member  |Removed Member    |Removed Member  |A user was removed from your team
|team.retry_invoice_success |	Successfully Retried Invoice    |An invoice for your team was paid  |
|team.send_invite  |Sent Invite    |An invitation was sent for someone to join your team  |
|team.start_enterprise  |Started Pro    |Your Enterprise plan has started.  |
|team.update_domain_verification  |	Updated domain verification    |A domain's verification status was updated  |
|team.update_user_roles  |Updated User Roles    |Roles were updated for some users in your team  |
|team.url_updated  |Team URL changed    |Team's URL updated. The URL is what you use to access your team's Enterprise dashboard - https://<team-url>.postman.co  |
