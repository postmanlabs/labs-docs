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
      nodes: [
        {
          fields: { slug: '/docs/foo/slug/' },
          frontmatter: { title: 'slug' },
          id: 'jfkdlsajfkldsa',
        },
        {
          fields: { slug: '/docs/foo/nested/nestedslug/' },
          frontmatter: { title: 'nested slug' },
          id: 'jfkdlsajfkldsfa',
        },
        {
          fields: { slug: '/docs/bar/otherslug/' },
          frontmatter: { title: 'otherslug' },
          id: 'jfkdlsajfkldsfa',
        },
      ],
    },
    leftNavLinks: {
      value: '{"docs":{"foo":{"slug":{"url":"/docs/foo/slug/"},"nested":{"nestedslug":{"url":"/docs/foo/nested/nestedslug/"}}},"bar":{"otherslug":{"url":"/docs/bar/otherslug/"}}}}',
    },
    headerLinks: {
      value: '{"links":[{"name":"Getting Started","url":"/getting-started/"},{"name":"Concepts","url":"/concepts/"},{"name":"Reference","url":"/reference/"},{"name":"Docs","url":"/docs/"},{"name":"Dashboard","url":"https://app.getpostman.com/","cta":true}],"title":"Learning Center"}',
    },
  })),
};
