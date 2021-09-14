---
title: "Managing Enterprise deployment"
order: 140.5
page_id: "managing_enterprise_deployment"
warning: false
contextual_links:
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Manage Large Teams in Postman with Workspaces, Permissions, and Version Control"
    url: "https://blog.postman.com/postman-team-workspaces-and-permissions/"

---

> __[The Postman Enterprise Application is only available to Postman Enterprise teams and is currently in beta.](https://www.postman.com/pricing)__

Postman's Enterprise Application is a variant of Postman’s Desktop Application that offers greater control to administrators looking to deploy Postman at an enterprise level. It is available as an MSI package for Windows and supports silent installation, system-wide installation, and additional configurations to control how Postman is installed on users' devices.

To get started, reach out to your Postman Account Manager or [contact Postman support](https://www.postman.com/support/).

## Contents

* [Downloading the Postman Enterprise app](#downloading-the-postman-enterprise-app)

* [Installing the Postman Enterprise app](#installing-the-postman-enterprise-app)

    * [Enabling verbose logging for installation](#enabling-verbose-logging-for-installation)

* [Uninstalling the Postman Enterprise app](#uninstalling-the-postman-enterprise-app)

## Downloading the Postman Enterprise app

You must be a [Postman team admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) to access the Postman Enterprise app package.

To download, navigate to Postman and select **Team** in the upper right > **Team Settings**

<!-- need screenshot -->

## Installing the Postman Enterprise app

Once you've downloaded the Postman Enterprise MSI package, you can move forward with installing the app.

### INSTALLDIR

The `INSTALLDIR` public property is used to select a custom installation. If this public property is not manually overwritten, it defaults to `%PROGRAMFILES%\[company]\[name]` for system-wide installations and `%USERPROFILE%\AppData\Local\Programs\[company]\[name]` for per-user installations.

For example, you can run the following command to perform a system-wide installation to a custom directory:

```
msiexec /i path/to/package.msi INSTALLDIR=C:\custom
```

### MSIINSTALLPERUSER

The standard `MSIINSTALLPERUSER` option is used to install the application per-user instead of system-wide. By default, the MSI performs a system-wide installation. Set `MSIINSTALLPERUSER` to `1` to perform a per-user installation.

For example, you can run the following command to perform a per-user installation to the default installation directory:

```
msiexec /i path/to/package.msi MSIINSTALLPERUSER=1
```

This public property can be used in conjunction with `INSTALLDIR` to perform a per-user installation to a custom directory:

```
msiexec /i path/to/package.msi MSIINSTALLPERUSER=1 INSTALLDIR=%USERPROFILE%\custom
```

### Silent installation

A silent installation or uninstallation is performed by passing the `/qn` option to `msiexec`:

```
msiexec /i path\to\package.msi /qn MSIINSTALLPERUSER=1
```

Note that running in silent installation mode will omit error messages. If the installation fails for any reason, `%ERRORLEVEL%` will not equal `0` but no error will be displayed.

It is always recommended to [run silent installations with logging enabled](#enabling-verbose-logging-for-installation).

### Enabling verbose logging for installation

The `msiexec` tool can be configured to output debug log information about the installation process with the `/l*v` option. For example, you can output debug information to `C:\log.txt`:

```
msiexec /i path\to\package.msi /l*v C:\log.txt
```

## Uninstalling the Postman Enterprise app

The `msiexec` command-line tool can be used to remove an existing application using the `/x` option:

```
msiexec /x path\to\package.msi  
```

The application can also be removed from the Add/Remove Programs section in system settings or from the system Control Panel application.
