import React from 'react';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import Dropdown from './Dropdown';
import $ from 'jquery';
import {PrimaryNavbarV6, SecondaryNavbarV6, NavStyles, DropdownStyles, CTAButton} from './HeaderStyles.jsx' ;
import { SearchWrapperStyling } from '../Search/searchStyles.jsx';
// Get Cookie for Sign In toggler
const getCookie = (a) => {
  if (typeof document !== 'undefined') {
    const b = document.cookie.match(`(^|;)\\s*${a}\\s*=\\s*([^;]+)`);
    return b ? b.pop() : '';
  }
  return false;
};

// changes button in navbar based on cookie presence
const LoginCheck = (props) => {
  const { cookie, beta, hidden } = props;

  if (!hidden) {
    return (
      <CTAButton>
        <a
          href={`https://go.postman${beta}.co/build`}
          className={
            cookie !== 'yes'
              ? 'button__sign-in pingdom-transactional-check__sign-in-button'
              : 'd-none'
          }
          onClick={() => {
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
          className={cookie !== 'yes' ? 'button__sign-up' : 'd-none'}
          onClick={() => {
            trackCustomEvent({
              category: 'lc-top-nav',
              action: 'Click',
              label: 'sign-in-button-clicked',
            });
          }}
        >
          Sign Up for Free
        </a>
        <a
          href="https://go.postman.co/home"
          className={cookie ? 'button__sign-up ml-3' : 'd-none'}
        >
          Launch Postman
        </a>
      </CTAButton>
    );
  }
  return <></>;
};
class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      beta: '',
      cookie: '',
      hidden: true,
    };
  }

  componentDidMount() {
    const cookie = getCookie('getpostmanlogin');
    const beta = window.location.host.includes('postman-beta') ? '-beta' : '';

    this.setState({
      cookie,
      beta,
    });

    /* eslint-disable react/prop-types */
    const { waitBeforeShow } = this.props;
    /* eslint-enable react/prop-types */
    setTimeout(() => {
      this.setState({ hidden: false });
    }, waitBeforeShow);

    /* Applies styling for sticky nav */
    $('#secondaryNav').on('click', () => {
      $('body').toggleClass('menu-open');
      $('.nav-primary').toggleClass('activeMenu');
      $('.nav-secondary').toggleClass('activeMenu');
    });
    // Dropdown Slideup Animation
    function showBsDropdown() {
      $(this)
        .find('.dropdown-menu')
        .first()
        .stop(true, true)
        .slideDown(225);
      $(this)
        .find('.arrow-icon')
        .addClass('show');
    }
    $('.dropdown').on('show.bs.dropdown', showBsDropdown);
    // Dropdown Slidedown Animation
    function hideBsDropdown() {
      $(this)
        .find('.dropdown-menu')
        .stop(true, true)
        .slideUp(225);
      $(this)
        .find('.arrow-icon')
        .removeClass('show');
    }
    $('.dropdown').on('hide.bs.dropdown', hideBsDropdown);
  }

  showTargetElement = () => {
    // Show Sign In Button if user is not logged in (mobile)
    const cookie = getCookie('getpostmanlogin');
    const signInButton = document.querySelector('.mobile-sign-in');
    if (cookie !== 'yes') {
      signInButton.classList.toggle('show');
    }
    // Global Mobile Icon Transition
    const toggler = document
      .getElementById('globalNav')
      .getAttribute('aria-expanded');
    const body = document.querySelector('body');
    const icon1 = document.getElementById('icon-wrap-one');
    // Mobile Menu is active ?
    if (toggler === 'true') {
      // Add lock CSS to body to disable scroll
      body.classList.add('lock');
      // Flip up dropdown icon
      icon1.classList.add('open');
    }
    // Hellobar
    const messageBarAlertTop = document.getElementById(
      'message-bar-alert-top',
    ) || { style: { display: '' } };
    if (!messageBarAlertTop.style.display) {
      messageBarAlertTop.style.display = 'none';
    } else {
      messageBarAlertTop.style.display = '';
    }
  }

  hideTargetElement = () => {
    // Hide Sign In Button if user is not logged in (mobile)
    const signInButton = document.querySelector('.mobile-sign-in');
    const cookie = getCookie('getpostmanlogin');
    if (cookie !== 'yes') {
      signInButton.classList.toggle('hide');
    }
    const toggler = document
      .getElementById('globalNav')
      .getAttribute('aria-expanded');
    const body = document.querySelector('body');
    const icon1 = document.getElementById('icon-wrap-one');
    // Mobile Menu is not active ?
    if (toggler === 'false') {
      // Remove lock CSS to body to disable scroll
      body.classList.remove('lock');
      // Flip down dropdown icon
      icon1.classList.remove('open');
    }
    const icon2 = document.getElementById('navbar-chevron-icons');
    const togglerSecondary = document
      .getElementById('secondaryNav')
      .getAttribute('aria-expanded');
    if (togglerSecondary === 'false') {
      icon2.classList.remove('open');
    }
  }

  showTargetElementLC = () => {
    // LC Mobile Icon Transition
    const togglerSecondary = document
      .getElementById('secondaryNav')
      .getAttribute('aria-expanded');
    const toggleChevron = document.getElementById('navbar-chevron-icons');
    if (togglerSecondary === 'true') {
      toggleChevron.classList.add('open');
    }
  }

  hideTargetElementLC = () => {
    const toggleChevron = document.getElementById('navbar-chevron-icons');
    const togglerSecondary = document
      .getElementById('secondaryNav')
      .getAttribute('aria-expanded');
    if (togglerSecondary === 'false') {
      toggleChevron.classList.remove('open');
    }
  }
  /* eslint-enable class-methods-use-this */

  render() {
    const {
      beta, visibleHelloBar, cookie, hidden,
    } = this.state;
    return (
      <>
        <PrimaryNavbarV6 className="navbar-v6 ">
          <NavStyles className="navbar navbar-expand-lg navbar-light nav-primary">
          <a className="navbar-brand" href="https://www.postman.com">
            <div className="navbar-logo-container">
              <img src="https://voyager.postman.com/logo/postman-logo-icon-orange.svg" alt="Postman" width="32" height="32" />
            </div>
          </a>
          <button
            onClick={() => {
              this.showTargetElement();
              this.hideTargetElement();
            }}
            id="globalNav"
            className="mobile-sign-in navbar-toggler"
            data-test="mobileNavToggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <div
                id="icon-wrap-one"
                className="icon-bar"
                aria-expanded="false"
              >
                <span />
                <span />
                <span />
                <span />
              </div>
            </span>
          </button>
          <div
            id="navbarSupportedContent"
            className={`collapse navbar-collapse${!visibleHelloBar ? ' noBar' : ''
              }`}
          >
            <ul className="navbar-nav mr-auto ml-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="##"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Product
                  <svg
                    className="arrow-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="#6b6b6b"
                  >
                    <g>
                      <path d="M10.375,3.219,6,6.719l-4.375-3.5A1,1,0,1,0,.375,4.781l5,4a1,1,0,0,0,1.25,0l5-4a1,1,0,0,0-1.25-1.562Z" />
                    </g>
                  </svg>
                </a>
                <DropdownStyles
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a
                    className="dropdown-item"
                    href="https://www.postman.com/product/what-is-postman/"
                  >
                    What is Postman?
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://www.postman.com/product/api-repository/"
                  >
                    API repository
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://www.postman.com/product/tools/"
                  >
                    Tools
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://www.postman.com/product/intelligence/"
                  >
                    Intelligence
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://www.postman.com/product/workspaces/"
                  >
                    Workspaces
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://www.postman.com/product/integrations/"
                  >
                    Integrations
                  </a>
                  <a
                    className="dropdown-item app-cta"
                    href="https://www.postman.com/downloads/"
                  >
                    Get started free →
                  </a>
                </DropdownStyles>
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
                  <svg
                    className="arrow-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="#6b6b6b"
                  >
                    <g>
                      <path d="M10.375,3.219,6,6.719l-4.375-3.5A1,1,0,1,0,.375,4.781l5,4a1,1,0,0,0,1.25,0l5-4a1,1,0,0,0-1.25-1.562Z" />
                    </g>
                  </svg>
                </a>
                <DropdownStyles
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a
                    className="dropdown-item"
                    href="https://www.postman.com/postman-enterprise/"
                  >
                    Postman Enterprise
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://www.postman.com/case-studies/"
                  >
                    Enterprise case studies
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://www.postman.com/company/contact-sales/"
                  >
                    Contact sales
                  </a>
                </DropdownStyles>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="##"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Resources and support
                  <svg
                    className="arrow-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="#6b6b6b"
                  >
                    <g>
                      <path d="M10.375,3.219,6,6.719l-4.375-3.5A1,1,0,1,0,.375,4.781l5,4a1,1,0,0,0,1.25,0l5-4a1,1,0,0,0-1.25-1.562Z" />
                    </g>
                  </svg>
                </a>
                <DropdownStyles
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <div className="row dropdown-col-menu">
                    <div className="col-sm-6 col-md-4 dropdown-col">
                      <h6 className="dropdown-header">Learning</h6>
                      <a
                        className="dropdown-item"
                        href="/docs/getting-started/introduction/"
                      >
                        Docs
                      </a>
                      <a
                        className="dropdown-item"
                        href="https://www.postman.com/webinars/"
                      >
                        Webinars
                      </a>
                      <a
                        className="dropdown-item"
                        href="https://www.postman.com/events/breaking-changes/"
                      >
                        Breaking Changes show
                      </a>
                      <a
                        className="dropdown-item"
                        href="https://www.postman.com/events/postman-space-camp/"
                      >
                        Postman Space Camp
                      </a>
                      <a
                        className="dropdown-item"
                        href="https://www.postman.com/case-studies/"
                      >
                        Case studies
                      </a>
                      <a
                        className="dropdown-item"
                        href="https://www.postman.com/state-of-api/"
                      >
                        State of the API
                      </a>
                    </div>
                    <div className="col-sm-6 col-md-4 dropdown-col">
                      <h6 className="dropdown-header">Community and events</h6>
                      <a
                        className="dropdown-item"
                        href="https://blog.postman.com/"
                      >
                        Blog
                      </a>
                      <a
                        className="dropdown-item"
                        href="https://www.postman.com/community/"
                      >
                        Community
                      </a>
                      <a
                        className="dropdown-item"
                        href="https://www.postman.com/company/student-program/"
                      >
                        Student program
                      </a>
                      <a
                        className="dropdown-item"
                        href="https://www.postman.com/company/student-program/student-summit/"
                      >
                        Student Summit
                      </a>
                      <a
                        className="dropdown-item"
                        href="https://www.postman.com/postman-galaxy/"
                      >
                        Postman Galaxy
                      </a>
                      <a
                        className="dropdown-item"
                        href="https://www.postman.com/company/nonprofit/"
                      >
                        Postman for Nonprofits
                      </a>
                      <a
                        className="dropdown-item"
                        href="https://store.postman.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Postman swag
                      </a>
                    </div>
                    <div className="col-sm-6 col-md-4 dropdown-col">
                      <h6 className="dropdown-header">Support</h6>
                      <a
                        className="dropdown-item"
                        href="https://www.postman.com/support/"
                      >
                        Support Center
                      </a>
                      <a
                        className="dropdown-item"
                        href="https://www.postman.com/support/resellers-support/"
                      >
                        Reseller support
                      </a>
                      <a
                        className="dropdown-item"
                        href="https://status.postman.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Postman status
                      </a>
                      <a
                        className="dropdown-item"
                        href="https://www.postman.com/downloads/release-notes/"
                      >
                        Release notes
                      </a>
                      <a
                        className="dropdown-item"
                        href="https://www.postman.com/company/contact-us/"
                      >
                        Contact us
                      </a>
                    </div>
                  </div>
                </DropdownStyles>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.postman.com/explore">
                  Explore
                </a>
              </li>
            </ul>
            <div className="form-inline my-2 my-lg-0">
              <LoginCheck
                hidden={hidden}
                waitBeforeShow={100}
                cookie={cookie}
                beta={beta}
                className="pingdom-transactional-check__sign-in-button"
              />
            </div>
          </div>
          </NavStyles>
        </PrimaryNavbarV6>
        <SecondaryNavbarV6 className="navbar-v6 sticky ">
          <NavStyles  className="navbar navbar-expand-lg navbar-light nav-secondary blurred-container">
          <a
            className="navbar-brand"
            href="/docs/getting-started/introduction/"
          >
            <span id="learning-center-home-link" className="nav-link uber-nav">
              Learning Center
              <span className="sr-only">(current)</span>
            </span>
          </a>
          <button
            onClick={() => {
              this.showTargetElementLC();
              this.hideTargetElementLC();
            }}
            id="secondaryNav"
            className="mobile-sign-in navbar-toggler"
            data-test="mobileNavTogglerBottom"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContentBottom"
            aria-controls="navbarSupportedContentBottom"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <div
                id="icon-wrap-two"
                aria-expanded="false"
              >
                <svg id="navbar-chevron-icons" width="20" height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L10 10L19 1" stroke="#6B6B6B" strokwidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContentBottom"
          >
            <ul className="property-context-menu navbar-nav ml-auto">
              <li className="nav-item">
                <a
                  className="nav-link uber-nav"
                  href="/docs/getting-started/introduction/"
                >
                  Docs
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link uber-nav"
                  href="/docs/administration/managing-your-team/managing-your-team/"
                >
                  Admin
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link uber-nav mr-3"
                  href="/docs/developer/resources-intro/"
                >
                  Developer
                </a>
              </li>
            </ul>
            {/* Aloglia Widgets */}
            <SearchWrapperStyling className="form-inline header__search">
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
            
              <Dropdown />
            </SearchWrapperStyling>
          </div>
          </NavStyles>
        </SecondaryNavbarV6>
        </>
    );
  }
}

export default Header;
