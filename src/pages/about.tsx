import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
// import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { brand } from '@lib/theme';
import { breakpoint } from '@lib/style';

import Layout from '@components/Layout';
import SEO from '@components/SEO';
import EpisodeList from '@components/EpisodeList';
import { stripUnit } from 'polished';

const StyledSectionHeader: any = styled.h1`
  border-bottom: 4px ${brand.primary} solid;
  padding-bottom: 0.8rem;
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
  max-width: 300px;
  overflow: hidden;
  // border-radius: 150px;
`;

const StyledCoverImageContainer: any = styled.div`
  max-width: 400px;
  overflow: hidden;
  border-radius: 12px;
  margin: 2rem auto;
  margin-bottom: 8rem;
`

const StyledTeamMemberContainer: any = styled.div`
  margin: 3rem auto;
  max-width: 332px;
  overflow: hidden;
  border: ${brand.primary} 4px solid;
  padding: 16px;
  h2 {
    margin: 0;
    margin-top: 1.5rem;
    color: ${brand.primary};
    text-align: middle;
  }
  h3 {
    margin: 0;
    text-align: middle;
  }
`;

const IndexPage: React.FC<{ data: any }> = ({
  data: {
    eibCover: { childImageSharp: eibCoverImage },
    daniel: { childImageSharp: danielImage },
    scott: { childImageSharp: scottImage },
    senbetus: { childImageSharp: senbetusImage },
  },
}) => {
  return (
    <Layout>
      <SEO title="About" />
      <StyledCoverImageContainer>
        <Img fluid={eibCoverImage.fluid} />
      </StyledCoverImageContainer>
      <StyledSectionHeader>The Team</StyledSectionHeader>
      <StyledTeamMemberContainer>
        <StyledImageContainer>
          <Img fluid={danielImage.fluid} />
        </StyledImageContainer>
        <h2>Daniel Kunel</h2>
        <h3>Creator & Host</h3>
      </StyledTeamMemberContainer>
      <StyledTeamMemberContainer>
        <StyledImageContainer>
          <Img fluid={senbetusImage.fluid} />
        </StyledImageContainer>
        <h2>Gabe and Jess Senbetu</h2>
        <h3>Graphics Designer</h3>
        <h3>Co-Host</h3>
      </StyledTeamMemberContainer>
      <StyledTeamMemberContainer>
        <StyledImageContainer>
          <Img fluid={scottImage.fluid} />
        </StyledImageContainer>
        <h2>Scott Bolin</h2>
        <h3>Co-Creator & Editor/Producer</h3>
      </StyledTeamMemberContainer>
    </Layout>
  );
};

export const query = graphql`
  query AboutPageQuery {
    eibCover: file(relativePath: { eq: "eib-cover.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 400
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    daniel: file(relativePath: { eq: "team/daniel.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 400
          duotone: { highlight: "e08187", shadow: "#343a6e" }
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    scott: file(relativePath: { eq: "team/scott.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 400
          duotone: { highlight: "e08187", shadow: "#343a6e" }
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    senbetus: file(relativePath: { eq: "team/senbetus.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 400
          duotone: { highlight: "e08187", shadow: "#343a6e" }
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default IndexPage;
