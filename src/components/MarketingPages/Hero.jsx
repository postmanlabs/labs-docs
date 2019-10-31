import React from 'react';
import './Hero.scss';

const Hero = ({ title, text }) => (
  <div className="row text-center hero">
    <div className="col-12">
      <h1>{title}</h1>
    </div>
    <div className="col-12">
      <p>{text}</p>
    </div>
  </div>
);

export default Hero;
