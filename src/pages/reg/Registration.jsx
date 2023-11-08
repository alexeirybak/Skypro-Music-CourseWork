import { Link } from 'react-router-dom'
import * as S from './Registration.styles'
import Logo from '../../components/main/navigation/logo/logo'

function Registration() {
  return (
    <S.Reg>
      <Logo />
      <S.RegText placeholder="Логин" />
      <S.RegText placeholder="Пароль" />
      <S.RegText placeholder="Повторите пароль" />
      <Link to="/reg">Зарегистрироваться</Link>
    </S.Reg>
  )
}

export default Registration
