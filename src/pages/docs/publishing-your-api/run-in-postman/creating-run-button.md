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

One way to [share your Postman Collections](/docs/collaborating-in-postman/sharing/) is to create a stand-alone Run in Postman button. You can embed the button in your website or a README to let developers interact with your API more quickly. The new Run in Postman button allows you to fork the collections so that they stay up to date by pulling and merging changes.

> Previously, the Run in Postman button worked with API specification formats like OpenAPI and RAML. To create a button for the standard you use, first convert the file to a collection by [importing it into Postman](/docs/getting-started/importing-and-exporting-data/) or by [authoring your specification in Postman](/docs/designing-and-developing-your-api/the-api-workflow/) to generate a collection.

## Contents

* [Creating a Run in Postman button](#creating-a-run-in-postman-button)
* [Next steps](#next-steps)

## Creating a Run in Postman button

Make sure you're signed in to your Postman account, and that you have a collection in a public workspace to share.

> Note: If the collection is present in a public workpspace, you can directly embed the copied code where you would like the button to be displayed. If the collection is present in a team or a personal workspace, [share collection to a public workspace](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#adding-elements-to-workspaces) to create the run in postman button.

* In Postman, open the collection you want to share.
* Next to the collection name, click **...** to expand the collection details and select **Share collection** to open a modal.

* Tab over to **Via Run in Postman**.
* Choose a dynamic or static button:
    * **Dynamic button**: This button uses JavaScript, HTML and CSS, so you can customize the button for a website. You can also access the [Run in Postman API](/docs/publishing-your-api/run-in-postman/run-button-API/) to dynamically create and update environments.
    * **Static button**: This button uses Markdown, so you can display it in a README, blog, or other Markdown document.

* You can optionally include an environment to embed with your collection. On the left, click the **Environment** drop-down and choose the environment.
* Click **Copy code**.

![How to create a run in postman](https://assets.postman.com/postman-docs/how-to-create-run-in-postman-button.jpg)

* Embed the code where you would like the button to be displayed.

![Run in postman](https://assets.postman.com/postman-docs/new-run-in-postman-button.gif)

Your embed code will include your collection's ID. In the examples below, **:collection_id** is a placeholder for that ID and **:collection_url** is a placeholder for url. If you choose to include an environment in your button, the code will also have the environment parameter.

**Sample markdown snippet:**

```markdown
[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/:collection_id)
```

**Sample HTML snippet:**

```html
<div class="postman-run-button"
data-postman-action="collection/fork"
data-postman-var-1=":collection_id"
data-postman-collection-url=":collection_url"></div>
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

Note: When you make changes to a collection that's shared with a live Run in Postman button, you don't need to manually update the button's collection link.

## Next steps

Read more about the [Run in Postman API](/docs/publishing-your-api/run-in-postman/run-button-API/) and learn how to add and update environments with your button.
