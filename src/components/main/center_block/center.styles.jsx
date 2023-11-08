import { styled } from 'styled-components'

export const Centerblock = styled.div`
  height: 100%;
  width: auto;
  flex-grow: 3;
  padding: 20px 40px 20px 111px;
`

export const CenterblockHeader = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 72px;
  letter-spacing: -0.8px;
  margin-bottom: 45px;
`

export const CenterblockContent = styled.div`
  height: -webkit-fill-available;
  padding-bottom: 20px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
`

export const ContentTitle = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: #696969;
  text-transform: uppercase;
`

export const ContentPlaylist = styled.div`
  width: ${(props) => props.$width};
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  ${(props) => (props.$alignitems === 'end' ? 'align-items:end;' : '')}
`

export const PlaylistTitleSvg = styled.svg`
  width: 12px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`
