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
  - type: section
    name: "Next steps"
  - type: link
    name: "Running a collection with the Postman CLI"
    url: "/docs/postman-cli/postman-cli-run-collection/"
warning: false
tags:
  - "Postman CLI"

---

Commands and options for using the Postman CLI.

## Contents

* [Commands and options - quick reference](#commands-and-options---quick-reference)
* [Downloading and installing](#downloading-and-installing)
* [Logging and and logging out](#logging-in-and-logging-out)
* [Running collections](#running-collections)
* [Governance and security](#governance-and-security)
* [Basic command line options](#basic-command-line-options)

## Commands and options - quick reference

| Command/Option | Details |
|:--|:--|
| [**`login`**](#login) | Log into Postman. |
| [**`logout`**](#logout) | Log out of Postman. |
| [**`postman collection run`**](#postman-collection-run) | Run a collection with a UUID or a local file. |
| `--bail` | Stop the runner when a test case fails. |
| `--color` | Turn off colored output (auto\|on\|off) (default: "auto") |
| `--cookie-jar` | Specify the file path for a `JSON` Cookie Jar. Uses `tough-cookie` to deserialize the file. |
| `--delay-request` | Specify a delay (in milliseconds) between requests. |
| `--disable-unicode` | Force the unicode disable option. When supplied, replaces all symbols in the output with their plain text equivalents. |
| `--env-var` | Set environment variables in a `key=value` format on the command line. |
| `--environment` | Specify a Postman environment as a `JSON` [file]. |
| `--export-cookie-jar` | The path to the file where Postman CLI will output the final cookie jar file before completing a run. Uses `tough-cookie` to serialize the file. |
| `--global-var` | Specify global variables on the command line, in a `key=value` format. |
| `--globals` | Specify a Postman globals file as `JSON` [file]. |
| `--iteration-count` | Define the number of iterations to run. |
| `--iteration-data` | Specify a data file to use, either `JSON` or `CSV`. |
| `-i [UID]` | Runs only the specified folder UID or request UID from the collection. |
| `-i [name` | Runs only the specified folder name or request name from the collection. If there are duplicate names, the Postman CLI runs the folder or request that appears first.|
| `--ignore-redirects` | Prevents the Postman CLI from automatically following 3XX redirect responses.|
| `--insecure`, `-k` | Turns off SSL verification checks and allows self-signed SSL certificates. |
| `--no-insecure-file-read` | Prevents reading of files situated outside of the working directory.|
| `--silent` | Turn off terminal output. |
| `--suppress-exit-code` | Continue running tests even after a failure, but exit with `code=0`. |
| `--timeout` | Specify the time (in milliseconds) to wait for the entire collection run to complete execution. |
| `--timeout-request` | Specify a request timeout (in milliseconds) for a request. |
| `--timeout-script` | Specify the time (in milliseconds) to wait for scripts to complete execution. |
| `--verbose` | Show the details of the collection run and its data ingestion to Postman. |
| `--working-dir` |Set the path of the working directory to use while reading files with relative paths. |
| [**`postman api lint`**](#postman-api-lint)| Run validation checks for governance and security rules against the API Definition provided in the Postman config file. ([Enterprise teams only](https://www.postman.com/pricing/)).|
| [**`postman`**](#postman) | The base command. |
| `--help` | Return information about Postman CLI commands and options. |
| `--version` | Return the version number for the Postman CLI.  |

## Downloading and installing

You can download the Postman CLI installation script with the following commands:

### Linux

``` bash
curl -o- "https://dl-cli.pstmn.io/install/linux64.sh" | bash
```

### Mac (Intel chip)

``` bash
curl -o- "https://dl-cli.pstmn.io/install/osx_64.sh" | bash
```

<!--
### Mac (Apple chip)

``` bash
curl -o- "https://dl-cli.pstmn.io/install/osx_arm64.sh" | bash
```
-->

### Windows

``` bash
powershell.exe -NoProfile -InputFormat None -ExecutionPolicy AllSigned -Command "[System.Net.ServicePointManager]::SecurityProtocol = 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://dl-cli.pstmn.io/install/win64.ps1'))" && SET "PATH=%PATH%;C:\Postman CLI\"
```

---

## Logging in and logging out

You can use the Postman CLI to log in and out of Postman with the `login` and `logout` commands, described below:

### login

This command authenticates the user and stores the [Postman API key](/docs/developer/intro-api#generating-a-postman-api-key) in your filesystem. `login` requires one option, `--with-api-key`, that accepts the Postman API key. The `login` command is required only once per session. Once you've logged in, you remain logged in until you use the `logout` command.

#### Example

``` bash
login --with-api-key ABCD-1234-1234-1234-1234-1234
```

### logout

This command logs you out of Postman and deletes the stored API key.

#### Example

``` bash
logout
```

#### Options

 Option | Details |
|:--|:--|
| `--with-api-key [api-key]` | Authenticate the user with the given API key. |

---

## Running collections

You can run your collections with the `postman collection run` command:

### **postman collection run**

This command runs a collection and sends all run results and responses to Postman servers. You can specify the collection with its file path or Collection ID.

> You can find the collection ID in Postman. First, select **Collections** in the sidebar and select a collection. Then select the information icon <img alt="Information icon" src="https://assets.postman.com/postman-docs/icon-information-v9-5.jpg#icon" width="16px"> in the right context bar to access the collection ID.

#### Examples

``` bash
postman collection run /myCollectionFolderName/myCollectionFile.json

postman collection run 12345678-12345ab-1234-1ab2-1ab2-ab1234112a12
```

#### Options

| Option | Details |
|:--|:--|
| `--bail [optional modifiers]` | Specifies whether or not to stop a collection run on encountering the first test script error. `--bail` can optionally accept two modifiers: `--folder` and `--failure`. `--folder` skips the entire collection run if there are any errors. If a test fails, `--failure` gracefully stops the collection run after completing the current test script. |
| `--color [value]` | Controls colored CLI output. Accepts `on`, `off`, and `auto`. Default is `auto`. With `auto`, Postman CLI attempts to automatically turn color on or off based on the color support in the terminal. This behavior can be modified by using the on or off value accordingly.|
| `--cookie-jar [path]` | Specifies the file path for a `JSON` cookie jar. Uses `tough-cookie` to deserialize the file. |
| `--delay-request [number]` | Specifies a delay (in milliseconds) between requests. |
| `--disable-unicode` | Replaces all symbols in the output with their plain text equivalents. |
| `--environment [UID] or [file-path]`, `-e` | Specifies an environment file path or UID. |
| `--env-var "[environment-variable-name]=[environment-variable-value]"` | Specifies environment variables via the command line, in a `key=value` format. Multiple CLI environment variables can be added by using `--env-var` multiple times, for example: `--env-var "this=that" --env-var "alpha=beta"`.|
| `--export-cookie-jar [path]` | Specifies the path where Postman CLI will output the final cookie jar file before completing a run. Uses `tough-cookie` to serialize the file. |
| `--global-var "[global-variable-name]=[global-variable-value]"` | Specifies global variables via the command line, in a `key=value` format. Multiple CLI global variables can be added by using `--global-var` multiple times, for example: `--global-var "this=that" --global-var "alpha=beta".`|
| `--globals [file-path]`, `-g` | Specifies the file path for global variables. Global variables are similar to environment variables but have lower precedence and can be overridden by environment variables having the same name. |
| `--iteration-count [number]`, `-n` | Specifies the number of times the collection will run when used in conjunction with the iteration data file. |
| `--iteration-data [file-path] or [URL]`, `-d` | Specifies a data source file (`JSON` or `CSV`) to be used for iteration as a path to a file or as a URL.|
|  `-i [requestUID] or [folderUID]` | Runs only the specified folder UID or request UID from the collection. Multiple items can be run in order by specifying `-i` multiple times, for example: `postman collection run collectionUID -i folder1UID -i folder2UID`|
| `-i [requestName] or [folderName]` | Runs only the specified folder name or request name from the collection. If there are duplicate names, the Postman CLI runs the folder or request that appears first.|
| `--ignore-redirects` | Prevents the Postman CLI from automatically following 3XX redirect responses.|
| `--insecure`, `-k` | Turns off SSL verification checks and allows self-signed SSL certificates. |
| `--no-insecure-file-read` | Prevents reading of files situated outside of the working directory.|
| `--silent` | Turns off terminal output.|
| `--suppress-exit-code`, `-x`| Specify whether or not to override the default exit code for the current run.|
| `--timeout [number]`| Specifies the time (in milliseconds) to wait for the entire collection run to complete execution.|
| `--timeout-request [number]`| Specifies a time (in milliseconds) to wait for requests to return a response.|
| `--timeout-script [number]`| Specifies the time (in milliseconds) to wait for scripts to complete execution.|
| `--verbose` | Shows detailed information of collection run and each request sent.|
| `--working-dir [path]`| Sets the path of the working directory to use while reading files with relative paths. Defaults to current directory.

---

## Governance and security

API governance is the practice of applying a defined set of standards consistently across your API design and testing phases of your development process. The Postman CLI includes an API linting command, described below. (This feature is available for [Enterprise teams only](https://www.postman.com/pricing/)).

### postman api lint

This command runs validation checks for governance and security rules against the API definition provided in the Postman config file, a local file, or a UUID. You can only lint single-file definitions. `api lint` shows a warning if unable to find the API ID to send data back to Postman.

> This command supports APIs that are stored on Postman and aren't linked to Git.

#### Example

``` bash
postman api lint my-definition-file.json
postman api lint 8854915-bb7236b2-536e-4bdc-bfa2-fbe2fe1941eb
```

---

## Basic command line options

### postman

This is the base command, usually combined with `collection run` or `api lint`.

#### Example

``` bash
postman -v
```

#### Options

| Option | Details |
|:--|:--|
| --help, -h | Returns information about Postman CLI commands and options.|
| --version, -v| Returns the version number for the Postman CLI.|

---
