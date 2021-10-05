import React from "react"
import { Link } from "gatsby"
import './LeftNav.scss';

const { v4: uuidv4 } = require("uuid")
const LeftNav = props => {
  const { LeftNavItems = [] } = props
  const isRuntime = typeof document === "object"
  const sectionHandler = e => {
    document.location.href = e.target.getAttribute("data-section")
  }
  const renderTwoLevelList = item => {
    const slug = item.name.toLowerCase().replace(/ /g, "-");
    const active = document.location.pathname.match(slug);
    const indicator = (<svg className={`caret${isRuntime && active ? ' active-caret' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" height="24" viewBox="0 0 24 24" width="24"><path clipRule="evenodd" d="m16.5303 8.96967c.2929.29289.2929.76777 0 1.06063l-4 4c-.2929.2929-.7677.2929-1.0606 0l-4.00003-4c-.29289-.29286-.29289-.76774 0-1.06063s.76777-.29289 1.06066 0l3.46967 3.46963 3.4697-3.46963c.2929-.29289.7677-.29289 1.0606 0z" fill="#707070" fillRule="evenodd" /></svg>);
    return (
      <ul key={uuidv4()}>
        <li style={{ cursor: "pointer", listStyleType: "none" }}>
          {/* <p data-section={`/docs/${slug}/`} onClick={sectionHandler}> */}
          <p data-section={item.url} onClick={sectionHandler}>
            {indicator}
            &nbsp;
            {item.name}
          </p>
          {active && (
            <ul>
              {item.subMenuItems1.map(
                sItem =>
                  (sItem.url && (
                    <li key={uuidv4()}>
                      <Link to={sItem.url}>{sItem.name}</Link>
                    </li>
                  )) || (
                    <li
                      key={uuidv4()}
                      style={{ cursor: "pointer", listStyleType: "none" }}
                    >
                      <p
                        data-section={sItem.slug}
                        onClick={sectionHandler}
                      >

                        {(document.location.pathname.match(
                          sItem.name.toLowerCase().replace(/ /g, "-")
                        ) &&
                          "▼") ||
                          "▶"}
                        &nbsp;
                        {sItem.name}
                      </p>
                      {document.location.pathname.match(
                        sItem.name.toLowerCase().replace(/ /g, "-")
                      ) && (
                        <ul>
                          {sItem.subMenuItems2.map(
                            ssItem =>
                              ssItem.url && (
                                <li key={uuidv4()}>
                                  <Link to={ssItem.url}>{ssItem.name}</Link>
                                </li>
                              )
                          )}
                        </ul>
                      )}
                    </li>
                  )
              )}
            </ul>
          )}
        </li>
      </ul>
    )
  }

  return LeftNavItems.map(item => renderTwoLevelList(item))
}

export default LeftNav
