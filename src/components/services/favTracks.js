import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { refreshToken } from '../../api/api'

const DATA_TAG = { type: 'FavTracks', id: 'LIST' }

export default function parseJwt(token) {
  let jsonPayload

  try {
    let base64Url = token.split('.')[1]
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
        })
        .join('')
    )

    jsonPayload = JSON.parse(jsonPayload)
  } catch (e) {
    jsonPayload = {}
  }

  return jsonPayload
}

export const checkToken = async () => {
  const freshToken = localStorage.getItem('refreshToken')
  const accessToken = localStorage.getItem('token')
  console.log('freshToken', freshToken)

  const tokenParsed = parseJwt(accessToken)
  if (
    !freshToken ||
    Date.now() >= Number(parseJwt(freshToken)?.exp || 0) * 1000
  ) {
    console.log('cringe')
    console.log(parseJwt(freshToken))
    localStorage.removeItem('token')
    return
  }
  if (!tokenParsed || Date.now() >= Number(tokenParsed?.exp || 0) * 1000) {
    const newToken = await refreshToken(freshToken)
    localStorage.setItem('token', newToken.access)
  }
  console.log('result', localStorage.getItem('token'))
}

const getTokenAccess = () => {
  const accessToken = localStorage.getItem('token')

  return accessToken
}

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://skypro-music-api.skyeng.tech/catalog/track/',
})

const baseQueryWithTokensCheck = async (args, api, extraOptions) => {
  await checkToken()

  let result = await baseQuery(args, api, extraOptions)
  if (result.error && result.error.status === 401) {
    localStorage.removeItem('token')
  }
  return result
}

export const favoriteTracksApi = createApi({
  reducerPath: 'tracksAPI',
  baseQuery: baseQueryWithTokensCheck,
  endpoints: (builder) => ({
    getMyTracks: builder.query({
      query: () => {
        return {
          url: 'favorite/all/',
          headers: { Authorization: `Bearer ${getTokenAccess()}` },
        }
      },
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: DATA_TAG.type, id })),
        DATA_TAG,
      ],
    }),

    likeTrack: builder.mutation({
      query(data) {
        const { id } = data

        return {
          url: `${id}/favorite/`,
          headers: { Authorization: `Bearer ${getTokenAccess()}` },
          method: 'POST',
        }
      },
      invalidatesTags: [DATA_TAG],
    }),

    dislikeTrack: builder.mutation({
      query: ({ id }) => ({
        url: `${id}/favorite/`,
        headers: { Authorization: `Bearer ${getTokenAccess()}` },
        method: 'DELETE',
      }),
      invalidatesTags: (post) => [{ type: DATA_TAG.type, id: post?.id }],
    }),
  }),
})

export const {
  useGetMyTracksQuery,
  useLikeTrackMutation,
  useDislikeTrackMutation,
} = favoriteTracksApi
