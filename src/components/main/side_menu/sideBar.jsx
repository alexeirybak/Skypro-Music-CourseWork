import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './sideBar.styles'
import playlist01 from './img/playlist01.png'
import playlist02 from './img/playlist02.png'
import playlist03 from './img/playlist03.png'
import { useSetUser, useUser } from '../../contexts/user/user'

export function SidebarItem(props) {
  const url =
    props.id === '1' ? playlist01 : props.id === '2' ? playlist02 : playlist03
  console.log(props)
  return (
    <S.SidebarItem>
      {props.loading ? (
        <Skeleton width="250px" height="150px" />
      ) : (
        <S.SidebarLink to={`/${props.path}/:${props.id}`}>
          <S.SidebarImg src={url} alt="playlist #" />
        </S.SidebarLink>
      )}
    </S.SidebarItem>
  )
}

{
  /* <S.SidebarLink to={`/${props.path}/:${props.id}`}> */
}

export default function SideBar() {
  const compilations = [
    { id: '1', path: 'category', imgUrl: playlist01 },
    { id: '2', path: 'category', imgUrl: playlist02 },
    { id: '3', path: 'category', imgUrl: playlist03 },
  ]
  // { id: '1', path: 'category', imgUrl: './img/playlist01.png' },
  const user = useUser()

  const setUser = useSetUser()

  const logOutHandle = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    setUser(null)
  }
  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>{user?.username}</S.SidebarPersonalName>
        <S.SidebarAvatar onClick={logOutHandle}>
          <use xlinkHref="img/icon/sprite.svg#icon-logout" />
        </S.SidebarAvatar>
      </S.SidebarPersonal>
      <S.SidebarBlock>
        <S.SidebarList>
          {compilations.map((compilation) => (
            <SidebarItem
              key={compilation.id}
              id={compilation.id}
              path={compilation.path}
              imageUrl={compilation.imgUrl}
            />
          ))}
        </S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  )
}
