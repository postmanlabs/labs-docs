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

const { v4: uuidv4 } = require('uuid');

const DocPage = ({ data }) => {
  /* Returns last modified date */
  const date = data.markdownRemark.fields.lastModifiedDate;
  /* Returns single post */
  const post = data.markdownRemark;
  let contextualLinks;
  if (post.frontmatter.contextual_links) {
    contextualLinks = <ContextualLinks key={uuidv4()} links={post.frontmatter.contextual_links} />;
  }
  /* Using LeftNavItems.jsx, we filter through the nested arrays and return the active nav section the user is on */
  let location;
  if (window.location !== undefined) {
    location = window.location.pathname;
  }
  const activeDocLinks = [];
  /* Parent array */
  leftNavItems.forEach((leftNavItem) => {
    /* Loop over first submenu (subMenuItems1) */
    leftNavItem.subMenuItems1.map((subMenuItem1, index) => {
      /* Filter first submenu array */
      leftNavItem.subMenuItems1[index].url === location && activeDocLinks.push(leftNavItem.subMenuItems1)
      /* Filter second submenu array */
      subMenuItem1.subMenuItems2 && subMenuItem1.subMenuItems2.filter(subMenuItem2 => subMenuItem2.url === location && activeDocLinks.push(subMenuItem1.subMenuItems2))
    })
  })
  /* If the current location url equals the matching element index url, add the element to previous and next variables */
  let previous;
  let next;
  activeDocLinks.map(link => {
    for (let i = 0; i < link.length; i++) {
      if (link[i].url === location) {
        previous = link[i + -1]
        next = link[i+1] && link[i + 1].slug  ? undefined : link[i + 1]
      }
    }
  })

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
                <h1>{post.frontmatter.title}</h1>
                <span dangerouslySetInnerHTML={{ __html: post.html }} />
                <p>
                  <small className="font-italic">Last modified: {date}</small>
                </p>
                <div className="d-flex">
                {previous && (
                  <div>
                  <p className="font-weight-bold mb-0">Previous</p>
                  <a href={previous.url}>{previous.name}</a>
                    </div>
                )}
                  {next && (
                    <div className={previous ? 'ml-auto' : ''}>
                  <p className="font-weight-bold mb-0">Next</p>
                  <a href={next.url}>{next.name || next.slug}</a>
                  </div>
                  )}                                    
                </div>
              </main>
              <aside className="col-sm-12 col-md-12 col-lg-3 offset-lg-0 col-xl-3 offset-xl-1 right-column">
                <hr className="d-block d-lg-none" />
                <div className="edit-button">
                  <EditDoc className="btn btn__small btn__secondary-light edit-button-styles" />
                </div>
                {contextualLinks}
                <figure className="sticky posmanaut-dab">
                  <img src={pose} alt="pose" className="img-fluid" />
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
        lastModifiedDate
      }
    }
  }
`;
export default DocPage;
/* eslint-enaable */
