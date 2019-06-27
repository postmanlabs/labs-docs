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

Once you login to your Okta account, perform the following steps:

1. Click **Admin** as illustrated in the following screen:

    [![okta admin](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Okta-SAML1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Okta-SAML1.png)

2.  From the Okta Dashboard, click **Add Application**.

    [![okta add application](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Okta-Add-Application.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Okta-Add-Application.png) 
  
3.  Click **Create New App**, as illustrated below:

     [![okta_new app](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Okta-Create-Application.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Okta-Create-Application.png)

4.   In the following screen, select "SAML 2.0" and click **Create**.

     [![okta choose saml](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Okta-Choose-SAML.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Okta-Choose-SAML.png)

5.   Under the first step "General Settings", enter an application name and       then click **Next**.

     [![okta app name](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/okta_app_name.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/okta_app_name.png)

6. Under the second step “Configure SAML”, section A “SAML Settings”,           enter the Postman service provider details which can be found on the         Postman [Edit Team Details](https://go.postman.co/settings/team/general) page. To go to **Edit Team Details** page, navigate to *Authentication -> <My_Okta_Integration_Name>* and click **Edit**. Next, click **Proceed**. Ensure, you are now in the following screen after the completion of this step:

    [![details](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Okta-IDP-Details.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-identity-provider-details.png)

    Now, download the encryption certificate by clicking **Download as file** link (shown in red circle). You will upload this later in the **Identity Provider Details** configuration section. In the following screen, click **Show Advanced Settings** link to configure advanced SAML assertion settings.

    [![!okta service provider](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/okta_service_provider.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/okta_service_provider.png)


     | **Field** | **Value** |
     | --- | --- |
     | Single Sign On URL | ACS URL |
     | Audience URI (SP Entity ID) | Entity ID |
     | Name ID Format | EmailAddress |
 
7.  Configure the below options as shown below. Note that the image highlights default settings. Ensure your field options reflect these values.  

    [![okta advanced](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Okta-SAML-Adv-Settings.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Okta-SAML-Adv-Settings.png)
 
     For the Encryption Certificate, upload the file here (the one you downloaded earlier). Click **Next** to continue.

8.  Under the third step “Feedback”, select “I’m an Okta customer adding an internal app”, and check “This is an internal app that we have created”, and then click **Finish**.

     [![okta feedback](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/okta_feedback.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/okta_feedback.png)
  
8.  Move over to the **Sign On** tab, and click the **View Setup Instructions** button.

     [![okta sign on](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/okta_sign_on.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/okta_sign_on.png)

     The **View Setup Instructions** screen comes populated with default values that you should update. 

     **Note:** You will need to come back to this screen to copy the *Relay State* value you will generate at the end of this procedure. 
  
9.   Copy the **Identity Provider Single Sign-On URL**, **Identity Provider Issuer** and **X.509 Certificate** from the below screen.  

     [![okta identity provider](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/okta_identity_provider.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/okta_identity_provider.png)

     And paste them in the corresponding sections of the **Identity Provider Details** screen as shown below:
     
     [![details](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Okta-IDP-Details3.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Okta-IDP-Details3.png)
     
     Once you fill-in the details, click the **Generate relay state** button to create a parameter to send with a SAML response in an IDP-initiated single sign-on. Copy the **relay state** and paste it in the following screen:

     [![details](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Okta-Relay-State.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Okta-IDP-Details3.png)

     To copy, click **Edit** button and paste the value in **Default Relay State** field. 

     Click **Save Authentication**. 