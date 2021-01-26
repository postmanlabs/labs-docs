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
    name: "Generate a Run in Postman Button | Postman Level Up"
    url: "https://www.youtube.com/watch?v=r2DGy4jSuUE&list=PLM-7VG-sgbtC5tNXxd28cmePSa9BYwqeU&index=8"
  - type: link
    name: "API documentation with Postman"
    url: "https://www.youtube.com/watch?v=Ayo_KdLLcTA"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Square simplifies API docs with the Run in Postman button"
    url: "https://blog.postman.com/square-simplifies-api-docs-with-the-run-in-postman-button/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Documenting your API"
    url: "/docs/publishing-your-api/documenting-your-api/"
  - type: link
    name: "Managing environments"
    url: "/docs/sending-requests/managing-environments/"

---

One way to [share your Postman Collections](/docs/collaborating-in-postman/sharing/) is to create a stand-alone Run in Postman button. You can embed the button in your website or a README to let developers interact with your API more quickly.

> The Run in Postman button also works with API specification formats like OpenAPI and RAML. To create a button for the standard you use, first convert the file to a collection by [importing it into Postman](/docs/getting-started/importing-and-exporting-data/) or by [authoring your specification in Postman](/docs/designing-and-developing-your-api/the-api-workflow/) to generate a collection.

## Contents

* [Creating a Run in Postman button](#creating-a-run-in-postman-button)
* [Keeping your collections up to date](#keeping-your-collections-up-to-date)
* [Next steps](#next-steps)

## Creating a Run in Postman button

Make sure you're signed in to your Postman account, and that you have a collection to share.

1. In the Postman app, open the collection you want to share.
2. Next to the collection name, expand the collection details and click the **Share** button to open a modal.
3. Tab over to **Embed**.
4. Click **Generate code**.
5. Choose a dynamic or static button:
   * **Dynamic button**: This button uses JavaScript, HTML and CSS, so you can customize the button for a website. You can also access the [Run in Postman API](/docs/publishing-your-api/run-in-postman/run-button-API/) to dynamically create and update environments.
   * **Static button**: This button uses Markdown, so you can display it in a README, blog, or other Markdown document.
6. You can optionally include an environment to embed with your collection. On the right, click the **Environment** drop-down and choose the environment.
7. Click **Copy to clipboard**.
8. Embed the code where you would like the button to be displayed.

![Create a button](https://assets.postman.com/postman-docs/Creating+RIP+button+gif.gif)

Your embed code will include your collection's ID. In the examples below, `:collection_id` is a placeholder for that ID. If you choose to include an environment in your button, the code will also have the environment parameter.

**Sample markdown snippet:**

```markdown
[![Run in Postman](https://run.pstmn.io/button.svg)](https://www.postman.com/run-collection/:collection_id)
```

**Sample HTML snippet:**

```html
<div class="postman-run-button"
data-postman-action="collection/import"
data-postman-var-1=":collection_id"></div>
<script type="text/javascript">
  (function (p,o,s,t,m,a,n) {
    !p[s] && (p[s] = function () { (p[t] || (p[t] = [])).push(arguments); });
    !o.getElementById(s+t) && o.getElementsByTagName("head")[0].appendChild((
      (n = o.createElement("script")),
      (n.id = s+t), (n.async = 1), (n.src = m), n
    ));
  }(window, document, "_pm", "PostmanRunObject", "https://run.pstmn.io/button.js"));
</script>
```

> You can include an environment along with a collection in your Run in Postman button. The dynamic button gives you access to the [Run in Postman API](/docs/publishing-your-api/run-in-postman/run-button-API/) to create and modify environments.

## Keeping your collections up to date

When you make changes to a collection that's shared with a Run in Postman button, you'll need to manually update the button's collection link so that your users import the most recent version of your collection.

1. In the Postman app, open the original collection.
2. Next to the collection name, expand the collection details and click the **Share** button to open a modal.
3. Tab over to **Embed** > **Update link**.

[![Embed button](https://assets.postman.com/postman-docs/59020943.png)](https://assets.postman.com/postman-docs/59020943.png)

The collection imported by users is a copy of the original, so updates made to the original are not updated in these copies. Users must import the latest collection to see updates made to the original collection.

## Next steps

Read more about the [Run in Postman API](/docs/publishing-your-api/run-in-postman/run-button-API/) and learn how to add and update environments with your button.
