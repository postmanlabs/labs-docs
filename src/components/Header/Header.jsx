import React from 'react';
import './Header.scss';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import $ from 'jquery';

// is this needed? the scroll functions belong to home and postman marketing home
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';

import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch, SearchBox, Hits, Configure, Pagination,
} from 'react-instantsearch-dom';
import { CustomHits } from '../Search/searchPreview';

import postmanLogo from '../../images/postman-logo-icon.svg';

window.$ = $;

const ClickOutHandler = require('react-onclickout');

const algoliaClient = algoliasearch('4A5N71XYH0', 'bf5cf4783437b12c2dca33724c9c04b0');

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


// changes button in navbar based on cookie presence
const LoginCheck = (props) => {
  const { cookie, beta } = props;

  if (cookie !== 'yes') {
    return (
      <>
        <a
          href={`https://go.postman${beta}.co/build`}
          // className="btn btn__primary-hollow mr-2"
          className="button__sign-in pingdom-transactional-check__sign-in-button nav-link"
          target="_blank"
          rel="noreferrer"
          onClick={() => {
            // To stop the page reloading
            // e.preventDefault()
            // Lets track that custom click
            trackCustomEvent({
              // string - required - The object that was interacted with (e.g.video)
              category: 'lc-top-nav',
              // string - required - Type of interaction (e.g. 'play')
              action: 'Click',
              // string - optional - Useful for categorizing events (e.g. 'Spring Campaign')
              label: 'sign-in-button-clicked',
            });
          }}
        >
          Sign In
        </a>
        <a
          href={`https://identity.getpostman${beta}.com/signup?continue=https%3A%2F%2Fgo.postman.co%2Fbuild`}
          // className="btn btn__primary"
          className="button__sign-up"
          target="_blank"
          rel="noreferrer"
          onClick={() => {
            // To stop the page reloading
            // e.preventDefault()
            // Lets track that custom click
            trackCustomEvent({
              // string - required - The object that was interacted with (e.g.video)
              category: 'lc-top-nav',
              // string - required - Type of interaction (e.g. 'play')
              action: 'Click',
              // string - optional - Useful for categorizing events (e.g. 'Spring Campaign')
              label: 'sign-in-button-clicked',
            });
          }}
        >
          Sign Up
        </a>
      </>
    );
  }
  return (
    <a
      href="https://go.postman.co/home"
      className="button__sign-up"
    >
      Launch Postman
    </a>
  );
};


class Header extends React.Component {
  constructor(props) {
    super(props);

    this.getCookie = this.getCookie.bind(this);

    this.state = {
      beta: '',
      // isToggledOn: 'unset',
      hasInput: false,
      refresh: false,
    };
    this.targetElement = null;
  }


  componentDidMount() {
    const beta = window.location.host.includes('postman-beta') ? '-beta' : '';

    this.setState({
      beta,
    });


    this.targetElement = document.querySelector('#navbarSupportedContent');

    function showBsDropdown() {
      $(this)
        .find('.dropdown-menu')
        .first()
        .stop(true, true)
        .slideDown(225);
    }

    $('.dropdown').on('show.bs.dropdown', showBsDropdown);

    function hideBsDropdown() {
      $(this)
        .find('.dropdown-menu')
        .stop(true, true)
        .slideUp(225);
    }

    $('.dropdown').on('hide.bs.dropdown', hideBsDropdown);
  } // end componentDidMount

  componentWillUnmount() {
    clearAllBodyScrollLocks();
  }

  getCookie = (a) => {
    if (typeof document !== 'undefined') {
      const b = document.cookie.match(`(^|;)\\s*${a}\\s*=\\s*([^;]+)`);
      return b ? b.pop() : '';
    }
    return false;
  } // end getCookie

  // click out search results box
  onClickOut = () => {
    const searchInput = document.getElementsByClassName('ais-SearchBox-input')[0].value;
    if (searchInput !== '') {
      this.setState(() => ({
        hasInput: false,
      }));
    }
  } // end onClickOut

  showTargetElement() {
    const toggler = document.querySelector('.navbar-toggler').getAttribute('aria-expanded');
    // const signInButton = document.querySelector('.mobile-sign-in');
    // const cookie = getCookie('getpostmanlogin');
    const messageBarAlertTop = document.getElementById(
      'message-bar-alert-top',
    ) || { style: { display: '' } };
    // if (cookie !== 'yes') {
    //   signInButton.classList.toggle('show');
    // }
    if (toggler === 'true') {
      disableBodyScroll(this.targetElement);
    }
    if (!messageBarAlertTop.style.display) {
      messageBarAlertTop.style.display = 'none';
    } else {
      messageBarAlertTop.style.display = '';
    }
  } // end showTargetElement

  hideTargetElement() {
    const toggler = document
      .querySelector('.navbar-toggler')
      .getAttribute('aria-expanded');
    // const signInButton = document.querySelector('.mobile-sign-in');
    // const cookie = getCookie('getpostmanlogin');
    // if (cookie !== 'yes') {
    //   signInButton.classList.toggle('hide');
    // }
    if (toggler === 'false') {
      enableBodyScroll(this.targetElement);
    }
  } // end hideTargetElement


  render() {
    const { refresh, hasInput, beta } = this.state;
    // isToggledOn,
    return (
      <>
        <nav
          style={{ zIndex: '9999' }}
          className="navbar-v6 navbar navbar-expand-lg navbar-light bg-light"
        >
          <a className="navbar-brand" href="/">
            <img
              className="img-fluid"
              src={postmanLogo}
              alt="Postman"
              width="32"
              height="32"
            />
          </a>
          <button
            onClick={() => {
              this.showTargetElement();
              this.hideTargetElement();
            }}
            className="mobile-sign-in navbar-toggler"
            data-test="mobileNavToggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="##"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Product
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="https://www.postman.com/api-repository/">
                    API Repository
                  </a>
                  <a className="dropdown-item" href="https://www.postman.com/tools/">
                    Tools
                  </a>
                  <a className="dropdown-item" href="https://www.postman.com/intelligence/">
                    Intelligence
                  </a>
                  <a className="dropdown-item" href="https://www.postman.com/workspaces/">
                    Workspaces
                  </a>
                  <a className="dropdown-item" href="https://www.postman.com/integrations/">
                    Integrations
                  </a>
                  <a className="dropdown-item" href="https://www.postman.com/what-is-postman/">
                    What is Postman?
                  </a>
                  <a className="dropdown-item app-cta" href="https://www.postman.com/downloads/">
                    Get Started Free →
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.postman.com/pricing/">
                  Pricing
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="##"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Enterprise
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="https://www.postman.com/postman-enterprise/">
                    Postman Enterprise
                  </a>
                  <a className="dropdown-item" href="https://www.postman.com/case-studies/">
                    Enterprise Case Studies
                  </a>
                  <a className="dropdown-item" href="https://www.postman.com/company/contact-us/">
                    Contact Us
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="##"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Resources &amp; Support
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <div className="row dropdown-col-menu">
                    <div className="col-sm-6 col-md-4 dropdown-col">
                      <h6 className="dropdown-header">Learning</h6>
                      <a className="dropdown-item" href="https://www.postman.com/postman-enterprise/">
                        Postman Enterprise
                      </a>
                      <a className="dropdown-item" href="https://www.postman.com/case-studies/">
                        Enterprise Case Studies
                      </a>
                      <a className="dropdown-item" href="https://www.postman.com/company/contact-us/">
                        Contact Us
                      </a>
                    </div>
                    <div className="col-sm-6 col-md-4 dropdown-col">
                      <h6 className="dropdown-header">
                        Community &amp; Events
                      </h6>
                      <a className="dropdown-item" href="https://www.postman.com/webinars/">
                        Webinars
                      </a>
                      <a
                        className="dropdown-item"
                        href="https://www.postman.com/events/breaking-changes/"
                      >
                        Breaking Changes Show
                      </a>
                      <a
                        className="dropdown-item"
                        href="https://www.postman.com/events/postman-space-camp/"
                      >
                        Postman Space Camp
                      </a>
                      <a className="dropdown-item" href="https://www.postman.com/case-studies/">
                        Case Studies
                      </a>
                    </div>
                    <div className="col-sm-6 col-md-4 dropdown-col">
                      <h6 className="dropdown-header">Support</h6>
                      <a className="dropdown-item" href="https://www.postman.com/support/">
                        Support Center
                      </a>
                      <a
                        className="dropdown-item"
                        href="https://www.postman.com/support/resellers-support/"
                      >
                        Reseller Support
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.postman.com/explore/">
                  API Network
                </a>
              </li>
            </ul>
            <div className="form-inline my-2 my-lg-0">
              <LoginCheck cookie={this.getCookie('getpostmanlogin')} beta={beta} />
              {/* <LoginButton
                data={{ cookie, beta }}
                className="pingdom-transactional-check__sign-in-button nav-link"
              /> */}

              {/* <SignUpDownloadButton data={{ cookie, beta }} /> */}
            </div>
          </div>
        </nav>
        <nav className="navbar-v6 navbar sticky-top navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">
            <span className="contextual-home-link nav-link uber-nav">
              Learning Center
              <span className="sr-only">(current)</span>
            </span>
          </a>
          <button
            onClick={() => {
              this.showTargetElement();
              this.hideTargetElement();
            }}
            className="mobile-sign-in navbar-toggler"
            data-test="mobileNavTogglerBottom"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContentBottom"
            aria-controls="navbarSupportedContentBottom"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContentBottom">
            <ul className="property-context-menu navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link uber-nav" href="/docs/getting-started/introduction/">
                  Docs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link uber-nav" href="/docs/administration/managing-your-team/managing-your-team/">
                  Admin
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link uber-nav mr-3" href="/docs/developer/resources-intro/">
                  Developer
                </a>
              </li>
            </ul>
            {/* Aloglia Widgets */}
            <div className="form-inline header__search">
              <label htmlFor="search-lc">
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
              </label>
              <ClickOutHandler onClickOut={this.onClickOut}>
                <InstantSearch searchClient={searchClient} indexName="docs" refresh={refresh}>
                  <Configure hitsPerPage={5} />

                  {/* forcefeed className because component does not accept natively as prop */}
                  <SearchBox
                    className="searchbox"
                    class="ais-SearchBox-input"
                    submit={<></>}
                    reset={<></>}
                    translations={{
                      placeholder: 'Search Postman Docs',
                    }}
                    onKeyUp={(event) => {
                      this.setState({
                        hasInput: event.currentTarget.value.length > 2,
                      });
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
                          <Pagination />
                        </div>
                      </div>
                    </div>
                  </div>
                </InstantSearch>
              </ClickOutHandler>
            </div>
            {/* <form className="form-inline my-2 my-lg-0">
              <label htmlFor="search-lc">
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
              </label>
              <input
                className="form-control"
                id="search-lc"
                type="search"
                placeholder="Search Learning Center"
                aria-label="Search"
              />
            </form> */}
          </div>
        </nav>
      </>
    );
  }
}


// SignUpDownloadButton.propTypes = {
//   data: PropTypes.shape({
//     cookie: PropTypes.string.isRequired,
//     beta: PropTypes.string.isRequired
//   }).isRequired
// };

// LoginButton.propTypes = {
//   data: PropTypes.shape({
//     cookie: PropTypes.string.isRequired,
//     beta: PropTypes.string.isRequired
//   }).isRequired
// };

// LoginButtonMobile.propTypes = {
//   data: PropTypes.shape({
//     cookie: PropTypes.string.isRequired,
//     beta: PropTypes.string.isRequired
//   }).isRequired
// };


export default Header;
