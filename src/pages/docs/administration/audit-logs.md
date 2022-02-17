---
title: "Utilizing audit logs"
order: 126
page_id: "audit_logs"
updated: 2022-02-13
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Managing your team"
    url: "/docs/administration/managing-your-team/managing-your-team/"
---

> __[Audit logs are available on Postman Professional and Enterprise plans.](https://www.postman.com/pricing)__

Audit logs display events related to team management, billing, and security. A team admin can review audit logs to determine:

* When users were added to the team
* When users received an invitation to a team
* Which user performed a specific action

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
| Added Payment Method  | A new credit card was added to the your team.  |
| Removed Payment method   | A credit card was removed from your team.  |
| Added Domain   | A custom domain was added to your team. (You can use custom domains to publish documentation.)  |
| Deleted Domain  | A custom domain was deleted from your team.  |
| Added Member   | A user joined your team.   |
| Cancelled Invite   | An invitation for a user was cancelled.   |
| Successful login   | A user logged in successfully.   |
| Logout | A user logged out. |
| Reset Password | A user reset their password. |
| Changed Password | A user changed their password. |
| Custom auth scheme created| A new SSO scheme was added to your team.  |
| Custom auth scheme disabled  | An SSO scheme was disabled. |
| Custom auth scheme enabled | An SSO scheme was enabled.  |
| Custom auth scheme removed  | An SSO scheme was removed.  |
| Custom auth scheme updated  | An SSO scheme was updated.|
| Decreased Team Size  | Extra licenses were removed from the team. |
| Increased Team Size | Additional licenses were added to the team.  |
| Set Instructions For Next Billing Cycle  | Instructions for the next billing cycle were added.|
| Team name changed  | Team name was changed.  |
| Removed Member  | Team member was removed.  |
| Successfully Retried Invoice  | An invoice for your team was paid.  |
| Sent Invite  | An invitation was sent to a user to join your team.  |
| Started  | Your plan has started.  |
| Updated domain verification  | A domain’s verification status was updated.|
| Updated User Roles | Roles were updated for some users in your team.  |
| Team URL changed  | Team’s URL updated. (The custom URL you use to access your team’s dashboard.)  |
| Added Custom Alert | A new [custom token alert](/docs/api-security/token-scanner/#custom-alerts) was created for your team. |
| Edited Custom Alert | A custom token alert's name or regex pattern was changed, or the alert was turned on or off. |
| Deleted Custom Alert  | A custom token alert was deleted. |
