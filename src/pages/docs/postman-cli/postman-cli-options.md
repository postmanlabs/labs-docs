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
    name: "Installing Postman CLI"
    url: "/docs/postman-cli/postman-cli-installation/"

warning: false
tags:
  - "Postman CLI"

---

Commands and options for using Postman CLI.

## Contents

* [Download](#download)
* [Basic](#basic)
* [Login/logout](#login-logout)
* [Run a Postman collection](#run-a-Postman-collection)
* [Lint](#lint)
* [Custom reporters](#custom-reporters)

## Commands

| Command/Option | Description |
|:--|:--|
| [**`postman`**](#postman) | The base command, usually used with other commands like `login` or `collection`. |
| `--help` | Return information about Postman CLI commands and options. |
| `--version` | Return the version number for Postman CLI.  |
| [**`postman collection run`**](#postman-collection-run-uuid-or-file-name) | Run a collection with a UUID or a local file. |
| `--bail` | Stop the runner when a test case fails. |
| `--color` | Turn off colored output (auto\|on\|off) (default: "auto") |
| `--cookie-jar` | Specify the file path for a JSON Cookie Jar. Uses `tough-cookie` to deserialize the file. |
| `--delay-request` | Specify a delay (in milliseconds) between requests [number]. |
<!--TODO - Add more description to whichever `disable reporter` command is decided on and delete the other.-->
| `--disable-cli-reporter` | Disable reporting results to the CLI. |
| `--disable-default-reporters cli` | Disable reporting to Postman |
| `--disable-default-reporters postman` | Disable reporting to Postman. |
| `--disable-postman-reporter` | Disable reporting to the Postman cloud. |
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
| `--exclude-governance-rules` | Ignore governance rules at the time of linting. |
| `--exclude-security-rules` | Ignore security rules at the time of linting. |

## Downloading the installation package

Use the URLs below in your script to download the Postman CLI installation package. You can also download the installation packages manually from the Postman [downloads](https://www.postman.com/downloads/) page.

### Linux

    https://dl-cli.pstmn.io/download/latest/linux64

### Mac

    https://dl-cli.pstmn.io/download/latest/osx_64

### Windows

    https://dl-cli.pstmn.io/download/latest/win64

### Example - programmatic download

    curl https://dl-cli.pstmn-beta.io/download/latest/linux/postman-cli.zip -o postman-cli.zip

---

## postman

The base command.

### Example

    postman -v

### Options

#### --help, -h

Returns information about Postman CLI commands and options.

#### --version, -v

Returns the version number for Postman CLI.

---

## postman collection run <UUID or file-name>

Run a collection with options. Specify the collection with its UUID or file name.

### Example

    postman collection run --folder myCollectionFolderName myCollectionFile.json

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

#### --env-var "[environment-variable-name]=[environment-variable-value]"

Set environment variables in a key=value format on the command line. You can add multiple environment variables using `--env-var` multiple times, for example:

    `--env-var "key1=value1" --env-var "key2=value2"`.

#### --export-cookie-jar [path]

The path to the file where Newman will output the final cookie jar file before completing a run. Uses `tough-cookie` to serialize the file.

#### --global-var "[global-variable-name]=[global-variable-value]"

Specifies global variables on the command line, in a key=value format. Multiple global variables can be added by using `--global-var` multiple times, for example:

    `--global-var "this=that" --global-var "alpha=beta".`

#### --ignore-redirects

Turn off automatic following of `3XX` responses.

#### --insecure, -k

Turn off strict SSL.

#### --silent

Turn off terminal output.

#### --suppress-exit-code, -x

Continue running tests even after a failure, but exit with `code=0`

#### --timeout [number]

Specify the time (in milliseconds) to wait for the entire collection run to complete execution.

#### --timeout-request [number]

Specify a request timeout (in milliseconds) for a request.

#### --timeout-script [number]

Specify the time (in milliseconds) to wait for scripts to complete execution.

#### --verbose

Show detailed information of collection run and each request sent.

#### --working-directory

Specify the path to the working directory.

#### -r

Run a collection with a custom reporter.

---

## postman api lint <UUID or file-name>

Run validation checks for governance and security rules against the api definition provided in the Postman config file, a local file, or a UUID. You can only lint single-file definitions. Shows a warning if unable to find `<api-id>` to send data back to Postman.

> Supports APIs that are stored on Postman and aren't linked to Git.

### Example

    postman api lint my-definition-file.json

### Options

#### --disable-postman-reporter

Don't upload data to Postman after linting.

#### --exclude-governance-rules

Ignore governance rules at the time of linting.

#### --exclude-security-rules

Ignore security rules at the time of linting.

---
