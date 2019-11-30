import React from 'react';
import styled from '@emotion/styled';
import footerImg from '../../static/footer.png';
import email from '../../static/email.png';
import phone from '../../static/phone.png';
import {SectionTitle} from '../components';

const Wrapper = styled.section`
  display: flex;
  jusitfy-content: space-between;
  background: linear-gradient(113deg, #E9E9E9 0%, #FFFFFF 100%) 0% 0% no-repeat;
`;

const ContactContainer = styled.div`
  padding: 4rem 3rem 1rem;
  width: 50%;
`;

const FooterImg = styled.img`
  margin: 0;
  max-width: 56%;
`;


const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin: 0.7rem 0;
`;

const ContactText = styled.p`
  margin: 0 0 0 1rem;
  color: #7F7F7F;
  font-size: 18px;
`;

const Icon = styled.img`
  margin: 0;
  max-width: 70px;
`;

const ContactSection = () => (
  <Wrapper>
    <ContactContainer>
      <SectionTitle maxSize="1.8rem" text="Dúvidas? Fale comigo"  />
      <ContactItem>
        <Icon src={email} />
        <ContactText>
          contato@drmichelle.com.br
        </ContactText>
      </ContactItem>
      <ContactItem>
        <Icon src={phone} />
        <ContactText>
          (11) 9999-9999
        </ContactText>
      </ContactItem>
    </ContactContainer>
    <FooterImg src={footerImg} />
  </Wrapper>
);
export default ContactSection;
