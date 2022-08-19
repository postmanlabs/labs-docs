---
title: "Troubleshooting"
page_id: "troubleshooting"
updated: 2022-07-07
warning: false
contextual_links:
  - type: section
    name: "Resources"
  - type: link
    name: "Installing the Postman Agent"
    url: "https://learning.postman.com/docs/getting-started/installation-and-updates/#installing-the-postman-desktop-agent"
---

If you're having a problem using Postman's gRPC client, learn more about common issues and how to troubleshoot. Please submit a bug report/feedback for any unresolved issues.

## Common issues and solutions

### Service unavailable

The server you are using is unreachable with the current client settings. If you have confirmed the server is working properly, check the TLS settings in the client. By default, TLS is disabled.

Refer to [using TLS and certificates](/docs/sending-requests/grpc/using-grpc-request/#using-tls-and-certificates) for more information

![Downloading Postman Agent](https://assets.postman.com/postman-labs-docs/grpc-docs/troubleshooting/gRPC-TLS.gif)

### Server reflection failed

- Check if server reflection is supported by the server.
- Check the TLS settings of the request.
- Retry server reflection by using **Service definition > Use server reflection > Try again**.

### Switch to Postman Desktop Agent to connect with a gRPC server

In order to use all of Postman's gRPC features, you must run the Postman Agent on your desktop.

![Downloading Postman Agent](https://assets.postman.com/postman-labs-docs/grpc-docs/troubleshooting/gRPC-Agent-Download.gif)

Learn more about [installing the Postman Agent](https://learning.postman.com/docs/getting-started/installation-and-updates/#installing-the-postman-desktop-agent)

