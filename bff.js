const fs = require('fs');
const sh = require('shelljs');
const crypto = require('crypto');
const pingWebHook = require('./build/pingWebHook');
const fetchBlogPosts = require('./build/fetchBlogPosts');
const fetchEvents = require('./build/fetchEvents');
const fetchPmTech = require('./build/fetchPmTech');
const { allow } = require('./package.json');

const { pmTech: allowedPmTech } = allow;
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

  /* eslint-disable */
  const script = (process.env.PM_TECH
      && `
${pmTech}
if (typeof window.pm.scalp !== 'function') {
  window.pm.setScalp({
    property: 'postman-docs'
  });
}
window.pm.driveCampaignId();
function isPmTechAllowed(documentLocationPathname) {
  return ${allowedPmTech[0] === '*' ||
    allowedPmTech.indexOf(documentLocationPathname) !== -1};
}
var d = 1000, int;
var int = setInterval(function(){
  if (document.body) {
    window.pm.scalp(
      'pm-analytics',
      'load',
      document.location.pathname
    );
    window.pm.trackClicks();

    clearInterval(int);
  }
}, d);
    `)
    || `
      console.info('Postman OSS');
    `;
  /* eslint-enable */

  fs.writeFile('bff.json', JSON.stringify({ script }), (err) => {
    if (err) {
      throw err;
    }
  });
};

prefetch();
