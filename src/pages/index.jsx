import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import {  HeaderGradientSection, 
          SimplePostList, 
          AppointmentScheduleSection, 
          OurSpecialitySection,
          SectionTitle, RoundButton } from 'components';
import { Layout, InstagramConnect, ContactSection, PartnersSection, AConsulta } from 'layouts';
import { Link } from 'gatsby';
import GoogleFontLoader from 'react-google-font-loader';

const PostWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

`;

const PostOuterContainer = styled.div`
  background: #FAFFEC;
  width: 100%;
`;

const PostContainer = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 4rem 4rem 1rem 4rem;
  max-width: ${props => props.theme.maxWidth};

  @media (max-width: 1000px) {
    padding: 4rem 2rem 1rem 2rem;
  }
  @media (max-width: 700px) {
    padding: 4rem 1rem 1rem 1rem;
  }
`;

/*
      <PostOuterContainer>
        <PostContainer>
          <SectionTitle maxSize="2rem" text="Acompanhe os nossos últimos posts" />
          <PostWrapper>
            {edges.map(({ node }) => {
              const { id, excerpt, frontmatter } = node;
              const { cover, path, title, date } = frontmatter;
              return (
                <SimplePostList
                  key={id}
                  cover={cover.childImageSharp.fluid}
                  path={path}
                  title={title}
                  date={date}
                  excerpt={excerpt}
                />
              );
            })}
          </PostWrapper>
          <Link  to="/blog">
            <RoundButton styles={{maxWidth: "200px", margin: "1rem auto 2rem"}} text="VER TUDO" />
          </Link>
        </PostContainer>
      </PostOuterContainer>
*/

const Index = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  console.log(data);
  return (
    <Layout>
      <GoogleFontLoader
          fonts={[
              {
                font: 'Lato',
                weights: [400, 500,],
              },
          ]}
        />
      <Helmet title={'Home Page'} />
      <HeaderGradientSection />
      <div id="knowbetter">
        <AppointmentScheduleSection />
      </div>
      <OurSpecialitySection />
      
      <AConsulta/>

      <InstagramConnect posts={data.allInstagramContent.edges} />
      <PartnersSection/>

      {/*<ClientComments />*/}
      <div id="faleconosco">
        <ContactSection />
      </div>
  </Layout>
  );
};

export default Index;

Index.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            excerpt: PropTypes.string,
            frontmatter: PropTypes.shape({
              cover: PropTypes.object.isRequired,
              path: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
              tags: PropTypes.array,
            }),
          }),
        }).isRequired
      ),
    }),
    allInstagramContent: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.any,
            caption: PropTypes.shape({
              text: PropTypes.string.isRequired
            }),
            images: PropTypes.shape({
              standard_resolution: PropTypes.shape({
                url: PropTypes.string.isRequired
              })
            }),
            link: PropTypes.string.isRequired
          }),
        }).isRequired
      ),
    })
  }),
};

export const query = graphql`
  query {
    allMarkdownRemark(
      limit: 3
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 75)
          frontmatter {
            title
            path
            tags
            date(formatString: "MM.DD.YYYY")
            cover {
              childImageSharp {
                fluid(
                  maxWidth: 1000
                  quality: 90
                  traceSVG: { color: "#2B2B2F" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
    allInstagramContent(limit: 4) {
      edges {
        node {
          id
          caption {
            text
          }
          images {
            standard_resolution {
              url
            }
          }
          link
        }
      }
    }
  }
`;
