const queries = require('./src/utils/algolia');

// require('dotenv').config({
//   path: `.env.${process.env.GATSBY_ACTIVE_ENV}`,
// });

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const SITE_URL = process.env.SITE_URL ? process.env.SITE_URL : 'https://learning.postman.com'
const DOMAIN_NAME = process.env.DOMAIN_NAME ? process.env.DOMAIN_NAME : 'learning.postman.com';
const PATH_PREFIX = '/labs'

module.exports = {
  siteMetadata: {
    title: 'Postman Labs Docs',
    description: '',
    author: 'Postman',
    domainName: DOMAIN_NAME,
    siteUrl: SITE_URL,
  },
  pathPrefix: PATH_PREFIX,
  trailingSlash: 'always',
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'UA-43979731-4',
        // eslint-disable-next-line max-len
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 1000,
        // Defers execution of google analytics script after page load
        defer: true,
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-M42M5N',
        includeInDevelopment: true,
      },
    },
    'gatsby-plugin-react-helmet',
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
          'gatsby-remark-check-links',
          'gatsby-remark-responsive-iframe',
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Postman Labs Docs',
        short_name: 'Postman Labs Docs',
        start_url: '/',
        background_color: '#FF6C37',
        theme_color: '#FF6C37',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png',
      },
    },
    'gatsby-plugin-meta-redirect',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: SITE_URL,
        sitemap:`${SITE_URL}/sitemap/sitemap-index.xml`,
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
        allowList: ['MUNCHKIN_ID'],
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
    {
      resolve: 'gatsby-plugin-newrelic',
      options: {
        config: {
          instrumentationType: 'pro',
          accountId: process.env.RELIC_ACCOUNT_ID,
          trustKey: process.env.RELIC_TRUST_KEY,
          agentID: process.env.RELIC_PRODUCTION_AGENT_ID,
          licenseKey: process.env.RELIC_LICENSE_KEY,
          applicationID: process.env.RELIC_PRODUCTION_APPLICATION_ID,
          beacon: 'bam.nr-data.net',
          errorBeacon: 'bam.nr-data.net'
        }
      }
    },
    // {
    //   resolve: 'gatsby-plugin-algolia',
    //   options: {
    //     appId: process.env.GATSBY_ALGOLIA_APP_ID,
    //     apiKey: process.env.ALGOLIA_ADMIN_KEY,
    //     queries,
    //     chunkSize: 10000, // default: 1000
    //     enablePartialUpdates: true, // only index new, changed, deleted records
    //     matchFields: ['excerpt', 'contextual_links', 'search_keyword', 'headings', 'fields', 'modified'],
    //     concurrentQueries: false,
    //   },
    // },
    
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        printRejected: true, // Print removed selectors and processed file names
        develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        ignore: [
          '/prism-tomorrow.css',
          '/doc.scss',
          '/print.css',
        ], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders

        purgeCSSOptions: {
          // https://purgecss.com/configuration.html#options
          safelist: [
            'collapsing',
            'gatsby-resp-iframe-wrapper',
            /^ais-/,
          ], // Don't remove this selector. Put regex last.
          // safelist: ['code', 'blockquote', ':not(pre)>code[class*=language-]'], // Don't remove this selector
        },
      },
    },
  ],
};
