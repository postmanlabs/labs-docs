import React from 'react';
import './BreadCrumbsLinks.scss';
import { Link } from 'gatsby';
import { leftNavItems } from '../LeftNav/LeftNavItems';

// Example: Home / Getting Started /
// a list of links separated by / to aid in navigation
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
      // Below is because "/labs/" gets prefixed at build for deployment, in the LeftNavItems array.
      // In other words, our codebase below isn't aware of "/labs/" being in the location bar of the browser
      // The "/labs/" prefixing at build breaks the comparisons below, so we remove it from the strings we are comparing against LeftNavItems.
      location = location.replace("/labs/", "/");
      // Notice we are not setting location to any href value, we are only using it for the sake of comparing
    }
    /* Loop over LeftNavItems.jsx */
    for (let index = 0; index < leftNavItems.length; index++) {
      /* First Menu: If matching URL, use the parent data for breadcrumb */
      if(leftNavItems.subMenuItem1){
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
  }
  render() {
    const { parentLink, subParentLink } = this.state;
    
    return (
      <nav className="breadcrumb-wrapper mb-3" aria-label="breadcrumbs">
        <ol className="lc-breadcrumbs">
          <li>
            <Link to="/" className="small breadcrumb-home-link" title="Postman Labs Docs">Home</Link>
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
      </nav>
    )
  }
}

export default BreadCrumbsLinks;