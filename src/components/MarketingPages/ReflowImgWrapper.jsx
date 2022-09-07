import React from 'react';
import styled from 'styled-components';

const ImgWrapper = styled.div`
  width: 100%;
  padding-bottom: 56.25%; /* 9/16 = aspect ratio of image */
  position: relative;
 img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
`

const ReflowImgWrapper = () => (
  <ImgWrapper className="reflow-container">
    <img src="https://voyager.postman.com/illustration/postman-404-illustration.svg" alt="A bartender in space letting you know that you're on the 404 page" />
  </ImgWrapper>
);

export default ReflowImgWrapper;
