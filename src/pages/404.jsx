import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import errordog from '../images/error-dog.svg';
import './404.scss';

const clickHandler = () => { window.pm.scalp('pm-analytics', 'client', 'click', 'pm-tech'); };

class NotFoundPage extends React.Component {
  componentDidMount() {
    /* eslint-disable no-console */
    console.log('pathname is', window.location.pathname);
    /* eslint-enaable */
    if (window.location.pathname !== '/404/') {
      window.location.pathname = '/404/';
    }

    function load(src, cb) {
      const e = document.createElement('script');
      e.src = src;
      e.async = true;
      e.onreadystatechange = () => {
        if (this.readyState === 'complete' || this.readyState === 'loaded') {
          if (typeof cb === 'function') {
            cb();
          }
        }
      };
      e.onload = cb;
      document.head.appendChild(e);
    }

    load(`/${window.pm.tech}`, () => {
      window.pm.setScalp({
        property: 'postman-docs',
      });

      window.pm.scalp(
        'pm-analytics',
        'load',
        'path',
        document.location.pathname,
      );
    });
  }

  render() {
    return (
      <Layout>
        <SEO title="404: Not found" slug="/404/" />
        <div className="container" role="link" onKeyDown={clickHandler} onClick={clickHandler} tabIndex={0}>
          <div className="row error-row">
            <div className="col">
              <img className="error-img" src={errordog} alt="a cute dog letting you know that you're on the 404 page" />
            </div>
            <div className="col text-col">
              <div className="error-text">
                <h1>404</h1>
                <p>Oops! We can&apos;t find this page. It may have been moved or deleted.</p>
                <a href="/docs/" className="btn btn__primary">Back to Docs</a>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default NotFoundPage;
