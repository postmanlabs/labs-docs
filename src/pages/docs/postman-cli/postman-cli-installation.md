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

* [System requirements](#system-requirements)
* [Linux installation](#linux-installation)
* [Mac (Apple chip) installation](#mac-apple-chip-installation)
* [Mac (Intel) installation](#mac-intel-installation)
* [Windows installation](#windows-installation)

## System requirements

The Postman CLI supports the same operating system requirements as the Postman desktop app. For a complete list of system requirements, see [Installing and updating Postman](/docs/getting-started/installation-and-updates/).

## Linux installation

Use the following commands to install the Postman CLI for Linux.

### Manual installation

1. Download the installation script for your platform from the [download page](https://www.postman.com/downloads/) or with the appropriate link below:

    ``` bash
    curl -o- "https://dl-cli.pstmn.io/install.linux64.sh" | bash
    ```

1. Run the downloaded script file to install the Postman CLI.

### Programmatic installation

To download and install the Postman CLI programmatically, add the appropriate code snippet to your CI script:

``` bash
#!/bin/bash
curl "https://dl-cli.pstmn.io/download/latest/linux64" -o postman-cli.zip
tar -xf postman-cli.tar.gz
rm postman-cli.tar.gz
echo "Please provide permission to write to /usr/local/bin/:"
sudo mkdir -p /usr/local/bin/
sudo mv postman-cli /usr/local/bin/postman
```

## Mac (Apple chip) installation

Use the following commands to install the Postman CLI for Macs with Apple M1/M2 chips.

### Manual installation

1. Download the installation script for your platform from the [download page](https://www.postman.com/downloads/) or with the appropriate link below:

    **Mac - Apple chip**

    ``` bash
    curl -o- "https://dl-cli.pstmn.io/download/latest/install.osx_arm64.sh" | bash
    ```

1. Run the downloaded script file to install the Postman CLI.

### Programmatic installation

To download and install the Postman CLI programmatically, add the appropriate code snippet to your CI script:

``` bash
#!/bin/bash
curl "https://dl-cli.pstmn.io/download/latest/osx_arm64" -o postman-cli.zip
ditto -x -k postman-cli.zip ./
rm postman-cli.zip
echo "Please provide permission to write to /usr/local/bin/:"
sudo mkdir -p /usr/local/bin/
sudo mv postman-cli /usr/local/bin/postman
```

## Mac (Intel) installation

Use the following commands to install the Postman CLI for Macs with Intel chips.

### Manual installation

1. Download the installation script for your platform from the [download page](https://www.postman.com/downloads/) or with the appropriate link below:

    ``` bash
    curl -o- "https://dl-cli.pstmn.io/download/latest/install.osx_64.sh" | bash
    ```

1. Run the downloaded script file to install the Postman CLI.

### Programmatic installation

To download and install the Postman CLI programmatically, add the appropriate code snippet to your CI script:

``` bash
#!/bin/bash
curl "https://dl-cli.pstmn.io/download/latest/osx_64" -o postman-cli.zip
ditto -x -k postman-cli.zip ./
rm postman-cli.zip
echo "Please provide permission to write to /usr/local/bin/:"
sudo mkdir -p /usr/local/bin/
sudo mv postman-cli /usr/local/bin/postman
```

## Windows installation

Use the following commands to install the Postman CLI for Windows.

### Manual installation

1. Download the installation script for your platform from the [download page](https://www.postman.com/downloads/) or with the appropriate link below:

    **Windows - Powershell**

    ``` bash
    Set-ExecutionPolicy AllSigned -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://dl-cli.pstmn.io/download/latest/install.win64.ps1')))
    ```

    **Windows - cmd.exe**

    ``` bash
    @"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy AllSigned -Command "[System.Net.ServicePointManager]::SecurityProtocol = 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://dl-cli.pstmn.io/download/latest/install.win64.ps1'))" && SET "PATH=%PATH%;C:\Postman CLI\")
    * [nix](curl -o- "https://dl-cli.pstmn.io/download/latest/win64" | bash
    ```

1. Run the downloaded script file to install the Postman CLI.

### Programmatic installation

To download and install the Postman CLI programmatically, add the appropriate code snippet to your CI script:

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
