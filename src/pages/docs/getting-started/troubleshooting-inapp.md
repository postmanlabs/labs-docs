---
title: "Troubleshooting app issues"
order: 9
page_id: "troubleshooting_in_app"
warning: false
updated: 2022-03-29
---

Sometimes things go wrong! If you're having trouble with the Postman app, there are several resources that can help you diagnose and fix the problem.

If you have questions about Postman beyond what's covered in this guide, see [Postman's Help Center](https://support.postman.com/hc/en-us) for answers to [frequently asked questions about the Postman app](https://support.postman.com/hc/en-us/categories/115000609125-Postman-App).

> This guide specifically discusses troubleshooting issues with the Postman app. To troubleshoot issues with Postman requests, see [Troubleshooting requests](/docs/sending-requests/troubleshooting-api-requests/). To troubleshoot issues with Postman monitors, see [Troubleshooting monitors](/docs/monitoring-your-api/troubleshooting-monitors/).

## Contacting Postman product support

You can contact Postman product support if you need help resolving any issues you find in Postman. Go to the [Postman Support Center](https://www.postman.com/support/) and select **Submit a Request**.

## Locating Postman logs

Postman automatically captures log messages in the event something goes wrong with Postman. The logs include information about recent activity in the app and can be helpful when troubleshooting issues.

Use the instructions below to locate the Postman logs on your macOS, Windows, or Linux system. Attach the log files to your support request to help the support team troubleshoot your issue.

### Locating logs in macOS

To locate the logs in macOS, open Postman and go to **View > Developer > View Logs in Finder**.

[![view logs2](https://assets.postman.com/postman-docs/troubleshooting-logs-macos.jpg)](https://assets.postman.com/postman-docs/troubleshooting-logs-macos.jpg)

### Locating logs in Windows

To locate the logs in Windows, open Postman and go to **View > Developer > View Logs in Explorer**.

### Locating logs in Linux

To locate the logs in Linux, open Postman and go to **View > Developer > View Logs in File Manager**.

## Accessing the DevTools console

The DevTools console provides internal debugging entries for Postman that may be useful in troubleshooting problems with the app.

To access the DevTools console logs, go to **View > Developer > Show DevTools (current view)**. In the DevTools window, select __Console__ to access the app debug logs.

## Checking Postman's status

Wondering if Postman is experiencing issues? Check the [Postman Status page](https://status.postman.com/), which lets you know if Postman is experiencing degraded performance, outages, or is undergoing maintenance.

## Hardware acceleration

Postman takes advantage of your computer's built-in graphics hardware to speed up the rendering of onscreen graphics. Sometimes your computer's specific GPU, drivers, or operating system may cause issues with hardware acceleration. If you see screen artifacts or other glitches, turning off hardware acceleration might solve the problem.

To activate or deactivate hardware acceleration in Postman:

* On macOS, select **Postman > Hardware Acceleration**.
* On Windows or Linux, select **Help > Hardware Acceleration**.

Restart Postman to apply the new setting. Disabling hardware acceleration may affect performance or CPU usage.
