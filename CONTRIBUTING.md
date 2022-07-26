# Contributing

When contributing to this repository, please first discuss the change you wish to make at [Issues](https://github.com/postmanlabs/postman-docs/issues).

We have a [code of conduct](https://www.postman.com/code-of-conduct) that you're expected to follow in all your interactions with the project.

## Development process

### Prerequisites

This site is built with Node.js v14.17.1. We recommend installing and using [nvm](https://github.com/nvm-sh/nvm), a version manager for Node.js. After you install nvm, use it to set your node version to v14.17.1.

**Note for Mac users**: If you are using a Mac with an Apple M1 chip, you may need to create a Rosetta version of Terminal to download nvm and the dependencies needed by this GitHub repo. For more information, see this guide on [creating a Rosetta terminal](https://www.courier.com/blog/tips-and-tricks-to-setup-your-apple-m1-for-development). After you create a Rosetta terminal, use it to install nvm, then proceed with the rest of the workflow outlined here.

### Troubleshooting local development

If you run into issues when running the Learning Center locally, try the following:

1. Check the Node.js version (`node -v`) to ensure you are using `v14.17.1`. If not, enter `nvm use v14.17.1`.
1. Enter `rm -rf node_modules; npm i` to remove all existing packages and perform a fresh install.
1. Enter `gatsby clean` to clear the cache.

If you still have issues running the Learning Center locally, feel free to [open an issue](https://github.com/postmanlabs/postman-docs/issues).

### Workflow

We follow [Git Flow](https://guides.github.com/introduction/flow/) for changes to this repository. If you're not familiar with using git and GitHub on the command line, [GitHub Desktop](https://desktop.github.com) is an easier alternative.

1. Fork this repo to create a copy hosted on your GitHub account. The Fork button is in the top right of the page.
    * If you're a collaborator on the repo you can instead create a branch.
1. Clone down your copy of this repo onto your local machine: `git clone <YOUR GITHUB REPO URL>`
1. Navigate to the new directory git created: `cd postman-docs`
1. Check out the `develop` branch: `git checkout develop`
1. Run `npm install` to add all dependencies.
1. Create a new branch for your work based on develop: `git checkout -b <YOUR BRANCH NAME>` Your branch name should be something descriptive of the changes you wish to make, and can include the issue number this change is associated with. Example: `feature/1234-update-mock-api-docs`
1. Make your changes. The Learning Center's documentation is built from the `.md` files in the `/src/pages/docs` folder of the repo.
1. Check your files are valid markdown by running `npm run test:mdlint` and resolve any errors.
1. When you're ready to apply your changes, push your changed files to your forked repo:
    * `git add <FILENAMES OF CHANGED FILES>`
    * `git commit -m "<YOUR COMMIT MESSAGE>"` Your commit message should be descriptive of the changes you made.
    * `git push -u origin HEAD` This will push your changes to the branch you created on your forked repo.
1. Open a Pull Request to the `postman-docs` repo:
    * Navigate to the [postman-docs](https://github.com/postmanlabs/postman-docs) repo
    * Select `New pull request`
    * Select `Compare across forks`
    * Select `base repository: postmanlabs/postman-docs`
    * Select `base branch: develop`
    * Select `head repository: <YOUR FORKED REPOSITORY>`
    * Select `head branch: <YOUR BRANCH NAME>`
    * Select `Create pull request`

Your pull request will be reviewed and we'll get back to you!

## Pull Request Process

When your PR is opened it will run GitHub Actions which will lint the markdown files to ensure that they follow our [guidelines](https://github.com/DavidAnson/vscode-markdownlint).

Upon approval your PR will be merged into develop for further verification and then merged into production upon final approval. Please delete your branch once it's been merged to develop to help keep a clean repository.

[homepage]: https://learning.postman.com

> __Staff and Repo Collaborators__: Please only push to `develop` when changes are ready to publish. The `develop` branch is intended only as a last check to see edits live on the web in a production type build environment before publishing—changes shouldn't sit on the `develop` branch for long before pushing to `master`.

## Adding/Editing Links

If you would like to add, edit, or replace links you are welcome to do so. There are two types of links in the docs, and using a correct format is important to help reduce 3xx redirects and broken links.

### Internal links to docs

When creating or editing an internal link (a link that points to a Learning Center doc), be sure to:

* use a relative URL. Example: `/docs/collaborating-in-postman/working-with-your-team/collaboration-overview/`
* use a trailing slash to keep our app from creating unnecessary 302 redirects. (See example of trailing slash above.)
* use a leading slash to keep the doc page from 404'ing. (See example of leading slash above.)
* `npm run dev` the app and check links you have added / edited to ensure they work correctly.

### External links

When creating or editing an external link (a link that points to sources outside of Learning Center), be sure to:

* Use an absolute URL. Example: `https://www.postman.com`
* Use the resolved URL. Don't use abbreviated URLs (postman.com) or URLs that redirect (`http://www.postman.com`). **Tip:** Enter the URL into the browser and let it resolve, and copy the entire URL and use that.
* Strip off any UTM parameters or unnecessary query strings or tracking at the end of URLs. Example: `?utm_source=blog&utm_medium=internal&utm_campaign=exampleCampaign`
* As a best practice for accessibility, add titles to external links to help the visitor understand the purpose of the link and why they will be taken away from the Learning Center. Example: `[Postman API Platform](https://www.postman.com/api-platform/  "Visit the Postman website to learn more about the Postman API Platform")`

## Adding and editing images

If you would like to add, edit, or replace images you are welcome to do so. There are two ways in which you can achieve this:

* You can upload the image to your GitHub Pull-Request and link the image
* You can host the image and link to your own hosted image

**Note**:

Images hosted by Postman should always be referenced as follows:

``` bash
https://assets.postman.com/postman-docs/<filename>.png
```

## Adding and editing code blocks

If you would like to add, edit or replace Markdown code blocks you are welcome to do so. There are two things in which you need to know:

* We use Prism.js in a Gatsby plugin [gatsby-remark-prismjs](https://www.gatsbyjs.com/plugins/gatsby-remark-prismjs/#usage-in-markdown "See usage in markdown documentation")
* Add a language declaration after the opening three backticks ` ``` ` For example:

```markdown
    ```json
    {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "definitions": {},
    "id": "http://example.com/example.json",
    "properties": {
        "collection": {
        "id": "/properties/collection",
        "properties": {},
        "type": "object"
        }
    },
    "type": "object"
    }
    ```
```

For a list of supported languages by the Prism syntax highlighter, [read more](https://lucidar.me/en/web-dev/list-of-supported-languages-by-prism/). When in doubt, use `text`, `bash` or `shell` to keep the code block from interfering.

## Algolia

Please note that Algolia search won't work when running the app locally. If you wish to search when running the app locally, you are welcome to use your own Algolia API keys and index the app in your own Algolia account. You can find an `env.example` file in the repo that shows you what keys you require to run Algolia search.

## Right sidebar - recent blog posts

The right sidebar has a feature flag for pulling in up to three contextual, recent blog posts based on a tag. This functionality and flag can be found in the front matter of the doc `.md` files. It utilizes our webhook and backend-for-frontend (BFF) service to source the latest 100 blog posts from blog.postman.com.

Two example docs using `dynamic_blog`:

* `/docs/running-collections/intro-to-collection-runs.md`
* `/docs/running-collections/scheduling-collection-runs.md`

### Using the dynamic blog posts feature

#### For internal Postman contributors

You need to get the `.env.development` file from Marketing Engineering, and place in root of local Learning Center (`.gitignore` will keep it from getting checked in).

* If you don't have this file or are an external contributor, the app will still build, but the Recent Blogs section in right sidebar will be hidden / blank (this is expected behavior).
* The `.env.development` file is for internal use only.

#### Updating from hard-coded blog links to dynamic

Open the doc file `.md` that you want to edit right sidebar, and look for `contextual_links` in front matter. Look for the presence of existing recent Blogs posts like:

~~~~
- type: subtitle
    name: "Blog Posts"
- type: link
    name: "Check for broken links on your website using a Postman Collection"
    url: "https://blog.postman.com/check-for-broken-links-on-your-website-using-a-postman-collection/"
~~~~

Replace with:

~~~~
- type: dynamic_blog
name: "Blog Posts"
blog_tag: "PUT_TAG_NAME_HERE"
~~~~

NOTE: `type: link` and `type: url` are being replaced with `blog_tag: “PUT_TAG_NAME_HERE”`

#### Adding new dynamic links

Open doc file that you want edit right sidebar, and add:

~~~~
- type: dynamic_blog
    name: "Blog Posts"
    blog_tag: "PUT_TAG_NAME_HERE"
~~~~

### blog_tag is an enum

The list of acceptable values for `blog_tag` are the slugs for tags in the blog. The `blog_tag` value is a string and only accepts one tag. To yield contextual posts for your doc page, use one of the following machine-readable blog tags in use today:

* `api-development`
* `api-network`
* `automation`
* `aws`
* `case-study`
* `collections`
* `continuous-delivery`
* `data`
* `developers`
* `documentation`
* `enterprise-plan`
* `graphql`
* `integrations`
* `monitors`
* `newman`
* `news`
* `openapi`
* `postman`
* `postman-community`
* `public-workspaces`
* `rest-api`
* `security`
* `state-of-the-api`
* `testing`
* `tutorials`
* `visualizer`
* `workflow`
* `workspaces`

NOTE: these tags pull from the latest 100 blog posts. We display **up to 3** blog posts for that tag. A return of zero or malformed tag enum will collapse / hide section.

## Running checks locally

Before creating a PR we STRONGLY recommend to running the following test locally to check that all changes will pass our linters:

* `npm run test`  -> runs the Unit testing
* `npm run test:mdlint` -> runs the Markdown linter
* `npm run test:lint` -> runs the ESlinter
* `npm run test:url` -> checks if acceptable image URL has been added
* `npm run test:update` -> updates the test snapshots
* `npm run dev` -> runs a server on http://localhost:8000/ so you can view changes locally

## Checking style with Vale

[Vale](https://vale.sh) is an open-source, command-line linter for prose. When run, it works like a code linter, generating a list of warnings for writing issues in content. But instead of static code analysis, Vale checks the prose within documents against predefined style guides. There are several predefined style guides, or you can also develop your own. Postman uses two predefined style guides (Microsoft and write-now), plus there are several of our rules and a configuration file included in this repo.

To use Vale, you must install it. Then you can run Vale to check your work for style errors.

### Installing Vale

1. Install brew:

    ```
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```

    (See [https://brew.sh/](https://brew.sh/) for more info)

1. Install the app (macOS):

    ```
    brew install vale
    ```

1. Download the third-party styles. Run this in the root of your `postman-docs` repo:

    ```
    build/pm-get-vale-styles
    ```

1. Run `vale ls-config` to make sure everything works. It will output your config as a JSON, or an error.

### Running Vale

To run Vale on all files in the repo:

```
vale .
```

You can also run on one file, or one directory:

```
vale src/pages/docs/developer/runtime-library.md
vale src/pages/docs/developer
```
