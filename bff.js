const sh = require('shelljs');
const pingWebHook = require('./scripts/pingWebHook');
const fetchBlogPosts = require('./scripts/fetchBlogPosts');

const prefetch = async (dir, response) => {
  sh.exec('mkdir -p bff-data');
  await pingWebHook();
  fetchBlogPosts();
};

// if (process.env.BFF_PING_WEBHOOK_URL && process.env.BFF_BLOG_URL) {
  prefetch();
// }