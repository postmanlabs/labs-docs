import { Link } from 'gatsby';
import React from 'react';

const EditDoc = ({ className, getProps}) => {
  const classes = className ? ` ${className}` : '';
  let pathRoute = getProps.slice(0, -1);
  return (
    <a className={classes} href={`https://github.com/postmanlabs/postman-docs/blob/develop/src/pages${pathRoute}.md`} target="_blank" rel="noopener noreferrer" >Edit this document</a>
  );
};

export default EditDoc;
