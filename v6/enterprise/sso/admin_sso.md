---
title: "Single Sign-On for Admins"
page_id: "admin_sso"
tags: 
  - "enterprise"
warning: false
---

### Setting up SSO

Only a team admin can configure SSO for a Postman Team.

In [Team Settings](https://app.getpostman.com/dashboard/teams/edit){:target="_blank"} for an enterprise plan, scroll down and click the **Add a new authentication method** button.

In the Add Authentication Method page, select the "Authentication Type" and "Authentication Name", and then click the **Proceed** button.

[![authentication method](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-add-authentication-method-2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-add-authentication-method-2.png)

In the "Service Provider Details (Postman)", enter the "Entity ID", "Login URL", and "ACS URL". 

In "Identity Provider Details", enter information for: "Identity Provider Details", "Identity Provider Issuer", and "X.509 Certficate". 

Click the **Generate relay state** button to create a parameter to send with a SAML response in an IDP-initiated single sign on.

You can select to automatically add new users to your team using this authentication method.

[![details](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-identity-provider-details.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-identity-provider-details.png)

You can either click the **Configure Later** button to complete the configuration later, or click the **Save Authentication** button to complete the process.

### Managing user accounts

##### **Creating end user accounts**

To add an end user, create an account for the user in the Identity Provider (IdP).

The first time a new user logs in to Postman through the IdP, a Postman account will be created if the team has seats available and the **Allow Signups** box was checked during SSO configuration. 

The user will be automatically associated to the team with a **user** role and have access to team resources.

##### **Existing user account**

If a Postman user logs in to Postman through a team's IdP, they will be automatically added to the team if **one of the following** is true:
   
   *   The team has available slots and **Allow Signups** enabled.
   *   An admin has invited the user to join the team.

##### **Removing team access**

An admin must remove users from their **Postman team** in order to prevent access to shared resources.

