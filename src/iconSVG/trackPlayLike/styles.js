import styled from 'styled-components';

export const TrackPlayLikeImg = styled.svg`
  height: 12px;
  stroke: var(--play-list-title);
  width: 14px;
  fill: transparent;
  path {
    fill: var(--container);
    stroke: var(--player-btn-repeat-shuffle);
  }
  &:hover path {
    stroke: var(--player-btn-repeat-shuffle-hover);
  }
  &:active path {
    fill: var(--like-active-fill);
    stroke: var(--like-active-stroke);
  }
`;
