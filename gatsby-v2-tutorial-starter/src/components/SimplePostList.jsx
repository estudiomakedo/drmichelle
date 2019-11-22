import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import theme from '../../config/theme';

const StyledLink = styled(Link)`
  background-color: #fff;
  margin-bottom: 2rem;
  position: relative;
  border-radius: ${props => props.theme.borderRadius.default};
  box-shadow: 0px 3px 6px #00000029;
  transition: ${props => props.theme.transitions.boom.transition};
  height: 12rem;
  flex-basis: calc(99.9% * 1 / 3 - 2rem);
  max-width: calc(99.9% * 1 / 3 - 2rem);
  width: calc(99.9% * 1 / 3 - 2rem);

  &:hover {
    box-shadow: ${props => props.theme.shadow.feature.small.hover};
    transform: scale(1.04);
  }

  @media (max-width: 1000px) {
    flex-basis: calc(99.9% * 1 / 2 - 1rem);
    max-width: calc(99.9% * 1 / 2 - 1rem);
    width: calc(99.9% * 1 / 2 - 1rem);
    height: 12rem;
  }

  @media (max-width: 700px) {
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
    height: 10rem;
  }
`;

const Info = styled.div`
  color: #707070;
  font-family: Lato;
  margin: 0 1rem 1.25rem 1.25rem;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const Title = styled.h2`
  margin-bottom: 0.6rem;
  font-family: Lato;
  font-weight: 300;

`;

const Excerpt = styled.span`
color: #707070;
font-size: 1rem;
font-weight: 400;
font-family: Lato;

`;

const SeeMore = styled.span`
  color: #94C128;
  font-size: 1rem;
  font-weight: 600;
  font-family: Lato;
  display: block;
  margin-top: 15px;
`;

const PostList = ({ cover, path, date, title, excerpt }) => (
    <StyledLink> {/*to={path}>*/}
      <Info>
        <Title>{title}</Title>
        <Excerpt>{excerpt}</Excerpt>
        <SeeMore>VEJA MAIS</SeeMore>
      </Info>
    </StyledLink>
);

export default PostList;

PostList.propTypes = {
  cover: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
