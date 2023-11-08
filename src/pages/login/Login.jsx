import { Link } from 'react-router-dom'
import * as S from './Login.styles'
import Logo from '../../components/main/navigation/logo/logo'

function Login() {
  return (
    <S.Login>
      <Logo />
      <S.LoginText placeholder="Логин" />
      <S.LoginText placeholder="Пароль" />
      <Link to="/">Войти</Link>
      <Link to="/reg">Зарегистрироваться</Link>
    </S.Login>
  )
}

export default Login
