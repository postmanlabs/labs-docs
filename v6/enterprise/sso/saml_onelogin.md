---
title: "Setting up custom SAML in Onelogin"
page_id: "saml_onelogin"
tags: 
  - "enterprise"
warning: false
---

*Note: only an admin of your Onelogin organization can create the application.*

### Setting up a custom SAML application in Onelogin

  Head to the Onelogin home page and login to your account using your credentials.

1. Navigate to the Onelogin applications page, and click **ADD APP**, as illustrated below:

   [![onelogin add app2](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Onelogin-Add-Apps1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/onelogin_add_app.png)



   [![onelogin add app2](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/onelogin_add_app.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/onelogin_add_app.png)  

2. Search for *SAML Test Connector* in the Find Applications section. Select *SAML Test Connector (IdP w/ attr w/ sign response)* from the search results

    [![onelogin find saml](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Onelogin-Select-SAML.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/onelogin_find_saml.png) 
   

3. Update the **Display Name**, and click **SAVE**.
   [![onelogin display name](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/onelogin_display.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/onelogin_display.png)

4. Enter your Postman service provider details. These details can be found on the Postman [Edit Team Details page](https://go.postman.co/settings/team/general). Click **SAVE** to proceed.

   [![onelogin service provider](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Onelogin-IDP-Details1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Onelogin-IDP-Details1.png)


5. Copy the `Identity Provider Issuer URL`, `SAML 2.0 Endpoint (HTTP)`, and `X.509 Certificate` from here:

   [![onelogin service provider](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Onelogin-Postman-IDP-Details1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Onelogin-Postman-IDP-Details1.png)



and update the SSO authentication method that you created at Postman [Edit Team Details page](https://go.postman.co/settings/team/general) within the **Onelogin Identity Provider Details** modal. 


After copying the values onto Identity Provider Details on the Postman page, Generate/ Regenerate the relay state and select “Automatically add new users using this authentication method to the team and save authentication





For more details on this last step, review [setting up SSO in Postman](/docs/enterprise/sso/admin_sso). 
   [![onelogin identity provider](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/onelogin_identity_provider.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/onelogin_identity_provider.png)

copy these and paste in the postman idp screen....