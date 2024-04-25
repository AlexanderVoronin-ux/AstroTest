import {createSlice} from '@reduxjs/toolkit'

import {IArticlesState} from '../models/articles'

const initialState: IArticlesState = {
  error: null,
  loading: false,
  articles: null,
}

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers: builder => {},
})

export const {} = articlesSlice.actions

export default articlesSlice.reducer
