import React, { useContext } from 'react'

export const themes = {
  light: {
    key: 'light',
    color: '#282c34',
    background: '#fff',
  },
  dark: {
    key: 'dark',
    color: '#fff',
    background: '#181818',
  },
}

export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
})

export const useThemeContext = () => {
  const theme = useContext(ThemeContext)

  if (!theme) return theme.dark

  return theme
}
