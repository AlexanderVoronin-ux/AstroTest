import {createSlice} from '@reduxjs/toolkit'
import {IAudioState} from '../models/audio'

const initialState: IAudioState = {
  error: null,
  loading: false,
  audios: null,
}

const audioSlice = createSlice({
  name: 'audio',
  initialState,
  reducers: {},
  extraReducers: builder => {},
})

export const {} = audioSlice.actions

export default audioSlice.reducer
