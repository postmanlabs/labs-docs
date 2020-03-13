---
title: "Run in Postman button API"
order: 335
page_id: "run_button_API"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Intro to Postman API"
    url: "https://learning.postman.com/docs/postman/postman-api/intro-api"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Intro to scripts"
    url: "https://learning.postman.com/docs/postman/scripts/intro_to_scripts"
---


The JavaScript Run in Postman API is accessible through the dynamic Run in Postman button. The API is a collection of 3 JavaScript methods that operate on the `pm()` method. You can leverage the method to alter your button's behavior.

>To work with the Run in Postman API, you'll need permission to edit your website's source code.

Find out more about [environments and variables](/docs/postman/collection-runs/using-environments-in-collection-runs/) in Postman.

## Use the methods

With the `pm()` methods, you can use your button to:

* Create a new environment
* Modify an existing environment
* Replace an environment
* Use several buttons on a single page with segregated environments, each button with its own environment

### Where to write your code

 You'll write your code in your website's source code. Go to the website where your button is embedded and find the script in the source code. From there, you can write the functions you want to use to alter your button's behavior.

### Create a new environment

Use the `env.create` method to create a new environment:

```javascript
_pm('env.create', 'environment_name', {key: value});
```

> `env.create` cannot be used to create duplicate environments. Calls made with existing environment names will fail.  

#### Example

Create a new environment using API keys entered by your user:

```javascript
function () {
  var stagingKey = document.getElementById('staging-key-input').value,
    productionKey = document.getElementById('production-key-input').value,
    envData = {
      stagingKey: stagingKey,
      productionKey: productionKey
    };

  _pm('env.create', 'API Keys', envData);
}
```

The `env.create` action will return truth on success, false on failure.

### Edit an existing environment

Use `env.assign` method to modify an environment:

```javascript
_pm('env.assign', 'environment_name', {key: new_value, new_key: value})
```

> The `env.assign` method works for environments that were included in the Run in Postman button when it was created, or environments that were added via the `env.create` method.
> `env.assign` cannot be used to create new environments. Calls made using `env.assign` will fail if the environment does not already exist.

#### Example

Update an environment's API keys:

```javascript
function () {
  var stagingKey = document.getElementById('staging-key-input').value,
    productionKey = document.getElementById('production-key-input').value,
    envData = {
      stagingKey: stagingKey,
      productionKey: productionKey
    };

  _pm('env.assign', 'API Keys', envData);
}
```

The `env.assign` action will return truth on success, false on failure.

### Replace an existing environment

Use the `env.replace` method to replace an entire environment:

```javascript
_pm('env.replace', 'environment_name', {key: value})
```

> `env.replace` cannot be used to replace an environment which does not exist.

#### Example

Replace an environment:

```javascript
// Existing environment named 'user_data'
// {
//   auth_token: 'q4yugoiwqu4hlrjksfdm3897ryq3891s',
//   user_id: '823',
//   session_data: {}
// }

// Replace the 'user_data' environment
_pm('env.replace', 'user_data', {});
```

The `env.replace` method will return truth on success, false on failure.

### Use multiple buttons

To have multiple buttons on a single page with segregated environments, each with its own button, you need to enable segregateEnvironments in configuration.

```javascript
_pm('_property.set', 'segregateEnvironments', true);
```

#### Include `runButtonIndex`

If segregateEnvironments is enabled, you'll have to include `runButtonIndex` every time you work with the Run in Postman API. The index is the integer indicating the position of one button in a group of buttons in the DOM.

```javascript
var runButtons = Array.prototype.slice.call(document.getElementsByClassName('postman-run-button')),
  runButtonIndex = runButtons.indexOf(elem);
```

#### `runButtonIndex` for jQuery

```javascript
var runButtonIndex = $('postman-run-button').index(elem);
```
