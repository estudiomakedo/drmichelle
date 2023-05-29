import React from 'react';
import styled from '@emotion/styled';
import footerImg from '../../static/footer.png';
import { SectionTitle } from '../components';

const Wrapper = styled.footer`
  justify-content: space-between;
  text-align: center;
  background: ${props => props.theme.colors.primary.base};
  background: linear-gradient(
    to bottom,
    ${props => props.theme.colors.primary.base} 0%,
    ${props => props.theme.colors.primary.base} 30%,
    ${props => props.theme.colors.primary.dark} 100%
  );
  padding: 1rem;
  @media screen and (min-width: ${props => props.theme.breakpoints.s}) {
    display: flex;
    flex-direction: row-reverse;
  }
`;

const Text = styled.p`
  font-size: 16px;
  color: #fafafa;
  font-family: Lato;
  margin: 0 0 0 0.5rem;

  @media screen and (min-width: ${props => props.theme.breakpoints.s}) {
    margin: 0;
  }
`;

const Footer = () => (
  <Wrapper>
    <Text>
      Dra. Michele Sartori <b>CRM 146176</b>
    </Text>

    <Text>© 2020 Todos os direitos reservados.</Text>
  </Wrapper>
);
export default Footer;
