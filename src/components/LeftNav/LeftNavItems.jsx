



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
        url: '/docs/getting-started/installation-and-updates/',
      },
    ],
  },
  {
    name: 'Sending Requests',
    url: '/docs/getting-started/introduction/',
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
    ],
  },
  {
    name: 'Writing Scripts',
    url: '/docs/getting-started/introduction/',
    subMenuItems1: [
      {
        name: 'Scripting in Postman',
        url: '/docs/getting-started/introduction/',
      },
      {
        name: 'Writing pre-requests scripts',
        url: '/docs/getting-started/installation-and-updates/',
      },
      {
        title: 'Script references',
        subMenuItems2: [
          {
            name: 'Test script examples',
            url: '/',
          },
          {
            name: 'Dynamic variables',
            url: '/',
          },
        ],
      },
    ],
  },
];

// export default parentItems;
