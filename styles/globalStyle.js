import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
/* DO NOT EDIT MINIFIED NORMAILZE CSS */
/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type="button"],[type="reset"],[type=submit],button{-webkit-appearance:button}[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type="button"]:-moz-focusring,[type=reset]:-moz-focusring,[type="submit"]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}
/* END - DO NOT EDIT */

:root {
  --spacing-0: 0;
  --spacing-1: 8px;
  --spacing-2: 16px;
  --spacing-3: 24px;
  --spacing-4: 32px;
  --spacing-6: 48px;
  --spacing-8: 64px;
  --spacing-16: 128px;
}

@-moz-document url-prefix() {
  html {
    -moz-osx-font-smoothing: grayscale;
  }
}

html {
  /* Reset base font size to easily convert px to rem, i.e. 12px = 1.2rem */
  font-size: 10px;
  
  /* Disable auto-enlargement of small text in Safari */
  text-size-adjust: 100%;
  
  /* Make type rendering look crisper */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
/** 
  * Set our default font size and line height 
  */
body, p {
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica, Arial, sans-serif;
  color: #212121;
  font-feature-settings: "ss01", "onum", "zero";
  font-size: 16px;
  font-weight: 400;
  text-rendering: geometricPrecision;
  font-family: 'Inter-400', system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica, Arial, sans-serif;
  text-rendering: geometricPrecision;
}
p {
  margin: 0 0 24px 0;
}
/** 
  * Since form elements inherit OS defaults, 
  * font-family inheritence is defined to override that 
  */
button, input, optgroup, select, textarea {
  font-family: inherit;
}
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
code {
 font-family: 'IBM Plex Mono', SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace !important;
}


h1,
.h1,
h2,
.h2,
h3,
.h3 {
  font-family: 'Degular-Display-Semibold', system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica, Arial, sans-serif;
  font-weight: 600;
  font-feature-settings: 'kern' 1, 'ss01' 1, 'salt' 1;
}

h4,
.h4,
h5,
.h5,
h6,
.h6 {
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica, Arial, sans-serif;
  font-weight: 600;
}

h1,
.h1 {
  font-size: 48px;
  line-height: 1;
  letter-spacing: 0.64px;
  margin: 0 0 24px 0;

  @media (max-width: 576px) {
    font-size: 36px;
    line-height: 1;
    margin: 0 0 16px 0;
  }
}

h2,
.h2 {
  font-size: 36px;
  letter-spacing: 0.48px;
  line-height: 1.1666666667;
  margin: 0 0 16px 0;

  @media (max-width: 576px) {
    font-size: 28px;
    line-height: 1.1428571429;
  }
}

h3,
.h3 {
  font-size: 28px;
  letter-spacing: 0.64px;
  line-height: 1.1428571429;
  margin: 0 0 16px 0;

  @media (max-width: 576px) {
    font-size: 24px;
    letter-spacing: 0.64px;
    line-height: 1.5;
  }
}
h4,
.h4 {
  font-size: 20px;
  line-height: 1.4;
  letter-spacing: -0.32px;
  margin: 0 0 8px 0;
}

p {
  font-size: 16px;
  margin: 0 0 24px 0;
  line-height: 1.625;
}

.subtitle {
  font-size: 22px;
  letter-spacing: -0.36px;
  line-height: 32px;
  margin: 0 0 32px 0 !important;

  @media (max-width: 576px) {
    margin: 0 0 16px 0;
  }
}

strong,
.strong,
.bold,
.font-weight-bold {
  font-family: $Inter;
  font-weight: 600 !important;
}

// refresh 2021 layout changes
.container {
    padding-right: 24px;
    padding-left: 24px;
  @media screen and (max-width: 1199px) {
    max-width: 1199px !important; /* v5 was 1440px; v6 is 1199px */
    width: 100%;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1224px !important; /* v5 was 1440px; v6 is 1224px */
    width: 100%;
  }
}

.row {
  margin-right: -12px;
  margin-left: -12px;
}

.container-fluid, .container-lg, .container-md, .container-sm, .container-xl {
  padding-right: 12px;
  padding-left: 12px;
}

// Cookie Consent
.CookieWrapper {
  width: 550px;
  position: fixed;
  margin: 0 0 40px 40px;
  bottom: 0;
  left: 0;

  @media (max-width: 991px) {
    text-align:center;
    display:flex;
    justify-content:center;
    width: auto;
    max-width: 100%;
    height: auto;
    margin: 0 40px;
  }
}

// Hello Bar styling
.hellobar__container {
  background-color: #E7F0FF;
  min-height: 44px;
}

.hellobar__text { 
  min-height: 100%;
  margin: 0px;
  text-align: center;
  padding: 10px;
  color: #282828;
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica, Arial, sans-serif;
  font-weight: 600;
}

.hellobar__close-button {
  position: absolute;
  right: 20px;
  top: 8px;
  background-repeat: no-repeat;
  cursor: pointer; 
  -webkit-appearance: none !important;
  
}

.hellobar__postman-link {
  height: 24px;
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica, Arial, sans-serif;
  font-weight: 600;
  color: #282828;
  background-image: linear-gradient(180deg, transparent 50%, rgba(249,157,120,.5) 0);
  padding-right: 4px;
  padding-bottom: 2px;
  background-position-y: 2px;
  background-position-x: 4px;
  background-repeat: no-repeat;
  text-decoration: none;
  transition: .18s ease;

  &:hover {
    background-position: top 7px right -4px;
    padding-right: 4px;
    color: #282828;
    padding-bottom: 2px;
    text-decoration: none;
    background-image: linear-gradient(180deg, transparent 60%, rgba(249, 157, 120, 1) 0);
  }
}
.section {
  padding: 40px 0;
  margin-bottom: 0;
  font-size: 14px;
  @media (min-width: 768px) {
    padding: 80px 0;
  }
}

/* Padding below embed videos */
.gatsby-resp-iframe-wrapper {
  margin-bottom: 24px;
}

/*Modal Styles */
/*Modal is extracted out of DOM and placed under body tag. which means styles need to live in Global Styles*/
.modal-link {
  cursor: pointer;
}  
div.modal {
  z-index: 214748;
  background-color: rgba(0, 0, 0, 0.5) !important;
  display: none; 
  position: fixed; 
  justify-content: center;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%; 
  height: 100%;
  &.show {
    cursor: pointer;
  }
}

div.modal-dialog {
  max-width: 90%;
  justify-content: center;
  @media screen and (max-width: 576px){
    max-width: 100%;
  }
}

div.modal-content {
  background: none;
  border: none;
  width: auto;
  @media screen and (min-width: 576px){
    margin-top: 40px;
  }
}

img.modal-responsive {
  @media screen and (min-width: 576px){
    max-height: 75vh;
  }
}

.modal-close-button {
  button {
    border: none;
    padding: 0.5rem;
    border-radius: 5px;
  }
}

button.close {
  opacity: 1;
  margin-bottom: 0px;
  padding: 0;
  &:hover {
    background: transparent;
    transition: none;
  }
  &:focus {
    outline: none
  }
}
button.close:not(:disabled):not(.disabled):hover {
  opacity: 1;
}
`
export default GlobalStyle;