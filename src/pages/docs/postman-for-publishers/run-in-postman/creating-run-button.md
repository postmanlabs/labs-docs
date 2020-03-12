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
    url: "https://www.postman.com/case-studies/Intuit.pdf"
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

You can use The Run in Postman button to [share your Postman collection](/docs/postman/collections/sharing-collections/) and connect Postman directly to your developer portal.

The button imports and opens a copy of your collection of API endpoints directly in the user’s Postman app. You can embed the button in your API documentation or your GitHub's README. The Run in Postman button works well with API description formats like Swagger and RAML too. Just convert your file to a collection by [importing it into Postman](/docs/postman/collections/data-formats/).

### Create a Run in Postman button

> Make sure you're signed in to your Postman account, and that you have a collection to share.

1. In the Postman app, go to the collection you want to create a button for.
2. Next to the collection's name, click the ellipsis **(...)** > **Share** . A dialog will pop up.
3. At the top of the dialog, click **Embed**.
4. Click **Generate code**.
5. Choose either a:
   - **Dynamic button**: Uses HTML and CSS. Optimal for a website. Can access Run in Postman API. **Note**: You need to have permission to edit your website's code.
   - **Static button**: Uses Markdown. Optimal for Markdown documents like a README.md.
6. You have the option to include an environment. On the right, click the **Environment** drop-down and choose the environment. Find out about including [environments in your button](/docs/postman-for-publishers/run-in-postman/environments-run-button/).
7. Click **Copy to clipboard**.
8. Go to where you want your button displayed, like your website or GitHub README, and embed the code you just copied.

![Create a button](https://postman-static-assets.s3.amazonaws.com/postman-docs/Create+RIP+button.gif)

### See examples of the button's code snippets

The `:collection_id` in the examples is a placeholder here and will be auto-filled in the markdown snippet.

> If you choose to include and environment in your button, then the code will also have the environment parameter.

#### Markdown snippet

```bash
![Run in Postman](https://run.pstmn.io/button.svg)](https://www.postman.com/run-collection/:collection_id)
```

#### HTML snippet

```bash
<a href="https://www.postman.com/run-collection/:collection_id" target="_blank">
  <img src="https://run.pstmn.io/button.svg" alt="Run in Postman">
</a>
```

## Keep your collections up to update

When you make changes to a collection that's connected to a Run in Postman button, you'll need to manually update the button's collection link so that your users are importing the most current collection.

1. In the Postman app, go to the collection with the button you need to update.
2. Next to the collections name, click the ellipsis **(...)** > **Share**. A dialog will pop up.
3. At the top of the dialog, click **Embed** > **Update link**.

[![Embed button](https://assets.postman.com/postman-docs/59020943.png)](https://assets.postman.com/postman-docs/59020943.png)

## Next steps

Find out about [environments in the Run in Postman button](https://learning.postman.com/docs/postman-for-publishers/run-in-postman/environments-run-button/).
