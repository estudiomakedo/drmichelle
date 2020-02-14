import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { HeaderGradientMiddleSection, BodyText, SectionTitle } from 'components';
import { Layout, ContactSection, PartnersSection } from 'layouts';
import GoogleFontLoader from 'react-google-font-loader';

const Blog = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <Helmet title={'Blog Page'} />
      <GoogleFontLoader
          fonts={[
              {
                  font: 'Lato',
                  weights: [300, 400, 600],
              },
          ]}
        />
      <HeaderGradientMiddleSection title="Convênios"></HeaderGradientMiddleSection>
      <BodyText 
       paragraph1="A Dra. Michele Sartori possui parcerias com alguns convênios, atendendo pacientes conveniados, obedecendo às suas respectivas políticas de reembolso. 
       O paciente conveniado das empresas abaixo, portanto, realiza o pagamento da consulta e é reembolsado conforme as regras do seu convênio. 
       Todos os documentos e notas referentes às consultas, para fins de comprovação junto aos convênios, são fornecidos ao paciente dentro do prazo determinado pelas 
       normativas legais."
      />
      <PartnersSection/>

      <SectionTitle maxSize="2rem" text="EXAMES COM O LABORATÓRIO S’AGAPO" styles={{padding: "3rem 3rem 1rem"}} />
      
      <BodyText
      paragraph1="Pacientes da Dra. Michele conveniados com as empresas acima possuem a comodidade de contar com o atendimento do Laboratório S’agapo, 
      que realiza coletas em suas residências ou em local e horário que estejam de acordo com suas agendas, facilitando e dinamizando o acompanhamento médico. 
      Informe-se através dos nossos canais de atendimento e aproveite esse benefício!"
      />

      <div id="faleconosco">
        <ContactSection />
      </div>
    </Layout>
  );
};

export default Blog;

Blog.propTypes = {
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
  }),
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 200)
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
  }
`;
