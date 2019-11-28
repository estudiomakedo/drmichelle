import React, {Component} from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Theme from '../../config/theme';
import ReactDOM from 'react-dom';


export default class RoundButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }

    render() {
      const {text, styles} = this.props;
      return (
        <Container style={{...styles}}>
          <Text>{text}</Text>
        </Container>
      );
    }
  }
  
  RoundButton.defaultProps = {
    text:'',
    styles: {}
  };

const Container = styled.div`
  background-color: ${props => props.theme.colors.primary.base};
  border-radius: 25px;
  padding: 10px 45px;
  margin-top: 2rem;
  box-shadow:  0px 3px 6px #00000029;

  @media screen and (min-width: ${props => props.theme.breakpoints.s}) {
    align-self: flex-start;
  }
`;

const Text = styled.p`
  color: #fff;
  text-align: center;
  font-size: 20px;
  margin:0;
`;