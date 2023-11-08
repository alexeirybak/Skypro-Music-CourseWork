import GlobalStyle from '../../globalstyles'
import Nav from '../../components/main/navigation/nav/nav'
import Footer from '../../components/main/footer/footer'
import ControlBar from '../../components/player/playerbar'
import * as S from '../../components/main/center_block/center.styles'

function NotFound(props) {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <S.Centerblock>
        <S.CenterblockContent>
          <div>
            <h1>404</h1>
            <h1>Страница не найдена</h1>
            <h1>Возможно, она была удалена или перенесена на другой адрес</h1>
          </div>
          <ControlBar loading={props.loading} />
        </S.CenterblockContent>
      </S.Centerblock>

      <Footer />
    </div>
  )
}
export default NotFound
