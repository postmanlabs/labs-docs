const path = require('path');
const fs = require('fs');
const { createFilePath } = require('gatsby-source-filesystem');
const glob = require('glob');
const uuidv4 = require('uuid/v4');
// const axios = require('axios');
const frontmatter = require('@github-docs/frontmatter');
const redirects = require('./redirects');
const HeaderJson = require('./src/components/Header/Header.data.json');
const FooterJson = require('./src/components/Footer/Footer.data.json');

const ignorePaths = [];

const { google } = require('googleapis');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' });
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createRedirect, createPage } = actions;

  redirects.forEach(({ from, to }) => {
    createRedirect({
      fromPath: from,
      isPermanent: true,
      redirectInBrowser: true,
      toPath: to,
    });
  });

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    if (node.fields.slug.includes('-')) {
      const underscoreSlug = node.fields.slug.replace(/-/g, '_');

      createRedirect({
        fromPath: underscoreSlug,
        isPermanent: true,
        redirectInBrowser: true,
        toPath: node.fields.slug,
      });
    }
    createPage({
      path: node.fields.slug,
      component: path.resolve('./src/templates/doc.jsx'),
      context: {
        slug: node.fields.slug,
      },
    });
  });
};


/* Create Header and Footer
/************************************************************************ */
exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const prepareNode = (obj, name) => {
    const data = {
      key: uuidv4(),
      value: JSON.stringify(obj),
    };
    const node = JSON.stringify(data);
    const nodeMeta = {
      id: createNodeId(`my-data-${data.key}`),
      parent: null,
      children: [],
      internal: {
        type: name,
        mediaType: 'text/json',
        content: node,
        contentDigest: createContentDigest(data),
      },
    };

    const output = { ...data, ...nodeMeta };
    return output;
  };

  const { createNode } = actions;

  const getDirectories = (src) => glob.sync(`${src}/**/*`);
  const paths = getDirectories('./src/pages/docs')
    .filter((val) => val.slice(-3) === '.md')
    .map((val) => {
      const { data } = frontmatter(fs.readFileSync(val));
      const order = data.order || 200;
      return [val, order];
    })
    .sort((a, b) => Number(a[1]) - Number(b[1]))
    .map((val) => {
      let newVal = '';
      newVal = val[0].replace(/\.\/src\/pages/g, '');
      newVal = newVal.substring(0, newVal.length - 3);
      newVal = newVal.slice(-5) === 'index' ? newVal.substring(0, newVal.length - 5) : newVal;
      return `${newVal}/`;
    })
    .filter((val) => !ignorePaths.includes(val));

  const output = {};

  paths.forEach((val) => {
    let split = val.split('/');
    split = split.filter((url) => url !== '');

    let current = output;
    split.forEach((part) => {
      current[part] = current[part] || {};
      current = current[part];
    });
    current.url = `/${split.join('/')}/`;
  });

  createNode(prepareNode(output.docs, 'leftNavLinks'));
  createNode(prepareNode(HeaderJson, 'headerLinks'));
  createNode(prepareNode(FooterJson, 'FooterLinks'));
}

exports.onPostBuild = async () => {

  // Fetch Google Analytics Page views from Learning Center View to feed to Algolia
  class MetricsFetcher {
    constructor({ /* GA_PARAMETERS */ }) {
      // Setup the necessary auth scopes
      this.auth = new google.auth.GoogleAuth({ scopes: ['https://www.googleapis.com/auth/analytics.readonly'] });
      // ... variables initialization
      console.log('AUTH', this.auth)
    }

    async next() {
      console.log('INSIDE NEXT');
      const response = await analytics.reports.batchGet({
        auth: this.auth,
        requestBody: {
          // batchGet options
          // https://developers.google.com/analytics/devguides/reporting/core/v4/rest/v4/reports/batchGet
          // ...
          "reportRequests": [
            {
              "viewId": "193423593",

              "dateRanges": {
                  "startDate": "v"
                },
              "dimensions": {
                "ga:hostname": '',
                "ga:pagePath": ''
                },
                "metrics": {
                  "ga:Pageviews": '',
                },
                "orderBys": "uniquePageViews",
                // "pageSize and pageToken for pagination"
            }
          ]
        },
      });

    if (!response.data.reports || response.data.reports.length <= 0) {
      return { rows: [], hasMore: false };
    }
  
    const { rows } = response.data.reports[0].data;
    this.pageToken = response.data.reports[0].nextPageToken;
    if (this.remaining !== null && rows) {
      this.remaining -= rows.length;
    }

    const rowsClean = !rows ? [] : rows.map(row => {
        return {
          hostname: row.dimensions[0],
          pagePath: row.dimensions[1],
          // append one key-value per metric, with integer value
          ...this.metrics.reduce(
            (keyVals, metric, idx) => ({
              ...keyVals,
              [metric]: parseInt(row.metrics[0].values[idx], 10),
            }),
            {}
          ),
        };
      });


    const hasMore =
    (this.remaining === null || this.remaining > 0) &&
    this.pageToken !== undefined &&
    this.pageToken !== null;

    return { rows: rowsClean, hasMore };
  } // end of class Metricsfetcher

    async fetchAll() {
      console.log('INSIDE FETCHALL');
      let counter = 0;
      let batch;
      const res = {};
      do {
        batch = await this.next();
        batch.rows.forEach(row => {
          ++counter;
          res[getPageUrl(row.hostname, row.pagePath)] = row;
        });
      } while (batch.hasMore);
      return res;
    }
  }

  const recordsToUpdate = [];
  await index.browseObjects({
    query: '', // Empty query will match all records
    attributesToRetrieve: [URL_ATTRIBUTE],
    batch: batch => {
      batch.forEach(record => {
        if (allGAData[record[URL_ATTRIBUTE]]) {
          // Create a partial record with a new `pageviews` attribute
          recordsToUpdate.push({
            objectID: record.objectID,
            pageviews:
              allGAData[record[URL_ATTRIBUTE]][METRICS.uniquePageViews],
          });
        }
      });
    },
  });

  console.log(`Updating ${recordsToUpdate.length} records...`);
  await index.partialUpdateObjects(recordsToUpdate, {
    createIfNotExists: false,
  });
};
