/* eslint-disable
  jsx-a11y/click-events-have-key-events,
  jsx-a11y/no-noninteractive-element-interactions */
import { useStaticQuery, graphql, Link } from 'gatsby';
import React, { useState, useEffect } from 'react';
import './LeftNav.scss';

// const { useState, useEffect } = React;


// const { v4: uuidv4 } = require('uuid');
// const replacements = require('./replacements.json');

// let slugs;

const Parent = (keys) => {
  return (
    <li>
      {keys}
    </li>
  );
};

const ListItem = ({ leftNavLinks }) => {

  const parsedData = JSON.parse(leftNavLinks);
  const keys = Object.keys(parsedData).map((val) => val);


  return (
    <ul>
      <Parent keys={keys} />
      {console.log('sanity check', keys)}
    </ul>
  );
};


const LeftNav = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: {fields: id, order: ASC}) {
        nodes {
          fields {
            slug 
          }
          frontmatter {
            title
          }
          id
        }
      },
      leftNavLinks {
        value
      }
    }`);
  // slugs = data.allMarkdownRemark.nodes;

  return (
    <div className="leftNav">
      {console.log('RETURN', data)}
      <ListItem leftNavLinks={data.leftNavLinks.value} isRoot />
    </div>
  );
};

export default LeftNav;
/* eslint-enable */
