/* eslint-disable react/no-danger */
import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import ContextualLinks from '../components/ContextualLinks/ContextualLinks';
import EditDoc from '../components/Shared/EditDoc';
import { leftNavItems } from '../components/LeftNav/LeftNavItems';
import LeftNav from '../components/LeftNav/LeftNav';
import SEO from '../components/seo';
const { v4: uuidv4 } = require('uuid');

import './doc.scss';
import 'prismjs/themes/prism-tomorrow.css';
import { useModal } from '../components/modules/Modal';
import PreviousAndNextLinks from '../components/modules/PreviousAndNextLinks';
import BreadCrumbsLinks from '../components/modules/BreadCrumbsLinks';
import LoadQualtrics from '../components/modules/loadQualtrics';


const DocPage = ({ data }) => {
  const post = data.markdownRemark;
    // Last modified date - displaed at bottom of docs
    // Last modified time - meta data for SEO
  const {lastModifiedDate, lastModifiedTime } = data.markdownRemark.fields;
  // Breadcrumbs (top of page) & Previous and Next Links (bottom of page) 
  const { parentLink, subParentLink, previous, next } = data;

  let excerptLength = data.markdownRemark.excerpt.length; 
  let excerptCount = process.env.GATSBY_EXCERPT_COUNT;
  let overIndexLimit = excerptLength > 6700 ? (excerptLength - 6700) : 0;

  /* Right side links */
const DisplayContextualLinks = (props) => {
  const { data } = props;
  /* Single post data */
  const doc = data.markdownRemark;
  return (
    doc.frontmatter.contextual_links && <ContextualLinks key={uuidv4()} links={doc.frontmatter.contextual_links} />
  )
}

  const CreateDoc = (props) => {
    const [useHTML, setHTML] = useState({ ...props })
  
    useEffect(() => {
      const { data } = props;
      const { html } = data;
      // parses a string containing HTML & returns an HTMLDocument
      const parser = new DOMParser();
      const parsedHtml = parser.parseFromString(html, 'text/html');
  
      // allows images to display as modal when clicked
      useModal(parsedHtml);
      setHTML(parsedHtml.body.innerHTML)
    }, []);
  
    return (
      <span dangerouslySetInnerHTML={{ __html: useHTML }} />
    );
  }

  

  return (
    <Layout>
      <SEO title={post.frontmatter.title} slug={post.fields.slug} lastModifiedTime={lastModifiedTime} />
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
                <CreateDoc data={data.markdownRemark} />
                {
                  excerptCount ? 
                    <div className='events__alert mb-3'>
                      <p>
                        <small>Development Notification</small>
                      <br />
                        <small>{`Character count: ${excerptLength} and therefore ${overIndexLimit} characters too long to be indexed by Algolia`}</small>
                      </p>
                    </div> 
                  : null
                }
                <p>
                  <small className="font-italic">Last modified: {lastModifiedDate}</small>
                </p>
                {/* Qualtrics */}
                <LoadQualtrics />
                <PreviousAndNextLinks data={{ previous, next }} />
              </main>
              <aside className="col-sm-12 col-md-12 col-lg-3 offset-lg-0 col-xl-3 offset-xl-1 right-column">
                <hr className="d-block d-lg-none" />
                <div className="edit-button">
                  <EditDoc className="btn btn__small btn__secondary-light edit-button-styles" />
                </div>
                <DisplayContextualLinks data={data} />
                <figure className="sticky posmanaut-dab">
                  <img src="https://voyager.postman.com/illustration/postmanaut-posing-dancing-postman-illustration.svg" alt="Posmanaut dancing. Illustration." className="img-fluid" />
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
      excerpt(pruneLength: 20000)
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
        lastModifiedTime
      }
    }
  }
`;
export default DocPage;
/* eslint-enable */
