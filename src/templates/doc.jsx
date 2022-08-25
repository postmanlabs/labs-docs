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
import {ButtonStyles} from '../../styles/ButtonStyles'
import styled from 'styled-components';
import 'prismjs/themes/prism-tomorrow.css';
import { useModal } from '../components/modules/Modal';
import PreviousAndNextLinks from '../components/modules/PreviousAndNextLinks';
import BreadCrumbsLinks from '../components/modules/BreadCrumbsLinks';
import LoadQualtrics from '../components/modules/loadQualtrics';

const DocWrapper = styled.div`
  /* Used for Deeplinking */   
h2, h3, h4 {
  scroll-margin-top: 2em;
}
a{
  color: ${(props) => props.theme.colors.blue_60};
  :hover {
    border-bottom: 1px solid ${(props) => props.theme.colors.blue_60};
    text-decoration: none;
  }
    &.anchor.before {
      top: .2em;
      padding-right: 8px;
      
      & svg {
        width: auto;
        height: .9em;
        display: block;
      }
    }

    &.anchor:hover {
        border: none !important;
        display: block;
    }
}
.doc-page {
  padding-left: 40px !important;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-right: 40px;

  @media (min-width:992px) and (max-width: 1199px) {
    padding-right: 32px;
  }

  @media (min-width:992px) {
    padding-top: 64px;
  }

  img {
    max-width: 100%;
    height: auto;
    image-rendering: -webkit-optimize-contrast;
  }
  img[src$='#icon'] {
    margin-bottom: 0;
  }

  ul {
    margin-left: 16px;
    margin-bottom: 24px;

    li::marker {
      padding-inline-start: 39px;
      color: ${(props) => props.theme.colors.orange_30};
    }

    &::after,
      &::before {
      display: inline-block;
      direction: rtl !important;
      margin-left: -28px !important;
      padding-right: 16px !important;
      width: 28px !important;
      } 
    
    li {
      margin-bottom: 8px;
      line-height: 1.625;
      padding: 0 0 0 16px;

      li::before {
        direction: rtl !important;
        margin-left: -28px !important;
        padding-right: 16px !important;
        width: 28px !important;
      }
    }
    li::before {
      direction: rtl !important;
      margin-left: -28px !important;
      padding-right: 16px !important;
      width: 28px !important;
    }

    list-style-type: '✦';

    li::marker {
      color: ${(props) => props.theme.colors.orange_30};
  }

  ol {
    li {
      padding-left: 10px;
      margin-bottom: 8px;
    }
    li::marker {
      color: $${(props) => props.theme.colors.grey_70};
    }
  } 

  @media (max-width: 765px) {
    padding-left: 30px !important;
    padding-right: 30px !important;
  }
} 

/* Blockquotes */
blockquote {
  box-sizing: border-box;
  width: 100%;
  border: solid ${(props) => props.theme.colors.grey_20} 1px;
  border-radius: ${(props) => props.theme.borderRadius.medium};
  padding: 16px 24px;
  background-color: ${(props) => props.theme.colors.grey_05};
  margin-left: 0;
}
blockquote code.language-text {
  background-color: ${(props) => props.theme.colors.grey_00};
}



th:first-child,
td:first-child {
 padding-left:10px;
}

thead:first-child:hover tr{
  background-color: ${(props) => props.theme.colors.grey_00};
}


/**
* add syntax highlighting
*/
.language-text {
  background-color: ${(props) => props.theme.colors.grey_10};
  color: ${(props) => props.theme.colors.grey_90};
}
:not(pre) > code[class*="language-"] {
  background-color: ${(props) => props.theme.colors.grey_10};
  color: ${(props) => props.theme.colors.grey_90};
  padding: 1px 4px 2px !important;
  font-size: 15px !important;
  box-shadow: inset 0 0 0 1px ${(props) => props.theme.colors.grey_30};
  border-radius: ${(props) => props.theme.borderRadius.medium};
}

code[class*="language-"] {
  word-break: break-word !important;
  word-wrap: break-word !important;
  overflow-wrap: break-word !important;
  
}

.gatsby-highlight {
  background-color: ${(props) => props.theme.colors.grey_80};
  border-radius: ${(props) => props.theme.borderRadius.small};
  margin: 0.5em 0;
  padding: 1em;
  overflow: auto;
  white-space: pre-wrap;
  word-break: break-word;

  code[class*="language-"],
  .token.comment, 
  .token.string,
  .token.number,
  .token.boolean,
  .token.class-name,
  .token.constant,
  .token.parameter,
  .token.keyword,
  .token.operator,
  .token.function,
  .token.property,
  .token.attr-name,
  .token.attr-value,
  .token.tag,
  .token.punctuation {
    font-family: 'IBM Plex Mono';
    white-space: pre-wrap;
    word-break: break-word;
    line-height: 1.666rem;
  }

  /**
  * Remove the default PrismJS theme background-color, border-radius, margin,
  * padding and overflow.
  * 1. Make the element just wide enough to fit its content.
  * 2. Always fill the visible space in .gatsby-highlight.
  * 3. Adjust the position of the line numbers
  */
  pre[class*="language-"] {
    font-family: 'IBM Plex Mono';
    background-color: transparent;
    margin: 0;
    padding: 0;
    overflow: initial;
    float: left;
    min-width: calc(100% - 3em);
    white-space: pre-wrap;
    word-break: break-word;
  }
}

.previous-next-links {
  display: flex;
  justify-content: space-between;
}
}
.left-nav-re {
  padding: 32px 0px 8px 0px;
  background-color: ${(props) => props.theme.colors.grey_05};
  font-size: 14px;

  & ul {
    margin-left: 0;
    & ul {
      margin-left: 32px;
      margin-top: 8px;
      & ul {
        margin-left: 32px;
        margin-top: 12px;
      }
    }
  }
  @media screen and (min-width: 768px) {
    max-width: 350px;
  }

  & li {
    &:hover {
      cursor: pointer;
    }
  }

}
`

const RightColumnWrapper = styled.aside`
  margin-top: 0px;
  padding-left: 40px !important;

  @media (min-width:992px) {
    margin-top: 119px;
    padding-right: 24px;
    padding-left: 0px !important;
  }

.sticky {
  margin-top: 64px;
  position: -webkit-sticky;
  position: sticky !important;
  top: 160px;
}

.posmanaut-dab {
  max-width: 250px;
}
`

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
      <DocWrapper className="container-fluid">
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
              <RightColumnWrapper className="col-sm-12 col-md-12 col-lg-3 offset-lg-0 col-xl-3 offset-xl-1 right-column">
                <hr className="d-block d-lg-none" />
                <ButtonStyles >
                  <EditDoc  className="btn edit-button-styles primary-hollow "/>
                </ButtonStyles>
                <DisplayContextualLinks data={data} />
                <figure className="sticky posmanaut-dab">
                  <img src="https://voyager.postman.com/illustration/postmanaut-posing-dancing-postman-illustration.svg" alt="Posmanaut dancing. Illustration." className="img-fluid" />
                </figure>
              </RightColumnWrapper>
            </div>
          </div>
        </div>
      </DocWrapper>
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
