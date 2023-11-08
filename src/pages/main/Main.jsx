import { useDispatch } from 'react-redux'
import CenterBlock from '../../components/main/center_block/center'
import { useEffect, useState } from 'react'
import { pagePlaylist } from '../../store/actions/creators/tracks'
import getTracks from '../../api/api'

function Main() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [tracklistError, settracklistError] = useState(null)
  useEffect(() => {
    setLoading(true)
    getTracks()
      .then((tracklist) => {
        // console.log(tracklist)
        dispatch(pagePlaylist(tracklist)) // имя для удобства
      })
      .catch(() => {
        settracklistError('Не удалось загрузить плейлист, попробуйте позже')
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <div>
      <CenterBlock
        tracklistError={tracklistError}
        loading={loading}
        title={'Треки'}
      />
    </div>
  )
}
export default Main
