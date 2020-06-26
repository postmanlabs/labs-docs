const queries = require('./src/utils/algolia');

// require('dotenv').config({
//   path: `.env.${process.env.GATSBY_ACTIVE_ENV}`,
// });

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Postman Learning Center',
    description: '',
    author: 'Postman',
    siteUrl: 'https://learning.postman.com',
  },
  plugins: [
    // {
    //   resolve: 'gatsby-plugin-google-analytics',
    //   options: {
    //     // The property ID; the tracking code won't be generated without it
    //     trackingId: 'UA-43979731-4',
    //     // Defines where to place the tracking script - `true` in the head and `false` in the body
    //     head: true,
    //     // Setting this parameter is optional
    //     anonymize: true,
    //     // Setting this parameter is also optional
    //     respectDNT: true,
    //     // Delays sending pageview hits on route update (in milliseconds)
    //     pageTransitionDelay: 1000,
    //     // Defers execution of google analytics script after page load
    //     defer: true,
    //   },
    // },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-M42M5N',
        includeInDevelopment: true,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-algolia',
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries,
        chunkSize: 10000, // default: 1000
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-autolink-headers',
          {
            resolve: 'gatsby-remark-embed-video',
            options: {
              width: 700,
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              height: 400, // Optional: Overrides optional.ratio
              // Optional: Will remove related videos from the end of an embedded YouTube video.
              related: false,
              noIframeBorder: true, // Optional: Disable insertion of <style> border: 0
            },
          },
          'gatsby-remark-responsive-iframe',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Roboto',
            variants: ['400', '500'],
          },
          {
            family: 'Open Sans',
            variants: ['400', '700'],
          },
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-meta-redirect',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://learning.postman.com',
        sitemap: 'https://learning.postman.com/sitemap.xml',
        resolveEnv: () => process.env.GATSBY_ACTIVE_ENV,
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }],
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }],
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-sri',
      options: {
        hash: 'sha512', // 'sha256', 'sha384' or 'sha512' ('sha512' = default)
        crossorigin: false, // Optional
      },
    },
    {
      resolve: 'gatsby-plugin-env-variables',
      options: {
        whitelist: ['MUNCHKIN_ID'],
      },
    },
    {
      resolve: 'gatsby-plugin-gdpr-cookies',
      options: {
        googleAnalytics: {
          trackingId: 'UA-43979731-4',
          anonymize: true,
        },
        environments: ['production', 'development'],
      },
    },
  ],
};
