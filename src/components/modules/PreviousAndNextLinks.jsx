import React from 'react';
import { leftNavItems } from '../LeftNav/LeftNavItems';
import { handleKeyboard, handleSwipe } from './handlePagination'
class PreviousAndNextLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prevLink: {},
      nextLink: {}
    }
  }
  componentDidMount() {
    let location;
    if (typeof window !== 'undefined') {
      location = window.location.pathname;
    }
    // 1. filter data 
    // Reference file: LeftNavItems.jsx
    const parentLinks = [];
      // for every nav item, map over
    leftNavItems.forEach((leftNavItem) => {
      // parent menu - if url matches window.location, push the item into array
      leftNavItem.subMenuItems1.map((subMenuItem1, index) => {
        leftNavItem.subMenuItems1[index].url === location && parentLinks.push(leftNavItem.subMenuItems1)
        // subparent menu - same logic applies above, but at a deeper level in the object
        subMenuItem1.subMenuItems2 && subMenuItem1.subMenuItems2.filter(subMenuItem2 =>
          subMenuItem2.url === location && parentLinks
            // pushes three items [last item in previous section, current items in active section, first item in next section]
            .push([leftNavItem.subMenuItems1[index - 1]], subMenuItem1.subMenuItems2, [leftNavItem.subMenuItems1[index + 1]]))
      })
    })
    // 2. initiate function depending if user is on parent or subparent menu
    let previous;
    let next;
    let subParentLinks;
    // if user is currently in submenu of parent, length will be more than 1
    if (parentLinks.length > 1) {
      // combine three arrays
      subParentLinks = parentLinks[0].concat(parentLinks[1], parentLinks[2]);
      // remove first element if undefined
      subParentLinks[0] === undefined ? subParentLinks.shift() : subParentLinks;
      // remove last element if undefined
      subParentLinks[subParentLinks.length + -1] === undefined ? subParentLinks.pop() : subParentLinks;
      handleSubMenu(subParentLinks);
    } else {
      handleParentMenu(parentLinks);
    }
    function handleSubMenu(links) {
      for (let i = 0; i < links.length; i++) {
        if (links[i].url === location) {
          let prevIndex = links[i + -1];
          let nextIndex = links[i + 1];
          previous = prevIndex && prevIndex.slug ? prevIndex : prevIndex;
          next = nextIndex && nextIndex.slug ? nextIndex : nextIndex;
        }
      }
    }
    function handleParentMenu(links) {
      links.map(link => {
        for (let i = 0; i < link.length; i++) {
          if (link[i].url === location) {
            let prevIndex = link[i + -1];
            let nextIndex = link[i + 1]
            // edge case: if previous parent section is a submenu, traverse to that arrays last index
            // Ex: /docs/designing-and-developing-your-api/view-and-analyze-api-reports/
            previous = prevIndex && prevIndex.subMenuItems2 ? prevIndex.subMenuItems2[prevIndex.subMenuItems2.length + -1] : prevIndex;
            next = nextIndex && nextIndex.slug ? nextIndex : nextIndex;
          }
        }
      })
    }
    // 3. set previous and next links
    this.setState({
      prevLink: previous,
      nextLink: next
    })

    /* arrow key and swipe functionality */
    handleKeyboard();
    handleSwipe();
  }

  render() {
    const { nextLink, prevLink } = this.state;
    return (
      <>
        <hr />
        <div id="previousNextLinks" className="d-flex flex-row mt-3 pagination" role="navigation">
          {prevLink && (
            <div className="mr-auto">
              <span
                className="font-weight-bold mr-3"
                aria-hidden="true"
              >
                &#171;
              </span>
              <a
                className="prevDoc"
                rel="prev"
                href={prevLink.slug || prevLink.url}
                title={`Go to the previous page: ${prevLink.name}`}
                aria-label={`Go to the previous page: ${prevLink.name}`}
              >
                {prevLink.name}
              </a>
            </div>
          )}
          {nextLink && (
            <div className="ml-auto">
              <a
                className="nextDoc"
                rel="next"
                href={nextLink.url || nextLink.slug}
                title={`Go to the next page: ${nextLink.name}`}
                aria-label={`Go to the next page: ${nextLink.name}`}
              >
                {nextLink.name}
              </a>
              <span
                className="font-weight-bold ml-3"
                aria-hidden="true"
              >
                &#187;
              </span>
            </div>
          )}
        </div>
      </>
    )
  }
}

export default PreviousAndNextLinks;
