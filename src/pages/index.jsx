import React from 'react';
import ResponsiveEmbed from 'react-responsive-embed';
import Layout from '../components/layout';
import SEO from '../components/seo';

import HeroImage from '../assets/skills-pic.png';
import AdminImage from '../assets/team-collaboration-postmanaut-pic.png';
import ResourceImage from '../assets/integrations-intro-pic.png';
import LearnImage from '../assets/postmanaut-intro-pic.png';

import { SecondaryCard, LandingCard } from '../components/MarketingPages/Cards';
import '../components/MarketingPages/Buttons.scss';

import './index.scss';


const HeroStyle = {
  paddingBottom: '0px',
  paddingLeft: '24px',
  paddingTop: '48px',
};
const heroMargin = {
  margin: '0 auto',
  maxWidth: '1200px',
};
const videoStyle = {
  padding: '0px 40px',
  marginTop: '80px',
};
const landingBottom = {
  padding: '40px',
  backgroundColor: '#eaf2f8',
  marginTop: '80px',
};
const landingBottomContent = {
  padding: '32px',
};

const IndexPage = () => (
  <Layout>
    <SEO title="Home" slug="/" />
    <section className="hero" style={HeroStyle}>
      <div className="row" style={heroMargin}>
        <div className="col-lg-5 hero-text">
          <h2>Postman Learning Center</h2>
          <p>
          Learn how to effectively use Postman in your API projects.
          </p>
          <a href="/docs/" className="btn btn__primary">Explore the Docs</a>
        </div>
        <div className="col-lg-7">
          <img src={HeroImage} className="hero-image" alt="Hero" />
        </div>
      </div>
    </section>
    <section className="row design">
      <div className="col-md-12 text-center">
        <h3>Design - Develop - Test - Collaborate</h3>
        <div className="row justify-content-center">
          <LandingCard
            title="Get Started"
            description="Check out the Postman docs to start learning."
            link="https://learning.postman.com/docs/"
            icon={LearnImage}
          />
          <LandingCard
            title="Admin"
            description="Manage your Postman account and set up your team for success."
            link="https://learning.postman.com/docs/"
            icon={AdminImage}
          />
          <LandingCard
            title="Resources"
            description="Leverage Postman resources within your development pipeline."
            link="https://learning.postman.com/docs/"
            icon={ResourceImage}
          />
        </div>
        <div className="row justify-content-center">
          <SecondaryCard
            title="Forum"
            description="Connect to the Postman community on our forum."
            cta="Visit Forum"
            ctaLink="https://community.postman.com/"
          />
          <SecondaryCard
            title="API Network"
            description="Find templates for existing APIs and learn to use Postman."
            cta="Browse Network"
            ctaLink="https://explore.postman.com/"
          />
          <SecondaryCard
            title="Videos"
            description="Learn Postman skills from our video playlists."
            cta="Watch Videos"
            ctaLink="https://www.youtube.com/channel/UCocudCGVb3MmhWQ1aoIgUQw"
          />
        </div>
      </div>
    </section>

    <section className="row video-player">
      <div className="col-md-8">
        <ResponsiveEmbed
          src="https://www.youtube.com/embed/videoseries?list=PLM-7VG-sgbtAgGq_pef5y_ruIUBPpUgNJ"
          allowFullScreen
        />
      </div>
      <div className="col-md-4" style={{ paddingLeft: '32px' }}>
        <h2>Intro to Postman</h2>
        <p>
        Learn the Postman fundamentals in this video course for beginners.
        </p>
        <p>Send and authorize a request, write test scripts, and chain requests together.</p>
      </div>
    </section>

    <section className="row design">
      <div className="col-md-12 text-center" style={landingBottom}>
      <div className="row justify-content-center">
      <div className="col-md-4 text-center">
        <h4>Postman support</h4>
        <p>Reach out to our support team.</p>
        <a href="https://support.getpostman.com/hc/en-us/requests/new/" className="btn btn__secondary-light">Open a ticket</a>
        </div>
        <div className="col-md-4 text-center">
          <h4>Bugs and feature requests</h4>
          <p>Check out the app support repo.</p>
        <a href="https://github.com/postmanlabs/postman-app-support/" className="btn btn__secondary-light">Make a request</a>
        </div>
        <div className="col-md-4 text-center">
          <h4>Product roadmap</h4>
          <p>Find out what we're working on.</p>
        <a href="https://trello.com/b/4N7PnHAz/postman-roadmap-for-developers" className="btn btn__secondary-light">See the roadmap</a>
        </div>
      </div></div>
    </section>
  </Layout>
);

export default IndexPage;
