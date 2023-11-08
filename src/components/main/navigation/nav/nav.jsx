import * as S from './nav.styles'
import Logo from '../logo/logo'
import Burger from '../burger/burger'
import { useThemeContext } from '../../../contexts/theme-switcher/theme'

export default function Nav() {
  const { theme } = useThemeContext()

  return (
    <S.MainNav style={theme}>
      <Logo />
      <Burger />
    </S.MainNav>
  )
}
