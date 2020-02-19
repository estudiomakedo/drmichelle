import React from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import GoogleFontLoader from 'react-google-font-loader';
import theme from '../../config/theme';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Link } from 'gatsby';

import {SectionTitle} from '../components';

import amil from '../../static/convenios/amil.png';
import bradesco from '../../static/convenios/bradesco.png';
import careplus from '../../static/convenios/careplus.png';
import onehealth from '../../static/convenios/onehealth.png';
import portoseguro from '../../static/convenios/portoseguro.jpg';
import sompo from '../../static/convenios/sompo.png';
import sulamerica from '../../static/convenios/sulamerica.png';
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
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-evenly;
  @media screen and (min-width:  ${props => props.theme.breakpoints.s}){
    flex-direction: row;
  }

  @media screen and (min-width:  ${props => props.theme.breakpoints.l}){
    justify-content: space-evenly;
  }
`;

const Card = styled.div`
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 20px;
  padding: 15px;
  margin: 15px 15px 20px;
  width: 120px;
  @media screen and (min-width:  ${props => props.theme.breakpoints.s}){
    margin-bottom: 0;
    max-width: 300px;
    width: 150px;
  }

  & img {
    margin: 0;
    max-height: 100%;
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
                <SectionTitle maxSize="2rem" text="Convênios Aceitos" />
                <CardRow>
                  <Card>
                    <img src={amil} />
                  </Card>
                  <Card>
                    <img src={bradesco} />
                  </Card>
                  <Card>
                    <img src={careplus} />
                  </Card>
                  <Card>
                    <img src={onehealth} />
                  </Card>
                  <Card>
                    <img src={portoseguro} />
                  </Card>
                  <Card>
                    <img src={sompo} />
                  </Card>
                  <Card>
                    <img src={sulamerica} />
                  </Card>
                </CardRow>
              </CollumnText>
              <Link to="/convenios" style={{margin: "1rem auto 0", display: this.props.showLink ? "block" : "none" }}>
                <SectionTitle styles={{display: "block", width: "100%", textAlign: "center", fontSize: "1.2rem", color: theme.colors.secondary.light, fontWeight: 500}} maxSize="1rem" text="Clique aqui e acesse todas as informações" />
              </Link>
            </Row>
            
          </Wrapper>
      );
    }
  }

PartnersSection.defaultProps = {
  children: false,
  date: false,
  title: false,
  showLink: true
};
