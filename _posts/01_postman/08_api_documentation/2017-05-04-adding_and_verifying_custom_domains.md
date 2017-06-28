---
categories:
  - "postman"
  - "api_documentation"
title: "Adding and verifying custom domains"
page_id: "adding_and_verifying_custom_domains"
warning: false
---

Postman users with public documentation have the capability to publish documentation on their own custom domain.

### Add a custom domain

From the Postman web view, go to the [edit view](https://app.getpostman.com/dashboard/teams/edit) of the Team tab.

[![edit view for team](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59033431.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59033431.png)

There is a section to add custom domains. Add a custom domain by entering the name and hitting the "**+**" button. Your custom domain can be a full domain or simply a subdomain. For example, you can use either `example.com` or `api.example.com` as your custom domain.

[![enter custom domain](http://blog.getpostman.com/wp-content/uploads/2017/02/512x133xcustdomains00.png,qx38712.pagespeed.ic.Ydn-dwv2cq.png)](http://blog.getpostman.com/wp-content/uploads/2017/02/custdomains00.png?x38712)

### Get verification tokens

Adding a custom domain will open a modal displaying DNS records required to verify domain ownership. The most important pieces of information in the modal below are the TXT and CNAME records. In order to verify that you control the domain you are attempting to add, Postman requires that you add these provided tokens as DNS records to your domain.

[![see TXT and CNAME](http://blog.getpostman.com/wp-content/uploads/2017/02/840x880xcustdomains04-echo-978x1024.png,qx38712.pagespeed.ic.zo3VhqUlk7.jpg)](http://blog.getpostman.com/wp-content/uploads/2017/02/840x880xcustdomains04-echo-978x1024.png,qx38712.pagespeed.ic.zo3VhqUlk7.jpg)

### Add DNS records

In this case, verify ownership with the DNS web service provider. In a separate browser tab, go to the DNS provider’s console and add two new records.

1.  A TXT record for `postman-echo.com` which verifies the ownership of the domain. The value should be the same as the token shown in the modal. The TXT record should be added to the **root domain**. So regardless of whether you're adding `example.com` or `api.example.com`, the TXT record should be added to `example.com`.
2.  A CNAME record for `docs.postman-echo.com`, the value for which should be `phs.getpostman.com` as shown in the modal. The CNAME record should be added to the URL which will be associated with your public documentation.

### Verify Domain

After adding the records in the DNS provider's console, return to the Postman web view. Check the box confirming that the TXT and CNAME records have been added, and then hit **Verify Domain**. A green message will confirm that the custom domain has been verified.

[![confirmation message](http://blog.getpostman.com/wp-content/uploads/2017/02/348x114xcustdomains02.png,qx38712.pagespeed.ic.Chaei9ggua.png)](http://blog.getpostman.com/wp-content/uploads/2017/02/custdomains02.png?x38712)

Sometimes, it takes time for your DNS settings to take effect, in which case, you’ll see the error message below. This is not a big deal, and you can just try again after some time.

[![invalid or missing token message](http://blog.getpostman.com/wp-content/uploads/2017/02/363x103xcustdomains01.png,qx38712.pagespeed.ic.fHADZQVasI.png)](http://blog.getpostman.com/wp-content/uploads/2017/02/custdomains01.png?x38712)

You can also choose to verify your domain control later by clicking the **Verify Later** button in the modal. If you need to access this modal again in order to view the token, or to re-attempt verification, you can click the **Verify Now** link below the custom domain listing.

[![verify now link](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59033911.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59033911.png)

### Publish a collection on the new custom domain

After the domain is verified, you can use this domain to publicly serve your API documentation. If you have a demo Collection that you would like to publish, head over to the Postman web view and publish your collection. There is now a new option to select a custom domain.

[![publish collection](http://blog.getpostman.com/wp-content/uploads/2017/02/custdomains03-echo-1024x1015.png)](http://blog.getpostman.com/wp-content/uploads/2017/02/custdomains03-echo-1024x1015.png)

After publishing, head over to your custom domain, and see the public documentation in all its glory!
