import React, {Component} from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Theme from '../../config/theme';
import ReactDOM from 'react-dom';


export default class BodyText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }

    render() {
      const {paragraph1, paragraph2, styles, textStyles} = this.props;
      return (
        <div style={{...styles}}>
          <Text style={{...textStyles}}>{paragraph1}</Text>
          <Text style={{...textStyles}}>{paragraph2}</Text>
        </div>
      );
    }
  }
  
  BodyText.defaultProps = {
    paragraph1:'',
    paragraph2:'',
    styles: {},
    textStyles: {}
  };

const Text = styled.p`
  text-align: left;
  font-family: Lato;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.8;
  letter-spacing: 0;
  color: #666666;
  opacity: 1;
`;