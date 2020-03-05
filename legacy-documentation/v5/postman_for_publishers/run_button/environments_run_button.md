---
title: "Environments in Run in Postman"
page_id: "environments_run_button"
warning: false
---

## Environments, variables, and the Run in Postman button

You can leverage environments in Postman to keep your collections DRY by saving variables that you use repeatedly. When you include an environment with the collections that you share with your teammates and customers, they can input their own variable values in the environment template. This helps them work just as efficiently, and with information that's relevant to their work.

For example, if you have a request in your collection that requires a username and password and everyone on your team has their own credentials, they can use variables for the credentials, allowing everyone to work with the request and share the collection without sharing their personal information.

Find out more about how to create [environment templates](https://learning.postman.com/docs/postman/variables-and-environments/variables/).

When you [create a Run in Postman button](https://learning.postman.com/docs/postman-for-publishers/run-in-postman/creating-run-button/) for your API documentation, website, or GitHub repo, you can include an environment that will open along with your collection when someone clicks your button.  

> If you're using the dynamic (HTML) button, you can work with the [Run in Postman API](https://learning.postman.com/docs/postman-for-publishers/run-in-postman/run-button-API/) to alter your button's behavior. You can use the button to create environments, modify an environment, or segregate environments.

## Use the Run in Postman button to include an environment with your shared collections

The ways that you can include an environment with your button will depend on which Run in Postman button you want to work with.

**Dynamic buttons:** You can include the environment from the "Embed" tab or with the Run in Postman API.

**Static buttons:** With the static (JSON) button, you can only include the environment from the "Embed" tab.

### Include the environment from the "Embed" tab

When you include and environment from the "Embed" tab, you can do it when you first create your button or for a button that already exists.

[![select environment](Environments in RIP gif.gif)

1. From the Postman app, go to the collection that you created or will create the Run in Postman button for.
1. To the right of the collection name, click the ellipses **(...)** > **Share collection**. The Share dialog will pop-up.
1. In the Share dialog, click the "Embed" tab.
  * If you need to create the button first, [create your Run in Postman button](https://learning.postman.com/docs/postman-for-publishers/run-in-postman/creating-run-button/)
1. On the right, above the script panel, click the dropdown to choose an environment.

You'll see the code in the panel change to include the environment parameter.

### Use the Run in Postman API to include the environment on page load

> Only the dynamic (HTML) Run in Postman button exposes the Run in Postman API.

The Run in Postman API uses the `_pm()` method to create or modify client-side environments. For example, You could use the API to pass login credentials to Postman:

```javascript
_pm('env.create', 'Spotify', {
  user_id: 'spotifyuser',
  authorization: 'Bearer 1234xyzd'
});
```

Read more about the [Run button API](https://learning.postman.com/docs/postman_for_publishers/run_button/run_button_API) and how to alter your Run in Postman button's behavior.
