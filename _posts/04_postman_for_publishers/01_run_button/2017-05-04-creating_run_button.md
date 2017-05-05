---
category: 
  - "docs"
  - "postman_for_publishers"
  - "run_button"
title: "Creating the Run in Postman button"
page_id: "creating_run_button"
warning: false
---

The Run in Postman button is a way to [share your Postman Collection](https://www.getpostman.com/docs/Sharing+collections) and integrate your API docs/developer portal directly with the Postman app. Keep in mind, Run in Postman works well with API description formats like Swagger and RAML too. Just convert your file to a collection by [importing it into Postman](https://www.getpostman.com/docs/Postman+data).

The Run in Postman button imports and opens a collection of API endpoints directly in the user’s Postman app. You can embed the button in your API documentation or your GitHub's README to help developers get up to speed on your API faster.

### Creating the Run in Postman button

To create the Run in Postman button, start in the Postman app. Make sure you are signed in to your Postman account, and that you have a collection to share.

1.  1.  Click on the ellipses (...) next to the collection you would like to embed and select "Share". 

        ![](https://cloud.githubusercontent.com/assets/681190/18237865/29682800-7354-11e6-8991-29f1ed75c5a8.pn)

    2.  Under the **Embed Button** tab, click the **Generate Code** button to upload the collection to the Postman servers.

         ![](https://cloud.githubusercontent.com/assets/681190/18238175/cb547d0a-7357-11e6-8aa3-89e05ad89172.pn)

    3.  Pick whether you would like a Dynamic button or a Static button.

*   *   *   The Dynamic button uses HTML and CSS, and works well if you want to add the button to your own website and you can edit the source code.
        *   The Static button uses Markdown, and works well if you need to add the button to a markdown document, such as a [README.md](http://README.md)file in your Github or Bitbucket repository.

 ![](https://cloud.githubusercontent.com/assets/681190/18238097/ce9f391a-7356-11e6-8600-6896b8957b7e.pn)

Here’s an example markdown snippet:

<div>

<div>

<pre>[![Run in Postman](https://run.pstmn.io/button.svg)](https://www.getpostman.com/run-collection/:collection_id)</pre>

</div>

</div>

Here’s an example HTML snippet:

<div>

<div>

<pre><a href="https://www.getpostman.com/run-collection/:collection_id" target="_blank"><img src="https://run.pstmn.io/button.svg" alt="Run in Postman"></a></pre>

</div>

</div>

The ``:collection_id`` is a placeholder here and will be auto-filled in the markdown snippet.

Embed this button on your documentation pages or your GitHub repo’s README for the API. 
