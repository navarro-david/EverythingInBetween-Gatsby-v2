import React from 'react';
import Episode from './Episode';
import { StyledList, StyledListItem } from './EpisodeList.styles';
import { BuzzsproutNode } from '@lib/types';
import styled from '@emotion/styled';

export interface EpisodeListProps {
  maxEpisodes?: number;
  loadableEpisodes? : boolean;
  episodes: {
    node: BuzzsproutNode;
  }[];
}

const StyledButton = styled.button`
  color: ${({ theme }) => theme.brand.accent};
  background: transparent;
  border: 2px ${({ theme }) => theme.brand.accent} solid;
  padding: 1rem;
  text-align: center;
  font-weight: 800;
  max-width: 20%;
  margin: 0 auto;
`;

const EpisodeList: React.FC<EpisodeListProps> = ({
  maxEpisodes,
  loadableEpisodes,
  episodes = [],
}) => {
  const hasEpisodeLimit = maxEpisodes ? true : false;
  const canLoadEpisodes = loadableEpisodes ? true : false;
  return (
    <StyledList>
      {Array.isArray(episodes)
        ? hasEpisodeLimit
          ? episodes.slice(0, maxEpisodes).map(({ node }: any) => {
              return (
                <StyledListItem key={node.id}>
                  <Episode node={node} />
                </StyledListItem>
              );
            })
          : episodes.map(({ node }: any) => {
              return (
                <StyledListItem key={node.id}>
                  <Episode node={node} />
                </StyledListItem>
              );
            })
        : null}
      {(hasEpisodeLimit && canLoadEpisodes )&& <StyledButton>Load episodes...</StyledButton>}
    </StyledList>
  );
};

export default EpisodeList;
