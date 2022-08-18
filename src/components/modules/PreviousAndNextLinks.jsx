import React, { useState, useEffect } from 'react';
import { leftNavItems } from '../LeftNav/LeftNavItems';
import { handleKeyboard } from './handlePagination'

function PreviousAndNextLinks() {
  const [prevLink, setPrevious] = useState({})
  const [nextLink, setNext] = useState({})

  let location;
  if (typeof window !== 'undefined') {
    location = window.location.pathname;
  }
  // 1. Filter data  / data reference: LeftNavItems.jsx
  const parentLinks = [];
  leftNavItems.forEach((leftNavItem) => {
    leftNavItem.subMenuItems1.map((subMenuItem1, index) => {
      // parent - if url matches window.location, push item to array
      leftNavItem.subMenuItems1[index].url === location && parentLinks.push(leftNavItem.subMenuItems1)
      // subparent - same logic as above but a level deeper
      subMenuItem1.subMenuItems2 && subMenuItem1.subMenuItems2.filter(subMenuItem2 =>
        // push three arrays to parentLinks[last item in previous section, current items, first item in next section]
        subMenuItem2.url === location && parentLinks.push(
          [leftNavItem.subMenuItems1[index - 1]],
          subMenuItem1.subMenuItems2,
          [leftNavItem.subMenuItems1[index + 1]]
        )
      )
    }
    )
    return parentLinks;
  })
  // 2. Invoke function based on array length and which page the user is on
  let previous;
  let next;
  let subParentLinks;
  if (parentLinks.length > 1) {
    // merge three arrays to one [last item in previous section, current items, first item in next section]
    subParentLinks = parentLinks[0].concat(parentLinks[1], parentLinks[2]);
    // remove first and last element if undefined
    subParentLinks[0] === undefined ? subParentLinks.shift() : subParentLinks;
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
        previous = prevIndex && prevIndex.subMenuItems2 ? prevIndex.subMenuItems2[prevIndex.subMenuItems2.length + -1] : prevIndex;
        next = nextIndex ? nextIndex : nextIndex;
      }
    }
  }
  function handleParentMenu(links) {
    links.map(link => {
      for (let i = 0; i < link.length; i++) {
        if (link[i].url === location) {
          let prevIndex = link[i + -1];
          let nextIndex = link[i + 1];
          // if previous section is submenu, use last item of previous section
          // Ex: /docs/designing-and-developing-your-api/view-and-analyze-api-reports/
          previous = prevIndex && prevIndex.subMenuItems2 ? prevIndex.subMenuItems2[prevIndex.subMenuItems2.length + -1] : prevIndex;
          next = nextIndex ? nextIndex : nextIndex;
        }
      }
    })
  }

  useEffect(() => {
    setPrevious(previous);
    setNext(next);
    handleKeyboard();
  }, []);


  return (
    <>
      <hr />
      <div id="previousNextLinks" className="d-flex flex-row mt-3 pagination" role="navigation">
        {prevLink && (
          <div className="mr-auto">
            <a
              className="prevDoc"
              rel="prev"
              href={prevLink.slug || prevLink.url}
              title={`Go to the previous page: ${prevLink.name}`}
              aria-label={`Go to the previous page: ${prevLink.name}`}
            >
              &#8592; {prevLink.name}
            </a>
          </div>
        )}
        {nextLink && (
          <div className="ml-auto">
            <a
              className="nextDoc"
              rel="next"
              href={nextLink.slug || nextLink.url}
              title={`Go to the next page: ${nextLink.name}`}
              aria-label={`Go to the next page: ${nextLink.name}`}
            >
              {nextLink.name} &#8594;
            </a>
          </div>
        )}
      </div>
    </>
  )
}

export default PreviousAndNextLinks;
