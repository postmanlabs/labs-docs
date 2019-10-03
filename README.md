![Postman logo](https://assets.getpostman.com/common-share/postman-github-logo.png "Postman logo")

# Postman Learning Center

Postman is the collaboration platform for API development. And the [Postman Learning Center](https://learning.getpostman.com/) has the resources you need to ramp up quickly and extend your skills with Postman.

## Contribution guidelines

We would love for you to contribute to the Learning Center! To contribute to this project, please read:

* The [Code of Conduct](CODE_OF_CONDUCT.md)
* The [Contribution Guidelines](CONTRIBUTING.md)
* [Setting up your GitHub Pages site locally with Jekyll](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/)

**NOTE:** We have added a new Markdown linter with GitHub Actions. When making a pull request, it will run against this linter. Your changed files are required to pass linting before they will be merged. More information on this can be found in the [contribution guidelines](CONTRIBUTING.md).

## Build your Jekyll site locally

```
   $ bundle exec jekyll serve
```

For more information and help with local builds, see [Jekyll's docs](https://jekyllrb.com/docs/).

## Project Structure

There are 2 independent versions of docs currently in the project (/v5 and /v6). The /v6 docs are the current version (/v5 docs are archived, please do not contribute to them at this time.)

### To update the docs

* Posts are maintained under the `/v6` folder.

* The folder structure of /v6 is the URL structure for posts. For example, `/v6/postman/environments_and_globals/sessions.md` is mapped to URL `https://learning.getpostman.com/docs/postman/environments_and_globals/Sessions/`.

* Links in the docs should be relative. Example:

```
   [Newman](/docs/postman/collection_runs/command_line_integration_with_newman/)
```

## Resources

* [Download Postman](https://www.getpostman.com/downloads/)
* [Postman Release Notes](https://www.getpostman.com/downloads/release-notes)
* [Postman Integrations](https://www.getpostman.com/integrations/)
* [The Postman API](https://docs.api.getpostman.com/)
* [Postman Release Notes](https://www.getpostman.com/downloads/release-notes)
* [Postman community](https://community.getpostman.com/) on Discourse.

## License

[Apache License 2.0](LICENSE)
