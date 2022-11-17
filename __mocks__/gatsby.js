const React = require('react');

const gatsby = jest.requireActual('gatsby');

module.exports = {
  ...gatsby,
  graphql: jest.fn(),
  Link: jest.fn().mockImplementation(
    // these props are invalid for an `a` tag
    ({
      activeClassName,
      activeStyle,
      getProps,
      innerRef,
      partiallyActive,
      ref,
      replace,
      to,
      ...rest
    }) => React.createElement('a', {
      ...rest,
      href: to,
    }),
  ),
  StaticQuery: jest.fn(),
  useStaticQuery: jest.fn().mockImplementation(() => ({
    allMarkdownRemark: {
      nodes: [{
        fields: {
          slug: '/docs/foo/slug/',
        },
        frontmatter: {
          title: 'slug',
        },
        id: 'jfkdlsajfkldsa',
      },
      {
        fields: {
          slug: '/docs/foo/nested/nestedslug/',
        },
        frontmatter: {
          title: 'nested slug',
        },
        id: 'jfkdlsajfkldsfa',
      },
      {
        fields: {
          slug: '/docs/bar/otherslug/',
        },
        frontmatter: {
          title: 'otherslug',
        },
        id: 'jfkdlsajfkldsfa',
      },
      ],
    },
    leftNavLinks: {
      value: '{"docs":{"foo":{"slug":{"url":"/docs/foo/slug/"},"nested":{"nestedslug":{"url":"/docs/foo/nested/nestedslug/"}}},"bar":{"otherslug":{"url":"/docs/bar/otherslug/"}}}}',
    },
  })),
};
