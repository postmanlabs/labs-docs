import React from 'react';
import { leftNavItems } from '../LeftNav/LeftNavItems';

// Example: Home > Getting Started >
// a list of links separated by > to aid in navigation
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
      <div className="mb-5">
        <a href="/">Home</a>
        <span> &#62; </span>
        {JSON.stringify(subParentLink) !== '{}' ? (
          <>
          <a href={parentLink.url}>{parentLink.name}</a>
          <span> &#62; </span>
            <a href={subParentLink.slug}>{subParentLink.name}</a>
          </>
        ) : (
            <>
          <a href={parentLink.url}>{parentLink.name}</a>
          <span> &#62; </span>
        </>
        )}
      </div>
    )
  }
}

export default BreadCrumbsLinks;
