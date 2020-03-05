---
title: "Environments in Run in Postman"
page_id: "environments_run_button"
warning: false
---

## Environments, variables, and the Run in Postman button

You can leverage environments in Postman to keep your collections DRY by saving globals and variables that you use repeatedly. When you include an environment with the collections that you share with your teammates and customers, they can input their own variable values in the environment template. This helps them work just as efficiently, and with information that's relevant to their work.

For example, if you have a request in your collection that requires a username and password and everyone on your team has their own credentials, they can use variables for the credentials, allowing everyone to work with the request and share the collection without sharing their personal information.

Find out more about how to create [environment templates](https://learning.postman.com/docs/postman/variables-and-environments/variables/).

When you [create a Run in Postman button](https://learning.postman.com/docs/postman-for-publishers/run-in-postman/creating-run-button/) for your API documentation, website, or GitHub repo, you can include an environment that will open along with your collection when someone clicks your button.  

## Use the Run in Postman button to include an environment with your shared collections

The ways that you can include an environment with your button will depend on which Run in Postman button you want to work with.

**Dynamic buttons:** You can include the environment from the "Embed" tab or with the Run in Postman API.

**Static buttons:** With the static (JSON) button, you can only include the environment from the "Embed" tab.

### Include the environment from the "Embed" tab

When you include and environment from the "Embed" tab, you can do it when you first create your button or for a button that already exists.

[![select environment](https://www.postman.com/img/v2/docs/environments/share_select_env.png)](https://www.postman.com/img/v2/docs/environments/share_select_env.png)

1. From the Postman app, go to the collection that you created or will create the Run in Postman button for.
1. To the right of the collection name, click the ellipses (...) > Share collection. The Share dialog will pop-up.
1. In the Share dialog, click the "Embed" tab.
  1. If you need to create the button first, [create your Run in Postman button](https://learning.postman.com/docs/postman-for-publishers/run-in-postman/creating-run-button/)
1. On the right, above the script panel, click the dropdown to choose an environment.

You'll see the code in the panel change to include the environment parameter.

> If you're working with the dynamic button, you can now work with the Run in Postman API to alter your buttons behavior. Find out how to work with the [Run in Postman API](https://learning.postman.com/docs/postman-for-publishers/run-in-postman/run-button-API/).

### Use the Run in Postman API to include the environment on page load



Postman also provides an API using the `_pm()` method to programmatically generate an environment client-side. Read more about the [Run button API](https://learning.postman.com/docs/postman_for_publishers/run_button/run_button_API) and how to dynamically alter button behavior.

```javascript
_pm('env.create', 'Spotify', {
  user_id: 'spotifyuser',
  authorization: 'Bearer 1234xyzd'
});
```

A possible application for this would be to pass your signed in user’s access credentials to Postman, as illustrated in the example above.

Note that this method works only with the Dynamic (HTML and CSS) button, and not the Markdown button. The `_pm()` method can be used anywhere on the page, after the embedded script tag.
