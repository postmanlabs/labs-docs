/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import CookieAlert from './CookieAlert';
import marketo from '../../scripts/marketo.munchkin';
import './layout.scss';

const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) { return parts.pop().split(';').shift(); }
  return undefined;
};

const setReferrerCookie = () => {
  const referrerUrl = document.referrer !== '' ? document.referrer : 'null';
  const now = new Date();
  const timeStamp = now.setDate(now.getDate() + 30);
  const expiration = new Date(timeStamp).toUTCString();
  const currentCookie = getCookie('referrer_url');
  if (!referrerUrl.split('?')[0].includes('postman.com')) {
    if (referrerUrl !== '' || currentCookie === 'null' || currentCookie === undefined) {
      document.cookie = 'referrer_url=; expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;secure';
      document.cookie = `referrer_url=${referrerUrl};expires=${expiration};path=/;secure;`;
    }
  }
};

// const Layout = ({ children }) => (
class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }

  componentDidMount() {
    setReferrerCookie();
  }

  render() {
    const { children } = this.state;
    return (
      <>
        {/* <div className="container-fluid"> */}
        <div className="layout-wrapper">
          <Header />
          <main>{children}</main>
          <Footer />
          <CookieAlert />
          {marketo()}
        </div>
      </>
    );
  }
}

export default Layout;
