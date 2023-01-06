![Postman logo](https://assets.getpostman.com/common-share/postman-github-logo.png "Postman logo")

# Marketing Docs Template

The [Postman Learning Center Docs template](https://learning.postman.com/template) has the resources you need quickly spin up a new repository and page with approved styling and logic in place. This repo is for cloning only, please do not use this repo to create microsites.

## Tech stack

The Docs are build with ReactJS, GatsbyJS Framework andstyled components for styling. The primary header on top and the footer consume the header and footer API from Marketing Engineering. The secondary top navbar as well as the left and right navbars can be adjusted/edited.

Please refer to our [FAQs](https://postmanlabs.atlassian.net/wiki/spaces/MT/pages/4287037690/Marketing+Docs+Template) for documentation on how to edit/adjust the repo. If you have more questions, please reach out to Marketing Engineering.

## How to get started

**TLDR;
Clone down repo, create new GitHub repo, push up changes to new repo, contact MarketingEngineering for deployment**

* Clone down this repo and rename it.
* In your terminal run:

```
npm run nvmrc; nvm use; npm i

```

* Create a new GitHub repo under the PostmanLabs organisation.
* In your terminal run:

```shell
git remote rename origin old-origin
git remote add origin <url of your new repo>
git push origin main:main

```

This sets renames your origin and then points the origin to your new remote github repo. Please reach out to MarketingEngineering and provide the desired path, so that we can spin up a new infra for you.

## License

[Apache License 2.0](LICENSE)
