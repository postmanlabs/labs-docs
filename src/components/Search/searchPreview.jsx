import React from 'react';
import { connectSearchBox, connectHits } from 'react-instantsearch-dom';

// import './_search.scss';
import styled from 'styled-components';

export const SearchWrapper = styled.div`
   .input-empty {
    display: none;
   }
  .searchbox {
  ::placeholder {
    color: ${(props) => props.theme.colors.grey_70};
  }
  .ais-SearchBox-submit, .ais-SearchBox-reset {
    display: none;
  }
}

.ais-Pagination-list {
  list-style: none;
  display: flex;
  flex-direction: row; 
  a {
    padding: 8px 16px;
    color: $gray-2;
    &:hover {
      color: ${(props) => props.theme.colors.blue_70};
      background-color: ${(props) => props.theme.colors.grey_10};;
      border: none;
    }
  }
  .ais-Pagination-item--firstPage {
    display: none;
  }
  .ais-Pagination-link--selected {
    color: $grey_90;
  }
  .ais-Pagination-item--previousPage > .ais-Pagination-link {
    color: $gray-2;
  }

}

ais-highlight-0000000000 {
  color: ${(props) => props.theme.colors.grey_90};
  background-color: ${(props) => props.theme.colors.yellow_20};
}

  .input-value {
    position: absolute;
    z-index: 3;
    right: 10px;
    background-color: ${(props) => props.theme.colors.grey_00};
    border: 1px solid ${(props) => props.theme.colors.grey_05};
    background: ${(props) => props.theme.colors.grey_00};
    border-radius: $${(props) => props.theme.borderRadius.small};
    padding-right: 24px;
    margin-top: 5px;
    display: flex;
    text-align: left;
    max-width: 600px;
}
    @media screen and (max-width: 992px){
      left: 10px;
      right: 10px;
    }
  

  .arrow-up {
    width: 0; 
    height: 0; 
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid black;
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

  ul{ 
    list-style: none;
    padding-top: 20px;
    a {
      color: #${(props) => props.theme.colors.grey_50};
    }
    a:hover {
      color: ${(props) => props.theme.colors.blue_70};
      text-decoration: none;
    }

  }
  .search-title {
    font-family: ${(props) => props.theme.fonts.Inter};
    font-weight: 600;
  }
`

const SearchBox = ({ currentRefinement, refine }) => (
  <div  className="ais-SearchBox">
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
  <div>
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
  </div>
)};
/* eslint-enable */

export const CustomHits = connectHits(Hits);
