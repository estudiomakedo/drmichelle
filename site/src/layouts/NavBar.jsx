import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Headroom from 'react-headroom';
import logo from '../../static/logo/header-logo.png';

const StyledLink = styled(Link)`
  display: flex;
  font-weight: 700;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  font-size: 1.1rem;
  align-items: center;
  a {
    color: ${props => props.theme.colors.white.base};
    margin-left: 2rem;
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      color: ${props => props.theme.colors.white.grey};
    }
  }
`;

const Logo = styled.img`
  max-width: 330px;
`;

const NavBar = () => (
  /*<Headroom calcHeightOnResize disableInlineStyles>
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/blog">Blog</Link>
    </Nav>
    
  </Headroom>*/
  <div></div>
);

export default NavBar;
