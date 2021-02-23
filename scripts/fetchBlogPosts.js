const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const host = process.env.BFF_BLOG_URL

function fetchBlogPosts() {
  return fetch(host)
    .then(
      (res) => {
        res.text()
          .then((resp) => {
            if (resp) {
              const respData = JSON.parse(resp).data || { error: true };

              if (!respData.error && respData.items) {
                fs.writeFile(path.join(
                  'static',
                  'bff-data',
                  'blog.json',
                ), JSON.stringify(respData), (err) => {
                  if (err) {
                    /* eslint-disable no-console */
                    console.error(err);
                    /* eslint-enable */
                    process.exit(1);
                    throw err;
                  }

                  /* eslint-disable no-console */
                  console.info('Success pre-render blog');
                  /* eslint-enable */
                });
              }
            }
          });
      },
    );
}

module.exports = fetchBlogPosts;
