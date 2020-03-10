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

You can include environments your [Run in Postman button](https://learning.postman.com/docs/postman-for-publishers/run-in-postman/creating-run-button/). When developers click the button from your API documentation or website, the environment will be imported along with the collection into the Postman app, and the user can enter their own variable values.  

Find out more about [environments and variables](https://learning.postman.com/docs/postman/variables-and-environments/variables/).

> If you're using the dynamic (HTML) button, you can use the Run in Postman API to alter your button's behavior. Use the button to create and modify environments, or have multiple buttons on a single page, each with a different environment.

## Include and environment in your button

The ways that you can include an environment with your button will depend on which Run in Postman button you want to work with.

**Dynamic buttons:** You can include the environment from the "Embed" tab or with the Run in Postman API.

**Static buttons:** With the static (JSON) button, you can only include the environment from the "Embed" tab.

### Include the environment from the "Embed" tab

When you include an environment from the "Embed" tab, you can do it when you first create your button or for a button that already exists.

1. From the Postman app, go to the collection that you created or will create the Run in Postman button for.
1. To the right of the collection name, click the ellipses **(...)** > **Share collection**. The Share dialog will pop-up.
1. In the Share dialog, click the "Embed" tab. If you need to create the button first, [create your Run in Postman button](https://learning.postman.com/docs/postman-for-publishers/run-in-postman/creating-run-button/)
1. On the right, above the script panel, click the dropdown to choose an environment. You'll see the code in the panel change to include the environment parameter.
1. At the bottom right, click **Copy to clipboard**.
1. Embed the button on your website.

[![select environment](Environments in RIP gif.gif)

> To alter the button's behavior with the Run in Postman API, you ned to have permission to access and edit your website's code.

### Use the Run in Postman API to include the environment on page load

> Only the dynamic (HTML) Run in Postman button exposes the Run in Postman API.

The JavaScript Run in Postman API uses the `_pm()` method to create or modify client-side environments through Run in Postman buttons that already exist. For example, You could use the API to pass login credentials to Postman:

```javascript
_pm('env.create', 'Spotify', {
  user_id: 'spotifyuser',
  authorization: 'Bearer 1234xyzd'
});
```

To change your button's behavior, write the functions in the button's script in the website where the button is embedded.

Read more about the [Run button API](https://learning.postman.com/docs/postman_for_publishers/run_button/run_button_API) and how to alter your Run in Postman button's behavior.
