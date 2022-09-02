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
| `--cookie-jar` | Specify the file path for a JSON Cookie Jar. Uses `tough-cookie` to deserialize the file. |
| `--delay-request` | Specify a delay (in milliseconds) between requests [number]. |
| `--disable-unicode` | Force the unicode disable option. When supplied, replaces all symbols in the output with their plain text equivalents. |
| `--env-var` | Set environment variables in a key=value format on the command line. |
| `--environment` | Specify a Postman environment as a JSON [file]. |
| `--export-cookie-jar` | The path to the file where Postman CLI will output the final cookie jar file before completing a run. Uses `tough-cookie` to serialize the file. |
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
| [**`postman api lint`**](#postman-api-lint)| Run validation checks for governance and security rules against the api definition provided in the Postman config file. |
| [**`postman`**](#postman) | The base command. |
| `--help` | Return information about Postman CLI commands and options. |
| `--version` | Return the version number for the Postman CLI.  |

## Downloading and installing

<!-- The installation experience is changing, check in with Malvika and the Slack channel.

You can download the Postman CLI manually or with a script (programmatically).

### Manual download

To download manually, use the links below:

#### Linux

`https://dl-cli.pstmn.io/download/latest/linux64`

#### Mac (Intel chip)

`[link mac intel]`

#### Mac (Apple chip)

`[link mac apple]`

#### Windows

`https://dl-cli.pstmn.io/download/latest/win64`

### Programmatic download

To download programmatically, use the commands below:

#### Linux

```
curl [link_linux] -o postman-cli.zip
unzip postman-cli.zip
rm postman-cli.zip
mv postman-cli /usr/local/bin/postman
```

#### Mac OS (Intel chip)

```
curl [link_mac_intel] -o postman-cli.zip
ditto postman-cli.zip
rm postman-cli.zip
mv postman-cli /usr/local/bin/postman
```

#### Mac OS (Apple chip)

````
curl [link_mac_apple] -o postman-cli.zip
ditto postman-cli.zip
rm postman-cli.zip
mv postman-cli /usr/local/bin/postman
````

#### Windows

```
$cliPath = "C:\Postman CLI"
New-Item -type directory -path $cliPath -Force
$client = new-object System.Net.WebClient
$client.DownloadFile("https://dl-cli.pstmn.io/download/latest/win64", "$cliPath\postman-cli.zip")
cd $cliPath
Expand-Archive .\postman-cli.zip .
```
-->
---

## Logging in and logging out

You can use the Postman CLI to log in and out of Postman with the `login` and `logout` commands, described below:

### login

This command authenticates the user and stores the API key in your filesystem. `login` requires one option, `--with-api-key`, that accepts an API key.

#### Example

```
login --with-api-key ABCD-1234-1234-1234-1234-1234
```

### logout

This command logs you out of Postman and deletes the stored API key.

#### Example

```
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

This command runs a collection and sends all run results and responses to Postman servers. You can specify the collection with its UID or file path.

#### Examples

```
postman collection run /myCollectionFolderName/myCollectionFile.json

postman collection run 12345678-12345ab-1234-1ab2-1ab2-ab1234112a12
```

#### Options

| Option | Details |
|:--|:--|
| `--bail [optional modifiers]` | Specifes whether or not to stop a collection run on encountering the first test script error. `--bail` can optionally accept two modifiers: `--folder` and `--failure`. `--folder` skips the entire collection run if there are any errors. If a test fails, `--failure` gracefully stops the collection run after completing the current test script. |
| `--color [value]` | Controls colored CLI output. Accepts `on`, `off`, and `auto`. Default is `auto`. With `auto`, Postman CLI attempts to automatically turn color on or off based on the color support in the terminal. This behavior can be modified by using the on or off value accordingly.|
| `--cookie-jar [path]` | Specifies the file path for a JSON cookie jar. Uses `tough-cookie` to deserialize the file. |
| `--delay-request [number]` | Specifies a delay (in milliseconds) between requests. |
| `--disable-unicode` | Replaces all symbols in the output with their plain text equivalents. |
| `--environment [uid] or [file-path]`, `-e` | Specifies an environment file path or UID. |
| `--env-var "[environment-variable-name]=[environment-variable-value]"` | Specifies environment variables via the command line, in a `key=value` format. Multiple CLI environment variables can be added by using `--env-var` multiple times, for example: `--env-var "this=that" --env-var "alpha=beta".`|
| `--export-cookie-jar [path]` | Specifies the path where Postman CLI will output the final cookie jar file before completing a run. Uses `tough-cookie` to serialize the file. |
| `--global-var "[global-variable-name]=[global-variable-value]"` | Specifies global variables via the command line, in a `key=value` format. Multiple CLI global variables can be added by using `--global-var` multiple times, for example: `--global-var "this=that" --global-var "alpha=beta".`|
| `--globals [file-path]`, `-g` | Specifies the file path for global variables. Global variables are similar to environment variables but have lower precedence and can be overridden by environment variables having the same name. |
| `--iteration-data [file-path] or [URL]`, `-d` | Specifies a data source file (JSON or CSV) to be used for iteration as a path to a file or as a URL.|
| `--iteration-count [number]`, `-n` | Specifies the number of times the collection will run when used in conjunction with the iteration data file. |
|  `-i [requestUID] or [folderUID]` | Runs only the specified folder UID or request UID from the collection. |
| `-i [requestName] or [folderName]` | Runs only the specified folder name or request name from the collection. If there are duplicate names, the Postman CLI runs the folder or request that appears first.|
| `--ignore-redirects` | Prevents the Postman CLI from automatically following 3XX redirect responses.|
| `--insecure`, `-k` | Turns off SSL verification checks and allows self-signed SSL certificates. |
| `--no-insecure-file-read` | Prevents reading of files situated outside of the working directory.|
| `--override-request-order` | Used with `-i`. Runs a collection with the specified order of the requests or folders. For example: `postman collection run [collectionUID] -i [folder1UID] -i [folder2UID] --override-request-order`|
| `--silent` | Turns off terminal output.|
| `--suppress-exit-code`, `-x`| Specify whether or not to override the default exit code for the current run.|
| `--timeout [number]`| Specifies the time (in milliseconds) to wait for the entire collection run to complete execution.|
| `--timeout-request [number]`| Specifies a time (in milliseconds) to wait for requests to return a response.|
| `--timeout-script [number]`| Specifies the time (in milliseconds) to wait for scripts to complete execution.|
| `--verbose` | Shows detailed information of collection run and each request sent.|
| `--working-dir [path]`| Sets the path of the working directory to use while reading files with relative paths. Defaults to current directory.

---

## Governance and security

TBD

### postman api lint

This command runs validation checks for governance and security rules against the api definition provided in the Postman config file, a local file, or a UUID. You can only lint single-file definitions. `api lint` shows a warning if unable to find `[api-id]` to send data back to Postman.

> This command supports APIs that are stored on Postman and aren't linked to Git.

#### Example

```
postman api lint my-definition-file.json
postman api lint 8854915-bb7236b2-536e-4bdc-bfa2-fbe2fe1941eb
```

---

## Basic command line options

### postman

This is the base command, usually combined with `collection run` or `api lint`.

#### Example

```
postman -v
```

#### Options

| Option | Details |
|:--|:--|
| --help, -h | Returns information about Postman CLI commands and options.|
| --version, -v| Returns the version number for the Postman CLI.|

---
