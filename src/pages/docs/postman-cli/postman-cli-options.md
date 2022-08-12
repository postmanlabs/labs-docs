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

Postman CLI provides a rich set of options to customize a run. You can retrieve a list of options by running Postman with the ``-h`` flag.

```bash
$ postman -h
```

## Contents

* [Download](#download)
* [Basic](#basic)
* [Login/logout](#login-logout)
* [Run a Postman collection](#run-a-Postman-collection)
* [Lint](#lint)
* [Custom reporters](#custom-reporters)

## Download

| Option | Details |
|:--|:--|
| `-h`, `--help` | Output usage information |
| `-v`, `--version` | Output the version number |

## Basic

| Option | Details |
|:--|:--|
| `--folder [folderName]` | Specify a single folder to run from a collection. |
| `-e`, `--environment [file\|URL]` | Specify a Postman environment as a JSON [file]. |
| `-d`, `--iteration-data [file]` | Specify a data file to use, either JSON or CSV. |
| `-g`, `--globals [file]` | Specify a Postman globals file as JSON [file]. |
| `-n`, `--iteration-count [number]` | Define the number of iterations to run. |
| `--working-dir [path]` |Set the path of the working directory to use while reading files with relative paths. Default to current directory. |
| `--no-insecure-file-read` |Prevents reading of files situated outside of the working directory. |
| `--export-environment [path]` |The path to the file where Newman will output the final environment variables file before completing a run. |
| `--export-globals [path]` | The path to the file where Newman will output the final global variables file before completing a run. |
| `--export-collection [path]` | The path to the file where Newman will output the final collection file before completing a run. |

## Login/logout

| Option | Details |
|:--|:--|
| `--delay-request [number]` | Specify a delay (in milliseconds) between requests [number]. |
| `--timeout [number]` | Specify the time (in milliseconds) to wait for the entire collection run to complete execution. |
| `--timeout-request [number]` | Specify a request timeout (in milliseconds) for a request. |
| `--timeout-script [number]` | Specify the time (in milliseconds) to wait for scripts to complete execution. |

## Run a Postman collection

| Option | Details |
|:--|:--|
| `--bail` | Stops the runner when a test case fails. |
| `--silent` | Turn off terminal output. |
| `--color off` | Turn off colored output (auto\|on\|off) (default: "auto")|
| `--disable-unicode` | Force the unicode disable option. When supplied, all symbols in the output will be replaced by their plain text equivalents. |
| `-k`, `--insecure` | Turn off strict SSL. |
| `-x`, `--suppress-exit-code` | Continue running tests even after a failure, but exit with `code=0` |
| `--ignore-redirects` | Turn off automatic following of `3XX` responses. |
| `--verbose` | Show detailed information of collection run and each request sent. |
| `--cookie-jar [path]` | Specify the file path for a JSON Cookie Jar. Uses `tough-cookie` to deserialize the file. |
| `--export-cookie-jar [path]` | The path to the file where Newman will output the final cookie jar file before completing a run. Uses `tough-cookie` to serialize the file. |
| `--global-var "[global-variable-name]=[global-variable-value]"` | Specifies global variables on the command line, in a key=value format. Multiple global variables can be added by using `--global-var` multiple times, for example, `--global-var "this=that" --global-var "alpha=beta".` |
| `--env-var "[environment-variable-name]=[environment-variable-value]"` | Allows you to set environment variables in a key=value format on the command line. You can add multiple environment variables using `--env-var` multiple times, for example: `--env-var "key1=value1" --env-var "key2=value2"`. |

## Lint

| Heading | Heading |
|:--|:--|
| Row | Row |

## Custom reporters

| Heading | Heading |
|:--|:--|
| Row | Row |
