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

class GenerateDoc extends React.Component {
  constructor(props) {
    super(props);
    const { data } = this.props;
    this.state = {
      data
    };
  }

  componentDidMount() {

    let { data } = this.state;
    const { html } = data.markdownRemark;
    let parser = new DOMParser();
    let htmlDocument = parser.parseFromString(html, 'text/html');
    let links = htmlDocument.querySelectorAll('img');
    const create_id = `img-${Math.random().toString(36).slice(2)}`
    for (let i = 0; i < links.length; i++) {
      if( links[i].src === links[i].parentNode.href){
        links[i].parentNode.href = "javascript:void(0)";
        links[i].outerHTML = (
          `<>
          <a data-target=#${create_id} class="modal-image" data-toggle="modal">
            <img src=${links[i].src}  />
          </a>
          <span id=${create_id} class="modal fade modal-backdrop" tabIndex="-1" role="dialog" aria-labelledby={#${create_id}} aria-hidden="true">
            <span class="container modal-dialog modal-dialog-centered" role="document">
              <span class="modal-row row">
                <span class="col-8">
                  <span class="modal-close-button">
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span
                        class='close-icon'
                        aria-hidden="true"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                        >
                          <title>e-remove</title>
                          <g
                            strokeWidth="1"
                            fill="#212121"
                            stroke="#212121"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="13.5" y1="2.5" x2="2.5" y2="13.5" />
                            <line x1="2.5" y1="2.5" x2="13.5" y2="13.5" />
                          </g>
                        </svg>
                      </span>
                    </button>
                  </span>
                  <img src=${links[i].src}  />
                </span>
              </span>
            </span>
          </span>
        </>`
        )
      } 
    }
    

    this.setState({
      htmlDocument: htmlDocument.body.innerHTML
    });

  }

  render() {
    const { htmlDocument } = this.state;
    return (
      <span dangerouslySetInnerHTML={{ __html: htmlDocument }} />
    );
  }
}




const DocPage = ({ data }) => {
  const post = data.markdownRemark;
  let contextualLinks;
  if (post.frontmatter.contextual_links) {
    contextualLinks = <ContextualLinks key={uuidv4()} links={post.frontmatter.contextual_links} />;
  }

  return (
    <Layout>
      <SEO title={post.frontmatter.title} slug={post.fields.slug} />
      <div className="container-fluid">
        <div className="row row-eq-height">
          <nav className="col-sm-12 col-md-4 col-lg-3 left-nav-re">
            <LeftNav LeftNavItems={leftNavItems} />
          </nav>
          <div className="col">
            <div className="row row-eq-height">
              <main className="col-sm-12 col-md-12 col-lg-9 offset-lg-0 col-xl-7 doc-page ml-xl-5">
                <h1>{post.frontmatter.title}</h1>
                <GenerateDoc data={data}/>
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
      }
    }
  }
`;
export default DocPage;
/* eslint-enaable */
