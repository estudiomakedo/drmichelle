import React from 'react';
import styled from '@emotion/styled';
import { jsx, css, keyframes } from '@emotion/core';

import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import Theme from '../../config/theme';
const getNumber = () => {
  let number = Math.floor(Math.random() * Math.floor(2));
  console.log(number);
  return number;
}

export const chooseFrontMatterColor = (number) => {
  switch (number){
    case 1:
      return Theme.colors.primary.base;
    case 0:
      return Theme.colors.secondary.base;
    default:
      return Theme.colors.primary.base;
  }
}

const FrontMatterTitle = styled.div`
  font-family: Lato; 
  font-weight: 700; 
  line-height: 1.2; 
  text-align: left;  
  font-size: 50px;
  color: #fafafa;
  display: block;
  text-shadow: 1px 1px 2px #676767;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    font-size: 35px
  }
`;

const FrontMatterSubTitle = styled.div`
  margin-bottom: 10px; 
  font-family: Lato; 
  font-weight: 400; 
  line-height: 1.2; 
  text-align: left;  
  font-size: 35px;
  color: #fafafa;
  display: block;
  text-shadow: 1px 1px 2px #676767;

  @media (max-width: ${props => props.theme.breakpoints.s}) {
    font-size: 16px
  }
`;

  
const fadeInDown = keyframes`
0% {
  transform: translate3d(0, -15%, 0);
}

50% {
  transform: none;
}

100% {
  transform: translate3d(0, -15%, 0);
}

`;

const ArrowDown = styled.div`
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: both;
  animation-play-state: running;
  animation: ${fadeInDown} 2s ease-in-out 0s infinite;


  width: 50px; 
  position: relative;
  top: 85vh;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

const imageStyle = {
  backGroundRepeat: "no-repeat",
  backGroundSize: "cover",
  height: "auto",
  left: '50%',
  minWidth: '100%',
  position: 'fixed',
  top: '45%',
  width: 'auto',
  transform: 'translateX(-50%) translateY(-50%)',
  zIndex: '-100',
  minHeight: "90vh"
}

const PostHeaderFull = ({ children, title, subtitle, image }) => (
  <div style={{height: "100vh", backgroundImage: `url(${image.src})`,}}>
    <div style={{position: "absolute", top: "60%", left: "5%", maxWidth: "997px"}}>
      <FrontMatterTitle>{title}</FrontMatterTitle>
      <FrontMatterSubTitle>{subtitle}</FrontMatterSubTitle>
    </div>
    <div style={{...imageStyle,  backgroundRepeat: "no-repeat", backgroundSize: "cover",}}></div>
    <ArrowDown>
      <svg color={"#fafafa"} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-down" className="svg-inline--fa fa-angle-down fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path></svg>
    </ArrowDown>
    {/*<img style={imageStyle} src={} alt="Gatsby Logo" />*/}
  </div> 
);

export default PostHeaderFull;

PostHeaderFull.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.bool,
  ]),
  subtitle: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.bool,
  ]),
};

PostHeaderFull.defaultProps = {
  children: false,
  cover: false,
  date: false,
  title: false,
};
