import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import ContextualLinks from '../components/ContextualLinks/ContextualLinks';
import LeftNav from '../components/LeftNav/LeftNav';
import SEO from '../components/seo';
import './doc.scss';

export default ({ data }) => {
  const post = data.markdownRemark;
  let contextualLinks;
  if (post.frontmatter.contextual_links) {
    contextualLinks = <ContextualLinks links={post.frontmatter.contextual_links} />;
  }

  return (
    <Layout>
      <SEO title={post.frontmatter.title} slug={post.fields.slug} />
      <div className="container-fluid">
        <div className="row row-eq-height">
          <div className="col-sm-12 col-md-4 col-lg-3 left-nav left-nav">
            <LeftNav />
          </div>
          <div className="col-sm-10 col-md-6 doc-page">
            <h1>{post.frontmatter.title}</h1>
            <span dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
          <div className="col-sm-3">
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
