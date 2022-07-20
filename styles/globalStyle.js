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
  color: #212121;
  font-feature-settings: "calt" 0;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.16px;
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica, Arial, sans-serif;
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
  font-weight: 600 !important;
}
.h1,
h1 {
  font-size: 36px;
  line-height: 1;
  letter-spacing: 0.64px;
  margin: 0 0 16px 0;

  @media (min-width: 576px) {
    font-size: 48px;
    line-height: 1;
    margin: 0 0 24px 0;
  }

  &.subtext {
    font-size: 24px;
    font-weight: 600;
    line-height: 135%;
    letter-spacing: -0.64px;
    font-family: 'Degular-Display-Semibold', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', Helvetica, Arial, sans-serif;
    font-feature-settings: 'kern' 1, 'ss01' 1, 'salt' 1;
  }
  &.paragraph {
    font-size: 16px;
  }
}

.h2,
h2 {
  font-size: 28px;
  line-height: 1.1428571429; /* 32px */
  letter-spacing: 0.48px;
  margin: 0 0 16px 0;
  font-family: 'Degular-Display-Semibold', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', Helvetica, Arial, sans-serif;

  @media (min-width: 576px) {
    font-size: 36px;
    line-height: 1.1666666667; /* 42px */
  }
}

.h3,
h3 {
  font-size: 24px;
  line-height: 1.5; /* 36px */
  letter-spacing: 0.64px;
  margin: 0 0 16px 0;

  @media (min-width: 576px) {
    font-size: 28px;
    letter-spacing: 0.64px;
    line-height: 1.1428571429; /* 32px */
  }

  &.h4 {
    font-size: 20px;
    line-height: 1.4; /* 28px */
    letter-spacing: -0.32px;
    margin: 0 0 8px 0;
  }
}

.h4,
h4 {
  font-size: 20px;
  line-height: 1.4; /* 28px */
  letter-spacing: -0.32px;
  margin: 0 0 8px 0;
}
  
.subtitle {
  font-size: 22px !important;
  font-weight: 400;
  line-height: 1.4545454545 !important; /* 32px */
  letter-spacing: -0.12px !important;
  margin: 0 0 32px 0;

  @media (max-width: 576px) {
    margin: 0 0 16px 0;
  }
}

.h5, h5,
.h6, h6 {
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica, Arial, sans-serif;
  font-size: 16px;
  letter-spacing: -0.24px;
  line-height: 1.375; /* 22px */
  font-weight: 600 !important;
  margin: 0 0 8px 0;
}

strong,
.strong,
.bold,
.font-weight-bold {
  font-weight: 600 !important;
}

.em {
  font-style: italic;
}

small,
.small {
  color: #6b6b6b;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5714285714; /* 22px */
}

.legal {
  color: #A6A6A6 !important;
  font-weight: 400;
  font-size: 13px !important;
  line-height: 1.2307692308 !important; /* 16px */
  margin-bottom: .75rem !important;
}

.caption {
  color: #6B6B6B;
  font-size: 14px;
  letter-spacing: 0.24px;
  line-height: 1.4285714286; /* 20px */
  text-align: center;
}

.footnote {
  color: #6B6B6B;
  font-size: 13px;
  line-height: 1.3846153846; /* 18px */
  margin: 0 0 16px 0;
}

code {
  font-family: "IBM Plex Mono", SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace !important;
  background-color: #f9f9f9 !important;
  color: #212121;
  padding: 1px 4px 2px !important;
  font-size: 15px !important;
  box-shadow: inset 0 0 0 1px #e6e6e6;
  border-radius: 4px !important;
}

pre {
  background-color: #EDEDED;
  border-radius: 4px;
  color: #212121;
  font-family: "IBM Plex Mono", SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace !important;
  font-size: 16px;
  line-height: 1.625; /* 26px */
  padding: 16px 24px;

  code {
      background-color: transparent;
      box-shadow: none;
      border-radius: 0;
      color: #212121;
      font-size: 15px;
      padding: 0;
  }
}

.form-row {
  margin-bottom: 1.5rem;
}
.form-control.is-invalid,
.was-validated .form-control:invalid {
  border-color: #f37264;
}
  
.alternative {
  color: #FFFFFF !important;
}

.media-shadow {
  -webkit-filter: drop-shadow(0px 5px 8px rgba(28, 39, 43, 0.2)); /* Ch 23+, Saf 6.0+, BB 10.0+ */
  filter: drop-shadow(0px 5px 8px rgba(28, 39, 43, 0.2)); /* FF 35+ */
}

.media-shadow-v6 {
  border-radius: 16px;
  box-shadow: 8px 8px 0 rgb(0 0 0 / 16%);
  }

.media-round-border-v6 {
  border-radius: 8px;
}
  
.greyed {
  color: '#969696' !important;
}

.tooltip {
  .tooltip-inner {
    background-color: #333;
    padding: 16px 12px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgb(0 0 0 / 32%);
    /* border: 1px solid rgba(255, 255, 255, 0.32); */
    max-width: 350px;
    transition-duration: 300ms;
    p {
      color: #FFFFFF;
      line-height: 1.4;
      text-align: left;
      font-family: inherit;
      font-size: 14px;
      margin: 0;
      padding: 0;
    }
  }
  .arrow {
    display: none;
  }
}
.tooltip.show {
  opacity: 1;
}

// IE 10+ support
@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  input {
    padding-top: 6px !important;
  }
  form i {
    padding-top: 6px !important;
  }
}

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

  &.no-gutters {
    margin-right: 0;
    margin-left: 0;
  }
}

@media screen and (max-width: 1199px) {
  .col, .col-1, .col-10, .col-11, .col-12, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-auto, .col-lg, .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-auto, .col-md, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-auto, .col-sm, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-auto, .col-xl, .col-xl-1, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-auto {
    position: relative;
    width: 100%;
    padding-right: 12px;
    padding-left: 12px;
  }
}
@media screen and (min-width: 1200px) {
  .col, .col-1, .col-10, .col-11, .col-12, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-auto, .col-lg, .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-auto, .col-md, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-auto, .col-sm, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-auto, .col-xl, .col-xl-1, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-auto {
    position: relative;
    width: 100%;
    padding-right: 12px;
    padding-left: 12px;
  }
}

.pad-sm-right {
  @media (min-width: 576px) and (max-width: 767px) {
    padding-right: var(--spacing-3); 
  }
}
  
.pad-md-right {
  @media (min-width: 768px) and (max-width: 991px) {
    padding-right: var(--spacing-4);
  }
}
  
.pad-lg-right {
  @media (min-width: 992px) and (max-width: 1199px) {
    padding-right: var(--spacing-6); 
  }
}
  
.pad-xl-right {
  @media (min-width: 1200px) {
    padding-right: var(--spacing-16);
  }
}
  
.pad-right--xxl {
  padding-right: var(--spacing-16);
}

@media screen and (max-width: 992px) {
  body {
    &.lock {
      margin: 0;
      height: 100%;
      overflow: hidden;
    }
  }
  
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
.alert-primary {
  color: #212121;
  background-color: #E7F0FF;
  border-color: #E7F0FF;
}
.alert-warning {
  color: #212121;
  background-color: #FFF4BE;
  border-color: #FFF4BE;
}
.modal-backdrop.show {
  opacity: 0.8;
}
.modal-backdrop {
  background-color: #212121; /* grey_90 */
}
`;

export default GlobalStyle;
