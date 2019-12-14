import React from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
//import GoogleFontLoader from 'react-google-font-loader';

import cover from '../../static/photos/cover.jpeg'
import green from '../../static/green.png'
import blue from '../../static/blue.png'
import RoundButton from './RoundButton';
import logo from '../../static/logo/header-logo.png';
import { Link } from 'gatsby';


/*
  @media screen and (min-width: ${props => props.theme.breakpoints.s}) {
    background: url(${cover}) 70% 200% no-repeat;
    background-size: 450px;
  }

    @media screen and (min-width: ${props => props.theme.breakpoints.m}) {
    background: url(${cover}) 90% -50% no-repeat;
    background-size: 550px;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.l}) and (max-width: ${props => props.theme.breakpoints.lx}) {
    background: url(${cover}) 90% -8vh no-repeat;
    background-size: 650px;
  }

  
  @media screen and (min-width: ${props => props.theme.breakpoints.lx}) {
    background: url(${cover}) 100% -14vh no-repeat;
    background-size: 700px;
  }
*/

const Wrapper = styled.header`
  height: 100vh;
  background: url(${cover}) 33% 12% no-repeat;
  background-size: 856px;
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth};

  @media screen and (min-width: ${props => props.theme.breakpoints.xs}) {
    height: 100vh;
    background: url(${cover}) 70% bottom no-repeat;
    background-size: 500px;
    margin: 0 auto;
    max-width: ${props => props.theme.maxWidth};
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.s}) {
    background: url(${cover}) 148% 0% no-repeat;
    background-size: 550px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.m}) {
    background: url(${cover}) 90% 0% no-repeat;
    background-size: 550px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.l}) and (max-width: ${props => props.theme.breakpoints.lx}) {
    background: url(${cover}) 90% -8vh no-repeat;
    background-size: 650px;
  }

  
  @media screen and (min-width: ${props => props.theme.breakpoints.lx}) {
    background: url(${cover}) 100% -14vh no-repeat;
    background-size: 700px;
  }

  @media screen and (min-height: 900px) {
    background: url(${cover}) 100% 100% no-repeat;
    background-size: 700px;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0.7;
    background-image: linear-gradient(119deg, ${props => props.theme.colors.primary.base} 0%, #7986711A 49%, ${props => props.theme.colors.secondary.base} 100%);

  }
`;

/*background-image: linear-gradient(119deg, #94C12880 0%, #7986711A 49%, #32A9E180 100%);*/


const Text = styled.div`
  color: ${props => props.theme.colors.white.base};
  z-index: 0;
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  max-width: ${props => props.theme.layout.base};
  padding: 0 2rem;
  margin-bottom: 3rem;
  align-items: center;

  @media screen and (min-width: ${props => props.theme.breakpoints.xs}) and (max-width: ${props => props.theme.breakpoints.m}) {
    top: 69%;
    left: 50%;
    max-width: 800px;
  }


  @media screen and (min-width: ${props => props.theme.breakpoints.m}) and (max-width: ${props => props.theme.breakpoints.l}) {
    top: 50%;
    left: 39%;
    max-width: 800px;
    margin-left: 2rem;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.l}) {
    top: 50%;
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
font-size: 35px;
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

const ImgFixed = styled.img`
  width: 300px
`;

const ImgGreen = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  max-width: 50px;
  @media screen and (min-width:  ${props => props.theme.breakpoints.m}){
    max-width: 100px;
  }
  @media screen and (min-width:  ${props => props.theme.breakpoints.l}){
    max-width: 150px;
  }
`;

const ImgBlue = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0;
  max-width: 50px;
  @media screen and (min-width:  ${props => props.theme.breakpoints.m}){
    max-width: 100px;
  }
  @media screen and (min-width:  ${props => props.theme.breakpoints.l}){
    max-width: 150px;
  }
`;

const StyledLink = styled(Link)`

    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 20px;

  @media screen and (min-width:  ${props => props.theme.breakpoints.xs}){
    display: flex;
    font-weight: 700;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 30px;

  }


  @media screen and (min-width:  ${props => props.theme.breakpoints.m}){
    justify-content: flex-end;
  }

`;

const Logo = styled.img`

max-width: 240px;

  @media screen and (min-width:  ${props => props.theme.breakpoints.xs}){
    max-width: 330px;
  }
  
`;


const HeaderGradientSection = ({ children, title, date }) => (
  <Wrapper>
    {/*<GoogleFontLoader
          fonts={[
              {
                  font: 'Lato',
                  weights: [300, 400, 600],
              },
          ]}
        />*/}
    {/*<ImgFixed src={cover} />*/}
    {/*<ImgGreen src={green} />
    <ImgBlue src={blue} />*/}

    <Text>
      <PositiveMessage>Medicina</PositiveMessage>
      <PositiveMessage>Preventiva,</PositiveMessage> 
      <PositiveMessage>Emagrecimento e</PositiveMessage> 
      <PositiveMessage>Longevidade Saudável</PositiveMessage>
      <RoundButton text="CONHEÇA" />
    </Text>

    <StyledLink to="/">
      <Logo src={logo} alt="Gatsby Logo" />
    </StyledLink>
      {children && <Subtitle>{children}</Subtitle>}
    
  </Wrapper>
);

export default HeaderGradientSection;

HeaderGradientSection.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.bool,
  ]),
};

HeaderGradientSection.defaultProps = {
  children: false,
  date: false,
  title: false,
};
