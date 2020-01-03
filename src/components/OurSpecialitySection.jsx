import React from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import GoogleFontLoader from 'react-google-font-loader';
import theme from '../../config/theme';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import SectionTitle from './SectionTitle';
import BodyText from './BodyText';
import runners2 from '../../static/runners2.jpg';
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
  @media screen and (min-width:  ${props => props.theme.breakpoints.l}){
    width: 70%;
  }
`;


const ImgColumn = styled.div`
  background: url(${runners2});
  background-size: cover;
  background-position: center;

  @media screen and (min-width:  ${props => props.theme.breakpoints.m}){
    width: 100%;
  }
  @media screen and (min-width:  ${props => props.theme.breakpoints.l}){
    width: 30%;
  }
`;

const CardRow = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;

  justify-content: center;
  @media screen and (min-width:  ${props => props.theme.breakpoints.s}){
    flex-direction: row;
  }

  @media screen and (min-width:  ${props => props.theme.breakpoints.m}){
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const Card = styled.div`
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 20px;
  padding: 15px;
  margin: 80px 15px 20px;
  max-width: 300px;
  @media screen and (min-width:  ${props => props.theme.breakpoints.s}){
    margin-bottom: 0;
  }

`;

const CardBall = styled.div`
  padding: 20px;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  box-shadow: 0px 3px 6px #00000029;
  background-color: ${props => props.bgColor};

  position: relative;
  top: -70px;
  margin: 0 auto;
  font-size: 40px;
  display: flex;
  justify-content: center;
  color: #fff;
  font-weight: 300;
  margin-bottom: -50px;
`;

const CardTitle = styled.h5`
  text-align: center;
  font-family: Lato;
  font-size: 1.5rem;
  font-weight: 300;
  letter-spacing: 0;
  color: #666666;
  opacity: 1;
`;

const CardBody = styled.p`
  text-align: center;
  font-family: Lato;
  font-size: 1rem;
  font-weight: 300;
  letter-spacing: 0;
  color: #707070;
  opacity: 1;
  margin: 0 0 10px;
`;

const CardButton = styled.div`
  cursor: pointer;
  border-radius: 18px;
  background-color: ${props => props.bgColor};
  font-size: 0.7rem;
  text-align: center;
  color: #fff;
  padding: 0.3rem;
  margin: 1rem auto 0;
  font-weight: 300;
  max-width: 150px;

`;

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    borderRadius          : '10px',
    maxWidth              : "500px",
    boxShadow             : "1px 1px 3px #000029"
  }
};


// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#___gatsby')


export default class OurSpecialitySection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      specialityChosenTitle: "",
      chosenText: 1
    };
  }

  componentDidMount() {
  }

  openModal = (num, title) => {
    this.setState({ modalIsOpen: !this.state.modalIsOpen,
                    specialityChosenTitle: title,
                    chosenText: num
                  })
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
                <SectionTitle maxSize="1.8rem" text="Seja qual for seu passado, ou histórico familiar, podemos chegar juntos ao seu objetivo." />
                <CardRow>
                  <Card>
                    <CardBall bgColor={theme.colors.primary.base}>
                      <p>ES</p>
                    </CardBall>
                    <CardTitle>Emagrecimento Saudável</CardTitle>
                    <CardBody>Trata-se na elaboração de um plano personalizado para você, sem dietas malucas ou projeções ilusórias.</CardBody>
                    <CardButton onClick={() => this.openModal(1, "Medicina Preventiva")} bgColor={theme.colors.primary.base}>Quero saber mais</CardButton>
                  </Card>
                  <Card>
                    <CardBall bgColor={theme.colors.secondary.base}>
                      <p>LH</p>
                    </CardBall>
                    <CardTitle>Longevidade Humana</CardTitle>
                    <CardBody>Foco em aumentar a longevidade do paciente através da Medicina Preventiva, proporcionando um bem-estar prolongado na melhor idade.</CardBody>
                    <CardButton onClick={() => this.openModal(2, "Longevidade Humana")} bgColor={theme.colors.secondary.base}>Quero saber</CardButton>
                  </Card>
                  <Card>
                    <CardBall bgColor={theme.colors.primary.base}>
                      <p>DC</p>
                    </CardBall>
                    <CardTitle>Dermatologia Clínica</CardTitle>
                    <CardBody>Trata-se no diagnóstico, prevenção e tratamento de doenças e afecções relacionadas à pele, pelos, mucosas, cabelo e unhas.</CardBody>
                    <CardButton onClick={() => this.openModal(3, "Dermatologia Clínica")} bgColor={theme.colors.primary.base}>Quero saber mais</CardButton>
                  </Card>
                </CardRow>
              </CollumnText>
              <ImgColumn>
              </ImgColumn>     
            </Row>
            
            <Modal
              isOpen={this.state.modalIsOpen}
              onRequestClose={() => this.setState({ modalIsOpen: false })}
              style={customStyles}
              contentLabel="Example Modal"
            >
              
              <CardTitle>{this.state.specialityChosenTitle}</CardTitle>

              {this.state.chosenText == 1 && 
              <div>
                <CardBody>
                  A calma é parceira do emagrecimento saudável. Quando se acelera o processo, o corpo se torna fraco e desmotivado. Se você pegar pesado nos exercícios, pode até sofrer uma lesão. 
                  Não é possível manter uma dieta assim por muito tempo. Por isso é extremamente importante fazer mudanças graduais.
                </CardBody>
              </div>}

              {this.state.chosenText == 2 && 
              <div>
                <CardBody>
                  O conceito de longevidade humana vai muito além de uma vida com poucas doenças, 
                  sem muitos remédios no armário de casa e vivendo plenamente na companhia de netos e bisnetos.
                </CardBody>
                <CardBody>
                  Os avanços científicos que houveram na medicina, proporcionaram um ganho na quantidade de anos vividos, porém nem sempre na qualidade destes anos. 
                  As doenças crônicas são muito comuns, até mesmo antes de atingir os 60 anos. No entanto, a expectativa é que usem medicamentos para controle por toda a vida.
                </CardBody>
                <CardBody>
                  Eis a importância do tratamento com foco na Longevidade Humana, 
                  pois é a melhor forma de afastar as doenças crônicas que lhe torna refém dos medicamentos controlados. 
                </CardBody>
              </div>}
             
              {this.state.chosenText == 3 && 
              <div>
                <CardBody>
                  A Dematologia Clínica é responsável em cuidar da pele e dos tecidos moles, cuidado do diagnóstico, prevenção e acompanhamento de doenças, 
                  como o câncer da pele, o vitiligo ou a psoríase, e de condições como envelhecimento cutâneo, estrias e celulite.
                </CardBody>
              </div>}
             

              <CardButton onClick={() => this.setState({ modalIsOpen: false })} bgColor={theme.colors.primary.base}>Fechar</CardButton>
      
            </Modal>
            
          </Wrapper>
      );
    }
  }

OurSpecialitySection.defaultProps = {
  children: false,
  date: false,
  title: false,
};
