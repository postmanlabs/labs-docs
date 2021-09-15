import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import 'bootstrap/dist/js/bootstrap.min';


// exports.onClientEntry = () => {
//   (() => {
//     function OptanonWrapper() {} // eslint-disable-line no-unused-vars
//   })();
// };
/* eslint-disable import/prefer-default-export */
export const onInitialClientRender = () => {
  if (!window.location.hash) {
    window.scrollTo(0, 0);
  } else {
    window.location = window.location.hash;
  }
};

