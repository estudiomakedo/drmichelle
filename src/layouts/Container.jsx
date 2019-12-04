import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Wrapper = styled.section`
  text-align: ${props => (props.center ? 'center' : '')};
  margin: auto;
  padding: 3rem 0rem;
  width: 100%;
  max-width: ${props => props.theme.layout[props.type]};
  height: 100%;
  flex: 1;

  @media (max-width: ${props => props.theme.breakpoints.m}) {
    width: 100%;
  }

  @media (max-width: ${props => props.theme.breakpoints.s}) {
    width: 100%;
  }

  & p, h1, h2, h3{
    width: 60%;
    margin: 0 auto 1rem;
    display: block !important;


    @media (max-width: ${props => props.theme.breakpoints.m}) {
      width: 90%;
      margin: 0 auto 2rem auto;

    }
  
    @media (max-width: ${props => props.theme.breakpoints.s}) {
      width: 92%;
      margin: 0 6% 2rem 2%;
      
    }
  }

  & blockquote {
    @media (max-width: ${props => props.theme.breakpoints.s}) {
      marginRight: 0.45em;
      
    }

    & ul {
      margin-bottom: 0 !important;
    }
  }

  & ul {
    width: 60%;
    margin: 0 auto 1rem;

    @media (max-width: ${props => props.theme.breakpoints.m}) {
      width: 90%;
      margin: 0 auto 2rem auto;

    }
  
    @media (max-width: ${props => props.theme.breakpoints.s}) {
      width: 95%;
      margin: 0 auto 2rem auto;
      
    }

    & li {
      margin-left: 4rem;
    }

    & li p {
      margin: 0;
      width: 100%;
    }
  }

  & span {
    max-width: none !important;
  }

  & blockquote {
    margin: 0 auto 2rem auto;
    width: 95%;
    padding: 1rem 0;
    background-color: ${props => props.theme.colors.primary.base};
    color: #f5f5f5;
    @media (min-width: ${props => props.theme.breakpoints.m}) {
      margin: 2rem auto;
      width: 60%;
      padding: 0.5rem;
      background-color: ${props => props.theme.colors.white.base};
      color: #666;

    }

    & ul {
      width: 100%
    }
 
    & p {
      padding: 0.5rem;
      line-height: 1.6;
      width: 100%;
      font-size: 22px;
      font-weight: 300;
      font-style: italic;
      color: #fafafa;
      text-align: center;
      margin: 0;

      @media (min-width: ${props => props.theme.breakpoints.m}) {
        border: 3px solid ${props => props.theme.colors.primary.base};
        margin: 1.5rem;
        padding: 1rem;
        line-height: 1.6;
        width: 100%;
        margin: 0;
        font-size: 26px;
        font-weight: 300;
        font-style: italic;
        color: #666;
  
      }
    }
   }

`;

const Container = ({ children, type, className, center }) => (
  <Wrapper className={className} type={type} center={center}>
    {children}
  </Wrapper>
);

export default Container;

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  center: PropTypes.object,
};
