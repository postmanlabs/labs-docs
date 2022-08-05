import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../../styles/config/_pm-icons.css"
import upcomingEvents from "../../bff-data/events.json"
import { LandingCard } from "../components/MarketingPages/Cards"
import "../../styles/config/normalize.css"
import "../components/MarketingPages/Buttons.scss"
import "./index.scss"

const heroBackground = {
  backgroundColor: "#E7F0FF",
  padding: "48px 80px",
}

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
    const sortedUpcomingEvents = upcomingEvents

    return (
      <Layout>
        <SEO title="Postman Labs Docs" slug="/" />
        <div className="container-fluid">
          <section
            className="row section align-items-center hero"
            style={heroBackground}
          >
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-5 col-lg-6 align-self-center">
                  <h1>Postman Labs Docs</h1>
                  <p className="subtitle">
                    Flows, gRPC, WebSockets! Learn about Postman Labs and the cutting-edge features brewing in it.
                  </p>
                  <Link
                    to="/labs-overview/"
                    className="btn btn__primary-hollow mb-5"
                  >
                    Explore the docs
                  </Link>
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
              <h2>Visual programming with Postman Flows</h2>
              <p>
                Postman Flows help you create API workflows by connecting series
                of requests through a drag-and-drop UI.
              </p>
              <p className="mb-4">
                Learn more about Postman's new visual development tool called
                Flows to create your own API workflows.
              </p>
              <Link
                to="/postman-flows/getting-started/flows-overview/"
                className="btn btn__primary-hollow mb-5"
              >
                Explore the Flow docs
              </Link>
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
              <h2>Working with gRPC APIs in Postman</h2>
              <p>
              gRPC is a schema-driven Remote Procedure Call (RPC) framework often used to enable inter-service communication. Postman provides you with a client interface to work with gRPC services. Go through the documentation to learn how to use Postman's gRPC client to test your gRPC API.
              </p>
              <Link
                to="/postman-api-client/grpc-client/grpc-client-overview"
                className="btn btn__primary-hollow mb-5"
              >
                Explore gRPC client docs
              </Link>
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
              <Link
                to="/postman-api-client/websocket-client/websocket-client-overview/"
                className="btn btn__primary-hollow mb-5"
              >
                Explore WebSocket client docs
              </Link>
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
