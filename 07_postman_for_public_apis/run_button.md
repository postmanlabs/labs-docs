The Run in Postman button opens a collection of API endpoints directly in the user's Postman app. You can embed the button in your documentation to link a collection of endpoints and workflows that help developers onboard onto your API faster. 

To create a button that links to a collection, go through the following steps.

1. Sign into your Postman app. If you have not yet created an account with us, this is your cue to do so.
2. 
If you do not have it already, create the collection of requests you would like to link to in your documentation. You can learn how to create a collection [here][0].

We recommend you creating collections for the list of endpoints as well as specific workflow examples. Examples help learn faster.

Keep in mind, Run in Postman works well with Swagger and RAML too. Just convert your file to a Collection by [importing it in Postman][1].
3. 
Click on the collection you would like to embed and hit Share.
![](https://www.getpostman.com/img/v1/docs/run_button/run_button_1.png)
4. 
Choose the Get Embed Code option and pick whether you would like a CSS button or a markdown button:
  
The CSS option works well if you want to add the button to your own website, and can edit the source code. 
  
The markdown option works if you need to add the button to a markdown document, like a README.md file in your Github or Bitbucket repository.
![](https://www.getpostman.com/img/v1/docs/run_button/run_button_2.png)

Here's an example,

Markdown snippet

    [![Run in Postman](https://run.pstmn.io/button.svg)](https://www.getpostman.com/run-collection/:collection_id)

Converted to HTML

    <a href="https://www.getpostman.com/run-collection/:collection_id" target="_blank"><img src="https://run.pstmn.io/button.svg" alt="Run in Postman"></a>

The `:collection_id` is a placeholder here and will be auto-filled in the markdown snippet.
5. 
Embed this button onto your documentation pages or your GitHub repo's readme for the API. If you are not the dev doing the implementation, you just need to ask the front-end person responsible for where you want to show the button.

**Important** - Once you generate the embed code for a particular collection, the button will point to the collection at that point in time. To update the collection users see, you'll need to update the collection link `(Collection menu > Share > Update)`. 

[0]: https://www.getpostman.com/docs/collections
[1]: https://www.getpostman.com/docs/importing_folders