import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import 'bootstrap/dist/js/bootstrap.min';

import $ from 'jquery';
import 'jquery.scrollto';

/* eslint-disable import/prefer-default-export */
export const onClientEntry = () => {
  if (!window.location.hash) {
    window.scrollTo(0, 0);
  } else {
    // Race condition with default browser behavior for deep links.
    setTimeout(() => {
      $.scrollTo($(window.location.hash), {
        offset: {top: -56}
      });
    }, 1000)
  }
}
