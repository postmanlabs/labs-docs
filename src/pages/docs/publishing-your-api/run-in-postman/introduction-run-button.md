---
title: "Using Run in Postman buttons"
order: 108
page_id: "introduction_run_button"
warning: false
contextual_links:
    - type: section
      name: "Prerequisites"
    - type: link
      name: "Grouping requests in collections"
      url: "/docs/sending-requests/intro-to-collections/"
    - type: section
      name: "Additional resources"
    - type: subtitle
      name: "Videos"
    - type: link
      name: "How to share Postman collections"
      url: "https://www.youtube.com/watch?v=mVTsK6ZdY6c"
    - type: link
      name: "WTD: Postman for API development and docs"
      url: "https://podcast.writethedocs.org/2018/01/22/postman-for-api-docs-write-the-docs/"
    - type: section
      name: "Next steps"
    - type: link
      name: "Creating the Run in Postman button"
      url: "/docs/publishing-your-api/run-in-postman/creating-run-button/"

---

The Run in Postman button is one way to share a Postman collection with your users. This button is displayed in the [Postman API Network](/docs/publishing-your-api/add-api-network/), at the top of [published documentation](/docs/publishing-your-api/publishing-your-docs/) in the web, and also where publishers choose to embed the stand-alone button.

![Travefy button](https://assets.postman.com/postman-docs/Travefy+API+RIP+button.jpg)

When you [create a stand-alone button](/docs/publishing-your-api/run-in-postman/creating-run-button/), you can embed a collection (and optional environment) in your website or API documentation. From this button, users can then import a copy of your collection directly into Postman.

![Run in Postman button]()

## User interaction with your button

When a user comes across your button, they can view the collection in their web browser or import the collection into the Postman app. 

 ![Modal display](https://assets.postman.com/postman-docs/Unsized+modal+image.jpg)

> If the button is dynamic, the prompts will open for the user in a modal, like the screenshot above (above modal is specific to Macs). If the button is static, the prompts will open for the user in a new page.

A copy of your collection is imported into the user's app, and the app will open on the user's desktop. This collection is a copy of the original, so updates made to the original are not updated in these copies imported by users.

> **Security check**: Do not leak sensitive data like access keys in your collection or environment. Read more about [securely using API keys in Postman](https://blog.postman.com/how-to-use-api-keys/).

## Next steps

Create a [Run in Postman button](/docs/publishing-your-api/run-in-postman/creating-run-button/).
