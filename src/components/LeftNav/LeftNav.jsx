// import { useStaticQuery, graphql, Link } from 'gatsby';
import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import './LeftNav.scss';
import { leftNavItems } from './LeftNavItems';

const { v4: uuidv4 } = require('uuid');

const LeftNav = (props) => {
  const {
    LeftNavItems = [],
  } = props;

  // state and action is called setSelectedMenuItem. create state for each variable, not as a total state that creates copies everytime and replaces the new state object
  const [selected, setSelectedMenuItem] = useState(LeftNavItems[0].name);
  const [selected2, setSelectedMenuItem2] = useState(LeftNavItems[0].name);
  // state holds condition if submenus are selected or parent is selected
  const [subMenuItemsState, setSubMenuItems] = useState({});
  const [subMenuItems2State, setSubMenuItems2] = useState({});
  // determine if URL is current
  const [currentUrl, setCurrentUrl] = useState('');

  // onclick event for first menu item
  const handleMenuItemClick = (name, index, isChild) => {
    if (isChild) {
      setSelectedMenuItem2(name);
      const subMenuItems2Copy = JSON.parse(JSON.stringify(subMenuItems2State));
      if (Object.prototype.hasOwnProperty.call(subMenuItems2State, index)) {
        subMenuItems2Copy[index].isOpen2 = !subMenuItems2State[index].isOpen2;
        setSubMenuItems2(subMenuItems2Copy);
      }
    } else {
      // update selected menu item
      setSelectedMenuItem(name);
      // create deep copy of object to break reference to initial object
      const subMenuItems1Copy = JSON.parse(JSON.stringify(subMenuItemsState));

      if (Object.prototype.hasOwnProperty.call(subMenuItemsState, index)) {
        // take copy at index clicked, check if isopen and change state
        subMenuItems1Copy[index].isOpen = !subMenuItemsState[index].isOpen;
        setSubMenuItems(subMenuItems1Copy);
      }
    }
  };

  // Add index of items that contain sub menu items
  useEffect(() => {
    // populate empty object with dropdown items
    const newSubMenu = {};
    LeftNavItems.forEach((item, index) => {
      // 0 is falsy and other nmber is truthu so this equals true
      const hasSubItems1 = item.subMenuItems1 && item.subMenuItems1.length !== 0;
      // if parent has dropdown we add state to those index
      if (hasSubItems1) {
        newSubMenu[index] = {};
        newSubMenu[index].isOpen = false;
        newSubMenu[index].selected = null;
      }
    });
    setSubMenuItems(newSubMenu);
  }, [LeftNavItems]);

  // hook for second level children
  useEffect(() => {
    const newSubMenu2 = {};

    LeftNavItems.forEach((item, index) => {
      const hasSubItems2Array = item.subMenuItems1 && item.subMenuItems1.map((item2) => item2.subMenuItems2 && item2.subMenuItems2.length !== 0);
      const hasSubItems2 = hasSubItems2Array && hasSubItems2Array.length !== 0;
      if (hasSubItems2) {
        newSubMenu2[index] = {};
        newSubMenu2[index].isOpen2 = false;
        newSubMenu2[index].selected2 = null;
      }
    });
    setSubMenuItems2(newSubMenu2);
  }, [LeftNavItems]);


  // gets the current url from browser
  useEffect(() => {
    setCurrentUrl(window.location.pathname);
  }, [currentUrl]);

  // returns each nav item starting with map on parent and then maps on subitems
  // ----------------------------------------------------------------------------------------------------------------------------
  const LeftNavItemsJSX = LeftNavItems.map((item, index) => {
    // grab individual parent item
    const isitemselected = selected === item.name;
    // confirms if individual item has subitems
    const itemHasChildren = item.subMenuItems1 && item.subMenuItems1.length;
    // ES6 ternary statement, if first is true then add isOpen, else null
    const isOpen = subMenuItemsState[index]?.isOpen;
    const isOpen2 = subMenuItems2State[index]?.isOpen2;


    const inUrl = (url, isUrlChild) => {
      const liIsActive = currentUrl.includes(url) ? (isitemselected && isOpen) : 'no pizza parents';

      if (liIsActive === false && isUrlChild === false) {
        handleMenuItemClick(item.name, index, false);
      }
      if (liIsActive === true && isUrlChild === true) {
        item.subMenuItems1.map((item2) => (
          item2.subMenuItems2 ? (
            item2.subMenuItems2.map((item3) => {
              const isitemselected2 = selected2 === item3.name;
              const liIsActive2 = currentUrl.includes(item3.url) ? (isitemselected2 && isOpen2) : 'no pizza kids';
              console.log(selected2, liIsActive, isOpen2);
              if (liIsActive2 === true && isUrlChild === true) {
                handleMenuItemClick(item2.name, index, true);
                // console.log(item3);
              } else {
                console.log('item3 is closed');
              }
            })) : ''));
      }
    };

    // returns level 1 children
    const itemHasChildrenJSX = item.subMenuItems1 && item.subMenuItems1.map((subItem1) => {
      if (!subItem1.subMenuItems2) {
        return (
          <li key={uuidv4()}>
            <Link to={subItem1.url} className={`sub-menu-item-1 ${inUrl(subItem1.url, false) ? 'active-caret currentUrl' : 'not-current-url'}`} key={uuidv4()}>
              {subItem1.name}
            </Link>
          </li>
        );
      }
    });

    // returns Level 2 children
    const secondLevelChildrenJSX = item.subMenuItems1 && item.subMenuItems1.map((item3) => {
      if (item3.subMenuItems2) {
        // confirms if item has been selected
        const isitemselected2 = selected2 === item3.name;
        return (
          <ul
            key={uuidv4()}
            aria-hidden="true"
            isitemselected2={`${isitemselected2}`}
            onClick={() => handleMenuItemClick(item3.name, index, true)}
          >
            <svg className={`caret${isitemselected2 && isOpen2 ? ' active-caret' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" height="24" viewBox="0 0 24 24" width="24"><path clipRule="evenodd" d="m16.5303 8.96967c.2929.29289.2929.76777 0 1.06063l-4 4c-.2929.2929-.7677.2929-1.0606 0l-4.00003-4c-.29289-.29286-.29289-.76774 0-1.06063s.76777-.29289 1.06066 0l3.46967 3.46963 3.4697-3.46963c.2929-.29289.7677-.29289 1.0606 0z" fill="#707070" fillRule="evenodd" /></svg>
            {item3.name}
            {isitemselected2 && isOpen2 && (
            <span className="sub-menu-item-2-container">
              { item3.subMenuItems2.map((subItem3) => (
                <li key={uuidv4()}>
                  <Link to={subItem3.url} className={`final sub-menu-item-2 ${inUrl(subItem3.url, true) ? 'currentUrl' : 'not-currenturl'}`} key={uuidv4()}>
                    {subItem3.name}
                  </Link>
                </li>
              ))}
            </span>
            )}
          </ul>
        );
      }
    }); // end of secondLevelChildren


    return (
      <ul className="menu-items-container" key={uuidv4()}>
        {/* displays the parent menu item */}
        <div
          className="menu-items-parent"
          role="button"
          tabIndex={0}
          aria-hidden="true"
          // isitemselected={isitemselected}
          onClick={() => handleMenuItemClick(item.name, index)}
        >
          {/* turns caret */}
          {itemHasChildren ? (<svg className={`caret${isitemselected && isOpen ? ' active-caret' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" height="24" viewBox="0 0 24 24" width="24"><path clipRule="evenodd" d="m16.5303 8.96967c.2929.29289.2929.76777 0 1.06063l-4 4c-.2929.2929-.7677.2929-1.0606 0l-4.00003-4c-.29289-.29286-.29289-.76774 0-1.06063s.76777-.29289 1.06066 0l3.46967 3.46963 3.4697-3.46963c.2929-.29289.7677-.29289 1.0606 0z" fill="#707070" fillRule="evenodd" /></svg>) : ''}
          {/* display parent name */}
          {item.name}
        </div>
        { (itemHasChildren && isOpen)
          && (
            <div className="sub-menu-item-container">
              {/* display level 1 children */}
              {itemHasChildrenJSX}
              {/* display level 2 children */}
              {secondLevelChildrenJSX}
            </div>
          )}
      </ul>
    );
  });

  // displays the entire left nav
  return (
    <div>
      {LeftNavItemsJSX}
    </div>
  );
};

export default LeftNav;
