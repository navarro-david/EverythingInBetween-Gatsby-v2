import React from 'react';
import { graphql } from 'gatsby';
// import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { brand } from '@lib/theme';

import Layout from '@components/Layout';
import SEO from '@components/SEO';
import EpisodeList from '@components/EpisodeList';

const StyledSectionHeader: any = styled.h1`
  // color: ${brand.accent};
  border-bottom: 4px ${brand.primary} solid;
  margin-bottom: 5rem;
`;

const StyledContainer: any = styled.div`
  padding: 6rem;
  line-height: 1.5rem;
`;

const IndexPage: React.FC<{ data: any }> = ({
  data: {
    allBuzzsproutPodcastEpisode: { edges: episodes },
    site: { siteMetadata: siteMetadata },
  },
}) => {
  return (
    <Layout>
      <SEO title="Home" />
      <StyledContainer>
        <p>{siteMetadata.description}</p>
      </StyledContainer>
      <StyledSectionHeader>Recent Episodes</StyledSectionHeader>
      <EpisodeList maxEpisodes={3} episodes={episodes} />
    </Layout>
  );
};

export const query = graphql`
  query HomePageQuery {
    allBuzzsproutPodcastEpisode {
      edges {
        node {
          id
          title
          description
          summary
          audio_url
          episode_number
          season_number
          artwork_url
        }
      }
    }
    site {
      siteMetadata {
        description
      }
    }
  }
`;

export default IndexPage;
