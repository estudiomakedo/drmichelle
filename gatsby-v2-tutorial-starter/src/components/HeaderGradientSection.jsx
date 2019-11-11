import React from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import GoogleFontLoader from 'react-google-font-loader';

import cover from '../../static/photos/cover.jpeg'
import RoundButton from './RoundButton';


const Wrapper = styled.header`
  height: 100vh;
  background: url(${cover}) 90% 150% no-repeat;
  background-size: 300px;
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth};

  @media screen and (min-width: ${props => props.theme.breakpoints.s}) {
    background: url(${cover}) 90% 200% no-repeat;
    background-size: 400px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.m}) {
    background: url(${cover}) 90% -50% no-repeat;
    background-size: 550px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.l}) and (max-width: ${props => props.theme.breakpoints.lx}) {
    background: url(${cover}) 90% 10vh no-repeat;
    background-size: 650px;
  }

  
  @media screen and (min-width: ${props => props.theme.breakpoints.lx}) {
    background: url(${cover}) 100% 10vh no-repeat;
    background-size: 650px;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0.7;
    background-image: linear-gradient(119deg, #94C12880 0%, #7986711A 49%, #32A9E180 100%);
  }
`;

const Text = styled.div`
  color: ${props => props.theme.colors.white.base};
  z-index: 0;
  position: absolute;
  top: 50%;
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

  @media screen and (max-width: ${props => props.theme.breakpoints.m}) {
    top: 50%;
    left: 50%;
    max-width: 800px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.m}) and (max-width: ${props => props.theme.breakpoints.l}) {
    top: 50%;
    left: 40%;
    max-width: 800px;
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
  font-size: 60px;
  text-align: left;
  width: 90%;
  align-self: flex-start;
  text-shadow: 0px 3px 6px #00000029;
}

@media screen and (min-width: ${props => props.theme.breakpoints.m}) and (max-width: ${props => props.theme.breakpoints.l}) {
  font-size: 75px;
  text-align: left;
  width: 100%;

}

@media screen and (min-width: ${props => props.theme.breakpoints.l}) and (max-width: ${props => props.theme.breakpoints.lx}) {
  font-size: 85px;
  text-align: left;
  width: 100%;

}

@media screen and (min-width: ${props => props.theme.breakpoints.lx}) {
  font-size: 85px;
  text-align: left;
  width: 90%;

}
`;

const ImgFixed = styled.img`
  width: 300px
`;

const HeaderGradientSection = ({ children, title, date }) => (
  <Wrapper>
    <GoogleFontLoader
          fonts={[
              {
                  font: 'Lato',
                  weights: [300, 400, 600],
              },
          ]}
      />
    {/*<ImgFixed src={cover} />*/}
    <Text>
      <PositiveMessage>Medicina</PositiveMessage>
      <PositiveMessage>Preventiva, Emagrecimento e Longevidade Saudável</PositiveMessage>
      <RoundButton text="CONHEÇA" />
    </Text>
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
