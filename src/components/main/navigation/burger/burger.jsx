import { useState } from 'react'
import * as S from './burger.styles'
import Menu from '../navMenu/NavMenu'
import { useThemeContext } from '../../../contexts/theme-switcher/theme'

export default function BurgerToMenu() {
  const { theme } = useThemeContext()
  const [visible, setVisible] = useState(true)
  const toggleVisibility = () => {
    setVisible(!visible)
  }
  return (
    <>
      <S.NavBurger
        style={theme}
        onClick={toggleVisibility}
        onKeyDown={toggleVisibility}
        role="button"
        tabIndex="0"
      >
        <S.BurgerLine />
        <S.BurgerLine />
        <S.BurgerLine />
      </S.NavBurger>
      {!visible && <Menu />}
    </>
  )
}
