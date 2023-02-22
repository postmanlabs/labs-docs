import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
// import footerDataLocal from '../../../build/footerDev.json';
import footerData from '../../../bff-data/footer.json';



const FooterWrapper = styled.footer`
  border-top: 1px solid ${(props) => props.theme.colors.grey_30};
  background-color: ${(props) => props.theme.colors.grey_00};
  font-size: 14px;
  color: ${(props) => props.theme.colors.grey_50};
.copyright {
  font-size: 12px;
}
.column {
  margin-left: 0px;
}
.footer-col-title {
  font-size: 16px !important;
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", Helvetica, Arial, sans-serif;
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 8px; 
}
`

const ColumnWrapper = styled.ul`
  li {
    list-style-type: none;
    margin-bottom: 0;
  }
  
a {
  color: ${(props) => props.theme.colors.grey_50};
  text-transform: none;
  font-weight: 400;
  display: block;
  line-height: 1.7;
  padding: 5px 0;
  &:hover {
    color: ${(props) => props.theme.colors.blue_50};
    text-decoration: none;
  }
  span {
    border: 1px solid ${(props) => props.theme.colors.blue_10};
    border-radius: ${(props) => props.theme.borderRadius.medium};
    padding: 0 7px 0 4px;
    display: inline-block;
    white-space: pre;
    margin-left: 6px;
  }
}
`

const FooterImgWrapper = styled.div`
  @media (min-width: 768px) {
    filter: grayscale(100%);
    transition: ${(props) => props.theme.transitions.all};
    &:hover {
      filter: grayscale(0);
      transition: all 0.2s ease-in-out;
    }
  }
`
const SocialSVGWrapper = styled.div`
  display: inline-block;
  margin-right: 8px;
  width: 16px;
  height: 16px;
  & svg {
    max-height: 100%;
    width: auto;
  }
`

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

  const [data] = useState(footerData)

  const columns = data.items.slice(0, 5);
   
  return (
    <FooterWrapper>
      <section id="Footer" className="section">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 offset-sm-2 col-md-12 offset-md-0">
              <div className="row">
                {/* Copyright */}
                <FooterImgWrapper className="col-8 offset-2 col-md-3 offset-md-0 col-lg-2 order-12 order-md-0 pad-md-right align-self-center">
                  <img className="footer-img mb-5" src='https://voyager.postman.com/illustration/postman-footer-rocket-launch.svg' alt="Postman" />
                  <span className="col-12 d-none d-md-block copyright">
                    {data.copyright}
                  </span>
                </FooterImgWrapper>
                {/* Product */}
                <div className="col-6 col-md-2 offset-md-1 col-lg-2 offset-lg-2 order-1 order-md-2 mb-5">
                  {columns.slice(0, 1).map((item) => (
                    <nav aria-labelledby={item.arialabelledby} key={uuidv4()}>
                      <h2 className="footer-col-title" id={item.arialabelledby}>
                        {item.title}
                      </h2>
                      <ColumnWrapper className="column">
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
                      </ColumnWrapper>
                    </nav>
                  ))}
                </div>
                <div className="col-6 col-md-2 order-2 order-md-3">
                  {/* Company - stacked top */}
                  {columns.slice(1, 2).map((item) => (
                    <div key={uuidv4()}>
                      <nav
                        aria-labelledby={item.arialabelledby}
                        className="mb-5"
                      >
                        <h2 className="footer-col-title" id={item.arialabelledby}>
                          {item.title}
                        </h2>
                        <ColumnWrapper className="column">
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
                        </ColumnWrapper>
                      </nav>
                    </div>
                  ))}
                  {/* Company stacked bottom */}
                  {columns.slice(2, 3).map((item) => (
                    <div key={uuidv4()}>
                      <nav
                        aria-labelledby={item.arialabelledby}
                        className="mb-5"
                      >
                        <h2 className="footer-col-title" id={item.arialabelledby}>
                          {item.title}
                        </h2>
                        <ColumnWrapper className="column">
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
                        </ColumnWrapper>
                      </nav>
                    </div>
                  ))}
                </div>
                {/* API Categories */}
                <div className="col-6 col-md-2 order-3 order-md-4">
                  {columns.slice(3, 4).map((item) => (
                    <nav aria-labelledby={item.arialabelledby} key={uuidv4()}>
                      <h2 className="footer-col-title" id={item.arialabelledby}>
                        {item.title}
                      </h2>
                      <ColumnWrapper className="column">
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
                      </ColumnWrapper>
                    </nav>
                  ))}

                </div>
                {/* Social media icons */}
                <div className="col-6 col-md-2 order-4 order-md-5">
                  <div className="row">
                    {columns.slice(4, 5).map((item) => (
                      <div className="col-sm-12" key={uuidv4()}>
                        <nav
                          aria-labelledby={item.arialabelledby}
                          className="mb-5"
                        >
                          <h2 className="footer-col-title" id={item.arialabelledby}>
                            {item.title}
                          </h2>
                          <ColumnWrapper className="column">
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
                                      <SocialSVGWrapper
                                        className="d-inline-block align-self-center social-svg"
                                        // eslint-disable-next-line react/no-danger
                                        dangerouslySetInnerHTML={{
                                          __html: link.svg,
                                        }}
                                      />
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
                          </ColumnWrapper>
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
    </FooterWrapper>
  );
};

export default Footer;
