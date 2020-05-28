---
title: "Creating the Run in Postman button"
order: 331
page_id: "creating_run_button"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Intro to collections"
    url: "https://learning.postman.com/docs/postman/collections/intro-to-collections"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Intuit"
    url: "https://www.postman.com/resources/case-studies/intuit/"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "API documentation with Postman"
    url: "https://www.youtube.com/watch?v=Ayo_KdLLcTA"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Square simplifies API docs with the Run in Postman button"
    url: "https://blog.postman.com/2017/07/21/square-simplifies-api-docs-with-the-run-in-postman-button/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Intro to API documentation"
    url: "https://learning.postman.com/docs/postman/api-documentation/documenting-your-api/"
  - type: link
    name: "Intro to environments and globals"
    url: "https://learning.postman.com/docs/postman/environments_and_globals/intro_to_environments_and_globals"

---

You can use The Run in Postman button to [share your Postman Collections](/docs/postman/collections/sharing-collections/). You can embed the button in your website to give developers immediate access to your API endpoints.

> The Run in Postman button also works with API description formats like Swagger and RAML. To create a button for the framework you use, convert your file to a collection by [importing it into Postman](/docs/postman/collections/data-formats/).

## Contents

* [Creating a Run in Postman button](#creating-a-run-in-postman-button)
* [Keeping your collections up to date](#keeping-your-collections-up-to-date)
* [Next steps](#next-steps)

## Creating a Run in Postman button

> Make sure you're signed in to your Postman account, and that you have a collection to share.

1. In the Postman app, open the collection you want to create a button for.
2. Next to the collection name, click the ellipsis **(...)** > **Share**.
3. At the top of the modal that appears, click **Embed**.
4. Click **Generate code**.
5. Choose a static or dynamic button:
   * **Dynamic button**: This button uses HTML and CSS, and gives you access to the Run in Postman API.
   * **Static button**: This button uses Markdown.
6. You can include an environment that will import along with your collection. On the right, click the **Environment** drop-down and choose the environment. Learn more about including [environments in your button](/docs/postman-for-publishers/run-in-postman/environments-run-button/).
7. Click **Copy to clipboard**.
8. Embed the code where you would like the button to be displayed.

![Create a button](https://assets.postman.com/postman-docs/Creating+RIP+button+gif.gif)

Your embed code will include your collection's ID. In the examples below, `:collection_id` is a placeholder for that ID.

> If you choose to include an environment in your button, the code will also have the environment parameter.

**Sample markdown snippet:**

```bash
[![Run in Postman](https://run.pstmn.io/button.svg)](https://www.postman.com/run-collection/:collection_id)
```

**Sample HTML snippet:**

```bash
<a href="https://www.postman.com/run-collection/:collection_id" target="_blank">
  <img src="https://run.pstmn.io/button.svg" alt="Run in Postman">
</a>
```

## Keeping your collections up to date

When you make changes to a collection that's connected to a Run in Postman button, you'll need to manually update the button's collection link so that your users are importing the most recent version of your collection.

1. In the Postman app, open the collection with the button you need to update.
2. Next to the collection name, click the ellipsis **(...)** > **Share**.
3. At the top of the dialog, click **Embed** > **Update link**.

[![Embed button](https://assets.postman.com/postman-docs/59020943.png)](https://assets.postman.com/postman-docs/59020943.png)

## Next steps

Learn more about including [environments in the Run in Postman button](https://learning.postman.com/docs/postman-for-publishers/run-in-postman/environments-run-button/).
