import React, { useState, useEffect }  from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const { v4: uuidv4 } = require('uuid');

const sectionHandler = (e) => {
  document.location.href = e.target.getAttribute('data-section');
};

const NavWrapper = styled.ul`
  margin-left: 0;
  padding: 0px 24px 0px 0px; 
  background-color: ${(props) => props.theme.colors.grey_05};
  font-size: 14px;
  line-height: 1.5;


  .caret-sibling {
    padding-left: 0;
  }
  :first-child {
    padding: 0px 24px 0px 0px; 
  }
  & ul {
    margin-left: 0;
    padding-top:0;
    margin-bottom: 1.45rem;
      
      & ul {
        margin-left: 32px;
        margin-top: 12px;
      }
  }

  .first-parent {
    padding: 0;
  }
  //  parent ------------------------------
  .parent {
    font-weight: 400;
    list-style-type: none;
    margin-bottom: 4px;
  }


  .currentUrl button:hover {
    color: ${(props) => props.theme.colors.grey_90};
    background-color: ${(props) => props.theme.colors.grey_05};
  }

  button {
    background: none;
    color: inherit;
    display: block;
    border: none;
    padding: 0;
    width: 100%;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    text-align: left;

    @media screen and (max-width: 768px) {
      text-align: left !important; 
    }
    @media screen and (min-width: 768px) {
      text-align: left !important; 
    }
    &:hover{
      color: ${(props) => props.theme.colors.grey_60};
    }
  }
  // sub Parent ----------------------
  .sub-parent {
    margin-top: 8px;
  } 

  
`
const ChildItemsWrapper = styled.ul`
      margin-left: 32px;
      margin-top: 8px;
      margin-bottom: 1.45rem;

  // Child ---------------

  .child {
    margin-left: 16px;
    margin-right:16px;
    margin-bottom: 0px;
    list-style-type: none;
    color:${(props) => props.theme.colors.grey_50};
    width: 98%;    
    &.currentUrl{
      font-weight: 600;

      > * {
        vertical-align: middle;
      }
      a:link, a:visited {
        background-color: ${(props) => props.theme.colors.grey_10};
        color: ${(props) => props.theme.colors.grey_90};
        border-radius: ${(props) => props.theme.borderRadius.small};
      }
    }
    a:hover {
      border: none;
    }
    a:link, a:visited {
      display: block;
      text-decoration: none;
      color: inherit;
      padding: 9px;
      &:hover {
        color: ${(props) => props.theme.colors.grey_90};
        background-color: ${(props) => props.theme.colors.grey_20};
        border-radius: ${(props) => props.theme.borderRadius.small};
      }
    }
  }

`

const CaretWrapper = styled.a`
   .caret-wrapper {
      width: 24px;
    &:hover {
      cursor: default;
    }
  }
  .caret {
    transition: transform .2s ease;
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    transform: rotate(-90deg);
    
    &.active-caret {
      transition: transform .2s ease;
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
    }
  }

  
`

const renderTwoLevelList = (item, runtime) => {
  if (typeof document !== 'undefined') {
    const active = runtime ? document.location.pathname.match(item.parentSlug) : '';
    return (
      <NavWrapper key={uuidv4()}>
        <li className="parent">
          <div className="container">
            <div className="row">
              <CaretWrapper className="caret-wrapper" href={item.url}>
                {runtime && <svg className={`caret${active ? ' active-caret' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" height="24" viewBox="0 0 24 24" width="24"><path clipRule="evenodd" d="m16.5303 8.96967c.2929.29289.2929.76777 0 1.06063l-4 4c-.2929.2929-.7677.2929-1.0606 0l-4.00003-4c-.29289-.29286-.29289-.76774 0-1.06063s.76777-.29289 1.06066 0l3.46967 3.46963 3.4697-3.46963c.2929-.29289.7677-.29289 1.0606 0z" fill="#707070" fillRule="evenodd" /></svg>}
              </CaretWrapper>
              <div className="col caret-sibling first-parent">
                <button
                  type="button"
                  data-click={item.name}
                  data-section={item.url}
                  onClick={sectionHandler}
                >
                  {item.name}
                </button>
              </div>
            </div>
          </div>
          {active && (
            <ChildItemsWrapper>
              {item.subMenuItems1.map(
                (sItem) => (sItem.url && (
                  <li key={uuidv4()} className={`child ${window.location.pathname === sItem.url ? 'currentUrl' : ''}`}>
                    <Link data-click={sItem.name} to={sItem.url}>{sItem.name}</Link>
                  </li>
                )) || (
                    <li
                      key={uuidv4()}
                      className="parent sub-parent"
                    >
                      <div className="container">
                        <div className="row">
                          <CaretWrapper className="caret-wrapper" href={sItem.slug}>
                            <svg className={`caret${(document.location.pathname.match(sItem.subParentSlug)) ? 'active-caret' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" height="24" viewBox="0 0 24 24" width="24"><path clipRule="evenodd" d="m16.5303 8.96967c.2929.29289.2929.76777 0 1.06063l-4 4c-.2929.2929-.7677.2929-1.0606 0l-4.00003-4c-.29289-.29286-.29289-.76774 0-1.06063s.76777-.29289 1.06066 0l3.46967 3.46963 3.4697-3.46963c.2929-.29289.7677-.29289 1.0606 0z" fill="#707070" fillRule="evenodd" /></svg>
                          </CaretWrapper>
                          <div className="col caret-sibling second-parent">
                            <button
                              type="button"
                              data-click={sItem.name}
                              data-section={sItem.slug}
                              onClick={sectionHandler}
                            >
                              {sItem.name}
                            </button>
                          </div>
                        </div>
                      </div>
                      {document.location.pathname.match(
                        sItem.subParentSlug,
                      ) && (
                          <ul>
                            {sItem.subMenuItems2.map(
                              (ssItem) => ssItem.url && (
                                <li key={uuidv4()} className={`child ${document.location.pathname === ssItem.url ? 'currentUrl' : ''}`}>
                                  <Link to={ssItem.url} data-click={sItem.name} className="ssItem second-child">{ssItem.name}</Link>
                                </li>
                              ),
                            )}
                          </ul>
                        )}
                    </li>
                  ),
              )}
            </ChildItemsWrapper>
          )}
        </li>
      </NavWrapper>
    );
  }
}

function LeftNav(props) {
  const [{ leftNavItems = [] }, setProps] = useState({ ...props })
  const [runtime, setRuntime] = useState(true)
  const isRuntime = typeof document === 'object';
  useEffect(() => {
    setProps(props);
    setRuntime(isRuntime)
  }, []);
  return (
    leftNavItems.map((item) => renderTwoLevelList(item, runtime))
  )
}

export default LeftNav;
