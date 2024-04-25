import {RootState} from '../rootReducer'

export const selectArticles = (state: RootState) => state.articles.articles
export const selectAudios = (state: RootState) => state.audio.audios
