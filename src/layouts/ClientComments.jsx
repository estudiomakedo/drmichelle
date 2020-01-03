import React from 'react';
import styled from '@emotion/styled';
import {SectionTitle, CommentCard} from '../components';

const Container = styled.div`
background-color: #FCFCFC;
`;

const Wrapper = styled.section`
max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 4rem 1rem 1rem;
  @media screen and (min-width:  ${props => props.theme.breakpoints.l}){
    padding: 0 0 4rem;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 0 3rem;
  flex-wrap: wrap;

  & section {
    margin-bottom: 4rem;

    @media screen and (min-width:  ${props => props.theme.breakpoints.s}){
      width: 43%;
      margin-bottom: 4rem;
    }

    @media screen and (min-width:  ${props => props.theme.breakpoints.l}){
      width: 22%;
    }
    
  }
`;

const ClientComments = () => (
  <Container>
    <Wrapper>
        <SectionTitle maxSize="2rem" text="O que nossos clientes dizem" styles={{padding: "3rem 3rem 1rem"}} />

        <Row>
          <CommentCard
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
            name="Rosana Weber"
          />
          <CommentCard
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
            name="Rosana Weber"
          />
          <CommentCard
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
            name="Rosana Weber"
          />
          <CommentCard
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
            name="Rosana Weber"
          />
        </Row>
      </Wrapper>
  </Container>

);
export default ClientComments;
