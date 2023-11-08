import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as S from './Authpage.styles'
import { loginUser, registerUser } from '../../api/api'
import { useSetUser } from '../../components/contexts/user/user'

export default function AuthPage({ isLoginMode = false }) {
  const navigate = useNavigate()
  const setUser = useSetUser()
  const [error, setError] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [disabledButton, setDisabledButton] = useState(false)
  const validate = () => {
    if (!password || !email) {
      throw new Error('Укажите почту/пароль')
    }
    if (password !== repeatPassword && !isLoginMode) {
      throw new Error('Пароли не совпадают')
    }
  }

  const handleLogin = async () => {
    try {
      validate()
      setDisabledButton(true)
      const user = await loginUser(email, password)
      setDisabledButton(false)
      setUser(user)
      localStorage.setItem('user', JSON.stringify(user))
      navigate('/')
    } catch (error) {
      setError(error.message)
      setDisabledButton(false)
    }
  }

  const handleRegister = async () => {
    try {
      validate()
      setDisabledButton(true)
      const user = await registerUser(email, password, email)
      setDisabledButton(false)
      setUser(user)
      localStorage.setItem('user', JSON.stringify(user))
      navigate('/')
    } catch (error) {
      setError(error.message)
      setDisabledButton(false)
    }
  }

  useEffect(() => {
    setError(null)
  }, [isLoginMode, email, password, repeatPassword])
  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to="/login">
          <S.ModalLogo>
            <S.ModalLogoImage
              style={{ background: 'red' }}
              src="/img/logo.png"
              alt="logo"
            />
          </S.ModalLogo>
        </Link>
        {isLoginMode ? (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value)
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton onClick={handleLogin} disabled={disabledButton}>
                Войти
              </S.PrimaryButton>
              <Link to="/register">
                <S.SecondaryButton>Зарегистрироваться</S.SecondaryButton>
              </Link>
            </S.Buttons>
          </>
        ) : (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value)
                }}
              />
              <S.ModalInput
                type="password"
                name="repeat-password"
                placeholder="Повторите пароль"
                value={repeatPassword}
                onChange={(event) => {
                  setRepeatPassword(event.target.value)
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton
                onClick={handleRegister}
                disabled={disabledButton}
              >
                Зарегистрироваться
              </S.PrimaryButton>
            </S.Buttons>
          </>
        )}
      </S.ModalForm>
    </S.PageContainer>
  )
}
