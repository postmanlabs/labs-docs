// import { useStaticQuery, graphql, Link } from 'gatsby';
import React, { useState, useEffect } from 'react';
import './LeftNav.scss';
import { leftNavItems } from './LeftNavItems';

const { v4: uuidv4 } = require('uuid');


const LeftNav = (props) => {
  const {
    LeftNavItems = [],
  } = props;

  // state and action is called setSelectedMenuItem. create state for each variable, not as a total state that creates copies everytime and replaces the new state object
  const [selected, setSelectedMenuItem] = useState(LeftNavItems[0].name);
  // state holds condition if submenus are selected or parent is selected
  const [subMenuItemsState, setSubMenuItems] = useState({});



  // onclick event
  const handleMenuItemClick = (name, index) => {
    // update selected menu item
    setSelectedMenuItem(name);
    // does item have subitem? and has it been clicked?

    // create deep copy of object to break reference to initial object
    const subMenuItems1Copy = JSON.parse(JSON.stringify(subMenuItemsState));

    if (Object.prototype.hasOwnProperty.call(subMenuItemsState, index)) {
      // take cpoy at index clicked, check if isopen and change state
      subMenuItems1Copy[index].isOpen = !subMenuItemsState[index].isOpen;
      setSubMenuItems(subMenuItems1Copy);
    }
  };

  console.log(subMenuItemsState);

  // Effect, first arg is what you want to happen, if second property is empty, use effect will only fire once on new render, if properties are added then the effect fires every time the state changes
  // first arg is the effect for the logic and the second arg is the dependency
  useEffect(() => {
    // populate empty object with dropdown items
    const newSubMenu = {};
    // const newSubMenu2 = {};

    leftNavItems.forEach((item, index) => {
      // 0 is falsy and other number is truthu so this equals true
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

  // useEffect(() => {
  //   const NewSubMenu = {};
  //   leftNavItems.subMenuItems1
  // })


  // returns each nav item starting with map on parent and then maps on subitems
  const LeftNavItemsJSX = LeftNavItems.map((item, index) => {
    // grab individual parent item
    const isItemSelected = selected === item.name;
    // confirms if individual item has a subitems
    const itemHasChildren = item.subMenuItems1 && item.subMenuItems1.length;
    // ES6 ternary statement, if first is true then add isOpen, else null
    const isOpen = subMenuItemsState[index]?.isOpen;

    // map through sub items and print in own component
    // console.log('ITEM', item.subMenuItems1.map((subItem1) => subItem1.name));
    const itemHasChildrenJSX = item.subMenuItems1 && item.subMenuItems1.map((subItem1) => {
      return (
        <p className="sub-menu-item-1" key={uuidv4()}>{subItem1.name}</p>
      );
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
        { itemHasChildren && isOpen && (<div className="sub-menu-item-container">{itemHasChildrenJSX}</div>)}
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
/* eslint-enable */
