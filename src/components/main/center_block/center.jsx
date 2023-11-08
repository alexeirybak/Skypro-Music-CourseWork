import * as S from './center.styles'
import Search from '../search_bar/search'
import Filter from '../filter/filter'
import Playlist from '../playlist/playlist'

// import ControlBar from '../../player/playerbar'

export default function CenterBlock({
  loading,
  tracklistError,
  title,
  hidefilter,
}) {
  return (
    <S.Centerblock>
      <Search />
      <S.CenterblockHeader>{title}</S.CenterblockHeader>
      {hidefilter ? '' : <Filter />}
      <S.CenterblockContent>
        <S.ContentTitle>
          <S.ContentPlaylist $width="447px">Трек</S.ContentPlaylist>
          <S.ContentPlaylist $width="321px">ИСПОЛНИТЕЛЬ</S.ContentPlaylist>
          <S.ContentPlaylist $width="245px">АЛЬБОМ</S.ContentPlaylist>
          <S.ContentPlaylist $width="60px" $aligitems="end">
            <S.PlaylistTitleSvg>
              <use xlinkHref="img/icon/sprite.svg#icon-watch" />
            </S.PlaylistTitleSvg>
          </S.ContentPlaylist>
        </S.ContentTitle>
        <Playlist tracklistError={tracklistError} loading={loading} />
      </S.CenterblockContent>
    </S.Centerblock>
  )
}
