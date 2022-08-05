import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import styled from "styled-components";

import algoliasearch from 'algoliasearch/lite';
import { 
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
  Pagination,
  Snippet,
  useInstantSearch,
  Configure
} from 'react-instantsearch-hooks-web';

import { Divider } from '@postman/aether-marketing';

/* URL manipulation
**********************************************/ 
import { history } from 'instantsearch.js/es/lib/routers';

/* Support Dev and Prod indeces for Algolia
**********************************************/ 
const searchOnlyKey = process.env.NODE_ENV === 'development' ? '003daeb8de202d4a917c2395628d75a8' : '69f2c5376f1a90912c6c3b6b772c25bc';
const algoliaIndex = process.env.NODE_ENV === 'development' ? 'dev_docs' : 'docs';


/* Algolia Search API Keys
**********************************************/ 
const searchClient = algoliasearch(
  '4A5N71XYH0',
  searchOnlyKey
);

/* Styling
**********************************************/ 
const SearchWrapper = styled.div`
  .ais-SearchBox-form {
    margin: 60 0 60 60px;
    // flex-grow: 2;
    // padding: 10px;
    
  }
  .ais-SearchBox-input {
    border: 1px solid #d9d9d9;
    border-radius: 5px;
    text-align: left;
    width: 100%;
    padding: 10px;
    margin-bottom: 25px;
  }
  .ais-Highlight-highlighted {
    background-color: #fff4be;
    color: #212121;
    padding: 0;
  }
  ol.ais-Hits-list {
    list-style-type: none;
    margin-left: 0;
  }

  .ais-SearchBox-submit {
    display: none;
  }

  .ais-SearchBox-reset {
   display: none;
  }

  .ais-Snippet-highlighted {
    background-color: #fff4be;
    color: #212121;
  }

  a {
    color:#212121;
  }
  a:hover {
    color: #0053B8;
    text-decoration: none;
  }
`
const Breadcrumbs = styled.p`
  margin: 50px 0 15px 0;
  font-size: 14px;
  color: #A6A6A6;
`
const HitStyle = styled.article`
  margin: 25px 0;
`

/* Create SEO friendly URLs
**********************************************/ 
const routing = {
  router: history(),
  stateMapping: {
    stateToRoute(uiState) {
      const indexUiState = uiState[algoliaIndex];
      return {
        q: indexUiState.query
      }
    },
    routeToState(routeState) {
      return {
        [algoliaIndex]: {
          query: routeState.q
        }
      }
    }
  }
};

/* Render Algolia results 
**********************************************/ 
function Hit({ hit }) {
  return (
    <>
      <HitStyle>
        <a href={hit.fields.slug}>
          <h4>
            <Highlight attribute="title" hit={hit} />
          </h4>
          <p>
            {/* <Highlight attribute="excerpt" hit={hit} /> */}
            {/* "_snippetResult.description.value" attribute of the JSON answer will only contain the 10 best words of this description. */}
            <Snippet hit={hit} attribute="excerpt" /> ...
          </p>
        </a>
      </HitStyle>
      <Divider fullWidth />
    </>
  );
}

/* No Search results handler
**********************************************/ 
function NoResultsBoundary({ children, fallback }) {
  const { results } = useInstantSearch();
  // The `__isArtificial` flag makes sure to not display the No Results message
  // when no hits have been returned yet.
  if (!results.__isArtificial && results.nbHits === 0) {
    return (
      <>
        {fallback}
        <div hidden>{children}</div>
      </>
    );
  }

  return children;
}

function NoResults() {
  const { indexUiState } = useInstantSearch();
  return (
    <div>
      <p>
       Oops! We can't find <q>{indexUiState.query}</q>.
      </p>
    </div>
  );
}

/* Render Search Page Layout
**********************************************/ 
const SearchPage = () => (
  <Layout>
    <SEO title="search-page" slug="/search/" />
    <div className="container">
      <div className="row">
      <div className="col-md-12">
        <SearchWrapper>
        <Breadcrumbs>Postman Docs / Search Results</Breadcrumbs>
          <InstantSearch 
              searchClient={searchClient} 
              indexName={algoliaIndex}
              routing={routing}
            >
            <SearchBox  
              placeholder="Search Postman Docs" 
              submit={<></>}
              reset={<></>}
            />    
            <div className="col--md-12">
              <NoResultsBoundary fallback={<NoResults />}>
                <Configure attributesToSnippet={['excerpt']} />
                <Hits hitComponent={Hit} />
              </NoResultsBoundary>
            </div>
            <Pagination />
          </InstantSearch>
        </SearchWrapper>
        </div>
      </div>
    </div>
  </Layout>
 )
 
 export default SearchPage;