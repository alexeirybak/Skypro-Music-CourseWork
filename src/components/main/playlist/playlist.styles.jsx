import { styled } from 'styled-components'

export const ContentPlaylist = styled.div`
  height: 60%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  overflow-y: scroll;
  padding-bottom: 20px;
  &::-webkit-scrollbar {
    width: 4px;
    background-color: #f5f5f5;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ffffff;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: #4b4949;
  }
`
export const ContentPlaylistWrapper = styled.div`
  height: -webkit-fill-available;
  display: contents;
`
