import React from 'react';
import ResponsiveEmbed from 'react-responsive-embed';
import {
  Tab,
  Tabs,
  TabList,
  TabPanel,
} from 'react-tabs';
import Layout from '../components/layout';
import Hero from '../components/MarketingPages/Hero';
import SEO from '../components/seo';
import { TransparentCard } from '../components/MarketingPages/Cards';
import plans from '../assets/qa/plans.svg';
import platform from '../assets/qa/platform.svg';
import tools from '../assets/qa/tools.svg';
import './_qa.scss';

const videoStyle = {
  padding: '80px 115px',
  backgroundColor: '#f5f8fb',
};

const QaPage = () => (
  <Layout>
    <SEO title="QA" slug="/qa/" />
    <Hero title="Postman for QA Teams" text="No matter your experience level, Postman offers different ways for testers and developers to make sure that APIs are working as expected. Try them all!" />
    <section className="row text-center">
      <div className="col-md-12 justify-content-around transparentHeader">
        <h2>Three Ways to Test Within Postman</h2>
      </div>
      <div className="row transparentCardContainer justify-content-sm-center">
        <div className="col-xs-12 col-sm-6 col-md-7 col-lg-2 transparent-card-container">
          <TransparentCard
            icon={plans}
            title="Validate a Response"
            text="Inspect your request and response payloads before integrating with your project."
          />
        </div>
        <div className="col-xs-5 col-sm-6 col-md-7 col-lg-2 transparent-card-container">
          <TransparentCard
            icon={platform}
            title="Run a Collection"
            text="Run groups of requests to test use case workflows within your chosen environments."
          />
        </div>
        <div className="col-xs-5 col-sm-6 col-md-7 col-lg-2 transparent-card-container">
          <TransparentCard
            icon={tools}
            title="Automation"
            text="Incorporate request test runs into your continuous integration and delivery setup."
          />
        </div>
      </div>
    </section>
    <section id="tabs">
      {/* <Tabs forceRenderTabPanel={true}> */}
      <Tabs>
        <TabList>
          <Tab>Validate a Response</Tab>
          <Tab>Run a Collection</Tab>
          <Tab>Automation</Tab>
        </TabList>
        <TabPanel>
          <section className="row" style={videoStyle}>
            <div className="col-md-8 col-sm-auto">
              <ResponsiveEmbed
                src="https://www.youtube.com/embed/0S0zXTNzR7E"
                allowFullScreen
              />
            </div>
            <div className="col-md-4 col-sm-auto">
              <h2>Validate a Response</h2>
              <p>Learn how simple it is to validate an API response in Postman.</p>
              <a className="v5_btn v5_btn__secondary-dark v5_btn__left" href="https://www.youtube.com/channel/UCocudCGVb3MmhWQ1aoIgUQw">Watch More Videos</a>
            </div>
          </section>
        </TabPanel>
        <TabPanel>
          <section className="row" style={videoStyle}>
            <div className="col-md-8 col-sm-auto">
              <ResponsiveEmbed
                src="https://www.youtube.com/embed/YKalL1rVDOE?list=PLM-7VG-sgbtBsenu0CM-UF3NZj3hQFs7E"
                allowFullScreen
              />
            </div>
            <div className="col-md-4 col-sm-auto">
              <h2>Run a collection</h2>
              <p>Learn how to run a group of requests in the Postman Collection Runner.</p>
              <a className="v5_btn v5_btn__secondary-dark v5_btn__left" href="/docs">Watch More Videos</a>
            </div>
          </section>
        </TabPanel>
        <TabPanel>
          <section className="row" style={videoStyle}>
            <div className="col-md-8 col-sm-auto">
              <ResponsiveEmbed
                src="https://www.youtube.com/embed/3pMyO5ggq8I"
                allowFullScreen
              />
            </div>
            <div className="col-md-4 col-sm-auto">
              <h2>Automation</h2>
              <p>Sleep better at night knowing your Postman tests are running automatically.</p>
              <a className="v5_btn v5_btn__secondary-dark v5_btn__left" href="/docs">Watch More Videos</a>
            </div>
          </section>
        </TabPanel>

      </Tabs>
    </section>

  </Layout>
);

export default QaPage;
