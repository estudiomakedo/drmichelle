import React from 'react';
import styled from '@emotion/styled';
import {SectionTitle, InstagramCard, BodyText} from '../components';
import instagram from '../../static/instagramColor.png'
import linkedin from '../../static/linkedin.png'
import facebook from '../../static/facebook.png'
import doctoralia from '../../static/doctoralia.png'

const Container = styled.div`
  background-image: linear-gradient(180deg, #FCFCFC 0%, #FCFCFC 49%, #d59cb9 100%);
`;

const Wrapper = styled.section`
max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 4rem 1rem 1rem;
  @media screen and (min-width:  ${props => props.theme.breakpoints.l}){
    padding: 0 0 4rem;
  }
  @media screen and (min-width:  ${props => props.theme.breakpoints.m}){
    padding: 4rem;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 0;
  flex-wrap: wrap;

  & section {
    width: 90%;
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

const ContainerBtn = styled.a`
  background-color: ${props => props.theme.colors.white.base};
  border-radius: 25px;
  padding: 10px 45px;
  margin-top: 2rem;
  box-shadow:  0px 3px 6px #00000029;
  max-width: 350px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;

  @media screen and (min-width:  ${props => props.theme.breakpoints.l}){
    margin-bottom: 0;
  }

`;

const Text = styled.p`
  color: #696969;
  text-align: center;
  font-size: 20px;
  margin:0;

  & img{
    display: inline;
  }
`;

const InstagramConnect = ({posts}) => (
  <Container>
    <Wrapper>
        <SectionTitle maxSize="2rem" text="DRA. MICHELE NA WEB" />
        <BodyText 
          paragraph1="
          A Dra. Michele tem uma forte presença digital, levando o cuidado que tem com os seus pacientes para os seus seguidores nas redes sociais, 
          publicando conteúdos exclusivos com informações médicas e dicas exclusivas para melhorar a qualidade de vida e promover a longevidade saudável. 
          Para ela, a saúde é uma mensagem que deve ser passada adiante e um dos seus compromissos como médica é de manter o seu público bem informado na web. 
          Siga a doutora no Instagram (dramichelesartori) e acompanhe no nosso blog os artigos especiais que a doutora e médicos convidados publicam mensalmente, 
          com exclusividade, para os nossos internautas. Aproveite!
          "
          paragraph2="
          Acompanhe a Dra. Michele nas redes sociais:
          "
        />
        <Row>
          {posts.map(e => (
            <InstagramCard
              key={e.node.id}
              text={e.node.caption.text}
              imgUrl={e.node.images.standard_resolution.url}
              link={e.node.link}
            />
          ))}
        </Row>
        <Row>

        <ContainerBtn href={"https://www.instagram.com/dramichelesartori"} target="__blank">
          <Icon src={instagram} />
          <Text>@dramichelesartori</Text>
        </ContainerBtn>

        <ContainerBtn href={"https://www.instagram.com/dramichelesartori"} target="__blank">
          <Icon src={doctoralia} />
          <Text>@dramichelesartori</Text>
        </ContainerBtn>

        <ContainerBtn href={"https://www.instagram.com/dramichelesartori"} target="__blank">
          <Icon src={facebook} />
          <Text>@dramichelesartori</Text>
        </ContainerBtn>

        <ContainerBtn href={"https://www.instagram.com/dramichelesartori"} target="__blank">
          <Icon src={linkedin} />
          <Text>@dramichelesartori</Text>
        </ContainerBtn>
        </Row>

      </Wrapper>
  </Container>

);
export default InstagramConnect;

InstagramConnect.defaultProps = {
  posts: [],
};

const Icon = styled.img`
  margin: 0 10px 0 0;
  max-width: 25px;
`;