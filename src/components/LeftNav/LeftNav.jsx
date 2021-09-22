// import { useStaticQuery, graphql, Link } from 'gatsby';
import React, { useState, useEffect } from 'react';
import './LeftNav.scss';
import { leftNavItems } from './LeftNavItems';

const { v4: uuidv4 } = require('uuid');


const LeftNav = (props) => {
  const {
    LeftNavItems = [],
    LeftNavItems2 = [],
  } = props;

  // state and action is called setSelectedMenuItem. create state for each variable, not as a total state that creates copies everytime and replaces the new state object
  const [selected, setSelectedMenuItem] = useState(LeftNavItems[0].name);
  const [selected2, setSelectedMenuItem2] = useState(LeftNavItems2);
  console.log('LeftNavItems', LeftNavItems);
  console.log('LeftNavItems2', LeftNavItems2);
  // state holds condition if submenus are selected or parent is selected
  const [subMenuItemsState, setSubMenuItems] = useState({});
  const [subMenuItems2State, setSubMenuItems2] = useState({});



  // onclick event for first menu item
  const handleMenuItemClick = (name, index) => {
    // update selected menu item
    setSelectedMenuItem(name);
    // create deep copy of object to break reference to initial object
    const subMenuItems1Copy = JSON.parse(JSON.stringify(subMenuItemsState));

    if (Object.prototype.hasOwnProperty.call(subMenuItemsState, index)) {
      // take cpoy at index clicked, check if isopen and change state
      subMenuItems1Copy[index].isOpen = !subMenuItemsState[index].isOpen;
      setSubMenuItems(subMenuItems1Copy);
    }
  };

  const handleMenuItem2Click = (title, index) => {
    setSelectedMenuItem2(title);
    const subMenuItems2Copy = JSON.parse(JSON.stringify(subMenuItems2State));
    if (Object.prototype.hasOwnProperty.call(subMenuItems2State, index)) {
      subMenuItems2Copy[index].isOpen2 = !subMenuItems2State[index].isOpen2;
      setSubMenuItems2(subMenuItems2Copy);
    }
  };

  // Effect, first arg is what you want to happen, if second property is empty, use effect will only fire once on new render, if dependency as second arguement is added then the effect fires every time the state changes
  // Add index of items that contain sub menu items
  useEffect(() => {
    // populate empty object with dropdown items
    const newSubMenu = {};
    leftNavItems.forEach((item, index) => {
      // 0 is falsy and other nmber is truthu so this equals true
      const hasSubItems1 = item.subMenuItems1 && item.subMenuItems1.length !== 0;
      // console.log('has sub items 1', hasSubItems1);
      // if parent has dropdown we add state to those index
      if (hasSubItems1) {
        newSubMenu[index] = {};
        newSubMenu[index].isOpen = false;
        newSubMenu[index].selected = null;
      }
    });
    setSubMenuItems(newSubMenu);
  }, [LeftNavItems]);

  // use Effect for subItemMenu2
  useEffect(() => {
    const newSubMenu2 = {};

    leftNavItems.forEach((item, index) => {
      const hasSubItems2Array = item.subMenuItems1 && item.subMenuItems1.map((item2) => item2.subMenuItems2 && item2.subMenuItems2.length !== 0);
      const hasSubItems2 = hasSubItems2Array && hasSubItems2Array.length !== 0;
      // console.log('has sub items 2', hasSubItems2);
      if (hasSubItems2) {
        newSubMenu2[index] = {};
        newSubMenu2[index].isOpen2 = false;
        newSubMenu2[index].selected2 = null;
      }
    });
    setSubMenuItems2(newSubMenu2);
  }, [LeftNavItems]);


  // returns each nav item starting with map on parent and then maps on subitems
  // ----------------------------------------------------------------------------------------------------------------------------
  const LeftNavItemsJSX = LeftNavItems.map((item, index) => {
    // grab individual parent item
    const isItemSelected = selected === item.name;
    // grab individual title
    const subTitle2 = item.subMenuItems1 && item.subMenuItems1.map((item2) => item2.title);
    const isSubItemSelected = selected2 === subTitle2;

    // confirms if individual item has subitems
    const itemHasChildren = item.subMenuItems1 && item.subMenuItems1.length;
    // confirms every sub item has a sub sub item
    const subTitleLength = item.subMenuItems1 && item.subMenuItems1.map((item2) => item2 && item2.length);
    const itemHasSubChildren = item.subMenuItems1 && subTitleLength;

    const itemTitle = item.subMenuItems1 && item.subMenuItems1.map((pizza) => pizza.title);

    // ES6 ternary statement, if first is true then add isOpen, else null
    const isOpen = subMenuItemsState[index]?.isOpen;
    const isOpen2 = subMenuItems2State[index]?.isOpen2;


    const itemHasChildrenJSX = item.subMenuItems1 && item.subMenuItems1.map((subItem1) => (
      <p className="sub-menu-item-1" key={uuidv4()}>
        {subItem1.name}
      </p>
    ));

    const itemHasSubChildrenJSX = item.subMenuItems1 && item.subMenuItems1.map((subItem2) => {
      const subMenuItem2 = subItem2.subMenuItems2 && subItem2.subMenuItems2.map((finalSubItem2) => (
        <p className="sub-menu-item-2" key={uuidv4()}>
          {finalSubItem2.name}
        </p>
      ));
      return subMenuItem2;
    });

    return (
      <div className="menu-items-container" key={uuidv4()}>
        {/* displays the parent menu item */}
        <div
          className="menu-items-parent"
          role="button"
          tabIndex={0}
          aria-hidden="true"
          isItemSelected={isItemSelected}
          onClick={() => handleMenuItemClick(item.name, index)}
        >
          {/* if isOpen is true -> turn caret */}
          {itemHasChildren ? (<svg onClick={handleMenuItemClick} className={`caret${isItemSelected && isOpen ? ' active-caret' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" height="24" viewBox="0 0 24 24" width="24"><path clipRule="evenodd" d="m16.5303 8.96967c.2929.29289.2929.76777 0 1.06063l-4 4c-.2929.2929-.7677.2929-1.0606 0l-4.00003-4c-.29289-.29286-.29289-.76774 0-1.06063s.76777-.29289 1.06066 0l3.46967 3.46963 3.4697-3.46963c.2929-.29289.7677-.29289 1.0606 0z" fill="#707070" fillRule="evenodd" /></svg>) : ''}
          {item.name}
        </div>
        {/* display sub menu item 1 */}
        { itemHasChildren && isOpen
          && (
            <div className="sub-menu-item-container">
              {itemHasChildrenJSX}
              <div
                className="sub-menu-items-parent"
                role="button"
                tabIndex={0}
                aria-hidden="true"
                isSubItemSelected={isSubItemSelected}
                onClick={() => handleMenuItem2Click('foo', index)}
              >
                {/* display sub menu 2 */}
                {itemHasSubChildren ? (<svg onClick={handleMenuItem2Click} className={`caret${isSubItemSelected && isOpen2 ? ' active-caret' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" height="24" viewBox="0 0 24 24" width="24"><path clipRule="evenodd" d="m16.5303 8.96967c.2929.29289.2929.76777 0 1.06063l-4 4c-.2929.2929-.7677.2929-1.0606 0l-4.00003-4c-.29289-.29286-.29289-.76774 0-1.06063s.76777-.29289 1.06066 0l3.46967 3.46963 3.4697-3.46963c.2929-.29289.7677-.29289 1.0606 0z" fill="#707070" fillRule="evenodd" /></svg>) : ''}
                {itemTitle}
                {itemHasSubChildren && isOpen2
                && (
                  <div className="sub-menu-item-2-container">
                    {itemHasSubChildrenJSX}
                  </div>
                )}
              </div>
            </div>
          )}
      </div>
    );
  });



  return (
    <div>
      {LeftNavItemsJSX}
    </div>
  );
};




export default LeftNav;

