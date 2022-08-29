import React from 'react';

import { leftNavItems } from '../LeftNav/LeftNavItems';
import styled from 'styled-components';
import {theme} from '../../../styles/theme';
// Example: Home / Getting Started /
// a list of links separated by / to aid in navigation
const BreadCrumbStyles = styled.nav`
    & a:link,
    a:visited,
    span {
        color: ${theme.colors.grey_50};
        transition: all 0.2s ease-in-out;
        border-bottom: 1px transparent;
    }
    & a:hover,
    a:active {
        transition: all 0.2s ease-in-out;
        text-decoration: none;
        color: ${theme.colors.blue_60};
        border-bottom: 1px solid;
    }

ol.lc-breadcrumbs {
    margin: 0;
    li {
        list-style-type: none;
        display: inline;
        padding-left: 0;
    }
}
`
class BreadCrumbsLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parentLink: {},
      subParentLink: {},

    }
  }
  componentDidMount() {
    let location;
    if (typeof window !== 'undefined') {
      location = window.location.pathname;
    }
    /* Loop over LeftNavItems.jsx */
    for (let index = 0; index < leftNavItems.length; index++) {
      /* First Menu: If matching URL, use the parent data for breadcrumb */
      leftNavItems[index].subMenuItems1.map((subMenuItem1, index2) => {
        if (subMenuItem1.url === location) {
          this.setState({
            parentLink: leftNavItems[index],
          })
        }
        /* Second Menu: If matching URL, use the parent AND subparent data for breadcrumb */
        subMenuItem1.subMenuItems2 && subMenuItem1.subMenuItems2.map(subMenuItem2 => {
          if (subMenuItem2.url === location) {
            this.setState({
              parentLink: leftNavItems[index],
              subParentLink: leftNavItems[index].subMenuItems1[index2],
            })
          }
        })
      })
    }
  }
  render() {
    const { parentLink, subParentLink } = this.state;
    return (
      <BreadCrumbStyles className=" mb-3" aria-label="breadcrumbs">
        <ol className="lc-breadcrumbs">
          <li>
            <a href="/" className="small breadcrumb-home-link" title="Learning Center">Home</a>
            <span className="small" aria-hidden="true"> / </span>
          </li>
          {JSON.stringify(subParentLink) !== '{}' ? (
            <>
            <li>
              <a href={parentLink.url} className="small breadcrumb-parent-link">{parentLink.name}</a>
              <span className="small" aria-hidden="true"> / </span>
            </li>
            <li>
              <a href={subParentLink.slug} className="small breadcrumb-subparent-link">{subParentLink.name}</a>
            </li>
            </>
          ) : (
            <>
            <li>
              <a href={parentLink.url} className="small breadcrumb-parent-link">{parentLink.name}</a>
            </li>
            </>
          )}
        </ol>
      </BreadCrumbStyles>
    )
  }
}

export default BreadCrumbsLinks;
