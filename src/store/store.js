import { configureStore } from '@reduxjs/toolkit'
import trackReducer from './reducers/tracks'
import { favoriteTracksApi } from '../components/services/favTracks'

export const store = configureStore({
  reducer: {
    player: trackReducer,
    [favoriteTracksApi.reducerPath]: favoriteTracksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(favoriteTracksApi.middleware),
})
