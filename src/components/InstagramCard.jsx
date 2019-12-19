import React, {Component} from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Theme from '../../config/theme';
import ReactDOM from 'react-dom';
import image2 from '../../static/mulher.png';
import instagram from '../../static/instagramWhite.png'


export default class InstagramCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }

    render() {
      const {text, imgUrl, link, styles} = this.props;
      return (
        <Container style={{...styles}}>
          <img style={{margin: "0"}} src={imgUrl} />
          <Text>{text}</Text>
          <SubmitButton href={link} target="_blank">
            <SubmitButtonText><Icon src={instagram} /> Ver no Instagram</SubmitButtonText>
          </SubmitButton>
        </Container>
      );
    }
  }
  
  InstagramCard.defaultProps = {
    text:'',
    link: "",
    imgUrl: "",
    styles: {}
  };

const Container = styled.section`
  background-color: ${props => props.theme.colors.white.base};
  border-radius: 6px;
  padding: 20px 20px 0;
  margin-bottom: 2rem;
  box-shadow:  0px 3px 6px #00000029;

  @media screen and (min-width: ${props => props.theme.breakpoints.s}) {
    align-self: flex-start;
  }
`;

const Text = styled.p`
  color: #707070;
  text-align: left;
  font-size: 18px;
  font-family: Lato;
  margin: 0.5rem 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

`;

const SubmitButton = styled.a`
  background-color: #d169b5;
  border-radius: 17px;
  display: block;
  max-width: 200px;
  margin: 0 auto 1rem;
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
  margin: 0 10px 0 0;
  max-width: 25px;
`;