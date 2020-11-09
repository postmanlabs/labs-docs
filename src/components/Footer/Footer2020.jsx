import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import DynamicLink from '../Shared/DynamicLink';
import './Footer.scss';



const Footer = () => (
  <div className="container-fluid">
  <footer className="footer">
    
      <div className="row">

        <div className="col-6">
          <div className="row">
            <div className="col-sm-4">
              <h5 className="footer-column__title">Name 1</h5>
              <ul>
                <li>
                  <span><a className="span" href="https://www.postman.com/careers/">Link</a></span>
                </li>
              </ul>
            </div>
            <div className="col-sm-4">
              <h5 className="footer-column__title">Name 1</h5>
              <ul>
                <li>
                  <span><a className="span" href="https://www.postman.com/careers/">Link</a></span>
                </li>
              </ul>
            </div>
            <div className="col-sm-4">
              <h5 className="footer-column__title">Name 1</h5>
              <ul>
                <li>
                  <span><a className="span" href="https://www.postman.com/careers/">Link</a></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="row">
            <div className="col-sm-4">
              <h5 className="footer-column__title">Name 2</h5>
              <ul>
                <li>
                  <span><a className="span" href="https://www.postman.com/careers/">Link</a></span>
                </li>
              </ul>
            </div>
            <div className="col-sm-4">
              <h5 className="footer-column__title">Name 2</h5>
              <ul>
                <li>
                  <span><a className="span" href="https://www.postman.com/careers/">Link</a></span>
                </li>
              </ul>
            </div>
            <div className="col-sm-4">
              <h5 className="footer-column__title">Name 2</h5>
              <ul>
                <li>
                  <span><a className="span" href="https://www.postman.com/careers/">Link</a></span>
                </li>
              </ul>
            </div>
          </div>
        </div>

       

      </div>
   
  </footer>
   </div>
);

export default Footer;