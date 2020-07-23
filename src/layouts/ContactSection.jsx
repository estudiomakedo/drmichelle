import React from 'react';
import styled from '@emotion/styled';
import footerImg from '../../static/footer.png';
import email from '../../static/email.png';
import phone from '../../static/phone.png';
import {SectionTitle} from '../components';

const Wrapper = styled.section`
  background: linear-gradient(113deg, #E9E9E9 0%, #FFFFFF 100%) 0% 0% no-repeat;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth};
`;

const ContactContainer = styled.div`
  padding: 4rem 1rem 1rem;
  width: 100%;
  @media screen and (min-width:  ${props => props.theme.breakpoints.m}){
    padding: 1;
    width: 80%;
  }
  @media screen and (min-width:  ${props => props.theme.breakpoints.l}){
    width: 70%;
  }
`;

const FooterImg = styled.img`
  margin: 0;
  max-width: 46%;
  right: 0;
  position: relative
`;


const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
`;

const ContactItemCliclable = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  cursor: pointer
`;

const ContactTextCliclable = styled.p`
  margin: 0 0 0 1rem;
  color: #7F7F7F !important;
  text-decoration: underline !important;
  font-size: 18px;

`;

const ContactText = styled.p`
  margin: 0 0 0 1rem;
  color: #7F7F7F !important;
  text-decoration: none !important;
  font-size: 18px;
`;

const Icon = styled.img`
  margin: 0;
  max-width: 35px;
`;

const MapsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width:  ${props => props.theme.breakpoints.m}){
    flex-direction: row;
  }
`;

const MapsContainer = styled.div`
  flex: 1;
  margin-top : 1rem;
  background-color: #0282A0;
  border: 4px solid #0282A0;
  border-radius: 3px 3px 10px 10px;
  max-width: 600px;
  margin: 0.5rem 0.5rem;

  @media screen and (min-width:  ${props => props.theme.breakpoints.m}){
    margin: 0 0.5rem;
  }
`;

const Address = styled.p`
  margin: 5px auto 5px;
  color: #fff;
  font-size: 18px;
  text-align: center;
`;

const ImageContainer = styled.div`
  background: url(${footerImg}) 100% 5% no-repeat;
  background-size: cover;
  background-position: center 50%;
  width: 50%;
  @media screen and (max-width:  768px){
    display: none;
  }
`;

const generateWhatsappMessage = () => {
  let text = "Olá! Obrigada por entrar em contato! Gostaria de marcar uma consulta com a Dra. Michele Sartori?"
  window.open(`https://wa.me/5511981466365?text=${encodeURIComponent(text)}`)
}

const ContactSection = () => (
  <Wrapper>
    <Row>
      <ContactContainer>
        <SectionTitle maxSize="2rem" text="Dúvidas? Fale comigo"  />
        <ContactItem>
          <Icon src={email} />
          <ContactText>
            atendimento@dramichelesartori.com.br
          </ContactText>
        </ContactItem>
        <ContactItemCliclable onClick={() => generateWhatsappMessage()}>
          <Icon src={phone} />
          <ContactTextCliclable>
            (11) 98146-6365
          </ContactTextCliclable>
        </ContactItemCliclable>
        <MapsWrapper>
          <MapsContainer>
            <iframe id="maps" style={{width: '100%', height: '14em', margin: 0}}
              frameborder="0"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAdi4vU2QNAh0TR18rrtVxWOwm0D_yS6qM&q=duarte+de+azevedo+448+santana+SP" allowfullscreen>
            </iframe>
            <Address>CLÍNICA SAÚDE INTEGRAL​​</Address>
            <Address>Rua Duarte de Azevedo, 448, Conj 121 - Santana, SP</Address>
          </MapsContainer>
          <MapsContainer>
            <iframe id="maps" style={{width: '100%', height: '14em', margin: 0}}
              frameborder="0"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAdi4vU2QNAh0TR18rrtVxWOwm0D_yS6qM&q=presidente+juscelino+kubitschek+1545+vila+nova+conceicao+SP" allowfullscreen>
            </iframe>
            <Address>CLÍNICA SAGAPO​​</Address>
            <Address>Av. Pres. Juscelino Kubitschek, 1545 - Vila Nova Conceição, SP</Address>
          </MapsContainer>
        </MapsWrapper>
        
      </ContactContainer>
      <ImageContainer>
        {/*<FooterImg src={footerImg} />*/}
      </ImageContainer>
    </Row>
  </Wrapper>
);
export default ContactSection;
