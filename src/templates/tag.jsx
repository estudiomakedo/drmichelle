import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Layout, Container } from 'layouts';
import { HeaderGradientMiddleSection } from 'components';
import config from '../../config/site';

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.white.base};
  padding: 5px 10px;
  border: solid 1px #fff;
  border-radius: 20px;
  text-align: center;
  text-shadow: 0px 3px 6px #00000029;
  font-size: 20px;
  &:hover {
    color: ${props => props.theme.colors.black.blue};
    background: ${props => props.theme.colors.white.light};
  }
`;

const LinkContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 40vh;
  width: 100%;
  text-align: center;
`;

const Information = styled.div`
  text-align: center;
  h1 {
    font-size: 2rem;
    margin-bottom: 1.25rem;
  }
`;

const Tag = ({ pageContext }) => {
  const { posts, tagName } = pageContext;
  console.log(posts)
  const upperTag = tagName.charAt(0).toUpperCase() + tagName.slice(1);
  return (
    <Layout>
      <Helmet title={`${tagName} | ${config.siteTitle}`} />
      <HeaderGradientMiddleSection title={upperTag}>
        <LinkContainer>
          <StyledLink to="/tags">Todas as Tags</StyledLink>
        </LinkContainer>
      </HeaderGradientMiddleSection>
      <Container>

        <Information>
          {posts.map((post, index) => (
            <Link key={index} to={post.frontmatter.path}>
              <h3>{post.frontmatter.title}</h3>
            </Link>
          ))}
        </Information>
      </Container>
    </Layout>
  );
};

export default Tag;

Tag.propTypes = {
  pageContext: PropTypes.shape({
    posts: PropTypes.array,
    tagName: PropTypes.string,
  }),
};
