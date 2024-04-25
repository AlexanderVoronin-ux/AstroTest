import {createSlice} from '@reduxjs/toolkit'
import {IAudioState} from '../models/audio'
import {articlesAudioApi} from '../../api/articlesAudioApi.ts'

const initialState: IAudioState = {
  error: null,
  loading: false,
  audios: [],
}

const audioSlice = createSlice({
  name: 'audio',
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
          state.audios = action.payload.audio
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

export const {} = audioSlice.actions

export default audioSlice.reducer
