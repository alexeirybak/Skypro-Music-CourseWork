import PlaylistItem from './playlistitem'
import * as S from './playlist.styles'
import { useDispatch, useSelector } from 'react-redux'
import {
  filterSelector,
  pagePlaylistSelector,
  searchSelector,
} from '../../../store/selectors/tracks'
import { useMemo } from 'react'

export default function Playlist({ loading, tracklistError }) {
  const list = useSelector(pagePlaylistSelector)
  const filter = useSelector(filterSelector)
  const search = useSelector(searchSelector)
  const dispatch = useDispatch()
  const setUpTrack = (item) => {
    dispatch(setCurrentTrack(item))
    dispatch(setCurrentPlaylist(list))
  }
  console.log('list', list)
  const tempTracks = Array(10).fill({
    name: '',
    author: '',
    album: '',
    duration_in_seconds: '',
  })
  // const tracks = loading ? tempTracks : list
  const tracks = useMemo(() => {
    if (loading) return tempTracks
    if (!list) return []
    const result = list
      .filter((item) => {
        let a, b, c
        if (filter.author.length == 0) a = true
        else {
          if (filter.author.indexOf(item.author) === -1) a = false
          else a = true
        }
        if (filter.genre.length == 0) b = true
        else {
          if (filter.genre.indexOf(item.genre) === -1) b = false
          else b = true
        }
        if (search === '') c = true
        else if (
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.author.toLowerCase().includes(search.toLowerCase())
        )
          c = true
        else c = false
        return a && b && c
      })
      .sort((a, b) => {
        if (filter.year === null) return 0
        const order = filter.year === '<' ? 1 : -1
        const aDate = new Date(a.release_date)
        const bDate = new Date(b.release_date)
        if (aDate > bDate) return order
        else if (aDate < bDate) return -order
        else return 0
      })
    console.log(result)
    return result
  }, [loading, filter, list, search])
  return (
    <S.ContentPlaylistWrapper>
      <S.ContentPlaylist>
        <p>{tracklistError}</p>
        {tracks?.map((item) => (
          <PlaylistItem
            key={item?.id}
            item={item}
            loading={loading}
            onClick={() => setUpTrack(item)}
          />
        ))}
      </S.ContentPlaylist>
    </S.ContentPlaylistWrapper>
  )
}
