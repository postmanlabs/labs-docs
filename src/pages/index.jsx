import React from 'react';
import { navigate } from 'gatsby';
import styled from 'styled-components';
import '../../styles/config/normalize.css';
import Layout from '../components/layout';
import SEO from '../components/seo';
// import { LandingCard } from '../components/MarketingPages/Cards';
import '../../styles/config/_pm-icons.css';
import Button from '../components/Shared/Button';


const HeroWrapper = styled.section`
  background-color: ${(props) => props.theme.colors.blue_10};
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


class IndexPage extends React.Component {
  componentDidMount() {
    const pix = document.createElement("script")
    pix.language = "JavaScript1.1"
    pix.src =
      "//pixel.mathtag.com/event/js?mt_id=1538259&mt_adid=244742&mt_exem=&mt_excl=&v1=&v2=&v3=&s1=&s2=&s3="
    pix.async = true
    document.body.appendChild(pix)

    const id = "Polyfill"
    if (!document.getElementById(id)) {
      const polyfill = document.createElement("script")
      polyfill.id = id
      polyfill.language = "JavaScript1.1"
      polyfill.src =
        "//polyfill.io/v3/polyfill.min.js?features=default%2CArray.prototype.find%2CArray.prototype.includes%2CPromise%2CObject.assign%2CObject.entries"
      polyfill.async = true
      document.body.appendChild(polyfill)
    }
  }

  render() {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ]
    // const sortedUpcomingEvents = upcomingEvents

    return (
      <Layout>
        <SEO title="Postman Labs Docs" slug="/" />
        <div className="container-fluid">
          <HeroWrapper
            className="row section align-items-center hero" 
          >
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-5 col-lg-6 align-self-center">
                  <h1>Postman Labs Docs</h1>
                  <p className="subtitle">
                    Flows, gRPC, WebSockets! Learn about Postman Labs and the cutting-edge features brewing in it.
                  </p>
                  <Button
                  onClick={() => {
                    navigate("/labs-overview/")
                  }} 
                  className="mb-5 secondary"                    
                  >
                    Explore the docs
                  </Button>
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
          </HeroWrapper>
        </div>

        <div className="container">
          {/* Youtube Video Section */}
          <section className="row section align-items-center">
            <div className="col-lg-4">
              <h2>Visual programming with Postman Flows</h2>
              <p>
                Postman Flows help you create API workflows by connecting series
                of requests through a drag-and-drop UI.
              </p>
              <p className="mb-4">
                Learn more about Postman's new visual development tool called
                Flows to create your own API workflows.
              </p>
              <Button
                as="a"
                href="https://learning.postman.com/docs/postman-flows/flows-intro/flows-overview/"
                className="mb-5 secondary" 
              >
                Explore the Flow docs
              </Button>
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

        <div className="container">
          {/* Youtube Video Section */}
          <section className="row section align-items-center">
            <div className="col-lg-4">
              <h2>Working with GraphQL APIs in Postman</h2>
              <p>
              GraphQL is an API technology designed to provide clients with exactly the data they need. Postman provides you with a client interface to work with your GraphQL API. Learn how to use Postman's GraphQL client.
              </p>
              <Button
                onClick={() => {
                  navigate("/postman-api-client/graphql-client/graphql-client-overview/")
                }}
                className="mb-5 secondary" 
              >
                Explore GraphQL client docs
              </Button>
            </div>
            <div className="col-lg-8">
            <img src="https://assets.postman.com/postman-labs-docs/graphql-docs/graphql-request-thumbnail.png" alt="GraphQL request on Postman"></img>
            </div>
          </section>
        </div>

        <div className="container">
          {/* Youtube Video Section */}
          <section className="row section align-items-center">
            <div className="col-lg-4">
              <h2>Working with gRPC APIs in Postman</h2>
              <p>
              gRPC is a schema-driven Remote Procedure Call (RPC) framework often used to enable inter-service communication. Postman provides you with a client interface to work with gRPC services. Go through the documentation to learn how to use Postman's gRPC client to test your gRPC API.
              </p>
              <Button
                as="a"
                href="https://learning.postman.com/docs/sending-requests/grpc/grpc-client-overview/"
                className="mb-5 secondary" 
              >
                Explore gRPC client docs
              </Button>
            </div>
            <div className="col-lg-8">
              <div className="embed-responsive embed-responsive-16by9 img-frame">
                <iframe
                  loading="lazy"
                  className="embed-responsive-item "
                  src="https://www.youtube.com/embed/gfYGqMb81GQ"
                  title="gRPC Requests- Postman Level Up"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </section>
        </div>

        <div className="container">
          {/* Youtube Video Section */}
          <section className="row section align-items-center">
            <div className="col-lg-4">
              <h2>Testing asynchronous APIs with WebSocket client</h2>
              <p>
              WebSocket protocol and the SocketIO framework provide a way to exchange data between a client and server over a persistent connection. Postman lets you work with WebSocket and SocketIO APIs using it's API client interface. Go through the documentation to learn how to use Postman's WebSocket client to test your WebSocket API.
              </p>
              <Button
                onClick={() => {
                  navigate("/postman-api-client/websocket-client/websocket-client-overview/")
                }}
                className="mb-5 secondary" 
              >
                Explore WebSocket client docs
              </Button>
            </div>
            <div className="col-lg-8">
              <div className="embed-responsive embed-responsive-16by9 img-frame">
                <iframe
                  loading="lazy"
                  className="embed-responsive-item "
                  src="https://www.youtube.com/embed/H-7EZVj9D-k"
                  title="WebSocket Requests- Postman Level Up"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default IndexPage