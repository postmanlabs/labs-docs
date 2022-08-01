import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

import algoliasearch from 'algoliasearch/lite';
import { 
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
  Pagination
} from 'react-instantsearch-hooks-web';


const searchOnlyKey = process.env.NODE_ENV === 'development' ? '003daeb8de202d4a917c2395628d75a8' : '69f2c5376f1a90912c6c3b6b772c25bc';
const algoliaIndex = process.env.NODE_ENV === 'development' ? 'dev_docs' : 'docs';


/* Algolia Search Bar */
const searchClient = algoliasearch(
  '4A5N71XYH0',
  searchOnlyKey
);

function Hit({ hit }) {
  return (
    <article>
      {/* <img src={hit.image} alt={hit.name} />
      <p>{hit.categories[0]}</p> */}
      <h1>
        <Highlight attribute="title" hit={hit} />
      </h1>
      <p>{hit.excerpt}</p>
      <Pagination />
      {/* <p>${hit.price}</p> */}
    </article>
  );
}

const SearchPage = () => (
    <Layout>
       <SEO title="search-page" slug="/search/" />
       <div className="container" role="link" tabIndex={0}>
         <div style={{ paddingTop: '80' + 'px', paddingBottom: '80' + 'px' }} className="row">
           <div className="col-md-8 align-self-center pr-md-5">
           <InstantSearch 
              searchClient={searchClient} 
              indexName={algoliaIndex}
              routing={true}
            >
              <SearchBox />
              <Hits hitComponent={Hit} />
            </InstantSearch>
           </div>
         </div>
       </div>
     </Layout>
 )
 
 export default SearchPage;