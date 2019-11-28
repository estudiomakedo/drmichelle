import React from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
//import GoogleFontLoader from 'react-google-font-loader';
import theme from '../../config/theme';

import SectionTitle from './SectionTitle';
import BodyText from './BodyText';
import runners2 from '../../static/runners2.jpg';
const Wrapper = styled.header`
  padding: 2rem 1rem;
  background-color: #FCFCFC;
  @media screen and (min-width:  ${props => props.theme.breakpoints.l}){
    padding: 0;
  }
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
    width: 70%;
  }
`;


const ImgColumn = styled.div`
  background: url(${runners2});
  background-size: cover;
  width: 100%;
  display: bock;

  @media screen and (min-width:  ${props => props.theme.breakpoints.m}){
    width: 100%;
  }
  @media screen and (min-width:  ${props => props.theme.breakpoints.l}){
    width: 30%;
  }
`;

const CardRow = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;

  justify-content: space-between;
  @media screen and (min-width:  ${props => props.theme.breakpoints.s}){
    flex-direction: row;
  }
`;

const Card = styled.div`
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 20px;
  padding: 15px;
  margin: 60px 15px 20px;
  max-width: 300px;
  @media screen and (min-width:  ${props => props.theme.breakpoints.s}){
    margin-bottom: 0;
  }

`;

const CardBall = styled.div`
  padding: 20px;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  box-shadow: 0px 3px 6px #00000029;
  background-color: ${props => props.bgColor};

  position: relative;
  top: -70px;
  margin: 0 auto;
  font-size: 40px;
  display: flex;
  justify-content: center;
  color: #fff;
  font-weight: 300;
  margin-bottom: -50px;
`;

const CardTitle = styled.h5`
  text-align: center;
  font-family: Lato;
  font-size: 1.5rem;
  font-weight: 300;
  letter-spacing: 0;
  color: #666666;
  opacity: 1;
`;

const CardBody = styled.p`
  text-align: center;
  font-family: Lato;
  font-size: 1rem;
  font-weight: 300;
  letter-spacing: 0;
  color: #707070;
  opacity: 1;
  margin: 0 0 10px;
`;

const CardButton = styled.div`
  border-radius: 18px;
  background-color: ${props => props.bgColor};
  font-size: 0.7rem;
  text-align: center;
  color: #fff;
  padding: 0.3rem;
  margin: 0 auto;
  font-weight: 300;
  max-width: 150px;

`;


const OurSpecialitySection = ({ children, title, date }) => (
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
        <SectionTitle maxSize="1.8rem" text="Seja qual for seu passado, ou histórico familiar, podemos chegar juntos ao seu objetivo." />
        <CardRow>
          <Card>
            <CardBall bgColor={theme.colors.primary.base}>
              <p>AB</p>
            </CardBall>
            <CardTitle>Especialidade</CardTitle>
            <CardBody>Ut enim ad minim veniam, quis nostrud exercitation ullamco.Duis aute irure dolor.</CardBody>
            <CardButton bgColor={theme.colors.primary.base}>Quero saber mais</CardButton>
          </Card>
          <Card>
            <CardBall bgColor={theme.colors.secondary.base}>
              <p>AB</p>
            </CardBall>
            <CardTitle>Especialidade</CardTitle>
            <CardBody>Ut enim ad minim veniam, quis nostrud exercitation ullamco.Duis aute irure dolor.</CardBody>
            <CardButton bgColor={theme.colors.secondary.base}>Quero saber</CardButton>
          </Card>
          <Card>
            <CardBall bgColor={theme.colors.primary.base}>
              <p>AB</p>
            </CardBall>
            <CardTitle>Especialidade</CardTitle>
            <CardBody>Ut enim ad minim veniam, quis nostrud exercitation ullamco.Duis aute irure dolor.</CardBody>
            <CardButton bgColor={theme.colors.primary.base}>Quero saber mais</CardButton>
          </Card>
        </CardRow>
      </CollumnText>
      <ImgColumn>
      </ImgColumn>     
    </Row>
    

    
  </Wrapper>
);

export default OurSpecialitySection;

OurSpecialitySection.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.bool,
  ]),
};

OurSpecialitySection.defaultProps = {
  children: false,
  date: false,
  title: false,
};
