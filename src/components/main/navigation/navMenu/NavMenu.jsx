import * as S from './NavMenu.styles'
import ThemeSwitcher from '../../../utils/themeSwitcher'
import { useThemeContext } from '../../../contexts/theme-switcher/theme'
import { useSetUser } from '../../../contexts/user/user'

function MenuItem(props) {
  const { theme } = useThemeContext()

  return (
    <S.MenuItem>
      {/* <S.MenuLink href="http://">{props.name}</S.MenuLink> */}
      <S.MenuLink
        style={theme}
        className="App-link"
        to={props?.path}
        onClick={props?.onClick}
      >
        {props.name}
      </S.MenuLink>
    </S.MenuItem>
  )
}

export default function Menu() {
  const setUser = useSetUser()

  const logOutHandle = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    setUser(null)
  }
  const links = [
    { name: 'Главное', path: '/' },
    { name: 'Мои треки', path: '/fav' },
    { name: 'Выйти', onClick: logOutHandle },
  ]
  return (
    <S.NavMenu>
      <S.MenuList>
        {links.map((link, index) => (
          <MenuItem
            name={link.name}
            path={link?.path}
            key={index}
            onClick={link?.onClick}
          />
        ))}
      </S.MenuList>
      <ThemeSwitcher />
    </S.NavMenu>
  )
}
