import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ReflowImgWrapper from '../components/MarketingPages/ReflowImgWrapper';


const NotFoundPage = () => (
   <Layout>
      <SEO title="404: Not found" slug="/404/" />
      <div className="container" role="link" tabIndex={0}>
        <div style={{ paddingTop: '80' + 'px', paddingBottom: '80' + 'px' }} className="row">
          <div className="col-md-8 align-self-center pr-md-5">
            <ReflowImgWrapper/>
          </div>
          <div className="col-md-4 align-self-center">
            <h1>404</h1>
            <p className="subtitle">Oops! We can&apos;t find this page. It may have been moved or deleted.</p>
            <a href="/" className="btn btn__primary-hollow">Back to Docs</a>
          </div>
        </div>
      </div>
    </Layout>
)

export default NotFoundPage;
