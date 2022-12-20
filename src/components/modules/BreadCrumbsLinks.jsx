import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
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
class BreadCrumbsLinksComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parentLink: {},
      subParentLink: {},
      pathPrefix: props.pathPrefix
    }
  }
  componentDidMount() {
    const { pathPrefix } = this.state;
    let location;
    if (typeof window !== 'undefined') {
      location = window.location.pathname;
      // The logic below is to make leftNavItems work
      // Because the pathPrefix ( ex "/template/") gets prefixed AT BUILD TIME, in the LeftNavItems array.
      // So the array of objects in leftNavItems, DO NOT HAVE THE PATH PREFIX.
      // Since they do not, when the app is in production, the breadcrumbs break (ex. /template/route/ is not equal to /route/)
      // In other words, our codebase below isn't aware of pathPrefix (ex "/template/") being in the location bar of the browser
      // The prefixPath at build breaks the comparisons further down in this componentDidMount block., 
      //  so we .replace it from the strings we are comparing against LeftNavItems.
      location = location.replace(`${pathPrefix}/`, "/");
      // Notice we are not setting location to any href value, we are only using it for the sake of comparing
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
            <Link to="/" className="small breadcrumb-home-link" title="Learning Center">Home</Link>
            <span className="small" aria-hidden="true"> / </span>
          </li>
          {JSON.stringify(subParentLink) !== '{}' ? (
            <>
            <li>
              <Link to={parentLink.url} className="small breadcrumb-parent-link">{parentLink.name}</Link>
              <span className="small" aria-hidden="true"> / </span>
            </li>
            <li>
              <Link to={subParentLink.slug} className="small breadcrumb-subparent-link">{subParentLink.name}</Link>
            </li>
            </>
          ) : (
            <>
            <li>
              <Link to={parentLink.url} className="small breadcrumb-parent-link">{parentLink.name}</Link>
            </li>
            </>
          )}
        </ol>
      </BreadCrumbStyles>
    )
  }
}

// To use a static query for the pathPreix, we need to wrap the class based component in an arrow function component
function BreadCrumbsLinks() {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        pathPrefix
      }
    }
  `)

  return (
    <BreadCrumbsLinksComponent pathPrefix={data.site.pathPrefix} />
  )
}

export default BreadCrumbsLinks;
