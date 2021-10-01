import React from "react"
import { Link } from "gatsby"

const { v4: uuidv4 } = require("uuid")
const LeftNav = props => {
  const { LeftNavItems = [] } = props
  const isRuntime = typeof document === "object"
  const sectionHandler = e => {
    document.location.href = e.target.getAttribute("data-section")
  }
  const renderTwoLevelList = item => {
    const slug = item.name.toLowerCase().replace(/ /g, "-")
    const active = document.location.pathname.match(slug)
    const indicator = (isRuntime && active && "▼") || "▶"

    return (
      <ul key={uuidv4()}>
        <li style={{ cursor: "pointer", listStyleType: "none" }}>
          <p data-section={`/docs/${slug}/`} onClick={sectionHandler}>
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
                        data-section={`/docs/${slug}/${sItem.name
                          .toLowerCase()
                          .replace(/ /g, "-")}/`}
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
