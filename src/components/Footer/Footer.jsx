import React, {useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import { SectionStyles, FooterLinkStyles, Divider } from 'aether-marketing';
import footerDataLocal from '../../../build/footerDev.json';
// import footerData from '../../../bff-data/footer.json';

const Column = styled.ul`
  padding-left: 0;
`;

const ColumnRow = styled.li`
  list-style-type: none;
  margin-bottom: 0;
  padding: 5px 0;
`;

const FooterImg = styled.span`
  @media (min-width: 768px) {
    img {
      width: 100px;
      height: auto;
    }
  }
`;
const Copyright = styled.span`
  color: ${(props) => props.theme.colors.grey_50} !important;
  font-size: 1.2rem;
`;
const FooterColTitle = styled.h2`
  font-size: 1.6rem !important;
  line-height: 1.4;
  margin-bottom: 8px;
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', Helvetica, Arial, sans-serif;
  font-weight: 600;
  color: ${(props) => props.theme.colors.grey_50};
  font-feature-settings: 'calt' 0;
`;
const SubFooter = styled.div`
  border-top: 1px solid #ccc;
  margin-top: 20px;
  padding-top: 20px;
`;
const SocialCol = styled.div`
  span {
    display: inline-block;
    margin: 0 8px;
  }
  img {
    opacity: 0.7;
    filter: grayscale(100%);
    transition: ${(props) => props.theme.transitions.all};
    &:hover {
      opacity: 1;
      filter: grayscale(0);
      transition: ${(props) => props.theme.transitions.all};
    }
  }
  svg {
    opacity: 0.7;
    filter: grayscale(100%);
    -webkit-filter: grayscale(100%);
    transition: 0.2s ease-in-out;
  }
  svg:hover {
    opacity: 1;
    filter: grayscale(0%);
    transition: 0.2s ease-in-out;
  }
`;
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
    return 'noopener';
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

const Footer = () => {

  const [data, setData] = useState(footerDataLocal);
  const footerKeys = ['alt', 'copy', 'copyright', 'items', 'src', 'type'];
  
  useEffect(() => {
    if (footerKeys.every(key => Object.keys(footerDataLocal).includes(key))) {
      setData(footerDataLocal)
    } else {
      setData(footerDataLocal)
    }
  }, [])

  const columns = data.items.slice(0, 5);
   
  return (
    <footer>
      <Divider fullWidth/>
        <SectionStyles id="Footer">
          <div className="container small">
            <div className="row">
              <div className="col-sm-8 offset-sm-2 col-md-12 offset-md-0">
                <div className="row">
                  {/* First column */}
                  <div className="col-8 offset-2 col-md-2 offset-md-0 col-lg-2 order-12 order-md-0">
                    <FooterImg>
                      <img
                        className="img-fluid col-12 col-sm-9 col-md-12"
                        src="https://voyager.postman.com/logo/postman-logo-orange-stacked.svg"
                        alt={data.alt}
                        fetchpriority="low"
                        loading="lazy"
                      />
                    </FooterImg>
                  </div>
                  {/* Second column */}
                  <div className="col-6 col-md-2 order-2 order-md-2 mb-2 mb-md-0">
                    {columns.slice(0, 1).map((item) => (
                      <nav aria-labelledby={item.arialabelledby} key={uuidv4()}>
                        <FooterColTitle id={item.arialabelledby}>
                          {item.title}
                        </FooterColTitle>
                        <Column>
                          {(item.items &&
                            item.items.map((link) => (
                              <ColumnRow key={uuidv4()}>
                                <FooterLinkStyles
                                  href={link.url}
                                  rel={relStringGenerator(link.target)}
                                  target={targetStringGenerator(link.target)}
                                  aria-label={link.ariaLabel}
                                  onClick={() => {
                                    triggerGA(link.category, link.label);
                                  }}
                                >
                                  {link.title}
                                </FooterLinkStyles>
                              </ColumnRow>
                            ))) ||
                            ''}
                        </Column>
                      </nav>
                    ))}
                  </div>
                  <div className="col-6 col-md-2 order-2 order-md-3">
                    {/* Third column - stacked - top */}
                    {columns.slice(1, 2).map((item) => (
                      <div key={uuidv4()}>
                        <nav
                          aria-labelledby={item.arialabelledby}
                          style={{ marginBottom: `${37}px` }}
                        >
                          <FooterColTitle id={item.arialabelledby}>
                            {item.title}
                          </FooterColTitle>
                          <Column>
                            {(item.items &&
                              item.items.map((link) => (
                                <ColumnRow key={uuidv4()}>
                                  <FooterLinkStyles
                                    href={link.url}
                                    rel={relStringGenerator(link.target)}
                                    target={targetStringGenerator(link.target)}
                                    aria-label={link.ariaLabel}
                                    onClick={() => {
                                      triggerGA(link.category, link.label);
                                    }}
                                  >
                                    {link.title}
                                  </FooterLinkStyles>
                                </ColumnRow>
                              ))) ||
                              ''}
                          </Column>
                        </nav>
                      </div>
                    ))}
                  </div>
                  <div className="col-6 col-md-2 order-2 order-md-3">
                    {/* Third column - stacked - bottom */}
                    {columns.slice(2, 3).map((item) => (
                      <div key={uuidv4()}>
                        <nav
                          aria-labelledby={item.arialabelledby}
                          className="mb-5"
                        >
                          <FooterColTitle id={item.arialabelledby}>
                            {item.title}
                          </FooterColTitle>
                          <Column>
                            {(item.items &&
                              item.items.map((link) => (
                                <ColumnRow key={uuidv4()}>
                                  <FooterLinkStyles
                                    href={link.url}
                                    rel={relStringGenerator(link.target)}
                                    target={targetStringGenerator(link.target)}
                                    aria-label={link.ariaLabel}
                                    onClick={() => {
                                      triggerGA(link.category, link.label);
                                    }}
                                  >
                                    {link.title}
                                  </FooterLinkStyles>
                                </ColumnRow>
                              ))) ||
                              ''}
                          </Column>
                        </nav>
                      </div>
                    ))}
                  </div>
                  {/* Fourth Column API Categories */}
                  <div className="col-6 col-md-2 order-3 order-md-4">
                    {columns.slice(3, 4).map((item) => (
                      <nav aria-labelledby={item.arialabelledby} key={uuidv4()}>
                        <FooterColTitle id={item.arialabelledby}>
                          {item.title}
                        </FooterColTitle>
                        <Column>
                          {(item.items &&
                            item.items.map((link) => (
                              <ColumnRow key={uuidv4()}>
                                <FooterLinkStyles
                                  href={link.url}
                                  rel={relStringGenerator(link.target)}
                                  target={targetStringGenerator(link.target)}
                                  aria-label={link.ariaLabel}
                                  onClick={() => {
                                    triggerGA(link.category, link.label);
                                  }}
                                >
                                  {link.title}
                                </FooterLinkStyles>
                              </ColumnRow>
                            ))) ||
                            ''}
                        </Column>
                      </nav>
                    ))}
                  </div>
                  {/* Fifth Column Resources */}
                  <div className="col-6 col-md-2 order-3 order-md-4">
                    {columns.slice(4, 5).map((item) => (
                      <nav aria-labelledby={item.arialabelledby} key={uuidv4()}>
                        <FooterColTitle id={item.arialabelledby}>
                          {item.title}
                        </FooterColTitle>
                        <Column>
                          {(item.items &&
                            item.items.map((link) => (
                              <ColumnRow key={uuidv4()}>
                                <FooterLinkStyles
                                  href={link.url}
                                  rel={relStringGenerator(link.target)}
                                  target={targetStringGenerator(link.target)}
                                  aria-label={link.ariaLabel}
                                  onClick={() => {
                                    triggerGA(link.category, link.label);
                                  }}
                                >
                                  {link.title}
                                </FooterLinkStyles>
                              </ColumnRow>
                            ))) ||
                            ''}
                        </Column>
                      </nav>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <SubFooter className="row">
              <div className="col-sm-4 text-center text-lg-left mb-2 mb-lg-0">
                <a href="/downloads/">Download Postman</a>
              </div>
              {/* Fifth column social */}
              <div className="col-sm-4 text-center">
                <div className="row social">
                  {data.items.slice(5, 6).map((item) => (
                    <SocialCol className="col-sm-12" key={uuidv4()}>
                      <nav
                        aria-labelledby={item.arialabelledby}
                        className="mb-lg-5"
                      >
                        <Column>
                          {item.items &&
                            item.items.map((svg) => (
                              <span key={uuidv4()}>
                                <a
                                  href={svg.url}
                                  rel="noopener noreferrer"
                                  target="_blank"
                                  aria-label={svg.arialabel}
                                  onClick={() => {
                                    triggerGA('social', svg.arialabel);
                                  }}
                                >
                                  <div
                                    style={{
                                      display: 'flex',
                                      alignItems: 'center'
                                    }}
                                  >
                                    <div
                                      dangerouslySetInnerHTML={{
                                        __html: svg.svg
                                      }}
                                    />
                                  </div>
                                </a>
                              </span>
                            ))}
                        </Column>
                      </nav>
                    </SocialCol>
                  ))}
                </div>
              </div>
              <div className="col-sm-4 text-center text-lg-right">
                <Copyright>
                  &copy; {new Date().getFullYear()} Postman, Inc.
                </Copyright>
              </div>
            </SubFooter>
            {/*  eslint-enable */}
          </div>
        </SectionStyles>
      </footer>
  );
};

export default Footer;