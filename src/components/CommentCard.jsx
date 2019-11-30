import React, {Component} from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Theme from '../../config/theme';
import ReactDOM from 'react-dom';
import image2 from '../../static/image2.png';
import star from '../../static/star.svg'

export default class CommentCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }

    render() {
      const {text, name, imgUrl, styles} = this.props;
      return (
        <Container style={{...styles}}>
          <Constelation>
            <img style={{margin: "0 2px 0"}} src={star} />
            <img style={{margin: "0 2px 0"}} src={star} />
            <img style={{margin: "0 2px 0"}} src={star} />
            <img style={{margin: "0 2px 0"}} src={star} />
            <img style={{margin: "0 2px 0"}} src={star} />
          </Constelation>
          <Text>{text}</Text>
          <Name>{name}</Name>
          <UserImg src={image2} />
        </Container>
      );
    }
  }
  
  CommentCard.defaultProps = {
    text:'',
    personName: "",
    imgUrl: "",
    styles: {}
  };

const Container = styled.section`
  background-color: ${props => props.theme.colors.white.base};
  border-radius: 20px;
  padding: 20px 20px 0;
  margin-bottom: 2rem;
  box-shadow:  0px 3px 6px #00000029;

  @media screen and (min-width: ${props => props.theme.breakpoints.s}) {
    align-self: flex-start;
  }
`;

const Text = styled.p`
  color: #707070;
  text-align: center;
  font-size: 18px;
  font-family: Lato;
  margin: 1rem 0 0;
`;

const Name = styled.p`
  color: #707070;
  text-align: center;
  font-family: Lato;
  margin: 0;
  position: relative;
  font-weight: 600;
  top: 18px;
`;

const UserImg = styled.img`
  margin: 0 auto;
  position: relative;
  top: 32px;
  max-width: 80px;
  /* left: 0; */
  /* right: 0; */
  display: block;
  width: 100%;
  border-radius: 50%;
`;

const Constelation = styled.div`
  display: flex;
  justify-content: center;
`;