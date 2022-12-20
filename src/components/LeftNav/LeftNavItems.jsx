/*
  use this file to create the left nav information architecture.

  Example code for parent, child, second level parent, second level child:

  {
    name: 'Title of Parent drawer: Getting started',
    parentSlug: 'Parent path: getting-started',
    url: 'This is the page that the user should land on when clicking on the parent drawer. Can be any url: /getting-started/introduction/',
    subMenuItems1: [
      {
        name: 'first level child: Introduction',
        url: 'path to the first level child: /getting-started/introduction/',
      },
      {
        name: 'This is a first level child that is also the second level parent drawer title: Capturing Request Data',
        subParentSlug: 'second parent path: capturing-request-data',
        slug: 'Page that user should land on when clicking on second level parent. Can be any url: /sending-requests/capturing-request-data/capturing-http-requests/',
        subMenuItems2: [
          {
            name: 'second level child: Capturing HTTP requests',
            url: 'path to second level child: /sending-requests/capturing-request-data/capturing-http-requests/',
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
    url: '/getting-started/introduction/',
    subMenuItems1: [
      {
        name: 'Introduction',
        url: '/getting-started/introduction/',
      },
      {
        name: 'Installing and updating Postman',
        url: '/getting-started/installation-and-updates/',
      },
    ],
  },
  {
    name: 'Sending requests',
    parentSlug: 'sending-requests',
    url: '/sending-requests/requests/',
    subMenuItems1: [
      {
        name: 'Building requests',
        url: '/sending-requests/requests/',
      },
      {
        name: 'Authorizing requests',
        url: '/sending-requests/authorization/',
      },
      {
        name: 'Capturing request data',
        subParentSlug: 'capturing-request-data',
        slug: '/sending-requests/capturing-request-data/capture-overview/',
        subMenuItems2: [
          {
            name: 'Capturing request data overview',
            url: '/sending-requests/capturing-request-data/capture-overview/',
          },
          {
            name: 'Capturing HTTP requests',
            url: '/sending-requests/capturing-request-data/capturing-http-requests/',
          },
        ],
      },
      {
        name: 'Querying with GraphQL',
        url: '/sending-requests/graphql/graphql/',
      },
      {
        name: 'Using gRPC requests',
        subParentSlug: 'grpc',
        slug: '/sending-requests/grpc/grpc-client-overview/',
        subMenuItems2: [
          {
            name: 'gRPC overview',
            url: '/sending-requests/grpc/grpc-client-overview/',
          },
          {
            name: 'Using the gRPC request interface',
            url: '/sending-requests/grpc/grpc-request-interface/',
          },
        ],
      },
    ],
  },
];

// export default parentSlugItems;
