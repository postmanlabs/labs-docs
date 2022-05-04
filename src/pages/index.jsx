import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { v4 as uuidv4 } from 'uuid';
import Layout from '../components/layout';
import SEO from '../components/seo';
import '../../styles/config/_pm-icons.css';
import upcomingEvents from '../../bff-data/events.json';
import { LandingCard } from '../components/MarketingPages/Cards';
import '../../styles/config/normalize.css';
import '../components/MarketingPages/Buttons.scss';
import './index.scss';

const heroBackground = {
  backgroundColor: '#E7F0FF',
  padding: '48px 80px',
};

class IndexPage extends React.Component {
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
        <SEO title="Postman Labs Docs" slug="/" />
        <div className="container-fluid">
          <section className="row section align-items-center hero" style={heroBackground}>
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-5 col-lg-6 align-self-center">
                  <h1>Postman Labs Docs</h1>
                  <p className="subtitle">
                    Learn how to use Postman's cutting edge features!
                  </p>
                  <a href="/postman-flows/flows-overview/" className="btn btn__primary-hollow mb-5">
                    Explore the docs
                  </a>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 align-self-center">
                  <img
                    src="https://voyager.postman.com/illustration/postman-flows-lab-illustration.svg"
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
          {/* Youtube Video Section */}
          <section className="row section align-items-center">
            <div className="col-lg-4">
              <h2>Low-code Flows in Postman</h2>
              <p>Learn the Postman fundamentals in this video course for beginners.</p>
              <p className="mb-4">Learn more about Postman's new low-code no-code development tool called Flows to create your own API workflows.</p>
              <a href="/postman-flows/flows-overview/" className="btn btn__primary-hollow mb-5">
                Explore the Flow docs
              </a>
            </div>
            <div className="col-lg-8">
              <div className="embed-responsive embed-responsive-16by9 img-frame">
                <iframe
                  loading="lazy"
                  className="embed-responsive-item "
                  src="https://www.youtube.com/embed/4Yr9CG8Pp14?rel=0&origin=https://learning.postman.com/"
                  title="Low-code Flows in Postman"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}

export default IndexPage;
