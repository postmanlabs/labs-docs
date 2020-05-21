---
title: "The Run in Postman button"
order: 330.9
page_id: "introduction_run_button"
warning: false
contextual_links:
    - type: section
      name: "Prerequisites"
    - type: link
      name: "Collections"
      url: "/docs/postman/collections/intro-to-collections/"
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
      url: "/docs/postman-for-publishers/run-in-postman/creating-run-button/"

---

The Run in Postman button is a way to give users direct access to your API endpoints. When you [create a button](/docs/postman-for-publishers/run-in-postman/creating-run-button/) for your collection, you can embed the button in your website or API documentation. When users click your button, a copy of your collection will open in the user's Postman app.

![Travefy button](https://assets.postman.com/postman-docs/Travefy+API+RIP+button.jpg)

> The Run in Postman button works with description formats like Swagger, RAML, and GitHub.

## Dynamic and Static buttons

There are two types of Run in Postman buttons:

**Dynamic button**: This button uses HTML and CSS, and is optimal for a website. The dynamic button also gives you access to the [Run in Postman API](/docs/postman-for-publishers/run-in-postman/run-button-API/).

**Static button**: This button uses Markdown, and is optimal for a Markdown document like a GitHub ReadMe or BitBucket repository.

With both buttons you have the option to [include an environment](/docs/postman-for-publishers/run-in-postman/environments-run-button/) in the button. The environment will open in the Postman app along with a copy of your collection whenever a user clicks your button.

## User interaction with your button

When a user finds your button displayed on your website and they click it, they'll be prompted to open the Postman app. If they haven't downloaded the app yet, they'll have the option to do so then.

 ![Modal display](https://assets.postman.com/postman-docs/Unsized+modal+image.jpg)

> If the button is dynamic, the prompts will open for the user in a modal, like the screenshot above (above modal is specific to Macs). If the button is static, the prompts will open for the user in a new page.

A copy of your collection will be imported into the user's app, and the app will open on the user's desktop.

## Security considerations

This section only covers security details related to the Run in Postman feature. Refer to the [complete security practices page](https://www.postman.com/security) for general details.

* Do a test import of your collection to be sure no sensitive data, like access keys, have been included. You can create a duplicate of your collection and remove any data you do not want shared. Duplicate your collection from the ellipsis **(...)** menu next to your collection name.

![Ellipsis menu](https://assets.postman.com/postman-docs/Duplicate+collections.jpg)

* Collections imported into the Postman app via the Run in Postman button are copies of the original.
* Only collection-specific data you enter in Postman is shared through the Run in Postman button. **Example:** Collection names and descriptions, or the request data (URL, headers, body, tests, scripts, etc.).

## Next steps

Create a [Run in Postman button](/docs/postman-for-publishers/run-in-postman/creating-run-button/).
