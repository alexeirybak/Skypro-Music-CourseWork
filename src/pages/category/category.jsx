import { useParams } from 'react-router-dom'
import CenterBlock from '../../components/main/center_block/center'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { getCategory } from '../../api/api'
import { pagePlaylist } from '../../store/actions/creators/tracks'

function Category() {
  const params = useParams()
  const playlistType =
    params.id === `:1`
      ? 'Плейлист дня'
      : params.id === ':2'
      ? '100 танцевальных хитов'
      : 'Инди-заряд'

  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [tracklistError, settracklistError] = useState(null)
  useEffect(() => {
    setLoading(true)
    const id = params.id[1]
    getCategory(id)
      .then((tracklist) => {
        console.log(tracklist)
        dispatch(pagePlaylist(tracklist)) // имя для удобства
      })
      .catch(() => {
        settracklistError('Не удалось загрузить плейлист, попробуйте позже')
      })
      .finally(() => setLoading(false))
  }, [params.id])

  return (
    <div>
      <CenterBlock
        tracklistError={tracklistError}
        loading={loading}
        title={playlistType}
      />
    </div>
  )
}
export default Category
