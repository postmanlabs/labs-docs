import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import 'bootstrap/dist/js/bootstrap.min';
import './styles/config/print.css'
import $ from 'jquery';
import 'jquery.scrollto';

  // Enables sections to display right beneath the navbar when deep linking
  if (window.location.hash) {
    setTimeout(() => {
      $.scrollTo($(window.location.hash), {
        offset: {top: -80}
      });
    }, 100);
  } else {
    window.scrollTo(0, 0);
  }