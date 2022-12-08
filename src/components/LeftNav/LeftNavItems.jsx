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
    name: 'Getting started',
    parentSlug: 'getting-started',
    url: '/docs/getting-started/introduction/',
    subMenuItems1: [
      {
        name: 'Introduction',
        url: '/docs/getting-started/introduction/',
      },
      {
        name: 'Installing and updating Postman',
        url: '/docs/getting-started/installation-and-updates/',
      },
    ],
  },
  {
    name: 'Sending requests',
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
        name: 'Capturing request data',
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
        ],
      },
      {
        name: 'Querying with GraphQL',
        url: '/docs/sending-requests/graphql/graphql/',
      },
      {
        name: 'Using gRPC requests',
        subParentSlug: 'grpc',
        slug: '/docs/sending-requests/grpc/grpc-client-overview/',
        subMenuItems2: [
          {
            name: 'gRPC overview',
            url: '/docs/sending-requests/grpc/grpc-client-overview/',
          },
          {
            name: 'Using the gRPC request interface',
            url: '/docs/sending-requests/grpc/grpc-request-interface/',
          },
        ],
      },
    ],
  },
];

// export default parentSlugItems;
