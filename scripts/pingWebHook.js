const axios = require('axios').default;

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const pingWebHook = () => new Promise((resolve) => {
  const host = process.env.BFF_PING_WEBHOOK_URL || null;
  if (host) {
    axios.get(process.env.BFF_PING_WEBHOOK_URL)
    .then(() => {
      /* eslint-disable no-console */
      console.info('Success ping web hook');
      /* eslint-enable */
      resolve();
    })
    .catch(err => {
      console.log('No BFF Web Hook environment variable found')
    });
  } else {
    console.log('Writing empty bff data')
    resolve();
  }
});

module.exports = pingWebHook;
