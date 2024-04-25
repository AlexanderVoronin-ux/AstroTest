import {RootState} from '../rootReducer'

export const selectArticles = (state: RootState) => state.articles.articles
