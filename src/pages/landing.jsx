import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/MarketingPages/Hero';
import SEO from '../components/seo';

const LandingPage = () => (
  <Layout>
    <SEO />

    <Hero title="Postman Learning Center" text="The Postman Learning Center has all of the resources you need to ramp up quickly and extend your skills." />

  </Layout>
);

export default LandingPage;
