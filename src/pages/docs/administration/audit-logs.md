---
title: "Utilizing audit logs"
order: 126
page_id: "audit_logs"
updated: 2022-03-01
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Managing your team"
    url: "/docs/administration/managing-your-team/managing-your-team/"
---

> __[Audit logs are available on Postman Professional and Enterprise plans.](https://www.postman.com/pricing)__

Audit logs display events related to your team, users, and billing. Team Admins can review audit logs to see:

* When users were added to, removed from, or invited to your team
* Which user performed a specific action and when they did so

Postman provides audit logs for 90 days for users with Professional plans, and 180 days for users with Enterprise plans.

> Audit logs are visible to all [Team Admins](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) on [Postman Professional and Enterprise plans](https://www.postman.com/pricing), including Super Admins on Enterprise teams.

## Contents

* [Viewing audit logs in the dashboard](#viewing-audit-logs-in-the-dashboard)

* [Exporting audit logs from the dashboard](#exporting-audit-logs-from-the-dashboard)

* [Accessing audit logs with the Postman API](#accessing-audit-logs-with-the-postman-api)

* [Logged events](#logged-events)

## Viewing audit logs in the dashboard

You can view audit logs in Postman by selecting **Team** in the header, then selecting **Audit Logs**.

<img alt="Team menu with audit logs selected" src="https://assets.postman.com/postman-docs/menu-select-audit-logs-v9.13.0.jpg" width="300px"/>

Audit logs provide information about actions taken by members of your team. Each event includes the user, the user's email address, the event name and a description of the event, the user's IP address, and the date and time of the action, including the user's timezone.

<img alt="Audit logs dashboard" src="https://assets.postman.com/postman-docs/audit-logs-dashboard-v9.jpg" width="1000px"/>

You can use filters to view actions by date range, event type, and user.

<img alt="Filtering the audit log results" src="https://assets.postman.com/postman-docs/audit-logs-filter-actions-v9.jpg" width="600px"/>

## Exporting audit logs from the dashboard

You can export audit logs as CSV files. By default, Postman will export all data in your audit logs from the last seven days. To start the export process, select **Export Audit Logs**.

To specify certain data to export, set the filters you want in the audit logs dashboard and Postman will generate the export using those parameters. To filter your results, select a time range, event, and user, then select **Export Audit Logs**.

You will receive an email with a link to the exported audit logs. The link in the email is active for one hour.

## Accessing audit logs with the Postman API

You can also access audit logs with the [Postman API](https://www.postman.com/postman/workspace/postman-public-workspace/documentation/12959542-c8142d51-e97c-46b6-bd77-52bb66712c9a), allowing you to integrate Postman's audit logs with your security information and event management (SIEM) tools.

Each audit log event has the following attributes:

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

To get started, go to the [Postman API](https://www.postman.com/postman/workspace/postman-public-workspace/documentation/12959542-c8142d51-e97c-46b6-bd77-52bb66712c9a) and open the **Audit Logs** folder to view the GET request and example responses.

> You must [generate a Postman API key](/docs/developer/intro-api/#generating-a-postman-api-key) to access the [Postman API](/docs/developer/intro-api/).

## Logged events

Postman logs events related to your [team](#team), [users](#users), and [billing](#billing).

### Team

| Action | Description |
| ------------- | ------------- |
| Team Name Updated  | Your team's name was changed.  |
| Team URL Updated | Your team’s URL was changed. |
| Updated Team Discovery | A user updated your team's discoverability status. |
| Added Domain for Domain Capture | A Team Admin added a domain for domain capture. |
| Verified Domain for Domain Capture | The domain added for domain capture has been verified. |
| Enabled Domain Team Management | A Team Admin enabled [domain team management](/docs/administration/managing-your-team/configuring-domain-capture/). |
| User Joined via Domain Capture | A user joined through [team domain management](/docs/administration/managing-your-team/configuring-domain-capture/). |
| Disabled Domain Team Management | A Team Admin disabled domain team management. |
| Deleted Domain for Domain Capture | A Team Admin deleted a domain for domain capture. |
| Added Custom Domain | A [custom domain](/docs/publishing-your-api/custom-doc-domains/) was added to your team. |
| Updated Custom Domain Verification Status | The verification status of your domain was updated. |
| Deleted Custom Domain  | A custom domain was deleted from your team. |
| Custom Auth Scheme Enabled | An SSO scheme was enabled.  |
| Custom Auth Scheme Updated  | An SSO scheme was updated. |
| Custom Auth Scheme Disabled  | An SSO scheme was disabled. |
| Custom Auth Scheme Removed  | An SSO scheme was removed.  |
| Created SCIM Key | A user created a new SCIM key. |
| Activated SCIM Key | A user activated a SCIM key. |
| Regenerated SCIM Key | A user regenerated a SCIM key. |
| Revoked SCIM Key | A user revoked a SCIM key. |
| Deleted SCIM Key | A user deleted a SCIM key. |
| SCIM User Provisioned | The SCIM admin provisioned a new user. |
| SCIM User De-provisioned | The SCIM admin de-provisioned a user. |
| Exported Data | A user requested an export of their data. |
| Downloaded Exported Data | A user downloaded an export of their data. |
| Added Custom Alert | A new [custom token alert](/docs/api-security/token-scanner/#custom-alerts) was created for your team. |
| Edited Custom Alert | A custom token alert's name or regex pattern was changed, or the alert was turned on or off. |
| Deleted Custom Token Alert  | A custom token alert was deleted. |

### Users

| Action | Description |
| ------------- | ------------- |
| Added Team Member | A user joined your team.   |
| Removed Team Member  | A team member was removed.  |
| Sent Team Invite  | An invitation was sent to a user to join your team.  |
| Approved Team Invite | An admin approved an email invitation. |
| Rejected Team Invite  | An admin rejected an email invitation. |
| Cancelled Team Invite   | An invitation for a user was cancelled.   |
| Approved Team Join Request | An admin approved a request to join your team. |
| Rejected Team Join Request | A user rejected a request to join your team. |
| Updated User Role | A user updated a user role. |
| Updated User Roles | Roles were updated for some users in your team. |
| Created Group | A user created a new group. |
| Updated Group | A user updated a group. |
| Added Group Member | A user joined a group. |
| Added Group Role | A role was added to a group. |
| Removed Group Role | A role was removed from a group. |
| Removed Group Member | A user was removed from a group. |
| Deleted Group | A user deleted a group. |
| Successful Login via Password | A user logged in successfully via Password.   |
| Successful Login via Google | A user logged in successfully via Google. |
| Successful Login via SSO | A user logged in successfully via SSO. |
| Reset Password | A user reset their password. |
| Changed Password | A user changed their password. |
| User Session Revoked | A user revoked their session. |
| User Logout | A user logged out. |

### Billing

| Action | Description |
| ------------- | ------------- |
| Changed Plan | A user changed your team plan. |
| Increased Team Size | Additional licenses were added to your team.  |
| Decreased Team Size  | Extra licenses were removed from your team. |
| Updated Monitoring Block Count | A user updated monitoring block count. |
| Set Instructions for Next Billing Cycle  | Instructions for the next billing cycle were added.|
| Updated Billing Email | A user changed your team's billing email address. |
| Updated Invoice Details | A user updated invoice details. |
| Added Payment Method  | A user added a payment method. |
| Changed Default Payment Method | A user changed the default payment method. |
| Deleted Payment Method | A user deleted a payment method. |
| Successfully Retried Invoice  | An invoice for your team was paid.  |
| Cancelled Invoice | A user cancelled an invoice for your team. |
| Cancelled Plan | A user cancelled your team’s subscription. |
