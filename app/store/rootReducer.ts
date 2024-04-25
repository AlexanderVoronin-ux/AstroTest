import {combineReducers} from '@reduxjs/toolkit'

import articlesReducer from '../store/reducers/articles.ts'
import audioReducer from '../store/reducers/audio.ts'

export const rootReducer = combineReducers({
  articles: articlesReducer,
  audio: audioReducer,
})

export type RootState = ReturnType<typeof rootReducer>
