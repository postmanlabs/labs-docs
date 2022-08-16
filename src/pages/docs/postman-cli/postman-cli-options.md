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

## Download the installation package

Use the URLs below in your script to download the Postman CLI installation package programmatically. You can also download the installation packages manually from the Postman [downloads](https://www.postman.com/downloads/) page.

### Linux

    https://dl-cli.pstmn.io/download/latest/osx_64

### Mac

    https://dl-cli.pstmn.io/download/latest/linux64

### Windows

    https://dl-cli.pstmn.io/download/latest/win64

### Example - Programmatic download

    curl https://dl-cli.pstmn-beta.io/download/latest/linux/postman-cli.zip -o postman-cli.zip
    unzip postman-cli.zip
    mv postman-cli /usr/bin/postman
    rm postman-cli.zip

</br>

## Postman \<commands\> \<options\>

Runs a collection with options.

### Examples

    postman -v

    postman login --with-api-key PMAK-loremipsum12345loremipsum12345loremipsum12345loremipsum12345

    postman collection run --folder folder-name my-collection-file.json

#### `--folder [folderName]`

Specify a single folder to run from a collection.

#### `--environment`, `-e [file\URL]`

Specify a Postman environment as a JSON [file].

#### `--iteration-data`, `-d [file]`

Specify a data file to use, either JSON or CSV.

#### `--globals`, `-g [file]`

Specify a Postman globals file as JSON [file].

#### `--iteration-count`, `-n [number]`

Define the number of iterations to run.

#### `--working-dir [path]`

Set the path of the working directory to use while reading files with relative paths. Default to current directory.

#### `--no-insecure-file-read`

Prevents reading of files situated outside of the working directory.

#### `--export-environment [path]`

The path to the file where Postman CLI will output the final environment variables file before completing a run.

#### `--export-globals [path]`

The path to the file where Newman will output the final global variables file before completing a run.

#### `--export-collection [path]`

The path to the file where Newman will output the final collection file before completing a run.

</br>

## Postman login/logout

Login programmatically with your Postman API key.

### Examples

    postman login --with-api-key <api-key>

    postman logout

### Options

#### `--delay-request [number]`

Specify a delay (in milliseconds) between requests [number].

#### `--timeout [number]`

Specify the time (in milliseconds) to wait for the entire collection run to complete execution.

#### `--timeout-request [number]`

Specify a request timeout (in milliseconds) for a request.

#### `--timeout-script [number]`

Specify the time (in milliseconds) to wait for scripts to complete execution.

</br>

## Postman collection run \<options\>

Run a collection with options.

### Example

    postman collection run <options> <collection-uuid>

#### `--bail`

Stops the runner when a test case fails.

#### `--silent`

Turn off terminal output.

#### `--color off`

Turn off colored output (auto\|on\|off) (default: "auto")

#### `--disable-unicode`

Force the unicode disable option. When supplied, all symbols in the output will be replaced by their plain text equivalents.

#### `--insecure`, `-k`

Turn off strict SSL.

#### `--suppress-exit-code`, `-x`

Continue running tests even after a failure, but exit with `code=0`

#### `--ignore-redirects`

Turn off automatic following of `3XX` responses.

#### `--verbose`

Show detailed information of collection run and each request sent.

#### `--cookie-jar [path]`

Specify the file path for a JSON Cookie Jar. Uses `tough-cookie` to deserialize the file.

#### `--export-cookie-jar [path]`

The path to the file where Newman will output the final cookie jar file before completing a run. Uses `tough-cookie` to serialize the file.

#### `--global-var "[global-variable-name]=[global-variable-value]"`

Specifies global variables on the command line, in a key=value format. Multiple global variables can be added by using `--global-var` multiple times, for example:

    `--global-var "this=that" --global-var "alpha=beta".`

</br>

#### `--env-var "[environment-variable-name]=[environment-variable-value]"`

Allows you to set environment variables in a key=value format on the command line. You can add multiple environment variables using `--env-var` multiple times, for example:

    `--env-var "key1=value1" --env-var "key2=value2"`.

</br>

## Lint

| Heading | Heading |
|:--|:--|
| Row | Row |

</br>

## Custom reporters

| Heading | Heading |
|:--|:--|
| Row | Row |
