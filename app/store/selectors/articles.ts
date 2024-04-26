import {RootState} from '../rootReducer'

// articles selectors
export const selectArticles = (state: RootState) => state.articles.articles

// audio selectors
export const selectAudios = (state: RootState) => state.audio.audios
export const selectAudioTrack = (state: RootState) => state.audio.audioTrack
