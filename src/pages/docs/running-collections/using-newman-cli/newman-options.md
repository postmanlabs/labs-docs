---
title: "Newman command options"
updated: 2022-05-23
search_keyword: "newman run"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Using the Collection Runner"
    url: "/docs/running-collections/intro-to-collection-runs/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Run Collections with Newman | Postman Level Up"
    url: "https://www.youtube.com/watch?v=SQlwGZj97Y4"
  - type: link
    name: "Using Custom Reporters with Newman"
    url: "https://youtu.be/Nxdxx-VaYno"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "Newman: run and test your collections from the command line"
    url: "https://blog.postman.com/newman-run-and-test-your-collections-from-the-command-line/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Intro to the Postman API"
    url: "/docs/developer/intro-api/"

warning: false
tags:
  - "newman"

---

Newman provides a rich set of options to customize a run. You can retrieve a list of options by running Newman with the ``-h`` flag.

```bash
$ newman run -h
```

## Contents

* [Basic options](#basic-options)
* [Setup](#setup)
* [Request options](#request-options)
* [Miscellaneous options](#miscellaneous-options)
* [Exit status](#exit-status)

## Basic options

| Option | Details |
|:--|:--|
| `-h`, `--help` | Output usage information |
| `-v`, `--version` | Output the version number |

## Setup

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

## Request options

| Option | Details |
|:--|:--|
| `--delay-request [number]` | Specify a delay (in milliseconds) between requests [number]. |
| `--timeout [number]` | Specify the time (in milliseconds) to wait for the entire collection run to complete execution. |
| `--timeout-request [number]` | Specify a request timeout (in milliseconds) for a request. |
| `--timeout-script [number]` | Specify the time (in milliseconds) to wait for scripts to complete execution. |

## Miscellaneous options

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
| `--env-var "[environment-variable-name]=[environment-variable-value]"` | Allows the specification of environment variables via the command line, in a key=value format. Multiple CLI environment variables can be added by using --env-var multiple times, like so: --env-var "foo=bar" --env-var "alpha=beta". |

## Exit status

Newman, by default, exits with a status code of 0 if everything runs well, such as without any exceptions.

Continuous integration tools respond to these exit codes and correspondingly pass or fail a build.

You can use `-x` or `--suppress-exit-code` to override the default exit code for the current run.

You can use the `--bail` flag to tell Newman to halt on a test case error with a status code of 1, which can then be picked up by a CI tool or build system.

```bash
$ newman run PostmanCollection.json -e environment.json --bail
```

## Data file example

To provide a different set of data, such as variables for each iteration, you can use the `-d` flag to specify a JSON or CSV file.

For example, a data file such as the one shown below runs _2_ iterations, with each iteration using a set of variables.

```json
[{
    "url": "http://127.0.0.1:5000",
    "user_id": "1",
    "id": "1",
    "token_id": "123123",
},
{
    "url": "http://postman-echo.com",
    "user_id": "2",
    "id": "2",
    "token_id": "899899",
}]
```

```bash
$ newman run mycollection.json -d data.json
```

Here's an example of the CSV file for the above set of variables:

```bash
url, user_id, id, token_id
http://127.0.0.1:5000, 1, 1, 123123123
http://postman-echo.com, 2, 2, 899899
```
