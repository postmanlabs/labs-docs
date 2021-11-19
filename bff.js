const fs = require('fs');
const sh = require('shelljs');
const crypto = require('crypto');
const pingWebHook = require('./scripts/pingWebHook');
const fetchBlogPosts = require('./scripts/fetchBlogPosts');
const fetchEvents = require('./scripts/fetchEvents');
const fetchPmTech = require('./scripts/fetchPmTech');

const delay = 1000;
const runtime = {
  pm: [''],
};

if (process.env.PM_TECH) {
  sh.exec('mkdir -p public');

  Object.keys(runtime).forEach((key) => {
    if (runtime[key][0]) {
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
    }
  });
}

const prefetch = async () => {
  sh.exec('mkdir -p bff-data');
  await pingWebHook();
  fetchBlogPosts();
  fetchEvents();

  let pmTech = '';

  if (process.env.PM_TECH) {
    pmTech = await fetchPmTech();

    pmTech = pmTech;

    sh.exec('mkdir -p public');

    Object.keys(runtime).forEach((key) => {
      if (runtime[key][0]) {
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
      }
    });
  }

  const script = (process.env.PM_TECH
      && `
${pmTech}
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
