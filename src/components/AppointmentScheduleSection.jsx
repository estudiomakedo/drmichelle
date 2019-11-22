import React from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
//import GoogleFontLoader from 'react-google-font-loader';

import SectionTitle from './SectionTitle';
import BodyText from './BodyText';

const Wrapper = styled.header`
  padding: 2rem 1rem;
  background-color:  ${props => props.theme.colors.secondary.lighter};

`;

const Row = styled.div`
  display: flex;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;

const CollumnText = styled.div`
  width: 100%;
  @media screen and (min-width:  ${props => props.theme.breakpoints.m}){
    padding: 3rem;
    width: 100%;
  }
  @media screen and (min-width:  ${props => props.theme.breakpoints.l}){
    width: 60%;
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
    
    <Row>
      <CollumnText>
        <SectionTitle text="Dê boas-vindas a sua melhor versão!" />
        <BodyText 
          paragraph1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          paragraph2="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        />
      </CollumnText>
     
    </Row>
    

    
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
