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
    name: "Installing Postman CLI"
    url: "/docs/postman-cli/postman-cli-installation/"
warning: false
---

Postman CLI is a secure command-line companion for Postman. Postman CLI enables you to:

* Run collections from your terminal.
* Automate collection runs and CI/CD pipelines.

Postman CLI is similar to [Newman](/docs/running-collections/using-newman-cli/command-line-integration-with-newman/), but Postman CLI is secured and supported by Postman. Also, Postman CLI has these extra features:

* Log into Postman from the command line
* Run a collection with its collection ID
* Send run results to Postman by default

## Contents

* [Comparing Postman CLI and Newman](#comparing-postman-cli-and-newman)
* [Deciding to use Postman CLI or Newman](#deciding-to-use-postman-cli-or-newman)

## Comparing Postman CLI and Newman

The table below shows some high-level differences between Postman CLI and Newman.

| Postman CLI  | Newman  |
|---|---|
| Created by Postman | Created by Postman |
| Secured by Postman | Secured by user |
| Supported by Postman | Supported by community contributions |
| Supports collection runs| Supports collection runs  |
| Closed-source | Open-source |
| Automatically sends collection run results to Postman by default | Supports ingesting run results to Postman using a reporter |
| Package is signed by Postman | Package isn't signed by Postman |
| Has a log in/log out command | Must include Postman API key with requests |
| Distributed as a downloadable package | Distributed on npm |
| Downloadable programmatically | Downloadable programmatically
| Not available as a library | Available as a library

### Deciding which command-line companion to use

Both Postman CLI and Newman enable you to run and test collections directly from the command line, but one may be a better fit than the other, depending on your use case or preferences.

For example, assume you already provide your own security for open-source software, and you want to run collections from a script. Also assume you want visibility into any software you build into your CI/CD pipeline. Newman would be a good fit for this use case because Newman's repository is public and Newman is not signed or secured by Postman.

Alternatively, assume you don't already support or secure any open-source software, and you want any software you use to be signed and secured by its developer. Postman CLI would be a good fit for this use case because Postman CLI is signed and secured by Postman.
