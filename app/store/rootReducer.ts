import {combineReducers} from '@reduxjs/toolkit'

import articlesReducer from '../store/reducers/articles.ts'
import audioReducer from '../store/reducers/audio.ts'
import {articlesAudioApi} from '../api/articlesAudioApi.ts'

export const rootReducer = combineReducers({
  articles: articlesReducer,
  audio: audioReducer,
  [articlesAudioApi.reducerPath]: articlesAudioApi.reducer,
})

export type RootState = ReturnType<typeof rootReducer>
