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
  componentDidMount(){
    let location;
    if (typeof window !== 'undefined') {
      location = window.location.pathname;
    }
    /* Using LeftNavItems.jsx, we filter through the nested arrays and return the active nav section the user is on */
    const activeDocLinks = [];
    /* Parent array */
    leftNavItems.forEach((leftNavItem) => {
      /* Loop over first submenu (subMenuItems1) */
      leftNavItem.subMenuItems1.map((subMenuItem1, index) => {
        /* Filter first submenu array */
        leftNavItem.subMenuItems1[index].url === location && activeDocLinks.push(leftNavItem.subMenuItems1)
        /* Filter second submenu array */
        subMenuItem1.subMenuItems2 && subMenuItem1.subMenuItems2.filter(subMenuItem2 => subMenuItem2.url === location && activeDocLinks.push(subMenuItem1.subMenuItems2))
      })
    })
    /* If the current location url equals the matching element index url, add the element to previous and next variables */
    let previous;
    let next;
    activeDocLinks.map(link => {
      for (let i = 0; i < link.length; i++) {
        if (link[i].url === location) {
          previous = link[i + -1] && link[i + -1].slug ? undefined : link[i + -1]
          next = link[i + 1] && link[i + 1].slug ? undefined : link[i + 1]
        }
      }
    })
    this.setState({
      prevLink: previous,
      nextLink: next
    })
    /* Pagination: Arrow keys and Swipe functionality */
    handleKeyboard();
    handleSwipe();
  }

  render() {
    const { nextLink, prevLink } = this.state;
    return (
      <>
      <hr/>
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
            href={prevLink.url}
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
            href={nextLink.url}
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
