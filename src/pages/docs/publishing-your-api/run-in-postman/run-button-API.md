---
title: "Coding with Run in Postman"
order: 110
updated: 2022-03-17
page_id: "run_button_API"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Intro to Postman API"
    url: "/docs/developer/intro-api/"
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Dynamically create custom environments with code"
    url: "https://youtu.be/6h2JiMfNU0A"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "How to Dynamically Create Custom Environments with Code"
    url: "https://blog.postman.com/how-to-dynamically-create-custom-environments-with-code/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Intro to scripts"
    url: "/docs/writing-scripts/intro-to-scripts/"
---

Some API publishers use Run in Postman buttons alongside their own API documentation. If users input data in a developer portal, for example, the Run in Postman API can dynamically inject this provided information as environment variable values into the embedded Run in Postman button.

The Run in Postman API uses the `_pm()` method to create or update environments in your website's client-side code through existing dynamic Run in Postman buttons.

As another example, you can use the API to pass login credentials to Postman:

```javascript
_pm('env.create', 'Spotify', {
  user_id: 'spotifyuser',
  authorization: 'Bearer 1234xyzd'
});
```

## Contents

* [Creating a new environment](#creating-a-new-environment)

* [Editing an existing environment](#editing-an-existing-environment)

* [Replacing an existing environment](#replacing-an-existing-environment)

* [Removing an existing environment](#removing-an-existing-environment)

* [Using multiple buttons](#using-multiple-buttons-with-separate-environments)

* [Getting all environments](#getting-all-environments)

* [Next steps](#next-steps)

## Creating a new environment

Use the `env.create` method to create a new environment:

```javascript
_pm('env.create', 'environment_name', {key: value}, runButtonIndex);
```

> You can't use `env.create` to create duplicate environments. Calls made with existing environment names will fail.

Create a new environment using API keys entered by your user:

```javascript
function () {
  var stagingKey = document.getElementById('staging-key-input').value,
    productionKey = document.getElementById('production-key-input').value,
    runButtonIndex = 0,
    envData = {
      stagingKey: stagingKey,
      productionKey: productionKey
    };

  _pm('env.create', 'API Keys', envData, runButtonIndex);
}
```

The `env.create` action will return `true` on success, `false` on failure.

## Editing an existing environment

Use the `env.assign` method to update an environment:

```javascript
_pm('env.assign', 'environment_name', {key: new_value, new_key: value}, preventOveride, runButtonIndex)
```

> The `env.assign` method works for environments that you included in the Run in Postman button when you created it, or environments that you added using the `env.create` method.
> You can't use `env.assign` to create new environments. Calls made using `env.assign` will fail if an environment doesn't already exist.

Update an environment's API keys:

```javascript
function () {
  var stagingKey = document.getElementById('staging-key-input').value,
    productionKey = document.getElementById('production-key-input').value,
    preventOveride = true;
    runButtonIndex = 0,
    envData = {
      stagingKey: stagingKey,
      productionKey: productionKey
    };

  _pm('env.assign', 'API Keys', envData, preventOveride, runButtonIndex);
}
```

The `env.assign` action will return `true` on success, `false` on failure.

## Replacing an existing environment

Use the `env.replace` method to replace an entire environment:

```javascript
_pm('env.replace', 'environment_name', {key: value}, runButtonIndex)
```

> You can't use `env.replace` to replace an environment which doesn't exist.

Replace an environment:

```javascript
// Existing environment named 'user_data'
{
   auth_token: 'q4yugoiwqu4habddef3897ryq3891s',
   user_id: '823',
   session_data: {}
}

// Replace the 'user_data' environment
_pm('env.replace', 'user_data', {});
```

The `env.replace` method will return `true` on success, `false` on failure.

## Removing an existing environment

Use the `env.remove` method to remove an existing environment.

```javascript
_pm('env.remove', 'environment_name', runButtonIndex)
```

To remove an environment:

```javascript
// Existing environment named 'user_data'
{
  auth_token: 'q4yugoiwqu4habddef3897ryq3891s',
  user_id: '823',
  session_data: {}
}

// Remove the 'user_data' environment
_pm('env.remove', 'user_data');
```

The `env.replace` method will return `true` on success or `false` on failure. The specified environment must exist or `env.remove` will fail.

## Using multiple buttons with separate environments

You can embed multiple buttons on a single page. If you want to include a different environment in each button, enable the `segregateEnvironments` property.

```javascript
_pm('_property.set', 'segregateEnvironments', true);
```

> If you enable `segregateEnvironments`, you will have to use `runButtonIndex` in all `pm()` methods to reference each button according to its position in your page [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model). Because `segregateEnvironments` is deactivated by default, `runButtonIndex` is optional by default.

### Including the index

If you enable `segregateEnvironments`, you'll have to use `runButtonIndex` in all `pm()` methods to reference each button according to its position in your page [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model). The `runButtonIndex` is an integer.

```javascript
var runButtons = Array.prototype.slice.call(document.getElementsByClassName('postman-run-button')),
  runButtonIndex = runButtons.indexOf(elem);
```

### Using the index for jQuery

```javascript
var runButtonIndex = $('postman-run-button').index(elem);
```

## Getting all environments

You can use the `get()` method to retrieve an array of all the environments.

```javascript
_pm('_property.get', 'environments')
```

This will return an array of environments:

```json
[
  {
    "button_index": 0,
    "name": "env1",
    "values": [
      {
        "key": "testKey",
        "value": "testValue",
        "enabled": true
      }
    ]
  }
]
```

## Next steps

Learn how to [create API documentation](/docs/publishing-your-api/documenting-your-api/) from Postman, and then add your documentation to your [public workspaces](/docs/publishing-your-api/publishing-your-docs/).
