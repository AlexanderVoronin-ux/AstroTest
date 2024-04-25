import {createSlice} from '@reduxjs/toolkit'

import {IArticlesState} from '../models/articles'
import {articlesAudioApi} from '../../api/articlesAudioApi.ts'

const initialState: IArticlesState = {
  error: null,
  loading: false,
  articles: [],
}

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addMatcher(
        articlesAudioApi.endpoints.getArticlesAudio.matchPending,
        state => {
          state.error = null
          state.loading = true
        },
      )
      .addMatcher(
        articlesAudioApi.endpoints.getArticlesAudio.matchFulfilled,
        (state, action) => {
          state.articles = action.payload.articles
          state.loading = false
        },
      )
      .addMatcher(
        articlesAudioApi.endpoints.getArticlesAudio.matchRejected,
        state => {
          state.error = null
          state.loading = false
        },
      )
  },
})

export const {} = articlesSlice.actions

export default articlesSlice.reducer
