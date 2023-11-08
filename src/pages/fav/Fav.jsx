import { useDispatch } from 'react-redux'
import CenterBlock from '../../components/main/center_block/center'
import { useEffect, useState } from 'react'
import { pagePlaylist } from '../../store/actions/creators/tracks'
import { useGetMyTracksQuery } from '../../components/services/favTracks'

function Fav() {
  const { data, error, isLoading } = useGetMyTracksQuery()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(pagePlaylist(data))
  }, [data])

  return (
    <div>
      <CenterBlock
        hidefilter={true}
        tracklistError={error}
        loading={isLoading}
        title={'Мои любимые треки'}
      />
    </div>
  )
}

export default Fav
