import React, {Component} from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Theme from '../../config/theme';
import ReactDOM from 'react-dom';


export default class SectionTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }

    render() {
      const {text, maxSize, styles} = this.props;
      return (
          <Text style={{...styles}} maxSize={maxSize}>{text}</Text>
      );
    }
  }
  
  SectionTitle.defaultProps = {
    text:'',
    maxSize: "3.2rem",
    styles:{}
  };

const Text = styled.h2`
  text-align: left;
  font-family: Lato;
  font-weight: 300;
  font-size: 2.2rem;
  letter-spacing: 0;
  color: #666666;
  opacity: 1;
  @media screen and (min-width:  ${props => props.theme.breakpoints.m}){
    font-size: ${props => props.maxSize};
  }
`;