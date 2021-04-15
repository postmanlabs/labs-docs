exports.onClientEntry = () => {
  (() => {
    function OptanonWrapper() { } // eslint-disable-line no-unused-vars
  })();
};

// Always start at the top of the page on a route change.
exports.onRouteUpdate = () => {
  if (typeof window !== `undefined`) { window.scrollTo(0, 0)}
}

exports.shouldUpdateScroll = args => {
   return false;
};