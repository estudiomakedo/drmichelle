import React from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import GoogleFontLoader from 'react-google-font-loader';
import theme from '../../config/theme';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import {SectionTitle} from '../components';
import amil from '../../static/convenios/amil.png';
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
  flex-wrap: wrap;
`;

const CollumnText = styled.div`
  width: 100%;

  @media screen and (min-width:  ${props => props.theme.breakpoints.m}){
    padding: 3rem;
    width: 100%;
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

  @media screen and (min-width:  ${props => props.theme.breakpoints.l}){
    justify-content: flex-start;
  }
`;

const Card = styled.div`
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 20px;
  padding: 15px;
  margin: 15px 15px 20px;
  display: flex;
  max-width: 200px;
  @media screen and (min-width:  ${props => props.theme.breakpoints.s}){
    margin-bottom: 0;
    max-width: 300px;

  }

  & img {
    margin: 0
  }
  
`;



// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#___gatsby')


export default class PartnersSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      specialityChosen: {title: "Especialidade"}
    };
  }

  componentDidMount() {
  }

  openModal = (num) => {
    this.setState({modalIsOpen: !this.state.modalIsOpen})
  }

    render() {
      return (
        <Wrapper>
        <GoogleFontLoader
          fonts={[
              {
                  font: 'Lato',
                  weights: [300, 400, 600],
              },
          ]}
        />
            <Row>
              <CollumnText>
                <SectionTitle maxSize="1.8rem" text="Convênios Aceitos" />
                <CardRow>
                  <Card>
                    <img src={amil} />
                  </Card>
                  <Card>
                    <img src={amil} />
                  </Card>
                  <Card>
                    <img src={amil} />
                  </Card>
                </CardRow>
              </CollumnText>
            </Row>
            
          </Wrapper>
      );
    }
  }

PartnersSection.defaultProps = {
  children: false,
  date: false,
  title: false,
};