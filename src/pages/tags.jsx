import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Container } from 'layouts';
import { HeaderGradientMiddleSection, TagsBlock } from 'components';

const Tags = ({ pageContext }) => {
  const { tags } = pageContext;

  return (
    <Layout>
      <HeaderGradientMiddleSection title="Tags">Gatsby Tutorial Starter</HeaderGradientMiddleSection>
      <Container>
        <TagsBlock list={tags} />
      </Container>
    </Layout>
  );
};

export default Tags;

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tags: PropTypes.array,
  }),
};
