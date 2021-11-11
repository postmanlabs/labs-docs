import './ReflowImgWrapper.scss';
import React from 'react';
import errorImg from '../../images/postman-404-illustration-v6.svg';

const ReflowImgWrapper = () => (
  <div class="responsive-container">
    <img src={errorImg} alt="A bartnder in space letting you know that you're on the 404 page" />
  </div>
);

export default ReflowImgWrapper;
