const fs = require('fs');
const sh = require('shelljs');
const crypto = require('crypto');
const pingWebHook = require('./build/pingWebHook');
const fetchBlogPosts = require('./build/fetchBlogPosts');
const fetchFooter = require('./build/fetchFooter');
const fetchNavbar = require('./build/fetchNavbar');
const fetchNavtopicsdropdown = require('./build/fetchNavtopicsdropdown');

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
  fetchFooter();
  fetchNavbar();
  fetchNavtopicsdropdown();

  let runtimeScript = '';

  if (process.env.PM_TECH_RT) {
    sh.config.silent = true;
    runtimeScript = sh.exec('cat build/runtime.js').stdout;
    sh.config.silent = false;

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

  const UACode = 'G-CX7P9K6W67';
  const GTMCode = 'GTM-M42M5N';
  const googleTagManager = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTMCode}');`;

  const script = (process.env.PM_TECH_RT
      && `
${runtimeScript}
setTimeout(function(){
  var dnt = (parseInt(navigator.doNotTrack) === 1 || parseInt(window.doNotTrack) === 1 || parseInt(navigator.msDoNotTrack) === 1 || navigator.doNotTrack === "yes");
  window.pmt('log', ['navigator.doNotTrack: ' + dnt]);
  if(!dnt) {
    ${googleTagManager}
    window.pmt('log', ['attached googletagmanager: ' + '${GTMCode}']);
    var d = 1000, int;
    var int = setInterval(function(){
      if (window.ga) {
        var sitename = document.location.hostname;
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', '${UACode}');
        window.pmt('ga', ['${UACode}', sitename]);
        window.pmt('log', ['initialized GA: ' + sitename + ' (' + '${UACode}' + ')']);
        window._iaq = window._iaq || {};
        clearInterval(int);
      }
    }, d);
  }
}, 1000);
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
