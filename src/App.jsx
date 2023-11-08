import { useEffect, useState, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AppRoutes from './routes'
import GlobalStyle from './globalstyles'
import getTracks from '../src/api/api'
import {
  ThemeContext,
  themes,
} from './components/contexts/theme-switcher/theme'
import { setCurrentPlaylist } from './store/actions/creators/tracks'

function App() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  // const token = localStorage.getItem('token')
  const [tracklistError, settracklistError] = useState(null)
  const [selectedTrack, setSelectedTrack] = useState(false)
  const [currentTheme, setCurrentTheme] = useState(themes.dark)
  // const { theme } = useThemeContext() текущая тема, прокинуть в нужные компоненты
  useEffect(() => {
    setLoading(true)
    getTracks()
      .then((tracklist) => {
        // console.log(tracklist)
        dispatch(setCurrentPlaylist(tracklist)) // имя для удобства
      })
      .catch(() => {
        settracklistError('Не удалось загрузить плейлист, попробуйте позже')
      })
      .finally(() => setLoading(false))
  }, [])

  // Color Theme

  const toggleTheme = () => {
    // console.log(currentTheme)

    if (currentTheme?.key === 'dark') {
      setCurrentTheme(themes.light)
      return
    }

    setCurrentTheme(themes.dark)
  }
  const memoizedTheme = useMemo(
    () => ({ theme: currentTheme, toggleTheme }),
    [currentTheme.background, currentTheme.color, toggleTheme]
  )
  return (
    <ThemeContext.Provider value={memoizedTheme}>
      <div
        className="App container"
        style={{
          backgroundColor: currentTheme.background,
          color: currentTheme.color,
        }}
      >
        <GlobalStyle />
        {/* <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}> */}
        <AppRoutes
          loading={loading}
          // token={token}
          tracklistError={tracklistError}
          selectedTrack={selectedTrack}
          setSelectedTrack={setSelectedTrack}
        />
        {/* </ThemeContext.Provider> */}
      </div>
    </ThemeContext.Provider>
  )
}

export default App
