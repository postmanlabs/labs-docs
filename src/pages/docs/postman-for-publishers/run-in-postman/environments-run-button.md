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

Including a shared environment with a shared collection can be useful in prompting users to input their own personal information with their own version of the template.  

There are 2 ways to include an environment with the shared collection using the Run in Postman button.

### While generating the embed code

[![select environment](https://assets.postman.com/postman-docs/share-select-env.png)](https://assets.postman.com/postman-docs/share-select-env.png)

Select the environment name from the dropdown, as shown in the screenshot above. The environment is now embedded within the generated HTML/Markdown and will be imported when your user clicks the button.

### On page load using Run in Postman’s JavaScript API

Postman also provides an API using the `-pm()` method to programmatically generate an environment client-side. Read more about the [Run button API](/docs/postman-for-publishers/run-in-postman/run-button-API/) and how to dynamically alter button behavior.

```javascript
_pm('env.create', 'Spotify', {
  user_id: 'spotifyuser',
  authorization: 'Bearer 1234xyzd'
});
```

A possible application for this would be to pass your signed in user’s access credentials to Postman, as illustrated in the example above.

Note that this method works only with the Dynamic (HTML and CSS) button, and not the Markdown button. The `_pm()` method can be used anywhere on the page, after the embedded script tag.
