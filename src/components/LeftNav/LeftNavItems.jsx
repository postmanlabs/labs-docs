/*
  use this file to create the left nav information architecture.

  Example code for parent, child, second level parent, second level child:

  {
    name: 'Title of Parent drawer: Getting started',
    parentSlug: 'Parent path: getting-started',
    url: 'This is the page that the user should land on when clicking on the parent drawer. Can be any url: /postman-flows/flows-overview/',
    subMenuItems1: [
      {
        name: 'first level child: Introduction',
        url: 'path to the first level child: /postman-flows/flows-overview/',
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
    name: "Labs Overview",
    parentSlug: "labs-overview",
    url: "/labs-overview/",
    subMenuItems1: [],
    caret: false,
  },
  {
    name: "Postman Flows",
    parentSlug: "postman-flows",
    url: "https://learning.postman.com/docs/postman-flows/flows-intro/flows-overview/",
    subMenuItems1: [],
    caret: false,
  },
  {
    name: "gRPC Client",
    parentSlug: "grpc-client",
    url: "https://learning.postman.com/docs/sending-requests/grpc/grpc-client-overview/",
    subMenuItems1: [],
    caret: false,
  },
  {
    name: 'WebSocket Client',
    parentSlug: 'websocket-client',
    url: '/postman-api-client/websocket-client/websocket-client-overview/',
    caret: true,
    subMenuItems1: [
      {
        name: 'Using WebSocket requests',
        url: '/postman-api-client/websocket-client/websocket-client-overview/',
      },             
    ],
  },
];

// export default parentSlugItems;