/* eslint-disable react/no-danger */

import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import ContextualLinks from '../components/ContextualLinks/ContextualLinks';
import EditDoc from '../components/Shared/EditDoc';
import LeftNav from '../components/LeftNav/LeftNav';
import SEO from '../components/seo';
import './doc.scss';
import 'prismjs/themes/prism-tomorrow.css';
import pose from '../assets/pose-learning-center.svg';

import $ from 'jquery';

function comparePagesAndScrollToAnchor(eventObject) {
  eventObject.preventDefault();
  const navOffset = parseInt(-56, 10);
  console.log(eventObject)
  const currentPage = `${location.origin}${location.pathname}`;
  const desiredPage = `${eventObject.currentTarget.href.split('#')[0]}`
  // Compare our current page to links href
  if (currentPage === desiredPage) {
    const targetHash = eventObject.currentTarget.hash;
    // If the desiredPage the same page, scroll to the hash ID on the page
    $.scrollTo($(targetHash), {
      offset: {top: navOffset}
    })
    // Add hash to locationh bar without triggering refresh
    history.pushState(null, null, targetHash)
  } else {
    window.location = eventObject.currentTarget.href;
  }
}

export default ({ data }) => {
  const post = data.markdownRemark;
  let contextualLinks;
  if (post.frontmatter.contextual_links) {
    contextualLinks = <ContextualLinks links={post.frontmatter.contextual_links} />;
  }

  useEffect(() => {
    // On load, check URL.  If it includes a hash, go to it and offset window by navOffset
    $('#content-container a').on('click', (e) => {
      comparePagesAndScrollToAnchor(e);
    });  
  });
  
  return (
    <Layout>
      <SEO title={post.frontmatter.title} slug={post.fields.slug} />
      <div className="container-fluid">
        <div className="row row-eq-height">
          <nav className="col-sm-12 col-md-4 col-lg-3 left-nav">
            <LeftNav />
          </nav>
          <div className="col">
            <div className="row row-eq-height">
              <main className="col-sm-12 col-md-12 col-lg-9 offset-lg-0 col-xl-7 doc-page ml-xl-5">
                <h1>{post.frontmatter.title}</h1>
                <span id="content-container" dangerouslySetInnerHTML={{ __html: post.html }} />
              </main>
              <aside className="col-sm-12 col-md-12 col-lg-3 offset-lg-0 col-xl-3 offset-xl-1 right-column">
                <hr className="d-block d-lg-none"/>
                <div className="edit-button">
                  <EditDoc className="btn btn__small btn__secondary-light edit-button-styles" />
                </div>
                {contextualLinks}
                <figure className="sticky w-75">
                  <img src={pose} alt="pose" className="img-fluid"/>
                </figure>
              </aside>
            </div>
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
          blog_tag
        }
      }
      fields {
        slug
      }
    }
  }
`;
/* eslint-enaable */
