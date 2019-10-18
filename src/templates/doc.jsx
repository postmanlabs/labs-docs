import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import ContextualLinks from '../components/ContextualLinks/ContextualLinks';
import LeftNav from '../components/LeftNav/LeftNav';
import SEO from '../components/seo';

export default ({ data }) => {
  const post = data.markdownRemark;
  let contextualLinks;
  if (post.frontmatter.contextual_links) {
    contextualLinks = <ContextualLinks links={post.frontmatter.contextual_links} />;
  }

  return (
    <Layout>
      <SEO title={`${post.frontmatter.title} | Postman`} slug={post.fields.slug} />
      <div className="container-fluid">
        <div className="row row-eq-height">
          <div className="col-sm-3 left-nav">
            <LeftNav />
          </div>
          <div className="col-sm-7 doc-page">
            <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
          <div className="col-sm-2">
            {contextualLinks}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        contextual_links {
          type
          name
          url
        }
      }
      fields {
        slug
      }
    }
  }
`;
