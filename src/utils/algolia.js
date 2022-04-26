// The queries allow you to grab the data you want Algolia to index directly from
// Gatsby’s GraphQL layer by exporting from src/utils/algolia.js an array of objects,
// each containing a required GraphQL query and an optional index name,
// transformer function and settings object.

//  the query property is a GraphQL query string.
// The transformer is a function that takes the data retrieved by the query and
// transforms it into the array of objects that will become your Algolia index records.

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const algoliaIndex = (process.env.NODE_ENV === 'development') ? 'dev_docs' : 'docs';
 
const pageQuery = `{
  docs: allMarkdownRemark(
    filter: {
      fileAbsolutePath: { regex: "/docs/" },
    }
  ) {
    edges {
      node {
        headings(depth: h3) {
          value
        }
        id
        frontmatter {
          title
          search_keyword
          contextual_links {
            type
            name
            url
          }
        }
        fields {
          slug
        }
        excerpt(
          pruneLength: 6700
        )
      }
    }
  }
}`;


function pageToAlgoliaRecord({ node: { id, frontmatter, ...rest } }) {
  return {
    objectID: id,
    ...frontmatter,
    ...rest,
  };
}

const settings = { attributesToSnippet: ['excerpt:20'] };

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.docs.edges.map(pageToAlgoliaRecord),
    indexName: algoliaIndex,
    settings,
  },
];

module.exports = queries;
