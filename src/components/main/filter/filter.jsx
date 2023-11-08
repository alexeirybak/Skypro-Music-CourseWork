import { useMemo, useState } from 'react'
import * as S from './filter.styles'
import { useDispatch, useSelector } from 'react-redux'
import {
  filterSelector,
  pagePlaylistSelector,
} from '../../../store/selectors/tracks'
import {
  filterAuthor,
  filterGenre,
  filterYear,
} from '../../../store/actions/creators/tracks'

export function FilterType(props) {
  const isSelected = (item) => {
    if (props.date)
      return (
        (props.filter === '>' && item === 'более новые') ||
        (props.filter === '<' && item === 'более старые')
      )
    return !!props.filter.find((elem) => elem === item)
  }
  return (
    <S.FilterBox id="style-1">
      <S.FilterList>
        {props.list.map((item) => (
          <S.FilterItem
            key={item}
            onClick={() => props.clickHandler(item)}
            selected={isSelected(item)}
          >
            {item}
          </S.FilterItem>
        ))}
      </S.FilterList>
    </S.FilterBox>
  )
}

export default function Filter() {
  const pagePlaylist = useSelector(pagePlaylistSelector)
  const filter = useSelector(filterSelector)
  const dispatch = useDispatch()
  // console.log(filter)
  const [Authors, Genres] = useMemo(() => {
    const list1 = [],
      list2 = []
    pagePlaylist.forEach(function (item) {
      if (!list1.find((elem) => elem === item.author)) list1.push(item.author)
      if (!list2.find((elem) => elem === item.genre)) list2.push(item.genre)
    })

    return [list1, list2]
  }, [pagePlaylist])

  const authorChangeHandler = (author) => {
    const newList = [...filter.author]
    const index = newList.indexOf(author)
    if (index !== -1) {
      newList.splice(index, 1)
    } else newList.push(author)
    dispatch(filterAuthor(newList))
  }

  const genreChangeHandler = (genre) => {
    const newList = [...filter.genre]
    const index = newList.indexOf(genre)
    if (index !== -1) {
      newList.splice(index, 1)
    } else newList.push(genre)
    dispatch(filterGenre(newList))
  }

  const yearChangeHandler = (year) => {
    if (
      (filter.year === '>' && year === ByTime[0]) ||
      (filter.year === '<' && year === ByTime[1])
    )
      dispatch(filterYear(null))
    else {
      if (year === ByTime[0]) dispatch(filterYear('>'))
      else dispatch(filterYear('<'))
    }
  }
  const ByTime = ['более новые', 'более старые']

  const [SelectedFilter, setFilter] = useState(true)
  const toggleSelected = (filter) => {
    setFilter(SelectedFilter === filter ? null : filter)
  }

  return (
    <S.CenterblockFilter>
      <S.FilterTitle>Искать по:</S.FilterTitle>
      <S.FilterWrapper>
        <S.FilterButton
          active={SelectedFilter === 'author'}
          onClick={() => toggleSelected('author')}
          onKeyDown={() => toggleSelected('author')}
          role="button"
          tabIndex="0"
        >
          исполнителю
        </S.FilterButton>
        {SelectedFilter === 'author' && (
          <FilterType
            list={Authors}
            clickHandler={authorChangeHandler}
            filter={filter.author}
          />
        )}
      </S.FilterWrapper>
      <S.FilterWrapper>
        <S.FilterButton
          active={SelectedFilter === 'bytime'}
          onClick={() => toggleSelected('bytime')}
          onKeyDown={() => toggleSelected('bytime')}
          role="button"
          tabIndex="0"
        >
          году выпуска
        </S.FilterButton>
        {SelectedFilter === 'bytime' && (
          <FilterType
            list={ByTime}
            clickHandler={yearChangeHandler}
            filter={filter.year}
            date={true}
          />
        )}
      </S.FilterWrapper>
      <S.FilterWrapper>
        <S.FilterButton
          active={SelectedFilter === 'genre'}
          onClick={() => toggleSelected('genre')}
          onKeyDown={() => toggleSelected('genre')}
          role="button"
          tabIndex="0"
        >
          жанру
        </S.FilterButton>
        {SelectedFilter === 'genre' && (
          <FilterType
            list={Genres}
            clickHandler={genreChangeHandler}
            filter={filter.genre}
          />
        )}
      </S.FilterWrapper>
    </S.CenterblockFilter>
  )
}
