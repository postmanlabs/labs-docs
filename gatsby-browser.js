import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import 'bootstrap/dist/js/bootstrap.min';
import { isFunctionLike } from 'typescript';

import 'jquery.scrollto';
import $ from 'jquery';


/* eslint-disable import/prefer-default-export */
export const onClientEntry = () => {
  if (!window.location.hash) {
    window.scrollTo(0, 0);
  } else {
    // $(window).scrollTo($(window.location.hash), {
    //   offset: {top: -56}
    // });
  }
}

// when a link is clicked

