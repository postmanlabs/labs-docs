



// eslint-disable-next-line import/prefer-default-export
export const leftNavItems = [
  {
    name: 'Getting started',
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
    ],
  },
  {
    name: 'Sending Requests',
    subMenuItems1: [
      {
        name: 'Building requests',
        url: '/docs/sending-requests/requests/',
      },
      {
        name: 'Authorising requests',
        url: '/docs/sending-requests/authorization/',
      },
      {
        title: 'Capturing Request Data',
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
        title: 'Supported API Frameworks',
        subMenuItems2: [
          {
            name: 'Querying with GraphQL',
            url: '/docs/sending-requests/supported-api-frameworks/graphql/',
          },
          {
            name: 'Using WebsSocket Requests',
            url: '/docs/sending-requests/supported-api-frameworks/websocket/',
          },
          {
            name: 'Making SOAP Requests',
            url: '//docs/sending-requests/supported-api-frameworks/making-soap-requests/',
          },
        ],
      },
    ],
  },
  {
    name: 'Writing Scripts',
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
        title: 'Script references',
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
];

// export default parentItems;
