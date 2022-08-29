---
title: "Postman CLI command options"
updated: 2022-09-15
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Postman CLI overview"
    url: "/docs/postman-cli/postman-cli-overview/"
  - type: link
    name: "Installing the Postman CLI"
    url: "/docs/postman-cli/postman-cli-installation/"

warning: false
tags:
  - "Postman CLI"

---

Commands and options for using the Postman CLI.

## Contents

* [Commands](#commands)
* [Downloading the installation package](#downloading-the-installation-package)
* [postman](#postman)
* [postman login](#postman-login---with-api-key-api-key)
* [postman logout](#postman-logout))
* [postman collection run](#postman-api-lint-api-id-or-file-name(#postman-collection-run-collection-uid-or-file-path)
* [postman api lint](#postman-api-lint-api-id-or-file-name)

## Commands

| Command/Option | Description |
|:--|:--|
| [**`postman`**](#postman) | The base command, commonly used with other commands like `login` or `collection`. |
| `--help` | Return information about Postman CLI commands and options. |
| `--version` | Return the version number for the Postman CLI.  |
| [**`postman login`**](#postman-login---with-api-key-api-key) | Log into Postman. |
| [**`postman logout`**](#postman-logout) | Log out of Postman. |
| [**`postman collection run`**](#postman-collection-run-uuid-or-file-name) | Run a collection with a UUID or a local file. |
| `--bail` | Stop the runner when a test case fails. |
| `--color` | Turn off colored output (auto\|on\|off) (default: "auto") |
| `--cookie-jar` | Specify the file path for a JSON Cookie Jar. Uses `tough-cookie` to deserialize the file. |
| `--delay-request` | Specify a delay (in milliseconds) between requests [number]. |
| `--disable-unicode` | Force the unicode disable option. When supplied, replaces all symbols in the output with their plain text equivalents. |
| `--env-var` | Set environment variables in a key=value format on the command line. |
| `--environment` | Specify a Postman environment as a JSON [file]. |
| `--export-collection` | The path to the file where Postman outputs the final collection file before completing a run. |
| `--export-cookie-jar` | The path to the file where Newman will output the final cookie jar file before completing a run. Uses `tough-cookie` to serialize the file. |
| `--export-environment` | The path to the file where Postman outputs the final environment variables file before completing a run. |
| `--export-globals` | The path to the file where Postman outputs the final global variables file before completing a run. |
| `--folder` | Specify a single folder to run from a collection. |
| `--global-var` | Specify global variables on the command line, in a key=value format. |
| `--globals` | Specify a Postman globals file as JSON [file]. |
| `--ignore-redirects` | Turn off automatic following of `3XX` responses. |
| `--insecure` | Turn off strict SSL. |
| `--iteration-count` | Define the number of iterations to run. |
| `--iteration-data` | Specify a data file to use, either JSON or CSV. |
| `--no-insecure-file-read` | Prevent reading files situated outside the working directory. |
| `--silent` | Turn off terminal output. |
| `--suppress-exit-code` | Continue running tests even after a failure, but exit with `code=0` |
| `--timeout` | Specify the time (in milliseconds) to wait for the entire collection run to complete execution. |
| `--timeout-request` | Specify a request timeout (in milliseconds) for a request. |
| `--timeout-script` | Specify the time (in milliseconds) to wait for scripts to complete execution. |
| `--verbose` | Show the details of the collection run and its data ingestion to Postman. |
| `--working-dir` |Set the path of the working directory to use while reading files with relative paths. |
| `-r` | Run a collection with a custom reporter. |
| [**`postman api lint`**](#postman-api-lint-uuid-or-file-name)| Run validation checks for governance and security rules against the api definition provided in the Postman config file. |
| `--disable-postman-reporter` | Don't upload data to Postman after linting. |
| `--only-governance-rules` | Only use governance rules at the time of linting. |
| `--only-security-rules` | Only use security rules at the time of linting. |

## Downloading the installation package

Use the URLs below in your script to download the Postman CLI installation package. You can also download the installation packages manually from the Postman [downloads](https://www.postman.com/downloads/) page.

### Linux

    https://dl-cli.pstmn.io/download/latest/linux64

### Mac

    https://dl-cli.pstmn.io/download/latest/osx_64

### Windows

    https://dl-cli.pstmn.io/download/latest/win64

### Example - programmatic download

    curl https://dl-cli.pstmn.io/download/latest/linux/postman-cli.zip -o postman-cli.zip

---

## postman

The base command.

### Example

    postman -v

### Options

#### --help, -h

Returns information about Postman CLI commands and options.

#### --version, -v

Returns the version number for the Postman CLI.

---

## postman login --with-api-key <api-key>

Log in with your Postman API key.

### Example

    postman login --with-api-key <api-key>

---

## postman logout

Log out of Postman.

### Example

    postman logout

---

## postman collection run <collection-uid> or <file-path>

Run a collection with options. Specify the collection with its uid or file path.

### Example

    postman collection run --folder /myCollectionFolderName/myCollectionFile.json

### Options

#### --bail

Stop the runner when a test case fails.

#### --color <value>

Turn off colored output (auto\|on\|off) (default: "auto")

#### --cookie-jar [path]

Specify the file path for a JSON Cookie Jar. Uses `tough-cookie` to deserialize the file.

#### --delay-request [number]

Specify a delay (in milliseconds) between requests [number].

#### --disable-unicode

Force the unicode disable option. When supplied, all symbols in the output will be replaced by their plain text equivalents.

#### --environment <uid> or <file-path>

Specify an environment file path or UID.

#### --env-var "[environment-variable-name]=[environment-variable-value]"

Set environment variables in a key=value format on the command line. You can add multiple environment variables using `--env-var` multiple times, for example:

    --env-var "key1=value1" --env-var "key2=value2"

#### --export-cookie-jar [path]

The path to the file where Newman will output the final cookie jar file before completing a run. Uses `tough-cookie` to serialize the file.

#### --global-var "[global-variable-name]=[global-variable-value]"

Specifies global variables on the command line, in a key=value format. Multiple global variables can be added by using `--global-var` multiple times, for example:

    `--global-var "this=that" --global-var "alpha=beta".`

#### --globals <file-path>

Specify the file path for global variables.

#### --iteration <file-path> or <URL>

Specify a data source file (JSON or CSV) to be used for iteration as a path to a file or as a URL.

#### --iteration-count <number>

Specifies the number of times the collection has to be run when used in conjunction with the iteration data file.

#### -i <requestUID> or <folderUID>

Run only the specified folder UID or request UID from the collection.

#### -i <requestName> or <folderName>

Run only the specified folder name or request name from the collection. If there are duplicate names, the Postman CLI will run the folder or request that appears first.

#### --ignore-redirects

Turn off automatic following of `3XX` responses.

#### --insecure, -k

Turn off strict SSL.

#### --no-insecure-file-reads

Prevent reading of files situated outside of the working directory.

#### --override-request-order

Used with `-i`. Runs a collection with the specified order of the requests or folders. For example:

    postman collection run <collectionUID> -i <folder1UID> -i <folder2UID> --override-request-order

#### --reporter <myReporter>

Run a collection with a custom reporter.

    Install custom reporters with `npm install <custom-reporter-name>`

#### --reporter-myreporter-<option-name> <option-value>

Run a collection with custom reporter options. Multiple options can be added.

#### --silent

Turn off terminal output.

#### --suppress-exit-code, -x

Continue running tests even after a failure, but exit with `code=0`.

#### --timeout [number]

Specify the time (in milliseconds) to wait for the entire collection run to complete execution.

#### --timeout-request [number]

Specify a request timeout (in milliseconds) for a request.

#### --timeout-script [number]

Specify the time (in milliseconds) to wait for scripts to complete execution.

#### --verbose

Show detailed information of collection run and each request sent.

#### --working-dir <path>

Set the path of the working directory to use while reading files with relative paths. Default to current directory.

---

## postman api lint <api-id> or <file-name>

Run validation checks for governance and security rules against the api definition provided in the Postman config file, a local file, or a UUID. You can only lint single-file definitions. Shows a warning if unable to find `<api-id>` to send data back to Postman.

> Supports APIs that are stored on Postman and aren't linked to Git.

### Example

    postman api lint my-definition-file.json

### Options

#### --only-governance-rules

Only use governance rules at the time of linting.

#### --only-security-rules

Only use security rules at the time of linting

---
