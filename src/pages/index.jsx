import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { v4 as uuidv4 } from 'uuid';
import Layout from '../components/layout';
import SEO from '../components/seo';
import upcomingEvents from '../../bff-data/events.json';
import { LandingCard } from '../components/MarketingPages/Cards';
import '../../styles/config/normalize.css';
import '../components/MarketingPages/Buttons.scss';

import '../../styles/config/_pm-icons.css';
import styled from 'styled-components';
import '../../styles/config/_pm-icons.css';

const EventsWrapper = styled.div`
.events__alert {
    border: 4px dashed ${(props) => props.theme.colors.blue_10};
    border-radius: ${(props) => props.theme.borderRadius.medium};
    padding: .75rem 1.25rem;
    /* color: #0C5460; */
    color: ${(props) => props.theme.colors.blue_80};
}
// Upcoming Event Section styles
.event-wrapper {
    @media (min-width: 992px) {
        padding-left: 48px;
    }
}
.event-single-wrapper {
    margin-bottom: 48px;
}
.event-date {
    font-family: ${(props) => props.theme.fonts.degular};
    font-weight: 400;
    font-size: 28px;
    text-transform: uppercase;
    @media (max-width: 992px) {
      justify-content:initial;
      margin-top: 8px;
    }
}
.event-location {
    font-size: 16px;
    text-transform: uppercase;
    font-weight: bold;
    color: ${(props) => props.theme.colors.orange_50};
    padding-bottom: 16px;
}
.event-description-wrapper {
    @media (min-width: 992px) {
        padding-left: 48px !important;
    }
}
.event-month {
    @media screen and (max-width: 576px){
        font-size: 16px;
    }
}
`
const HeroWrapper = styled.section`
  background-color: ${(props) => props.theme.colors.grey_05};
  padding: 48px 80px;
    @media (max-width: 991px) {
        padding: 40px !important;
      }
    .hero-image {
        margin: 0px;
    }
    .img-frame {
        border-radius: ${(props) => props.theme.borderRadius.medium};
        border: 8px solid ${(props) => props.theme.colors.grey_20};// $grey_20
        box-shadow: 8px 8px 0 rgba(0, 0, 0, 0.32);
    }
`

const HRStyles = styled.hr`
  border: 0;
  margin-top: 0;
  border-top: 1px solid ${(props) => props.theme.colors.grey_30};
  margin-bottom: 0;
`;

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

function getEvents(sortedUpcomingEvents) {
  return sortedUpcomingEvents.length > 0 && ( // If there are events in the events.json array
    sortedUpcomingEvents.map((event) => {
      const eventYear = event.date.match(/20[0-9][0-9]/)[0];
      const eventMonth = parseInt(event.date.split(/20[0-9][0-9]-/).pop().split('-').shift(), 10);
      const eventMonthIndex = eventMonth - 1;
      const eventDay = parseInt(event.date.split(/20[0-9][0-9]-[0-9][0-9]-/).pop().split('T').shift(), 10);
      const eventDate = `${eventMonth}/${eventDay}/${eventYear}`;
      const eventInformation = `${event.location} - ${eventDate} ${event.time}`;
      return (
        <EventsWrapper className={`col-12 col-lg-10 offset-lg-1 event-single-wrapper`} key={uuidv4()}>
          <div className="row">
            <div className="col-12 col-lg-3 event-date event-month">
              {/* <span className="event-month"> */}
              {`${months[eventMonthIndex]}`}
              {/* </span> */}
              {' '}
              {`${eventDay}`}
            </div>
            <div className="col-12 col-lg-9 event-description-wrapper">
              <p className="mb-1 event-location">{`${eventInformation}`}</p>
              <h4 className="event-title">{event.title}</h4>
              <p>{event.description}</p>
              <OutboundLink
                className="event-link-wrapper link-style"
                href={event.link}
                target="_blank"
                rel="noopener"
              >
                <span>See details →</span>
              </OutboundLink>
            </div>
          </div>
        </EventsWrapper>
      );
    })
  ) || (
    <>
      {/* If there are no events, and events.json is an object
        where development eq true */}
      {!Array.isArray(upcomingEvents) && upcomingEvents.development ? (
        <EventsWrapper className="events__alert" role="alert">
          <p>
            You are currently in develop mode. Dynamic events will not be displayed
            locally.
            <a
              className="link-style"
              style={{ fontSize: 'inherit' }}
              href="https://github.com/postmanlabs/postman-docs/blob/develop/CONTRIBUTING.md"
              target="_blank"
              rel="noopener"
            >
              See Contributing doc for details
            </a>
            .
          </p>
        </EventsWrapper>
      ) : (
        <>
          {/* else we know we have 0 upcoming events, and we are not
            in development mode */}
          <p>We currently have no upcoming events...check back later.</p>
        </>
      )}
    </>
  )
}

class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sortedUpcomingEvents: upcomingEvents,
    };
  }

  componentDidMount() {
    const pix = document.createElement('script');
    pix.language = 'JavaScript1.1';
    pix.src = '//pixel.mathtag.com/event/js?mt_id=1538259&mt_adid=244742&mt_exem=&mt_excl=&v1=&v2=&v3=&s1=&s2=&s3=';
    pix.async = true;
    document.body.appendChild(pix);

    const id = 'Polyfill';
    if (!document.getElementById(id)) {
      const polyfill = document.createElement('script');
      polyfill.id = id;
      polyfill.language = 'JavaScript1.1';
      polyfill.src = '//polyfill.io/v3/polyfill.min.js?features=default%2CArray.prototype.find%2CArray.prototype.includes%2CPromise%2CObject.assign%2CObject.entries';
      polyfill.async = true;
      document.body.appendChild(polyfill);
    }

    try {
      window.pm.bff(
        'events',
        (d) => {
          if (d) {
            const data = JSON.parse(d);
            const sortedUpcomingEvents = document.getElementById('sorted-upcoming-events');

            sortedUpcomingEvents.innerHTML = ReactDOMServer.renderToString(getEvents(data));
          }
        }
      );
    } catch (err) {
      if (window.pm && typeof window.pm.log === 'function') {
        window.pm.log(err);
      }
    }
  }

  render() {
    const { state } = this;
    const { sortedUpcomingEvents } = state;

    return (
      <Layout>
        <SEO title="Learning Center" slug="/" />
        <div className="container-fluid">
          <HeroWrapper className="row section align-items-center hero" >
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
                    Explore the Docs
                  </a>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 align-self-center">
                  <img
                    src="https://voyager.postman.com/illustration/postman-learning-center-documentation-illustration.svg"
                    width="637"
                    height="411"
                    className="hero-image img-fluid"
                    alt="Postmanaut sitting at computer. Illustration."
                  />
                </div>
              </div>
            </div>
          </HeroWrapper>
        </div>
        <div className="container">
          <section className="row section">
            <div className="col-sm-12">
              <h2 className="mb-5">Design, develop, and collaborate on your API projects</h2>
              <div className="row justify-content-center">
                <div className="col-sm-6 col-lg-4 mb-3 mb-md-4 pr-md-5">
                  <LandingCard
                    title="Get Started with Postman"
                    description="Send your first API request in Postman in just a few clicks!"
                    cta="Send a request"
                    link="/docs/getting-started/sending-the-first-request/"
                    icon="https://voyager.postman.com/icon/spaceship-rocket-launch-icon-postman.svg"
                  />
                </div>
                <div className="col-sm-6 col-lg-4 mb-3 mb-md-4 pr-md-5">
                  <LandingCard
                    title="Test with Postman"
                    description="Write test scripts and build automation into your workflow."
                    link="/docs/writing-scripts/intro-to-scripts/"
                    cta="Create tests"
                    icon="https://voyager.postman.com/icon/flask-science-beaker-test-icon-postman.svg"
                  />
                </div>
                <div className="col-sm-6 col-lg-4 mb-3 mb-md-4 pr-md-5">
                  <LandingCard
                    title="30 Days of Postman"
                    description="Tackle a new challenge each day with these developer tutorials."
                    link="https://www.postman.com/postman/workspace/30-days-of-postman-for-developers/overview"
                    cta="Start challenge"
                    icon="https://voyager.postman.com/icon/trophy-award-icon-postman.svg"
                  />
                </div>
                <div className="col-sm-6 col-lg-4 mb-3 mb-md-4 pr-md-5">
                  <LandingCard
                    title="Postman Space Camp"
                    description="See previous and upcoming educational webinars."
                    cta="See webinars"
                    link="https://www.postman.com/events/postman-space-camp/"
                    icon="https://voyager.postman.com/icon/camp-tent-icon-postman.svg"
                  />
                </div>
                <div className="col-sm-6 col-lg-4 mb-3 mb-md-4 pr-md-5">
                  <LandingCard
                    title="Postman Network"
                    description="Browse APIs, workspaces, and collections inside Postman."
                    link="https://www.postman.com/explore"
                    cta="Explore Postman"
                    icon="https://voyager.postman.com/icon/hotspot-network-icon-postman.svg"
                  />
                </div>
                <div className="col-sm-6 col-lg-4 mb-3 mb-md-4 pr-md-5">
                  <LandingCard
                    title="Postman Videos"
                    description="Learn Postman skills from our video playlists."
                    link="https://www.youtube.com/c/Postman"
                    cta="Watch videos"
                    icon="https://voyager.postman.com/icon/play-movie-video-film-icon-postman.svg"
                  />
                </div>
              </div>
            </div>
          </section>
          <div className="container-fluid" >
            <HRStyles/>
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
                  src="https://www.youtube.com/embed/2oOSnxZ28fA?rel=0&origin=https://learning.postman.com/"
                  title="Intro to Postman"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </section>
          <div className="container-fluid" >
            <HRStyles/>
          </div>
          {/* Events Section */}
          <section className="row section">
            <div className="col-12 col col-lg-4 text-left mb-5">
              <div className="sticky-top" style={{ top: '75px', zIndex: '0' }}>
                <h2 id="upcoming-events">Upcoming Postman Events</h2>
                <p>
                  <a 
                    className="link-style" 
                    href="https://www.twitch.tv/getpostman" 
                    target="_blank" 
                    rel="noopener">
                    Follow us
                  </a>
                  {' '}
                  on Twitch or
                  {' '}
                  <a
                    className="link-style"
                    href="https://www.youtube.com/channel/UCocudCGVb3MmhWQ1aoIgUQw"
                    target="_blank"
                    rel="noopener"
                  >
                    subscribe
                  </a>
                  {' '}
                  to our YouTube channel so you don’t miss when we go live.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-8 justify-content-center d-flex align-items-stretch event-wrapper">
              <div id="sorted-upcoming-events" className="row">
                {getEvents(sortedUpcomingEvents)}
              </div>
            </div>
          </section>
          <div className="container-fluid" >
            <HRStyles/>
          </div>
          <section className="row section">
            <div className="col-sm-6 col-lg-3 mb-sm-4 mb-md-0 pr-md-5">
              <LandingCard
                title="Postman support"
                description="Get help for your issue or a specific question."
                cta="Visit Postman Support Center"
                icon="https://voyager.postman.com/icon/support-life-ring-icon-postman.svg"
                link="https://support.postman.com/hc/en-us"
              />
            </div>
            <div className="col-sm-6 col-lg-3 mb-sm-4 mb-md-0 pr-md-5">
              <LandingCard
                title="Bugs and feature requests"
                description="Check out the app support repo."
                cta="Make a request"
                icon="https://voyager.postman.com/icon/bug-error-icon-postman.svg"
                link="https://github.com/postmanlabs/postman-app-support/"
              />
            </div>
            <div className="col-sm-6 col-lg-3 mb-sm-4 mb-md-0 pr-md-5">
              <LandingCard
                title="Postman Community"
                description="Join the Postman community."
                cta="Visit forum"
                icon="https://voyager.postman.com/icon/community-three-people-icon-postman.svg"
                link="https://community.postman.com/"
              />
            </div>
            <div className="col-sm-6 col-lg-3 mb-sm-4 mb-md-0">
              <LandingCard
                title="Postman Answers"
                description="Code samples for most commonly asked questions."
                cta="Visit Postman Answers"
                icon="https://voyager.postman.com/icon/solution-puzzle-answers-icon-postman.svg"
                link="https://www.postman.com/postman/workspace/postman-answers/"
              />
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}

export default IndexPage;
