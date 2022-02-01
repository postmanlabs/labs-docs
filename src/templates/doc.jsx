/* eslint-disable react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import ContextualLinks from '../components/ContextualLinks/ContextualLinks';
import EditDoc from '../components/Shared/EditDoc';
import { leftNavItems } from '../components/LeftNav/LeftNavItems';
import LeftNav from '../components/LeftNav/LeftNav';
import SEO from '../components/seo';
import './doc.scss';
import 'prismjs/themes/prism-tomorrow.css';
import pose from '../assets/pose-learning-center.svg';
import PreviousAndNextLinks from '../components/modules/PreviousAndNextLinks';
import BreadCrumbsLinks from '../components/modules/BreadCrumbsLinks';

const { v4: uuidv4 } = require('uuid');

/* Right Side Links */
const DisplayContextualLinks = (props) => {
  const { data } = props;
  /* Single post data */
  const doc = data.markdownRemark;
  return (
    doc.frontmatter.contextual_links && <ContextualLinks key={uuidv4()} links={doc.frontmatter.contextual_links} />
  )
}
const DocPage = ({ data }) => {
  const post = data.markdownRemark;
  /* Last modified date (Bottom of Page) */
  const date = data.markdownRemark.fields.lastModifiedDate;
  /* Breadcrumbs (Top of page) && Previous and Next Links (Bottom of page) */
  const { parentLink, subParentLink, previous, next } = data;
  return (
    <Layout>
      <SEO title={post.frontmatter.title} slug={post.fields.slug} />
      <div className="container-fluid">
        <div className="row row-eq-height">
          <nav className="col-sm-12 col-md-4 col-lg-3 left-nav-re">
            <LeftNav leftNavItems={leftNavItems} />
          </nav>
          <div className="col">
            <div className="row row-eq-height">
              <main className="col-sm-12 col-md-12 col-lg-9 offset-lg-0 col-xl-7 doc-page ml-xl-5">
                <BreadCrumbsLinks data={{ parentLink, subParentLink }} />
                <h1>{post.frontmatter.title}</h1>
                <span dangerouslySetInnerHTML={{ __html: post.html }} />
                <p>
                  <small className="font-italic">Last modified: {date}</small>
                </p>
                <PreviousAndNextLinks data={{ previous, next }} />
              </main>
              <aside className="col-sm-12 col-md-12 col-lg-3 offset-lg-0 col-xl-3 offset-xl-1 right-column">
                <hr className="d-block d-lg-none" />
                <div className="edit-button">
                  <EditDoc className="btn btn__small btn__secondary-light edit-button-styles" />
                </div>
                <DisplayContextualLinks data={data} />
                <figure className="sticky posmanaut-dab">
                  <img src={pose} alt="pose" className="img-fluid" />
                </figure>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

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
          blog_tag
        }
      }
      fields {
        slug
        lastModifiedDate
      }
    }
  }
`;
export default DocPage;
/* eslint-enable */
