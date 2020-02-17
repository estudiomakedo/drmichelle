import React from 'react';
import styled from '@emotion/styled';
import {SectionTitle, BodyText} from '../components';
import balanca from '../../static/balancaN.jpg';
import consulta from '../../static/consultaN.jpg';
import theme from '../../config/theme';

const Container = styled.div`
background-color: #FCFCFC;
`;

const Wrapper = styled.section`
max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 4rem 1rem 1rem;
  @media screen and (min-width:  ${props => props.theme.breakpoints.m}){
    padding: 4rem;
  }
  @media screen and (min-width:  ${props => props.theme.breakpoints.l}){
    padding: 0 4rem;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  flex-wrap: wrap;


  @media screen and (min-width:  ${props => props.theme.breakpoints.l}){
    justify-content: space-between;
    align-items: center;
  }

  & .stepText {
    margin-bottom: 4rem;

    @media screen and (min-width:  ${props => props.theme.breakpoints.s}){
      width: 100%;
      margin-bottom: 4rem;
    }

    @media screen and (min-width:  ${props => props.theme.breakpoints.l}){
      width: 50%;
    }
    
  }

  & .stepImg {
    margin-bottom: 4rem;
    margin: 0 auto 4rem;

    @media screen and (min-width:  ${props => props.theme.breakpoints.s}){
      width: 40%;
    }

    @media screen and (min-width:  ${props => props.theme.breakpoints.l}){
      width: 45%;
      margin: 0 0 4rem;

    }

    @media screen and (min-width: 700px) and (max-width:  ${props => props.theme.breakpoints.l}){
      display: none;
    }
  }
`;

const RowSpecial = styled.div`
  display: none;
  justify-content: space-between;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 0 3rem;
  flex-wrap: wrap;

  @media screen and (min-width: 700px) and (max-width:  ${props => props.theme.breakpoints.l}){
    width: 90%;
    margin: 0 auto 0rem;
    justify-content: space-around;
    padding: 0;
    display: flex;
  }

  & .stepImg {
    margin-bottom: 4rem;

   
  }
`;

const RectBack = styled.div`
  height: 300px;
  width: 300px;
  position: absolute;
  background-color: ${props => props.theme.colors.primary.base};

  @media screen and (max-width: 768px){
    margin-top: 12px
  }

  @media screen and (min-width: 1024px){
    margin-top: 15px
  }

  @media screen and (min-width: 1300px){
    right: 13%
  }
`

const RectBackLeft = styled.div`
  height: 300px;
  width: 300px;
  position: absolute;
  background-color: ${props => props.theme.colors.secondary.base};
  border-top-left-radius: 50%;
  border-bottom-left-radius: 50%;
  
  @media screen and (max-width: 768px){
    margin-top: 12px
  }

  @media screen and (min-width: 1024px){
    margin-top: 15px
  }

  @media screen and (min-width: 1300px){
    left: 13%
  }
`

const RectImage = styled.img`
  height: 250px;
  z-index: 2;
  margin: 36px 0;
  position: relative;
  border: 5px solid #FCFCFC;
  border-radius: 4px;

  @media screen and (max-width: 768px){
    margin-top: 36px
  }

  @media screen and (min-width: 1024px){
    margin-top: 42px
  }

  @media screen and (max-width:  ${props => props.theme.breakpoints.s}){
    width: 100%;
    margin: 0 auto 4rem;
  }
`

const CircleImage = styled.img`
  height: 250px;
  z-index: 2;
  margin: 36px 0;
  position: relative;
  border: 5px solid #FCFCFC;
  border-radius: 50%;
  display: block;
  margin: 0 auto;

  @media screen and (max-width: 768px){
    margin-top: 36px
  }

  @media screen and (min-width: 1024px){
    margin-top: 42px
  }
`

const AConsulta = () => (
  <Container>
    <Wrapper>
        <SectionTitle maxSize="2rem" text="A consulta com a Dra. Michele" styles={{marginTop: "2rem"}} />

        <Row>
          <section className="stepText">
          <BodyText 
              paragraph1="
              Assim que o(a) paciente é acolhido no consultório da Dra. Michele Sartori, ele(a) já chega ciente de que naquele espaço, 
              será firmado um compromisso mútuo, visando a sua longevidade e manutenção da qualidade de vida.
                Antes, contudo, de examiná-lo fisicamente, na primeira consulta, que dura cerca de 1h a 1h30, a Dra. Michele costuma ter uma conversa olho-no-olho com o(a) paciente, 
                na qual abordamos todo o seu histórico de autocuidado, o histórico de doenças na família, as queixas atuais, os medos, o que já foi investigado e 
                principalmente o que ainda não foi, seja lá por qualquer razão. Procurando, assim, entender o ser humano à sua frente e situar-se em relação aos seus objetivos e metas.
              "
            />
          </section>

            <section className="stepImg">
              <RectBack/>
              <RectImage src={balanca}/>
            </section>
        </Row>

        <RowSpecial>

          <section className="stepImg">
              <RectBack/>
              <RectImage src={balanca}/>
            </section>
          <section className="stepImg">
            <RectBackLeft/>
            <CircleImage src={consulta}/>
          </section>
        </RowSpecial>

        <Row>
          <section className="stepImg">
            <RectBackLeft/>
            <CircleImage src={consulta}/>
          </section>
          <section className="stepText" style={{marginBottom: 0}}>
          <BodyText 
              paragraph1="
              A partir disso, é feito o exame de bioimpedância, que já está incluso na consulta, através do qual é medida a composição corporal do paciente. 
              Tendo em mãos os dados de massa corporal, metabolismo basal e índice de gordura, são relacionados os números com o que foi compartilhado através da conversa, 
              explicando a relação entre o que está escrito no resultado desse exame preliminar e as suas principais queixas. Gradativamente, as metas iniciais vão 
              sendo traçadas e são solicitados os exames complementares para que o(a) paciente possa ter plena consciência corporal antes de iniciar os protocolos e tratamentos adequados. E assim, 
              dá-se início ao que se chama de acompanhamento médico: uma jornada que o(a) paciente vai trilhar lado a lado com a doutora, 
              em busca de resultados cada vez mais satisfatórios."
            />
          </section>
        </Row>

        <BodyText styles={{maxWidth: "650px", margin: "0 auto"}} textStyles={{color: theme.colors.primary.base, fontWeight: 600, textAlign: "center"}}
          paragraph1="Alguma dúvida? Entre em contato com os nossos canais de atendimento e saiba como marcar uma consulta com a Dra. Michele!"
        />
      </Wrapper>
  </Container>

);
export default AConsulta;
