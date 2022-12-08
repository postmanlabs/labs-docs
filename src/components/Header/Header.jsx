import React, { useEffect, useState } from 'react';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import $ from 'jquery';
import {PrimaryNavbarV6, SecondaryNavbarV6, NavStyles, DropdownStyles, CTAButton} from './HeaderStyles.jsx' ;

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

const Header = (props) => {

  const [beta, setBeta] = useState('');
  const [cookie, setCookie] = useState('');
  const [hidden, setHidden] = useState(true);
  const [data, setData] = useState(navbarDataLocal);
  const [visibleHelloBar] = useState();

  useEffect(() => {
    const cookie = getCookie('getpostmanlogin');
    const beta = window.location.host.includes('postman-beta') ? '-beta' : '';

    setCookie(cookie);
    setBeta(beta);

    if (process.env.NODE_ENV === 'production') { 
      setData(navbarData); // gets data fron bff generated file
    }

    const { waitBeforeShow } = props;

    setTimeout(() => {
      setHidden(false)
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
  }, [])

 const showTargetElement = () => {
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
      icon1.classList.remove('open');
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

  const hideTargetElement = () => {
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
      // addlock CSS to body to enable scroll
      body.classList.add('lock');
      // Flip down dropdown icon
      icon1.classList.add('open');
    } else {
      // Remove lock CSS to body to disable scroll
      body.classList.remove('lock');
    }
    const icon2 = document.getElementById('navbar-chevron-icons');
    const togglerSecondary = document
      .getElementById('secondaryNav')
      .getAttribute('aria-expanded');
    if (togglerSecondary === 'false') {
      icon2.classList.remove('open');
    }
  }

  const showTargetElementLC = () => {
    // LC Mobile Icon Transition
    const togglerSecondary = document
      .getElementById('secondaryNav')
      .getAttribute('aria-expanded');
    const toggleChevron = document.getElementById('navbar-chevron-icons');
    if (togglerSecondary === 'true') {
      toggleChevron.classList.add('open');
    }
  }

  const hideTargetElementLC = () => {
    const toggleChevron = document.getElementById('navbar-chevron-icons');
    const togglerSecondary = document
      .getElementById('secondaryNav')
      .getAttribute('aria-expanded');
    if (togglerSecondary === 'false') {
      toggleChevron.classList.remove('open');
    }
  }
  /* eslint-enable class-methods-use-this */

  return (
    <>
      <PrimaryNavbarV6 className="navbar-v6 ">
        <NavStyles className="navbar navbar-expand-lg navbar-light nav-primary ">
          <a className="navbar-brand" href="https://www.postman.com">
            <div className="navbar-logo-container">
              <img src="https://voyager.postman.com/logo/postman-logo-icon-orange.svg" alt="Postman" width="32" height="32" />
            </div>
          </NavStyles>
        </PrimaryNavbarV6>
        <SecondaryNavbarV6 className="navbar-v6 sticky ">
          <NavStyles className="navbar navbar-expand-lg navbar-light nav-secondary blurred-container">
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
              </ul>
            </div>
          </NavStyles>
        </SecondaryNavbarV6>
      </>
    );
  }
}

export default Header;
