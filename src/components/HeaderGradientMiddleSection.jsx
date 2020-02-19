import React from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
//import GoogleFontLoader from 'react-google-font-loader';

import cover from '../../static/photos/cover.jpeg'
import runners from '../../static/blog.jpg';
import runnerss from '../../static/blogs.jpg';
import green from '../../static/green.png'
import blue from '../../static/blue.png'
import RoundButton from './RoundButton';
import logo from '../../static/logo/header-logo.png';
import { Link } from 'gatsby';



const Wrapper = styled.header`
  height: 50vh;
  background: url(${runnerss});
  background-size: cover;
  background-position: center;
  margin: 0 auto;

  @media screen and (min-width: ${props => props.theme.breakpoints.s}) {
    background: url(${runners});
    background-size: cover;
    background-position: center;
    margin: 0 auto;
  }


  &:before {
    height: 50vh;
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 50vh;
    left: 0;
    opacity: 0.7;
    background-image: linear-gradient(119deg, ${props => props.theme.colors.primary.base} 0%, rgba(255,255,255, 0.3) 25%, rgba(220,220,220, 0.7) 55%, ${props => props.theme.colors.secondary.base} 100%);
    @media screen and (min-width: ${props => props.theme.breakpoints.s}) {
      background-image: linear-gradient(119deg, ${props => props.theme.colors.primary.base} 0%, rgba(255,255,255, 0.3) 49%, ${props => props.theme.colors.secondary.base} 100%);
    }
  }
`;

/*background-image: linear-gradient(119deg, #94C12880 0%, #7986711A 49%, #32A9E180 100%);*/


const Text = styled.div`
  color: ${props => props.theme.colors.white.base};
  z-index: 0;
  position: absolute;
  top: 40vh;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  max-width: ${props => props.theme.layout.base};
  align-items: center;

  @media screen and (max-width: ${props => props.theme.breakpoints.m}) {
    top: 40vh;
    left: 50%;
    max-width: 800px;
  }


  @media screen and (min-width: ${props => props.theme.breakpoints.m}) and (max-width: ${props => props.theme.breakpoints.l}) {
    top: 40vh;
    left: 39%;
    max-width: 800px;
    margin-left: 4rem;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.l}) {
    top: 40vh;
    left: 40%;
    max-width: 1000px;
  
  }
`;

const Subtitle = styled.p`
  max-width: 650px;
  color: ${props => props.theme.colors.white.light};
`;

const PositiveMessage = styled.h1`
text-align: center;
display: block; 
font-size: 50px;
letter-spacing: 0;
color: #FFFFFF;
font-weight: 400;
text-shadow: 0px 3px 6px #00000050;
width: 100%;
margin-bottom: 0;
opacity: 1;
font-family: Lato;
line-height: 1.2;

@media screen and (min-width: ${props => props.theme.breakpoints.s}) {
  font-size: 50px;
  text-align: left;
  width: 90%;
  align-self: flex-start;
  text-shadow: 0px 3px 6px #00000029;
  margin-left: 2rem;
}

@media screen and (min-width: ${props => props.theme.breakpoints.m}) and (max-width: ${props => props.theme.breakpoints.l}) {
  font-size: 60px;
  text-align: left;
  width: 100%;
}

@media screen and (min-width: ${props => props.theme.breakpoints.l}) and (max-width: ${props => props.theme.breakpoints.lx}) {
  font-size: 65px;
  text-align: left;
  width: 100%;

}

@media screen and (min-width: ${props => props.theme.breakpoints.lx}) {
  font-size: 70px;
  text-align: left;
  width: 90%;

}
`;

const StyledLink = styled(Link)`
  display: flex;
  font-weight: 700;
  align-items: center;
  justify-content: center;

  position: relative;
  top: 50px;
  @media screen and (min-width:  ${props => props.theme.breakpoints.s}){
    position: relative;
    top: 80px;
  }


  @media screen and (min-width:  ${props => props.theme.breakpoints.m}){
    justify-content: center;
  }

`;

const Logo = styled.img`
  max-width: 300px;

  @media screen and (min-width:  ${props => props.theme.breakpoints.s}){
    max-width: 350px;

  }
`;

const HeaderGradientMiddleSection = ({ children, title, date }) => (
  <Wrapper>
    <StyledLink to="/">
      <Logo src={logo} alt="Gatsby Logo" />
    </StyledLink>
    <Text>
      <PositiveMessage>{title}</PositiveMessage>
    </Text>
      {children && <Subtitle>{children}</Subtitle>}
    
  </Wrapper>
);

export default HeaderGradientMiddleSection;

HeaderGradientMiddleSection.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.bool,
  ]),
};

HeaderGradientMiddleSection.defaultProps = {
  children: false,
  date: false,
  title: false,
};
