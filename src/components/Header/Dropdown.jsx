import React from 'react';
import { useEffect, useRef, useState } from "react";

/* Algolia Imports */
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  SearchBox,
  Hits,
  Configure,
  Pagination,
} from 'react-instantsearch-dom';

import { CustomHits } from '../Search/searchPreview';

  const searchOnlyKey = process.env.NODE_ENV === 'development' ? '003daeb8de202d4a917c2395628d75a8' : '69f2c5376f1a90912c6c3b6b772c25bc';
  const algoliaIndex = process.env.NODE_ENV === 'development' ? 'dev_docs' : 'docs';


  /* Algolia Search Bar */
  const algoliaClient = algoliasearch(
    '4A5N71XYH0',
    searchOnlyKey
  );

  

  // removes empty query searches from analytics
  const searchClient = {
    search(requests) {
      const newRequests = requests.map((request) => {
        // test for empty string and change request parameter: analytics
        if (!request.params.query || request.params.query.length === 0) {
          request.params.analytics = false;
        }
        return request;
      });
      return algoliaClient.search(newRequests);
    },
  };

const Dropdown = () => {
  const ref = useRef();
  const [refresh, setRefresh] = useState(false);
  const [hasInput, setHasInput] = useState(false);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If clicked target is outside the open dropdown, close the dropdown
      if (hasInput && ref.current && !ref.current.contains(e.target)) {
        setHasInput(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [hasInput]);

  return (
    <div className="form-inline header__search">
      <svg
        className="nav-search__icon"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="#6b6b6b"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.87147 9.16437C10.5768 8.30243 11 7.20063 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11C7.20063 11 8.30243 10.5768 9.16437 9.87147L9.89648 10.6036L9.64648 10.8536L13.5758 14.7829C13.8101 15.0172 14.19 15.0172 14.4243 14.7829L14.7829 14.4243C15.0172 14.19 15.0172 13.8101 14.7829 13.5758L10.8536 9.64648L10.6036 9.89648L9.87147 9.16437ZM6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10Z"
        />
      </svg>
      <div className="wrapper" ref={ref}>
        <InstantSearch
          searchClient={searchClient}
          indexName={algoliaIndex}
          refresh={refresh}
        >
          <Configure hitsPerPage={5} />

          {/* forcefeed className because component does not accept natively as prop */}
          <SearchBox
            id="search-lc"
            className="searchbox"
            class="ais-SearchBox-input"
            submit={<></>}
            reset={<></>}
            translations={{
              placeholder: 'Search Postman Docs',
            }}
            onKeyUp={(event) => {
              setHasInput(event.currentTarget.value.length > 2)
            }}
          />
          <div className={!hasInput ? 'input-empty' : 'input-value'}>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <CustomHits hitComponent={Hits} />
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <Pagination
                    translations={{
                      previous: '← Previous',
                      next: 'Next →',
                      first: '«',
                      last: '»',
                      ariaPrevious: 'Previous page',
                      ariaNext: 'Next page',
                      ariaFirst: 'First page',
                      ariaLast: 'Last page',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </InstantSearch>
      </div>
    </div>
  );
}

export default Dropdown;
