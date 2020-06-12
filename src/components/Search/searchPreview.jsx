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

// on page load do not display
/* eslint-disable react/no-danger */
const Hits = ({ hits }) => (
  // if parent component set is type, render, otherwise hide
  <ul className="style">
    {hits.length < 1 ? <li>No search results found</li> : ''}
    {hits.map((hit) => (
      <li key={hit.title}>
        <a href={`https://blog.postman.com/${hit.slug}`}>
          <span className="search-title" dangerouslySetInnerHTML={{ __html: hit._highlightResult.title.value }} />
          <p dangerouslySetInnerHTML={{ __html: hit._snippetResult.excerpt.value }} />
        </a>
      </li>
    ))}
  </ul>
);


export const CustomHits = connectHits(Hits);


/* Website Search Results
************************************************************************************ */
const Hitswww = ({ hits }) => (
  <ul className="style">
    {hits.length < 1 ? <li className="font-italic">No search results found</li> : ''}
    {hits.map((hit) => (
      <li key={hit.title}>
        <a href={`https://www.postman.com${hit.url}`}>
          <span className="search-title" dangerouslySetInnerHTML={{ __html: hit._highlightResult.title.value }} />
          <div dangerouslySetInnerHTML={{ __html: hit.description }} />
        </a>
      </li>
    ))}
  </ul>
);

export const HitsWww = connectHits(Hitswww);

/* Learning Center Search Results
************************************************************************************ */
const Hits2 = ({ hits }) => (
  // if parent component set is type, render, otherwise hide
  <ul className="style">
    {hits.length < 1 ? <li className="font-italic">No search results found</li> : ''}
    {hits.map((hit) => (
      <li key={hit.title}>
        <a href={`https://learning.postman.com${hit.fields.slug}`}>
          <span className="search-title" dangerouslySetInnerHTML={{ __html: hit._highlightResult.title.value }} />
          <div dangerouslySetInnerHTML={{ __html: hit._snippetResult.excerpt.value }} />
        </a>
      </li>
    ))}
  </ul>
);

export const NextHits = connectHits(Hits2);
/* eslint-enable */
