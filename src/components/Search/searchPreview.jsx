import React from 'react';
import { connectSearchBox, connectHits } from 'react-instantsearch-dom';
import styled from 'styled-components';

export const SearchWrapper = styled.ul`

ais-highlight-0000000000 {
    color: ${(props) => props.theme.colors.grey_90};
    background-color: ${(props) => props.theme.colors.yellow_20};
}

.arrow-up {
  width: 0; 
  height: 0; 
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid black;
}

.style {
  list-style: none;
  padding-top: 22px;

  a {
    color: ${(props) => props.theme.colors.grey_50};
  }
  a:hover {
    color: ${(props) => props.theme.colors.blue_70};
    text-decoration: none;
  }
}
.ais-SearchBox {
  margin-left: -24px;
}
.search-title {
  font-family:${(props) => props.theme.fonts.Inter};
  font-weight: 600;
}

.ais-SearchBox-form {
    margin-bottom: 0px;
    flex-grow: 2;
  }

.ais-SearchBox-submit {
  width: 0.1px;
  height: 0.1px;
  font-size: 0.001px;
}

.ais-SearchBox-reset {
  width: 0.1px;
  height: 0.1px;
  font-size: 0.001px;
}
`

const SearchBox = ({ currentRefinement, refine }) => (
  <div className="ais-SearchBox">
    <form noValidate action="" role="search" className="ais-SearchBox-form">
      <input
        className="ais-SearchBox-input"
        type="search"
        value={currentRefinement}
        onChange={(event) => refine(event.currentTarget.value)}
      />
    </form>
  </div>
);

export const CustomSearchBox = connectSearchBox(SearchBox);

// on page load do not display
/* eslint-disable react/no-danger */
const Hits = ({ hits }) => {

  return (
  // if parent component set is type, render, otherwise hide
  <SearchWrapper className="style">
    {hits.length < 1 ? <li>No search results found</li> : ''}
    {hits.map((hit) => {
      // handles develop and prod Algolia index
      const excerpt = hit._snippetResult && hit._snippetResult.excerpt.value ? hit._snippetResult.excerpt.value : hit.excerpt
      return (
      <li key={hit.title}>
        <a href={hit.fields.slug}>
          <span className="search-title" dangerouslySetInnerHTML={{ __html: hit._highlightResult.title.value }} />
          <p dangerouslySetInnerHTML={{ __html: excerpt }} />
        </a>
      </li>
    )})}
  </SearchWrapper>
)};
/* eslint-enable */

export const CustomHits = connectHits(Hits);