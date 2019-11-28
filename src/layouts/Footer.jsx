import React from 'react';
import styled from '@emotion/styled';
import footerImg from '../../static/footer.png';
import {SectionTitle} from '../components';

const Wrapper = styled.footer`
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

const Footer = () => (
  <Wrapper>
    <ContactContainer>
      <SectionTitle maxSize="1.8rem" text="Dúvidas? Fale comigo"  />

    </ContactContainer>
    <FooterImg src={footerImg} />
  </Wrapper>
);
export default Footer;
