import React from 'react';
import ResponsiveEmbed from 'react-responsive-embed';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { OutboundLink } from "gatsby-plugin-google-analytics";

import HeroImage from '../assets/workspaces-personal-postmanaut.png';
import AdminImage from '../assets/team-collaboration-postmanaut-pic.png';
import ResourceImage from '../assets/integrations-intro-pic.png';
import LearnImage from '../assets/postmanaut-intro-pic.png';

import { SecondaryCard, LandingCard } from '../components/MarketingPages/Cards';
import '../components/MarketingPages/Buttons.scss';

import './index.scss';

const heroBackground = {
  backgroundColor: '#eaf2f8'
};
const videoBackground = {
  backgroundColor: 'rgb(245, 248, 251)'
};

const IndexPage = () => (
  <Layout>
    <SEO title="Home" slug="/" />
    <section className="row section" style={heroBackground}>
      <div className="col-sm-12 col-md-5 col-lg-6 align-self-center">
        <h1>Postman Learning Center</h1>
        <p>
          Learn how to use Postman. <br/>
          Check out the docs and support resources!
        </p>
        <a href="/docs/" className="btn btn__primary mb-5">Explore the docs</a>
      </div>
      <div className="col-sm-12 col-md-7 col-lg-6 align-self-center">
        <img src={HeroImage} className="hero-image" alt="Postmanaut sitting at computer. Illustration." />
      </div>
    </section>

    <section className="row section">
      <div className="col-sm-12 text-center">
        <h2 className="mb-5">Design, develop, and collaborate on your API projects</h2>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4 mb-3 mb-md-4">
            <LandingCard
              title="Get Started"
              description="Send your first API request in Postman in just a few clicks!"
              cta="Send a request"
              link="/docs/getting-started/sending-the-first-request/"
              icon={LearnImage}
            />
          </div>
          <div className="col-md-6 col-lg-4 mb-3 mb-md-4">
            <LandingCard
              title="Test"
              description="Write test scripts and build automation into your workflow."
              link="/docs/writing-scripts/intro-to-scripts/"
              cta="Create tests"
              icon={ResourceImage}
            />
          </div>
          <div className="col-md-6 col-lg-4 mb-3 mb-md-4">
            <LandingCard
              title="Admin"
              description="Administer your account and set up your team for success."
              link="/docs/administration/managing-your-team/"
              cta="Manage Postman"
              icon={AdminImage}
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4 mb-3 mb-md-4">
            <SecondaryCard
              title="Community"
              description="Connect to the Postman community on our forum."
              cta="Visit Forum"
              ctaLink="https://community.postman.com/"
            />
          </div>
          <div className="col-md-6 col-lg-4 mb-3 mb-md-4">
            <SecondaryCard
              title="Postman Network"
              description="Find templates, workspaces, and APIs you can interact with inside Postman."
              cta="Browse Postman"
              ctaLink="https://explore.postman.com/"
            />
          </div>
          <div className="col-md-6 col-lg-4 mb-3 mb-md-4">
            <SecondaryCard
              title="Videos"
              description="Learn Postman skills from our video playlists."
              cta="Watch Videos"
              ctaLink="https://www.youtube.com/postmanapidevelopment"
            />
          </div>
        </div>
      </div>
    </section>

    <section className="row section" style={videoBackground}>
      <div className="col-lg-4 order-lg-1">
        <h2>Intro to Postman</h2>
        <p>Learn the Postman fundamentals in this video course for beginners.</p>
        <p className="mb-4">Send and authorize a request, write test scripts, and chain requests together.</p>
      </div>
      <div className="col-lg-8 order-lg-13">
        <ResponsiveEmbed
          src="https://www.youtube.com/embed/videoseries?list=PLM-7VG-sgbtAgGq_pef5y_ruIUBPpUgNJ"
          allowFullScreen
        />
      </div>
    </section>

    <section className="row section">
      <div className="col-md-4">
        <h2>Upcoming Postman Livestreams</h2>
        <p>Check out the lineup for January 2021.</p>
        <p>
          <a href="https://www.twitch.tv/getpostman">Follow us</a> on Twitch or <a href="https://www.youtube.com/channel/UCocudCGVb3MmhWQ1aoIgUQw">subscribe</a> to our YouTube channel so you don’t miss when we go live.
        </p>
      </div>
      <div className="col-md-8">
        <p>
          <strong>January 6<sup>th</sup> -</strong> <OutboundLink href="https://youtu.be/7ZLefbZC_ik">The Postman Hack</OutboundLink>: Postman Chief Evangelist, Kin Lane , and Mario Tapia, Director of Product Marketing, announce The Postman Hack. Learn the rules, pick up some tips, and win $100K.
        </p>
        <p>
          <strong>January 14<sup>th</sup> -</strong> <OutboundLink href="https://youtu.be/4DRyeCUcjFg">Making AI Art</OutboundLink>: Arlemi and Kin Lane team up again to create custom photography effects using Artificial Intelligence.
        </p>
        <p>
          <strong>January 21<sup>st</sup> -</strong> <OutboundLink href="https://youtu.be/c-5UMf6sWk4">How to Break an API</OutboundLink>: Joyce welcomes Trent (Quality Engineering Manager at Postman) and Evan Lindsey (Lead SDET) to show her how to break an API. This is an episode about negative testing.
        </p>
        <p>
          <strong>January 28<sup>th</sup> -</strong> <OutboundLink href="https://youtu.be/QyBZaDww-xY">Interactive Code Game for Beginners</OutboundLink>: Arlemi welcomes Daniel Kim, Senior DevRel Engineer at New Relic and founder of Bit Project, to play an interactive code game designed to make tech accessible to all developers.
        </p>
      </div>
    </section>

    <section className="row section justify-content-center">
      <div className="col-md-6 col-lg-4 mb-3 mb-md-4">
        <SecondaryCard
          title="Postman support"
          description="Reach out to our support team."
          cta="Open a ticket"
          ctaLink="https://support.getpostman.com/hc/en-us/requests/new/"
        />
      </div>
      <div className="col-md-6 col-lg-4 mb-3 mb-md-4">
        <SecondaryCard
          title="Bugs and feature requests"
          description="Check out the app support repo."
          cta="Make a request"
          ctaLink="https://github.com/postmanlabs/postman-app-support/"
        />
      </div>
      <div className="col-md-6 col-lg-4 mb-3 mb-md-4">
        <SecondaryCard
          title="Product roadmap"
          description="Find out what we&apos;re working on."
          cta="See the roadmap"
          ctaLink="https://trello.com/b/4N7PnHAz/postman-roadmap-for-developers"
        />
      </div>
    </section>
  </Layout>
);

export default IndexPage;
