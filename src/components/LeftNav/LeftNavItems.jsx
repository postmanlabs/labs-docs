/*
  use this file to create the left nav information architecture.

  Example code for parent, child, second level parent, second level child:

  {
    name: 'Title of Parent drawer: Getting started',
    parentSlug: 'Parent path: getting-started',
    url: 'This is the page that the user should land on when clicking on the parent drawer. Can be any url: /docs/getting-started/introduction/',
    subMenuItems1: [
      {
        name: 'first level child: Introduction',
        url: 'path to the first level child: /docs/getting-started/introduction/',
      },
      {
        name: 'This is a first level child that is also the second level parent drawer title: Capturing Request Data',
        subParentSlug: 'second parent path: capturing-request-data',
        slug: 'Page that user should land on when clicking on second level parent. Can be any url: /docs/sending-requests/capturing-request-data/capturing-http-requests/',
        subMenuItems2: [
          {
            name: 'second level child: Capturing HTTP requests',
            url: 'path to second level child: /docs/sending-requests/capturing-request-data/capturing-http-requests/',
          },
        ],
      },
    ],
  }
*/


export const leftNavItems = [
  {
    name: 'Getting Started',
    parentSlug: 'getting-started',
    url: '/docs/getting-started/introduction/',
    subMenuItems1: [
      {
        name: 'Introduction',
        url: '/docs/getting-started/introduction/',
      },
      {
        name: 'Installing and Updating',
        url: '/docs/getting-started/installation-and-updates/',
      },
      {
        name: 'Navigating Postman',
        url: '/docs/getting-started/navigating-postman/',
      },
      {
        name: 'Sending your first request',
        url: '/docs/getting-started/sending-the-first-request/',
      },
      {
        name: 'Managing your account',
        url: '/docs/getting-started/postman-account/',
      },
      {
        name: 'Syncing your work',
        url: '/docs/getting-started/syncing/',
      },
      {
        name: 'Exploring the Public API Network',
        url: '/docs/getting-started/exploring-public-api-network/',
      },
      {
        name: 'Creating your first collection',
        url: '/docs/getting-started/creating-the-first-collection/',
      },
      {
        name: 'Using the Scratch Pad',
        url: '/docs/getting-started/using-scratch-pad/',
      },
      {
        name: 'Creating a workspace',
        url: '/docs/getting-started/creating-your-first-workspace/',
      },
      {
        name: 'Setting up Postman',
        url: '/docs/getting-started/settings/',
      },
      {
        name: 'Importing and exporting data',
        url: '/docs/getting-started/importing-and-exporting-data/',
      },
      {
        name: 'Using a custom proxy',
        url: '/docs/getting-started/proxy/',
      },
      {
        name: 'Troubleshooting app issues',
        url: '/docs/getting-started/troubleshooting-inapp/',
      },
    ],
  },
  {
    name: 'Sending Requests',
    parentSlug: 'sending-requests',
    url: '/docs/sending-requests/requests/',
    subMenuItems1: [
      {
        name: 'Building requests',
        url: '/docs/sending-requests/requests/',
      },
      {
        name: 'Authorizing requests',
        url: '/docs/sending-requests/authorization/',
      },
      {
        name: 'Receiving responses',
        url: '/docs/sending-requests/responses/',
      },
      {
        name: 'Grouping requests in collections',
        url: '/docs/sending-requests/intro-to-collections/',
      },
      {
        name: 'Using variables',
        url: '/docs/sending-requests/variables/',
      },
      {
        name: 'Managing environments',
        url: '/docs/sending-requests/managing-environments/',
      },
      {
        name: 'Visualizing responses',
        url: '/docs/sending-requests/visualizer/',
      },
      {
        name: 'Specifying examples',
        url: '/docs/sending-requests/examples/',
      },
      {
        name: 'Using cookies',
        url: '/docs/sending-requests/cookies/',
      },
      {
        name: 'Working with certificates',
        url: '/docs/sending-requests/certificates/',
      },
      {
        name: 'Generating client code',
        url: '/docs/sending-requests/generate-code-snippets/',
      },
      {
        name: 'Troubleshooting requests',
        url: '/docs/sending-requests/troubleshooting-api-requests/',
      },
      {
        name: 'Capturing Request Data',
        subParentSlug: 'capturing-request-data',
        slug: '/docs/sending-requests/capturing-request-data/capture-overview/',
        subMenuItems2: [
          {
            name: 'Capturing request data overview',
            url: '/docs/sending-requests/capturing-request-data/capture-overview/',
          },
          {
            name: 'Capturing HTTP requests',
            url: '/docs/sending-requests/capturing-request-data/capturing-http-requests/',
          },
          {
            name: 'Capturing HTTPS traffic',
            url: '/docs/sending-requests/capturing-request-data/capturing-https-traffic/',
          },
          {
            name: 'Using Postman Interceptor',
            url: '/docs/sending-requests/capturing-request-data/interceptor/',
          },
          {
            name: 'Syncing cookies',
            url: '/docs/sending-requests/capturing-request-data/syncing-cookies/',
          },
        ],
      },
      {
        name: 'Querying with GraphQL',
        url: '/docs/sending-requests/graphql/graphql/',
      },
      {
        name: 'Using WebSocket Requests',
        url: '/docs/sending-requests/websocket/websocket/',
      },
      {
        name: 'Using SOAP Requests',
        url: '/docs/sending-requests/soap/making-soap-requests/',
      },
    ],
  },
  {
    name: 'Writing Scripts',
    parentSlug: 'writing-scripts',
    url: '/docs/writing-scripts/intro-to-scripts/',
    subMenuItems1: [
      {
        name: 'Scripting in Postman',
        url: '/docs/writing-scripts/intro-to-scripts/',
      },
      {
        name: 'Writing pre-requests scripts',
        url: '/docs/writing-scripts/pre-request-scripts/',
      },
      {
        name: 'Writing tests',
        url: '/docs/writing-scripts/test-scripts/',
      },
      {
        name: 'Running tests with monitors',
        url: '/docs/writing-scripts/test-with-monitors/',
      },
      {
        name: 'Script references',
        subParentSlug: 'script-references',
        slug: '/docs/writing-scripts/script-references/test-examples/',
        subMenuItems2: [
          {
            name: 'Test script examples',
            url: '/docs/writing-scripts/script-references/test-examples/',
          },
          {
            name: 'Dynamic variables',
            url: '/docs/writing-scripts/script-references/variables-list/',
          },
          {
            name: 'Postman JavaScript reference',
            url: '/docs/writing-scripts/script-references/postman-sandbox-api-reference/',
          },
        ],
      },
    ],
  },
  {
    name: 'Running Collections',
    parentSlug: 'running-collections',
    url: '/docs/running-collections/intro-to-collection-runs/',
    subMenuItems1: [
      {
        name: 'Using the Collection Runner',
        url: '/docs/running-collections/intro-to-collection-runs/',
      },
      {
        name: 'Scheduling runs with monitors',
        url: '/docs/running-collections/scheduling-collection-runs/',
      },
      {
        name: 'Triggering runs with webhooks',
        url: '/docs/running-collections/collection-webhooks/',
      },
      {
        name: 'Building request workflows',
        url: '/docs/running-collections/building-workflows/',
      },
      {
        name: 'Importing data files',
        url: '/docs/running-collections/working-with-data-files/',
      },
      {
        name: 'Using Newman CLI',
        subParentSlug: 'using-newman-cli',
        slug: '/docs/running-collections/using-newman-cli/command-line-integration-with-newman/',
        subMenuItems2: [
          {
            name: 'Running collections on the command line with Newman',
            url: '/docs/running-collections/using-newman-cli/command-line-integration-with-newman/',
          },
          {
            name: 'Installing and running Newman',
            url: '/docs/running-collections/using-newman-cli/installing-running-newman/',
          },
          {
            name: 'Newman options',
            url: '/docs/running-collections/using-newman-cli/newman-options/',
          },
          {
            name: 'Uploading files in Newman',
            url: '/docs/running-collections/using-newman-cli/newman-file-uploads/',
          },
          {
            name: 'Using Newman custom reporters',
            url: '/docs/running-collections/using-newman-cli/newman-custom-reporters/',
          },
          {
            name: 'Newman with Docker',
            url: '/docs/running-collections/using-newman-cli/newman-with-docker/',
          },
          {
            name: 'CI with Postman API',
            url: '/docs/running-collections/using-newman-cli/continuous-integration/',
          },
          {
            name: 'Integrating with Travis CI',
            url: '/docs/running-collections/using-newman-cli/integration-with-travis/',
          },
          {
            name: 'Integrating with Jenkins',
            url: '/docs/running-collections/using-newman-cli/integration-with-jenkins/',
          },
        ],
      },
    ],
  },
  {
    name: 'Using the Postman CLI',
    parentSlug: 'postman-cli',
    url: '/docs/postman-cli/postman-cli-overview/',
    subMenuItems1: [
      {
        name: 'Postman CLI overview',
        url: '/docs/postman-cli/postman-cli-overview/',
      },
      {
        name: 'Installing the Postman CLI',
        url: '/docs/postman-cli/postman-cli-installation/',
      },
      {
        name: 'Postman CLI command options',
        url: '/docs/postman-cli/postman-cli-options/',
      },
    ],
  },
  {
    name: 'Collaborating in Postman',
    parentSlug: 'collaborating-in-postman',
    url: '/docs/collaborating-in-postman/working-with-your-team/collaboration-overview/',
    subMenuItems1: [
      {
        name: 'Working with your team',
        subParentSlug: 'working-with-your-team',
        slug: '/docs/collaborating-in-postman/working-with-your-team/collaboration-overview/',
        subMenuItems2: [
          {
            name: 'Collaboration overview',
            url: '/docs/collaborating-in-postman/working-with-your-team/collaboration-overview/',
          },
          {
            name: 'Enabling team discovery',
            url: '/docs/collaborating-in-postman/working-with-your-team/enabling-team-discovery/',
          },
          {
            name: 'Collaborating in team workspaces',
            url: '/docs/collaborating-in-postman/working-with-your-team/collaborating-in-team-workspaces/',
          },
          {
            name: 'Discussing your work',
            url: '/docs/collaborating-in-postman/working-with-your-team/discussing-your-work/',
          },
        ],
      },
      {
        name: 'Defining roles',
        url: '/docs/collaborating-in-postman/roles-and-permissions/',
      },
      {
        name: 'Requesting access',
        url: '/docs/collaborating-in-postman/requesting-access-to-collections/',
      },
      {
        name: 'Sharing your work',
        url: '/docs/collaborating-in-postman/sharing/',
      },
      {
        name: 'Your Private API Network',
        url: '/docs/collaborating-in-postman/adding-private-network/',
      },
      {
        name: 'Using version control',
        url: '/docs/collaborating-in-postman/version-control/',
      },
      {
        name: 'Managing public elements',
        url: '/docs/collaborating-in-postman/manage-public-elements/',
      },
      {
        name: 'Using Workspaces',
        subParentSlug: 'using-workspaces',
        slug: '/docs/collaborating-in-postman/using-workspaces/creating-workspaces/',
        subMenuItems2: [
          {
            name: 'Creating workspaces',
            url: '/docs/collaborating-in-postman/using-workspaces/creating-workspaces/',
          },
          {
            name: 'Using and managing workspaces',
            url: '/docs/collaborating-in-postman/using-workspaces/managing-workspaces/',
          },
          {
            name: 'Public workspaces',
            url: '/docs/collaborating-in-postman/using-workspaces/public-workspaces/'
          },
          {
            name: 'Viewing workspace activity',
            url: '/docs/collaborating-in-postman/using-workspaces/changelog-and-restoring-collections/',
          },
          {
            name: 'Resolving team conflicts',
            url: '/docs/collaborating-in-postman/using-workspaces/conflicts/',
          },
        ],
      },
    ],
  },
  {
    name: 'Designing and Developing your API',
    parentSlug: 'designing-and-developing-your-api',
    url: '/docs/designing-and-developing-your-api/the-api-workflow/',
    subMenuItems1: [
      {
        name: 'API Development Overview',
        url: '/docs/designing-and-developing-your-api/the-api-workflow/',
      },
      {
        name: 'Creating an API',
        url: '/docs/designing-and-developing-your-api/creating-an-api/',
      },
      {
        name: 'Importing an API',
        url: '/docs/designing-and-developing-your-api/importing-an-api/',
      },
      {
        name: 'Versioning an API',
        subParentSlug: 'versioning-an-api',
        slug: '/docs/designing-and-developing-your-api/versioning-an-api/versioning-an-api-overview/',
        subMenuItems2: [
          {
            name: 'Versioning an API overview',
            url: '/docs/designing-and-developing-your-api/versioning-an-api/versioning-an-api-overview/',
          },
          {
            name: 'Using an external Git repository',
            url: '/docs/designing-and-developing-your-api/versioning-an-api/using-external-git-repo/',
          },
          {
            name: 'Working with API versions',
            url: '/docs/designing-and-developing-your-api/versioning-an-api/api-versions/',
          },
          {
            name: 'Working with API releases',
            url: '/docs/designing-and-developing-your-api/versioning-an-api/api-releases/',
          },
          {
            name: 'Setting an API status',
            url: '/docs/designing-and-developing-your-api/versioning-an-api/api-statuses/',
          },
        ],
      },
      {
        name: 'Defining an API Specification',
        url: '/docs/designing-and-developing-your-api/defining-an-api/',
      },
      {
        name: 'Developing an API',
        url: '/docs/designing-and-developing-your-api/developing-an-api/',
      },
      {
        name: 'Generating server code',
        url: '/docs/designing-and-developing-your-api/generating-server-code/',
      },
      {
        name: 'Testing an API',
        url: '/docs/designing-and-developing-your-api/testing-an-api/',
      },
      {
        name: 'Deploying an API',
        subParentSlug: 'deploying-an-api',
        slug: '/docs/designing-and-developing-your-api/deploying-an-api/deploying-an-api-overview/',
        subMenuItems2: [
          {
            name: 'Deploying an API overview',
            url: '/docs/designing-and-developing-your-api/deploying-an-api/deploying-an-api-overview/',
          },
          {
            name: 'Deploying an AWS API',
            url: '/docs/designing-and-developing-your-api/deploying-an-api/deploying-an-api-aws/',
          },
          {
            name: 'Deploying an Apigee API',
            url: '/docs/designing-and-developing-your-api/deploying-an-api/deploying-an-api-apigee/',
          },
        ],
      },
      {
        name: 'Observing an API',
        subParentSlug: 'observing-an-api',
        slug: '/docs/designing-and-developing-your-api/observing-an-api/observing-an-api/',
        subMenuItems2: [
          {
            name: 'Observing an API',
            url: '/docs/designing-and-developing-your-api/observing-an-api/observing-an-api/',
          },
          {
            name: 'Viewing New Relic metrics',
            url: '/docs/designing-and-developing-your-api/observing-an-api/new-relic-apm/',
          },
          {
            name: 'Viewing Datadog metrics',
            url: '/docs/designing-and-developing-your-api/observing-an-api/datadog-apm/',
          },
        ],
      },
      {
        name: 'Managing and sharing APIs',
        url: '/docs/designing-and-developing-your-api/managing-apis/',
      },
      {
        name: 'Validating APIs',
        url: '/docs/designing-and-developing-your-api/validating-elements-against-schema/',
      },
      {
        name: 'Mocking Data',
        subParentSlug: 'mocking-data',
        slug: '/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/',
        subMenuItems2: [
          {
            name: 'Setting up mock servers',
            url: '/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/',
          },
          {
            name: 'Mocking with examples',
            url: '/docs/designing-and-developing-your-api/mocking-data/mocking-with-examples/',
          },
          {
            name: 'Mocking with the Postman API',
            url: '/docs/designing-and-developing-your-api/mocking-data/mock-with-api/',
          },
          {
            name: 'Understanding example matching',
            url: '/docs/designing-and-developing-your-api/mocking-data/matching-algorithm/',
          },
        ],
      },
    ],
  },
  {
    name: 'Publishing Your API',
    parentSlug: 'publishing-your-api',
    url: '/docs/publishing-your-api/documenting-your-api/',
    subMenuItems1: [
      {
        name: 'Documenting your API',
        url: '/docs/publishing-your-api/documenting-your-api/',
      },
      {
        name: 'Authoring your docs',
        url: '/docs/publishing-your-api/authoring-your-documentation/',
      },
      {
        name: 'Publishing your docs',
        url: '/docs/publishing-your-api/publishing-your-docs/',
      },
      {
        name: 'Viewing documentation',
        url: '/docs/publishing-your-api/viewing-documentation/',
      },
      {
        name: 'Using custom domains',
        url: '/docs/publishing-your-api/custom-doc-domains/',
      },
      {
        name: 'Run in Postman',
        subParentSlug: 'run-in-postman',
        slug: '/docs/publishing-your-api/run-in-postman/introduction-run-button/',
        subMenuItems2: [
          {
            name: 'Using Run in Postman buttons',
            url: '/docs/publishing-your-api/run-in-postman/introduction-run-button/',
          },
          {
            name: 'Creating Run in Postman buttons',
            url: '/docs/publishing-your-api/run-in-postman/creating-run-button/',
          },
          {
            name: 'Coding with Run in Postman',
            url: '/docs/publishing-your-api/run-in-postman/run-button-API/',
          },
        ],
      },
    ],
  },
  {
    name: 'Monitoring Your API',
    parentSlug: 'monitoring-your-api',
    url: '/docs/monitoring-your-api/intro-monitors/',
    subMenuItems1: [
      {
        name: 'Monitoring your APIs',
        url: '/docs/monitoring-your-api/intro-monitors/',
      },
      {
        name: 'Monitoring API uptime',
        url: '/docs/monitoring-your-api/uptime-monitors/',
      },
      {
        name: 'Setting up a collection-based monitor',
        url: '/docs/monitoring-your-api/setting-up-monitor/',
      },
      {
        name: 'Viewing collection-based monitor results',
        url: '/docs/monitoring-your-api/viewing-monitor-results/',
      },
      {
        name: 'Managing monitor usage',
        url: '/docs/monitoring-your-api/monitor-usage/',
      },
      {
        name: 'Running monitors using static IPs',
        url: '/docs/monitoring-your-api/using-static-IPs-to-monitor/',
      },
      {
        name: 'Troubleshooting monitors',
        url: '/docs/monitoring-your-api/troubleshooting-monitors/',
      },
      {
        name: 'Monitoring FAQs',
        url: '/docs/monitoring-your-api/faqs-monitors/',
      },
    ],
  },
  {
    name: 'API Governance',
    parentSlug: 'api-governance',
    url: '/docs/api-governance/api-governance-overview/',
    subMenuItems1: [
      {
        name: 'API governance',
        url: '/docs/api-governance/api-governance-overview/',
      },
      {
        name: 'API definition',
        subParentSlug: 'api-definition',
        slug: '/docs/api-governance/api-definition/api-definition-warnings/',
        subMenuItems2: [
          {
            name: 'API definition warnings',
            url: '/docs/api-governance/api-definition/api-definition-warnings/',
          },
          {
            name: 'OpenAPI 3.0 warnings',
            url: '/docs/api-governance/api-definition/openapi3/',
          },
          {
            name: 'OpenAPI 2.0 warnings',
            url: '/docs/api-governance/api-definition/openapi2/',
          },
        ],
      },
      {
        name: 'API testing',
        subParentSlug: 'api-testing',
        slug: '/docs/api-governance/api-testing/api-testing-warnings/',
        subMenuItems2: [
          {
            name: 'API testing warnings',
            url: '/docs/api-governance/api-testing/api-testing-warnings/',
          },
          {
            name: 'Security warnings',
            url: '/docs/api-governance/api-testing/security-warnings/',
          },
        ],
      },
    ],
  },
  {
    name: 'Administration',
    parentSlug: 'administration',
    url: '/docs/administration/managing-your-team/managing-your-team/',
    subMenuItems1: [
      {
        name: 'Managing Your Team',
        subParentSlug: 'managing-your-team',
        slug: '/docs/administration/managing-your-team/managing-your-team/',
        subMenuItems2: [
          {
            name: 'Managing your team',
            url: '/docs/administration/managing-your-team/managing-your-team/',
          },
          {
            name: 'Managing user groups',
            url: '/docs/administration/managing-your-team/user-groups/',
          },
          {
            name: 'Configuring domain capture',
            url: '/docs/administration/managing-your-team/configuring-domain-capture/',
          },
        ],
      },
      {
        name: 'Purchasing Postman',
        url: '/docs/administration/buying/',
      },
      {
        name: 'Billing',
        url: '/docs/administration/billing/',
      },
      {
        name: 'Configuring team settings',
        url: '/docs/administration/team-settings/',
      },
      {
        name: 'Utilizing audit logs',
        url: '/docs/administration/audit-logs/',
      },
      {
        name: 'Token Scanner',
        url: '/docs/administration/token-scanner/',
      },
      {
        name: 'Onboarding checklist',
        url: '/docs/administration/onboarding-checklist/',
      },
      {
        name: 'Migrating data between teams',
        url: '/docs/administration/team-merge/',
      },
      {
        name: 'Single Sign-On (SSO)',
        subParentSlug: 'sso',
        slug: '/docs/administration/sso/intro-sso/',
        subMenuItems2: [
          {
            name: 'Intro to SSO',
            url: '/docs/administration/sso/intro-sso/',
          },
          {
            name: 'Configuring SSO for a team',
            url: '/docs/administration/sso/admin-sso/',
          },
          {
            name: 'Logging in to an SSO team',
            url: '/docs/administration/sso/user-sso/',
          },
          {
            name: 'Microsoft AD FS',
            url: '/docs/administration/sso/microsoft-adfs/',
          },
          {
            name: 'Azure AD',
            url: '/docs/administration/sso/azure-ad/',
          },
          {
            name: 'Duo',
            url: '/docs/administration/sso/duo/',
          },
          {
            name: 'Google Workspace',
            url: '/docs/administration/sso/google-workspace/',
          },
          {
            name: 'Okta',
            url: '/docs/administration/sso/okta/',
          },
          {
            name: 'OneLogin',
            url: '/docs/administration/sso/onelogin/',
          },
          {
            name: 'Ping Identity',
            url: '/docs/administration/sso/ping-identity/',
          },
        ],
      },
      {
        name: 'SCIM Provisioning',
        subParentSlug: 'scim-provisioning',
        slug: '/docs/administration/scim-provisioning/scim-provisioning-overview/',
        subMenuItems2: [
          {
            name: 'SCIM Provisioning Overview',
            url: '/docs/administration/scim-provisioning/scim-provisioning-overview/',
          },
          {
            name: 'Configuring SCIM with Okta',
            url: '/docs/administration/scim-provisioning/configuring-scim-with-okta/',
          },
          {
            name: 'Configuring SCIM with Azure AD',
            url: '/docs/administration/scim-provisioning/configuring-scim-with-azure-ad/',
          },
          {
            name: `Configuring SCIM with OneLogin`,
            url: `/docs/administration/scim-provisioning/configuring-scim-with-onelogin/`
          }
        ],
      },
      {
        name: 'Updating your team to the current version of Postman',
        url: '/docs/administration/updating/',
      },
      {
        name: 'Managing Enterprise deployment',
        url: '/docs/administration/managing-enterprise-deployment/',
      },
      {
        name: 'Admin FAQs',
        url: '/docs/administration/admin-faqs/',
      },
    ],
  },
  {
    name: 'Using Reports',
    parentSlug: 'reports',
    url: '/docs/reports/reports-overview/',
    subMenuItems1: [
      {
        name: 'Reports overview',
        url: '/docs/reports/reports-overview/',
      },
      {
        name: 'Summary reports',
        url: '/docs/reports/summary-reports/',
      },
      {
        name: 'Team details reports',
        url: '/docs/reports/team-details-reports/',
      },
      {
        name: 'All Workspaces reports',
        url: '/docs/reports/all-workspaces-reports/',
      },
      {
        name: 'All APIs reports',
        url: '/docs/reports/all-apis-reports/',
      },
      {
        name: 'Security Audit reports',
        url: '/docs/reports/security-audit-reports/',
      },
    ],
  },
  {
    name: 'Developer Resources',
    parentSlug: 'developer',
    url: '/docs/developer/resources-intro/',
    subMenuItems1: [
      {
        name: 'Developing with Postman utilities',
        url: '/docs/developer/resources-intro/',
      },
      {
        name: 'Postman API',
        url: '/docs/developer/intro-api/',
      },
      {
        name: 'Echo API',
        url: '/docs/developer/echo-api/',
      },
      {
        name: 'Collection SDK',
        url: '/docs/developer/collection-sdk/',
      },
      {
        name: 'Postman Runtime library',
        url: '/docs/developer/runtime-library/',
      },
      {
        name: 'Code generator library',
        url: '/docs/developer/code-generators/',
      },
      {
        name: 'Postman Collection conversion',
        url: '/docs/developer/collection-conversion/',
      },
    ],
  },
  {
    name: 'Integrations',
    parentSlug: 'integrations',
    url: '/docs/integrations/intro-integrations/',
    subMenuItems1: [
      {
        name: 'Integrating with Postman',
        url: '/docs/integrations/intro-integrations/',
      },
      {
        name: 'Custom Webhooks',
        url: '/docs/integrations/webhooks/',
      },
      {
        name: 'Installed Apps',
        url: '/docs/integrations/installed-apps/'
      },
      {
        name: 'CI Integrations',
        url: '/docs/integrations/ci-integrations/',
      },
      {
        name: 'Available Integrations',
        subParentSlug: 'available-integrations',
        slug: '/docs/integrations/available-integrations/apimatic/',
        subMenuItems2: [
          {
            name: 'APIMatic',
            url: '/docs/integrations/available-integrations/apimatic/',
          },
          {
            name: 'AWS API Gateway',
            url: '/docs/integrations/available-integrations/aws-api-gateway/',
          },
          {
            name: 'Azure DevOps',
            url: '/docs/integrations/available-integrations/azure-devops/',
          },
          {
            name: 'BigPanda',
            url: '/docs/integrations/available-integrations/bigpanda/',
          },
          {
            name: 'Bitbucket',
            url: '/docs/integrations/available-integrations/bitbucket/',
          },
          {
            name: 'Bitbucket Pipelines',
            url: '/docs/integrations/available-integrations/ci-integrations/bitbucket-pipelines/',
          },
          {
            name: 'CircleCI',
            url: '/docs/integrations/available-integrations/ci-integrations/circleci/',
          },
          {
            name: 'Coralogix',
            url: '/docs/integrations/available-integrations/coralogix/',
          },
          {
            name: 'Datadog',
            url: '/docs/integrations/available-integrations/datadog/',
          },
          {
            name: 'Dropbox',
            url: '/docs/integrations/available-integrations/dropbox/',
          },
          {
            name: 'GitHub',
            url: '/docs/integrations/available-integrations/github/',
          },
          {
            name: 'GitLab',
            url: '/docs/integrations/available-integrations/gitlab/',
          },
          {
            name: 'GitLab CI/CD',
            url: '/docs/integrations/available-integrations/ci-integrations/gitlab-ci/',
          },
          {
            name: 'Jenkins',
            url: '/docs/integrations/available-integrations/ci-integrations/jenkins/',
          },
          {
            name: 'Keen',
            url: '/docs/integrations/available-integrations/keen/',
          },
          {
            name: 'Lightstep',
            url: '/docs/integrations/available-integrations/lightstep/',
          },
          {
            name: 'Microsoft Power Automate',
            url: '/docs/integrations/available-integrations/microsoft-power-automate/',
          },
          {
            name: 'Microsoft Teams',
            url: '/docs/integrations/available-integrations/microsoft-teams/',
          },
          {
            name: 'New Relic',
            url: '/docs/integrations/available-integrations/new-relic/',
          },
          {
            name: 'OpenAPI',
            url: '/docs/integrations/available-integrations/working-with-openAPI/',
          },
          {
            name: 'Opsgenie',
            url: '/docs/integrations/available-integrations/opsgenie/',
          },
          {
            name: 'PagerDuty',
            url: '/docs/integrations/available-integrations/pagerduty/',
          },
          {
            name: 'Splunk',
            url: '/docs/integrations/available-integrations/splunk/',
          },
          {
            name: 'Splunk On-Call',
            url: '/docs/integrations/available-integrations/splunk-on-call/',
          },
          {
            name: 'Slack',
            url: '/docs/integrations/available-integrations/slack/',
          },
          {
            name: 'Statuspage',
            url: '/docs/integrations/available-integrations/statuspage/',
          },
          {
            name: 'Travis CI',
            url: '/docs/integrations/available-integrations/ci-integrations/travis-ci/',
          },
        ],
      },
    ],
  },
];

// export default parentSlugItems;
