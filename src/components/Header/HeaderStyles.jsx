import styled from 'styled-components';

export const PrimaryNavbarV6 = styled.div`
    background-color: ${(props) => props.theme.colors.grey_00};
    z-index: 2147483647;
    border-bottom: 1px solid ${(props) => props.theme.colors.grey_30};
    .activeMenu {
      background-color: ${(props) => props.theme.colors.grey_00};
      position: relative;
      border-bottom: 1px solid ${(props) => props.theme.colors.grey_30};
      z-index: 2147483647;
    }

    .navbar {
      padding: 8px 16px;
      font-family: Inter;
    }
  `
  export const SecondaryNavbarV6 = styled.div`
    background-color: ${(props) => props.theme.colors.grey_00};
    backdrop-filter: blur(64px);
    top: 100;
    z-index: 1020;
    border-bottom: 1px solid ${(props) => props.theme.colors.grey_30};
    

    .activeMenu {
      background-color: ${(props) => props.theme.colors.grey_00};
      z-index: 99;
      width: 100%;
      margin-top:-1px;
    }
    
    &.sticky { 
      position: sticky;
      top: -0.1px;
      z-index: 1020;
      margin: 0px;
    }

    @supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
      &.blurred-container {
        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);
      }
    }
    .navbar {
      padding: 4px 16px;
    }
    /* slightly transparent fallback for Firefox (not supporting backdrop-filter) */
    @supports not ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
      &.blurred-container {
        background-color: ${(props) => props.theme.colors.grey_00};
      }
    }
  
  `
export const NavStyles = styled.nav`

   .navbar-nav .nav-link,
   a {
     font-weight: 600;
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
     color: ${(props) => props.theme.forms.text} !important;
     font-size: 14px;
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
       top: 49px;
       background-color: ${(props) => props.theme.colors.grey_00};
       padding: 0 16px 32px 16px;
       -webkit-transition: all 0.2s ease;
       -o-transition: all 0.2s ease;
       -ms-transition: all 0.2s ease;
       transition: all 0.2s ease;
     }
   }  



 #icon-wrap-two {
   margin-top: 6px;
 }
 #navbar-chevron-icons {
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

 export const DropdownStylesSecond = styled.div`


 li {
  list-style: none;
 }

 li > a:hover {
   text-decoration: none;
 }

 /* Navbar A tag elements */
   & .nav-link {
 
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
   }

  .dropdown-menu, div.dropdown-menu.show {
    min-width: 10rem;
    max-width: 59rem;  
    border-radius: 10px;
    border: 1px solid #EDEDED !important;
    box-shadow: 0 16px 24px -8px rgb(0 0 0 / 24%);
  }
  .dropdown-menu.lc-iconic {
    padding: 16px;

    & ul {
      margin: 0;
      padding: 0;
    }

    & .lc-icon {
      padding: 0;
    }

    & img {
      padding-top: 2px;
      @media screen and (min-width: 385px) {
        padding-top: 8px;
      }
    }

    & .arrow-icon {
      -webkit-transform: rotate(270deg);
      -ms-transform: rotate(270deg);
      transform: rotate(270deg);
      height: .8rem;
    }
  }

  .nav-link.navbar-brand {
    color: #212121 !important;
  }
  .navbar-brand > svg {
    /* SVG Arrow Icon next to Nav Link */
      display: inline-block;
      margin-left: 20px;
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

  .dropdown-item-text-wrap {
    white-space: normal;
  }

  .dropdown-item:active {
    background-color: #F9F9F9;
    color: #707070;
  }

  .dropdown-item > .no-hover:hover {
    background-color: transparent !important;
  }

  .navbar-brand {
    letter-spacing: -0.25px;
    line-height: 1.4;
    font-weight: 600;
    padding-left: 0 !important;
    font-size: 16px;
    // position: static;

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

  .dropdown-menu {
    /* Mobile Dropdown */
    background-color: ${(props) => props.theme.colors.grey_00};
    border: none;
    padding: 0 0 16px 24px;
    line-height: 20px;
    font-size: 1.4rem;

    /* Web Dropdown */
    @media screen and (min-width: 992px) {
      background-color: ${(props) => props.theme.colors.grey_00};
      border-radius: ${(props) => props.theme.borderRadius.medium};
      padding: 16px;
    }
  }

  .dropdown-header {
    padding: 5px 15px;
    color: #212121;
    font-size: 16px !important;
    -webkit-letter-spacing: -0.24px;
    -moz-letter-spacing: -0.24px;
    -ms-letter-spacing: -0.24px;
    letter-spacing: -0.24px;
    line-height: 1.4;
    font-weight: 600;
    margin-bottom: 0px;
    white-space: normal;
  }


  .nav-drop {
    letter-spacing: normal;
     color: ${(props) => props.theme.grey_90} !important;
     font-size: 14px;
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
  }
 `

export const DropdownStyles = styled.div`
     /* Individual Dropdown Item */

     line-height: 20px;
     z-index: 2147483650;
     padding: 16px;
     border-radius: ${(props) => props.theme.borderRadius.medium};
     border: 1px solid ${(props) => props.theme.colors.grey_20};
     box-shadow: 0 16px 24px -8px rgb(0 0 0 / 24%);

    .dropdown-item {
      padding: 8px 6px;
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
      font-weight: 600;
    }
  }
  .dropdown-menu {
    /* Mobile Dropdown */
    background-color: ${(props) => props.theme.colors.grey_00};
    border: none;
    padding: 0 0 16px 24px;
    line-height: 20px;
    font-size: 1.4rem;

    /* Web Dropdown */
    @media screen and (min-width: 992px) {
      background-color: ${(props) => props.theme.colors.grey_00};
      border-radius: ${(props) => props.theme.borderRadius.medium};
      padding: 16px
    }
  }
   .dropdown-col-menu {
    width: 100%;
    @media screen and (min-width: 992px) {
      width: 64rem;
    }
  }
   .dropdown-col {
    padding: 0 12px;
    @media screen and (max-width: 991px) {
      margin-bottom: 2rem;
    }
  }
  .dropdown-col:first-child {
    max-width: 30%;
  }

  .dropdown-header {
    padding: 5px;
    color: ${(props) => props.theme.colors.grey_90};
    font-size: 1.6rem;
    letter-spacing: -0.24px;
    line-height: 1.4;
    font-weight: 600;
    margin-bottom: 0px;
  }
`


export const CTAButton = styled.div` 
margin-left: 10px; 
@media (min-width: 1008px) {
margin-left: 0px;
}
    // Orange Button (Sign Up / Launch Postman)
a.button__sign-up {
  align-items: center;
  appearance: none;
  border-radius: ${(props) => props.theme.borderRadius.small};
  cursor: pointer;
  display: inline-flex;
  font-size: 14px;
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
    /* display: block; */
    margin: 8px 16px;
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
    background-color: ${(props) => props.theme.colors.grey_00};
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, .64)  inset  !important;;
    text-decoration: none;
  }
  &:focus {
    outline: 0;
  }

  @media (max-width: 1004px) {
    margin: 4px;
  }
}
`



