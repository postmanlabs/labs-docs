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
            name: "Data Types",
            url: "/postman-flows/core-concepts/data-types/",
          },
        ],
      },
      {
        name: "Flow Query Language",
        subParentSlug: "flows-query-language",
        slug: "/postman-flows/flows-query-language/introduction-to-fql/",
        subMenuItems2: [
          {
            name: "Getting Basic Values",
            url: "/postman-flows/flows-query-language/getting-basic-values/",
          },
          {
            name: "Conditional data selection",
            url: "/postman-flows/flows-query-language/conditional-data-selection/",
          },
          {
            name: "Returning Structured Results",
            url: "/postman-flows/flows-query-language/returning-structured-results/",
          },
          {
            name: "Data Manipulation",
            url: "/postman-flows/flows-query-language/data-manipulation/",
          },
        ],
      },
      {
        name: "Remote Execution",
        subParentSlug: "webhooks",
        slug: "/postman-flows/remote-execution/webhooks/",
        subMenuItems2: [
          {
            name: "Webhooks",
            url: "/postman-flows/remote-execution/webhooks/",
          },
        ]
      },
    ],
  },
  {
    name: "gRPC Client",
    parentSlug: "grpc-client",
    url: "https://learning.postman.com/docs/sending-requests/grpc/grpc-client-overview/",
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
