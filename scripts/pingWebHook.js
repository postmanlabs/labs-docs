const axios = require('axios').default;

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const pingWebHook = () => new Promise((resolve) => {
  axios.get(process.env.BFF_PING_WEBHOOK_URL)
    .then(() => {
      /* eslint-disable no-console */
      console.info('Success ping web hook');
      /* eslint-enable */
      resolve();
    });
});

module.exports = pingWebHook;
