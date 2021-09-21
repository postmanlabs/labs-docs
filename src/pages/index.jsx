import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { v4 as uuidv4 } from 'uuid';
import Layout from '../components/layout';
import SEO from '../components/seo';
import '../../styles/config/_pm-icons.css';
import upcomingEvents from '../../bff-data/events.json';
import HeroImage from '../assets/refresh-hero-image.svg';
// import TeamCollaborationImage from '../assets/team-collaboration-postmanaut-pic.png';

import LearnImage from '../assets/icons/spaceship.svg';
import ThirtyDaysImage from '../assets/icons/trophy.svg';
import SpaceCampImage from '../assets/icons/camp.svg';
import NetworkImage from '../assets/icons/hotspot.svg';
import TestImage from '../assets/icons/flask.svg';
import VideoImage from '../assets/icons/movie.svg';
import SupportImage from '../assets/icons/support.svg';
import BugImage from '../assets/icons/bug.svg';
import CommunityImage from '../assets/icons/community.svg';

import { LandingCard } from '../components/MarketingPages/Cards';
import '../../styles/config/normalize.css';
import '../components/MarketingPages/Buttons.scss';
import './index.scss';


const heroBackground = {
  // grey_10
  backgroundColor: '#f9f9f9',
  padding: '48px 80px',
};

class IndexPage extends React.Component {
  componentDidMount() {
    const pix = document.createElement('script');
    pix.language = 'JavaScript1.1';
    pix.src = '//pixel.mathtag.com/event/js?mt_id=1538259&mt_adid=244742&mt_exem=&mt_excl=&v1=&v2=&v3=&s1=&s2=&s3=';
    pix.async = true;
    document.body.appendChild(pix);
  }

  render() {
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const sortedUpcomingEvents = upcomingEvents;

    return (
      <Layout>
        <SEO title="Home" slug="/" />
        <div className="container-fluid">
          <section className="row section align-items-center hero" style={heroBackground}>
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-5 col-lg-6 align-self-center">
                  <h1>Postman Learning Center</h1>
                  <p className="subtitle">
                    Learn how to use Postman.
                    {' '}
                    <br />
                    Check out the docs and support resources!
                  </p>
                  <a href="/docs/getting-started/introduction/" className="btn btn__primary-hollow mb-5">
                    Explore the docs
                  </a>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 align-self-center">
                  <img
                    src={HeroImage}
                    width="637"
                    height="411"
                    className="hero-image img-fluid"
                    alt="Postmanaut sitting at computer. Illustration."
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="container">
          <section className="row section">
            <div className="col-sm-12">
              <h2 className="mb-5">Design, develop, and collaborate on your API projects</h2>
              <div className="row justify-content-center">
                <div className="col-sm-6 col-lg-4 mb-3 mb-md-4 pr-md-5">
                  <LandingCard
                    title="Get Started"
                    description="Send your first API request in Postman in just a few clicks!"
                    cta="Send a request"
                    link="/docs/getting-started/sending-the-first-request/"
                    icon={LearnImage}
                  />
                </div>
                <div className="col-sm-6 col-lg-4 mb-3 mb-md-4 pr-md-5">
                  <LandingCard
                    title="Test"
                    description="Write test scripts and build automation into your workflow."
                    link="/docs/writing-scripts/intro-to-scripts/"
                    cta="Create tests"
                    icon={TestImage}
                  />
                </div>
                <div className="col-sm-6 col-lg-4 mb-3 mb-md-4 pr-md-5">
                  <LandingCard
                    title="30 Days of Postman"
                    description="Tackle a new challenge each day with these developer tutorials."
                    link="https://www.postman.com/postman/workspace/30-days-of-postman-for-developers/overview"
                    cta="Start challenge"
                    icon={ThirtyDaysImage}
                  />
                </div>
                <div className="col-sm-6 col-lg-4 mb-3 mb-md-4 pr-md-5">
                  <LandingCard
                    title="Postman Space Camp"
                    description="See previous and upcoming educational webinars."
                    cta="See webinars"
                    link="https://www.postman.com/events/postman-space-camp/"
                    icon={SpaceCampImage}
                  />
                </div>
                <div className="col-sm-6 col-lg-4 mb-3 mb-md-4 pr-md-5">
                  <LandingCard
                    title="Postman Network"
                    description="Browse APIs, workspaces, and collections inside Postman."
                    link="https://www.postman.com/explore"
                    cta="Explore Postman"
                    icon={NetworkImage}
                  />
                </div>
                <div className="col-sm-6 col-lg-4 mb-3 mb-md-4 pr-md-5">
                  <LandingCard
                    title="Videos"
                    description="Learn Postman skills from our video playlists."
                    link="https://www.youtube.com/c/Postman"
                    cta="Watch videos"
                    icon={VideoImage}
                  />
                </div>
              </div>
            </div>
          </section>
          <div className="container-fluid" >
            <hr/>
          </div>
          {/* Youtube Video Section */}
          <section className="row section align-items-center">
            <div className="col-lg-4">
              <h2>Intro to Postman</h2>
              <p>Learn the Postman fundamentals in this video course for beginners.</p>
              <p className="mb-4">
                Send and authorize a request, write test scripts, and chain requests together.
              </p>
            </div>
            <div className="col-lg-8">
              <div className="embed-responsive embed-responsive-16by9 img-frame">
                <iframe
                  loading="lazy"
                  className="embed-responsive-item "
                  src="https://www.youtube-nocookie.com/embed/7E60ZttwIpY?rel=0"
                  title="Intro to Postman"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </section>
          <div className="container-fluid" >
            <hr/>
          </div>
          {/* Events Section */}
          <section className="row section">
            <div className="col-12 col col-lg-4 text-left mb-5">
              <div className="sticky-top" style={{ top: '75px', zIndex: '0' }}>
                <h2 id="upcoming-events">Upcoming Postman Events</h2>
                <p>
                  <a className="link-style" href="https://www.twitch.tv/getpostman" target="_blank" rel="noopener noreferrer">
                    Follow us
                  </a>
                  {' '}
                  on Twitch or
                  {' '}
                  <a
                    className="link-style"
                    href="https://www.youtube.com/channel/UCocudCGVb3MmhWQ1aoIgUQw"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    subscribe
                  </a>
                  {' '}
                  to our YouTube channel so you don’t miss when we go live.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-8 justify-content-center d-flex align-items-stretch event-wrapper">
              <div className="row">
                {/* If there are events in the events.json array */}
                {sortedUpcomingEvents.length > 0 ? (
                  // Map over, get the appropriate values and render event.
                  sortedUpcomingEvents.map((event) => {
                    // Used for Left side of events (Example: JAN 1)
                    const dateObject = new Date(event.date);
                    // Used for Right Side of events
                    const today = new Date(event.date);
                    const date = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;
                    // Combine platform, date and time of the event
                    // Example: Livestream - 01/01/2000 4PM PST
                    const eventInformation = `${event.location} - ${date} ${event.time}`;
                    // added parathensis to remove linter error
                    const isStale = new Date(event.expirationDate) < ((new Date()) && ' d-none') || '';
                    return (
                      <div className={`col-12 col-lg-10 offset-lg-1 ${isStale} event-single-wrapper`} key={uuidv4()}>
                        <div className="row">
                          <div className="col-12 col-lg-3 event-date event-month">
                            {/* <span className="event-month"> */}
                            {`${months[dateObject.getUTCMonth()]}`}
                            {/* </span> */}
                            {' '}
                            {`${dateObject.getDate()}`}
                          </div>
                          <div className="col-12 col-lg-9 event-description-wrapper">
                            <p className="mb-1 event-location">{`${eventInformation}`}</p>
                            <h4 className="event-title">{event.title}</h4>
                            <p>{event.description}</p>
                            <OutboundLink
                              className="event-link-wrapper link-style"
                              href={event.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span>See details →</span>
                            </OutboundLink>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <>
                    {/* If there are no events, and events.json is an object
                      where development eq true */}
                    {!Array.isArray(upcomingEvents) && upcomingEvents.development ? (
                      <div className="events__alert" role="alert">
                        <p>
                          You are currently in develop mode. Dynamic events will not be displayed
                          locally.
                          <a
                            className="link-style"
                            style={{ fontSize: 'inherit' }}
                            href="https://github.com/postmanlabs/postman-docs/blob/develop/CONTRIBUTING.md"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            See Contributing doc for details
                          </a>
                          .
                        </p>
                      </div>
                    ) : (
                      <>
                        {/* else we know we have 0 upcoming events, and we are not
                          in development mode */}
                        <p>We currently have no upcoming events...check back later.</p>
                      </>
                    )}
                  </>
                )}
              </div>
            </div>
          </section>
          <div className="container-fluid" >
            <hr/>
          </div>
          <section className="row section">
            <div className="col-md-6 col-lg-4 mb-3 mb-md-4 pr-md-5">
              <LandingCard
                title="Postman support"
                description="Reach out to our support team."
                cta="Open a ticket"
                icon={SupportImage}
                link="https://support.postman.com/hc/en-us/requests/new/"
              />
            </div>
            <div className="col-md-6 col-lg-4 mb-3 mb-md-4 pr-md-5">
              <LandingCard
                title="Bugs and feature requests"
                description="Check out the app support repo."
                cta="Make a request"
                icon={BugImage}
                link="https://github.com/postmanlabs/postman-app-support/"
              />
            </div>
            <div className="col-md-6 col-lg-4 mb-3 mb-md-4 pr-md-5">
              <LandingCard
                title="Community"
                description="Join the Postman community."
                cta="Visit forum"
                icon={CommunityImage}
                link="https://community.postman.com/"
              />
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}

export default IndexPage;
