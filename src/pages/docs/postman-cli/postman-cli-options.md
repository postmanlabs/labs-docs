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

* [Commands and options - quick reference](#commands)
* [Downloading and installing](#downloading-and-installing)
* [Logging and and logging out](#logging-in-and-logging-out)
* [Automation testing](#automation-testing)
* [Governance and security](#governance-and-security)
* [Basic command line options](#basic-command-line-options)

## Commands and options - quick reference

| Command/Option | Details |
|:--|:--|
| [**`login`**](#login---with-api-key-api-key) | Log into Postman. |
| [**`logout`**](#logout) | Log out of Postman. |
| [**`postman collection run`**](#postman-collection-run-collection-uid-or-file-path) | Run a collection with a UUID or a local file. |
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
| [**`postman api lint`**](#postman-api-lint-file-name-or-api-id)| Run validation checks for governance and security rules against the api definition provided in the Postman config file. |
| [**`postman`**](#postman) | The base command. |
| `--help` | Return information about Postman CLI commands and options. |
| `--version` | Return the version number for the Postman CLI.  |

## Downloading and installing

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

#### Mac (Intel chip)

```
curl [link_mac_intel] -o postman-cli.zip
unzip postman-cli.zip
rm postman-cli.zip
mv postman-cli /usr/local/bin/postman
```

#### Mac (Apple chip)

````
curl [link_mac_apple] -o postman-cli.zip
unzip postman-cli.zip
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

---

## Logging in and logging out

You can use the Postman CLI to log in and out of Postman.

### login

This command authenticates the user and stores the API key with an alias or as default. `login` has one option, `--with-api-key`, that accepts the API key.

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

---

## Automation Testing

You can run your collections with the commands below:

### **postman collection run**

Run a collection with options. Specify the collection with its uid or file path.

#### Example

```
postman collection run /myCollectionFolderName/myCollectionFile.json
postman collectioon run 12345678-12345ab-1234-1ab2-1ab2-ab1234112a12
```

#### Options

| Option | Details |
|:--|:--|
| `--bail` | Stop the runner when a test case fails. |
| `--color [value]` | Turn off colored output (auto\|on\|off) (default: "auto") |
| `--cookie-jar [path]` | Specify the file path for a JSON Cookie Jar. Uses `tough-cookie` to deserialize the file. |
| `--delay-request [number]` | Specify a delay (in milliseconds) between requests [number]. |
| `--disable-unicode` | Force the unicode disable option. When supplied, all symbols in the output will be replaced by their plain text equivalents. |
| `--environment [uid] or [file-path]` | Specify an environment file path or UID. |
| `--env-var "[environment-variable-name]=[environment-variable-value]"` | Set environment variables in a key=value format on the command line. You can add multiple environment variables using `--env-var` multiple times, for example: `--env-var "key1=value1" --env-var "key2=value2"` |
| `--export-cookie-jar [path]` | The path to the file where Postman CLI will output the final cookie jar file before completing a run. Uses `tough-cookie` to serialize the file. |
| `--global-var "[global-variable-name]=[global-variable-value]"` | Specifies global variables on the command line, in a key=value format. Multiple global variables can be added by using `--global-var` multiple times, for example: `--global-var "this=that" --global-var "alpha=beta".`|
| `--globals [file-path]` | Specify the file path for global variables. |
| `--iteration [file-path] or [URL]` | Specify a data source file (JSON or CSV) to be used for iteration as a path to a file or as a URL.|
| `--iteration-count [number]` | Specifies the number of times the collection has to be run when used in conjunction with the iteration data file. |
|  `-i [requestUID] or [folderUID]` | Run only the specified folder UID or request UID from the collection. |
| `-i [requestName] or [folderName]` | Run only the specified folder name or request name from the collection. If there are duplicate names, the Postman CLI will run the folder or request that appears first.|
| `--ignore-redirects` | Turn off automatic following of `3XX` responses.|
| `--insecure`, `-k` | Turn off strict SSL. |
| `--no-insecure-file-reads` | Prevent reading of files situated outside of the working directory.|
| `--override-request-order` | Used with `-i`. Runs a collection with the specified order of the requests or folders. For example: `postman collection run [collectionUID] -i [folder1UID] -i [folder2UID] --override-request-order`|
| `--silent` | Turn off terminal output.|
| `--suppress-exit-code`, `-x`| Continue running tests even after a failure, but exit with `code=0`.|
| `--timeout [number]`| Specify the time (in milliseconds) to wait for the entire collection run to complete execution.|
| `--timeout-request [number]`| Specify a request timeout (in milliseconds) for a request.|
| `--timeout-script [number]`| Specify the time (in milliseconds) to wait for scripts to complete execution.|
| `--verbose` | Show detailed information of collection run and each request sent.|
| `--working-dir [path]`| Set the path of the working directory to use while reading files with relative paths. Default to current directory.

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
