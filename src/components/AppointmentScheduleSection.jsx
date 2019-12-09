import React from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
//import GoogleFontLoader from 'react-google-font-loader';
import theme from '../../config/theme';

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
  @media screen and (max-width:  ${props => props.theme.breakpoints.m}){
    flex-direction: column;
  }
`;

const CollumnText = styled.div`
  width: 100%;
  @media screen and (min-width:  ${props => props.theme.breakpoints.m}){
    flex:11;
    padding: 3rem 2rem 3rem 3rem;
    width: 100%;
  }
  @media screen and (min-width:  ${props => props.theme.breakpoints.l}){
    flex:2;
    width: 70%;
  }
`;

const CollumnAppointment = styled.div`
  width: 100%; 
  @media screen and (min-width:  ${props => props.theme.breakpoints.m}){
    flex:5;
    padding: 3rem 0;
    width: 100%;
  }
  @media screen and (min-width:  ${props => props.theme.breakpoints.l}){
    flex:1;
    width: 30%;
  }
`;

const AppointmentContainer = styled.div`
  border-radius: 20px;
  box-shadow: 0px 3px 6px #00000029;
  max-width: 300px;

  @media screen and (max-width:  ${props => props.theme.breakpoints.m}){
    margin: 0 auto;
  }

  @media screen and (min-width:  ${props => props.theme.breakpoints.m}){
    position: relative;
    top: -172px;
  }
`;
const AHeader = styled.div`
  cursor: pointer;
  border-radius: ${props => props.borderRadius ? "20px 20px 0 0" : "20px"};
  background-color: ${props => props.theme.colors.secondary.base};
  padding: 1rem 0.5rem;
`;

const ATitle = styled.h3`
  color: ${props => props.theme.colors.white.base};
  font-size: 1.2rem;
  text-align: center;
  margin: 0;
`;

const ABody = styled.div`
  padding: 1rem;
  background-color: ${props => props.theme.colors.white.base};
  border-radius: 0 0 20px 20px;
`;

const InputBlue = styled.input`
  background-color: ${props => props.theme.colors.secondary.lighter};
  border: 0;
  width: 100%;
  margin-bottom: 1rem;
  color: #404142;
  padding: 0.5rem;
  font-size: 13px;

`

const TextAreaBlue = styled.textarea`
  background-color: ${props => props.theme.colors.secondary.lighter};
  border: 0;
  width: 100%;
  height: 200px;
  margin-bottom: 1rem;
  color: #404142;
  padding: 0.5rem;
  font-size: 13px;
`;

const SubmitButton = styled.a`
  background-color: ${props => props.theme.colors.secondary.base};
  border-radius: 17px;
  display: block;
  max-width: 100px;
  margin: 0 auto;
`;

const SubmitButtonText = styled.p`
  font-size: 14px;
  color: ${props => props.theme.colors.white.base};
  padding: 0.4rem;
  text-align: center;
  margin: 0;
`;


export default class HeaderGradientSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
  }

  componentDidMount() {
    this.ScrollRateCalculation()
  }

  ScrollRateCalculation() {
    let bodyElement = document.getElementById('___gatsby');//B1
    let rect = bodyElement.getBoundingClientRect();//B2
    let widthHtml = rect.width;
    console.log(widthHtml)

    if(widthHtml >= parseFloat(theme.breakpoints.m)){
      this.setState({isVisible: true});
      console.log(this.state)
    }
  }

  toggleForm = () => {
    console.log("toggle");
    this.setState({isVisible: !this.state.isVisible})
  }
  render() {
    const {children, title, date} = this.props;
    return (
      <Wrapper>
        <Row>
          <CollumnText>
            <SectionTitle text="Dê boas-vindas a sua melhor versão!" />
            <BodyText 
              paragraph1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
              paragraph2="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            />
          </CollumnText>
          <CollumnAppointment>
            <AppointmentContainer>
              <AHeader borderRadius={this.state.isVisible} onClick={() => this.toggleForm()}>
                <ATitle>AGENDE SUA CONSULTA ONLINE</ATitle>
              </AHeader>
              {this.state.isVisible &&
              <ABody>
                <InputBlue placeholder="Seu nome" type="text"/>

                <InputBlue placeholder="Telefone ou e-mail de contato" type="text"/>

                <TextAreaBlue defaultValue="Descreva aqui mais detalhes sobre o motivo de sua marcação">
                  
                </TextAreaBlue>

                <SubmitButton>
                  <SubmitButtonText>Enviar</SubmitButtonText>
                </SubmitButton>
              </ABody>}
            </AppointmentContainer>
          </CollumnAppointment>
        </Row>
    </Wrapper>
    );
  }
}
  
