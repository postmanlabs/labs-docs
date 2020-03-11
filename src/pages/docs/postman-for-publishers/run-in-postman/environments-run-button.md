---
title: "Environments in Run in Postman"
order: 334
page_id: "environments_run_button"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Intro to collections"
    url: "https://learning.postman.com/docs/postman/collections/intro-to-collections"
  - type: link
    name: "Variables"
    url: "https://learning.postman.com/docs/postman/variables-and-environments/variables"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Sikka"
    url: "https://www.postman.com/case-studies/Sikka.pdf"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Intro to API documentation"
    url: "https://learning.postman.com/docs/postman/api-documentation/documenting-your-api/"
---

You can include environments in your [Run in Postman button](/docs/postman-for-publishers/run-in-postman/creating-run-button/). When developers click the button from your API documentation or website, the environment will be imported along with the collection into the Postman app, and the user can enter their own variable values.  

Find out more about [environments and variables](docs/postman/variables-and-environments/variables/).

> If you're using the dynamic (HTML) button, you can use the Run in Postman API to alter your button's behavior. Use the button to create and modify environments, or have multiple buttons on a single page, each with a different environment.

## Include an environment in your button

You can add environments to both static and dynamic Run in Postman buttons.

**Dynamic buttons:** You can include the environment from the **Embed** tab or with the Run in Postman API.

**Static buttons:** With the static (Markdown) button, you can only include the environment from the **Embed** tab.

### Add environment from the **Embed** tab

You can add an environment to a new button while you're creating it, or to an exisitng button at any time.

> If you add an environment to an existing button, you have to click **Update link** to save the environment parameter to the embed code, and then copy the new embed code into your website's code.

1. From the Postman app, go to the collection that you want share with a Run in Postman button.
   - ![Share collection](https://assets.postman.com/postman-docs/collection-menu-share.png)
2. To the right of the collection name, click the ellipses **(...)** > **Share collection**. The Share dialog will pop-up.
3. In the Share dialog, click the "Embed" tab. If you need to, [create your Run in Postman button](/docs/postman-for-publishers/run-in-postman/creating-run-button/).
4. On the right, above the code field, click the dropdown to choose an environment. You'll see the code in the panel change to include the environment parameter.
5. At the bottom right, click **Copy to clipboard**.
6. Embed the button on your website.

### Use the API to include an environment

> Only the dynamic (HTML) Run in Postman button exposes the Run in Postman API.

The JavaScript Run in Postman API uses the `_pm()` method to create or modify environments in your website's client-side code through existing dynamic Run in Postman buttons. For example, You could use the API to pass login credentials to Postman:

```javascript
_pm('env.create', 'Spotify', {
  user_id: 'spotifyuser',
  authorization: 'Bearer 1234xyzd'
});
```

## Next steps

Read more about the [Run button API](docs/postman_for_publishers/run_button/run_button_API) and learn how to alter your Run in Postman button's behavior.
