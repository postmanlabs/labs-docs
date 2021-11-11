import './ReflowImgWrapper.scss';
import React from 'react';
import errorImg from '../../images/postman-404-illustration-v6.svg';

const ReflowImgWrapper = () => (
  <div className="reflow-container">
    <img src={errorImg} alt="A bartender in space letting you know that you're on the 404 page" />
  </div>
);

export default ReflowImgWrapper;
