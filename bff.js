const fs = require('fs');
const sh = require('shelljs');
const crypto = require('crypto');
const pingWebHook = require('./scripts/pingWebHook');
const fetchBlogPosts = require('./scripts/fetchBlogPosts');
const fetchEvents = require('./scripts/fetchEvents');
const fetchPmTech = require('./scripts/fetchPmTech');

const delay = 1000;
const runtime = {
  pm: ['bff-data/pmTech.js'],
};

if (process.env.NPM_TOKEN) {
  sh.exec('mkdir -p public');

  Object.keys(runtime).forEach((key) => {
    const fileBuffer = fs.readFileSync(runtime[key][0]);
    const hashSum = crypto.createHash('sha1');
    const ext = runtime[key][0]
      .split('/')
      .pop()
      .split('.')
      .pop();

    hashSum.update(fileBuffer);

    const hex = hashSum.digest('hex');

    runtime[key].push(`_${hex}.${ext}`);

    sh.exec(`cp ${runtime[key][0]} public/${runtime[key][1]}`);
  });
}

const prefetch = async (dir, response) => {
  sh.exec('mkdir -p bff-data');
  await pingWebHook();
  fetchBlogPosts();
  fetchEvents();

  if (process.env.PM_TECH) {
    await fetchPmTech();

    sh.exec('mkdir -p public');

    Object.keys(runtime).forEach((key) => {
      const fileBuffer = fs.readFileSync(runtime[key][0]);
      const hashSum = crypto.createHash('sha1');
      const ext = runtime[key][0]
        .split('/')
        .pop()
        .split('.')
        .pop();

      hashSum.update(fileBuffer);

      const hex = hashSum.digest('hex');

      runtime[key].push(`_${hex}.${ext}`);

      setTimeout(() => {
        sh.exec(`cp ${runtime[key][0]} public/${runtime[key][1]}`);
      }, delay);
    });
  }

  const script = (process.env.PM_TECH
      && `
      if (window) {
        if (!window.pm) {
          window.pm = {};
        }
        window.pm.tech = '${runtime.pm[1]}';
      }
    `)
    || `
      console.info('Postman OSS');
    `;

  fs.writeFile('bff.json', JSON.stringify({ script }), (err) => {
    if (err) {
      throw err;
    }
  });
};

prefetch();
