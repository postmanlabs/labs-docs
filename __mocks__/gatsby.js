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
    footerLinks: {
      value: '{"src":"/assets/postman-footer-v6-2.svg","alt":"api-platform","copyright":"© 2021 Postman, Inc.","items":[{"title":"Product","arialabelledby":"product","items":[{"title":"What is Postman?","url":"https://www.postman.com/product/what-is-postman/","category":"global-footer","label":"what-is-postman","id":"what-is-postman"},{"title":"API repository","url":"https://www.postman.com/product/api-repository/","category":"global-footer","label":"api-repository","id":"api-repository"},{"title":"Tools","url":"https://www.postman.com/product/tools/","category":"global-footer","label":"tools","id":"tools"},{"title":"Intelligence","url":"https://www.postman.com/product/intelligence/","category":"global-footer","label":"intelligence","id":"intelligence"},{"title":"Workspaces","url":"https://www.postman.com/product/workspaces/","category":"global-footer","label":"workspaces","id":"workspaces"},{"title":"Integrations","url":"https://www.postman.com/product/integrations/","category":"global-footer","label":"integrations","id":"integrations"},{"title":"Enterprise","url":"https://www.postman.com/postman-enterprise/","category":"global-footer","label":"enterprise","id":"enterprise"},{"title":"Plans and pricing","url":"https://www.postman.com/pricing/","category":"global-footer","label":"plans-and-pricing","id":"plans-and-pricing"},{"title":"Download the app","url":"https://www.postman.com/downloads/","category":"global-footer","label":"download-the-app","id":"download-the-app"},{"title":"Support Center","url":"https://www.postman.com/support/","category":"global-footer","label":"support-center","id":"support-center"}]},{"title":"Company","arialabelledby":"company","category":"global-footer","label":"company","id":"company","items":[{"title":"About","url":"https://www.postman.com/company/about-postman/","category":"global-footer","label":"about","id":"about"},{"title":"Careers and culture","url":"https://www.postman.com/company/careers/","category":"global-footer","label":"careers-and-culture","id":"careers-and-culture"},{"title":"Contact us","url":"https://www.postman.com/company/contact-us/","category":"global-footer","label":"contact-us","id":"contact-us"},{"title":"Press and media","url":"https://www.postman.com/company/press-media/","category":"global-footer","label":"press-and-media","id":"press-and-media"}]},{"title":"Security and Legal","arialabelledby":"security-and-terms","category":"global-footer","label":"security-and-terms","id":"security-and-terms","items":[{"title":"Security","url":"https://www.postman.com/security/","hrefType":"internal","category":"global-footer","label":"security","id":"security"},{"title":"Privacy policy","url":"https://www.postman.com/legal/privacy-policy/","hrefType":"internal","category":"global-footer","label":"privacy-policy","id":"privacy-policy"},{"title":"Terms","url":"https://www.postman.com/legal/terms/","category":"global-footer","label":"terms","id":"terms"}]},{"items":[{"title":"Twitter","url":"https://twitter.com/getpostman","hrefType":"external-other","category":"global-footer","label":"twitter","id":"twitter"},{"icon":"https://st-ar.cdn.postman-beta.com/images/linkedin-b6fdef2dc0dae8854a8f80921629a462.svg","title":"LinkedIn","url":"https://www.linkedin.com/company/postman-platform","hrefType":"external-other","category":"global-footer","label":"linkedin","id":"linkedin"},{"title":"GitHub","url":"https://github.com/postmanlabs","hrefType":"external-other","category":"global-footer","label":"github","id":"github"},{"title":"YouTube","url":"https://www.youtube.com/c/Postman","hrefType":"external-other","category":"global-footer","label":"youtube","id":"youtube"},{"icon":"https://st-ar.cdn.postman-beta.com/images/twitch-b58ae59bf57ffcd3ad7d59caa20c3cb2.svg","title":"Twitch","url":"https://www.twitch.tv/getpostman","hrefType":"external-other","category":"global-footer","label":"twitch","id":"twitch"}],"title":"Social","arialabelledby":"social"},{"url":"https://www.facebook.com/getpostman/","arialabel":"Visit our Facebook page"},{"url":"https://twitter.com/getpostman","arialabel":"Visit our Twitter page"},{"url":"https://www.linkedin.com/company/postman-platform","arialabel":"Visit our Linked in page"},{"url":"https://github.com/postmanlabs","arialabel":"Visit our Git Hub page"},{"url":"https://www.twitch.tv/getpostman","arialabel":"Visit our Twitch page"},{"url":"https://www.youtube.com/c/Postman","arialabel":"Visit our YouTube Channel"}],"items":[{"title":"Postman Galaxy","url":"https://www.postman.com/postman-galaxy/","category":"global-footer","label":"postman-galaxy","id":"postman-galaxy"},{"title":"Privacy","url":"https://www.postman.com/legal/privacy-policy/","category":"global-footer","label":"privacy","id":"privacy"},{"title":"Terms","url":"https://www.postman.com/legal/terms/","category":"global-footer","label":"terms","id":"terms"},{"title":"Careers","url":"https://www.postman.com/company/careers/","category":"global-footer","label":"careers","id":"careers"},{"title":"Support","url":"https://www.postman.com/support/","category":"global-footer","label":"support","id":"support"},{"title":"Security","url":"https://www.postman.com/security/","category":"global-footer","label":"security","id":"security"}],"title":"© 2021 Postman, Inc. All rights reserved."}',
    },
  })),
};
