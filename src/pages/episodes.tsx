import React from 'react';
import { graphql } from 'gatsby';
// import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { brand } from '@lib/theme';
import { breakpoint } from '@lib/style';

import Layout from '@components/Layout';
import SEO from '@components/SEO';
import EpisodeList from '@components/EpisodeList';

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

const IndexPage: React.FC<{ data: any }> = ({
  data: {
    allBuzzsproutPodcastEpisode: { edges: episodes },
  },
}) => {
  return (
    <Layout>
      <SEO title="Episodes" />
      <StyledSectionHeader>Listen</StyledSectionHeader>
      <EpisodeList episodes={episodes} />
    </Layout>
  );
};

export const query = graphql`
  query EpisodesPageQuery {
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
  }
`;

export default IndexPage;
