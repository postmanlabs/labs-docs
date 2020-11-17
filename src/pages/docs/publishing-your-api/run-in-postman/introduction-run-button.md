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

The Run in Postman button is one way to share a Postman collection (and optional environment) with your users. This button is found in the [Postman API Network](/docs/publishing-your-api/add-api-network/), at the top of [published documentation](/docs/publishing-your-api/publishing-your-docs/) in the web, and also where publishers embed the stand-alone button (like in a README or developer portal).

![Cisco button in network](https://assets.postman.com/postman-docs/ciscoRIPnetwork.png)

![Travefy button](https://assets.postman.com/postman-docs/Travefy+API+RIP+button.jpg)

![button in readme](https://assets.postman.com/postman-docs/foursquareRIPreadme.png)

## User interaction with your button

When a user comes across your button, they can choose to view the collection in their web browser or import the collection into their Postman app. Then, they can begin interacting with your API.

![Modal display](https://assets.postman.com/postman-docs/imgurModalRIP.png)

This collection imported by users is a copy of the original, so updates made to the original are not updated in these copies. Users must import the latest collection to see updates made to the original collection.

> **Security check**: Do not leak sensitive data like access keys in your collection or environment. Read more about [securely using API keys in Postman](https://blog.postman.com/how-to-use-api-keys/).

## Next steps

Create a [Run in Postman button](/docs/publishing-your-api/run-in-postman/creating-run-button/).
