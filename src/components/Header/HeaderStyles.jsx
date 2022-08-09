import styled from 'styled-components';

export const HeaderWrapper = styled.div`
.navbar-v6 {
  background-color: ${(props) => props.theme.colors.grey_00} !important;
  margin: 0;
  font-family: ${(props) => props.theme.fonts.Inter};
  font-weight: 400;

  &.nav-primary {
    background-color: ${(props) => props.theme.colors.grey_00};
    z-index: 2147483647;
    padding: 6px 16px;
    border-bottom: 1px solid ${(props) => props.theme.colors.grey_30};
    &.activeMenu {
      background-color: ${(props) => props.theme.colors.grey_00};
      position: relative;
      z-index: 2147483647;
    }
  }
  &.nav-secondary {
    backdrop-filter: blur(64px);
    position: sticky;
    padding: 4px 16px;
    top: 0;
    z-index: 1020;
    border-bottom: 1px solid ${(props) => props.theme.colors.grey_30};

    &.activeMenu {
      background-color: ${(props) => props.theme.colors.grey_00};
      z-index: 99;
      width: 100%;
    }
    &.sticky {
      position: sticky;
      top: 0;
      z-index: 1020;
    }

    @supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
      &.blurred-container {
        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);
      }
    }
    
    /* slightly transparent fallback for Firefox (not supporting backdrop-filter) */
    @supports not ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
      &.blurred-container {
        background-color: ${(props) => props.theme.colors.grey_00};
      }
    }
 
  }

  .navbar-nav .nav-link,
  a {
    font-family: ${(props) => props.theme.fonts.Inter};
    font-weight: 400;
  }

  /* Ul */
  & .navbar-nav {
    max-height: 100px;
    margin: 0;
    @media (max-width: 991px) {
      margin-bottom: 24px;
      margin: 0;
      max-height: none;
    }
  }

  /* Postman Logo and Home Logo switching */
  & .navbar-brand {
    align-items: center;
    display: flex;
    margin-bottom: 0;
    margin-right: 10px !important;
    /* Container */
    & .navbar-logo-container {
      width: 32px;
      height: 32px;
      z-index: 9999;
      position: relative;
    }
  }
  /* Second Nav - Learning Center Link */
  & #learning-center-home-link {
    color: ${(props) => props.theme.colors.grey_90} !important;
    font-family: ${(props) => props.theme.fonts.Inter};
    font-weight: 600;
    font-size: 16px;
    letter-spacing: -0.25px;
    line-height: 1.4;
    font-weight: 600;
    padding-left: 0 !important;

    &:hover {
      border: none;
      color: ${(props) => props.theme.colors.blue_70} !important;
    }
  }
  /* Navbar A tag elements */
  & .nav-link {
    letter-spacing: normal;
    color: ${(props) => props.theme.colors.grey_50} !important;
    font-size: 14px;
    font-family: ${(props) => props.theme.fonts.Inter};
    font-weight: 600;
    transition: color 0.2s ease-in-out;
    -webkit-transition: color 0.2s ease-in-out;
    -o-transition: color 0.2s ease-in-out;
    -ms-transition: color 0.2s ease-in-out;
    padding: 6px 16px;
    &:hover {
      border-bottom: none;
      color: ${(props) => props.theme.colors.grey_50} !important;
    }

    &:focus {
      outline: none;
    }

    &:link,
    &:active {
      font-family: ${(props) => props.theme.fonts.Inter};
      font-weight: 600;
      padding: 6px 6px 6px 16px;
      /* Learning Center Nav Positioning */
      &.uber-nav {
        padding: 6px 16px;
        @media screen and (max-width: 992px) {
          padding: 6px 0px;
        }
      }
    }
    /* Hide Default Arrow */
    &:after {
      display: none;
    }

    /* SVG Arrow Icon next to Nav Link */
    > svg {
      display: inline-block;
      margin-left: 6px;
      width: 10px;
      -webkit-transition: 0.1s ease-in-out;
      -o-transition: 0.1s ease-in-out;
      transition: 0.1s ease-in-out;
      -ms-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
      /* Arrow Transitions Up on .show */
      &.show {
        display: inline-block;
        transform: rotate(180deg);
        -ms-transform: rotate(180deg);
        -webkit-transform: rotate(180deg);
        -webkit-transition: 0.1s ease-in-out;
        -o-transition: 0.1s ease-in-out;
        transition: 0.1s ease-in-out;
      }

      @media screen and (max-width: 992px) {
        float: right;
        margin-right: 17px;
        position: relative;
        top: 8px;
      }

      &:active,
      &:focus {
        outline: none;
      }
    }
  }

  button {
    border: none !important;
    border: 0;
    font-size: 24px;
    background: none !important;
    padding: 0;

    &:focus {
      outline: none;
    }
  }
  .navbar-toggler-icon {
    width: 24px;
    margin: auto 0;
  }
  /* Icon Transition to X */
  span.navbar-toggler-icon {
    background-image: none !important;
  }

  div.icon-bar {
    position: relative;
    height: 30px;
    width: 24px;
    margin: auto;
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
    -ms-transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
    -o-transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
    -webkit-transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
    transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
    cursor: pointer;

    span {
      display: block;
      position: absolute;
      height: 2px;
      width: 24px;
      background: ${(props) => props.theme.colors.grey_50};
      border-radius: ${(props) => props.theme.borderRadius.small};
      opacity: 1;
      left: 0;
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
      -ms-transition: all 0.1s ease;
      -webkit-transition: all 0.1s ease;
      -o-transition: all 0.1s ease;
      transition: all 0.1s ease;

      &:nth-child(1) {
        top: 10px;
      }

      &:nth-child(2),
      &:nth-child(3) {
        top: 18px;
      }

      &:nth-child(4) {
        top: 26px;
      }
    }

    &.open {
      right: 0px;

      span {
        &:nth-child(1) {
          top: 18px;
          left: 50%;
          width: 0%;
          visibility: hidden;
          -webkit-transform: rotate(45deg);
          -ms-transform: rotate(45deg);
          transform: rotate(45deg);
        }

        &:nth-child(2) {
          -webkit-transform: rotate(45deg);
          -ms-transform: rotate(45deg);
          transform: rotate(45deg);
        }

        &:nth-child(3) {
          -webkit-transform: rotate(-45deg);
          -ms-transform: rotate(-45deg);
          transform: rotate(-45deg);
        }

        &:nth-child(4) {
          top: 18px;
          width: 0%;
          left: 50%;
          -webkit-transform: rotate(-45deg);
          -ms-transform: rotate(-45deg);
          transform: rotate(-45deg);
          visibility: hidden;
        }
      }
    }
  }
  
 
  /* Learning Center Link */
  & .property-context-menu {
    & .nav-link:link,
    .nav-link:active {
      font-family: ${(props) => props.theme.fonts.Inter};
      font-weight: 400 !important;
    }
  }
  li.nav-item{
    padding: 0;
    margin-bottom: 4px !important;
  }
  @media screen and (max-width: 991px) {
    /* Global Nav */
    #navbarSupportedContent.navbar-collapse {
      -webkit-overflow-scrolling: touch;
      top: 47px;
      padding-top: 20px;
      z-index: 999999999;
      width: 100%;
      left: 0;
      position: fixed;
      right: 0;
      bottom: 0;
      left: 0;
      background: ${(props) => props.theme.colors.grey_00};
      -webkit-transition: height 0.2s linear;
      -o-transition: height 0.2s linear;
      -ms-transition: height 0.2s linear;
      transition: height 0.2s linear;
      &.collapsing {
        position: fixed;
        top: 47px;
      }
      &.show {
        top: 47px;
        overflow-y: auto !important;
        overflow-x: hidden !important;
        height: 100vh;
      }
      /* Hellobar Disabled */
      &.show.noBar {
        top: 47px;
        overflow-y: auto !important;
        overflow-x: hidden !important;
        height: 100vh;
      }
    }
    /* LC Nav */
    #navbarSupportedContentBottom.navbar-collapse {
      position: absolute;
      right: 0;
      left: 0;
      width: 100%;
      top: 52px;
      background-color: ${(props) => props.theme.colors.grey_00};
      padding: 0 16px 16px 16px;
      -webkit-transition: all 0.2s ease;
      -o-transition: all 0.2s ease;
      -ms-transition: all 0.2s ease;
      transition: all 0.2s ease;
    }
  }  
}

/* Used for Nav Bars (Do not remove) */
@media screen and (max-width: 992px) {
  /* Used for Global Nav */
  body {
    &.lock {
      position:fixed;
    }
  }
   /* Used for Learning Center Nav */
  body.menu-open:after {
    content: '';
    display: block;
    position: fixed;
    top: 0; bottom: 0; left: 0; right: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background: rgba(0,0,0,0.7);
  }
}

#icon-wrap-two {
  margin-top: 6px;
}
#navbar-chevron-icons{
  color: ${(props) => props.theme.colors.grey_50};
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.3s ease-in;
    -o-transition: 0.3s ease-in;
    transition: 0.3s ease-in;
    &.open {
      -webkit-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
      transform: rotate(180deg);
      -webkit-transition: 0.3s ease-in;
      -o-transition: 0.3s ease-in;
      transition: 0.3s ease-in;
  }
}
`

export const DropdownStyles = styled.div`
     /* Individual Dropdown Item */
     padding: 16px;
    .dropdown-item {
      padding: 8px 16px;
      font-family: ${(props) => props.theme.fonts.Inter};
      font-weight: 400;
      font-size: 14px;

    &:focus,
    &:active {
      background-color: ${(props) => props.theme.colors.grey_05};
      color:${(props) => props.theme.colors.grey_50};
    }

    /* Get Started for Free link */
    &.app-cta {
      color: ${(props) => props.theme.colors.blue_60};
      font-family: ${(props) => props.theme.fonts.Inter};
      font-weight: 600;
    }
  }
  .dropdown-menu {
    /* Mobile Dropdown */
    background-color: ${(props) => props.theme.colors.grey_00};
    border: none;
    padding: 0 0 16px 24px;
    line-height: 20px;
    font-size: 14px;
    /* Web Dropdown */
    @media screen and (min-width: 992px) {
      box-shadow: 0 16px 24px -8px rgba(0, 0, 0 , 0.24);
      background-color: ${(props) => props.theme.colors.grey_00};
      border-radius: ${(props) => props.theme.borderRadius.small};
      border: 1px solid ${(props) => props.theme.colors.grey_20};
    }
  }
   .dropdown-col-menu {
    width: 100%;
    @media screen and (min-width: 992px) {
      width: 38rem;
    }
  }
   .dropdown-col {
    @media screen and (max-width: 991px) {
      margin-bottom: 2rem;
    }
  }

  .dropdown-header {
    color: ${(props) => props.theme.colors.grey_50};
    font-size: 16px;
    font-family: ${(props) => props.theme.fonts.Inter};
    letter-spacing: -0.24px;
    line-height: 1.4;
    font-weight: 600;
    margin-bottom: 0px;
    padding: 12px;
  }
  /* Searchbox */
  & form {
    @media screen and (max-width: 992px) {
      display: inline-block;
      margin-top: 16px;
      margin-left: -8px;
    }
  }

  & input[type="search"] {
    background-color: transparent;
    border-color: ${(props) => props.theme.colors.grey_90};;
    border-width: 1px;
    font-size: 13px;
    padding: 4px 24px 4px 28px;
    height: 32px;
    margin: 0;
    width: 256px;
    border-radius: ${(props) => props.theme.borderRadius.small};
    &:focus {
      border: 1px solid ${(props) => props.theme.colors.blue_30};
      box-shadow: 0 0 0 2px ${(props) => props.theme.colors.blue_30};
      outline: none;
    }
    &::-webkit-input-placeholder {
      /* Chrome/Opera/Safari */
      color: ${(props) => props.theme.colors.grey_40};
    }
    &::-moz-placeholder {
      /* Firefox 19+ */
      color: ${(props) => props.theme.colors.grey_40};
    }
    &:-ms-input-placeholder {
      /* IE 10+ */
      color: ${(props) => props.theme.colors.grey_40};
    }
    &:-moz-placeholder {
      /* Firefox 18- */
      color: ${(props) => props.theme.colors.grey_40};
    }
  }
  & label {
    display: flex;
    margin: 0;
  }
  /* Search Icon */
  & svg.nav-search__icon {
    position: absolute;
    bottom: auto;
    margin-left: 8px;
    @media screen and (max-width: 992px) {
      position: relative;
      bottom: -9px;
      margin-left: -9px;
      left: 16px;
    }
  }
  :-webkit-direct-focus {
    outline-color: none;
    outline-style: auto;
    outline-width: 0;
  }



   /* Used for Learning Center Nav */
  body.menu-open:after {
    content: '';
    display: block;
    position: fixed;
    top: 0; bottom: 0; left: 0; right: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background: rgba(0,0,0,0.7);
  }
  

`

export const CTAButton = styled.div`
  // Orange Button (Sign Up / Launch Postman)
a.button__sign-up {
  align-items: center;
  appearance: none;
  border-radius: ${(props) => props.theme.borderRadius.small};
  cursor: pointer;
  display: inline-flex;
  font-size: 14px;
  font-family: ${(props) => props.theme.fonts.Inter};
  font-weight: 600;
  line-height: 1.75;
  padding: 4px 12px !important;
  user-select: none;
  color: ${(props) => props.theme.colors.grey_00};
  background-color: ${(props) => props.theme.colors.orange_50};
  background-image: none;
  border: none;
  box-shadow: none;
  border-radius: ${(props) => props.theme.borderRadius.small};
  transition: 0.2s ease-in-out;
  white-space: nowrap;
  outline: 0;
  text-align: center;
  margin: 0;
  transition: background-color 50ms ease-in-out, border-color 50ms ease-in-out;

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.colororange_60};
    text-decoration: none;
  }

  &:focus {
    outline: 0 !important;
  }

  @media (max-width: 480px) {
    display: block;
  }
};

// Sign In Button
a.button__sign-in {
  align-items: center;
  appearance: none;
  border-radius: ${(props) => props.theme.borderRadius.small};
  cursor: pointer;
  display: inline-flex;
  font-size: 14px !important;
  font-family: ${(props) => props.theme.fonts.Inter};
  font-weight: 600;
  line-height: 1.75;
  padding: 4px 12px !important;
  user-select: none;
  color: ${(props) => props.theme.colors.grey_90};
  background-color: ${(props) => props.theme.colors.grey_00};
  background-image: none;
  border: none;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.24) inset !important;
  outline: 0;
  text-align: center;
  margin: 0 8px 0 0;
  &:hover,
  &:active {
    background-color: $white;
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, .64)  inset  !important;;
    text-decoration: none;
  }
  &:focus {
    outline: 0;
  }

  @media (max-width: 992px) {
    margin-left: 16px;
  }
}
`

export const AlgoliaWidgets = styled.div`
  
// Algolia Search Styling
// the result styling is in _search.scss
.searchbox {
  ::placeholder {
    color:  ${(props) => props.theme.colors.blue_90};
  }




}
 form {
    @media screen and (max-width: 992px) {
      display: inline-block;
      margin-top: 16px;
      margin-left: -8px;
    }
  }

  & input[type="search"] {
    background-color: transparent;
    border-color: rgba(0, 0, 0, 0.24);
    border-width: 1px;
    font-size: 13px;
    padding: 4px 24px 4px 28px;
    height: 32px;
    margin: 0;
    width: 256px;
    border-radius: ${(props) => props.theme.borderRadius.small};
    &:focus {
      border: 1px solid ${(props) => props.theme.colors.blue_30};
      box-shadow: 0 0 0 2px ${(props) => props.theme.colors.blue_30};
      outline: none;
    }
    &::-webkit-input-placeholder {
      /* Chrome/Opera/Safari */
      color: ${(props) => props.theme.colors.grey_40};
    }
    &::-moz-placeholder {
      /* Firefox 19+ */
      color: ${(props) => props.theme.colors.grey_40};
    }
    &:-ms-input-placeholder {
      /* IE 10+ */
      color: ${(props) => props.theme.colors.grey_40};
    }
  }
  label {
    display: flex;
    margin: 0;
  }
  /* Search Icon */
  svg.nav-search__icon {
    position: absolute;
    bottom: auto;
    margin-top: -12px;
    margin-left: 28px;
    @media screen and (max-width: 992px) {
      position: relative;
      bottom: auto;
      margin-left: -9px;
      left: 36px;
    }
  }
  :-webkit-direct-focus {
    outline-color: none;
    outline-style: auto;
    outline-width: 0;
  }
`