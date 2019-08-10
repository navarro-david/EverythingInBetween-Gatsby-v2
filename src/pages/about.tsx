import React from 'react';
import { graphql } from 'gatsby';
// import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { brand } from '@lib/theme';

import Layout from '@components/Layout';
import SEO from '@components/SEO';
import EpisodeList from '@components/EpisodeList';
import { breakpoint } from '@lib/style';

const StyledSectionHeader: any = styled.h1`
  border-bottom: 4px ${brand.primary} solid;
  padding-bottom: .8rem;
  margin-top: 2.5rem;
  margin-bottom: 3rem;
`;

const StyledContainer: any = styled.div`
  padding: 1rem;
  line-height: 1.5rem;

  ${breakpoint('medium')} {
    padding: 2rem 6rem;
  }
`;

const StyledImageContainer: any = styled.div`
  margin: 0 -4rem;
  margin-top: -4rem;
  margin-bottom: 2rem;
`;

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="About" />
      <StyledSectionHeader>About</StyledSectionHeader>
      <StyledContainer>
        01001101 01100001 01111001 00100000 01001001 00100000 01101000 01100001
        01110110 01100101 00100000 01100001 01101110 00100000 01100001 01101100
        01101101 01101111 01101110 01100100 00100000 01101101 01101001 01101100
        01101011 00100000 01100110 01101100 01100001 01110100 00100000 01110111
        01101000 01101001 01110100 01100101 00101100 00100000 01110000 01101100
        01100101 01100001 01110011 01100101 00111111 🤖☕ (Beep Boop)
      </StyledContainer>
    </Layout>
  );
};

export default IndexPage;
