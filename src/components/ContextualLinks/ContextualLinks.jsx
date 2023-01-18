import React from 'react';
import DynamicLink from '../Shared/DynamicLink';
import recentBlogPosts from '../../../bff-data/blog.json';
import styled from "styled-components";

const ContextualStyles = styled.div`

   .contextual-links__section {
    margin-top: 24px;
    margin-bottom: 8px;
    font-size: 16px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.grey_80};
  }
  .contextual-links__link {
    margin-bottom: 0;
    padding: 4px 0;
    display: block;
    
    a {
      color: ${(props) => props.theme.colors.grey_50};
      font-size: 14px;
      text-decoration: none;
      border-bottom: 1px solid ${(props) => props.theme.colors.grey_00};
      transition: ${(props) => props.theme.transitions.all};
    }
    
    &:hover {
      a {
        color: ${(props) => props.theme.colors.blue_60};
        border-bottom: 1px solid ${(props) => props.theme.colors.blue_60};
        transition: ${(props) => props.theme.transitions.all};
      }
    }
  }

  .contextual-links__subtitle {
    color: ${(props) => props.theme.colors.grey_60};
    font-size: 15px;
    font-weight: 600;
    margin-top: 1rem;
    margin-bottom: .7rem;
  }

  .contextual-links__alert {
    border: 4px dashed ${(props) => props.theme.colors.grey_10};
    border-radius: ${(props) => props.theme.borderRadius.small};
    padding: .75rem 1.25rem;
    color: #0C5460;
  }

  // tablet view
  @media (min-width: 767px) and (max-width: 990px) {
      padding-bottom: 80px;
  }


  // mobile view
  @media (max-width: 767px) {
    padding-bottom: 80px;
  }


`
const ContextualLinks = ({ links }) => (
  <ContextualStyles>
    {
      links.map((item) => {
        if (item.type === 'link') {
          return (
            <div className="contextual-links__link" key={item.name}>
              <DynamicLink url={item.url} name={item.name} />
            </div>
          );
        }
        if (item.type === 'subtitle') {
          return (
            <div className="contextual-links__subtitle" key={item.name}>
              {item.name}
            </div>
          );
        }
        if (item.type === 'dynamic_blog' && item.blog_tag) {
          if (Object.keys(recentBlogPosts).length === 0) {
            // If recentBlogPosts.length === 0, then either there is no .env.development,
            // it has a bad blog url, or the endpoint returned something bad
            return (
              <div className="contextual-links__alert" role="alert">
                <p>
                  You are currently in develop mode.
                  Dynamic blog posts will not be displayed locally.
                  <a style={{ fontSize: 'inherit' }} href="https://github.com/postmanlabs/postman-docs/blob/develop/CONTRIBUTING.md#to-use-the-dynamic-blog-posts-feature" target="_blank" rel="noopener">See Contributing doc for details</a>
                  .
                </p>
              </div>
            );
          }
          if (recentBlogPosts.index && recentBlogPosts.index[item.blog_tag]) {
            const dynamicLinks = recentBlogPosts.index[item.blog_tag].slice(0, 3).map((post) => (
              <div className="contextual-links__link" key={post.title}>
                <DynamicLink url={post.link.url} name={post.title} />
              </div>
            ));
            return (
              <div key={item.name}>
                <div className="contextual-links__subtitle" >
                  {item.name}
                </div>
                {dynamicLinks}
              </div>
            );
          }

          // If there are no related blog posts within blogs.json
          // (written in /bff-data/ at build time), we simply return nothing.

          // This will likely be the case when you are developing locally,
          // and do not have a .env.development file with the BFF endpoints.
          return null;
        }

        return (
          <div className="contextual-links__section" key={Math.random()}>{item.name}</div>
        );
      })
    }
  </ContextualStyles>
);

export default ContextualLinks;
