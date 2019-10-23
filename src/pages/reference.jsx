import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/MarketingPages/Hero';
import SEO from '../components/seo';
import { SmallCard } from '../components/MarketingPages/Cards';
import Line from '../components/MarketingPages/Line';


const ReferencePage = () => (
  <Layout>
    <SEO title="Reference" slug="/reference" />
    <div className="container-fluid">
      <Hero title="Reference" />
      <SmallCard title="Postman API" text="The Postman API allows you to programmatically access data stored in Postman account with ease. " href="https://github.com/postmanlabs/postman-runtime/" link="Learn More" />
      <SmallCard title="Postman Echo API" text="The Postman Echo API is service you can use to test your REST clients and make sample API calls. It provides endpoints for GET, POST, PUT, various auth mechanisms and other utility endpoints. " href="https://github.com/postmanlabs/newman" link="Learn More" />
      <SmallCard title="Postman Collection SDK" text="The Postman Collection SDK is a node.js module that allows a developer to work with Postman Collections. " href="https://documenter.getpostman.com/view/33232/markdown-in-api-documentation/JsGc?_ga=2.157862714.1667134267.1569255253-1602274879.1566252418&version=latest" link="Learn More" />
      <SmallCard title="Postman Collection Schema Documentation" text="This is reference documentation for all of the various versions of Postman schemas. " href="https://learning.getpostman.com/docs/postman/launching-postman/settings/" link="Learn More" />
      <Line content="Other Resources" />
      <SmallCard title="Postman Runtime" text="The Postman Runtime is an open-source library that is the backbone for to run collections and send requests in the Postman app, Postman monitors, or Newman. " href="https://github.com/postmanlabs/postman-runtime/" link="Learn More" />
      <SmallCard
        title="Newman"
        text="Newman is an open-source tool for running Postman collections from the
      command line."
        href="https://github.com/postmanlabs/newman"
        link="Learn More"
      />
      <SmallCard
        title="Using Markdown in API Documentation"
        text="This is a sample collection to test markdown styling inside Postman or
      within other services that render Markdown."
        href="https://documenter.getpostman.com/view/33232/markdown-in-api-documentation/JsGc"
        link="Learn More"
      />
      <SmallCard title="Postman Settings" text="Adjust the settings within the Postman app." href="https://learning.getpostman.com/docs/postman/launching-postman/settings/" link="Learn More" />
      <SmallCard title="Keyboard Shortcuts" text="Increase your efficiency with keyboard shortcuts for the Postman app." href="https://learning.getpostman.com/docs/postman/launching-postman/navigating-postman/" link="Learn More" />
      <SmallCard
        title="Postman Roadmap for Developers"
        text="Postman's upcoming features and releases available to the developer
      community."
        href="https://trello.com/b/4N7PnHAz/postman-roadmap-for-developers"
        link="Learn More"
      />
    </div>
  </Layout>
);

export default ReferencePage;
