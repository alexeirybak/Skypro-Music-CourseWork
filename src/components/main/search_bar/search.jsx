import { useDispatch, useSelector } from 'react-redux'
import * as S from './search.styles'
import { searchSelector } from '../../../store/selectors/tracks'
import { searchAction } from '../../../store/actions/creators/tracks'

export default function Search() {
  const search = useSelector(searchSelector)
  const dispatch = useDispatch()
  const searchHandle = (e) => {
    const text = e.target.value
    dispatch(searchAction(text))
  }
  return (
    <S.CenterblockSearch>
      <S.SearchSvg>
        <use xlinkHref="img/icon/sprite.svg#icon-search" />
      </S.SearchSvg>
      <S.SearchText
        onChange={searchHandle}
        value={search}
        type="search"
        placeholder="Поиск"
        name="search"
      />
    </S.CenterblockSearch>
  )
}
