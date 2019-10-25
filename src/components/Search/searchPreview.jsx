import React from 'react';
import { connectSearchBox, connectHits } from 'react-instantsearch-dom';

import './_search.scss';


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

// print out first and last characters of search term
const getSnippet = (excerpt, match) => {
  const index = excerpt.indexOf(match);
  return excerpt.substring(index - 50, index + 50);
};

// on page load do not display
const Hits = ({ hits }) => (
  // if parent component set is type, render, otherwise hide
  <ul className="style">
    {hits.map((hit) => (
      <li key={hit.title}>
        <a href={hit.fields.slug}>
          {hit.title}
          <p>{`...${getSnippet(hit.excerpt, hit._highlightResult.title.matchedWords[0])}...`}</p>
        </a>
      </li>

      //  Work on highlighting
      // /////////////////////////////////////////////////
      // <li key={hit.title}>
      //   <a href={hit}>
      //     <Highlight attribute="title" hit={hit} />
      //   </a>
      // </li>
      // ////////////////////////////////////////////////
    ))}
  </ul>
);

export const CustomHits = connectHits(Hits);
