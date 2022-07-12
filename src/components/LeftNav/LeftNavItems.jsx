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
    url: "/labs-overview",
  },
  {
    name: "Postman Flows",
    parentSlug: "postman-flows",
    url: "/postman-flows/getting-started/flows-overview/",
    subMenuItems1: [
      {
        name: "Getting Started",
        subParentSlug: "getting-started",
        slug: "/postman-flows/getting-started/flows-overview/",
        subMenuItems2: [
          {
            name: "Introduction",
            url: "/postman-flows/getting-started/flows-overview/",
          },
          {
            name: "The Interface",
            url: "/postman-flows/getting-started/the-interface/",
          },
          {
            name: "Running requests in sequence",
            url: "/postman-flows/getting-started/running-requests-in-sequence/",
          },
          {
            name: "Chaining requests with data",
            url: "/postman-flows/getting-started/chaining-requests-with-data/",
          },
          {
            name: "Working with access tokens - Durables",
            url: "/postman-flows/getting-started/working-with-access-tokens/",
          },
        ],
      },
      {
        name: "Core concepts",
        subParentSlug: "core-concept",
        slug: "/postman-flows/core-concepts/blocks/",
        subMenuItems2: [
          {
            name: "Blocks",
            url: "/postman-flows/core-concepts/blocks/",
          },
          {
            name: "Messages",
            url: "/postman-flows/core-concepts/messages/",
          },
          {
            name: "Connections",
            url: "/postman-flows/core-concepts/connections/",
          },
          {
            name: "Data Types",
            url: "/postman-flows/core-concepts/data-types/",
          },
        ],
      },
    ],
  },
  {
    name: "gRPC Client",
    parentSlug: "grpc-client",
    url: "/postman-api-client/grpc-client/grpc-client-overview/",
    subMenuItems1: [
      {
        name: "Introduction",
        url: "/postman-api-client/grpc-client/grpc-client-overview/",
      },
      {
        name: "Request interface",
        url: "/postman-api-client/grpc-client/grpc-request-interface/",
      },
      {
        name: "Invoking your first gRPC request",
        url: "/postman-api-client/grpc-client/first-grpc-request/",
      },
      {
        name: "Using gRPC requests",
        url: "/postman-api-client/grpc-client/using-grpc-request/",
      },
      {
        name: "Working with service definition",
        url: "/postman-flows/getting-started/using-service-definition/",
      },
    ],
  },
  {
    name: "WebSocket Client",
    parentSlug: "websocket-client",
    url: "/postman-api-client/websocket-client/websocket-client-overview/",
    subMenuItems1: [
      {
        name: "Using WebSocket requests",
        url: "/postman-api-client/websocket-client/websocket-client-overview/",
      },
    ],
  },
]

// export default parentSlugItems;