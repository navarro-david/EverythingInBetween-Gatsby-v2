import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
// import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { breakpoint } from '@lib/style';
import { brand } from '@lib/theme';

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

const StyledCoverImageContainer: any = styled.div`
  max-width: 400px;
  margin: 2rem auto;
  padding: 8px;

  border-radius: 20px;
  border: ${brand.primary} 3px solid;

  > * {
    overflow: hidden;
    border-radius: 12px;
  }
`

const IndexPage: React.FC<{ data: any }> = ({
  data: {
    allBuzzsproutPodcastEpisode: { edges: episodes },
    site: { siteMetadata: siteMetadata },
    eibCover: { childImageSharp: eibCoverImage },
  },
}) => {
  return (
    <Layout>
      <SEO title="Home" />
      <StyledCoverImageContainer>
        <Img fluid={eibCoverImage.fluid} />
      </StyledCoverImageContainer>
      <StyledContainer>
        <strong>{siteMetadata.description}</strong>
      </StyledContainer>
      <StyledSectionHeader>Listen</StyledSectionHeader>
      <EpisodeList episodes={episodes} />
      {/* <StyledImageContainer>
        <Img fluid={childImageSharp.fluid} />
      </StyledImageContainer>
      <StyledSectionHeader>The Great Adventure</StyledSectionHeader>
      <StyledContainer>
        <p>{siteMetadata.description}</p>
      </StyledContainer>
      <StyledSectionHeader>Recent Episodes</StyledSectionHeader>
      <EpisodeList maxEpisodes={3} episodes={episodes} /> */}
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
    eibCover: file(relativePath: { eq: "eib-cover.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 400
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default IndexPage;
