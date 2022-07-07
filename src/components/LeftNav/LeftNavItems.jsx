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
    name: "Getting started",
    parentSlug: "getting-started",
    url: "/postman-flows/getting-started/flows-overview/",
    subMenuItems1: [
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
    parentSlug: "core-concepts",
    url: "/postman-flows/core-concepts/blocks/",
    subMenuItems1: [
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
]

// export default parentSlugItems;
