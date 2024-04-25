import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {URL} from '@env'

interface ArticlesAudioResponse {
  data: any
}

export const articlesAudioApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${URL}`,
    prepareHeaders: headers => {
      headers.set('content-Type', 'application/json; charset=utf-8')
      return headers
    },
  }),
  endpoints: builder => ({
    getPokemonByName: builder.query<ArticlesAudioResponse, void>({
      query: () => ({
        url: 'affirmations/test',
        method: 'get',
      }),
      transformResponse: (response: ArticlesAudioResponse) => response,
    }),
  }),
})

export const {useGetPokemonByNameQuery} = articlesAudioApi
