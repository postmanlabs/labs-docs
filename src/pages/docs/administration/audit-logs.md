---
title: "Utilizing audit logs"
order: 126
page_id: "audit_logs"
updated: 2022-02-25
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Managing your team"
    url: "/docs/administration/managing-your-team/managing-your-team/"
---

> __[Audit logs are available on Postman Professional and Enterprise plans.](https://www.postman.com/pricing)__

Audit logs display events related to team management, billing, and security. Team admins can review audit logs to determine:

* When users were added to, removed from, or invited to your team
* Which user performed a specific action and when they did so

> Audit logs are visible to all [team admins](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) on [Postman Professional and Enterprise plans](https://www.postman.com/pricing), including super admins on Enterprise teams.

## Contents

* [Viewing audit logs in the dashboard](#viewing-audit-logs-in-the-dashboard)

* [Accessing audit logs via the Postman API](#accessing-audit-logs-via-the-postman-api)

* [Logged events](#logged-events)

## Viewing audit logs in the dashboard

You can view audit logs in Postman by selecting **Team** in the upper-right corner, then **Audit Logs**.

<img alt="Team menu with audit logs selected" src="https://assets.postman.com/postman-docs/menu-select-audit-logs-v9.13.0.jpg" width="300px"/>

Audit logs allow you to view team actions by user, event name, event description, and date.

<img alt="Audit logs dashboard" src="https://assets.postman.com/postman-docs/audit-logs-v9.13.1.jpg"/>

## Accessing audit logs via the Postman API

You can also access audit logs via the [Postman API](https://www.postman.com/postman/workspace/postman-public-workspace/documentation/12959542-c8142d51-e97c-46b6-bd77-52bb66712c9a), allowing you to integrate Postman's audit logs with your security information and event management (SIEM) tools.

Each audit log event contains the following attributes:

| <div style="width:100px">Name</div> | Description |
| --- | --- |
| `id` | A numeric value representing the unique identifier of an audit event. |
| `ip` | The IP address of the actor who performed the action. |
| `userAgent` | A string with the user-agent of the actor. |
| `action` | A string with an action or event performed by the actor. |
| `timestamp` | The date and time when the action or event was performed. The time is represented using the ISO 8601 date and time format. |
| `actor` | An object with information about the actor who performed this action. |
| `message` | A description of the audit event. |
| `nextCursor` | A string that represents the cursor of the next page. |

To get started, navigate to the [Postman API](https://www.postman.com/postman/workspace/postman-public-workspace/documentation/12959542-c8142d51-e97c-46b6-bd77-52bb66712c9a) and open the **Audit Logs** folder to view the GET request and example responses.

> You must [generate a Postman API key](/docs/developer/intro-api/#generating-a-postman-api-key) to access the [Postman API](/docs/developer/intro-api/).

## Logged Events

Logged events include the following actions.

| Action name  | Description |
| ------------- | ------------- |
| Activated SCIM Key | A user activated an SCIM key. |
| Added Custom Alert | A new [custom token alert](/docs/api-security/token-scanner/#custom-alerts) was created for your team. |
| Added Custom Domain | A custom domain was added to your team. (You can use custom domains to publish documentation.)  |
| Added Domain For Domain Capture | A team admin added a domain for domain capture. |
| Added Group Member | A user joined the group. |
| Added Group Role | A role was added to the group. |
| Added Member   | A user joined your team.   |
| Added Payment Method  | A user added a payment method. |
| Approved Invite | An admin approved an email invitation. |
| Approved join request | An admin approved a join request to team.
| Cancelled Invite   | An invitation for a user was cancelled.   |
| Cancelled Invoice | A user cancelled an invoice for your team. |
| Cancelled Plan | A user cancelled team’s subscription. |
| Changed Default Payment Method | A user changed the default payment method. |
| Changed Password | A user changed their password. |
| Changed Plan | A user changed team plan. |
| Created Group | A user created a new group. |
| Created SCIM Key | A user created a new SCIM key. |
| Custom auth scheme disabled  | An SSO scheme was disabled. |
| Custom auth scheme enabled | An SSO scheme was enabled.  |
| Custom auth scheme removed  | An SSO scheme was removed.  |
| Custom auth scheme updated  | An SSO scheme was updated. |
| Decreased Team Size  | Extra licenses were removed from the team. |
| Deleted Custom Alert  | A custom token alert was deleted. |
| Deleted Custom Domain  | A custom domain was deleted from your team. |
| Deleted Domain For Domain Capture | Team admin deleted a domain for domain capture. |
| Deleted Group | A user deleted a group. |
| Deleted Payment Method | A user deleted payment method. |
| Deleted SCIM Key | A user deleted an SCIM key. |
| Disabled Domain Team Management | Team admin disabled domain team management. |
| Downloaded Exported Data | A user downloaded an export of their data. |
| Edited Custom Alert | A custom token alert's name or regex pattern was changed, or the alert was turned on or off. |
| Enabled Domain Team Management | Team admin enabled domain team management. |
| Exported Data | A user requested an export of their data. |
| Increased Team Size | Additional licenses were added to the team.  |
| Regenerated SCIM Key | A user regenerated an SCIM key. |
| Rejected Invite | An admin rejected an email invitation. |
| Rejected Join Request | A user rejected a join request to team. |
| Removed Group Member | A user is removed from the group. |
| Removed Group Role | A role was removed from the group. |
| Removed Member  | A team member was removed.  |
| Reset Password | A user reset their password. |
| Revoked SCIM Key | A user revoked an SCIM key. |
| SCIM user de-provisioned | The SCIM admin de-provisioned a user. |
| SCIM user provisioned | The SCIM admin provisioned a new user. |
| Sent Invite  | An invitation was sent to a user to join your team.  |
| Set Instructions For Next Billing Cycle  | Instructions for the next billing cycle were added.|
| Successful login via Google | A user logged in successfully. |
| Successful login via Password | A user logged in successfully.   |
| Successful login via SSO | A user logged in successfully. |
| Successfully Retried Invoice  | An invoice for your team was paid.  |
| Team name updated  | Your team's name was changed.  |
| Team URL updated | Your team’s URL was changed. |
| Updated Billing Email | A user changed your team's billing email address. |
| Updated Custom Domain Verification Status | The verification status of your domain was updated. |
| Updated Group | A user updated a group. |
| Updated Invoice Details | A user updated invoice details. |
| Updated Monitoring Block Count | A user updated monitoring block count. |
| Updated Team Discovery | A user updated your team's discoverability status. |
| Updated User Role | A user updated a user role. |
| Updated User Roles | Roles were updated for some users in your team. |
| User Joined Via Domain Capture | A user joined through [team domain management](/docs/administration/managing-your-team/configuring-domain-capture/). |
| User Logout | A user logged out. |
| User Session revoked | A user revoked their session(s). |
| Verified Domain For Domain Capture | The domain added for domain capture has been verified. |
