---
title: "Creating Run in Postman buttons"
order: 109
page_id: "creating_run_button"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Grouping requests in collections"
    url: "/docs/sending-requests/intro-to-collections/"
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
    name: "Documenting your API"
    url: "/docs/publishing-your-api/documenting-your-api/"
  - type: link
    name: "Managing environments"
    url: "/docs/sending-requests/managing-environments/"

---

You can use The Run in Postman button to [share your Postman Collections](/docs/collaborating-in-postman/sharing/). You can embed the button in your website to give developers immediate access to your API endpoints.

> The Run in Postman button also works with API description formats like Swagger and RAML. To create a button for the framework you use, convert your file to a collection by [importing it into Postman](/docs/getting-started/importing-and-exporting-data/).

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
6. You can include an environment that will import along with your collection. On the right, click the **Environment** drop-down and choose the environment. Learn more about including [environments in your button](/docs/publishing-your-api/run-in-postman/creating-run-button/#using-environments-with-your-button).
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

## Using environments with your button

You can include environments in your [Run in Postman button](/docs/publishing-your-api/run-in-postman/creating-run-button/). When developers click the button from your API documentation or website, the environment will be imported along with the collection into their Postman app, and the user can enter their own variable values. Learn more about [environments and variables](/docs/sending-requests/variables/).

> If you're using the dynamic (HTML) button, you can use the Run in Postman API to alter your button's behavior. Use the button to create and modify environments, or have multiple buttons on a single page, each with its own environment.

### Include an environment in your button

You can add environments to both static and dynamic Run in Postman buttons.

**Dynamic buttons:** You can include the environment when you generate your button or with the Run in Postman API. If you want to include an environment in a button that already exists, you'll follow the same steps you took to create the button.  

**Static buttons:** With the static (Markdown) button, you can only include the environment when you generate your button. If you want to include an environment in a button that already exists, you'll follow the same steps you took to create the button.

#### Add environment when you generate a button

You can add an environment to a new button while you're creating it, or to an existing button at any time.

> If you add an environment to an existing button, click **Update link** to save the environment parameter to the embed code. Then, copy the new embed code into your website's code.

1. From the Postman app, go to the collection that you want share with a Run in Postman button. ![Share collection](https://assets.postman.com/postman-docs/collection-menu-share.png)
2. To the right of the collection name, click the ellipses **(...)** > **Share Collection**.
3. In the Share dialog, click the **Embed** tab. If you need to, [create your Run in Postman button](/docs/publishing-your-api/run-in-postman/creating-run-button/).
4. On the right, above the code field, click the dropdown to choose an environment. You'll see the code change to include the environment parameter.
5. At the bottom right, click **Copy to Clipboard**.
6. To embed the button, add the code to your website.

#### Use the API to include an environment

> To use the Run in Postman API, you have to be working with the dynamic (HTML) button.

The JavaScript Run in Postman API uses the `_pm()` method to create or modify environments in your website's client-side code through existing dynamic Run in Postman buttons. For example, you can use the API to pass login credentials to Postman:

```javascript
_pm('env.create', 'Spotify', {
  user_id: 'spotifyuser',
  authorization: 'Bearer 1234xyzd'
});
```

## Next steps

Read more about the [Run button API](/docs/publishing-your-api/run-in-postman/run-button-API/) and learn how to alter your Run in Postman button's behavior.
