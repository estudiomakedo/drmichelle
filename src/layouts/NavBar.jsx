import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Headroom from 'react-headroom';
import logo from '../../static/logo/header-logo.png';
import theme from '../../config/theme';

const StyledLink = styled(Link)`
  display: flex;
  font-weight: 700;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  font-family: Lato;
  font-weight: 500;
  font-size: 1.1rem;
  align-items: center;
  width: 100%;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 0.5rem 0;
  top:  ${props => props.noShadow? "0" : "20px"};
  position: relative;

  @media screen and (min-width:  ${props => props.theme.breakpoints.m}){
    justify-content: flex-start;
    a {
      margin-left: 2rem;
    }
  }


  a {
    color: ${props => props.theme.colors.white.base} !important;
    transition: all ${props => props.theme.transitions.default.duration};
    text-shadow: ${props => props.noShadow? "none" : "0px 3px 6px #00000029"};
    &:hover {
      color: ${props => props.theme.colors.primary.base};
    }
  }
`;

const Logo = styled.img`
  max-width: 330px;
`;

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: '0'
    };
    this.ScrollRateCalculation = this.ScrollRateCalculation.bind(this);
  }

  ScrollRateCalculation() {
    let innerHeight = window.innerHeight;
    let bodyElement = document.getElementById('___gatsby');//B1
    let rect = bodyElement.getBoundingClientRect();//B2
    let heightIsHtml = rect.height; //B3
    let widthHtml = rect.width;
    let scrollMax = Math.ceil( heightIsHtml - innerHeight ); //C = B3 - A
    let scrollY = document.documentElement.scrollTop || document.body.scrollTop;//D
    let scrollRate = parseInt( (scrollY / scrollMax) * 100, 10 ); //E = (D / C) *100

    this.setState({
      scrollY: scrollY,
    });
  }

  componentDidMount() {
    this.ScrollRateCalculation();
    
    document.addEventListener('scroll', this.ScrollRateCalculation);
    window.addEventListener('hashchange', this.ScrollRateCalculation);
    document.addEventListener('click', this.ScrollRateCalculation);
  }

    render() {
    return (
      <Headroom style={{color: "white !important", position: "absolute", justifyContent: "center", backgroundColor: this.state.scrollY != 0 ? theme.colors.primary.base : 'transparent', padding: 0}} calcHeightOnResize disableInlineStyles>
        <Nav noShadow={this.state.scrollY > 0}>
          <Link to="/">Inicio</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/blog">Fale Conosco</Link>
        </Nav>
        
      </Headroom>
    );
    }
  }