exports.onClientEntry = () => {
  (() => {
    function OptanonWrapper() {} // eslint-disable-line no-unused-vars
  })();
};

// Always start at the top of the page on a route change.
exports.onInitialClientRender = () => {
  if (!window.location.hash) {
    window.scrollTo(0, 0);
  } else {
    window.location = window.location.hash;
  }
};
