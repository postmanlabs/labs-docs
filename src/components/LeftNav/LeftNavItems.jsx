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


// eslint-disable-next-line import/prefer-default-export
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
        slug: '/docs/sending-requests/capturing-request-data/capturing-http-requests/',
        subMenuItems2: [
          {
            name: 'Capturing HTTP requests',
            url: '/docs/sending-requests/capturing-request-data/capturing-http-requests/',
          },
          {
            name: 'Using a proxy',
            url: '/docs/sending-requests/capturing-request-data/proxy/',
          },
          {
            name: 'Using Postman Interceptor',
            url: '/docs/sending-requests/capturing-request-data/interceptor/',
          },
        ],
      },
      {
        name: 'Supported API Frameworks',
        subParentSlug: 'supported-api-frameworks',
        slug: '/docs/sending-requests/supported-api-frameworks/graphql/',
        subMenuItems2: [
          {
            name: 'Querying with GraphQL',
            url: '/docs/sending-requests/supported-api-frameworks/graphql/',
          },
          {
            name: 'Using WebSocket Requests',
            url: '/docs/sending-requests/supported-api-frameworks/websocket/',
          },
          {
            name: 'Making SOAP Requests',
            url: '/docs/sending-requests/supported-api-frameworks/making-soap-requests/',
          },
        ],
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
    name: 'Collaborating in Postman',
    parentSlug: 'collaborating-in-postman',
    url: '/docs/collaborating-in-postman/collaboration-intro/',
    subMenuItems1: [
      {
        name: 'Working with your team',
        url: '/docs/collaborating-in-postman/collaboration-intro/',
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
        name: 'Commenting on collections',
        url: '/docs/collaborating-in-postman/commenting-on-collections/',
      },
      {
        name: 'Using version control',
        url: '/docs/collaborating-in-postman/version-control-for-collections/',
      },
      {
        name: 'Public workspaces',
        url: '/docs/collaborating-in-postman/public-workspaces/',
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
        name: 'Versioning APIs',
        url: '/docs/designing-and-developing-your-api/versioning-an-api/',
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
        url: '/docs/designing-and-developing-your-api/deploying-an-api/',
      },
      {
        name: 'Observing an API',
        url: '/docs/designing-and-developing-your-api/observing-an-api/',
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
            name: 'Mocking by API',
            url: '/docs/designing-and-developing-your-api/mocking-data/mock-with-api/',
          },
          {
            name: 'Understanding example matching',
            url: '/docs/designing-and-developing-your-api/mocking-data/matching-algorithm/',
          },
        ],
      },
      {
        name: 'Analyzing with reports',
        url: '/docs/designing-and-developing-your-api/view-and-analyze-api-reports/',
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
        name: 'Setting up a monitor',
        url: '/docs/monitoring-your-api/setting-up-monitor/',
      },
      {
        name: 'Viewing monitor results',
        url: '/docs/monitoring-your-api/viewing-monitor-results/',
      },
      {
        name: 'Managing monitor usage',
        url: '/docs/monitoring-your-api/monitor-usage/',
      },
      {
        name: 'Monitoring APIs and websites',
        url: '/docs/monitoring-your-api/monitoring-apis-websites/',
      },
      {
        name: 'Set up integrations to receive alerts',
        url: '/docs/monitoring-your-api/integrations-for-alerts/',
      },
      {
        name: 'Running Postman monitors using static IPs',
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
    name: 'API Security',
    parentSlug: 'api-security',
    url: '/docs/api-security/token-scanner/',
    subMenuItems1: [
      {
        name: 'Token Scanner',
        url: '/docs/api-security/token-scanner/',
      },
      {
        name: 'Security Warnings',
        subParentSlug: 'security-warnings',
        slug: '/docs/api-security/security-warnings/security-warnings-overview/',
        subMenuItems2: [
          {
            name: 'API schema security warnings',
            url: '/docs/api-security/security-warnings/security-warnings-overview/',
          },
          {
            name: 'OpenAPI 3.0 warnings',
            url: '/docs/api-security/security-warnings/openapi3/',
          },
          {
            name: 'OpenAPI 2.0 warnings',
            url: '/docs/api-security/security-warnings/openapi2/',
          },
        ],
      },
    ],
  },
  {
    name: 'Administration',
    parentSlug: 'administration',
    url: '/docs/administration/buying/',
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
            name: 'Configuring SCIM provisioning',
            url: '/docs/administration/managing-your-team/configuring-scim/',
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
            name: 'Custom SAML in Azure AD',
            url: '/docs/administration/sso/saml-in-azure-ad/',
          },
          {
            name: 'Custom SAML in Duo',
            url: '/docs/administration/sso/saml-duo/',
          },
          {
            name: 'Custom SAML in GSuite',
            url: '/docs/administration/sso/saml-gsuite/',
          },
          {
            name: 'Custom SAML in Okta',
            url: '/docs/administration/sso/saml-okta/',
          },
          {
            name: 'Custom SAML in OneLogin',
            url: '/docs/administration/sso/saml-onelogin/',
          },
          {
            name: 'Custom SAML in Ping Identity',
            url: '/docs/administration/sso/saml-ping/',
          },
        ],
      },
      {
        name: 'Upgrading your team to the current version of Postman',
        url: '/docs/administration/upgrading/',
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
            name: 'BigPanda',
            url: '/docs/integrations/available-integrations/bigpanda/',
          },
          {
            name: 'Bitbucket',
            url: '/docs/integrations/available-integrations/bitbucket/',
          },
          {
            name: 'Circle CI',
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
            name: 'Keen',
            url: '/docs/integrations/available-integrations/keen/',
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
