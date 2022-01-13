import React from 'react';
import { leftNavItems } from '../LeftNav/LeftNavItems';

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
          previous = link[i + -1]
          next = link[i + 1] && link[i + 1].slug ? undefined : link[i + 1]
        }
      }
    })
      this.setState({
        prevLink: previous,
        nextLink: next
      })
    }
  render() {
    const { nextLink, prevLink } = this.state;
    return (
      <div className="d-flex">
        {prevLink && (
          <div>
            <p className="font-weight-bold mb-0">Previous</p>
            <a href={prevLink.url}>{prevLink.name}</a>
          </div>
        )}
        {nextLink && (
          <div className={prevLink ? 'ml-auto' : ''}>
            <p className="font-weight-bold mb-0">Next</p>
            <a href={nextLink.url}>{nextLink.name}</a>
          </div>
        )}
      </div>
    )
  }
}

export default PreviousAndNextLinks;