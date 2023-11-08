import {
  CURRENT_TRACK,
  PLAY_TRACK,
  PAUSE_TRACK,
  NEXT_TRACK,
  PREVIOUS_TRACK,
  CURRENT_PLAYLIST,
  SHUFFLE_PLAYLIST,
  REPEAT_TRACK,
  PAGE_PLAYLIST,
  FILTER_AUTHOR,
  FILTER_YEAR,
  FILTER_GENRE,
  SEARCH,
} from '../types/tracks.js'

export const setCurrentTrack = (item) => ({
  type: CURRENT_TRACK,
  payload: item,
})

export const playTrack = () => ({
  type: PLAY_TRACK,
})

export const pauseTrack = () => ({
  type: PAUSE_TRACK,
})

export const nextTrack = (item) => ({
  type: NEXT_TRACK,
  payload: item,
})

export const previousTrack = (item) => ({
  type: PREVIOUS_TRACK,
  payload: item,
})

export const setCurrentPlaylist = (playlist) => ({
  type: CURRENT_PLAYLIST,
  payload: playlist,
})

export const shufflePlaylist = () => ({
  type: SHUFFLE_PLAYLIST,
})

export const repeatTrack = () => ({
  type: REPEAT_TRACK,
})

export const pagePlaylist = (playlist) => ({
  type: PAGE_PLAYLIST,
  payload: playlist,
})

export const filterAuthor = (authorsList) => ({
  type: FILTER_AUTHOR,
  payload: authorsList,
})

export const filterYear = (releaseYear) => ({
  type: FILTER_YEAR,
  payload: releaseYear,
})

export const filterGenre = (genresList) => ({
  type: FILTER_GENRE,
  payload: genresList,
})

export const searchAction = (value) => ({
  type: SEARCH,
  payload: value,
})
