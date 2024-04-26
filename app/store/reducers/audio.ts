import {createSlice, PayloadAction} from '@reduxjs/toolkit'

import {IAudioState} from '../models/audio'
import {articlesAudioApi} from '../../api/articlesAudioApi.ts'
import {IAudiOption} from '../../screens'

const initialState: IAudioState = {
  error: null,
  loading: false,
  audios: [],
  audioTrack: [],
}

const audioSlice = createSlice({
  name: 'audio',
  initialState,
  reducers: {
    setTrackData(state, {payload}: PayloadAction<IAudiOption>) {
      const filteredTracks = state.audioTrack.filter(
        item => item.id !== payload.id,
      )
      state.audioTrack = [payload, ...filteredTracks]
    },
  },
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

export const {setTrackData} = audioSlice.actions

export default audioSlice.reducer
