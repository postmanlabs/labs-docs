---
title: "Installing the Postman CLI"
updated: 2022-09-15
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Postman CLI overview"
    url: "/docs/postman-cli/postman-cli-overview"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Postman CLI command options"
    url: "/docs/postman-cli/postman-cli-options/"
  - type: link
    name: "Running a collection with the Postman CLI"
    url: "/docs/postman-cli/postman-cli-run-collection/"

warning: false
---

You can download and install the Postman CLI manually or programmatically (with a script or the command line).

## Contents

* [Downloading and installing Postman CLI manually](#downloading-and-installing-postman-cli-manually)
* [Downloading and installing Postman CLI programmatically](#downloading-and-installing-postman-cli-programmatically)

## Downloading and installing Postman CLI manually

1. Download the installation script for your platform from the [download page](https://www.postman.com/downloads/) or with the appropriate link below:

    **Linux**

    ``` bash
    curl -o- "https://[CDN link TBD]/install.linux64.sh" | bash
    ```

    **Mac - Intel chip**

    ``` bash
    curl -o- "https://[CDN link TBD]/install.osx_64.sh" | bash
    ```

    **Mac - Apple chip**

    ``` bash
    curl -o- "https://[CDN link TBD]/install.osx_arm64.sh" | bash
    ```

    **Windows - Powershell**

    ``` bash
    Set-ExecutionPolicy AllSigned -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://[CDN link TBD]/install.win64.ps1')))
    ```

    **Windows - cmd.exe**

    ``` bash
    @"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy AllSigned -Command "[System.Net.ServicePointManager]::SecurityProtocol = 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://<CDN link>/install.win64.ps1'))" && SET "PATH=%PATH%;C:\Postman CLI\")
    * [nix](curl -o- "https://[CDN link TBD]/install.nix.sh" | bash

    ```

1. Run the downloaded script file to install the Postman CLI.

## Downloading and installing Postman CLI programmatically

To download and install the Postman CLI programmatically, add the appropriate code snippet to your CI script:

### Linux installation commands

``` bash
#!/bin/bash
curl "https://dl-cli.pstmn.io/download/latest/linux64" -o postman-cli.zip
tar -xf postman-cli.tar.gz
rm postman-cli.tar.gz
echo "Please provide permission to write to /usr/local/bin/:"
sudo mkdir -p /usr/local/bin/
sudo mv postman-cli /usr/local/bin/postman
```

> The Postman CLI supports the same Linux distributions as Postman:
>
> * Ubuntu 14.04 and newer
> * Fedora 24
> * Debian 8 and newer

## Mac installation commands (Intel chip)

``` bash
#!/bin/bash
curl "https://dl-cli.pstmn.io/download/latest/osx_64" -o postman-cli.zip
ditto -x -k postman-cli.zip ./
rm postman-cli.zip
echo "Please provide permission to write to /usr/local/bin/:"
sudo mkdir -p /usr/local/bin/
sudo mv postman-cli /usr/local/bin/postman
```

## Mac installation commands (Apple chip)

``` bash
#!/bin/bash
curl "https://dl-cli.pstmn.io/download/latest/osx_arm64" -o postman-cli.zip
ditto -x -k postman-cli.zip ./
rm postman-cli.zip
echo "Please provide permission to write to /usr/local/bin/:"
sudo mkdir -p /usr/local/bin/
sudo mv postman-cli /usr/local/bin/postman
```

## Windows installation commands

``` bash
# create dir
$POSTMAN_CLI_PATH = "$Env:USERPROFILE\AppData\Local\Postman CLI"
New-Item -type directory -path $POSTMAN_CLI_PATH -Force

# download file
$client = new-object System.Net.WebClient
$client.DownloadFile("https://dl-cli.pstmn.io/download/latest/win64", "$POSTMAN_CLI_PATH\postman-cli.zip")

# extract archive
Expand-Archive "$POSTMAN_CLI_PATH\postman-cli.zip" $POSTMAN_CLI_PATH

echo "You can find your executable in $POSTMAN_CLI_PATH"

# set current session path
$Env:PATH = "$Env:PATH;$POSTMAN_CLI_PATH""
```

## nix installation commands

``` bash
#!/bin/bash

OS=$(uname -s); shopt -s failglob
ARCH=$(uname -m)
EXTENSION=zip
FOLDER=/usr/local/bin/
PACKAGE_LINK=''

if [[ "$OS" == "Linux" ]]; then
  EXTENSION=tar.gz
  PACKAGE_LINK="linux64"
elif [[ "$OS" == "Darwin" ]]; then
  PACKAGE_LINK="osx_$ARCH"
fi


CLI_URL="https://dl-cli.pstmn.io/download/latest/$PACKAGE_LINK"

pstmn_extract() {
  if [[ "$OS" = "Linux" ]]; then
    tar -xf "$1" ./
  else
    ditto -x -k "$1" ./
  fi
}

has_dep() {
  type "$1" > /dev/null 2>&1
}

pstmn_echo() {
  command printf %s\\n "$*" 2>/dev/null
}

download() {
  if has_dep "curl"; then
    curl --fail --compressed -q "$@"
  elif has_dep "wget"; then
    ARGS=$(pstmn_echo "$@" | command sed -e 's/--progress-bar /--progress=bar /' \
                            -e 's/--compressed //' \
                            -e 's/--fail //' \
                            -e 's/-L //' \
                            -e 's/-I /--server-response /' \
                            -e 's/-s /-q /' \
                            -e 's/-sS /-nv /' \
                            -e 's/-o /-O /' \
                            -e 's/-C - /-c /')
    # shellcheck disable=SC2086
    eval wget $ARGS
  fi
}

echo $CLI_URL

download -s "$CLI_URL" -o postman-cli.$EXTENSION || {
  pstmn_echo >&2 "Failed to download from $CLI_URL"
  exit 1
}

pstmn_extract postman-cli.$EXTENSION

rm postman-cli.$EXTENSION
pstmn_echo "Please provide permission to write to ${FOLDER}:"
sudo mkdir -p $FOLDER
sudo mv postman-cli ${FOLDER}/postman
```
