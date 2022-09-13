---
title: "Postman CLI overview"
updated: 2022-09-15
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Using the Collection Runner"
    url: "/docs/running-collections/intro-to-collection-runs/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Installing the Postman CLI"
    url: "/docs/postman-cli/postman-cli-installation/"
warning: false
---

The Postman CLI is a secure command-line companion for Postman. The Postman CLI is similar to Newman, but the Postman CLI is secured and supported by Postman. The Postman CLI enables you to:

* Run a collection with its collection ID or path.
* Send run results to Postman by default.
* Supports log in and log out.
* Lint an API and run validation checks for governance and security rules.

## Contents

* [Comparing the Postman CLI and Newman](#comparing-the-postman-cli-and-newman)
* [Deciding which command-line companion to use](#deciding-which-command-line-companion-to-use)

## Comparing the Postman CLI and Newman

The table below shows some high-level differences between the Postman CLI and Newman.

| Postman CLI  | Newman  |
|---|---|
| Created by Postman | Created by Postman |
| Secured by Postman | Secured by user |
| Closed source; supported by Postman | Open source; supported by community contributions |
| Supports collection runs| Supports collection runs  |
| Automatically sends collection run results to Postman by default | Supports ingesting run results to Postman using a reporter |
| Package is signed by Postman | Package isn't signed by Postman |
| Distributed as a downloadable package | Distributed on npm |
| Downloadable programmatically | Downloadable programmatically
| Not available as a library | Available as a library
| Supports log in and log out | Doesn't support log in and log out |
| Supports API linting | Doesn't support API linting |

## Deciding which command-line companion to use

Both the Postman CLI and Newman enable you to run and test collections directly from the command line. One may be a better fit than the other, depending on your use case or preferences.

For example, assume you already manage your own security for open-source software, and you want to run collections from a script. Also assume you want visibility into any software you build into your CI/CD pipeline. Newman would be a good fit for this use case because Newman's repository is public and Newman isn't signed or secured by Postman.

Here's another example. Assume you don't already support or secure any open-source software, and you want any software you use to be signed and secured by its developer. The Postman CLI would be a good fit for this use case because the Postman CLI is signed and secured by Postman.
