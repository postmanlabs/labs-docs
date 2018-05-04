---
title: "GitHub"
page_id: "github"
tags: 
  - "pro"
warning: false

---

Back up and synchronize your Postman Collections on GitHub, the largest host of source code in the world. Your Collections are all tucked in safe and sound with our latest Postman Pro to GitHub Integration.

### Configuring GitHub Integration

1. In the **[Integrations]({{site.pm.gs}}/dashboard/integrations){:target="_blank"}** page, find Github from a list of Postman's 3rd party Integrations for Postman Pro users.

[![github integration](https://static.getpostman.com/postman-docs/integrations-github1.png)](https://static.getpostman.com/postman-docs/integrations-github1.png)

<ol start="2">
  <li>Click the <b>View Details</b> button to see information about Github and how it can back up your Postman Collections to your designated repositories.

</li>
</ol>

You also can click the **Configured Integrations** tab to set up other integrations, view available integrations for Github, or view all integrations.

[![select github integration](https://static.getpostman.com/postman-docs/WS-integrations-github-configIntegrations1.png)](https://static.getpostman.com/postman-docs/WS-integrations-github-configIntegrations1.png)

<ol start="3">
  <li>Click the <b>Add Integration</b> button to authorize a backup of your Postman collections. 
</li>
</ol>

[![github integration](https://static.getpostman.com/postman-docs/WS-integrations-github-backup.png)](https://static.getpostman.com/postman-docs/WS-integrations-github-backup.png)

<ol start="4">
  <li>Enter your GitHub personal access token. If you don’t have one, you can go ahead and create one at [GitHub Tokens](https://github.com/settings/tokens). </li>
</ol>

We need the `repo` and the `user` scope in order to successfully configure the integration.

[![repo scope](https://static.getpostman.com/postman-docs/WS-integrations-github-repo-scope.png)](https://static.getpostman.com/postman-docs/WS-integrations-github-repo-scope.png)
[![user scope](https://static.getpostman.com/postman-docs/WS-integrations-github-user-scope.png)](https://static.getpostman.com/postman-docs/WS-integrations-github-user-scope.png)

Once that token is generated, copy it and save it somewhere for future use.
[![generated token](https://static.getpostman.com/postman-docs/WS-integrations-github-generated-token.png)](https://static.getpostman.com/postman-docs/WS-integrations-github-generated-token.png)

<ol start="5">
  <li>Once the token is verified, you will be shown the configuration page to configure the integration.</li>
</ol>

[![configure](https://static.getpostman.com/postman-docs/WS-integrations-github-configure.png)](https://static.getpostman.com/postman-docs/WS-integrations-github-configure.png)

* Select a collection to back up.
* Select the repository.
* Enter the directory where the collection will be pushed. If the directory does not exist, it will be created for you. If you do not specify anything, the default directory will be `Postman Collections`.
* Enter the file name of the collection in the repository.
* Enter the branch where the collection will be pushed. This branch should already exist in your repository. If you do not specify anything, it will be pushed to the default branch of the repository.

<ol start="6">
  <li> Click the <b>Add Integration</b> button.
</li>
</ol>

Every change saved to your Postman Collection automatically commits changes to your GitHub repo in real time.  Your Collections and code can live together in perfect harmony in the same repository.








