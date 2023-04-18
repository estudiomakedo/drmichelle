import React from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import GoogleFontLoader from 'react-google-font-loader';
import theme from '../../config/theme';
import whatsapp from '../../static/whatsapp.png';

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

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.img`
  margin: 0 0 0 5px;
  max-width: 15px;
`;


export default class HeaderGradientSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      name: ""
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

  generateWhatsappMessage = (name, email, text) => {
    let firstPart = "Oi, tudo bem?";
    let secondPart = "Gostaria muito de agendar uma consulta";
    let thirdPart = "Quais são os horarios disponíveis?";

    if(!!name){
      firstPart = `Oi, eu me chamo ${name}.`;
    }
    if(!!email){
      secondPart = ` Gostaria muito de agendar uma consulta. Meu melhor método de contato é o ${email}. `;
    }
    if(!!text)
      thirdPart = text;
    window.open(`https://wa.me/5511939277280?text=${encodeURIComponent(firstPart)}%0A%0A${encodeURIComponent(secondPart)}%0A%0A${encodeURIComponent(thirdPart)}`)
  }
  render() {
    const {children, title, date} = this.props;
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
            <SectionTitle text="Quem é a Dra. Michele?" />
            <BodyText 
              paragraph1="
              A Dra. Michele Sartori é natural de São Paulo, graduada em medicina há 9 anos, 
              pela UFC - Universidade Federal do Ceará, com pós-graduação em Dermatologia Estética pela Faculdade ISMD-SP, 
              Medicina Preventiva pela Escola de Saúde Pública (Fortaleza - CE) e Ciências da Longevidade Humana Grupo Longevidade Saudável - SP. 
              A escolha da profissão se deu pelo apreço que tinha, desde cedo, pelo cuidado e atenção à pessoa humana, o que a fez se enveredar pelos estudos da vida e 
              longevidade saudável, sendo o seu enfoque profissional a área da Medicina Integrativa com vistas a promover a Longevidade Saudável de seus pacientes.
              "
              paragraph2="
              Sua trajetória acadêmica engloba especializações e aperfeiçoamentos voltados à prática da Medicina Integrativa, focalizando emagrecimento saudável, 
              longevidade, manutenção da qualidade de vida, tratamentos hormonais e metabólicos, prevenção de doenças e com o tempo, ela acabou virando referência em mulheres no climatério e menopausa.
              Sempre buscando conhecimento na área, a Dra. Michele Sartori tem como referências o Dr. Lair Ribeiro, Dr. Italo Rachid, Dr. Victor Sorrentino, Dr. Fernando Filho, Dr. Willy Mathias, Luciano Bueno entre outros."
            />
          </CollumnText>
          <CollumnAppointment>
            <AppointmentContainer>
              <AHeader borderRadius={this.state.isVisible} onClick={() => this.toggleForm()}>
                <ATitle>AGENDE SUA CONSULTA ONLINE</ATitle>
              </AHeader>
              {this.state.isVisible &&
              <ABody>
                <InputBlue onChange={event => this.setState({name: event.target.value})} value={this.state.name} placeholder="Seu nome" type="text"/>

                <InputBlue onChange={event => this.setState({email: event.target.value})} value={this.state.email} placeholder="Telefone ou e-mail de contato" type="text"/>

                <TextAreaBlue onChange={event => this.setState({text: event.target.value})} value={this.state.text} placeholder="Descreva aqui mais detalhes sobre o motivo de sua marcação">
                  
                </TextAreaBlue>

                <SubmitButton onClick={() => this.generateWhatsappMessage(this.state.name, this.state.email, this.state.text)}>
                  <SubmitButtonText>Enviar <Icon src={whatsapp} /></SubmitButtonText>
                </SubmitButton>
              
              </ABody>}
            </AppointmentContainer>
          </CollumnAppointment>
        </Row>
    </Wrapper>
    );
  }
}
  

