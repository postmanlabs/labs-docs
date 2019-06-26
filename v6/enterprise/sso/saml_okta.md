---
title: "Setting up custom SAML in Okta"
page_id: "saml_okta"
tags: 
  - "enterprise"
warning: false
---

*Note: Only an admin of your Okta organization can create the application.*

### Setting up a custom SAML application in Okta

To set up custom SAML application, follow the procedure outlined below: 

1. Click **Admin** as illustrated in the following screen:

    [![okta admin](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Okta-SAML1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Okta-SAML1.png)


1.   Head to the applications page from the Okta navigation menu. Click **Add Application**.


[![okta add application](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Okta-Add-Application.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/okta_add_app.png)  



[![okta add application](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/okta_add_app.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/okta_add_app.png)  

   


2.   Click **Create New App**.
     [![okta_new app](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/okta_create_new.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/okta_create_new.png)

     [![okta create new app](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Okta-Create-Application.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/okta_create_new.png)

3.   In the modal, select "SAML 2.0" and click **Create**.
     [![okta choose saml](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/okta_choose_saml.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/okta_choose_saml.png)

     [![okta choose saml](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Okta-Choose-SAML.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/okta_choose_saml.png)

4.   Under the first step "General Settings", enter an application name and then click the **Next** button.
     [![okta app name](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/okta_app_name.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/okta_app_name.png)



5.   Under the second step “Configure SAML”, section A “SAML Settings”, enter the Postman service provider details which can be found on the Postman [Edit Team Details page](https://go.postman.co/settings/team/general). 
     [![okta service provider](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/okta_service_provider.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/okta_service_provider.png)

     | **Field** | **Value** |
     | --- | --- |
     | Single Sign On URL | ACS URL |
     | Audience URI (SP Entity ID) | Entity ID |
     | Name ID Format | EmailAddress |
 
6.   Click the **Show Advanced Settings** link to configure advanced SAML assertion settings. Configure the below options based on your settings. However, note that the image highlights default settings. Ensure your field options reflect these values.  
 
 
 For the Encryption Certificate, download the `X.509 certificate` from the Postman [Edit Team Details page](https://go.postman.co/settings/team/general) and upload it here. Click **Next** to continue.


 ..... I don't see the *encryption certificate* download as a file option??????
     
  [![okta advanced](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/okta_advanced.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/okta_advanced.png)

7.   Under the third step “Feedback”, select “I’m an Okta customer adding an internal app”, and check “This is an internal app that we have created”, and then click **Finish**.
     [![okta feedback](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/okta_feedback.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/okta_feedback.png)
  
8.   Move over to the **Sign On** tab, and click the **View Setup Instructions** button.
     [![okta sign on](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/okta_sign_on.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/okta_sign_on.png)

     The **View Setup Instructions** screen comes populated with default values that you should update. 
  
9.   Copy the `Identity Provider Single Sign-On URL`, `Identity Provider Issuer` and `X.509 Certificate` from here and update the SSO authentication method that you created on the Postman [Edit Team Details page](https://go.postman.co/settings/team/general) within the **Okta Identity Provider Details** modal. For more details on this last step, review [setting up SSO in Postman](/docs/enterprise/sso/admin_sso). 
     [![okta identity provider](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/okta_identity_provider.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/okta_identity_provider.png)

     In the above fields, ACS url is the sign-on URL that you should copy from the team settings. **Identity Provider Issuer** and **X.509 Certificate** are other details you should copy from the team settings page. 

Once you fill-in the details, click the **Generate relay state** button to create a parameter to send with a SAML response in an IdP-initiated single sign-on.