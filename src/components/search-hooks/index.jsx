import algoliasearch from "algoliasearch/lite"
import { createRef, default as React, useState, useMemo } from "react"
import { InstantSearch } from "react-instantsearch-dom"
import { ThemeProvider } from "styled-components"
import StyledSearchBox from "./styled-search-box"
import StyledSearchResult from "./styled-search-result"
import StyledSearchRoot from "./styled-search-root"
import useClickOutside from "./use-click-outside"

const theme = {
  foreground: "#050505",
  background: "white",
  faded: "#888",
}

const searchOnlyKey = process.env.NODE_ENV === 'development' ? '003daeb8de202d4a917c2395628d75a8' : '69f2c5376f1a90912c6c3b6b772c25bc';
const algoliaIndex = process.env.NODE_ENV === 'development' ? 'dev_docs' : 'docs';


export default function Search() {
  const rootRef = createRef()
  const [query, setQuery] = useState()
  const [hasFocus, setFocus] = useState(false)
  const searchClient = useMemo(
    () =>
      algoliasearch(
        '4A5N71XYH0',
        searchOnlyKey
      ),
    []
  )

  useClickOutside(rootRef, () => setFocus(false))

  return (
    <ThemeProvider theme={theme}>
      <StyledSearchRoot ref={rootRef}>
        <InstantSearch
          searchClient={searchClient}
          indexName={algoliaIndex}
          onSearchStateChange={({ query }) => setQuery(query)}
        >
          <StyledSearchBox onFocus={() => setFocus(true)} hasFocus={hasFocus} />
          <StyledSearchResult
            show={query && query.length > 0 && hasFocus}
           
          />
        </InstantSearch>
      </StyledSearchRoot>
    </ThemeProvider>
  )
}