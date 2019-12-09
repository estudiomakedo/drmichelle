import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Layout, Container, Content } from 'layouts';
import { TagsBlock, PostHeaderFull, SEO } from 'components';
import '../styles/prism';
import Theme from '../../config/theme';

const SuggestionBar = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  background: #FAFFEC;
  box-shadow: ${props => props.theme.shadow.suggestion};
`;
const PostSuggestion = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 3rem 0 3rem;
`;

const PostContainer = styled.div`
background-color: ${props => props.theme.colors.white.base};
`;


const LinkStyles = {
  color: Theme.colors.secondary.base
}


const Post = ({ data, pageContext }) => {
  const { next, prev } = pageContext;
  const {html, frontmatter, excerpt } = data.markdownRemark
  const {date, title, tags, path, description} = frontmatter
  const image = frontmatter.cover.childImageSharp.fluid;

  return (
    <Layout>
      <SEO
        title={title}
        description={description || excerpt || ' '}
        banner={image}
        pathname={path}
        article
      />
      <PostHeaderFull title={title} subtitle={title} date={date} image={image} />
      <PostContainer>
        <Container>
          <Content input={html} />
          <TagsBlock list={tags || []} />
        </Container>
      </PostContainer>
      
      <SuggestionBar>
        <PostSuggestion>
          {prev && (
            <Link style={{...LinkStyles}} to={prev.frontmatter.path}>
              Anterior
              <h3>{prev.frontmatter.title}</h3>
            </Link>
          )}
        </PostSuggestion>
        <PostSuggestion>
          {next && (
            <Link style={{...LinkStyles}} to={next.frontmatter.path}>
              Próximo
              <h3>{next.frontmatter.title}</h3>
            </Link>
          )}
        </PostSuggestion>
      </SuggestionBar>
    </Layout>
  );
};

export default Post;

Post.propTypes = {
  pageContext: PropTypes.shape({
    prev: PropTypes.object,
    next: PropTypes.object,
  }).isRequired,
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        date
        title
        tags
        cover {
          childImageSharp {
            fluid(
              maxWidth: 1920
              quality: 90
              duotone: { highlight: "#386eee", shadow: "#2323be", opacity: 60 }
            ) {
              ...GatsbyImageSharpFluid_withWebp
            }
            resize(width: 1200, quality: 90) {
              src
            }
          }
        }
      }
    }
  }
`;
