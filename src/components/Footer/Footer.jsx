import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
// import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import './Footer.scss';
import { v4 as uuidv4 } from 'uuid';

import blau from '../../assets/postman-footer-v6-2.svg';


const triggerGA = (category, label) => (
  category
  && label
  && window.pm
  && window.pm.ga('send', 'event', category, 'Click', label)
);


// Helper function for rel attribute in link or button
function relStringGenerator(target) {
  if (target === '') {
    return null;
  }
  if (target === 'blank') {
    return 'noopener noreferrer';
  }
  return null;
}
// // Helper function for target attribute in link or button
function targetStringGenerator(target) {
  if (target === '') {
    return null;
  }
  if (target === 'blank') {
    return '_blank';
  }
  return null;
}


class FooterComponent extends React.Component {
  constructor(props) {
    super(props);
    const { data } = this.props;

    this.state = {
      data: JSON.parse(data),
    };
  }

  render() {
    const { data } = this.state;
    const columns = data.items.splice(0, 4);

    return (
      <footer>
        <section id="Footer" className="pb-5 section">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 offset-sm-2 col-md-12 offset-md-0">
                <div className="row">
                  {/* First column */}
                  <div className="col-6 col-md-3 col-lg-2 order-12 order-md-0 pad-md-right align-self-center">
                    {/* <img
                      className="img-fluid col-12 col-sm-9 col-md-12 mb-5 d-block footer-img"
                      src={data.src}
                      alt={data.alt}
                    /> */}
                    <img className="footer-img" src={blau} alt="footer" />
                    <span className="col-12 d-none d-md-block copyright">
                      {data.copyright}
                    </span>
                  </div>
                  {/* Second column */}
                  <div className="col-6 col-md-3 offset-md-1 col-lg-3 offset-lg-2 order-1 order-md-2 mb-5">
                    {columns.slice(0, 1).map((item) => (
                      <nav aria-labelledby={item.arialabelledby} key={uuidv4()}>
                        <h2 className="footer-col-title" id={item.arialabelledby}>
                          {item.title}
                        </h2>
                        <ul className="column">
                          {(item.items
                            && item.items.map((link) => (
                              <li className="column-row" key={uuidv4()}>
                                <a
                                  className="column-link"
                                  id={link.id}
                                  href={link.url}
                                  rel={relStringGenerator(link.target)}
                                  target={targetStringGenerator(link.target)}
                                  onClick={() => {
                                    triggerGA(link.category, link.label);
                                  }}
                                >
                                  {link.span ? (
                                    <>
                                      {link.title}
                                      <span>{link.span}</span>
                                    </>
                                  ) : (
                                    <>{link.title}</>
                                  )}
                                </a>
                              </li>
                            )))
                            || ''}
                        </ul>
                      </nav>
                    ))}
                  </div>
                  <div className="col-6 col-md-3 order-2 order-md-3">
                    {/* Third column - stacked - top */}
                    {columns.slice(1, 2).map((item) => (
                      <div key={uuidv4()}>
                        <nav
                          aria-labelledby={item.arialabelledby}
                          className="mb-5"
                        >
                          <h2 className="footer-col-title" id={item.arialabelledby}>
                            {item.title}
                          </h2>
                          <ul className="column">
                            {(item.items
                              && item.items.map((link) => (
                                <li className="column-row" key={uuidv4()}>
                                  <a
                                    className="column-link"
                                    id={link.id}
                                    href={link.url}
                                    rel={relStringGenerator(link.target)}
                                    target={targetStringGenerator(link.target)}
                                    onClick={() => {
                                      triggerGA(link.category, link.label);
                                    }}
                                  >
                                    {link.span ? (
                                      <>
                                        {link.title}
                                        <span>{link.span}</span>
                                      </>
                                    ) : (
                                      <>{link.title}</>
                                    )}
                                  </a>
                                </li>
                              )))
                              || ''}
                          </ul>
                        </nav>
                      </div>
                    ))}
                    {/* Third column - stacked - bottom */}
                    {columns.slice(2, 3).map((item) => (
                      <div key={uuidv4()}>
                        <nav
                          aria-labelledby={item.arialabelledby}
                          className="mb-5"
                        >
                          <h2 className="footer-col-title" id={item.arialabelledby}>
                            {item.title}
                          </h2>
                          <ul className="column">
                            {(item.items
                              && item.items.map((link) => (
                                <li className="column-row" key={uuidv4()}>
                                  <a
                                    className="column-link"
                                    id={link.id}
                                    href={link.url}
                                    rel={relStringGenerator(link.target)}
                                    target={targetStringGenerator(link.target)}
                                    onClick={() => {
                                      triggerGA(link.category, link.label);
                                    }}
                                  >
                                    {link.span ? (
                                      <>
                                        {link.title}
                                        <span>{link.span}</span>
                                      </>
                                    ) : (
                                      <>{link.title}</>
                                    )}
                                  </a>
                                </li>
                              )))
                              || ''}
                          </ul>
                        </nav>
                      </div>
                    ))}
                  </div>
                  {/* Fourth column */}
                  <div className="col-6 col-md-2 col-lg-2 order-3 order-md-4">
                    <div className="row">
                      {columns.slice(3, 4).map((item) => (
                        <div className="col-sm-12" key={uuidv4()}>
                          <nav
                            aria-labelledby={item.arialabelledby}
                            className="mb-5"
                          >
                            <h2 className="footer-col-title" id={item.arialabelledby}>
                              {item.title}
                            </h2>
                            <ul className="column">
                              {(item.items
                                && item.items.map((link) => (
                                  <li className="column-row" key={uuidv4()}>
                                    <a
                                      className="column-link"
                                      id={link.id}
                                      href={link.url}
                                      rel={relStringGenerator(link.target)}
                                      target={targetStringGenerator(
                                        link.target,
                                      )}
                                      onClick={() => {
                                        triggerGA(link.category, link.label);
                                      }}
                                    >
                                      <div direction="row" wrap="nowrap">
                                        <div
                                          className="d-inline-block align-self-center social-svg"
                                          // eslint-disable-next-line react/no-danger
                                          dangerouslySetInnerHTML={{
                                            __html: link.svg,
                                          }}
                                        />
                                        {/* <div className="d-inline-block align-text-middle"><img src={link.svg} /></div> */}
                                        {link.span ? (
                                          <>
                                            {link.title}
                                            <span>{link.span}</span>
                                          </>
                                        ) : (
                                          <>
                                            <div className="d-inline-block align-self-center">
                                              {link.title}
                                            </div>
                                          </>
                                        )}
                                      </div>
                                    </a>
                                  </li>
                                )))
                                || ''}
                            </ul>
                          </nav>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-12 d-block d-md-none text-center order-last">
                    <span className="col-12 copyright">{data.copyright}</span>
                  </div>
                </div>
              </div>
            </div>
            {/*  eslint-enable */}
          </div>
        </section>
      </footer>
    );
  }
}

const Footer = () => {
  const data = useStaticQuery(graphql`
  query {
    footerLinks {
      value
    }
  }`);
  return (
    <FooterComponent data={data.footerLinks.value} />
  );
};


export default Footer;
