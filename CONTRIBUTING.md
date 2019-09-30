# Contributing

When contributing to this repository, please first discuss the change you wish to make via [Issues](https://github.com/postmanlabs/postman-docs/issues).

Please note we have a [code of conduct](https://github.com/postmanlabs/postman-docs/Code_of_Conduct.md), please follow it in all your interactions with the project.

## Development Process

We follow [Git Flow](https://guides.github.com/introduction/flow/) for changes to this repository.

  1. Fork this repo to create a copy hosted on your github account. The Fork button is in the top right of the page.
  1. Clone down your copy of this repo onto your local machine: `git clone <YOUR GITHUB REPO URL>`
  1. Navigate to the new directory git created. `cd postman-docs`
  1. Checkout the `develop` branch. `git checkout develop`
  1. Create a new branch for your work based on develop `git checkout -b <YOUR BRANCH NAME>` Your branch name should be something descriptive of the changes you wish to make, and include the Issue number this change is associated with. Example: `1234-update-mock-api-docs`
  1. Run `npm install` to add all dependencies
  1. Make your changes. The Learning Center's documentation is built from the `.md` files in the `v6` folder of the repo
  1. Check your files against our markdown guidelines by running `npm run lint` and resolve any errors
  1. When you're ready to apply your changes, push your changed files to your forked repo
      1. `git add <FILENAMES OF CHANGED FILES>`
      1. `git commit -m "<YOUR COMMIT MESSAGE>"` Your commit message should be descriptive of the changes you made
      1. `git push -u origin HEAD` This will push your changes to the branch you created on your forked repo
  1. Open a Pull Request to the postman-docs repo
      1. Navigate to the [postman-docs](https://github.com/postmanlabs/postman-docs) repo
      1. Click `New pull request`
      1. Click `Compare accross forks`
      1. Select `base repository: postmanlabs/postman-docs`
      1. Select `base branch: develop`
      1. Select `head repository: <YOUR FORKED REPOSITORY>`
      1. Select `head branch: <YOUR BRANCH NAME>`
      1. Click `Create pull request`

Your pull request will be reviewed by administrators and will either be approved, denied, or sent back for changes.

## Pull Request Process

When your PR is opened it will run GitHub Actions which will lint the markdown files to ensure that they follow our [guidelines](https://github.com/DavidAnson/vscode-markdownlint).

Upon approval your PR will be merged into develop for further verification and then merged into master upon final approval.

[homepage]: https://learning.getpostman.com
